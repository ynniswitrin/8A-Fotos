@extends('layouts.app')

@section('title')
	Profil bearbeiten
@endsection

@section('content')
	<form method="POST" action="/profile/{{ $profile->id }}">
		{{ method_field('PUT') }}
		{{ csrf_field() }}

		<div class="col-md-7 contactTable">
			<h1>{{ $profile->name }}</h1>
			<div class="row">
				<div class="col-md-3">
					<label for="email" class="tableIdentifier">E-Mail</label>
				</div>
				<div class="col-md-9">
					<input type="text" class="form-control" name="email" id="email" value="{{  $profile->email }}" required>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<label for="address" class="tableIdentifier">Adresse</label>
				</div>
				<div class="col-md-9">
					<textarea type="text" class="form-control" name="address" id="address" rows="2" required>{{  $profile->address }}</textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<label for="phone" class="tableIdentifier">Telefon</label>
				</div>
				<div class="col-md-9">
					<input type="text" class="form-control" name="phone" id="phone" value="{{  $profile->phone }}" required>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5 col-md-offset-7">
					<button href="/password/reset" class="btn btn-danger pull-right" disabled>
						<span class="glyphicon glyphicon-question-sign"></span> Passwort ändern
					</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-md-offset-10">
					<button type="submit" class="btn btn-success pull-right">
						<span class="glyphicon glyphicon-ok"></span> Speichern
					</button>
				</div>
			</div>
		</div>
		
	</form>


	<div class="col-md-5">
		<!-- Profile Picture  USE CROPPIE Plugin-->
		<img src="/storage/profile_picture/{{ $profile->profile_picture }}" style="margin:40px auto 0px;">
		<a href="picture" class="btn btn-success">Profilbild ändern</a>
	</div>

@stop