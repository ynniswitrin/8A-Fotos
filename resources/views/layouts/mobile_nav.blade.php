<nav class="mobileNav">
	<div class="siteTitle">
		<a href="/"> 8A Fotos</a>
	</div>
	<div class="navMiddle">
		@if(\Auth::guest())
			<a href="{{ url('/login') }}">
				Login
			</a>
			<a href="{{ url('/register') }}">
				Registrieren
			</a>
		@endif
		@if(\Auth::check())
			<a href="{{ url('/album/create') }}">
				Album hinzufügen
			</a>
			<a href="{{ url('/profile/' . \Auth::User()->id) }}">
				Profil
			</a>
			<a href="{{ url('/logout') }}">
				Logout
			</a>
		@endif
	</div>
</nav>