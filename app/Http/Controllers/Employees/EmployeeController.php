<?php

namespace App\Http\Controllers\Employees;

use App\Events\RegisteredEmployeeEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Employees\CreateEmployeeRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class EmployeeController extends Controller
{
    public function index()
    {
        return Inertia::render('EmployeesLayout', [
            'employees' => Employee::all()
        ]);
    }

    public function store(CreateEmployeeRequest $request)
    {
        $file_directory = 'avatars/'.time().$request->first_name.'.'.$request->file('image')->getClientOriginalExtension();
        $request->file('image')->storeAs('public/images', $file_directory);
        
        // The RegisteredEmployeeEvent will send an email confirmation according to their email

        RegisteredEmployeeEvent::dispatch(
            Employee::create([
                'first_name' => Str::title($request->first_name),
                'middle_name' => Str::title($request->middle_name), 
                'last_name' => Str::title($request->last_name),
                'role' => Str::title($request->role),
                'image' => $file_directory,
                'phone' => $request->phone,
                'gender' => Str::title($request->gender),
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'email_verified_at' => null,
            ])
        );
        
        return Redirect::back();
    }

    public function destroy(int $employee_id)
    {
        Employee::findorFail($employee_id)->delete();

        return Redirect::back();
    }
}