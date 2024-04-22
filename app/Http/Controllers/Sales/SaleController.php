<?php

namespace App\Http\Controllers\Sales;

use App\Events\StockBroker\OutOfProductStockEvent;
use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Http\Requests\Sales\CreateSaleRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index(Request $request)
    {
        // dd(
        //     Sale::with(['product', 'size'])
        //     ->selectRaw('*, YEAR(created_at) AS year, MONTH(created_at) AS month')
        //     ->groupByRaw('YEAR(created_at), MONTH(created_at)')
        //     ->orderByRaw('YEAR(created_at), MONTH(created_at)')
        //     ->paginate(1)
        // );
        return Inertia::render('SalesLayout', [
                
            'sales' => Sale::with(['product', 'size'])
                    ->latest()
                    ->selectRaw('*, YEAR(created_at) AS year, MONTH(created_at) AS month')
                    ->whereYear('created_at', '=', $request->only('year'))
                    ->whereMonth('created_at', '=', $request->only('month'))
                    ->get(),
            'years' => Sale::selectRaw('YEAR(created_at) AS year')
                    ->latest()
                    ->groupByRaw('YEAR(created_at)')
                    ->orderByRaw('YEAR(created_at) DESC')
                    ->get(),
            'months' => Sale::selectRaw('MONTH(created_at) AS month')
                    ->latest()
                    ->whereYear('created_at', '=', $request->only('year'))
                    ->groupByRaw('MONTH(created_at)')
                    ->orderByRaw('MONTH(created_at)')
                    ->get(),
        ]);
    }

    public function store(CreateSaleRequest $request)
    {
        // * AN EVENT WHICH DETERMINES IF A PRODUCT IS LOW ON STOCK
        
        OutOfProductStockEvent::dispatch(
            Sale::create($request->validated())
        );
    }
}