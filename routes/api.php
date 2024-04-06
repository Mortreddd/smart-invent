<?php

use App\Http\Resources\SalesResource;
use App\Models\Expense;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ExpenseResource;
use Illuminate\Support\Facades\DB;

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



Route::get('/sales/chart', function(){

    return new SalesResource(
        Sale::select(DB::raw('SUM(earned) as total_earned'), DB::raw("MONTH(created_at) AS month"), DB::raw('YEAR(created_at) as year'))
        ->whereBetween('created_at', [now()->subYear(), now()])
        ->groupByRaw('MONTH(created_at), YEAR(created_at)')
        ->orderByRaw('MONTH(created_at), YEAR(created_at)')
        ->get()
    );
})->name('sales.api.yearly');


Route::get('/expenses/chart', function(){
    
    return new ExpenseResource(
        Expense::select(DB::raw('SUM(price) as total_expense'), DB::raw("MONTH(created_at) AS month"), DB::raw('YEAR(created_at) as year'))
        ->whereBetween('created_at', [now()->subYear(), now()])
        ->groupByRaw('MONTH(created_at), YEAR(created_at)')
        ->orderByRaw('MONTH(created_at), YEAR(created_at)')
        ->get()
    );
})->name('expenses.api.yearly');