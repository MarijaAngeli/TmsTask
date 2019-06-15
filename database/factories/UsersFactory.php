<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use App\User;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'firstname' => $faker->name,
        'lastname' => $faker->name,
        'email' => $faker->unique()->safeEmail,
    ];
});
