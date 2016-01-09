<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>

	8A.photos

	</title>

	<!-- Fonts -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>
	
	<!-- Styles -->
	<link href="{{ elixir('css/app.css') }}" rel="stylesheet">

	<style>
		body {
			font-family: 'Lato';
			background: #eeeeee;
		}

		.fa-btn {
			margin-right: 6px;
		}
	</style>
</head>
<body id="app-layout">
	<nav class="homeNav">
		<div class="navLinks">
			<a href="{{ url('/album') }}" data-toggle="tooltip" data-placement="bottom" title="Alle Alben">
				<span class="glyphicon glyphicon-picture" ></span>
			</a>
			@if(\Auth::guest())
				<a href="{{ url('/login') }}" data-toggle="tooltip" data-placement="bottom" title="Login">
					<span class="glyphicon glyphicon-log-in" ></span>
				</a>
				<a href="{{ url('/register') }}" data-toggle="tooltip" data-placement="bottom" title="Registrieren">
					<span class="glyphicon glyphicon-user" ></span>
				</a>
			@endif
			@if(\Auth::check())
				<a href="{{ url('/album/create') }}" data-toggle="tooltip" data-placement="bottom" title="Album hinzufügen">
					<span class="glyphicon glyphicon-plus" ></span>
				</a>
				<a href="{{ url('/logout') }}" data-toggle="tooltip" data-placement="bottom" title="Logout">
					<span class="glyphicon glyphicon-log-out" ></span>
				</a>
			@endif
		</div>
	</nav>


	<a class="hero" href="/album"></a>

	<div class="featured">
		<h2>Neueste Fotos</h2>

	@if($photos->count() > 5)
		<div class="carousel slide" data-ride="carousel" id="newestPhotosCarousel">

			<ol class="carousel-indicators">
				<li data-target="#newestPhotosCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#newestPhotosCarousel" data-slide-to="1"></li>
			</ol>
			
			<div class="carousel-inner" role="listbox">	

				<div class="carouselSlide item active">
				<div class="row">
					<div class="col-md-1"></div>			
					@foreach($photos->chunk(3)->get(0) as $photo)
						<div class="col-md-2 col-md-offset-1">
							<img src="/storage/thumbnail_l/{{ $photo->filename }}" class="center-block img-rounded" >
						</div>
					@endforeach
				</div>
				</div>
				<div class="carouselSlide item">
				<div class="row">
					<div class="col-md-1"></div>	
						@foreach($photos->chunk(3)->get(1) as $photo)
							<div class="col-md-2 col-md-offset-1">
								<img src="/storage/thumbnail_l/{{ $photo->filename }}" class="center-block img-rounded">
							</div>
						@endforeach
					</div>
				</div>
				</div> 
			

				<a class="left carousel-control" href="#newestPhotosCarousel" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#newestPhotosCarousel" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		@else
			Keine Fotos gefunden!!
		@endif	
	</div>
		

	<footer class="footerHome">Paul Eberstaller &mdash; 2016</footer>

	<!-- JavaScripts -->
   <script src="{{ elixir('js/all.js') }}"></script>
   <script>
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		});

   </script>

</body>
</html>
