<template>
    <div class="wrapper d-flex flex-column align-items-center justify-content-center">
        <img src="../assets/images/old-book.png" alt="logo" width="256px" height="256px" class="logo">
        <h2 class="title text-center">Простите, но эта страница не найдена. <br><span class="small">(но возможно она ещё вернётся...)</span></h2>
        <p class="text text-center">
            <v-link href="/" class="link">На главную</v-link>
        </p>
    </div>
</template>

<script>
    import VLink from "../components/VLink";

    export default {
        name: "Error",
        components: { VLink },
    }
</script>

<style scoped>
    .wrapper {
        color: var(--color-lighgray);
        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-dark)), to(var(--color-gray)));
        background: -o-linear-gradient(top, var(--color-dark) 0%, var(--color-gray) 100%);
        background: linear-gradient(180deg, var(--color-dark) 0%, var(--color-gray) 100%);
        min-height: 100vh;
    }
    .logo {
        margin-top: calc(var(--indent-default) * 2);
        margin-bottom: calc(var(--indent-default) * 3);
    }
    .title {
        font-size: 22px;
        color: var(--color-lighgray);
        margin-bottom: var(--indent-default);
    }
    .title .small {
        font-size: 18px;
        opacity: 0.8;
    }
    .link {
        color: var(--color-orange);
    }
    .text {
        margin-bottom: var(--indent-default);
    }
</style>