<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class LiterarieCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->transform(function ($literarie) {
            return [
                'id' => $literarie->id,
                'name' => $literarie->name,
                'parent' => $literarie->parent->name ?? null,
                'count' => $literarie->events_count,
            ];
        })->toArray();
    }
}
