<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Produk;
use App\Repositories\ProdukRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ProdukController extends Controller
{
    private $produkRepository;

    public function  __construct(ProdukRepository $produkRepository){
        $this->produkRepository = $produkRepository;
    }
    public function getProdukList()
    {
        $produk = $this->produkRepository->getAll();
        return response()->json($produk);
    }

    public function getProdukDetail(Request $request)
    {
        $produkdata = $this->produkRepository->show($request->get('produkid'));
        return response()->json($produkdata);
    }
    public function updateProduk(Request $request)
    {
        $produkid = $request->get('produkId');
        $produknama = $request->get('produknama');
        $produkketerangan = $request->get('produkketerangan');
        $produkharga = $request->get('produkharga');

        return response()->json( [       
            'data' => $this->produkRepository->updateOrder($produkid,$produknama,$produkketerangan,$produkharga)
        ],
        );
    }
    public function destroy(Produk $produk)
    {
        $this->produkRepository->deleteOrder($produk);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
    public function addProduk(Request $request): JsonResponse
    { 
        $produknama = $request->get('produknama');
        $produkketerangan = $request->get('produkketerangan');
        $produkharga = $request->get('produkharga');

        return response()->json( [       
            'data' => $this->produkRepository->createOrder($produknama,$produkketerangan,$produkharga)
        ],
        Response::HTTP_CREATED
    );
    }
}
