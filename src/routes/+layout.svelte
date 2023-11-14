<script lang="ts">
    import '../app.css'
    import 'devicon/devicon.min.css'

    import { onMount } from 'svelte'

    let render = false

    onMount(() => {
        render = true
    })
</script>

{#if render}
    <slot />
{/if}
