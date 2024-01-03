<?php

use App\Models\User;
use Illuminate\Validation\Rules\Password;

    function newUser() 
    {
       return [

			'partner_name' => ['required', 'string', 'max:255'],
			'CR' => ['required', 'numeric'],
			'city' => ['required', 'string', 'in:الرياض,جدة,مكة,أبها'],


            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
			'phone' => ['required','phone', 'string', 'unique:'.User::class],
            'password' => ['required', 'string', Password::defaults()],
       ];
        
    }