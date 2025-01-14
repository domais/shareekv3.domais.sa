<?php

namespace App\Livewire\Backend\Support;

use App\Exports\SupportExcel;
use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Mail\ChangeStatus;
use App\Mail\PermitSupportRejected;
use App\Models\File;
use App\Models\History;
use App\Models\Permit;
use App\Models\Status;
use App\Models\Support;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;
use Maatwebsite\Excel\Facades\Excel;

class Index extends Component
{
    use WithFileUploads,LiveChanges;

    public $requests = [];
    public $initial_approve = [];
    public $rejectd = [];
    public $approved = [];
    public $selected_id = 0;
    public $file;

    public function excelExport()
    {
        return Excel::download(new SupportExcel(), 'supports.xlsx');
    }

    private function getPermitsByRoleAndStatus($role, $status)
    {
        $query = Permit::where('need_support', 1)
            ->whereHas('support', function ($query) use ($status) {
                $query->where('status_id', $status);
            });

        if ($role === 'SuperAdmin') {
            return $query->get();
        } elseif ($role === 'Adminstrator') {
            return $query->where('admin_id', auth()->user()->id)->get();
        } else {
            return $query->where('user_id', auth()->user()->id)->get();
        }
    }


    public function mount()  {


        if (auth()->user()->hasRole('SuperAdmin')) {
   
            $this->requests  = $this->getPermitsByRoleAndStatus('SuperAdmin', 11);
            $this->initial_approve = $this->getPermitsByRoleAndStatus('SuperAdmin', 12);
            $this->rejectd = $this->getPermitsByRoleAndStatus('SuperAdmin', 15);
            $this->approved = $this->getPermitsByRoleAndStatus('SuperAdmin', 13);



        } elseif (auth()->user()->hasRole('Adminstrator')) {
            $this->requests  = $this->getPermitsByRoleAndStatus('Adminstrator', 11);
            $this->initial_approve = $this->getPermitsByRoleAndStatus('Adminstrator', 12);
            $this->rejectd = $this->getPermitsByRoleAndStatus('Adminstrator', 15);
            $this->approved = $this->getPermitsByRoleAndStatus('Adminstrator', 13);



        }else {
            # code...
            $this->requests  = $this->getPermitsByRoleAndStatus('User', 11);
            $this->initial_approve = $this->getPermitsByRoleAndStatus('User', 12);
            $this->rejectd = $this->getPermitsByRoleAndStatus('User', 15);
            $this->approved = $this->getPermitsByRoleAndStatus('User', 13);
        }

    }

    public function selected($id)
    {
        $this->selected_id = $id;
    }

 
    #[On('Act_Admin_Support')] 
    public function Act_Admin_Support($id,$model)
    {
            //dd($id,$model);

            $support = Permit::findorfail($id);

            $support->support->update(['status_id' => 13]);
  

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Act_AdminStartStudySupport')] 
    public function Act_AdminStartStudySupport($id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 12]);

        $history = new History();
        $history->permit_id = $id;
        $history->status_id = 15;
        $history->user_id = auth()->id();
        $history->descreption =  'تم بدء دراسة الدعم';
        $history->support_id = $permit->support->id;
        $history->save();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Act_AdminStartStudySupportarchive')] 
    public function Act_AdminStartStudySupportarchive($id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 14]);

        $history = new History();
        $history->permit_id = $id;
        $history->status_id = 15;
        $history->user_id = auth()->id();
        $history->descreption =  'تم قبول الدعم';
        $history->support_id = $permit->support->id;
        $history->save();

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];
        

        Mail::to($permit->user->email)->send(new ChangeStatus($data));

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Definitely_Decline_Support')] 
    public function Definitely_Decline_Support($id,$model,$reason)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 16]);

        $permit->user->owner->points += $permit->points;
        $permit->user->owner->save(); 

        $history = new History();
		$history->permit_id = $id;
		$history->status_id = 16;
		$history->user_id = auth()->id();
		$history->descreption = $reason;
        $history->support_id = $permit->support->id;
		$history->save();
        


        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
            'reject_reason' => $reason
        ];

        Mail::to($permit->user->email)->send(new PermitSupportRejected($data));



        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }



    #[On('RejectPermit_Dispatch')] 
    public function RejectPermit_Dispatch($id,$model,$reason)
    {
        $permit = Permit::findorfail($id);

        $permit->support->update(['status_id' => 15]);

        $permit->user->owner->points += $permit->points;
        $permit->user->owner->save(); 

       // AddToHistory($permit->id,$permit->status_id,null,$reason);

        $history = new History();
        $history->permit_id = $id;
        $history->status_id = 15;
        $history->user_id = auth()->id();
        $history->descreption = $reason;
        $history->support_id = $permit->support->id;
        $history->save();


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }


    public function render()
    {
        return view('livewire.backend.support.index');
    }
}
