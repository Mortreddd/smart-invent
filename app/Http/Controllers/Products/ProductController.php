<?php

namespace App\Http\Controllers\Products;

use App\Events\Product\CreateNewProductEvent;
use App\Events\StockBroker\OutOfProductStockEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Models\Product;
use App\Models\Size;
use App\Models\Stock;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        

        return Inertia::render('ProductsLayout', [
            'stocks' => Stock::with(['product', 'size'])->get(),
            'sizes' => Size::all()
        ]);
    }


    public function store(CreateProductRequest $request)
    {
        
        $fileName  = 'products/'.Str::random(16).$request->file('image')->extension();
        $request->file('image')->storeAs('public/products', $fileName);
        
        CreateNewProductEvent::dispatch(
            Product::create([
                'name' => $request->name,
                'image' => $fileName,
                'created_at' => now()
            ])
        );
        
        return Redirect::route('products.index')->with(['success' => 'Successfully created product']);
    }

    public function edit(Request $request, int $product_id)
    {
        return Inertia::render('Product/EditProduct', [
            'sizes' => Size::all(),
            'stock' => Stock::where('product_id', $product_id)
                        ->where('size_id', $request->size_id)
                        ->with(['product', 'size'])
                        ->first()
        ]);
    }

    public function update(Request $request)
    {
        // dd($request->all());
        Product::find($request->product_id)
                ->update([
                    'name' => $request->name,
                    'updated_at' => Carbon::now()
                ]
            );
        $stock = Stock::with(['product', 'size'])
            ->where('product_id', $request->product_id)
            ->where('size_id', $request->size_id)
            ->first();
        
        $stock->update([
            'stock' => $request->stock,
            'price' => $request->price,
            'updated_at' => Carbon::now()
        ]);
        
        // OutofProductStockEvent will determine if the product stocks are running low
        
        OutOfProductStockEvent::dispatchIf($stock->stock <= 30, $stock);
        
        return Redirect::back();
    }

    public function destroy(Request $request, int $product_id)
    {
        Product::find($product_id)->delete();
        Stock::where('size_id', $request->size_id)
            ->where('product_id', $product_id)
            ->delete();
        return Redirect::back();
    }
}