<?php
use App\User;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_user_has_basic_data()
    {
        $user = new User;
        $user->name = "Max Mustermann";
        $user->email = "max.mustermann@test.at";
        $user->password = md5('letmein');
        $user->save();

        $user = User::find(1);
        $this->assertEquals('Max Mustermann', $user->name);
        $this->assertEquals('max.mustermann@test.at', $user->email);
        $this->assertEquals(md5('letmein'), $user->password);

    }
}
