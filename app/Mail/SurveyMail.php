<?php

namespace App\Mail;

use App\Models\Email;
use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
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
    public $Uemail;
    public function __construct(
        public $token,
        public $event,
        public $user,
        public $type
    ) {
        $this->Uemail = $user->email;
        // $this->cc('domais-SurveyMail@srv1.mail-tester.com');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), 'جسر الثقافة'),
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
            text: $view,
            with: [
                'token' => $this->token,
                'event' => $this->event,
                'user' => $this->user,
                'partner' => $this->event->user->owner,
            ]
        );
    }


    // مهم جدن لوصول الايميل للإنبوكس وما تكون سبام
    public function headers()
    {
        // Rhmani : put here user's email
        $email = $this->Uemail;
        return new Headers(
            messageId: Str::random(15) . "@myeventksa.com",
            text: [
                'List-Unsubscribe' => '<mailto:unsubscribe@myeventksa.com?subject=unsubscribe&body=Please unsubscribe my email ' . $email . ' from your list or system.>'
            ]

        );
    }
}
