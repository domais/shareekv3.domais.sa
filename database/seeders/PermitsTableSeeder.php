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
            'targeted_audience' => '1',
            'user_id' => 3,
            'category_id' => 'محاضرة',
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
        
        //مسودة ثانية
        $permit2 = Permit::create([
            'order_number' => '240002',
            'targeted_audience' => '1',
            'user_id' => 3,
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 1,
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

        // معادة لتعديل

        $permit3 = Permit::create([
            'order_number' => '240003',
            'targeted_audience' => '1',
            'user_id' => 3,
            'admin_id' => 1,
            'category_id' => 'محاضرة',
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 13,
            'status_id' => 10,
            'title' => 'مراجعة فيلم (الاخارقون) - جزء ثاني',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 100,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);
        
        // معادة لتعديل ثانية
        $permit4 = Permit::create([
            'order_number' => '240004',
            'targeted_audience' => '1',
            'user_id' => 3,
            'admin_id' => 1,
            'category_id' => 'محاضرة',
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 14,
            'status_id' => 10,
            'title' => 'تدريب عملي على الشعر النبطي - جزء ثاني',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // تحت الدراسة 1
        $permit5 = Permit::create([
            'order_number' => '240005',
            'user_id' => 3,
            'admin_id' => 1,
            'targeted_audience' => '1',
            'event_type_id' => 1,
            'category_id' => 'محاضرة',
            'event_location' => 1,
            'literary_id' => 15,
            'status_id' => 3,
            'title' => 'مراجعة فيلم (الاخارقون) - جزء ثالث',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 100,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // تحت الدراسة 2
        $permit6 = Permit::create([
            'order_number' => '240006',
            'targeted_audience' => '1',
            'user_id' => 3,
            'admin_id' => 1,
            'category_id' => 'محاضرة',
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 16,
            'status_id' => 3,
            'title' => 'تدريب عملي على الشعر النبطي - جزء ثالث',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // بانتظار التصريح 1

        $permit7 = Permit::create([
            'order_number' => '240007',
            'user_id' => 3,
            'admin_id' => 1,
            'event_type_id' => 1,
            'targeted_audience' => '1',
            'event_location' => 1,
            'category_id' => 'محاضرة',
            'literary_id' => 16,
            'status_id' => 4,
            'title' => 'تدريب عملي على الشعر النبطي - جزء رابع',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 250,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // بانتظار التصريح 2

        $permit8 = Permit::create([
            'order_number' => '240008',
            'user_id' => 3,
            'admin_id' => 1,
            'category_id' => 'محاضرة',
            'targeted_audience' => "1",
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 15,
            'status_id' => 4,
            'title' => 'مراجعة فيلم (الاخارقون) - جزء عاشر',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 100,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);

        // طلبات جديدة
        $permit9 = Permit::create([
            'order_number' => '240009',
            'user_id' => 3,
            'targeted_audience' => "1",
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 19,
            'status_id' => 2,
            'category_id' => 'محاضرة',
            'title' => 'مراجعة فيلم (الاخارقون) بين الحاضر والماضي',
            'description' => 'وصف المبادرة',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(20),
            'available_seats' => 100,
            'need_support' => false,
            'lat' => 0.0,
            'lng' => 0.0,
        ]);
        
        // طلبات جديدة ثانية
        $permit10 = Permit::create([
            'order_number' => '240010',
            'user_id' => 3,
            'targeted_audience' => "1",
            'event_type_id' => 1,
            'event_location' => 1,
            'literary_id' => 18,
            'status_id' => 2,
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
    }
}
