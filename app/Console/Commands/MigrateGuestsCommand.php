<?php

namespace App\Console\Commands;

use App\Jobs\MigrateBatchJob;
use Illuminate\Console\Command;
use App\Jobs\MigrateGuestBatchJob;
use Illuminate\Support\Facades\Bus;

class MigrateGuestsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-guests';

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
        $json = file_get_contents(public_path('firebase_data/EventGuests.json'));
        $data = json_decode($json);


        Bus::batch(collect($data)->chunk(100)->map(function ($chunk) {
            return new MigrateGuestBatchJob($chunk);
        }))
            ->onQueue('migrate-guests')
            ->dispatch();

        $this->info('Migrating data ...');
    }
}
