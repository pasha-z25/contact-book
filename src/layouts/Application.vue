<template>
    <div class="wrapper">
        <template v-if="authStatus">
            <v-burger />
            <v-aside/>
            <main class="main">
                <v-header>{{ title }}</v-header>
                <section class="content">
                    <slot/>
                </section>
            </main>
        </template>
        <template v-else>
            <NotAuth/>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import NotAuth from "../views/NotAuth";
    import VBurger from "../components/VBurger";
    import VHeader from "../components/VHeader";
    import VAside from "./VAside";

    export default {
        name: "Application",
        props: ['title'],
        components: {
            VBurger, VAside, VHeader, NotAuth
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'getAuthStatus'
            ]),
            authStatus() {
                return this.getAuthStatus
            }
        },
    }

</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        min-height: 100vh;
        position: relative;
    }
    .main {
        background: var(--color-lighgray);
    }
    .content {
        padding: calc(var(--indent-default) * 2);
    }
</style>