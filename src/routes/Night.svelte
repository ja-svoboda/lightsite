<script>
    import { text } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';


	
    function night() {
        window.document.body.classList.toggle('night-mode')
    }

	function handleClick(){
		alert('you sould go to sleep');
	}

</script>

<button on:click={night}
		on:click={handleClick}

>
	night
</button>


<style>
    button{
    	background-color: red;
		color:  black;
		border: none;
		border-radius: 50px;
		padding: 1rem;
		text-transform: uppercase;
		
	}
	:global(body.night-mode) button {
		background-color: black;
		color: red;
	}

	
</style>

