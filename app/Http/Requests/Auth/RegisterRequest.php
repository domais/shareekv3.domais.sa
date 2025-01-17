<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'phone' => 'required|unique:users,phone|phone',
            'email' => 'required|string|email|max:255|unique:users',
            'age' => 'required|in:less-11,11-18,more-18',
            'gender' => 'required|in:male,female',
            'register' => 'nullable',
        ];
    }
}
