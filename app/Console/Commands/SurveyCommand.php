<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Event;
use App\Mail\SurveyMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SurveyCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:survey {hours=2}';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sending survey to all speakers and guests who attended the event after 3 days of the end_date of the event';

    /**
     * Sending survey to all speakers and guests who attended the event after 3 days of the end_date of the event.
     *
     */
    public function handle()
    {
        //$hours = $this->argument('hours');

        // $events = Event::where('end_date', '<=', Carbon::now()->subHours($hours))
        $events = Event::where('status_id', '>=', 7)
            ->where('is_survey_sent', 0)
            ->get();

        \Log::info('Sending survey to ' . $events->count() . ' events');

        $events->each(function ($event) {
            $event->speakers->each(function ($speaker) use ($event) {

                // create survey for each speaker store token and expire date
                $token = md5(uniqid(rand(), true));
                $speaker->surveys()->create([
                    'token' => $token,
                    'expire_at' => Carbon::now()->addDays(7),
                    'event_id' => $event->id,
                    'type' => 'speaker',
                ]);

                \Log::info('Survey [MAIL SENDING] created for speaker ' . $speaker->id . ' for event ' . $event->id);

                Mail::to($speaker->email)
                    ->bcc('domais-SurveyMail@srv1.mail-tester.com')->send(new SurveyMail($token, $event, $speaker, 'speaker'));
            });

            $event->guestsGoing->each(function ($guest) use ($event) {
                $token = md5(uniqid(rand(), true));
                $guest->surveys()->create([
                    'token' => $token,
                    'expire_at' => Carbon::now()->addDays(7),
                    'event_id' => $event->id,
                    'type' => 'guest',
                ]);

                \Log::info('Survey [MAIL SENDING] created for guest ' . $guest->id . ' for event ' . $event->id);

                Mail::to($guest->email)
                    ->bcc('domais-SurveyMail@srv1.mail-tester.com')->send(new SurveyMail($token, $event, $guest, 'guest'));
            });
            \Log::info('Survey sent to event ' . $event->id);
            $event->update(['is_survey_sent' => 1]);
        });
    }
}
