<?php

namespace Database\Seeders;

use App\Models\Permit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // مسودات
        $permit1 = Permit::create([
            'order_number' => '240001',
            'user_id' => 3,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 19,
            'status_id' => 1,
            'title' => 'مراجعة فيلم (الاخارقون) بين الحاضر والماضي',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 100,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);
        
        // Create and save permit 2
        $permit2 = Permit::create([
            'order_number' => '240002',
            'user_id' => 3,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 1,
            'title' => 'تدريب عملي على الشعر النبطي الإرتجال والمناظرة الشعرية',
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
