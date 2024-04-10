<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Inertia\Inertia;


class LoginController extends Controller
{

    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(LoginRequest $request)
    {
        if(Auth::attempt($request->only('email', 'password'), $request->remember)){
            return Redirect::route('home');
               
        }
        
        return Redirect::back()->withErrors($request->messages());
    }


}