<?php

use App\Http\Controllers\Auth\EmailConfirmationController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Firebase\LoginUsingFirebaseController;
use Illuminate\Support\Facades\Route;




Route::middleware(['guest'])->group(function() {
    Route::get('/forgot-password', [ForgotPasswordController::class, 'index'])->name('password.request');
    Route::post('/forgot-password', [ForgotPasswordController::class, 'verify'])->name('password.email');

    Route::controller(ResetPasswordController::class)->group(function(){
        Route::get('/reset-password/{token}', 'index')->name('password.reset');
        Route::post('/reset-password', 'verify')->name('password.update');

    });

    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login.verify');
});


// * FIREABASE LOGIN
Route::middleware(['guest'])->group(function() {
    Route::post('/firebase/login', LoginUsingFirebaseController::class)->name('firebase.login');
});

Route::controller(EmailConfirmationController::class)->middleware(['guest'])->group(function() {
    Route::get('/email/verify/{employee_id}', 'index')->name('email.confirmation');
});


require(__DIR__ . '/auth.php');