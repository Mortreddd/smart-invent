<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index()
    {
        return Inertia::render('Products/Product', [
            'products' => Product::with('stocks.size')->get()
        ]);
    }


    public function store(CreateProductRequest $request)
    {
        
        $productPath = 'products/'.Str::random(16);
        Storage::disk('public')->put($productPath, $request->file('image'));
        $product = Product::create([
            'name' => $request->name,
            'image' => $productPath,
        ]);

        return Redirect::route('products.index');
    }

    public function update(Request $request, Product $product)
    {
        //
    }
}