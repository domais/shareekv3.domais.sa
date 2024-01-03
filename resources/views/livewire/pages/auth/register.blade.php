<?php

use App\Models\User;
use App\Models\Partner;

use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.auth')] class extends Component
{
	public string $partner_name;
	public int  $CR;
	public string $city = "0";
    public string $name = '';
    public string $email = '';
	public string $phone = '';
    public string $password = '';
    public string $password_confirmation = '';
	public $errors = [];

    /**
     * Handle an incoming registration request.
     */
    public function register(): void
    {
		try {

	       $validated =	$this->validate(newUser());

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

		$validated['password'] = Hash::make($validated['password']);
		$user = User::create($validated);

		$user->addRole(2); 


		$data = [
			'owner_id' => $user->id,
			'name' => $validated['partner_name'],
			'CR' => $validated['CR'],
			'city' => $validated['city'],
			'class' => 'أ',
			'lat' => 46.63255,
			'lng' => 43.63255,
		];

		$partner = Partner::create($data);

        event(new Registered($user));

        Auth::login($user);

        $this->redirect(RouteServiceProvider::HOME);
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
	<form wire:submit="register">
		<h3 class="fs-3 fw-bold text-center">تسجيل شريك جديد</h3>

		<input placeholder="إسم المقهى" wire:model="partner_name" type="text" class="form-control my-3 text-center">

		<input placeholder="الرقم الموحد 700" wire:model="CR" type="number" class="form-control my-3 text-center">

		<select class="form-control my-3 text-center" wire:model="city">
			<option value="0" selected disabled>اختر المدينة ....</option>
			<option value="الرياض">الرياض</option>
			<option value="جدة">جدة</option>
			<option value="مكة">مكة</option>
			<option value="أبها">أبها</option>
		</select>
								
		<input placeholder="اسم الشخص المسؤول" wire:model="name" type="text" class="form-control my-3 text-center">
								
		<input placeholder="رقم الجوال" wire:model="phone" type="text" class="form-control my-3 text-center">
								
		<input placeholder="البريد الإلكتروني" wire:model="email" type="email" class="form-control my-3 text-center">		

		<input placeholder="كلمة السر" wire:model="password" type="password" class="form-control my-3 text-center">		

		<button  type="submit" class="btn btn-brand mt-4">
			تسجيل
	    </button>
	</form>
</div>