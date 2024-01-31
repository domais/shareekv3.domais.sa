<?php

namespace App\Console\Commands;

use App\Mail\ChangeStatus;
use App\Models\Event;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EventMangerCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:event';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'mange event by change status and send emails to partners';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $events = Event::whereIn('status_id', [5, 6])->get();
    
        foreach ($events as $event) {
            if ($event->status_id == 5 && $event->start_date <= now()) {
                $event->status_id = 6;
                $event->save();
                $data = [
                    'user' => $event->user,
                ];
                Mail::to('m@domais.sa')->send(new ChangeStatus($data));
            } elseif ($event->status_id == 6 && $event->end_date <= now()) {
                $event->status_id = 7;
                $event->save();
                $data = [
                    'user' => $event->user,
                ];
                Mail::to('m@domais.sa')->send(new ChangeStatus($data));
            }
            Log::info('testing done ' . $event->id);
        }
    }
}
