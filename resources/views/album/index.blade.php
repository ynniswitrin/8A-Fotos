@extends('layouts.app')

@section('title')
	Alle Alben
@endsection

@section('content')
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

@endsection