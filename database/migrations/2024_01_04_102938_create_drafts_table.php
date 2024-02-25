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
        Schema::create('drafts', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique()->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('admin_id')->nullable()->comment('admin who approved the permit');
            
            $table->unsignedBigInteger('event_type_id')->nullable();
            $table->string('category_id')->nullable();
            $table->string('other')->nullable();
            $table->string('targeted_audience')->nullable();
            
            $table->tinyInteger('event_location')->nullable()->comment('1 => inside, 2 => outside');
            $table->unsignedBigInteger('literary_id')->nullable();
            $table->unsignedBigInteger('status_id')->nullable();
            $table->string('title')->nullable();
            $table->longText('description')->nullable();
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
    
            $table->bigInteger('available_seats')->nullable();
            $table->boolean('need_support')->default(0)->nullable();
            $table->double('lat')->nullable();
            $table->double('lng')->nullable();

            $table->integer('points')->default(0);


            $table->json('speakers')->nullable();
            $table->json('partnership')->nullable();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('event_type_id')->references('id')->on('event_types')->onDelete('cascade');
            $table->foreign('literary_id')->references('id')->on('literaries')->onDelete('cascade');
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drafts');
    }
};
