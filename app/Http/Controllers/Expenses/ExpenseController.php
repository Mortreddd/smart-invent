<?php

namespace App\Http\Controllers\Expenses;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('ExpensesLayout', [
            'expenses' => Expense::latest()
                    ->selectRaw('*, YEAR(created_at) AS year, MONTH(created_at) AS month')
                    ->whereYear('created_at', '=', $request->only('year'))
                    ->whereMonth('created_at', '=', $request->only('month'))
                    ->get(),
            'years' => Expense::selectRaw('YEAR(created_at) AS year')
                    ->latest()
                    ->groupByRaw('YEAR(created_at)')
                    ->orderByRaw('YEAR(created_at) DESC')
                    ->get(),
            'months' => Expense::selectRaw('MONTH(created_at) AS month')
                    ->latest()
                    ->whereYear('created_at', '=', $request->only('year'))
                    ->groupByRaw('MONTH(created_at)')
                    ->orderByRaw('MONTH(created_at)')
                    ->get(),
        ]);
    }
}