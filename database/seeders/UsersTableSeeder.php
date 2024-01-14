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
            'email'     => 'eng.ahmed_alghamdi@outlook.com',
            'phone'     => '0555555551',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin2 = User::create([
            'name'      => 'أحمد الغامدي',
            'email'     => 'hxhdono34@gmail.com',  
            'phone'     => '0555555552',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin->addRole(1); 
        $superAdmin2->addRole(1); 


        $partner1  = User::create([
            'name'      => 'عبدالله الفوزان',
            'email'     => 'hxhdono11@gmail.com',
            'phone'     => '0555555553',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner1->id,
            'name' => 'فابريكا دي كافيه',
            'city' => 'الرياض',
            'lat' => 24.830973,
            'lng' => 46.659908,
            'class' => 'أ',
            'CR' => 7007455674,
        ]);


        $partner2  = User::create([
            'name'      => 'تركي المالح',
            'email'     => 'partner2@gmail.com',
            'phone'     => '0555555554',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner2->id,
            'name' => 'هاف مليون',
            'city' => 'الرياض',
            'lat' => 21.559637,
            'lng' => 39.131173,
            'class' => 'أ',
            'CR' => 7017333890,
        ]);


        $partner3  = User::create([
            'name'      => 'منيرة الحمود',
            'email'     => 'partner3@gmail.com',
            'phone'     => '0555555555',
            'password'  => Hash::make(123456),
        ]);



        Partner::create([
            'owner_id' => $partner3->id,
            'name' => 'ثلث',
            'city' => 'جدة',
            'lat' => 21.631101,
            'lng' => 39.133647,
            'class' => 'أ',
            'CR' => 70037801129,
        ]);

        $partner1->addRole(2); 
        $partner2->addRole(2); 
        $partner3->addRole(2); 

        $guest  = User::create([
            'name'      => 'أحمد محمود',
            'email'     => 'guest@gmail.com',
            'phone'     => '0555555577',
            'password'  => Hash::make(123456),
        ]);

        $guest->addRole(3); 


    }
}
