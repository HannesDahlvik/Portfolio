<script lang="ts">
    export let disabled: boolean = false
</script>

<button
    class="flex justify-center items-center h-full w-full duration-200 rounded-xl hover:bg-muted/20 disabled:opacity-30 disabled:cursor-not-allowed"
    {disabled}
    on:click
>
    <slot />
</button>
