<script lang="ts">
    import { Github } from 'lucide-svelte'

    export let description: string
    export let href: string
    export let github: string | null = null
    export let name: string
    export let image: string
    export let wip = false
</script>

<div class="flex flex-col h-full w-full bg-muted/20 rounded-lg border border-muted">
    <a {href} target="_blank">
        <div class="relative h-[250px] w-full">
            {#if wip}
                <div
                    class="absolute top-3 right-3 p-2 px-3 bg-secondary/25 backdrop-blur-lg rounded-full border-2 border-secondary"
                >
                    <p class="text-xs font-semibold">Work In Progress</p>
                </div>
            {/if}

            <img
                src={image}
                alt="{name} screenshot"
                class="h-[250px] w-full rounded-lg rounded-b-none object-cover object-top"
            />
        </div>
    </a>

    <div class="relative flex justify-between items-center p-6">
        <a {href} target="_blank" class="w-3/4">
            <h4 class="text-2xl font-bold mb-1">{name}</h4>
            <p class="font-medium">{description}</p>

            <div class="flex flex-wrap gap-3 mt-4 text-2xl">
                <slot name="technologies" />
            </div>
        </a>

        <a
            class="text-muted-foreground/75 duration-300 hover:text-foreground"
            href={github}
            target="_blank"
        >
            <Github />
        </a>
    </div>
</div>
