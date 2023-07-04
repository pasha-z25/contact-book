<template>
    <div class="user-card d-flex flex-wrap align-items-center">
        <v-logo />
        <div class="name-block flex-1">
<!--            <p class="name">{{ user.role | capitalize }}</p>-->
            <p class="name">{{ user.email }}</p>
            <router-link to="#" @click.native="logOut" class="link">Log out</router-link>
        </div>
        <v-drop-down />
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import VLogo from "../components/VLogo";
    import VDropDown from "../components/VDropDown";

    export default {
        name: "UserCard",
        components: { VLogo, VDropDown },
        data() {
            return { }
        },
        computed: {
            ...mapGetters([
                'getUser',
            ]),
            user() {
                return this.getUser
            },
        },
        filters: {
            capitalize(value) {
                if (!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods: {
            logOut() {
                this.$store.dispatch('initLogOut');
            }
        }
    }
</script>

<style scoped>
    .user-card {
        padding: var(--indent-default);
    }
    .name-block {
        padding: var(--indent-default) var(--indent-default) var(--indent-default) 0;
    }
    .link {
        display: inline-block;
        color: var(--color-orange);
        font-size: 0.8em;
    }
    .name {
        font-size: 1.2em;
        margin-bottom: calc(var(--indent-default) / 2);
    }
</style>