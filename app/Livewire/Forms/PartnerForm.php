<?php

namespace App\Livewire\Forms;

use App\Models\File;
use App\Models\Partner;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PartnerForm extends Form
{
    public ?Partner $partner;
    public $partner_name;
    public $CR;
    public $city;
    public $status = "";
    public $coordinates; // This will store both lat and lng
    public $class;
    public $logo;

    public function rules()
    {
        return [
            'partner_name' => ['required', 'string', 'max:255'],
            'CR' => ['nullable', 'numeric'],
            'city' => ['required', 'string', 'in:الرياض,جدة,مكة,أبها'],
            'coordinates' => ['required', 'string', 'regex:/^-?\d{1,3}\.\d+,-?\d{1,3}\.\d+$/'],
            'class' => ['required', 'string', 'in:أ,ب,ج,د'],
            'logo' => ['required', 'image'],
        ];
    }

    public function setForm($parnter)
    {
        $this->partner = $parnter;
        $this->partner_name = $parnter->name;
        $this->CR = $parnter->CR;
        $this->city = $parnter->city;
        $this->coordinates = $parnter->coordinates;
        $this->class = $parnter->class;

    }

    public function save($user)
    {
        $partner = new Partner();
        $partner->owner_id = $user->id;
        $partner->status = 0;
        $partner->name = $this->partner_name;
        $partner->city = $this->city;
        $partner->coordinates = $this->coordinates;
        $partner->lat = explode(',', $this->coordinates)[0];
        $partner->lng = explode(',', $this->coordinates)[1];
        $partner->class = $this->class;
        $partner->points = $this->class == 'أ' ? 20 : ($this->class == 'ب' ? 14 : ($this->class == 'ج' ? 8 : 5));
        $partner->CR = $this->CR;
        $partner->save();

        $path = Storage::disk('do')->putFile('files/logos/'.$partner->id, $this->logo, 'public');

        $document = new File();
        $document->name = $partner->name;
        $document->use = 'logo';
        $document->type = 'image';
        $document->path = $path;
        $partner->fileable()->save($document);

        $imageUrl = Storage::disk('do')->url($path);

    }
}
