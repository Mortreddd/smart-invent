<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ResetPasswordRequest;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{
    public function index(Request $request, $token )
    {
        $email = $request->email;
        return Inertia::render('Auth/ResetPassword', compact('token', 'email'));
    }


    public function verify(ResetPasswordRequest $request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                Event::dispatch(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ? Redirect::route('login')->with('status', __($status))
            : Redirect::back()->withErrors($request->messages());
    }
}