@extends('layouts.app')

@section('title')
	Album erstellen
@endsection

@section('content')
	<h1>Neues Album erstellen</h1>

	<hr>

	<div class="row">
		<div class="col-md-1">
			<h2>1</h2>
		</div>
		<div class="col-md-11">
			<form method="POST" action="/album/store" id="addname">
				{{ csrf_field() }}
				
				<div class="form-group">
					<label for="name">Name:</label>
					<input type="text" class="form-control" name="name" id="name" required>
				</div>

				<div class="form-group">
					<div class="btn btn-primary" id="submitbutton">
						Album Erstellen und Fotos hinzufügen <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
					</div>
				</div>

			</form>
		</div>
	</div>
	<hr>
	<div id="stepTwo" class="hidden">
		<div class="row">
			<div class="col-md-1">
				<h2>2</h2>
			</div>
			<div class="col-md-11">
				<div>
					<h4>Fotos Hinzufügen</h4>

					<form id="photoupload" action="/photo" class="dropzone" method="POST"> 
						{{ csrf_field() }}
						<input type="text" name="_id" hidden>
					</form>
				</div>
			</div>	
		</div>

		<hr>

		<div class="row">
			<div class="col-md-11"></div>
			<div class="col-md-1">
				<a href="/album" class="btn btn-success">
					Fertig <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
				</a>
			</div>
		</div>
	</div>
@stop

@section('scripts')
	<script src="/js/createAlbum.js"></script>
@stop