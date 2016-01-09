<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $fillable = ['path', 'thumbnail_path', 'album_id', 'user_id'];


    public function album()
    {
    	return $this->belongsTo('App\Album');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
