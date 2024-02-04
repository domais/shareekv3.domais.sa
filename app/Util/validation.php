<?php

use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Password;

    function newUser() 
    {
       return [

			'partner_name' => ['required', 'string', 'max:255'],
			'CR' => ['required', 'numeric'],
			'city' => ['required', 'string', 'in:الرياض,جدة,مكة,أبها'],


            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
			'phone' => ['required','regex:/05[0-9]{8}$/', 'unique:'.User::class],
            'password' => ['required', 'string', Password::defaults()],
       ];
        
    }

    function newPermit()
    {
        return [
            'meeting_link' => 'nullable|url|max:255',
            'order_number' => 'required|unique:permits,order_number',
            'user_id' => 'required|exists:users,id',
            'event_type_id' => 'required|exists:event_types,id',
            'event_location' => 'required|in:1,2,3',
            'literary_id' => 'nullable|exists:literaries,id',
            'status_id' => 'required|exists:statuses,id',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'available_seats' => 'required|integer',
            'need_support' => 'required|boolean',
             'lat' => 'required',
             'lng' => 'required',
            'image_adv' => ['required', function ($attribute, $value, $fail) {
                if (is_string($value)) {
               
                } else {
                    if (!$value->isValid() || !in_array($value->getMimeType(), ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg'])) {
                        $fail($attribute.' must be a valid image file.');
                    }
                }
            }],
  
        ];
    }

    function newSpeaker()
    {
        return [
            'name' => 'required|string|max:255',
            'phone' => 'required|regex:/05[0-9]{8}$/',
            'email' => 'required|email|max:255',
            'nationality' => 'required|string|max:255',
            'type' => 'required|in:كاتب,ناشط ثقافي',
            'twitter' => 'nullable|url|max:255',
            'instagram' => 'nullable|url|max:255',
            'linkedin' => 'nullable|url|max:255',
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