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
        $data = $request->route('order_number');
        $data = Permit::where('order_number', $data)->first();
        $user = $request->user();
            if (isset($data->user_id) && $user->hasRole('User') && $data->user_id != $user->id){
                // Handle the case where the user is not the owner of the event // Modefied by Domais
                abort(403, 'عملية غير مصرح بها');
            }

        return $next($request);
    }
}
