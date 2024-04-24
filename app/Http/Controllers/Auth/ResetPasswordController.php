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
        return Inertia::render('Auth/ResetPassword', compact('token'));
    }


    public function verify(ResetPasswordRequest $request)
    {
        $validToken = DB::table('password_reset_tokens')
            ->where([
                'token' => $request->token 
            ])
            ->first();

        if (!$validToken || Carbon::parse($validToken->created_at)->addMinutes(15)->isPast()) {
            return Redirect::back()->withErrors(['token' => 'Token has expired or is invalid']);
        }

        Employee::where('email', $request->email)
            ->update([
                'password' => Hash::make($request->password),
                'updated_at' => Carbon::now()
            ]);
        
        DB::table('password_reset_tokens')
            ->where([
                'email' => $request->email,
                'token' => $request->token 
            ])
            ->delete();

        return Redirect::route('login')->with(['success' => 'Password successfully updated']);
    }
}