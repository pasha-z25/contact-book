<template>
    <div class="wrapper">
        <img src="../assets/logo.png" alt="logo" width="128px" height="128px" class="logo">
        <slot></slot>
    </div>
</template>

<script>
    // import Auth from "../views/Auth";
    // import Register from "../views/Register";
//    import VLink from '../components/VLink.vue'

    export default {
        name: 'Authorization',
        components: {},
    }
</script>

<style scoped>
    .wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        flex: 1;
        color: var(--color-lighgray);
        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-dark)), to(var(--color-gray)));
        background: -o-linear-gradient(top, var(--color-dark) 0%, var(--color-gray) 100%);
        background: linear-gradient(180deg, var(--color-dark) 0%, var(--color-gray) 100%);

    }
    .logo {
        margin-top: calc(var(--indent-default) * 2);
        margin-bottom: calc(var(--indent-default) * 3);
    }
</style>