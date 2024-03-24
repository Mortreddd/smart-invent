<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    public function index()
    {
        return Inertia::render('Stocks/Stock', [
            'stocks' => Stock::with(['product', 'size'])->get(),
        ]);
    }
    

    public function store()
    {
        //
    }
}