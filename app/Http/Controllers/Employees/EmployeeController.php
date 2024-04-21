<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Inertia::render('EmployeesLayout', [
            'employees' => Employee::all()
        ]);
    }
}