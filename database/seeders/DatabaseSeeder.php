<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Status;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionsTableSeeder::class,
            RolesTableSeeder::class,
            UsersTableSeeder::class,
            StatusesTableSeeder::class,
            EventTypeTableSeeder::class,
            LiteraryTableSeeder::class,
            //PermitsTableSeeder::class,
            EventTableSeeder::class,
        ]);

    }
}
