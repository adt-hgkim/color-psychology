<script lang="ts">
    import Router from 'svelte-spa-router'
    import routes from "./routes"
	import Tailwindcss from "./utils/Tailwindcss.svelte"
    import {link} from 'svelte-spa-router'
</script>

<Tailwindcss />

<div id="app">
    <h1 class="title"><a use:link href="/">Color Psychology</a></h1>
    <Router {routes} />
</div>

<style lang="postcss">
    #app {
        @apply container;
    }

	h1.title {
		@apply font-serif font-bold uppercase text-center tracking-wider;
        @apply text-4xl md:text-7xl lg:text-8xl
    }
</style>
