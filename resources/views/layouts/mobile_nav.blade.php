<nav class="mobileNav">
	<div class="siteTitle">
		<a href="/"> 8A Fotos</a>
	</div>
	<div class="navLinks">
		<a href="{{ url('/album') }}" >
			Alle Alben
		</a>
		@if(\Auth::guest())
			<a href="{{ url('/login') }}">
				Login
			</a>
			<a href="{{ url('/register') }}">
				Registrieren
			</a>
		@endif
		@if(\Auth::check())
			<a href="{{ url('/album/create') }}" id=createAlbum>
				Album hinzufügen
			</a>
			<a href="{{ url('/logout') }}">
				Logout
			</a>
		@endif
	</div>
</nav>