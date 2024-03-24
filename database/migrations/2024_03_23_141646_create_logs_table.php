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
        Schema::create('logs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        Schema::create('employees', function (Blueprint $table) {
            $table->id()->from(1000);
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('last_name');
            $table->enum('role', ['Admin', 'Cashier']);
            $table->enum('gender', ['M', 'F']);
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken()->nullable();
            $table->timestamps();
        });



    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logs');
        Schema::dropIfExists('employees');
    }
};