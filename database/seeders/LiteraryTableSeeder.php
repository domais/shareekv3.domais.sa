<?php

namespace Database\Seeders;

use App\Models\Literary;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LiteraryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'id'     => 1,
                'name'   => 'الشعر'
            ],
            [
                'id'     => 2,
                'name'   => 'النثر الغير خيالي'
            ],
            [
                'id'     => 3,
                'name'   => 'الدراسات'
            ],
            [
                'id'     => 4,
                'name'   => 'ادب الأطفال و اليافعين'
            ],
            [
                'id'     => 5,
                'name'   => 'النثر الخيالي'
            ],
            [
                'id'     => 6,
                'name'   => 'الأدب المصور'
            ],
            [
                'id'     => 7,
                'name'   => 'النبطي',
                'parent_id' => 1
            ],
            [
                'id'     => 8,
                'name'   => 'الفصيح',
                'parent_id' => 1
            ],
            [
                'id'     => 9,
                'name'   => 'أدب الحالة',
                'parent_id' => 2
            ],
            [
                'id'     => 10,
                'name'   => 'الأدب الصحفي',
                'parent_id' => 2
            ],
            [
                'id'     => 11,
                'name'   => 'أدب الذات',
                'parent_id' => 2
            ],
            [
                'id'     => 12,
                'name'   => 'المراجعات',
                'parent_id' => 3
            ],
            [
                'id'     => 13,
                'name'   => 'النقد الأدبي',
                'parent_id' => 3
            ],
            [
                'id'     => 14,
                'name'   => 'الفلسفة',
                'parent_id' => 3
            ],
            [
                'id'     => 15,
                'name'   => 'النثر الخيالي ',
                'parent_id' => 4
            ],
            [
                'id'     => 16,
                'name'   => 'النثر الغير خيالي ',
                'parent_id' => 4
            ],
            [
                'id'     => 17,
                'name'   => 'الشعر',
                'parent_id' => 4
            ],
            [
                'id'     => 18,
                'name'   => 'الأدب المصور',
                'parent_id' => 4
            ],
            [
                'id'     => 19,
                'name'   => 'القصة',
                'parent_id' => 5
            ],
            [
                'id'     => 20,
                'name'   => 'الرواية',
                'parent_id' => 5
            ],
            [
                'id'     => 21,
                'name'   => 'كومكس',
                'parent_id' => 6
            ],
            [
                'id'     => 22,
                'name'   => 'مانجا',
                'parent_id' => 6
            ],
            [
                'id'     => 23,
                'name'   => 'مانها',
                'parent_id' => 6
            ],
            [
                'id'     => 24,
                'name'   => 'كتب هزلية و رسومية',
                'parent_id' => 6
            ],
            [
                'id'     => 25,
                'name'   => 'مانهوا',
                'parent_id' => 6
            ],
            [
                'id'     => 26,
                'name'   => 'NA',
            ]
        ];

        foreach ($categories as $category) {
            Literary::create([
                'name' => $category['name'],
                'parent_id' => $category['parent_id'] ?? null,
            ]);
        }

    }
}
