<?php

namespace App\Repositories;
use App\Models\Produk;

class ProdukRepository{

    public function getAll(){
        $produk = Produk::orderBy('id', 'DESC')->get();
        return $produk;
    }
    public function show($id){
        $produkdata = Produk::findOrFail($id);
        return $produkdata;
    }
    public function updateOrder($produkId,$produknama,$produkketerangan,$produkharga){
        return Produk::where('id', $produkId)->update([
            'nama'   =>  $produknama,
            'keterangan' => $produkketerangan,
            'harga'  =>  $produkharga
        ]);
    }
    public function deleteOrder($produk){
        $produk->delete();
    }
    public function createOrder($produknama,$produkketerangan,$produkharga){
        return Produk::create([
        'nama'   =>  $produknama,
        'keterangan' => $produkketerangan,
        'harga'  =>  $produkharga
        ]);
    }
}