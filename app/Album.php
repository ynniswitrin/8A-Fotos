<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{

	/**
	 * Photos associated with this album
	 */
	public function photos()
	{
		return $this->hasMany('App\Photo');
	}

	public function user()
	{
		return $this->belongsTo('App\User');
	}

	public function comments()
	{
		return $this->hasMany('App\Comment');
	}

}

