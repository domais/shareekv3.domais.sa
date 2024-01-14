<?php

namespace App\Jobs;

use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SaveFile implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;



    /**
     * Create a new job instance.
     */
    public function __construct(
        private Model $model,
        private string $url,
        private string $type,
        private string $use,
    ) {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            // Delete all files related to this model
            $this->model->image()->delete();

            $image = file_get_contents($this->url);
            if (!$image) {
                \Log::error("Error getting file: {$this->url}");
                return;
            }
            $name = Str::random(10) . '-' . now() . '.png';
            $path = Storage::disk('public')->put($this->getFilePath($name), $image);

            // morph file avatar to file table
            $this->model->image()->create([
                'name' => $name,
                'path' => $path,
                'type' => $this->type,
                'use' => $this->use,
            ]);
        } catch (\Exception $e) {
            // Handle exceptions
            \Log::error("Error saving file: {$e->getMessage()}");
        }
    }

    /**
     * Get the file path based on model information.
     *
     * @param string $name
     * @return string
     */
    private function getFilePath(string $name): string
    {
        return strtolower(class_basename($this->model)) . '/' . $this->use . '/' . $this->model->id . '/' . $name;
    }
}
