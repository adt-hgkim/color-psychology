<script lang="ts">
	// import { onMount } from "svelte"
	import data from "./colors.json"

	const colors = data.colors

	// onMount(async () => {
	// 	console.log(colors.hello)
	// })
</script>

<main>
	<h1>Color Psychology</h1>
	<p>Choose 3 colors</p>

	<!--	TODO: tailwind.css, i18n-->

	<div class="photos">
		{#each colors as color}
			<div style="position: relative; display: inline-block; margin: 3rem;">
				<div style="width: 100px; height: 100px; background-color: {color.colorA}" />
				<div style="width: 100px; height: 100px; background-color: {color.colorB}" />
			</div>
		{:else}
			<!-- this block renders when photos.length === 0 -->
			<p>loading...</p>
		{/each}
	</div>

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