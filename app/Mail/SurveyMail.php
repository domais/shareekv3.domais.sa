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

class SurveyMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public $token,
        public $event,
        public $user,
        public $type
    ) {
        $code = 3456; //Str::random(4);
        $email = 'domais-' . $code . '@srv1.mail-tester.com';
        $this->to($email);

        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'لقد تمت دعوتك للمشاركة في الاستبيان',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {

        $view = $this->type === 'speaker' ? 'mail.survey-speaker' : 'mail.survey-guest';

        return new Content(
            view: $view,
            with: [
                'token' => $this->token,
                'event' => $this->event,
                'user' => $this->user,
                'partner' => $this->event->user->owner,
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
