<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $permission)
    {
        // You can now use $parameter in your middleware
        $user = auth()->user();

        $result = havePermission($user,$permission);

        if (!$result) {
            abort(403,'لا تملك الصلاحيات الكافية لدخول');
        }
        

    
        return $next($request);
    }
}
