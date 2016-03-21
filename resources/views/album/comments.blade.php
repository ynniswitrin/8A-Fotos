<!-- COMMENTS -->
@if($album->comments->isEmpty() == false or \Auth::check())
	<hr>
	<h2>Kommentare</h2>
@endif

	@foreach($album->comments as $comment)
	 	<div class="comment">
	 		<div class="row commentName">
		 		<div class="col-md-11">
		 			<img class="pull-left" 
		 				src="/storage/profile_picture/thumbnail/{{ $comment->user->profile_picture }}" 
		 			height="40px">
		 			<h4 class="pull-left">{{ $comment->user->name }}</h4>
		 		</div>
	 			<div class="col-md-1">
			    	@if(\Auth::user() == $comment->user)
			    		<a href="/comment/{{ $comment->id }}" data-method="delete" data-token="{{csrf_token()}}" class="btn btn-danger pull-right" disabled> 
			    			<span class="glyphicon glyphicon-trash"></span>
			    		</a>
			    	@endif
			    </div>
	 		</div>
	 		<div class="row commentBody">
		    	{{ $comment->body }}
		    </div>
	  	</div>
	@endforeach

	@if(\Auth::check())
		<form method="POST" action="/comment">
			
			{{ csrf_field() }}
		
			<input type="text" class="hidden" name="_album_id" value="{{ $album->id }}">
			<div class="row">
				<div class="col-md-11">
					<div class="form-group">
						<label for="body">Kommentar hinzufügen:</label>
						<textarea rows="2" class="form-control" name="body" id="body" value="{{ old('body') }}" required></textarea>
					</div>
				</div>
				<div class="col-md-1 nextToTextfield">
					<button type="submit" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Fertig">
						<span class="glyphicon glyphicon-send"> </span>
					</button>
				</div>
			</div>		
		</form>
	@endif