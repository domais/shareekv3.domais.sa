<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class CheckPassword
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        if (Hash::check('123456', $request->user()->password)) {
            return redirect()->route('profile.index')->withErrors(['password' => 'كلمة المرور غير آمنة. يرجى تغييرها.']);
        }
    
        return $next($request);
    }
}
