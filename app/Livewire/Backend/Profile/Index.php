<?php

namespace App\Livewire\Backend\Profile;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Index extends Component
{
    public $user;
    public $name;
    public $email;
    public $phone;

    public $current_password = '';
    public $password = '';
    public $password_confirmation = '';


    public $validationErrors = [];

    public function mount()  {
        $this->user = auth()->user();
        $this->name = $this->user->name;
        $this->email = $this->user->email;
        $this->phone = $this->user->phone;
        
        if (session()->has('errors')) {
            $errors = session()->get('errors');
            if ($errors->has('password')) {
                $this->validationErrors[] = $errors->first('password');
            }
        }

    }
    public function updateInformation() {

        try {

            $this->validate([
                'name' => 'required|min:3',
                'email' => 'required|email|unique:users,email,' . $this->user->id,
                'phone' => 'required|min:10|unique:users,phone,' . $this->user->id,
            ]);

        } catch (ValidationException $th) {
            $this->validationErrors = $th->validator->errors()->all();
            return;
        }

        $this->user->update([
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone, 
        ]);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    
    
public function updatePassword()
{
    try {
        // Check if the current password is correct
        if (!Hash::check($this->current_password, $this->user->password)) {
            throw ValidationException::withMessages([
                'current_password' => ['كلمة المرور الحالية غير صحيحة.'],
            ]);
        }

        // Validate the new password and its confirmation
        $this->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

              // Update the user's password
              $this->user->update([
                'password' => bcrypt($this->password),
            ]);
        } catch (ValidationException $th) {
            $this->validationErrors = $th->validator->errors()->all();
            return;
        }
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

    }

    
    public function render()
    {
        return view('livewire.backend.profile.index');
    }
}
