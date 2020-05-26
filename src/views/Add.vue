<template>
    <div id="app">
        <div class="burger" :class="{ open: isOpen }" @click="isOpen = !isOpen">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
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

    export default {
        name: "Add",
        components: { VHeader, VAside },
        data() {
            return {
                isOpen: false,
                title: "Add contact"
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