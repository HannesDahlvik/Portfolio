<script lang="ts">
    import { cn } from '../utils'

    let className: string | null = null
    export { className as class }
</script>

<div class={cn('border-4 border-title/20 rounded-3xl p-4 bg-primary/10 z-50', className)}>
    <slot />
</div>
