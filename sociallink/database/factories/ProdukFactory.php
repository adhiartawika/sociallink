<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProdukFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nama' => $this -> faker->name(),
            'keterangan' => $this -> faker->name(),
            'harga' => $this->faker->numberBetween(500000,50000),
        ];
    }
}
