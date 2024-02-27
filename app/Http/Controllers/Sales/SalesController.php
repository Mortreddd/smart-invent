<?php

namespace App\Http\Controllers\Sales;

use App\Events\Materials\MaterialsAreLowEvent;
use App\Http\Controllers\Controller;
use App\Jobs\Sales\SalesReportJob;
use App\Models\Material;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $material = Material::where('stocks', '<=', 10)->get();
        if($material->isNotEmpty())
        {
            event(new MaterialsAreLowEvent($material));
        }
        
        
        return back();

    }
}