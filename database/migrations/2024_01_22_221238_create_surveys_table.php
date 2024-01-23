<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();
            $table->morphs('surveyable');
            $table->unsignedBigInteger('event_id')->nullable();
            $table->string('token', 32)->unique();
            $table->timestamp('expire_at')->nullable();
            $table->enum('status', ['draft', 'submitted', 'completed'])->default('draft');
            $table->json('data')->nullable();
            $table->json('meta')->nullable();
            $table->string('type')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('surveys');
    }
};
