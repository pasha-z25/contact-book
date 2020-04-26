<template>
    <div id="app">
        <v-aside>
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
    }
</script>

<style scoped>
    #app {
        display: flex;
        min-height: 100vh;
    }
</style>