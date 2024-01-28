<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Permit CRUD permissions
        Permission::create(['name' => 'role-index', 'display_name' => 'إدارة الصلاحيات و المستخدمين']);
        Permission::create(['name' => 'partner-create', 'display_name' => 'إضافة شريك']);
        Permission::create(['name' => 'permit-update', 'display_name' => 'تعديل على التصاريح']);
        Permission::create(['name' => 'support-update', 'display_name' => 'تعديل على دعم الشريك']);
        Permission::create(['name' => 'event-update', 'display_name' => 'تعديل على المبادرات']);
        Permission::create(['name' => 'event-delete', 'display_name' => 'حذف المبادرات']);


    }
}
