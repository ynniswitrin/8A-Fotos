<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Photo;
use Image;
use Storage;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PhotoController extends Controller
{

	public function __construct()
	{
		$this->middleware('auth', ['except' => ['show', 'index']]);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$photos = Photo::all();

		return view('photo.index', ['photos' => $photos]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$file = $request->file('file');
		
		//Name
		$originalName = str_replace(' ', '', $file->getClientOriginalName());
		$originalName = str_replace('#', '_', $originalName);
		$filename = time() . $originalName;

		$image_size = $this->savePhoto($file, $filename);

		
		//make Database entries
		$photo = new Photo;
		$photo->filename = $filename;
		$photo->image_size = $image_size;
		$photo->album_id = $request->_id;
		$photo->user_id = \Auth::user()->id;

		$photo->save();
	}

	private function savePhoto($photo, $filename)
	{
		// Generate Thumbnails and move photos
		$tnl = Image::make($photo);
		$tnl->fit(200);
		$tnl->save('storage/thumbnail_l/' . $filename, 60);


		$tns = Image::make($photo);
		$tns->fit(50);
		$tns->save('storage/thumbnail_s/' . $filename, 60);

		//Save standard photo
		$photo = Image::make($photo);
		$photo->save('storage/photo/' . $filename);

			$width = $photo->width();
			$height = $photo->height();
			
		return $width . "x" . $height;


	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$photo = Photo::findOrFail($id);

		return view('photo.show', ['photo' => $photo]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		$file_path = '/storage';

		$photo = Photo::findOrFail($id);

	if(\Auth::user() == $photo->user){
		unlink($file_path . '/thumbnail_l/' . $photo->filename );
		unlink($file_path . '/thumbnail_s/' . $photo->filename );
		unlink($file_path . '/photo/' . $photo->filename );
		$photo->delete();
	}
	else{
		abort(403, 'Unauthorized action.');
	}

	return back();
	}
}
