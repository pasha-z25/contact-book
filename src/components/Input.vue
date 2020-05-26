<template>
    <input
            v-bind:id="id"
            v-bind:type="type"
            v-bind:name="name"
            v-bind:class="{ active: isActive }"
    />
</template>

<script>
    export default {
        name: "Input",
        props: {
            href: {
                type:String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>