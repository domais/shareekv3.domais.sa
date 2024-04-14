<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Models\Event;
use App\Models\Permit;
use App\Models\Literary;
use App\Models\EventType;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;

class ManualEventSeedCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:manual-event {--delete}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed events manually';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        // delete all source manual
        if ($this->option('delete')) {
            Event::where('source', 'manual')->forceDelete();
            Permit::where('source', 'manual')->forceDelete();
        }

        // development mode
        // if (app()->environment() === 'local') {
        //     // delete all source manual
        //     Event::where('source', 'manual')->forceDelete();
        //     Permit::where('source', 'manual')->forceDelete();
        // }
        Excel::import(new \App\Imports\EventSeedImport, base_path('database/seeders/events_2.xlsx'));


        $this->info('End seeding events');
    }
}
