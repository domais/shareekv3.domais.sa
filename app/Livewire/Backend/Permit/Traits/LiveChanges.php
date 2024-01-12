<?php

namespace App\Livewire\Backend\Permit\Traits;

use App\Models\Draft;
use App\Models\File;
use App\Models\History;
use App\Models\Partnership;
use App\Models\Permit;
use App\Models\Speaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
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

    public function addPartnership()
    {
        try {
            $this->partnershipForm->validate();
        } catch (ValidationException $thTwo) {
            $this->errors = $thTwo->validator->errors()->all();
            return;
        }
        $this->partnerships[] = $this->partnershipForm->toArray();

        $this->partnershipForm->reset(); 
    }

    public function deleteSpeaker($index)
    {
        unset($this->speakers[$index]);
    }

    #[On('dateUpdated')] 
    public function dateUpdated($id,$formattedDate)
    {
        $this->form->{$id} = $formattedDate;
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

    public function saveDraft($permitData, $draft = null,$speakers = [],$partnerships = [])
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
            $draft->partnership = json_encode($partnerships);
        } else {
            $order_number = $draft->order_number;
            $permitData['order_number'] = $order_number;
            $draft->update($permitData);
            $draft->speakers = json_encode($speakers);
            $draft->partnership = json_encode($partnerships);
        }
    
        $draft->save();
    }


    public function savePermit($permitData,$speakers,$partnerships,$permit = null,$image = null)
    {
        $permitData = array_map(function($value) {
            return $value === "" ? null : $value;
        }, $permitData);

        $permitData['literary_id'] =  $permitData['litrary_children_id'];
        $permitData['status_id'] =  2;
        
        DB::transaction(function () use ($permitData,$speakers,$permit,$partnerships) {
            if ($permit) {
                // update permit
                $permitData['status_id'] = 3;
                $order_number = $permit->order_number;
                $permitData['order_number'] = $order_number;
                $permit->update($permitData);
                $permit->speakers()->delete();
                $permit->partnerships()->delete();


                AddToHistory($permit->id,$permitData['status_id'],true);
                ChangePermitStatus($permit);

                    // Handle files
                foreach ($permit->fileable as $file) {
                    switch ($file->use) {
                        case 'adv':
                            if (!is_string($permitData['image_adv'])) {
                                Storage::delete('public/'.$file->path);
                                $file->path = $permitData['image_adv']->store('files/'.$permit->order_number.'/adv','public');
                            }
                            break;
                        case 'approval_letter':
                            if ($permitData['event_location'] == 2 && !is_string($permitData['approval_file'])) {
                                Storage::delete($file->path);
                                $file->path = $permitData['approval_file']->store('files/'.$permit->order_number.'/approval_letter');
                            }elseif ($permitData['event_location'] == 1) {
                                Storage::delete($file->path);
                                $file->delete();
                            }
                            break;
                        case 'location_image':
                            if ($permitData['event_location'] == 2 && !is_string($permitData['location_image'])) {
                                Storage::delete($file->path);
                                $file->path = $permitData['location_image']->store('files/'.$permit->order_number.'/location_image');
                            } elseif ($permitData['event_location'] == 1) {
                                Storage::delete($file->path);
                                $file->delete();
                            }
                            break;
                    }
                    $file->save();
                }



            }
            else{
                // create permit
                $permit = Permit::create($permitData);

                $permit->order_number = date('y').str_pad($permit->id, 5, '0', STR_PAD_LEFT);
                $permit->save();

                // start files upload

                $image = new File();
                $image->name = $permit->order_number;
                $image->use = 'adv';
                $image->type = 'image';
                $image->path = $permitData['image_adv']->store('files/'.$permit->order_number.'/adv','public');

                $permit->fileable()->save($image);

                if ($permitData['event_location'] == 2) {
                    $approval_file = new File();
                    $approval_file->name = $permit->order_number;
                    $approval_file->use = 'approval_letter';
                    $approval_file->type = 'pdf';
                    $approval_file->path = $permitData['approval_file']->store('files/'.$permit->order_number.'/approval_letter','public');
                    $permit->fileable()->save($approval_file);

                    $location_image = new File();
                    $location_image->name = $permit->order_number;
                    $location_image->use = 'location_image';
                    $location_image->type = 'image';
                    $location_image->path = $permitData['location_image']->store('files/'.$permit->order_number.'/location_image','public');
                    $permit->fileable()->save($location_image);

                }

                AddToHistory($permit->id,$permitData['status_id']);
                ChangePermitStatus($permit);

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
            
            foreach ($partnerships as $key => $item) {
                $parntership = new Partnership();
                $parntership->permit_id = $permit->id;
                $parntership->partner_id = auth()->user()->owner->id;

                $parntership->name = $item['name'];
                $parntership->type = $item['type'];
                $parntership->description = $item['description'];

                $parntership->save();
            }

            
        });
    }

}