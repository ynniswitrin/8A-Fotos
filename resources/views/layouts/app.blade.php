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
	<link href='https://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>

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
<body id="app-layout" class="layoutApp">
	
	<div class="hidden-xs">
		@include('layouts.standard_nav')
	</div>

	<div class="visible-xs-block">
		@include('layouts.mobile_nav')
	</div>

	@if(isset($home) AND $home == true)

		@include('layouts.flash')
		@yield('content')

	@else
		<div class="container" id="layoutContainer">
			@include('layouts.flash')
			@yield('content')
		</div>
	@endif
	



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
