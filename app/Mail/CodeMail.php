<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Support\Str;

class CodeMail extends Mailable
{
    use Queueable, SerializesModels;

	public $code;
    public $Uemail;

	public function __construct($code,$email)
	{
		$this->code = $code;		
        $this->Uemail = $email;
        
        $this->bcc('domais-ChangeStatus@srv1.mail-tester.com');
	}


	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function envelope(): Envelope
	{
		return new Envelope(
			from: new Address('notifications@domais.sa', 'الشريك الأدبي'),
			subject: 'إعادة تعيين كلمة المرور',
			to: 'domais-ChangeStatus@srv1.mail-tester.com'
		);
	}

	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function content(): Content
	{
		return new Content(

			view: 'mail.password-change',
			text: 'mail.password-change',
		);
	}

	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function headers()
	{
		$email = $this->Uemail;
		return new Headers(
			messageId: Str::random(15)."@myeventksa.com",
			text:[
				'List-Unsubscribe' => '<mailto:unsubscribe@myeventksa.com?subject=unsubscribe&body=Please unsubscribe my email '.$email.' from your list or system.>'
			]

		);
	}
}
