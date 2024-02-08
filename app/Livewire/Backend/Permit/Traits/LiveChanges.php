<?php

namespace App\Livewire\Backend\Permit\Traits;

use App\Models\Draft;
use App\Models\Event;
use App\Models\File;
use App\Models\History;
use App\Models\Partner;
use App\Models\Partnership;
use App\Models\Permit;
use App\Models\Speaker;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;

trait LiveChanges
{
    
    public function updatedForm()
    {
        if ($this->form->literary_id) {
           $this->Litrary_childes =  getChildes($this->form->literary_id);
        }
        if ($this->form->event_location) {
            if ($this->form->event_location == 1 || $this->form->event_location == 3) {
                if (auth()->user()->hasRole('User')) {
                    # code...
                    $coordinates = explode(',', auth()->user()->owner->coordinates);
                    $this->form->lat = $coordinates[0];
                    $this->form->lng = $coordinates[1];  
                }
                else{

                }
                        
            }
        }
    }
    #[On('changeSpeakerStatus')] 
    public function changeSpeakerStatus($index, $status)
    {
        try {
            $startDate = Carbon::parse($this->form->start_date);
            $now = Carbon::now();
    
            if ($status == 'reservations' && $now->diffInDays($startDate) < 10) {
                $this->speakers[$index]['reservations'] = false;
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('start_date', 'لا يمكنك طلب الدعم اللوجيستي إلا إذا كان تاريخ بداية المبادرة بعد 10 أيام على الأقل');
                throw new ValidationException($validator);
            }
    
            if ($status == 'reward' && $now->diffInDays($startDate) < 2) {
                $this->speakers[$index]['reward'] = false;
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('start_date', 'لا يمكنك  طلب المكافأة إلا إذا كان تاريخ بداية المبادرة بعد يومين  على الأقل');
                throw new ValidationException($validator);
            }

            // Added by Domais
            $user = auth()->user();
            $partner = Partner::where('owner_id', $user->id)->first();
            $speakersWithRewardOrReservation = array_filter($this->speakers, function ($speaker) {
                return $speaker['reward'] == true || $speaker['reservations'] == true;
            });
            
            if ($partner) {
                if (count($speakersWithRewardOrReservation) > $partner->points && ($this->speakers[$index]['reward'] == true || $this->speakers[$index]['reservations'])){
                    $validator = Validator::make([], []); // empty data and rules
                    $validator->errors()->add('','عفواً .. لقد استهلكت كامل رصيدك للدعم اللوجستي');
                    throw new ValidationException($validator);
                }
            }
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
    }

    public function addSpeaker()
    {
        try {
            if ($this->form->start_date == null) {
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('start_date', 'لا يمكنك إضافة متحدث حتى تحدد تاريخ البدء');
                throw new ValidationException($validator);
            }
    
            $this->speakerForm->validate();
    
            if (!$this->speakerForm->twitter && !$this->speakerForm->instagram && !$this->speakerForm->linkedin) {
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('socials', 'يجب أن يكون هناك رابط واحد على الأقل لوسائل التواصل الاجتماعي (تويتر ، إنستجرام ، لينكدين)');
                throw new ValidationException($validator);
            }
    
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
            $needSupport = collect($speakers)->contains(function ($speaker) use (&$counter_speakers) {
                if ($speaker['reservations'] || $speaker['reward']) {
                    return true;
                }
                return false;
            });

            $counter_speakers = array_reduce($speakers, function ($count, $speaker) {
                return $count + ($speaker['reservations'] || $speaker['reward'] ? 1 : 0);
            }, 0);
            
            if ($needSupport) {
                $permitData['need_support'] = true;
            }
            
            if ($permitData['event_type_id'] == 2) {
                $permitData['category_id'] = 1;
            }

            if ($permit) {

                $check_event_exist = Event::where('order_number', $permit->order_number)->exists();

                //dd("hello",$permitData);
                // update permit
                $order_number = $permit->order_number;
                $permitData['order_number'] = $order_number;
                if (!$check_event_exist) {

                    $permitData['status_id'] = $permit->status_id == 10 ? 3 : $permit->status_id;

                    $permit->update($permitData);
                }
                
                $permit->user->owner->points = $permit->user->owner->points - $counter_speakers;

                if ($permit->user->owner->points < 0) {
                    throw new \Exception('عفواً .. لقد استهلكت كامل رصيدك للدعم اللوجستي');
                }

                $permit->user->owner->save();
                $permit->points = $counter_speakers;
                $permit->save();
                $permit->speakers()->delete();
                $permit->partnerships()->delete();

      



                AddToHistory($permit->id,$permitData['status_id'],true,'معاد من قبل الشريك');
                ChangePermitStatus($permit);
                    // Handle files
                foreach ($permit->fileable as $file) {
                    switch ($file->use) {
                        case 'adv':
                            if (!is_string($permitData['image_adv'])) {
                                Storage::disk('do')->delete('public/'.$file->path);
                                $file->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/adv', $permitData['image_adv'], 'public');

                            }
                            break;
                        case 'approval_letter':
                            if ($permitData['event_location'] == 2 && !is_string($permitData['approval_file'])) {
                                Storage::disk('do')->delete('public/'.$file->path);
                                $file->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/adv', $permitData['approval_file'], 'public');

                            }elseif ($permitData['event_location'] == 1) {
                                Storage::delete($file->path);
                                $file->delete();
                            }
                            break;
                        case 'location_image':
                            if ($permitData['event_location'] == 2 && !is_string($permitData['location_image'])) {
                                Storage::disk('do')->delete('public/'.$file->path);
                                $file->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/adv', $permitData['location_image'], 'public');

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
                $permit->from_old_db = false;
                $permit->save();

                $user = auth()->user();
                $partner = Partner::where('owner_id', $user->id)->first();
                
                if ($partner) {
                 //  dd($partner->points,$counter_speakers,$speakers);
                    $newPoints = $partner->points - $counter_speakers;
                    if ($newPoints < 0) {
                        throw new \Exception("لايوجد لديك رصيد كافي للدعم اللوجستي<br>طلبت رصيد $counter_speakers وانت لديك فقط $partner->points");
                    }
                    $permit->points = $counter_speakers;
            
                    $partner->points = $newPoints;
                    $partner->save();
                    $permit->save();
                }

                // start files upload

                $image = new File();
                $image->name = $permit->order_number;
                $image->use = 'adv';
                $image->type = 'image';
            
                $image->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/adv', $permitData['image_adv'], 'public');


                $permit->fileable()->save($image);

                if ($permitData['approval_file']) {
                    $approval_file = new File();
                    $approval_file->name = $permit->order_number;
                    $approval_file->use = 'approval_letter';
                    $approval_file->type = 'pdf';
                    $approval_file->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/approval_letter', $permitData['approval_file'], 'public');
                    $permit->fileable()->save($approval_file);
                }
                if ($permitData['location_image']) {
                    $location_image = new File();
                    $location_image->name = $permit->order_number;
                    $location_image->use = 'location_image';
                    $location_image->type = 'image';
                   // $location_image->path = $permitData['location_image']->store('files/'.$permit->order_number.'/location_image','public');
                    $location_image->path = Storage::disk('do')->putFile('files/'.$permit->order_number.'/location_image', $permitData['location_image'], 'public');
                    $permit->fileable()->save($location_image);
                }

               

                AddToHistory($permit->id,$permitData['status_id']);
                ChangePermitStatus($permit);

                /*    
                    $fileName = $permitData['image_adv']->getClientOriginalName();
                    $filePath = 'rahmaniDjamel/' . Auth::id() ;
            
                    // Upload the image to DigitalOcean Spaces
                    $path = Storage::disk('digitalocean')->putFileAs($filePath, $permitData['image_adv'], $fileName, 'public');

                    $url = Storage::disk('digitalocean')->url($path);


                    dd($path,$url);
                */


            }

            if ($permit->need_support == 1) {
                $support = $permit->support;

                if ($support) {
                    $support->status_id = 12;
                    $support->save();
                    
                }
                else {
                    $support = $permit->support()->create([
                        'status_id' => 11,
                        'order_number' => $permit->order_number,
                        
                    ]);
                }
            }
            else {
                $support = $permit->support;
                if ($support) {
                    $permit->support->delete();
                }
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
                $speaker->reservations = $item['reservations'];
                $speaker->reward = $item['reward'];
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