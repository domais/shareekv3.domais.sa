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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');


            $table->tinyInteger('request_type')->comment('1=> inquiry, 2=> suggestion, 3=>Request additional support, 4 => complaint');
            $table->bigInteger('permit_number')->nullable();
            $table->string('subject');
            $table->longText('description');
            $table->longText('additional_info')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->string('reply')->nullable();
            $table->unsignedBigInteger('replied_by')->nullable();


            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('replied_by')->references('id')->on('users')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
