<script lang="ts">
    import { fade } from 'svelte/transition'

    import { Github, Linkedin, Mail } from 'lucide-svelte'
    import Card from '$lib/Card.svelte'
    import TechIcon from '$lib/TechIcon.svelte'
    import Project from '$lib/Project.svelte'
</script>

<svelte:head>
    <title>Hannes Dahlvik - Portfolio</title>
</svelte:head>

<div class="w-11/12 sm:w-9/12 lg:w-8/12 pt-44 pb-4 sm:py-44">
    <div
        class="flex flex-col items-center sm:items-start mb-32 text-center sm:text-left"
        transition:fade={{
            duration: 600
        }}
    >
        <h1 class="text-5xl font-bold">Hannes Dahlvik</h1>

        <p class="text-muted-foreground mt-2 text-xl">
            Web developer currently based in Vaasa, Finland.
        </p>

        <div class="mt-4 h-[2px] w-32 bg-primary" />

        <div class="flex gap-4 mt-4 text-">
            <a
                class="text-muted-foreground/75 duration-300 hover:text-foreground"
                href="https://github.com/HannesDahlvik"
                target="_blank"
            >
                <Github class="text-3xl" />
            </a>

            <a
                class="text-muted-foreground/75 duration-300 hover:text-foreground"
                href="https://www.linkedin.com/in/hannes-dahlvik-446958181/"
                target="_blank"
            >
                <Linkedin class="text-3xl" />
            </a>

            <a
                class="text-muted-foreground/75 duration-300 hover:text-foreground"
                href="mailto:hannes.dahlvik@gmail.com"
                target="_blank"
            >
                <Mail class="text-3xl" />
            </a>
        </div>
    </div>

    <div class="grid gap-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Technologies" icon="Wrench" delay={250} class="mt-2">
                <div class="grid grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                    <TechIcon icon="react-original" title="React" />
                    <TechIcon icon="nextjs-original" title="NextJS" color="#ffffff" />
                    <TechIcon icon="svelte-plain" title="Svelte" />
                    <TechIcon icon="react-original" title="React Native" />
                    <TechIcon icon="tailwindcss-plain" title="TailwindCSS" />
                    <TechIcon image="/vite.svg" title="Vite" color="#778aff" />
                </div>

                <div class="grid grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                    <TechIcon icon="nodejs-plain" title="Node" />
                    <TechIcon image="/bun.svg" title="Bun" color="#fbf0df" />
                    <TechIcon icon="express-original" title="Express" color="#d5d5d5" />
                    <TechIcon image="/trpc.svg" title="tRPC" color="#398ccb" />
                    <TechIcon image="/prisma.svg" title="Prisma" color="#00BFA5" />
                </div>

                <div class="grid grid-cols-2 xl:grid-cols-3 gap-2">
                    <TechIcon icon="vscode-plain" title="VS Code" />
                    <TechIcon icon="github-original" title="Github" color="#ffffff" />
                    <TechIcon icon="typescript-plain" title="Typescript" />
                    <TechIcon image="/pnpm.svg" title="PNPM" color="#f9ad00" />
                </div>
            </Card>

            <Card title="Test" icon="ZoomOutIcon" delay={400}>
                <p>test</p>
            </Card>
        </div>

        <div transition:fade={{ delay: 600 }}>
            <Card
                icon="Presentation"
                title="Projects"
                delay={500}
                class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4"
            >
                <Project
                    href="https://snacr.vercel.app/"
                    github="https://github.com/HannesDahlvik/snacr"
                    image="/snacr.jpg"
                    name="Snacr"
                    description="An open srouce reddit type app."
                >
                    <svelte:fragment slot="technologies">
                        <i class="devicon-nextjs-original" />
                        <i class="devicon-react-original colored" />
                        <i class="devicon-typescript-plain colored" />
                        <img src="/trpc.svg" alt="trpc.io logo" class="h-6 w-6" />
                        <img src="/prisma.svg" alt="prisma.io logo" class="h-6 w-6" />
                        <i class="devicon-postgresql-plain colored" />
                    </svelte:fragment>
                </Project>

                <Project
                    href="https://zodive.vercel.app/"
                    github="https://github.com/HannesDahlvik/zodive"
                    image="/zodive.jpg"
                    name="Zodive"
                    description="An open source finance tracker."
                >
                    <svelte:fragment slot="technologies">
                        <i class="devicon-nextjs-original" />
                        <i class="devicon-typescript-plain colored" />
                        <img src="/trpc.svg" alt="trpc.io logo" class="h-6 w-6" />
                        <img src="/prisma.svg" alt="prisma.io logo" class="h-6 w-6" />
                        <i class="devicon-postgresql-plain colored" />
                    </svelte:fragment>
                </Project>

                <Project
                    wip
                    href="https://github.com/HannesDahlvik/create-nelt-app"
                    github="https://github.com/HannesDahlvik/create-nelt-app"
                    image="/create-nelt-app.jpg"
                    name="Create NELT App"
                    description="A CLI tool to bootstrap a project with NextJS, Expo, Lucia (auth) & tRPC "
                >
                    <svelte:fragment slot="technologies">
                        <i class="devicon-typescript-plain colored" />
                    </svelte:fragment></Project
                >
            </Card>
        </div>
    </div>
</div>
