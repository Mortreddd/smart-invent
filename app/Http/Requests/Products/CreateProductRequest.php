<?php

namespace App\Http\Requests\Products;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
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
            'name' => 'required|string|filled',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:4096',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The product name is required',
            'image.required' => 'The product image is required',
            'image.image' => 'The product must be an image',
            'image.mimes' => 'The product image must be a file of type: jpeg, png, jpg',
            'image.max' => 'The product image may not be greater than 4096 kilobytes',
        ];
    }
}