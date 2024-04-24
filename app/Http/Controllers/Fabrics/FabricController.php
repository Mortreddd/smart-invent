<?php

namespace App\Http\Controllers\Fabrics;

use App\Http\Controllers\Controller;
use App\Models\Fabric;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FabricController extends Controller
{
    public function index(Request $request)
    {   
        // dd(Fabric::with('course')->get());
        return Inertia::render('FabricsLayout', [
            'fabrics' => Fabric::with('course')->get()
        ]);
    }
}