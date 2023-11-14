<script lang="ts">
    import { onMount } from 'svelte'

    interface Meteor {
        x: number
        y: number
        speed: number
    }

    let wrapper: HTMLDivElement
    let meteors: Meteor[] = []

    onMount(() => {
        const initializeMeteors = () => {
            meteors = []

            for (let i = 0; i < 60; i++) {
                meteors.push({
                    x: Math.random() * wrapper.offsetWidth,
                    y: Math.random() * wrapper.offsetHeight,
                    speed: Math.ceil(Math.random() * 3)
                })
            }
        }

        const updateMeteors = () => {
            meteors = meteors.map((meteor) => ({
                ...meteor,
                x: meteor.x + meteor.speed / Math.sqrt(2),
                y: meteor.y + meteor.speed / Math.sqrt(2)
            }))

            meteors = meteors.map((meteor) => ({
                ...meteor,
                x: meteor.x > wrapper.offsetWidth ? 0 : meteor.x,
                y: meteor.y > wrapper.offsetHeight ? 0 : meteor.y
            }))
        }

        const animateMeteors = () => {
            updateMeteors()
            requestAnimationFrame(animateMeteors)
        }

        initializeMeteors()
        animateMeteors()
    })
</script>

<div class="absolute overflow-hidden h-[2046px] w-full p-1" bind:this={wrapper}>
    {#each meteors as { x, y }, i (i)}
        <div
            class="absolute h-6 w-[1px] -rotate-45 bg-gradient-to-b from-transparent to-white/50"
            style="left: {x}px; top: {y}px;"
        />
    {/each}
</div>
