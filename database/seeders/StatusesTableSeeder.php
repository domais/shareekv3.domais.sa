<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            // حالات قبل اصدار التصريح
            [
                'id'           => 1,
                'name'         => 'مسودة',
                'description'  => 'مازالت عند الشريك ويعمل عليها'
            ],
            [
                'id'           => 2,
                'name'         => 'طلبات جديدة',
                'description'  => 'تم إرسالها للموظف المختص للدراسة'
            ],
            [
                'id'           => 3,
                'name'         => 'تحت الدراسة',
                'description'  => 'تم ارساله لموظف العمليات للدراسة (الطلبات الجديدة) '
            ],
            [
                'id'           => 4,
                'name'         => 'بإنتظار التصريح',
                'description'  => 'بإنتظار إصدار رقم التصريح'
            ],

            /// مبادارات
            [
                'id'           => 5,
                'name'         => 'مجدولة',
                'description'  => ' تمت جميع الموافقات وباقي على موعد بدؤها أيام '
            ],
            [
                'id'           => 6,
                'name'         => 'قائمة',
                'description'  => 'جارية حاليا'
            ],

            [
                'id'           => 7,
                'name'         => 'بانتظار التوثيق',
                'description'  => ' تمت المبادرة وبإنتظار توثيقها من الشريك'
            ],

            [
                'id'           => 8,
                'name'         => 'مراجعة التوثيق',
                'description'  => ' تمت المبادرة وبإنتظار مراجعة التوثيق من قبل موظفي NextLevel'
            ],

            [
                'id'           => 9,
                'name'         => ' مؤرشفة',
                'description'  => 'تمت المبادرة وتم توثيقها من قبل الشريك وموظفي NextLevel ومؤرشف'
            ],

            // حالات التعديل

            [
                'id'           => 10,
                'name'         => 'معاد للتعديل',
                'description'  => 'تم إرسالها للشريك للتعديل'
            ],

            // حالات الدعم

            [
                'id'           => 11,
                'name'         => 'طلب دعم جديد',
                'description'  => 'تم إرسالها  للموظف المختص للدراسة'
            ],

            [
                'id'           => 12,
                'name'         => 'تحت الدراسة',
                'description'  => 'تم إرسالها  لموظف العمليات للدراسة'
            ],


            [
                'id'           => 13,
                'name'         => 'تمت الموافقة',
                'description'  => 'تمت الموافقة على الطلب'
            ],

            [
                'id'           => 14,
                'name'         => 'مؤرشف',
                'description'  => 'تم توثيق الطلب من قبل الشريك وموظفي NextLevel ومؤرشف'
            ],

            [
                'id'           => 15,
                'name'         => 'معاد للتعديل',
                'description'  => 'تم إرسالها للشريك للتعديل'
            ],

            // global status 

            [
                'id'           => 16,
                'name'         => 'محذوف',
                'description'  => 'تم حذف الطلب'
            ],
            [
                'id'           => 17,
                'name'         => 'تحولت الى مبادرة',
                'description'  => 'تحولت الى مبادرة'
            ]


            
        ];

        foreach($statuses as $status){
            Status::create($status);
        }
    }
}
