<template>
    <div class="input-group">
        <label class="label">
            <span class="text">{{ label }}</span>
            <input v-model="inputValue"
                   :id="[id ? id : '']"
                   :type="[type ? type : 'text']"
                   :class="[vclass ? vclass : '', 'input']"
                   :name="[name ? name : 'name']"
                   :placeholder="[placeholder ? placeholder : '']"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: "VInput",
        props: {
            id: String,
            label: String,
            type: String,
            name: String,
            vclass: String,
            placeholder: String
        },
        data () {
            return {
                inputValue: '',
                inClass: true
            }
        },
    }
</script>

<style scoped>

</style>