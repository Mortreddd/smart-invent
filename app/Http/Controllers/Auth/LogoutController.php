<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Redirect;



class LogoutController extends Controller
{
    public function __invoke(Request $request)
    {
        Auth::logout();
        return Redirect::route('login')->with(['success' => 'Logout Successfully!']);
    }
}