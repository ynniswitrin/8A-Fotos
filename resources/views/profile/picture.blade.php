@extends('layouts.app')

@section('title')
	Profilbild ändern
@endsection

@section('content')
	<div class="row">
		<div class="col-md-10">
			<h1>Profilbild ändern</h1>
		</div>
		<div class="col-md-2" style="padding: 30px 20px;">
			<a href="/profile/{{ $user->id }}/edit" class="pull-right">
				<span class="glyphicon glyphicon-remove text-danger"></span>
			</a>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<form method="POST" action="/profile/{{ $user->id }}/picture" id="result-form" enctype="multipart/form-data">
				
				{{ csrf_field() }}
				<input type="file" id="upload" name="upload" value="Choose a file" accept="image/*" style="display: none;" />
				
				<div class="upload-msg" id="placeholder">
					Hier klicken, um Profilbild hochzuladen
				</div>
				<div id="cropper"></div>
				<input type="text"  name="imagebase64" id="imagebase64" required hidden>
			</form>
			<button class="btn btn-success hidden btn-block btn-lg" id="btn-upload">Fertig</button>
		</div>
	</div>
@endsection

@section('scripts')
	<script>
		var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            
	            reader.onload = function (e) {
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	});
	            	$('#cropper').addClass('show');
	            	$('#placeholder').addClass('hidden');
	            	$('#btn-upload').removeClass('hidden');
	            }
	            
	            reader.readAsDataURL(input.files[0]);
	            
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#cropper').croppie({
			viewport: {
				width: 200,
				height: 200,
				type: 'circle'
			},
			boundary: {
				width: 300,
				height: 300
			},
			exif: true
		});

		$('#upload').on('change', function () { readFile(this); });

		$('#btn-upload').on('click', function (ev) {
			$uploadCrop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			})
			.then(function (resp) {
            	//$('#imagebase64' (NaNcm)).val(resp);
            	$('#imagebase64').val(resp);
            	$('#result-form').submit();
        	});
        });
	</script>
	<script>
		$("#placeholder").click(function () {
   			 $("#upload").trigger('click');
		});
	</script>
@endsection

