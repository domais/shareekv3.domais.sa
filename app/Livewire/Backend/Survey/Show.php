<?php

namespace App\Livewire\Backend\Survey;

use App\Models\Survey;
use Livewire\Component;

class Show extends Component
{
    public Survey $survey;

    public function mount()
    {
        $this->survey =  $this->survey->load('surveyable');
    }




    public function render()
    {
        return view('livewire.backend.survey.show');
    }
}
