<template>
    <div class="input-group">
        <label class="label">
            <span :class="{ text : label }">{{ label }}</span>
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
        props: ['id', 'label', 'type', 'name', 'vclass', 'placeholder'],
        data () {
            return {
                inputValue: '',
            }
        },
    }
</script>

<style scoped>

</style>