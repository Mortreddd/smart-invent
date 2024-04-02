<?php

use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/', HomeController::class)->name('home');
    Route::post('/logout', LogoutController::class)->name('logout');
});