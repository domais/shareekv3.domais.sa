<?php

namespace App\Livewire\Backend\Permit\Traits;

use App\Models\Draft;
use App\Models\Permit;
use App\Models\Speaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;

trait LiveChanges
{
    
    public function updatedForm()
    {
        if ($this->form->literary_id) {
           $this->Litrary_childes =  getChildes($this->form->literary_id);
        }
    }

    public function addSpeaker()
    {
        try {
            $this->speakerForm->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
        $this->speakers[] = $this->speakerForm->toArray();

        $this->speakerForm->reset(); 
    }

    public function deleteSpeaker($index)
    {
        unset($this->speakers[$index]);
    }
    
    #[On('editorUpdated')] 
    public function editorUpdated($data)
    {
        $this->form->description = $data;
    }

    #[On('updateLocation')] 
    public function updateLocation($lat,$lng)
    {
        $this->form->lat = $lat;
        $this->form->lng = $lng;
    }

    public function saveDraft($permitData, $draft = null,$speakers = [])
    {
        $permitData = array_map(function($value) {
            return $value === "" ? null : $value;
        }, $permitData);
        
        $permitData['literary_id'] =  $permitData['litrary_children_id'];
        //dd($permitData,$speakers);
    
        if ($draft === null) {
            $draft = Draft::create($permitData);
            $draft->order_number = date('y').str_pad($draft->id, 5, '0', STR_PAD_LEFT);
            $draft->speakers = json_encode($speakers);
        } else {
            $order_number = $draft->order_number;
            $permitData['order_number'] = $order_number;
            $draft->update($permitData);
            $draft->speakers = json_encode($speakers);
        }
    
        $draft->save();
    }


    public function savePermit($permitData,$speakers,$permit = null)
    {
        $permitData = array_map(function($value) {
            return $value === "" ? null : $value;
        }, $permitData);

        $permitData['literary_id'] =  $permitData['litrary_children_id'];
        $permitData['status_id'] =  2;
        
        DB::transaction(function () use ($permitData,$speakers,$permit) {
            if ($permit) {
                $order_number = $permit->order_number;
                $permitData['order_number'] = $order_number;
                $permit->update($permitData);
                $permit->speakers()->delete();
            }
            else{
                $permit = Permit::create($permitData);
                $permit->order_number = date('y').str_pad($permit->id, 5, '0', STR_PAD_LEFT);
                $permit->save();

            }


            foreach ($speakers as $key => $item) {
                $speaker = new Speaker();
                $speaker->permit_id = $permit->id;
                $speaker->name = $item['name'];
                $speaker->phone = $item['phone'];
                $speaker->email = $item['email'];
                $speaker->nationality = $item['nationality'];
                $speaker->type = $item['type'];
                $speaker->instagram = $item['instagram'];
                $speaker->twitter = $item['twitter'];
                $speaker->linkedin = $item['linkedin'];
                $speaker->partner_id = auth()->user()->owner->id;

                $speaker->save();
            }
            
        });
    }
}