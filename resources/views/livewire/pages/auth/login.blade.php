<?php

use App\Livewire\Forms\LoginForm;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public LoginForm $form;
    public $errors = [];

    /**
     * Handle an incoming authentication request.
     */
    public function login(): void
    {
        try {
            $this->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            $errors = $th->validator->errors()->toArray();

            foreach ($errors as $key => $messages) {
                foreach ($messages as $message) {
                    $this->addError($key, $message);
                }
            }
            return;
        }

        try {
            //code...
            $this->form->authenticate();
        } catch (\Throwable $th) {
            $this->errors[] = 'خطأ في البريد الإلكتروني أو كلمة المرور';
            return;

        }

        Session::regenerate();

        $this->redirect(
            session('url.intended', RouteServiceProvider::HOME),
        );
    }
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
		<h3 class="fs-3 fw-bold text-center">دخول الأعضاء</h3>

		<input placeholder="البريد الإلكتروني" wire:model="form.email" autocomplete="username" type="email" class="form-control my-3 text-center">		

		<input placeholder="كلمة المرور" type="password" wire:model="form.password" class="form-control my-3 text-center">

		<button type="submit" class="btn btn-brand mt-4">
			دخول
		</button>
	</form>
	<div class="border-top pt-4 mt-4 d-flex justify-content-between">
		<a href="{{route('password.reset')}}" class="text-dark text-decoration-none">نسيت كلمة المرور؟</a>
		{{-- <a href="{{route('register')}}" class="text-dark text-decoration-none">تسجيل حساب جديد</a> --}}
	</div>
</div>
