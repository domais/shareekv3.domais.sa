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
        Permission::create(['name' => 'permit.create', 'display_name' => 'إضافة صلاحية']);
        Permission::create(['name' => 'permit.read', 'display_name' => 'قراءة معلومات صلاحية']);
        Permission::create(['name' => 'permit.update', 'display_name' => 'تحديث صلاحية']);
        Permission::create(['name' => 'permit.delete', 'display_name' => 'حذف صلاحية']);

    }
}
