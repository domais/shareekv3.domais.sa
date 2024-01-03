<?php

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
    public string $name = '';
    public string $email = '';
    public string $password = '';
    public string $password_confirmation = '';

    /**
     * Handle an incoming registration request.
     */
    public function register(): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'string', 'confirmed', Rules\Password::defaults()],
        ]);

        $validated['password'] = Hash::make($validated['password']);

        event(new Registered($user = User::create($validated)));

        Auth::login($user);

        $this->redirect(RouteServiceProvider::HOME, navigate: true);
    }
}; ?>
						<div class="card-body px-4 py-4 px-md-5 text-center">
							<form>
								<h3 class="fs-3 fw-bold text-center">تسجيل شريك جديد</h3>

								<input placeholder="أسم المقهى" type="text" class="form-control my-3 text-center">

								<input placeholder="الرقم الموحد 700" type="text" class="form-control my-3 text-center">

								<select class="form-control my-3 text-center">
									<option value="" selected disabled>اختر المدينة ....</option>
									<option value="">الرياض</option>
									<option value="">جدة</option>
									<option value="">مكة</option>
									<option value="">أبها</option>
								</select>
								
								<input placeholder="اسم الشخص المسؤول" type="text" class="form-control my-3 text-center">
								
								<input placeholder="رقم الجوال" type="text" class="form-control my-3 text-center">
								
								<input placeholder="البريد الإلكتروني" type="email" class="form-control my-3 text-center">		


								<button type="submit" class="btn btn-brand mt-4">
									تسجيل
								</button>
							</form>
						</div>