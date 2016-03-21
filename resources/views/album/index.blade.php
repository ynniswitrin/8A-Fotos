@extends('layouts.app')

@section('title')
	Alle Alben
@endsection

@section('content')

	<a class="hero" href="/album"></a>

	<div class="featured">
		<h1>Alle Alben</h1>

		@if(!$albums->isEmpty())

			@foreach($albums as $album)
				<div class="albumPreview">
					<a href="/album/{{ $album->id }}"><h3>{{ $album->name }} <small>erstellt von <strong>{{ $album->user->name }}</strong></small></h3></a>

					@foreach($album->photos as $photo)
						<img src="/storage/thumbnail_s/{{ $photo->filename }}" style="margin-top: 4px;">
					@endforeach
				</div>
			@endforeach

			{!! $albums->render() !!}
		@else

			Keine Alben gefunden!!

		@endif
	</div>
	<div class="allUsers">
		<h1>Alle registrierten Nutzer:</h1>
			@foreach($users as $user)
				<img src="/storage/profile_picture/thumbnail/{{ $user->profile_picture }}" width="30px">
				<a href="/profile/{{ $user->id }}">{{ $user->name }}</a> <br>
			@endforeach
	</div>
	<footer class="footerHome">Paul Eberstaller &mdash; 2016</footer>


@endsection