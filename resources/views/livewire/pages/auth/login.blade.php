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
        } catch (ValidationException $e) {
            $this->errors = $e->errors();
        }

        $this->form->authenticate();

        Session::regenerate();

        $this->redirect(
            session('url.intended', RouteServiceProvider::HOME),
        );
    }
}; ?>
						<div class="card-body px-4 py-4 px-md-5 text-center">
							<form wire:submit="login">
								<h3 class="fs-3 fw-bold text-center">دخول الأعضاء</h3>

								<input placeholder="البريد الإلكتروني أو رقم الجوال" wire:model="form.email" autocomplete="username" type="email" class="form-control my-3 text-center">		

								<input placeholder="كلمة المرور" type="text" wire:model="form.password" class="form-control my-3 text-center">

								<button type="submit" class="btn btn-brand mt-4">
									دخول
								</button>
							</form>
							<div class="border-top pt-4 mt-4 d-flex justify-content-between">
								<a href="#" class="text-dark text-decoration-none">نسيت كلمة المرور؟</a>
								<a href="{{route('register')}}" class="text-dark text-decoration-none">تسجيل حساب جديد</a>
							</div>
						</div>