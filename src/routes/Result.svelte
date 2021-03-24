<script lang="ts">
    import type { Color } from "../types"
    import {querystring} from 'svelte-spa-router'
	import data from "../colors.json"

    const ids: string[] = $querystring.split('=')[1].split(',')
    const colors: Array<Color & { selected: boolean }> = data.colors.map((e) => ({ ...e, selected: false })).filter(e => ids.includes(e.id.toString()))
</script>

<div class="mt-16">
    {#each colors as color}
        <div class="flex flex-wrap flex-row mb-24 lg:mb-48">
            <div class="w-full h-6 shadow-md" style="background: linear-gradient(90deg, {color.colorA} 45%, {color.colorB} 55%)" />
            <div class="flex-grow mt-6">
                <span class="leading-loose tracking-widest font-bold">
                    {color.id}. {color.title}
                </span>
                <p class="leading-loose tracking-wider">
                    {color.content}
                </p>
            </div>
        </div>
    {/each}
</div>