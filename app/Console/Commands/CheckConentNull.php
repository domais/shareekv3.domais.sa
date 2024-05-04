<?php

namespace App\Console\Commands;

use App\Models\Event;
use App\Models\Permit;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckConentNull extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:conent-null';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $permits = Permit::where('content', null)
        ->get();

        $events = Event::where('content', null)
        ->get();

        foreach ($permits as $permit) {
            $permit->content = strip_tags($permit->description);
            $permit->save();
        }

        foreach ($events as $event) {
            $event->content = strip_tags($event->description);
            $event->save();
        }

        Log::info('CheckConentNull: ' . $permits->count() . ' permits updated');
        Log::info('CheckConentNull: ' . $events->count() . ' events updated');
    }
}
