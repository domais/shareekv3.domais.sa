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

class ReminderToCloseEmail extends Mailable
{
    use Queueable, SerializesModels;


    public $order_number;
    public $Uemail;
    public function __construct($email,$order_number)
    {
        $this->Uemail = $email;
        $this->order_number = $order_number;
        $this->cc('domais-ChangeStatus@sr32.mail-tester.com');
        $this->cc('rahmanidja8@gmail.com');

    }

    /**
     * Get the message envelope.
     */
	// مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
	public function envelope(): Envelope
	{
		return new Envelope(
			from: new Address('notifications@domais.sa', 'الشريك الأدبي'),
			subject: 'بخصوص طلب تصريح رقم '.$this->order_number,
			to: 'domais-ChangeStatus@srv1.mail-tester.com'
		);
	}


    /**
     * Get the message content definition.
     */
    public function content(): Content
	{
		return new Content(

			view: 'mail.reminder-event',
			text: 'mail.reminder-event',
		);
	}

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
