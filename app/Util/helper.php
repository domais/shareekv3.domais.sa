<?php

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
