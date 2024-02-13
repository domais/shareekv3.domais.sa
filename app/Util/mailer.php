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
        // تحت الدراسة
        case 2:
            // $admins = Role::where('name', 'SuperAdmin')->first()->users;
            // تم ايقافها بواسطة دميس بطلب من م.أحمد 2024-01-30
            // $recipients = $admins->pluck('email')->toArray(); // Get all admin emails
            // Mail::to($recipients)
            //   ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            //   ->send(new ChangeStatus($data));
        break;

        //  موافقة مبدأية
        case 3:
            $user = $permit->user->email;
            Mail::to($user)
                ->bcc('domais-ChangeStatus@srv1.mail-tester.com')
                ->send(new ChangeStatus($data));
            break;

        //  موافقة نهائية
        case 4:
            $user = $permit->user->email;

            Mail::to($user)
                ->bcc('domais-ChangeStatus@srv1.mail-tester.com')
                ->send(new ChangeStatus($data));
        break;
    }
}