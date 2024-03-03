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
            'email.exists' => 'Credentials do not match our record',
            'email.email' => 'Input field must be a valid email',
            'email.required' => 'Fill up the required field',
            'password.required' => 'Fill up the required field'
        ];
    }
}