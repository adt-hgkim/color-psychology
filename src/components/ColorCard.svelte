<script lang="ts">
    import type { Color } from "../types"
    export let color: Color & { selected: boolean }
    $: isSelected = color.selected

</script>
<main>
    {#if isSelected}
        <div class="checked">
            {color.id}
        </div>
    {/if}
    <div class="card shadow" title={color.id.toString()} style="background: linear-gradient(0deg, {color.colorA} 45%, {color.colorB} 55%)" on:click />
</main>

<style lang="postcss">
    .checked {
        @apply absolute w-8 h-8 bg-black rounded-full -top-2 -right-2;
        @apply font-serif text-white text-center font-black text-xl;
    }

	.card {
        @apply w-24 h-48;
	}

    .shadow {
        box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    }
</style>