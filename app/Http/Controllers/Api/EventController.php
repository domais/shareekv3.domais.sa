<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class EventController extends Controller
{
    public function index($type)
    {
        if ($type == 'scheduled') {
            $events = Event::where('status_id', 5)->with(['speakers', 'partnerships'])->get()->toArray();
        }
        if ($type == 'active') {
            $events = Event::where('status_id', 6)->with(['speakers', 'partnerships'])->get()->toArray();
        }
    
        foreach ($events as &$event) {
            $files = File::where('name', $event['order_number'])->get()->toArray();
            $event['files'] = $files;
        }
    
        return response()->json([
            'type' => $type,
            'data' => $events,
        ]);
    }

    public function show(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'order_number' => 'required|exists:events,order_number',
            ]);
    
            if ($validator->fails()) {
                throw new ValidationException($validator);
            }
    
            $event = Event::where('order_number', $request->order_number)->with(['speakers', 'partnerships'])->first()->toArray();
            $files = File::where('name', $event['order_number'])->get()->toArray();
            $event['files'] = $files;
    
            return response()->json([
                'data' => $event,
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 400);
        }
    }
}
