<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permit10 = Event::create([
            'order_number' => '240001',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 5,
            'title' => 'تدريب عملي على الشعر النبطي الإرتجال والمناظرة الشعرية',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        $permit2 = Event::create([
            'order_number' => '240002',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 5,
            'title' => 'الإرتجال والمناظرة الشعرية',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);
    }
}
