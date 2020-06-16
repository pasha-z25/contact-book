<template>
    <div class="input-group">
        <label class="label">
            <span :class="{ text : label }">{{ label }}</span>
            <input :id="id"
                   :type="type"
                   :class="[vclass ? vclass : '', 'input']"
                   :name="name"
                   :placeholder="placeholder"
                   :required="required"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: "VInput",
        props: {
            id: {
                type: [String, Number],
                required: true
            },
            label: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
            },
            vclass: {
                type: String,
            },
            required: {
                type: String,
            },
            placeholder: {
                type: String,
            }
        }
        // data () {
        //     return {
        //         inputValue: '',
        //     }
        // },
    }
</script>

<style scoped>

</style>