<nav class="standardNav">
	<div class="siteTitle col-md-2 col-sm-4">
		<a href="/"> 8A Fotos</a>
	</div>
	<div class="navMiddle col-md-2 col-md-offset-3 col-sm-4 ">
		@if(\Auth::check())
			<a href="{{ url('/album/create') }}" data-toggle="tooltip" data-placement="bottom" title="Album hinzufügen">
				<span class="glyphicon glyphicon-plus" ></span>
			</a>
		@endif
	</div>
	<div class="navProfile col-md-3 col-md-offset-2 col-sm-4">
		@if(\Auth::guest())
			<a href="{{ url('/login') }}">
				<span class="glyphicon glyphicon-log-in"> </span> Login
			</a>
			<a href="{{ url('/register') }}">
				<span class="glyphicon glyphicon-copy"> </span> Registrieren
			</a>
		@endif
		@if(\Auth::check())
			<a href="{{ url('/profile/' . \Auth::User()->id) }}">
				<span class="glyphicon glyphicon-user"> </span> Profil
			</a>
			<a href="{{ url('/logout') }}" >
				<span class="glyphicon glyphicon-log-out"> </span> Logout
			</a>
		@endif
	</div>
</nav>