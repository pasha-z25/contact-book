<template>
    <div id="app">
        <div class="burger" :class="{ open: isOpen }" @click="isOpen = !isOpen">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        <v-aside :class="{ open: isOpen }">
            <p>logo</p>
        </v-aside>
        <main class="main">
            <v-header>
                <h1 class="title">All contacts</h1>
            </v-header>
        </main>

    </div>
</template>

<script>
    import VHeader from "../components/VHeader";
    import VAside from "../layouts/VAside";

    export default {
        name: "App",
        components: { VHeader, VAside },
        data() {
            return {
                isOpen: false
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