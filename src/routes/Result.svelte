<script lang="ts">
    import type { Color } from "../types"
    import ColorCard from "../components/ColorCard.svelte"
    import {querystring} from 'svelte-spa-router'
	import data from "../colors.json"

    const ids: string[] = $querystring.split('=')[1].split(',')
    const colors: Array<Color & { selected: boolean }> = data.colors.map((e) => ({ ...e, selected: false })).filter(e => ids.includes(e.id.toString()))
</script>

<main>
    <div class="mt-24">
        {#each colors as color}
            <div class="flex flex-row m-3">
                <div class="flex-none w-32">
                    <ColorCard color={color} />
                </div>
                <div class="flex-none w-12 text-center">
                    {color.id}
                </div>
                <div class="flex-none w-64 text-center">
                    {color.title}
                </div>
                <div class="flex-grow leading-loose tracking-wider">
                    <p>
                        {color.content}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</main>