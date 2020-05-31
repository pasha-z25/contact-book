<template>
    <button
            :id="[id ? id : '']"
            :type="[type ? type : 'submit']"
            :class="[vclass ? vclass : '', 'btn']"
    >
        <span :class="{ text : name }">{{ name }}</span>
    </button>
</template>

<script>
    export default {
        name: "VButton",
        props: ['id', 'type', 'name', 'vclass']
    }
</script>

<style scoped>

</style>