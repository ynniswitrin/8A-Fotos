@extends('layouts.app')

@section('title')
	{{ $profile->name }}
@endsection

@section('content')
	<div class="contactCard">
		<div class="col-md-7 col-sm-7 contactTable">
			<h1>{{ $profile->name }}</h1>
			<div class="row">
				<div class="col-md-3">
					<div class="tableIdentifier">E-Mail</div>
				</div>
				<div class="col-md-9">
					<div class="tableData">{{ $profile->email }}</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<div class="tableIdentifier">Adresse</div>
					
				</div>
				<div class="col-md-9">
					<div></div>
					<div class="tableData">{!!nl2br($profile->address) !!}</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<div class="tableIdentifier">Telefon</div>
				</div>
				<div class="col-md-9">
					<div class="tableData">{{ $profile->phone }}</div>
				</div>
			</div>
			@if(\Auth::user() == $profile)
				<div class="row">
					<div class="col-md-2 col-md-offset-10">
						<a href="/profile/{{ $profile->id }}/edit" class="btn btn-default pull-right" data-toggle="tooltip" data-placement="bottom" title="Profil bearbeiten">
							<span class="glyphicon glyphicon-pencil"></span>
						</a>
					</div>
				</div>
			@endif
		</div>		

		<div class="col-md-5 col-sm-5 contactPicture">
			<img src="/storage/profile_picture/{{ $profile->profile_picture }}" style="margin:40px auto 0px;">
		</div>
	</div>
@stop