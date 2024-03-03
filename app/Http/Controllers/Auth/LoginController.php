<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{

    public function index()
    {

        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        if($request->authenticate() ){
            return RouteServiceProvider::HOME;
        }

        return back()->withErrors($request->messages());
    }

}