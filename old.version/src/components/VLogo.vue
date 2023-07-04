<template>
    <div class="logo">
<!--        <img src="./src/assets/images/user-avatar.png" alt="avatar" class="logo-image">-->
    </div>
</template>

<script>
    export default {
        name: "VLogo"
    }
</script>

<style scoped>
    .logo {
        display: inline-block;
        width: 46px;
        height: 46px;
        border: 2px solid var(--color-orange);
        border-radius: 23px;
        background: var(--color-lighgray) url('../assets/images/user-avatar.png') no-repeat center/cover;
        text-align: center;
        overflow: hidden;
    }
    /*.logo-image {*/
    /*    width: 100%;*/
    /*}*/
</style>