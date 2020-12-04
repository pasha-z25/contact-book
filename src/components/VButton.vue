<template>
    <button
            :id="id"
            :type="type"
            :class="[vclass, 'btn']"
    >
        <span class="text"><slot>Send</slot></span>
    </button>
</template>

<script>
    export default {
        name: "VButton",
        props: {
            id: {
                type: [String, Number],
            },
            type: {
                type: String,
                default: 'submit'
            },
            vclass: {
                type: String,
                default: 'btn-orange'
            }
        }
    }
</script>

<style scoped>

</style>