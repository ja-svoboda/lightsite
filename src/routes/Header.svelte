<script>
    import Night from './Night.svelte'
  
	import Doc from './doc.svelte'

	function handleClick() {
		alert('go to sleep');
	}

</script>

<header>
<nav class='items'>


	<Night on:click{handleClick}>
	   night
	</Night>

</nav>
</header>
<style>
	:global(header) {
		background-color: transparent;
		color: black;
		transition: background-color 0.3s
	}
	:global(body.night-mode) {
		background-color: red;
		color: black;
	}

    :global(body.evening-mode) {
		background-color:  #fad288;
		color: black;
	}

</style>