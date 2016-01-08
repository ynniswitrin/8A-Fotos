<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>

	8A Fotos - 
	@yield('title')

	</title>

	<!-- Fonts -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

	<!-- Styles -->
	<link href="{{ elixir('css/app.css') }}" rel="stylesheet">

	<style>
		body {
			font-family: 'Lato';
		}

		.fa-btn {
			margin-right: 6px;
		}
	</style>
</head>
<body id="app-layout" class="layoutApp" >
	<nav class="standardNav">
		<div class="siteTitle col-md-2">
			<a href="/"> 8A Fotos</a>
		</div>
		<div class="navLinks col-md-2 col-md-offset-3">
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

   
	<div class="container" id="layoutContainer">
		@include('layouts.flash')
		@yield('content')
	</div>

	<!-- JavaScripts -->
   	<script src="{{ elixir('js/all.js') }}"></script>
	<script>
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		});
   </script>

	@yield('scripts')

</body>
</html>
