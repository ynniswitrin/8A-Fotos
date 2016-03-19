<nav class="standardNav">
	<div class="siteTitle col-md-2 col-sm-4">
		<a href="/"> 8A Fotos</a>
	</div>
	<div class="navLinks col-md-2 col-md-offset-3 col-sm-2 col-sm-offset-1">
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