<?php

use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Employees\EmployeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Products\ProductController;
use App\Http\Controllers\Sales\SaleController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/', HomeController::class)->name('home');
    Route::post('/logout', LogoutController::class)->name('logout');


    Route::controller(ProductController::class)->prefix('products')->group(function(){
        Route::get('/', 'index')->name('products.index');
        Route::post('/create', 'store')->name('product.store');
        Route::get('/edit/{product_id}', 'edit')->name('product.edit');
        

        Route::delete('/product/delete/{product_id}/{size_id?}', 'destroy')->name('product.destroy');
    });

    Route::controller(SaleController::class)->prefix('sales')->group(function () {
        Route::get('/', 'index')->name('sales.index');
    });

    Route::controller(EmployeeController::class)->prefix('employees')->group(function () {
        Route::get('/', 'index')->name('employees.index');
        Route::post('/create', 'store')->name('employee.store');
        Route::get('/edit/{employee_id}', 'edit')->name('employee.edit');
        Route::delete('/employee/delete/{employee_id}', 'destroy')->name('employee.destroy');
    });
});