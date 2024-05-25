<script lang="ts">
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    import ProjectsWrapper from '$lib/sections/projects/ProjectsWrapper.svelte'

    import Card from '$lib/components/Card.svelte'
    import TechIcon from '$lib/components/TechIcon.svelte'
    import { GithubIcon, LinkedinIcon, Mail } from 'lucide-svelte'

    let showTitle = false

    let blurOne: HTMLDivElement | null
    let blurTwo: HTMLDivElement | null
    let blurThree: HTMLDivElement | null

    const MIN_HEIGHT = 320
    const MAX_HEIGHT = 520
    const MIN_WIDTH = 750
    const MAX_WIDTH = 1000

    onMount(() => {
        showTitle = true

        setInterval(() => {
            if (blurOne && blurTwo && blurThree) {
                blurOne.style.height = `${generateRandomHeight()}px`
                blurOne.style.width = `${generateRandomWidth()}px`
                blurOne.style.top = `${generateRandomTop()}px`

                blurTwo.style.height = `${generateRandomHeight()}px`
                blurTwo.style.width = `${generateRandomWidth()}px`
                blurTwo.style.top = `${generateRandomTop()}px`

                blurThree.style.height = `${generateRandomHeight()}px`
                blurThree.style.width = `${generateRandomWidth()}px`
                blurThree.style.top = `${generateRandomTop()}px`
            }
        }, 1000)
    })

    function generateRandomHeight() {
        return Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT)
    }

    function generateRandomWidth() {
        return Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH)
    }

    function generateRandomTop() {
        const scrollY = window.scrollY
        const innerHeight = window.innerHeight
        const random = Math.floor(Math.random() * 200)
        return scrollY <= 200 ? random : innerHeight / 2 - random
    }
</script>

<svelte:head>
    <title>Hannes Dahlvik - Portfolio</title>
    <meta name="description" content="Web developer currently based in Vaasa, Finland." />
</svelte:head>

<div class="fixed top-0 grid grid-cols-3 w-full h-screen">
    <div
        bind:this={blurOne}
        class="duration-1000 w-[750px] h-[320px] ease-linear bg-ternary blur-3xl rounded-full"
    />
    <div
        bind:this={blurTwo}
        class="duration-1000 w-[750px] h-[320px] ease-linear bg-secondary/20 blur-3xl rounded-full"
    />
    <div
        bind:this={blurThree}
        class="duration-1000 w-[750px] h-[320px] ease-linear bg-secondary/20 blur-3xl rounded-full"
    />
</div>

<div
    class="relative flex flex-col justify-center items-center h-[350px] lg:h-[576px] p-1 xl:px-48 text-center"
>
    {#if showTitle}
        <h1 class="text-title duration-300" transition:fade>
            Hi, I'm Hannes. <br />A web developer.
        </h1>

        <div
            class="absolute bottom-20 flex items-center gap-4 duration-300"
            transition:fade={{ delay: 500 }}
        >
            <a class="text-muted" href="https://github.com/hannesdahlvik" target="_blank">
                <GithubIcon size={32} />
            </a>

            <a
                class="text-muted"
                href="https://www.linkedin.com/in/hannes-dahlvik-446958181/"
                target="_blank"
            >
                <LinkedinIcon size={32} />
            </a>

            <a class="text-muted" href="malti:hannes.dahlvik@gmail.com" target="_blank">
                <Mail size={32} />
            </a>
        </div>
    {/if}
</div>

<div class="container mx-auto md:mt-40 px-8 pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 mb-10">
        <Card class="flex flex-col items-center md:pt-8">
            <h2>Tech & Tools</h2>

            <div class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-1 pt-4 md:p-8">
                <TechIcon icon="react-original" title="React" />
                <TechIcon icon="nextjs-plain" title="NextJS" color="#ffffff" />
                <TechIcon icon="svelte-plain" title="Svelte" />
                <TechIcon image="/icons/expo.svg" title="Expo" />
                <TechIcon icon="tailwindcss-plain" title="TailwindCSS" />
                <TechIcon image="/icons/trpc.svg" title="tRPC" color="#398ccb" />
                <TechIcon icon="postgresql-plain" title="PostgreSQL" />
                <TechIcon icon="mysql-original" title="MySQL" />
                <TechIcon image="/icons/vite.svg" title="Vite" color="#778aff" />
                <TechIcon icon="nodejs-plain" title="Node JS" />
                <TechIcon image="/icons/bun.svg" title="Bun" color="#fbf0df" />
                <TechIcon icon="vscode-plain" title="VS Code" />
                <TechIcon icon="github-original" title="Github" color="#ffffff" />
                <TechIcon icon="typescript-plain" title="Typescript" />
                <TechIcon image="/icons/pnpm.svg" title="PNPM" color="#f9ad00" />
                <TechIcon image="/icons/linux.svg" title="Linux" />
            </div>
        </Card>
    </div>

    <Card class="relative flex flex-col items-center w-full pt-8">
        <h2>Projects</h2>

        <ProjectsWrapper />
    </Card>
</div>
