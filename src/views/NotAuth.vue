<template>
    <authorization>
        <h2 class="title text-center"><span class="big">{{ $t('msgYouNotLogged') }}</span> <br>{{ $t('msgContactsNotAvailable') }}</h2>
        <p class="text">
            <router-link to="/" class="link">{{ $t('msgLogIn') }}</router-link>
            {{ $t('msgOr') }}
            <router-link to="/register" class="link">{{ $t('msgRegister') }}</router-link>
            {{ $t('msgToManage') }}
        </p>
    </authorization>
</template>

<script>
    import Authorization from "../layouts/Authorization";

    export default {
        name: "NotAuth",
        components: {
            Authorization
        },
    }
</script>

<style scoped>
    .title {
        margin-bottom: calc(var(--indent-default) * 2);
    }
    .text {
        margin-bottom: calc(var(--indent-default) * 2);
    }
    .link {
        color: var(--color-orange);
    }
</style>