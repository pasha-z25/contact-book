<template>
    <div id="app">
        <v-burger />
        <v-aside :class="{ open: isOpen }" />
        <main class="main">
            <v-header>
                {{ this.title }}
            </v-header>
        </main>
    </div>
</template>

<script>
    import VHeader from "../components/VHeader";
    import VAside from "../layouts/VAside";
    import VBurger from "../components/VBurger";

    export default {
        name: "App",
        components: {VBurger, VHeader, VAside },
        data() {
            return {
                isOpen: false,
                title: "All contacts"
            }
        }
    }
</script>

<style scoped>
    #app {
        display: flex;
        min-height: 100vh;
        position: relative;
    }
</style>