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
        if(!$request->hasFile('image')){
            return Redirect::back()->with('error', 'Image is required');
        }
        
        $fileName  = 'products/'.Str::random(16).$request->file('image')->extension();
        $request->file('image')->storeAs('public/products', $fileName);
        $product = Product::create([
            'name' => $request->name,
            'image' => $fileName,
        ]);
        
        return Redirect::route('products.index')->with(['success' => 'Successfully created product']);
    }

    public function update(Request $request)
    {
        //
    }
}