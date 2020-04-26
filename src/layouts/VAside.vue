<template>
    <aside class="aside">
        <h2 class="title text-center">Contact book</h2>
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name: "VAside"
    }
</script>

<style scoped>
    .aside {
        color: var(--color-lighgray);
        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-dark)), to(var(--color-gray)));
        background: -o-linear-gradient(top, var(--color-dark) 0%, var(--color-gray) 100%);
        background: linear-gradient(180deg, var(--color-dark) 0%, var(--color-gray) 100%);
        min-height: 100%;
    }
    .title {
        padding: var(--indent-default);
    }
</style>