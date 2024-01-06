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
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('permit_id');
            $table->unsignedBigInteger('event_id')->nullable();
            $table->unsignedBigInteger('partner_id');

            
            $table->string('name');
            $table->enum('type',['نادي ثقافي','جمعية','قطاع خاص','قطاع حكومي']);
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};
