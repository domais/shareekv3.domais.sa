<?php

namespace App\Console\Commands;

use Throwable;
use Illuminate\Bus\Batch;
use App\Jobs\MigrateBatchJob;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Bus;

class MigrateFirebase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate';

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

        $json = file_get_contents(public_path('firebase_data/Events.json'));
        $data = json_decode($json);

        Bus::batch(collect($data)->chunk(100)->map(function ($chunk) {
            // $this->info('Migrating chunk count: ' . $chunk->count() . ' ...');
            return new MigrateBatchJob($chunk);
        }))
        ->dispatch();

        $this->info('Migrating data ...');
    }
}


// set global max_allowed_packet=268435456;
