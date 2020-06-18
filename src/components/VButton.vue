<template>
    <button
            :id="id"
            :type="type"
            :class="[vclass, 'btn']"
    >
        <span class="text">{{ name }}</span>
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
            name: {
                type: String,
                default: 'Send'
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