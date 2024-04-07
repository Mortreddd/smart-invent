<?php

use App\Http\Controllers\Api\ExpenseResourceController;
use App\Http\Controllers\Api\SalesResourceController;
use App\Http\Resources\SalesResource;
use App\Models\Expense;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ExpenseResource;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

Route::get('/expenses', function (Request $request) {
    return new ExpenseResource(Expense::latest()
                ->paginate(10));
})->name('expenses.api.index');

Route::get('/sales', function (Request $request){
    return new SalesResource(Sale::with(['product', 'size'])
                ->latest()
                ->paginate(10));
})->name('sales.api.index');


Route::get('/sales/chart', [SalesResourceController::class, 'index'])->name('sales.api.yearly');

Route::get('/expenses/chart', [ExpenseResourceController::class, 'index'])->name('expenses.api.yearly');