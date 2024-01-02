<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
                   // Admin - Only admin can delete stuff.
        $SuperAdmin = Role::create([
                    'name' => 'SuperAdmin',
                    'display_name' => 'مستخدم',
                    'description' => 'كامل الصلاحيات',
                    // Add permissions for deletion
        ]);
        
        $user = Role::create([
                    'name' => 'User',
                    'display_name' => 'زائر',
                    'description' => 'صلاحيات في حدود العمليات',
                    'is_admin' => false,
                    // Add permissions for deletion
        ]);
        
    }
}
