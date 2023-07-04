<template>
    <form :class="vclass">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "VForm",
        props: {
            vclass: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>