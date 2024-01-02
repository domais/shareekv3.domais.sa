<?php

use App\Models\Event;
use App\Models\Permit;
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
function getEvents($status_id = 1, $is_event = false)  {

    $user = auth()->user();

    $role = $user->roles()->first()->name;

    $events = [];

    if($role == 'User') {
        if($is_event) {
            $events = Event::where('status_id', $status_id)->where('user_id', $user->id)->get();
        } else {
            $events = Permit::where('status_id', $status_id)->where('user_id', $user->id)->get();
        }
    } else {
        if($is_event) {
            $events = Event::where('status_id', $status_id)->where('admin_id',$user->id)->get();
        } else {
            $events = Permit::where('status_id', $status_id)->where('admin_id',$user->id)->get();
        }
    }

    return $events; 
}
