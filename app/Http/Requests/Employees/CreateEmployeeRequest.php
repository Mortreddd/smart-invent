<?php

namespace App\Http\Requests\Employees;

use Illuminate\Foundation\Http\FormRequest;

class CreateEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'role' => 'required|string',
            'image' => 'required|mimes:png,jpg,jpeg|max:10240',
            'phone' => 'string|required|min:11',
            'gender' => 'in:M,F|required',
            'email' => 'required|email|unique:employees,email',
            'password' => 'required|min:7|string'
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required' => 'First Name is required',
            'middle_name.required' => 'Middle Name is required',
            'last_name.required' => 'Last Name is required',
            'role.required' => 'Role is required',
            'image.mimes' => 'Image must be a valid picture',
            'image.max' => 'Image must not exceed 10MB',
            'image.required' => 'Image is required',
            'phone.min' => 'Phone number must at least 11 digits',
            'phone.required' => 'Phone is required',
            'gender.in' => 'Gender must be between M or F',
            'gender.required' => 'Gender is required',
            'email.email' => 'Email must be a valid email',
            'email.unique' => 'Email is already taken',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password length must atleast 7 characters long',
        ];
    }
}