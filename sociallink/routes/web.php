<?php

use App\Http\Controllers\ProdukController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/produk/list', [ProdukController::class, 'getProdukList'])->name('produkList');
Route::post('/get/produk/detail', [ProdukController::class,'getProdukDetail'])->name('produkDetail');
Route::post('/post/produk/data',[ProdukController::class,'addProduk'])->name('produkAdd');
Route::delete('/delete/produk/item/{produk}',[ProdukController::class,'destroy'])->name('produkDelete');
Route::post('/update/produk/data',[ProdukController::class,'updateProduk'])->name('produkDelete');