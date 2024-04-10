<?php

use App\Http\Controllers\Api\ExpenseResourceController;
use App\Http\Controllers\Api\SalesResourceController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function() {

    Route::get('/expenses',[ExpenseResourceController::class, 'index'])->name('expenses.api.index');


    Route::get('/sales', [SalesResourceController::class, 'index'])->name('sales.api.index');


    Route::get('/sales/chart', [SalesResourceController::class, 'chart'])->name('sales.api.yearly');

    Route::get('/expenses/chart', [ExpenseResourceController::class, 'chart'])->name('expenses.api.yearly');

});