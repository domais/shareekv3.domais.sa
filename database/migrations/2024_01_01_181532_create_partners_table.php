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

            $table->string('name');
            $table->string('city');
            $table->double('lat');
            $table->double('lng');
            $table->enum('class',['أ','ب','ج','د']);
            $table->BigInteger('CR');
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
