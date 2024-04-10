<?php

namespace App\Http\Controllers\Firebase;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;
use App\Models\Employee;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Exception;
class LoginUsingFirebaseController extends Controller
{
    public function __invoke(Request $request)
    {
        $auth = Firebase::auth();
        try{
            $user = $auth->getUser($request->uid);
            Auth::login(Employee::firstWhere('email', $user->providerData[0]->email));
            
            return Redirect::route('home')->with(['success' => 'Welcome back '. Auth::user()->first_name]);
        }
        catch(Exception $e) {
            return Redirect::back()->with(['email' => 'Your email do not match our credentials']);
        } 

    }
}