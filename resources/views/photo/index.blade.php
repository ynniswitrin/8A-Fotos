@extends('layouts.app')

@section('title')
	Alle Fotos
@endsection

@section('content')
	<h1>All Photos:</h1>

	@foreach($photos as $photo)

		<img width="200px" src="/storage/thumbnail_l/{{ $photo->filename }}">

	@endforeach
@endsection