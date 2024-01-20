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
            'name'      => 'مريم محمد',
            'email'     => 'm.mohammad@nextlevel.com.sa',
            'phone'     => '0555555551',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin2 = User::create([
            'name'      => 'ألآء المعيذر',
            'email'     => 'a.almuaither@nextlevel.com.sa',
            'phone'     => '0555555552',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin3 = User::create([
            'name'      => 'أحمد بو خمسين',
            'email'     => 'bukhamseen.ahmed@gmail.com',
            'phone'     => '0555555553',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin4 = User::create([
            'name'      => 'أحمد الغامدي',
            'email'     => 'eng.ahmed_alghamdi@outlook.com',
            'phone'     => '0555555554',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin5 = User::create([
            'name'      => 'أحمد الغامدي',
            'email'     => 'admin@gmail.com',
            'phone'     => '0555555754',
            'password'  => Hash::make(123456),
        ]);

        $superAdmin->addRole(1);
        $superAdmin2->addRole(1);
        $superAdmin3->addRole(1);
        $superAdmin4->addRole(1);
        $superAdmin5->addRole(1);


        $partner1  = User::create([
            'name'      => 'مريم محمد',
            'email'     => 'maryamhaidar777@gmail.com',
            'phone'     => '0555555555',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner1->id,
            'name' => 'فابريكا دي كافيه',
            'city' => 'الرياض',
            'coordinates' => '21.559637,39.131173',
            'lat' => '21.559637',
            'lng' => '39.131173',
            'class' => 'أ',
            'CR' => 7007455674,
        ]);


        $partner2  = User::create([
            'name'      => 'أحمد بوخمسين',
            'email'     => 'ahmed@quant.com',
            'phone'     => '0555555556',
            'password'  => Hash::make(123456),
        ]);

        Partner::create([
            'owner_id' => $partner2->id,
            'name' => 'هاف مليون',
            'city' => 'الرياض',
            'coordinates' => '21.559637,39.131173',
            'lat' => '21.559637',
            'lng' => '39.131173',
            'class' => 'أ',
            'CR' => 7017333890,
        ]);


        $partner3  = User::create([
            'name'      => 'أحمد الغامدي',
            'email'     => 'eng.ahmed.alghamdi2020@gamil.com',
            'phone'     => '0555555557',
            'password'  => Hash::make(123456),
        ]);



        Partner::create([
            'owner_id' => $partner3->id,
            'name' => 'ثلث',
            'city' => 'جدة',
            'coordinates' => '21.559637,39.131173',
            'lat' => '21.559637',
            'lng' => '39.131173',
            'class' => 'أ',
            'CR' => 70037801129,
        ]);

        $partner1->addRole(2);
        $partner2->addRole(2);
        $partner3->addRole(2);

        $guest  = User::create([
            'name'      => 'شريك تجريبي',
            'email'     => 'partner@gmail.com',
            'phone'     => '0555555577',
            'password'  => Hash::make(123456),
        ]);

        $guest->addRole(3);
    }
}
