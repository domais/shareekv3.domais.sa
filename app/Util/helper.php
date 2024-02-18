<?php

use App\Mail\CodeMail;
use App\Models\Code;
use App\Models\Draft;
use App\Models\Event;
use App\Models\EventType;
use App\Models\History;
use App\Models\Literary;
use App\Models\Permit;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
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
				$now = now();
				foreach($statusesEvent as $status) {
					$events[$status] = Event::where('user_id', $user->id)
					->where('status_id', $status)
					->get();
				}
			} else {
				foreach($statuses as $status) {
					$events[$status] = Permit::where('status_id', $status)->where('user_id', $user->id)->get();
				}
				$events[1] = Draft::where('user_id', $user->id)->get();
			}
		} else {
			if($is_event) {
				$now = now();
				//dd($now->format('Y-m-d H:i'));

				foreach($statusesEvent as $status) {
					$query = Event::query();
				
					if (!$user->hasRole('SuperAdmin')) {
						$query->where('admin_id', $user->id);
					}
				
					$events[$status] = $query->where('status_id', $status)->get();
				}
			} else {
				foreach($statuses as $status) {
					if($status == 2) {
						$events[$status] = Permit::where('status_id', $status)
						->whereNull('admin_id')->get();
					} else {
						if ($user->hasRole('SuperAdmin')) {
							$events[$status] = Permit::where('status_id', $status)->get();
						} else {
							$events[$status] = Permit::where('status_id', $status)
							->where('admin_id', $user->id)->get();
						}
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
				'icon'              => 'success',
				'title'             => 'تمت العملية بنجاح',
				'text'              => 'تمت العملية بنجاح',
				'timerProgressBar'  => true,
				'showConfirmButton' => false,
				'timer'             => 4000	
	
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
			case 'PermitUserDraft':
				return [
					['type' => 'link' , 'title' => 'إكمال', 'onclick' => null , 'href' => 'permit.draft', 'class' => 'btn btn-secondary'],
					['type' => 'sweetalert' , 'title' => 'حذف', 'onclick' => 'Act_UserDeletePermit', 'class' => 'btn btn-outline-danger']
				];
			break;

		
			case 'PermitUserReturned':
				return[
					['type' => 'link' , 'title' => 'تعديل', 'href' => 'permit.edit','class' => 'btn btn-secondary'],
					['type' => 'sweetalert' , 'title' => 'حذف', 'onclick' => 'Act_UserDeletePermit', 'class' => 'btn btn-outline-danger']
				];
			break;

		
			case 'PermitUserReview':
				return[
					['type' => 'link' , 'title' => 'تعديل', 'href' => 'permit.edit','class' => 'btn btn-secondary'],
					['type' => 'sweetalert' , 'title' => 'حذف', 'onclick' => 'Act_UserDeletePermit', 'class' => 'btn btn-outline-danger']
				];
			break;


			case 'PermitAdminNewOrders':
				return[
					['type' => 'sweetalert' , 'title' => 'إبدأ الدراسة', 'onclick' => 'Act_AdminStartStudy','class' => 'btn btn-secondary'],
				];
			break;


			case 'PermitAdminReview':
				return[
					['type' => 'sweetalert' , 'title' => 'موافقة مبدأية', 'onclick' => 'IntialApproved','class' => 'btn btn-secondary'],
					['type' => 'sweetalert' , 'title' => 'رفض', 'onclick' => 'Act_AdminRejectPermit', 'class' => 'btn btn-outline-danger']
				];
			break;


			case 'PermitAdminAwatingApproval':
				return[
					['type' => 'modal' , 'title' => 'تشغيل', 'modal' => 'Permit-Admin-Final-Approval-Modal' ,'class' => 'btn btn-warning'],
					['type' => 'sweetalert' , 'title' => 'تشغيل بدون تصريح', 'onclick' => 'Act_ApproveWithoutPirmet', 'class' => 'btn btn-outline-secondary btn-sm d-flex align-items-center'],
				];
			break;


			case 'PermitUserEdit':
				return[
					['type' => 'link' , 'title' => 'تعديل', 'href' => 'permit.edit','class' => 'btn btn-secondary'],
				];
			break;

			case 'SupportUserReturned':
				return[
					['type' => 'link' , 'title' => 'تعديل', 'href' => 'support.edit','class' => 'btn btn-secondary'],
				//	['type' => 'sweetalert' , 'title' => 'حذف', 'onclick' => 'Act_UserDeletePermit', 'class' => 'btn btn-outline-danger']
				];
			break;







			//Event Buttons

			case 'EventShareLink':
				return[
					['type' => 'switch'],
					['type' => 'sweetalert' , 'title' => '<i class="fa-solid fa-share-nodes me-2"></i> مشاركة', 'onclick' => 'Act_ShareEvent', 'class' => 'btn btn-outline-secondary btn-sm d-flex align-items-center'],
				];
			break;


			case 'AskForClose':
				return[
					//['type' => 'sweetalert' , 'title' => 'طلب إغلاق', 'onclick' => 'Act_UserDeletePermit', 'class' => 'btn btn-outline-secondary'],
				];
			break;


			case 'EventUserUploadTawtheeq':
				return[
					['type' => 'modal' , 'title' => 'إرفاق التوثيق', 'modal' => 'Event-User-Upload-Tawtheeq-Modal', 'class' => 'btn btn-warning'],
				];
			break;


			case 'Approval':
				return[
					['type' => 'sweetalert' , 'title' => 'إعتماد التوثيق', 'onclick' => 'Act_AdminApprove', 'class' => 'btn btn-warning'],
					['type' => 'sweetalert' , 'title' => 'إطلاع', 'onclick' => 'show_images_urls', 'class' => 'btn btn-secondary'],

				];
			break;

			case 'PermitAdminNewSupport':
				return [
					['type' => 'sweetalert' , 'title' => 'إبدأ الدراسة', 'onclick' => 'Act_AdminStartStudySupport','class' => 'btn btn-secondary'],
				];
			break;

			case 'PermitAdminNewSupportUnderStudy':
				return [
					['type' => 'sweetalert' , 'title' => 'قبول', 'onclick' => 'Act_Admin_Support', 'class' => 'btn btn-success'],
					['type' => 'sweetalert' , 'title' => 'رفض', 'onclick' => 'Act_AdminRejectSupport', 'class' => 'btn btn-outline-danger'],

				];
			break;
			
			case 'archiveSupport':
				return [
				//	['type' => 'sweetalert' , 'title' => 'أرشفة', 'onclick' => 'Act_AdminStartStudySupportarchive','class' => 'btn btn-success'],
				];



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

			case 'admins':
				if ($updateCache) {
					// Remove it from cache
					Cache::forget('admins');
				} else {
					return Cache::rememberForever('admins', function () {
						$users =  Role::where('name', 'Adminstrator')->first()->users;
			
						$usersWithPermission = $users->filter(function ($user) {
							return $user->hasPermission('permit-update');
						});
			
						return $usersWithPermission;
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

	function AddToHistory($id,$status,$edited = null,$descreption = null,$notes = null)
	{
		$history = new History();
		$history->permit_id = $id;
		$history->status_id =$status;
		$history->user_id = auth()->id();
		$history->descreption = $descreption;
		$history->notes = $notes;
		$history->edited = $edited;

		$history->save();
	}

	function havePermission(User $user, $search)
	{
		$permissions = $user->permissions;
	
		foreach ($permissions as $permission) {
			if ($permission->name == $search) {
				return true;
			}
		}
	
		return false;
	}

	function sendOtp($user)
    {
        $otp = rand(100000, 999999);

        $code = new Code();
        $code->code = $otp;
        $code->user_id = $user->id;
        $code->expired_at = now()->addMinutes(5);
        $code->save();

        Mail::to($user->email)->send(new CodeMail($otp, $user->email));


        return true;
    }
