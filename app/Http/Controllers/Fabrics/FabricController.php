<?php

namespace App\Http\Controllers\Fabrics;

use App\Http\Controllers\Controller;
use App\Http\Requests\Fabrics\CreateFabricRequest;
use App\Models\Course;
use App\Models\Fabric;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
class FabricController extends Controller
{
    public function index(Request $request)
    {   
        // dd(Fabric::with('course')->get());
        return Inertia::render('FabricsLayout', [
            'fabrics' => Fabric::with('course')->get(),
            'courses' => Course::all()
        ]);
    }

    public function edit(Request $request, int $fabric_id)
    {
        return Inertia::render('Fabric/EditFabricLayout', [
            'fabric' => Fabric::find($fabric_id),
            'courses' => Course::all()
        ]);
    }

    public function update(Request $request, int $fabric_id)
    {
        $fabric = Fabric::find($fabric_id);
        $fabric->update([
            'course_id' => $request->course_id,
            'price' => $request->price,
            'textile' => $request->textile,
            'stock' => $request->stock,
        ]);

        return Redirect::back();
    }

    public function store(CreateFabricRequest $request)
    {
        Fabric::create([
            'course_id' => $request->course_id,
            'price' => $request->price,
            'textile' => $request->textile,
            'stock' => $request->stock,
            'created_at' => now()
        ]);

        return Redirect::back();
    }
    
    public function destroy(Request $request, int $fabric_id)
    {
        $fabric = Fabric::find($fabric_id);
        
        // ? Uncomment this line to delete the image from the storage for production
        Storage::delete('public/images/'.$fabric->image);
        $fabric->delete();
        return Redirect::back();
    }   
}