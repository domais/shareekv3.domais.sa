<?php

namespace App\Console\Commands;

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
        $permits = Permit::whereNull('content')
        ->whereDate('start_date', '>=', '2024-04-01')
        ->whereDate('end_date', '<=', '2024-04-30')
        ->get();

        foreach ($permits as $permit) {
            $permit->content = strip_tags($permit->description);
            $permit->save();
        }

        Log::info('CheckConentNull: ' . $permits->count() . ' permits updated');
    }
}
