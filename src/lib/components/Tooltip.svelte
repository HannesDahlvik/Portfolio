<script>
    import { fade } from 'svelte/transition'

    let showTooltip = false
</script>

<div
    class="relative inline-block cursor-default"
    tabindex="0"
    role="button"
    on:mouseenter={() => (showTooltip = true)}
    on:mouseleave={() => (showTooltip = false)}
>
    <slot />

    {#if showTooltip}
        <div
            class="absolute z-50 bottom-full left-[50%] w-[120px] ml-[-60px] bg-black/50 text-white text-center rounded-md mb-0.5 p-2 backdrop-blur-sm"
            transition:fade={{ duration: 150 }}
        >
            <slot name="text" />
        </div>
    {/if}
</div>
