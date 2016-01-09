<?php
use App\Photo;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PhotoTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_a_photo_has_a_path()
    {
        $photo = Photo::create(['path' => '/storage/test.png']);

        $photo = Photo::find(1);

        $path = $photo->path;


        $this->assertequals("/storage/test.png", $path);
    }

   //  public function test_a_photo_has_a_user()
   //  {
   // 		$photo = new Photo;


   // 		$photo->path='/storage/test.png';

   // 		$photo->
   // }
}
