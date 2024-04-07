<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Sale;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function __invoke()
    {
        $products = Product::withSum('sales', 'earned')->groupBy('id')->get();
        $expense = Expense::sum('amount');
        $income = Sale::sum('earned');
        $profit = $income - $expense;
        $monthlyExpense = Expense::groupByRaw('MONTH(created_at)')->sum('amount');
        $expenses = Expense::select(DB::raw('SUM(amount) as total_expense'), DB::raw("MONTH(created_at) AS month"), DB::raw('YEAR(created_at) as year'))
                ->whereBetween('created_at', [now()->subYear(), now()])
                ->groupByRaw('MONTH(created_at), YEAR(created_at)')
                ->orderByRaw('MONTH(created_at), YEAR(created_at)')
                ->get();

        $sales = Sale::select(DB::raw('SUM(earned) as total_earned'), DB::raw("MONTH(created_at) AS month"), DB::raw('YEAR(created_at) as year'))
                ->whereBetween('created_at', [now()->subYear(), now()])
                ->groupByRaw('MONTH(created_at), YEAR(created_at)')
                ->orderByRaw('MONTH(created_at), YEAR(created_at)')
                ->get();
        // dd($monthLyExpenseData);
        return Inertia::render('DashboardLayout', compact([
            'products', 'sales', 'expenses', 'income', 'expense', 'profit', 'monthlyExpense'
        ]));

    }
}