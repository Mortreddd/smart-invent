<?php

namespace App\Http\Controllers\Expenses;

use App\Http\Controllers\Controller;
use App\Jobs\Expenses\ExpensesJob;
use Illuminate\Http\Request;

class ExpensesController extends Controller
{
    public function store(Request $request)
    {
        
        

        // ExpensesJob::dispatch();
    }
}