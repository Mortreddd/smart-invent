<?php

namespace App\Http\Controllers\Auth;

use App\Events\ForgotPasswordEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ForgotPasswordController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/ForgotPassword'); 
    }


    public function verify(ForgotPasswordRequest $request)
    {
       
        ForgotPasswordEvent::dispatch($request->email);

        Redirect::back()->with(['success' => 'Email was sent successfully']);

    }
}