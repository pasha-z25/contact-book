<template>
    <div class="wrapper d-flex flex-column align-items-center justify-content-center">
        <set-lang />
        <img src="../assets/images/old-book.png" alt="logo" width="256px" height="256px" class="logo">
        <h2 class="title text-center">{{ $t('msgPageNotFound') }}. <br><span class="small">{{ $t('msgWillComeBack') }}</span></h2>
        <p class="text text-center">
            <router-link to="/" class="link">{{ $t('btnToHome') }}</router-link>
        </p>
    </div>
</template>

<script>
    import SetLang from "../components/SetLang";

    export default {
        name: "Error",
        components: { SetLang }
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
        margin-bottom: var(--indent-default);
    }
    .title .small {
        opacity: 0.8;
    }
    .link {
        color: var(--color-orange);
    }
    .text {
        margin-bottom: var(--indent-default);
    }
</style>