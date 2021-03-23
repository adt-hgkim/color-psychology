<script lang="ts">
	// import { onMount } from "svelte"
	import colors from "./colors.json"

	const hello = colors.hello

	// onMount(async () => {
	// 	console.log(colors.hello)
	// })
</script>

<main>
	<h1>Color Psychology</h1>
	<p>Choose 3 colors</p>

		<div>{hello}</div>
		<div>tailwind.css</div>
		<div>i18n</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>