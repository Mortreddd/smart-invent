<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => 'email|required',
            'password' => 'required|string',
            'remember' => 'nullable'
        ];
    }

    public function messages()
    {
        return [
            'email' => 'Credentials do not match our record',
            'email.required' => 'Fill up the required field',
            'password.required' => 'Fill up the required field',
            'password' => 'Credentials do not match our record',
        ];
    }
}