<script lang="ts">
    import icons from 'devicon/devicon.json'
    import { onMount } from 'svelte'
    import Tooltip from './Tooltip.svelte'

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

<Tooltip>
    <p slot="text">{title}</p>

    <div
        class="flex justify-center items-center gap-2 h-14 w-14 xl:h-20 xl:w-20 bg-black/[15%] rounded-xl p-1"
    >
        {#if image}
            <img src={image} alt={title} class="h-5 w-5 xl:h-8 xl:w-8" />
        {:else}
            <i class="devicon-{icon} text-2xl xl:text-4xl" style="color: {color};" />
        {/if}
    </div>
</Tooltip>
