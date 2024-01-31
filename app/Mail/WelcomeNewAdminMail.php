<?php

namespace App\Mail;

use App\Models\Email;
use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;


class WelcomeNewAdminMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
	public $Uemail;


    public function __construct($user)
    {
        $this->user = $user;
		$this->Uemail = $this->user->email;
        $this->cc('domais-WelcomeNewAdminMail@srv1.mail-tester.com');
    }




	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function envelope(): Envelope
	{
		return new Envelope(
			subject: 'بيانات الدخول على حسابك',
		);
	}





	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function content(): Content
	{
		return new Content(

			view: 'mail.new-admin',
			text: 'mail.new-admin',
            with:[
                'username' => $this->user->name,
                'password' => '123456',
            ]
		);
	}





    // مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
    public function headers()
    {
        // Rhmani : put here user's email
        $email = $this->Uemail;
		return new Headers(
			messageId: Str::random(15)."@myeventksa.com",
			text:[
				'List-Unsubscribe' => '<mailto:unsubscribe@myeventksa.com?subject=unsubscribe&body=Please unsubscribe my email '.$email.' from your list or system.>'
			]

		);
	}
}
