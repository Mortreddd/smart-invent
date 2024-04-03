<?php

namespace App\Http\Controllers\Auth;

use App\Actions\ResetPasswordEmployee;
use App\Events\ResetPasswordEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ResetPasswordRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ResetPasswordController extends Controller
{

    public function index(Request $request, $token )
    {
        $email = $request->email;
        return Inertia::render('Auth/ResetPassword', compact('token', 'email'));
    }


    public function verify(Request $request)
    {
        $validToken = DB::table('password_reset_tokens')->where([
            'email' => $request->email,
            'token' => $request->token 
        ])
        ->first();
        
        if(!$validToken){
            return Redirect::back()->with(['token' => 'Invalid token']);
        }
        else if($validToken->created_at > now()->subMinutes(15)){
            return Redirect::back()->with(['token' => 'Token already expired']);
        }

        Employee::firstWhere('email', $request->email)
            ->update([
                'password' => Hash::make($request->password),
                'updated_at' => Carbon::now()
            ]);
        $validToken->delete();

        return Redirect::route('login')->with(['success' => 'Successfully update password']);
    }
}