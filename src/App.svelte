<script lang="ts">
    import type { Color } from "./types"
	import Tailwindcss from "./utils/Tailwindcss.svelte"
    import ColorCard from "./components/ColorCard.svelte"
	import data from "./colors.json"

	let colors: Array<Color & { selected: boolean }> = suffle(data.colors.map((e) => ({ ...e, selected: false })))
    $: length = colors.filter((e) => e.selected).length

    $: if (length === 3) {
        setTimeout(() => {
            if (confirm('hey?')) {
                alert('hi')
            } else {
                colors.map(e => ({ ...e, selected: false }))
            }
        },100)
    }

    let resultMode: boolean = false

    function selectColor(id: number): void {
        const found = colors.find((e) => e.id === id)
        if (found && !found.selected && length < 3) found.selected = true
        else if (found && found.selected) found.selected = false
        colors = colors
    }

    function suffle(array: any[]): any[] {
        for (let i = 0 ; i < array.length ; i++) {
            const randomIndex = Math.floor(Math.random() * (array.length - i) + i)
            const temp = array[i]
            array[i] = array[randomIndex]
            array[randomIndex] = temp
        }
        return array
    }
</script>

<Tailwindcss />

<main>
    <div id="app">
        <h1 class="title">Color Psychology</h1>
        <p class="guide">Choose 3 colors</p>

        {#if !resultMode}
        <div class="cp-container">
            {#each colors as color}
                <div class="item">
                    <ColorCard color={color} on:click={() => selectColor(color.id)}/>
                </div>
            {/each}
        </div>
        {:else}
        <div>
            RESULT
        </div>
        {/if}

    </div>
</main>

<style lang="postcss">
    #app {
        @apply container;
    }

	h1.title {
		@apply font-serif font-bold text-8xl uppercase text-center tracking-wider;
	}

    p.guide {
        @apply mt-6;
        @apply text-4xl text-center tracking-widest;
    }

	.cp-container {
		@apply container flex flex-wrap mx-auto;
	}

    .item {
        @apply relative m-12;
    }
</style>
