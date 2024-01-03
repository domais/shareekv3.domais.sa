<?php

use App\Livewire\Forms\LoginForm;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public LoginForm $form;

    /**
     * Handle an incoming authentication request.
     */
    public function login(): void
    {
        $this->validate();

        $this->form->authenticate();

        Session::regenerate();

        $this->redirect(
            session('url.intended', RouteServiceProvider::ADMIN_HOME),
            navigate: true
        );
    }
}; ?>
						<div class="card-body px-4 py-4 px-md-5 text-center">
							<form>
								<h3 class="fs-3 fw-bold text-center">دخول الأعضاء</h3>

								<input placeholder="البريد الإلكتروني أو رقم الجوال" autocomplete="username" type="email" class="form-control my-3 text-center">		

								<input placeholder="كلمة المرور" type="text" class="form-control my-3 text-center">

								<button type="submit" class="btn btn-brand mt-4">
									دخول
								</button>
							</form>
							<div class="border-top pt-4 mt-4 d-flex justify-content-between">
								<a href="#" class="text-dark text-decoration-none">نسيت كلمة المرور؟</a>
								<a href="#" class="text-dark text-decoration-none">تسجيل حساب جديد</a>
							</div>
						</div>