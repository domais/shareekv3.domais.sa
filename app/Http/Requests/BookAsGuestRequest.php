<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookAsGuestRequest extends FormRequest
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
            'event_id' => 'required|exists:events,id',
            'name' => 'required|string|max:255',
            'phone' => 'required|phone|unique:users,phone', // phone ex: 0555555555
            'email' => 'required|string|email|max:255|unique:users',
            'age' => 'required|in:less-11,11-18,more-18',
            'gender' => 'required|in:male,female',
        ];
    }
}
