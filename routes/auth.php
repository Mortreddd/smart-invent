<?php

use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Products\ProductController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/', HomeController::class)->name('home');
    Route::post('/logout', LogoutController::class)->name('logout');


    Route::controller(ProductController::class)->group(function(){
        Route::get('/products', 'index')->name('products.index');
        Route::post('/product/create', 'store')->name('product.store');
        Route::get('/product/edit/{product_id}', 'edit')->name('product.edit');
        
    });


});