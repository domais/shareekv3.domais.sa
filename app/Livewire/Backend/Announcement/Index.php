<?php

namespace App\Livewire\Backend\Announcement;

use App\Models\File;
use App\Models\Permit;
use App\Models\Support;
use Livewire\Component;
use Livewire\Attributes\On;
use App\Models\Announcement;
use Livewire\WithFileUploads;
use App\Livewire\Forms\AnnouncementForm;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;

class Index extends Component
{
    use WithFileUploads;
    public AnnouncementForm $form;
    public $announcements;


    public $ValidationErrors = [];

    public function save()
    {
       // dd($this->form->toArray());

        $this->form->validate();

        $this->form->save(auth()->user());

        $this->dispatch('announcement_modal', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    public function mount()
    {
        $this->announcements = Announcement::whereIsActive(true)
        ->where('start_at', '<=', Carbon::now())
        ->where('end_at', '>=', Carbon::now())
        ->get();

        if (auth()->user()->hasRole('User')) {
            dd($this->announcements, Carbon::now()->format('Y-m-d H:i'));

        }
    }



    public function render()
    {
        return view('livewire.backend.announcement.index');
    }
}
