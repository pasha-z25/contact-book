<template>
    <div class="flag-wrap">
        <a href="#" class="link" @click="setLocale('en')"><flag iso="us"></flag></a>
        <a href="#" class="link" @click="setLocale('ru')"><flag iso="ru"></flag></a>
    </div>
</template>

<script>
    export default {
        name: "SetLang",
        methods: {
            setLocale(lang) {
                import(`../langs/${lang}.json`).then( msg => {
                    this.$i18n.setLocaleMessage(lang, msg);
                    this.$i18n.locale = lang;
                });
            }
        }
    }
</script>

<style scoped>
    .flag-wrap {
        float: right;
        align-self: flex-end;
        padding: 5px;
    }
    .link {
        margin: 0 5px;
    }
</style>