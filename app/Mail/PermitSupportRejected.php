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


class PermitSupportRejected extends Mailable
{
    use Queueable, SerializesModels;

	public $data;

	public function __construct($data)
	{
		$this->data = $data;		
        $this->bcc('domais-ChangeStatus@srv1.mail-tester.com');
	}

	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function envelope(): Envelope
	{
		return new Envelope(
			from: new Address('notifications@domais.sa', 'الشريك الأدبي'),
			subject: 'بخصوص طلب تصريح رقم '.$this->data['permit']['order_number'],
			to: 'domais-ChangeStatus@srv1.mail-tester.com'
		);
	}

	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function content(): Content
	{
		return new Content(

			view: 'mail.reject-status',
			text: 'mail.reject-status',
		);
	}

	public function headers()
	{
		$email = $this->data['user']['email'];
		return new Headers(
			messageId: Str::random(15)."@myeventksa.com",
			text:[
				'List-Unsubscribe' => '<mailto:unsubscribe@myeventksa.com?subject=unsubscribe&body=Please unsubscribe my email '.$email.' from your list or system.>'
			]

		);
	}
}
