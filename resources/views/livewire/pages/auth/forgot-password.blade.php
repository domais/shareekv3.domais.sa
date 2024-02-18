<?php

use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;
use App\Models\Code;
use App\Models\User;

use Illuminate\Support\Facades\Auth;



new #[Layout('layouts.auth')] class extends Component
{
    public $errors = [];
    public $email = '';
    public $step_two = false;
    public = $code = '';

    public function verifyCode()
    {
        $user = User::where('email', $this->email)->first();

        $otp = Code::where('user_id', $user->id)
                    ->where('code', $this->code)
                    ->where('created_at', '>=', now()->subMinutes(5))
                    ->first();

        if ($otp) {
            dd('verified');
           
        } else {
            $this->errors = ['الرمز المرة الذي أدخلته غير صالح أو قد انتهى.'];
         return ;
        }
    }

    public function login()
    {
        if ($this->step_two) {
            # code...
            $this->verifyCode();
            return ;
        }
        try {
            // Validate the email field
            $validatedData = $this->validate([
                'email' => 'required|email|exists:users,email',
            ]);

            // If validation passes, continue with the password reset process
            // ...

            $user = User::where('email', $this->email)->first();

            // Count the OTP codes generated for the user today
            $otpCount = Code::where('user_id', $user->id)
                            ->whereDate('created_at', today())
                            ->count();

            if ($otpCount < 3) {
                // If less than 3 OTP codes have been generated today, generate a new one
                sendOtp($user);
                $this->step_two = true;
            } else {
                // Otherwise, return an error message
                $this->ValidationErrors = ['لقد وصلت إلى الحد الأقصى لعدد طلبات  لهذا اليوم. ارجوك حاول مرة أخرى غدا.'];
                    return ;
            }

        }  catch (ValidationException $e) {
            // Handle the validation errors
            $this->errors = $e->validator->errors()->all();
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

        @if ($step_two)

        <input placeholder="رمز التحقق" wire:model="code" autocomplete="code" type="number" class="form-control my-3 text-center">		

            
        @else

        <input placeholder="البريد الإلكتروني" wire:model="email" autocomplete="email" type="email" class="form-control my-3 text-center">		

            
        @endif

		<button type="submit" class="btn btn-brand mt-4">
            @if($step_two)
                تأكيد الرمز
            @else
                ارسل رمز التحقق
            @endif
		</button>
	</form>
	<div class="border-top pt-4 mt-4 d-flex justify-content-between">
		<a href="{{route('login')}}" class="text-dark text-decoration-none">تسجيل الدخول</a>
		{{-- <a href="{{route('register')}}" class="text-dark text-decoration-none">تسجيل حساب جديد</a> --}}
	</div>
</div>
