<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Album;
use App\User;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;

class AlbumController extends Controller
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
		$albums = Album::orderBy('created_at', 'desc')->paginate(10);
		$users = User::all();

		return view('album.index', ['albums' => $albums, 'home' => true, 'users'=> $users]);

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return view('album.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		if($request->name != ""){
			$album = new Album;
			$album->name = $request->name;
			$album->user_id = \Auth::user()->id;
			$album->save();

			return $album->id;
		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$album = Album::findOrFail($id);

		return view('album.show', ['album' => $album]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		abort(404, 'Page not found');
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
		$album = Album::findOrFail($id);

		if(\Auth::user() == $album->user){
			$album->name = $request->name;
			$album->save();
			return redirect('album/' . $album->id);
		}
		else{
			abort(403, 'Unauthorized action.');
		}
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
	
		$album = Album::findOrFail($id);

		if(\Auth::user() == $album->user){
				
			$photos = $album->photos;
			$this->deletePhotos($photos);
	 
			$album->delete();

			return redirect('album')->with('status', 'Album gelöscht!');
		}
		else{
			abort(403, 'Unauthorized action.');
		}
			
	}

	private function deletePhotos(Collection $photos)
	{
		$file_path = '/home/vagrant/Code/achta/public/storage';

		foreach ($photos as $photo) {
			unlink($file_path . '/thumbnail_l/' . $photo->filename );
			unlink($file_path . '/thumbnail_s/' . $photo->filename );
			unlink($file_path . '/photo/' . $photo->filename );
			$photo->delete();
		}
	}
}
