<?php

namespace App\Mail;

use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;


class BookedMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public $event,
        public string $name
        
    ) {
        $this->to('domais-XXXX@srv1.mail-tester.com');

        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'تأكيد تسجيلك في فعالية ' . mb_substr($this->event['name'], 0, 70) . '...',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.booked',
            with: [
                'event' => $this->event,
                'image' => $this->event->image ? url($this->event->image->path) : asset('img/default-event.png'),
                'name' => $this->name
            ]
        );
    }

    public function headers()
    {
        $email = 'm@domais.sa';
        return new Headers(
            messageId: Str::random(15) . "@hvc-sa.org",
            text: [
                'List-Unsubscribe' => '<mailto:info@hvc-sa.org?subject=unsubscribe&body=Please unsubscribe my email ' . $email . ' from your list or system.>'
            ]

        );
    }
}
