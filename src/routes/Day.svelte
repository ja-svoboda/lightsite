<script>

    function toggle() {
        window.document.body.classList.toggle('day-mode')
    }
</script>

<button on:click={toggle}>
    <slot/>
</button>
<style>
    button{
    	background-color: darkslategrey;
		color: whitesmoke;
		border: none;
		border-radius: 50px;
		padding: 1rem;
		text-transform: uppercase;
		
	}
	:global(body.day-mode) button {
		background-color: darkslategrey;
		color:  whitesmoke;
	}

	

	
</style>