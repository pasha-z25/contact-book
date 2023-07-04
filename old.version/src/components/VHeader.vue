<template>
    <header class="header">
        <h1 class="title">
            <slot></slot>
        </h1>
        <SetLang/>
    </header>
</template>

<script>
    import SetLang from "./SetLang";

    export default {
        name: "VHeader",
        components: {SetLang},
    }
</script>

<style scoped>
    .header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: var(--color-orange);
        padding: var(--indent-default) calc(var(--indent-default) * 2);
    }
</style>