<?php

namespace Database\Seeders;

use App\Models\Partner;
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

        Partner::create([
            'owner_id' => $partner1->id,
            'name' => 'Partner Name',
            'city' => 'City Name',
            'lat' => 0.0, // replace with actual latitude
            'lng' => 0.0, // replace with actual longitude
            'class' => 'أ', // replace with actual class
            'CR' => 123457, // replace with actual CR
        ]);


        $partner2  = User::create([
            'name'      => 'تركي المالح',
            'email'     => 'partner2@gmail.com',
            'phone'     => '0555555554',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner2->id,
            'name' => 'Partner Name',
            'city' => 'City Name',
            'lat' => 0.0, // replace with actual latitude
            'lng' => 0.0, // replace with actual longitude
            'class' => 'أ', // replace with actual class
            'CR' => 123485, // replace with actual CR
        ]);


        $partner3  = User::create([
            'name'      => 'منيرة الحمود',
            'email'     => 'partner3@gmail.com',
            'phone'     => '0555555555',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner3->id,
            'name' => 'Partner Name',
            'city' => 'City Name',
            'lat' => 0.0, // replace with actual latitude
            'lng' => 0.0, // replace with actual longitude
            'class' => 'أ', // replace with actual class
            'CR' => 1485, // replace with actual CR
        ]);

        $partner1->addRole(2); 
        $partner2->addRole(2); 
        $partner3->addRole(2); 

    }
}
