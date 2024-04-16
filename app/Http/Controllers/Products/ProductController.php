<?php

namespace App\Http\Controllers\Products;

use App\Events\Product\CreateNewProductEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Models\Product;
use App\Models\Size;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
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

    public function edit(int $product_id)
    {
        return Inertia::render('Product/EditProduct', [
            'product' => Product::findOrFail($product_id)
        ]);
    }

    public function update(Request $request, int $product_id)
    {
        $product = Product::find($product_id);
        // * STILL PENDING 
        return Redirect::back();
    }

    public function destroy(Request $request, int $product_id)
    {
        Product::find($product_id)->delete();
        return Redirect::back();
    }
}