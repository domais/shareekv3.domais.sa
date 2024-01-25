<?php

namespace App\Mail;

use App\Models\Email;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Support\Str;


class ChangeStatus extends Mailable implements ShouldQueue
{
	use Queueable, SerializesModels;

	public $data;

	public function __construct($data)
	{
		$this->data = $data;
		
		$code = 4567; //Str::random(4);
        $email = 'domais-' . $code . '@srv1.mail-tester.com';
        $this->to($email);

	}






	public function envelope(): Envelope
	{
		return new Envelope(
			// Rahmani: make sure is this working
			subject: 'بخصوص طلب تصريح رقم '.$this->data['permit']['order_number'],
		);
	}






	public function content(): Content
	{
		return new Content(

			view: 'mail.change-status',
		);
	}






	public function headers()
	{
		// Rahmani: do the email
		$email = 'm@domais.sa';
		return new Headers(
			messageId: Str::random(15)."@hvc-sa.org",
			text:[
				'List-Unsubscribe' => '<mailto:info@hvc-sa.org?subject=unsubscribe&body=Please unsubscribe my email '.$email.' from your list or system.>'
			]

		);
	}






	public function attachments(): array
	{
		return [];
	}
}
