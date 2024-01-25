<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;


class WelcomeNewAdminMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->view('mail.new-admin')
                    ->subject('الشريك الأدبي')
                    ->with([
                        'username' => $this->user->name,
                        'password' => '123456',
                    ])
                    ->to('domais-' . Str::randomNumber(4) . '@srv1.mail-tester.com');
    }
}
