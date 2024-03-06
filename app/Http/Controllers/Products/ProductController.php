<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function index()
    {
        return Inertia::render('Products/Product');
    }


    public function store(Request $request)
    {
        //
    }

    public function update(Request $request, Product $product)
    {
        //
    }
}