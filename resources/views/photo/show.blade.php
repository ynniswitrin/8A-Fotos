@extends('layouts.app')

@section('title')
	Foto
@endsection

@section('content')
	<img src="/storage/photo/{{ $photo->filename }}">
@stop