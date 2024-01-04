<?php

use App\Models\Draft;
use App\Models\Event;
use App\Models\EventType;
use App\Models\Literary;
use App\Models\Permit;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

function is_active($route)
{
    $segments = explode('.', Route::current()->getName());
    $routePrefix = $segments[0]; // returns 'clients'

    $segments2 = explode('.', $route);
    $routePrefix2 = $segments2[0]; 
    
    return $routePrefix ==  $routePrefix2;
}



// Added by Domais 2024-01-02
// convert Arabic numbers ١ ٢ ٣ to english 1 2 3

function ArToEn($input) {
	if(empty($input)) return $input;
	$En = array("0","1","2","3","4","5","6","7","8","9");
	$Ar = array('٠','١','٢','٣','٤','٥','٦','٧','٨','٩');
	return str_replace($Ar, $En, $input);
}

/** 
 * Added by Rahmani 
 * 
 * this function to check role of user and get event or permit based on status_id
 * **/
    function getEvents($is_event = false) {

        $user = auth()->user();

        $role = $user->roles()->first()->name;

        $events = [];

        $statuses = [2, 3, 4, 10];
        $statusesEvent = [5, 6, 7, 8];
        if($role == 'User') {
            if($is_event) {
                foreach($statusesEvent as $status) {
                    $events[$status] = Event::where('status_id', $status)
                    ->where('user_id', $user->id)->get();
                }
            } else {
                foreach($statuses as $status) {
                    $events[$status] = Permit::where('status_id', $status)->where('user_id', $user->id)->get();
                }
                $events[1] = Draft::where('user_id', $user->id)->get();
            }
        } else {
            if($is_event) {
                foreach($statusesEvent as $status) {
                    $events[$status] = Event::where('status_id', $status)
                    ->where('admin_id', $user->id)->get();
                }
            } else {
                foreach($statuses as $status) {
                    if($status == 2) {
                        $events[$status] = Permit::where('status_id', $status)
                        ->whereNull('admin_id')->get();
                    } else {
                        $events[$status] = Permit::where('status_id', $status)
                        ->where('admin_id',$user->id)->get();
                    }
                }
            }
        }
        
        return $events;
    }

    function SwalResponse($default = 1)
    {
        if ($default == 1) {
            
            return [
                'icon' => 'success',
                'title' => 'تمت العملية بنجاح',
                'text' => 'تمت العملية بنجاح',
    
            ];
        } else {

            return [
                'icon' => 'error',
                'title' => 'حدث خطأ',
                'text' => 'حدث خطأ',
    
            ];
        }
        

    }

    function KanbanButtons($name) {

        switch ($name) {
            case 'UserDraft':
                return [
                    ['title' => 'إكمال', 'href' => 'permit.draft', 'class' => 'btn btn-secondary'],
                    ['title' => 'حذف', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']
                ];
                break;
        
            case 'UserRejected':
                return[
                    ['title' => 'تعديل', 'href' => 'permit.edit','class' => 'btn btn-secondary'],
                    ['title' => 'حذف', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']
                ];
                break;
            case 'AdminAssignToMe':
                return[
                    ['title' => 'إبدأ الدراسة', 'href' => 'permit.draft','class' => 'btn btn-secondary'],
                ];
                break;
            case 'AdminIntialApproved':
                return[
                    ['title' => 'موافقة مبدأية', 'href' => 'permit.draft','class' => 'btn btn-secondary'],
                    ['title' => 'رفض', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']
                ];
                break;

             case 'AdminFinalApproved':
                    return[
                        ['title' => 'تشغيل', 'href' => 'permit.draft','class' => 'btn btn-warning'],
                        ['title' => 'تشغيل بدون تصريح', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-secondary btn-sm d-flex align-items-center'],
                    ];
                    break;

            //Event Buttons

            case 'AskForClose':
                return[
                    ['title' => 'طلب إغلاق', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-secondary btn-sm d-flex align-items-center'],
                ];
                break;

            case 'AssignFiles':
                    return[
                        ['title' => 'إرفاق التوثيق', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-secondary btn-sm d-flex align-items-center'],
                    ];
                    break;

            case 'Approval':
                        return[
                            ['title' => 'إعتماد التوثيق', 'onclick' => 'DeletePermit', 'class' => 'btn btn-warning btn-sm d-flex align-items-center'],
                            ['title' => 'رفض', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']

                        ];
                        break;



        }

    }

    function settings($key, $updateCache = false)
    {

        switch ($key) {
            case 'event_type':

                if ($updateCache) {

                    // Remove it from cache
                    Cache::forget('event_type');
    
                } else {
            
                    
                    return Cache::rememberForever('event_type', function () {
                        return EventType::all();
                    });
    
                }
                
            break;

            case 'Literary_parent':
                if ($updateCache) {
                    // Remove it from cache
                    Cache::forget('Literary_parent');
                } else {
                    return Cache::rememberForever('Literary_parent', function () {
                        return Literary::whereNull('parent_id')->get();
                    });
    
                }    
            break;
            
          
        }

    }

    function getChildes($id)
    {
        return Literary::where('parent_id', $id)->get()->toArray(); 
    }
    function deleteDraft()
    {
        if (session()->has('draft_to_delete')) {
            $draft = Draft::find(session()->get('draft_to_delete'))->first();
            if ($draft) {
                $draft->delete();
                session()->forget('draft_to_delete');
            }
        }
    }
