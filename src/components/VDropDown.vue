<template>
    <div class="dropdown">
        <p class="link" @click="isOpen = !isOpen"><span class="point"></span><span class="point"></span><span class="point"></span></p>
        <ul class="dropdown-menu" :class="{ open: isOpen }">
            <li class="dropdown-item"><v-link href="#" class="dropdown-link">View</v-link></li>
            <li class="dropdown-item"><v-link href="#" class="dropdown-link">Edit</v-link></li>
            <li class="dropdown-item"><v-link href="#" class="dropdown-link">Delete</v-link></li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    import VLink from "./__VLink";

    export default {
        name: "VDropDown",
        components: { VLink },
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>

<style scoped>
    .dropdown .point {
        display: inline-block;
        width: 4px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        background: var(--color-orange);
    }
    .link {
        color: var(--color-orange);
    }
</style>