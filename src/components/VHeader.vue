<template>
    <header class="header">
        <h1 class="title">
            <slot></slot>
        </h1>
    </header>
</template>

<script>

    export default {
        name: "VHeader",
    }
</script>

<style scoped>
    .header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: var(--color-orange);
        padding: var(--indent-default) calc(var(--indent-default) * 2);
    }
</style>