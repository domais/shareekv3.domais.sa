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

     function newPermit()
    {
        return [
            'order_number' => 'required|unique:permits,order_number',
            'user_id' => 'required|exists:users,id',
            'event_type_id' => 'required|exists:event_types,id',
            'event_location' => 'required|in:1,2',
            'literary_id' => 'required|exists:literaries,id',
            'status_id' => 'required|exists:statuses,id',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'available_seats' => 'required|integer',
            'need_support' => 'required|boolean',
            'lat' => 'required',
            'lng' => 'required',
        ];
    }

    function newSpeaker()
    {
        return [
            'name' => 'required|string|max:255',
            'phone' => 'required|phone',
            'email' => 'required|email|max:255',
            'nationality' => 'required|string|max:255',
            'type' => 'required|in:كاتب,شاعر,راوي,ناشط ثقافي',
            'twitter' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
        ];
    }

    function newPartnership()
    {
        return [
            'name' => 'required|string',
            'type' => 'required|in:نادي ثقافي,جمعية,قطاع خاص,قطاع حكومي',
            'description' => 'required|string',
        ];
    }

    function newTicket()
    {
        return [
            'request_type' => 'required|integer|between:1,4',
            'permit_number' => 'nullable|integer',
            'subject' => 'required|string',
            'description' => 'required|string',
            'additional_info' => 'nullable|string',
            'status' => 'required|integer|between:0,1',
        ];
    }