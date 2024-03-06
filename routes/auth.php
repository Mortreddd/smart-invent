<?php
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Products\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->get('/dashboard', HomeController::class)->name('home');
Route::prefix('admin')->get('/dashboard/products', [ProductController::class, 'index'])->name('products.index');