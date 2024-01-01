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
        Schema::create('speakers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('permit_id');
            $table->unsignedBigInteger('event_id')->nullable();

            $table->unsignedBigInteger('partner_id');
            $table->string('name');
            $table->bigInteger('phone');
            $table->string('email');
            $table->string('nationality');
            $table->enum('type',['كاتب','شاعر','راوي','ناشط ثقافي']);
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('linkedin')->nullable();
        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('speakers');
    }
};
