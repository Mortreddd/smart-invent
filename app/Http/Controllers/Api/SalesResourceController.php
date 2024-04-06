<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SalesResource;
use App\Models\Sale;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class SalesResourceController extends Controller
{
    public function index(Request $request)
    {
        $fromYear = Carbon::now()->subYear();
        $toYear = Carbon::now();
        if($request->has('from') || $request->has('to')){
            $fromYear = Carbon::now()->subYears($request->get('year'));
            $toYear = Carbon::now()->subYears($request->get('to'));
        }
        return new SalesResource(Sale::select(
                DB::raw('SUM(earned) as total_earned'), 
                DB::raw("MONTH(created_at) AS month"), 
                DB::raw('YEAR(created_at) as year')
            )
            ->whereBetween('created_at', [$fromYear, $toYear])
            ->groupByRaw('MONTH(created_at), YEAR(created_at)')
            ->orderByRaw('MONTH(created_at), YEAR(created_at)')
            ->get()
        );
    }
}