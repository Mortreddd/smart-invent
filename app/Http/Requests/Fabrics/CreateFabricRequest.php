<?php

namespace App\Http\Requests\Fabrics;

use Illuminate\Foundation\Http\FormRequest;

class CreateFabricRequest extends FormRequest
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
            'course_id' => 'exists:courses,id|required|integer',
            'textile' => 'in:Blouse,Pants,Skirt,Any|required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:4096',
            'stock' => 'required|integer',
            'price' => 'required|integer',
        ];
    }
    public function messages()
    {
        return [
            'course_id.required' => 'The product name is required',
            'course_id.exists' => 'The product name must be a valid course',
            'image.required' => 'The product image is required',
            'image.image' => 'The product must be an image',
            'image.mimes' => 'The product image must be a file of type: jpeg, png, jpg',
            'image.max' => 'The product image may not be greater than 4096 kilobytes',
            'textile.required' => 'The product textile is required',
            'textile.in' => 'The product textile must be one of the following types: Blouse, Pants, Skirt, Any',
            'stock.required' => 'The product stock is required',
            'price.required' => 'The product price is required',
        ];
    }
}