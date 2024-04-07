<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Support\Facades\DB;

class ExpenseResourceController extends Controller
{
    public function index(Request $request)
    {
        return new ExpenseResource(
            Expense::select(DB::raw('SUM(amount) as total_expense'), DB::raw("MONTH(created_at) AS month"), DB::raw('YEAR(created_at) as year'))
            ->whereBetween('created_at', [now()->subYear(), now()])
            ->groupByRaw('MONTH(created_at), YEAR(created_at)')
            ->orderByRaw('MONTH(created_at), YEAR(created_at)')
            ->get()
        );
    }
}