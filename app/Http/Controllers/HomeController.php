<?php

namespace App\Http\Controllers;
use App\Models\Sale;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        // dd(Product::withSum('sales', 'earned')->groupBy('id')->get());
        return Inertia::render('Dashboard', [
            'sales' => Sale::with(['product'])->latest()->limit(10)->get(),
            'products' => Product::withSum('sales', 'earned')->groupBy('id')->get()
        ]);

    }
}