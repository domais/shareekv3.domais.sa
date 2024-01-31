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
    public function handle(Request $request, Closure $next, $model, $id)
    {
        dd($model, $id);
        $user = $request->user();

        if ($model == 'event') {
            $event = Event::findOrFail($id);
            if ($event->user_id != $user->id) {
                // Handle the case where the user is not the owner of the event
                abort(403, 'Unauthorized action.');
            }
        } elseif ($model == 'permit') {
            $permit = Permit::findOrFail($id);
            if ($permit->user_id != $user->id) {
                // Handle the case where the user is not the owner of the permit
                abort(403, 'Unauthorized action.');
            }
        }

        return $next($request);
    }
}
