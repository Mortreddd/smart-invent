<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Stock;
use Illuminate\Support\Facades\Hash;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\Product;
use App\Models\Fabric;
use App\Models\Sale;
use App\Models\Size;
use App\Models\Category;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
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
                'image' => 'avatars/sample-image.jpg',
                'gender' => 'M',
                'email' => 'emmanmale@gmail.com',
                'password' => Hash::make('emmanuelmale25'),
                'remember_token' => null,
                'email_verified_at' => now(),
                'created_at' => now()->subtract(3, 'day'),
                'updated_at' => now(),
            ]
        );
        Employee::factory()->create(
            [
                'first_name' => "Kristine",
                'middle_name' => 'A',
                'last_name' => 'Cunamay',
                'role' => 'Admin',
                'gender' => 'M',
                'email' => 'kristinecunamay9@gmail.com',
                'password' => Hash::make('12345678'),
                'remember_token' => null,
                'email_verified_at' => now(),
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
        Category::factory()->count(4)->sequence(
            [
                'name' => 'Rent',
            ],
            [
                'name' => 'Utilities',
            ],
            [
                'name' => 'Salaries',
            ],
            [
                'name' => 'Interest',
            ]
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
                'stock' => 35,
                'price' => 170,
                'created_at' => now(),
                'updated_at' => now()

            ],
            [
                'product_id' => 4,
                'size_id' => 3,
                'stock' => 40,
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
        Course::factory()->count(5)->sequence(
            [
                'name' => 'Marketing',
                'created_at' => now(),
                'updated_at' => now()  
            ],
            [
                'name' => 'Accountancy',
                'created_at' => now(),
                'updated_at' => now()  
            ],
            [
                'name' => 'Legal Management',
                'created_at' => now(),
                'updated_at' => now()  
            ],
            [
                'name' => 'Real Estate',
                'created_at' => now(),
                'updated_at' => now()  
            ],
            [
                'name' => 'Psychology',
                'created_at' => now(),
                'updated_at' => now()  
            ],
        )
        ->create();
        Fabric::factory()->count(7)->sequence(
            [
                'course_id' => 1,
                'image' => 'fabrics/marketing-blouse.jpg',
                'textile' => 'Blouse',
                'stock' => 4,
                'price' => 65.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
            [
                'course_id' => 1,
                'image' => 'fabrics/marketing-pants.jpg',
                'textile' => 'Pants',
                'stock' => 6,
                'price' => 70.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
            [
                'course_id' => 2,
                'image' => 'fabrics/accountancy-blouse.jpg',
                'textile' => 'Blouse',
                'stock' => 1,
                'price' => 70.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
            [
                'course_id' => 2,
                'image' => 'fabrics/accountancy-pants.jpg',
                'textile' => 'Pants',
                'stock' => 4,
                'price' => 65.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
            [
                'course_id' => 3,
                'image' => 'fabrics/legal-management-blouse.jpg',
                'textile' => 'Blouse',
                'stock' => 9,
                'price' => 60.00,
                'created_at' => now(),
                'updated_at' => null
            ],
            [
                'course_id' => 4,
                'image' => 'fabrics/real-estate-blouse.jpg',
                'textile' => 'Blouse',
                'stock' => 3,
                'price' => 70.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
            [
                'course_id' => 5,
                'image' => 'fabrics/psychology-fabric.jpg',
                'textile' => 'Any',
                'stock' => 4,
                'price' => 70.00,
                'created_at' => now(),
                'updated_at' => null  
            ],
        )
        ->create();
        $products = Product::all();
        for($i = 1; $i <= 3000; $i++){
            Expense::create([
                'category_id' => rand(1, Category::count()),
                'amount' => rand(500, 1000),
                'created_at' => fake()->dateTimeBetween('-1 years', 'now')
            ]);
        }
        for($i = 1; $i <= 10000; $i++){
            $product = Product::find(rand(1, $products->count()));
            $quantity = rand(1, 5);
            $stock = Stock::where('product_id', $product->id)->first();
            
            Sale::create([
                'product_id' => $product->id,
                'size_id' => in_array($product->id, [1, 4]) ? rand(1, 4) : null,
                'quantity' => $quantity,
                'earned' => $stock->price * $quantity,
                'created_at' => fake()->dateTimeBetween('-1 years', 'now'),
                'updated_at' => now(),
            ]);
        }

    }
}