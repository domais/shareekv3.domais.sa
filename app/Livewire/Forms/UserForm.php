<?php

namespace App\Livewire\Forms;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Livewire\Attributes\Validate;
use Livewire\Form;

class UserForm extends Form
{
    public $name;
    public $email;
    public $phone;


    public function rules()  {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
			'phone' => ['required','regex:/05[0-9]{8}$/', 'unique:'.User::class],
        ];
    }

    public function save($role = null)
    {
        $user = new User();
        $user->name = $this->name;
        $user->email = $this->email;
        $user->phone = $this->phone;
        $user->password = Hash::make(123456);
        $user->save();

        if ($role == null) {
            # code...
            $user->addRole(2);
        }
        else {
            $user->addRole(1);
        }

        return $user;
    }
}
