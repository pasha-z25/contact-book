<template>
    <aside class="aside d-flex flex-column">
        <h2 class="title text-center">Contact book</h2>
        <user-card />
        <slot></slot>
        <div class="flex-1"></div>
        <v-link href="#" class="add-link"><span class="link-text">Add contact</span></v-link>
    </aside>
</template>

<script>
    import VLink from "../components/VLink";
    import UserCard from "./UserCard";

    export default {
        name: "VAside",
        components: {UserCard, VLink },
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