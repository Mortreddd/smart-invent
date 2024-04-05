<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\Sale;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $sales = Sale::with(['product'])->latest()->limit(10)->get();
        $products = Product::withSum('sales', 'earned')->groupBy('id')->get();
        $expense = Expense::sum('price');
        $income = Sale::sum('earned');
        $profit = $income - $expense;
        $monthlyExpense = Expense::groupByRaw('MONTH(created_at)')->sum('price');
        
        // dd($monthLyExpenseData);
        return Inertia::render('Dashboard', compact(
            'sales', 'products', 'income', 'expense', 'profit', 'monthlyExpense'
        ));

    }
}