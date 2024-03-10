<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Employee;
use App\Models\Product;
use App\Models\Size;
use App\Models\Stock;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Employee::factory()->create(
            [
                'first_name' => "Emmanuel",
                'middle_name' => 'M',
                'last_name' => 'Male',
                'role' => 'Admin',
                'gender' => 'M',
                'email' => 'emmanmale@gmail.com',
                'password' => Hash::make('emmanuelmale25'),
                'remember_token' => null,
                'created_at' => now()->subtract(3, 'day'),
                'updated_at' => now(),
            ]
        );
        Size::factory()->count(4)->sequence(
            [
                'name' => 'SM',
            ],
            [
                'name' => 'M',
            ],
            [
                'name' => 'L',
            ],
            [
                'name' => 'XL',
            ],
        )
        ->create();
        Product::factory()->count(5)->sequence(
            [
                'name' => 'PE Uniform for College',
                'image' => 'products/pe-uniform.jpg',
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'name' => 'ID Laces',
                'image' => 'products/id-laces.jpg',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Patches',
                'image' => 'products/patches.jpg',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Gym Bag',
                'image' => 'products/gym-bag.jpg',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Documentary Stamp',
                'image' => 'products/documentary-stamp.jpg',
                'created_at' => now(),
                'updated_at' => now()
            ]
        )
        ->create();
        Stock::factory()->count(10)->sequence(
            [
                'product_id' => 1,
                'size_id' => 1,
                'stock' => 50,
                'price' => 450,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 1,
                'size_id' => 2,
                'stock' => 35,
                'price' => 500,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 1,
                'size_id' => 3,
                'stock' => 40,
                'price' => 550,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 1,
                'size_id' => 4,
                'stock' => 20,
                'price' => 600,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 2,
                'size_id' => null,
                'stock' => 75,
                'price' => 90,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 3,
                'size_id' => null,
                'stock' => 20,
                'price' => 85,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 4,
                'size_id' => 1,
                'stock' => 50,
                'price' => 150,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 4,
                'size_id' => 2,
                'stock' => 50,
                'price' => 170,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 4,
                'size_id' => 3,
                'stock' => 50,
                'price' => 200,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 5,
                'size_id' => null,
                'stock' => 30,
                'price' => 50,
                'created_at' => now(),
                'updated_at' => now()

            ],

        )
        ->create();


    }
}