<?php

use App\Http\Resources\SalesResource;
use App\Models\Expense;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ExpenseResource;


Route::get('/expenses', function (Request $request) {
    return new ExpenseResource(Expense::with(['fabric'])
                ->latest()
                ->paginate(10));
})->name('expenses.api.index');

Route::get('/sales', function (Request $request){
    return new SalesResource(Sale::with(['product', 'size'])
                ->latest()
                ->paginate(10));
})->name('sales.api.index');