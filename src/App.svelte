<script lang="ts">
    import Router from 'svelte-spa-router'
    import routes from "./routes"
	import Tailwindcss from "./utils/Tailwindcss.svelte"
    import {link} from 'svelte-spa-router'
</script>

<Tailwindcss />

<main>
    <div id="app">
        <h1 class="title"><a use:link href="/">Color Psychology</a></h1>
        <Router {routes} />
    </div>
</main>

<style lang="postcss">
    #app {
        @apply container;
    }

	h1.title {
		@apply font-serif font-bold text-8xl uppercase text-center tracking-wider;
	}
</style>
