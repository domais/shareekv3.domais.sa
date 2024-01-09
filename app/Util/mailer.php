<?php

use App\Mail\ChangeStatus;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

function ChangePermitStatus($permit)
{
    $data = [
        'permit' => $permit,
        'status' => $permit->status,
        'user' => $permit->user,
    ];

    switch ($permit->status_id) {
        case 2:
            $admins = Role::where('name', 'SuperAdmin')->first()->users;
            $userEmail = $permit->user->email;

            $recipients = $admins->pluck('email')->toArray(); // Get all admin emails
            $recipients[] = $userEmail; // Add user email to the recipients array

            Mail::to($recipients)->send(new ChangeStatus($data));
            break;

        case 3:
            $admin = $permit->admin->email;
            Mail::to($admin)->send(new ChangeStatus($data));
            break;

        case 4:
            $admin = $permit->admin->email;
            $user = $permit->user->email;

            $recipients = [$admin, $user];

            Mail::to($recipients)->send(new ChangeStatus($data));
            break;
    }
}