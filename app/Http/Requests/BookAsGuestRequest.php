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
            'phone' => 'required|phone:mobile|unique:users,phone', // phone ex: 0555555555
            'email' => 'required|string|email|max:255|unique:users',
            'age' => 'required|in:less-11,11-18,more-18',
            'gender' => 'required|in:male,female',
        ];
    }

    public function messages(): array
    {
        return [
            // arabic
            'phone.unique' => 'رقم الجوال موجود مسبقاً',
            'email.unique' => 'البريد الإلكتروني موجود مسبقاً',
            'phone.phone' => 'رقم الجوال لابد أن يكون رقم هاتف صحيح',
            'age.in' => 'العمر يجب أن يكون أقل من 11 سنة أو بين 11 و 18 سنة أو أكثر من 18 سنة',
            'gender.in' => 'الجنس يجب أن يكون ذكر أو أنثى',
            'event_id.exists' => 'الفعالية غير موجودة',
            'name.required' => 'الاسم مطلوب',
            'phone.required' => 'رقم الجوال مطلوب',
            'email.required' => 'البريد الإلكتروني مطلوب',
            'age.required' => 'العمر مطلوب',
        ];
    }
}
