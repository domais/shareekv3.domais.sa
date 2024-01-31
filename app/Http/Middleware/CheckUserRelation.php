<?php

namespace App\Http\Middleware;

use App\Models\Event;
use App\Models\Permit;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRelation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $model)
    {
        $data = $request->route('permit');
        $user = $request->user();
            if ($data->user_id != $user->id && $user->hasRole('User')){
                // Handle the case where the user is not the owner of the event
                abort(403, 'عملية غير مصرح بها');
            }

        return $next($request);
    }
}
