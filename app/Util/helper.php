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
