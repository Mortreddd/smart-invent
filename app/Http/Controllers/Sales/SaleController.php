<?php

namespace App\Http\Controllers\Sales;

use App\Events\StockBroker\OutOfProductStockEvent;
use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Http\Requests\Sales\CreateSaleRequest;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index()
    {
        return Inertia::render('SalesLayout', [
                
            'sales' => Sale::latest('created_at')->with(['product', 'size'])->get()
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