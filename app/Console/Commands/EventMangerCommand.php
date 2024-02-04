<?php

namespace App\Console\Commands;

use App\Mail\ChangeStatus;
use App\Models\Event;
use App\Models\History;
use App\Models\Permit;
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
    protected $signature = 'app:event-manger';

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
        Log::info('testing done ');
        
        $events = Event::whereIn('status_id', [5, 6])->get();
    
        foreach ($events as $event) {
            if ($event->status_id == 5 && $event->start_date <= now()) {
                $event->status_id = 6;
                $event->save();
                $permit = Permit::where('order_number', $event->order_number)->first();
                
                $data = [
                    'permit' => $permit,
                    'status' => $event->status,
                    'user' => $permit->user,
                ];
                
                Log::info('Event data:', [$data]);

                Mail::to($permit->user->email)->send(new ChangeStatus($data));
            } elseif ($event->status_id == 6 && $event->end_date <= now()) {
                $event->status_id = 7;
                $event->save();
                $permit = Permit::where('order_number', $event->order_number)->first();

                $history = new History();
                $history->permit_id = $permit->id;
                $history->status_id = 6;
                $history->user_id = $permit->admin_id;
                $history->descreption = null;
                $history->notes = null;
                $history->edited = null;
                $history->save();

                
                $data = [
                    'permit' => $permit,
                    'status' => $event->status,
                    'user' => $permit->user,
                ];
                
                Log::info('Event data:', [$data]);

                Mail::to($permit->user->email)->send(new ChangeStatus($data));


            }
            Log::info('Event :  ' . $event->id);
       


        }
        

    }
}
