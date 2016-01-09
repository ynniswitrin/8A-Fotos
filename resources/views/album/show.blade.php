@extends('layouts.app')

@section('title')
	{{ $album->name }}
@endsection

@section('content')
	
	<div class="row">
		<form method="POST" action="/album/{{ $album->id }}">
			<div class="col-md-10">
				<h1 id="title">{{ $album->name }}</h1>
					{{ csrf_field() }}
					<input type="hidden" name="_method" value="PUT" />
					<div class="form-group form-group-lg hidden" id="formNameChange" >
						<input class="form-control" type="text" value="{{ $album->name }}" name="name">
					</div>
			</div>
				<div class="col-md-2 nextToHeading hidden" id="saveEdit">
					<input type="submit" class="btn btn-success" value="Speichern">
					<span class="glyphicon glyphicon-remove" id="closeEdit"></span>
				</div>
		</form>
			
		<div class="col-md-2">
			<div class="nextToHeading" id="editButtonGroup">
				@if(\Auth::check())
					<a class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Fotos hinzufügen" id="btnAdd" href="#addPhotos">
						<span class="glyphicon glyphicon-plus"></span>
					</a>
					<button class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Bearbeiten" id="btnEdit">
						<span class="glyphicon glyphicon-pencil"></span>
					</button>
				@endif


				@if(\Auth::User() == $album->user)
					<button class="btn btn-danger" data-toggle="tooltip" data-placement="bottom" title="Album löschen" id="btnDelete">
						<span class="glyphicon glyphicon-trash"></span>
					</button>
				@endif
			</div>
		</div>	
	</div>
	<div class="modal fade" tabindex="-1" role="dialog" id="deleteConfirm">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			<h4 class="modal-title">Löschen Bestätigen</h4>
		  </div>
		  <div class="modal-body">
			<p>Willst du das Album <i>{{ $album->name }}</i> wirklich löschen?</p>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button>
			<a href="/album/{{ $album->id }}" data-method="delete" data-token="{{csrf_token()}}" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"> </span> Löschen</a>
		  </div>
		</div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	
	<div id="lightgallery">
		@foreach($album->photos->chunk(4) as $chunk)
			<div class="row">			
				@foreach($chunk as $photo)
					<div class="col-md-3">
						<a href="/storage/photo/{{ $photo->filename }}" class="item">
							<img src="/storage/thumbnail_l/{{ $photo->filename }}" class="img-rounded" />
						</a>
						@if(\Auth::user() == $photo->user)
							<div class="deletePhotos hidden">
								<a href="/photo/{{ $photo->id }}" data-method="delete" data-token="{{csrf_token()}}" class="btn btn-danger">
									<span class="glyphicon glyphicon-trash"></span>
								</a>
							</div>
						@endif
					</div>
				@endforeach
			</div>
		@endforeach
	</div>
	<div id="addPhotos" class="hidden">
	<hr>
		<div class="row">
			<div class="col-md-11">
				<h3>Fotos Hinzufügen</h3>
			</div>
			<div class="col-md-1 nextToHeading" >
				<span class="glyphicon glyphicon-remove" id="closeUpload"></span>
			</div>
		</div>
		<form id="photoupload" action="/photo" class="dropzone" method="POST"> 
			{{ csrf_field() }}
			<input type="text" name="_id" hidden value="{{ $album->id }}">
		</form>
		<hr>
	</div>

	@include('album.comments')
	
@endsection

@section('scripts')
	<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.11/js/lightgallery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.11/js/lg-thumbnail.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.11/js/lg-fullscreen.js"></script>
	<script src="/js/album.js"></script>

@stop