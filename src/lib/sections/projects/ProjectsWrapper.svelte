<script lang="ts">
    import { PROJECTS } from '$lib/consts'
    import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-svelte'
    import NavigationButton from './NavigationButton.svelte'
    import { fade } from 'svelte/transition'

    let projectIndex = 0

    let project = PROJECTS[projectIndex]

    function nextProject() {
        projectIndex = (projectIndex + 1) % PROJECTS.length
        project = PROJECTS[projectIndex]
    }

    function previousProject() {
        projectIndex = (projectIndex + PROJECTS.length - 1) % PROJECTS.length
        project = PROJECTS[projectIndex]
    }
</script>

<div class="relative grid grid-cols-[1fr_12fr_1fr] items-center h-full w-full p-4 lg:p-8">
    <NavigationButton disabled={projectIndex === 0} on:click={previousProject}>
        <ChevronLeftIcon size={42} />
    </NavigationButton>

    {#key project}
        <div
            class="flex flex-col items-center justify-center px-8"
            in:fade
            out:fade={{ duration: 0 }}
        >
            <a href={project.url} target="_blank">
                <img
                    class="block w-full rounded-xl"
                    src={project.image}
                    alt={`${project.name} - ${project.description}`}
                />
            </a>

            <div class="py-4 flex flex-col w-full text-center">
                <h3>{project.name}</h3>
                <p class="font-medium">{project.description}</p>
            </div>
        </div>
    {/key}

    <NavigationButton disabled={projectIndex === PROJECTS.length - 1} on:click={nextProject}>
        <ChevronRightIcon size={42} />
    </NavigationButton>
</div>
