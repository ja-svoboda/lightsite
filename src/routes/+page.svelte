
<script>
    import Header from './Header.svelte';
	import Night from './Night.svelte';


	let sentense =  'here comes the light'
	
	function handleClick() {
		alert('go to sleep');
	}
</script>



<main>
<div class="nav">
 <Night on:click|once={handleClick}>night</Night>

<h1>{sentense}</h1>

<p><a href="https://www.are.na/daniel-galis/light-site">light(site)</a> +
<a href="https://www.are.na/jakub-svoboda/calendar-here-comes-the-light">calendar</a></p>
</div>
	<div class="container">
		<div>
		<!--<p class="post">This soporific winter mode is at least partly mediated by one of the major players in our chronobiology – melatonin. 
			This endogenous hormone is controlled by the circadian clock, while also influencing it in turn. 
			It’s the sleep drug, meaning its production ramps up before we’re due to fall into bed. 
			“In humans, the melatonin profile is much broader in winter than in summer,” says chronobiologist Till Roenneberg. 
			“That's the biochemical background of why circadian clocks can react to two different seasons of the year.”</p>
		<p class="post">
			People living at the western edges experience higher rates of breast cancer, obesity, diabetes and heart 
			disease – put down by researchers primarily to the chronic disruption of circadian rhythms that 
			arises from having to wake up in the dark.
		</p>

		<img src="spectrum.png" alt="spectrum" width="500" height="600">
		</div>-->
	</div>	
</main>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		align-content: flex-start;
	}

	.post {
		
		margin: 10%;
		background-color: transparent;
		border-radius: 50px;
		justify-content: space-between;
		column-gap: 50px;

	
	}

	:global(body) {
		background-color: whitesmoke;
		color: black;
		transition: background-color 0.3s;
		align-content: center;
	}
	:global(body.night-mode) {
		background-color: red;
		color: black;
	}	

    :global(a) {

		text-decoration: underline;
		color: black;

	}

	:global(p) {
		color: black;
		font-size: 1.25rem;
		min-width: 100px;
		max-width: 1080px;

	
	}

</style>






<!--
<div class="toggle">
    <svg xmlns="http://www.w3.org/2000/svg" width="237" height="22" viewBox="0 0 237 22" fill="none">
        <circle class="first" cx="11" cy="11" r="11" fill="#3A3A3A"/>
        <circle class="second" cx="118.5" cy="11" r="11" fill="#3A3A3A"/>
        <circle class="third" cx="225.5" cy="11" r="11" fill="#3A3A3A"/>
    </svg>
</div>
-->
