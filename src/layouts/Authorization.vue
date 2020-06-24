<template>
    <div class="wrapper auth-page d-flex flex-column align-items-center justify-content-center">
        <set-lang />
        <img src="../assets/images/logo.png" alt="logo" width="128px" height="128px" class="logo">
        <slot></slot>
        <preloader />
    </div>
</template>

<script>
    import SetLang from "../components/SetLang";
    import Preloader from "../components/Preloader";

    export default {
        name: 'Authorization',
        components: {SetLang, Preloader},
    }
</script>

<style scoped>
    .wrapper {
        color: var(--color-lighgray);
        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-dark)), to(var(--color-gray)));
        background: -o-linear-gradient(top, var(--color-dark) 0%, var(--color-gray) 100%);
        background: linear-gradient(180deg, var(--color-dark) 0%, var(--color-gray) 100%);
        min-height: 100vh;
        position: relative;
    }
    .logo {
        margin-top: calc(var(--indent-default) * 2);
        margin-bottom: calc(var(--indent-default) * 3);
    }
</style>