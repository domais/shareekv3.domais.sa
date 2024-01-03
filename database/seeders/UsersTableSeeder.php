<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdmin = User::create([
            'name'      => 'أحمد بوخمسين',
            'email'     => 'admin@gmail.com',
            'phone'     => '0555555551',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin2 = User::create([
            'name'      => 'أحمد الغامدي',
            'email'     => 'admin2@gmail.com',  
            'phone'     => '0555555552',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin->addRole(1); 
        $superAdmin2->addRole(1); 


        $partner1  = User::create([
            'name'      => 'عبدالله الفوزان',
            'email'     => 'partner@gmail.com',
            'phone'     => '0555555553',
            'password'  => Hash::make(123456),
        ]);


        $partner2  = User::create([
            'name'      => 'تركي المالح',
            'email'     => 'partner2@gmail.com',
            'phone'     => '0555555554',
            'password'  => Hash::make(123456),
        ]);


        $partner3  = User::create([
            'name'      => 'منيرة الحمود',
            'email'     => 'partner3@gmail.com',
            'phone'     => '0555555555',
            'password'  => Hash::make(123456),
        ]);

        $partner1->addRole(2); 
        $partner2->addRole(2); 
        $partner3->addRole(2); 

    }
}
