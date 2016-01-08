<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'email', 'password', 'profilePicture'
	];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'remember_token',
	];


	public function albums()
	{
		return $this->hasMany('App\Album');
	}

	public function photos()
	{
		return $this->hasMany('App\Photo');
	}

	public function comment()
	{
		return $this->hasMany('App\Comment');
	}

}
