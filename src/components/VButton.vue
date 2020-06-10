<template>
    <button
            :id="id"
            :type="type"
            :class="vclass"

    >
        <span class="text">
            <slot> {{ name }}</slot>
        </span>
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
                default: 'btn'
            }
        }
    }
</script>

<style scoped>

</style>