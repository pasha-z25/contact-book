<template>
    <div class="user-card d-flex align-items-center">
        <v-logo />
        <div class="name-block flex-1">
            <p class="name">{{ UserName }} {{ UserSurname }}</p>
            <v-link href="/" class="link">Log out</v-link>
        </div>
        <v-drop-down />
    </div>
</template>

<script>
    import VLink from "../components/VLink";
    import VLogo from "../components/VLogo";
    import VDropDown from "../components/VDropDown";
    import user from "../user";

    export default {
        name: "UserCard",
        components: { VLink, VLogo, VDropDown },
        data() {
            return {
                UserId: user._id,
                UserName: user.name,
                UserSurname: user.surname
            }
        }
    }
</script>

<style scoped>
    .user-card {
        padding: var(--indent-default);
    }
    .name-block {
        padding: 0 var(--indent-default);
    }
    .link {
        color: var(--color-orange);
        font-size: 0.8em;
    }
    .name {
        font-size: 1.2em;
    }
</style>