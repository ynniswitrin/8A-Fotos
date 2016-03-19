<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use Image;

class ProfileController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$users = User::all();

		return $users;

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		abort(404);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		abort(404);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
		$profile = User::findOrFail($id);

		//return $profile;
		return view('profile.show', ['profile' => $profile]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		$profile = User::findOrFail($id);

		if(\Auth::user() == $profile){
			return view('profile.edit', ['profile' => $profile]);
		}
		else{
			abort(403);
		}
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
		$user = User::findOrFail($id);
		
		if (\Auth::user() == $user){
			$user->email = $request->email;
			$user->phone = $request->phone;
			$user->address = $request->address;
			$user->save();

			return redirect("/profile/" . $id);
		}
		else{
			abort(403);
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
		abort(404);
	}

	/**
	 * Show form for Profile Picture
	 */
	public function picture($id)
	{
		$user = User::findOrFail($id);

		if($user == \Auth::user())
		{
			return view('profile.picture', ['user' => $user]);
		}
		else
		{
			abort(403);
		}
		
	}

	/**
	 * Save Profile Picture 
	 */
	public function savePicture($id, Request $request)
	{

		$user = User::findOrFail($id);
		if ($user == \Auth::User())
		{
			$photo = $request->imagebase64;

			$filename = time() . "_" . $user->id . ".png";

			//make Database entries
			$user->profile_picture = $filename;
			$user->save();


			// Generate Thumbnails and move photos
			$thumbnail = Image::make($photo);
			$thumbnail->fit(50);
			$thumbnail->save('storage/profile_picture/thumbnail/' . $filename, 80);


			//Save standard photo
			$photo = Image::make($photo);
			$photo->save('storage/profile_picture/' . $filename);		

			return redirect('/profile/' . $user->id);
		}

		else
		{
			abort(403);
		}
	}
}
