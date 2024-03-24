<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::middleware(['guest'])->group(function() {
    Route::get('/', [LoginController::class, 'index'])->name('login');
});