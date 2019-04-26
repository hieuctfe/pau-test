<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('questions')->insert([
            'content' => "Managing and synchronous inventory on multi channels",
            'created_at' => Carbon::parse('2000-01-01'),
            'updated_at' => Carbon::parse('2000-01-01'),
        ]);
        DB::table('questions')->insert([
            'content' => "Online update products to inventory",
            'created_at' => Carbon::parse('2000-01-01'),
            'updated_at' => Carbon::parse('2000-01-01'),
        ]);
        DB::table('questions')->insert([
            'content' => "Manage promotion price",
            'created_at' => Carbon::parse('2000-01-01'),
            'updated_at' => Carbon::parse('2000-01-01'),
        ]);
        DB::table('questions')->insert([
            'content' => "Tracking orders",
            'created_at' => Carbon::parse('2000-01-01'),
            'updated_at' => Carbon::parse('2000-01-01'),
        ]);
        DB::table('questions')->insert([
            'content' => "Statistic and report business performance",
            'created_at' => Carbon::parse('2000-01-01'),
            'updated_at' => Carbon::parse('2000-01-01'),
        ]);
    }
}
