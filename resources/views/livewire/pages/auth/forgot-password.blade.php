<?php

use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public $errors = [];
    public $email = '';

    public function login()
    {
        try {
            // Validate the email field
            $validatedData = $this->validate([
                'email' => 'required|email|exists:users,email',
            ]);

            // If validation passes, continue with the password reset process
            // ...

        } catch (ValidationException $e) {
            // Handle the validation errors
            return back()->withErrors($e->validator);
        }
    }

    /**
     * Handle an incoming authentication request.
     */

}; ?>
<div class="card-body px-4 py-4 px-md-5 text-center"
x-data="{errors: @entangle('errors').live}"
    x-init="
        $watch('errors', value => {

            if (value.length > 0) {
                const errorMessage = value.join('<br>');
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ في التحقق',
                    showConfirmButton: false,
                    html: errorMessage  // Use 'html' to display formatted text
                });
                errors = [];
            }
        });
    "
>
	<form wire:submit="login">
		<h3 class="fs-3 fw-bold text-center">ضبط كلمة السر</h3>

		<input placeholder="البريد الإلكتروني" wire:model="email" autocomplete="email" type="email" class="form-control my-3 text-center">		

		<button type="submit" class="btn btn-brand mt-4">
			ارسل رمز التحقق
		</button>
	</form>
	<div class="border-top pt-4 mt-4 d-flex justify-content-between">
		<a href="{{route('login')}}" class="text-dark text-decoration-none">تسجيل الدخول</a>
		{{-- <a href="{{route('register')}}" class="text-dark text-decoration-none">تسجيل حساب جديد</a> --}}
	</div>
</div>
