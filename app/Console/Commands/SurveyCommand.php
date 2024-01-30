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
        $hours = $this->argument('hours');

        // $events = Event::where('end_date', '<=', Carbon::now()->subHours($hours))
        $events = Event::where('end_date', '<=', Carbon::now()->minutes(1))
            ->where('source', '!=', 'firebase')
            ->where('is_survey_sent', false)
            ->get();

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

                Mail::to($speaker->email)->send(new SurveyMail($token, $event, $speaker, 'speaker'));
            });

            $event->guestsGoing->each(function ($guest) use ($event) {
                $token = md5(uniqid(rand(), true));
                $guest->surveys()->create([
                    'token' => $token,
                    'expire_at' => Carbon::now()->addDays(7),
                    'event_id' => $event->id,
                    'type' => 'guest',
                ]);
                Mail::to($guest->email)->send(new SurveyMail($token, $event, $guest, 'guest'));
            });

            $event->update(['is_survey_sent' => true]);
        });

    }
}
