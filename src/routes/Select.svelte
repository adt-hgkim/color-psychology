<script lang="ts">
    import type { Color } from "../types"
    import ColorCard from "../components/ColorCard.svelte"
	import data from "../colors.json"
    import {push} from 'svelte-spa-router'

	let colors: Array<Color & { selected: boolean }> = suffle(data.colors.map((e) => ({ ...e, selected: false })))
    $: length = colors.filter((e) => e.selected).length

    $: if (length === 3) {
        setTimeout(()=>{

            push(`/result?ids=${colors.filter(e => e.selected).map(e => e.id).join(',')}`)

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

<main>
    <p class="guide">Choose 3 colors</p>
    <div class="cp-container">
        {#each colors as color}
            <div class="item">
                <ColorCard color={color} on:click={() => selectColor(color.id)}/>
            </div>
        {/each}
    </div>
</main>

<style lang="postcss">
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

