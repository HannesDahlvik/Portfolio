<script lang="ts">
    import icons from 'devicon/devicon.json'
    import { onMount } from 'svelte'

    /**
     * https://devicon.dev/
     *
     * Include type of icon with dash
     * @example react-original | svelte-plain
     */
    export let icon: string | null = null
    export let image: string | null = null
    export let title: string
    export let color: string | null = null

    onMount(() => {
        if (icon && !color) {
            const foundIcon = icons.find((val) => val.name === icon?.split('-')[0])
            if (foundIcon) {
                color = foundIcon.color
            }
        }
    })
</script>

<div class="flex items-center gap-2 w-full bg-black/25 rounded-lg p-1 pr-2">
    <div
        class="flex justify-center items-center h-10 w-10 rounded-lg"
        style="background-color: {color + '33'};"
    >
        {#if image}
            <img src={image} alt={title} class="h-5 w-5" />
        {:else}
            <i class="devicon-{icon} text-xl" style="color: {color};" />
        {/if}
    </div>

    <p class="text-xs sm:text-sm font-medium">{title}</p>
</div>
