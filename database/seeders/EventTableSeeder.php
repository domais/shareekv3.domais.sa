<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class EventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //مجدولة 1
        $event1 = Event::create([
            'order_number' => '240001',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 5,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي على الشعر النبطي الإرتجال والمناظرة الشعرية',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        //مجدولة 2

        $event2 = Event::create([
            'order_number' => '240002',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 5,
            'category_id' => 'محاضرة',
            'title' => 'الإرتجال والمناظرة الشعرية',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        //قائمة 1
        $event3 = Event::create([
            'order_number' => '240003',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 6,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي  الجزء 2',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        //قائمة 2
        $event4 = Event::create([
            'order_number' => '240004',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 6,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي  الجزء 2',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        //بانتظار التوثيق 1
        $event5 = Event::create([
            'order_number' => '240005',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 7,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي  الجزء 3',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => today()->subDays(5),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // بانتظار التصريح 2
        $event6 = Event::create([
            'order_number' => '240006',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'category_id' => 'محاضرة',
            'status_id' => 7,
            'title' => 'تدريب عملي  الجزء 5',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => today()->subDays(5),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);


        // مراجعة التوثيق 1
        $event7 = Event::create([
            'order_number' => '240007',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 8,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي  الجزء 9',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => today()->subDays(5),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        //  مراجعة التوثيق  2
        $event8 = Event::create([
            'order_number' => '240008',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 8,
            'category_id' => 'محاضرة',
            'title' => 'تدريب عملي  الجزء 5',
            'description' => 'وصف المبادرة',
            'start_date' => today()->subDays(10),
            'end_date' => today()->subDays(5),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);



    }
}
