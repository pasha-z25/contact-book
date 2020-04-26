<template>
    <div class="v-logo">
        <img src="" alt="" class="logo-image">
    </div>
</template>

<script>
    export default {
        name: "VLogo"
    }
</script>

<style scoped>
    .v-logo {
        display: inline-block;
        width: 46px;
        height: 46px;
        border: 2px solid var(--color-orange);
        border-radius: 23px;
        background: var(--color-lighgray) url('../assets/images/user-avatar.png') no-repeat center/cover;
        text-align: center;
        overflow: hidden;
    }
    .logo-image {
        width: 100%;
    }
</style>