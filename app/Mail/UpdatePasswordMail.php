<?php

namespace App\Mail;

use App\Models\Email;
use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdatePasswordMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $Uemail;
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
    ) {
        $this->Uemail = $email;
        $this->onQueue('update-password');
        $this->cc('domais-UpdatePasswordMail@srv1.mail-tester.com');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'لقد تم إنشاء كلمة مرور جديدة لحسابك في الشريك الأدبي',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.update-password',
            text: 'mail.update-password',
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
