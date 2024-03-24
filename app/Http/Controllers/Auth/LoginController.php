<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{

    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(LoginRequest $request)
    {
        // dd($request->all());
        $credentials = $request->only(['email', 'password']);
        if(Auth::attempt($credentials)){
            return Redirect::route('home');
        }
        return Redirect::back()->withErrors($request->messages());
    }


}