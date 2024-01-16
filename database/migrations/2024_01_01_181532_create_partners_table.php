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
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('owner_id');
            $table->integer('status')->default(0);
            // 0 => pending , 1 => approved , 2 => rejected

            // logo to table file
            $table->string('name')->nullable();
            $table->string('city')->nullable();
            $table->double('lat')->nullable();
            $table->double('lng')->nullable();
            $table->enum('class',['أ','ب','ج','د'])->nullable();
            $table->string('coordinates')->nullable();
            $table->integer('points')->default(2);
            $table->bigInteger('CR')->nullable();
            $table->string('source')->nullable();

            // logo to table file
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
