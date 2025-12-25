<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();
            $table->string('session_id')->unique();
            $table->string('ip_address');
            $table->text('user_agent')->nullable();
            $table->string('referrer')->nullable();
            $table->string('landing_page')->nullable();
            $table->string('email')->nullable();
            $table->integer('page_views')->default(1);
            $table->timestamp('last_activity_at');
            $table->timestamps();
            
            $table->index('session_id');
            $table->index('email');
            $table->index('last_activity_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('visitors');
    }
};
