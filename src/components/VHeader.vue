<template>
    <header class="header">
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name: "VHeader"
    }
</script>

<style scoped>
    .header {
        background-color: var(--color-orange);
        padding: var(--indent-default) calc(var(--indent-default) * 2);
    }
</style>