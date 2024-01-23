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
        Schema::create('permits', function (Blueprint $table) {
            $table->id();

            $table->string('order_number')->unique();
            $table->string('permit_number')->nullable()->unique();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('admin_id')->nullable()->comment('admin who approved the permit');

            $table->unsignedBigInteger('event_type_id');
            $table->string('category_id');
            $table->string('other')->nullable();
            $table->string('targeted_audience');
            $table->string('meeting_link')->nullable();
            $table->string('targeted_audience')->nullable();

            $table->tinyInteger('event_location')->comment('1 => inside, 2 => outside , 3 => online');
            $table->unsignedBigInteger('literary_id')->nullable();
            $table->unsignedBigInteger('status_id');
            $table->string('title');
            $table->longText('description');
            $table->timestamp('start_date');
            $table->timestamp('end_date')->nullable();

            $table->bigInteger('available_seats');
            $table->boolean('need_support')->default(0);
            $table->double('lat')->default(21.443);
            $table->double('lng')->default(39.333);
            $table->string('source')->nullable();

            $table->softDeletes();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permits');

    }
};
