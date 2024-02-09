<?php

namespace App\Livewire\Forms;

use Carbon\Carbon;
use Livewire\Form;
use App\Models\File;
use App\Models\Partner;
use App\Models\Announcement;
use Livewire\Attributes\Validate;
use Illuminate\Support\Facades\Storage;

class AnnouncementForm extends Form
{
    public $title;
    public $description;
    public $timezone;
    public $start_at;
    public $end_at;
    public $is_active; // This will store both lat and lng

    public function rules()
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'start_at' => ['nullable', 'date'],
            'end_at' => ['nullable', 'date'],
            'is_active' => ['required', 'boolean'],
        ];
    }

    public function save($user)
    {
        $announcement = new Announcement();
        $announcement->owner_id = $user->id;
        $announcement->title = $this->title;
        $announcement->description = $this->description;

        // convert client timezone to UTC
        $announcement->start_at = Carbon::parse($this->start_at, $this->timezone)->setTimezone('Asia/Riyadh')->addHours(2);
        $announcement->end_at = Carbon::parse($this->end_at, $this->timezone)->setTimezone('Asia/Riyadh')->addHours(2);
        $announcement->is_active = $this->is_active;
        $announcement->save();
    }
}
