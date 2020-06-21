<template>
    <div :id="id" class="card d-flex">
        <v-logo />
        <p class="full-name d-flex">
            <span class="name">{{ name }}</span>
            <span class="surname">{{ surname }}</span>
            <span class="category w-100">{{ category }}</span>
        </p>
        <v-drop-down :id="id"/>
    </div>
</template>

<script>
    import VDropDown from "./VDropDown";
    import VLogo from "./VLogo";
    export default {
        name: "ContactCard",
        components: {VLogo, VDropDown },
        props: [ 'id', 'name', 'surname', 'category']
    }
</script>

<style scoped>
    .card {
        flex-wrap: wrap;
        max-width: 350px;
        margin: 0 var(--indent-default) var(--indent-default) 0;
    }
    .full-name {
        flex: 1;
        flex-wrap: wrap;
        padding: calc(var(--indent-default) / 2);
    }
    .name {
        margin-right: calc(var(--indent-default) / 2);
    }
</style>