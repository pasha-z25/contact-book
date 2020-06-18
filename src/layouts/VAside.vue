<template>
    <aside class="aside d-flex flex-column">
        <h2 class="title text-center"><router-link to="/home">Contact book</router-link></h2>
<!--        <user-card />-->
        <slot></slot>
        <div class="flex-1"></div>
        <router-link to="/add" class="add-link"><span class="link-text">Add contact</span></router-link>
    </aside>
</template>

<script>

    // import UserCard from "./UserCard";

    export default {
        name: "VAside",
        components: { },
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
    .title a {
        color: var(--color-lighgray);
    }
    .add-link {
        color: var(--color-lighgray);
        padding: 0 var(--indent-default);
        display: block;
    }
    .link-text {
        display: block;
        width: 100%;
        padding: calc(var(--indent-default) / 2) calc(var(--indent-default) * 2);
        border-top: 1px solid var(--color-lighgray);
        background: url("../assets/images/add-icon.svg") no-repeat left center;
    }
</style>