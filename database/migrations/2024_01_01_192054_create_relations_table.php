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
        Schema::table('permits', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('event_type_id')->references('id')->on('event_types')->onDelete('cascade');
            $table->foreign('literary_id')->references('id')->on('literaries')->onDelete('cascade');
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('cascade');
        });

        Schema::table('events', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('event_type_id')->references('id')->on('event_types')->onDelete('cascade');
            $table->foreign('literary_id')->references('id')->on('literaries')->onDelete('cascade');
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('cascade');
        });

        Schema::table('histories', function (Blueprint $table) {
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('cascade');
            $table->foreign('permit_id')->references('id')->on('permits')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('speakers', function (Blueprint $table) {
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
            $table->foreign('permit_id')->references('id')->on('permits')->onDelete('cascade');
            $table->foreign('partner_id')->references('id')->on('partners')->onDelete('cascade');
        });

        Schema::table('partnerships', function (Blueprint $table) {
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
            $table->foreign('permit_id')->references('id')->on('permits')->onDelete('cascade');
            $table->foreign('partner_id')->references('id')->on('partners')->onDelete('cascade');
        });

        Schema::table('partners', function (Blueprint $table) {
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('literaries', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('literaries')->onDelete('cascade');
        });




    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relations');
    }
};
