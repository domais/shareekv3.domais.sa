<?php

namespace Database\Seeders;

use App\Models\EventType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'id'     => 1,
                'name'   => 'فعالية'
            ],
            [
                'id'     => 2,
                'name'   => 'مساهمة'
            ]
        ];

        foreach($types as $type){
            EventType::create($type);
        }
    }
}
