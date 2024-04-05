<?php

namespace App\Http\Controllers\Sales;

use App\Events\StockBroker\OutOfProductStockEvent;
use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Http\Requests\Sales\CreateSaleRequest;
use App\Models\Stock;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    public function index()
    {
        //
    }

    public function store(CreateSaleRequest $request)
    {
        // * AN EVENT WHICH DETERMINES IF A PRODUCT IS LOW ON STOCK
        
        OutOfProductStockEvent::dispatch(
            Sale::create($request->validated())
        );
    }
}