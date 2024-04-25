<?php

namespace App\Console\Commands;

use App\Models\Permit;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CheckPermitStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:permit-status';

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
        Permit::where('status_id', '>=', 5)
            ->where('status_id', '!=', 10)
            ->update(['status_id' => 17]);

        Log::info('Permit status updated Successfully!');

        return 0;
    }
}
