<template>
    <div class="burger" :class="{ open: isOpen }" @click="isOpen = !isOpen">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</template>

<script>
    export default {
        name: "VBurger",
        data() {
            return {
                isOpen: false,
            }
        }
    }
</script>

<style scoped>

</style>