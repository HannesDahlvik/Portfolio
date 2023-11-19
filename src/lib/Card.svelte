<script lang="ts">
    import * as icons from 'lucide-svelte'
    import { fade } from 'svelte/transition'

    export let icon: keyof typeof icons
    export let title: string
    export let delay: number
</script>

<div
    class="relative bg-black/10 backdrop-blur-sm border border-muted rounded-xl p-6"
    transition:fade={{ delay }}
>
    <div class="inline-flex gap-2 bg-black/20 border border-muted rounded-full py-1.5 px-3">
        <svelte:component this={icons[icon]} size={22} />
        <p class="font-bold">{title}</p>
    </div>

    <div class={$$props.class}>
        <slot />
    </div>
</div>
