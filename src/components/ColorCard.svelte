<script lang="ts">
    import type { Color } from "../types"
    export let color: Color & { selected: boolean }
    $: isSelected = color.selected

</script>

{#if isSelected}
    <div class="checked">
        {color.id}
    </div>
{/if}
<div class="card shadow" title={color.id.toString()} style="background: linear-gradient(0deg, {color.colorA} 45%, {color.colorB} 55%)" on:click />

<style lang="postcss">
    .checked {
        @apply absolute w-8 h-8 bg-black rounded-full;
        @apply font-serif text-white text-center font-black text-xl;
        @apply -top-3 -right-2 lg:-top-3 lg:right-8;
    }

	.card {
        @apply w-24 h-48 mx-auto;
        @apply md:w-24 md:h-48;
	}

    .shadow {
        box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    }
</style>