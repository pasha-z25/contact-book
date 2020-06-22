<template>
    <div class="dropdown">
        <p class="link" @click="isOpen = !isOpen"><span class="point"></span><span class="point"></span><span class="point"></span></p>
        <ul class="dropdown-menu" :class="{ open: isOpen }">
            <li class="dropdown-item"><router-link :to=link class="dropdown-link">View</router-link></li>
            <li class="dropdown-item"><router-link :to=link class="dropdown-link">Edit</router-link></li>
            <li class="dropdown-item"><span class="dropdown-link">Delete</span></li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VDropDown",
        props: ['id'],
        data() {
            return {
                isOpen: false,
            }
        },
        computed: {
            link({id}) {
                return `/edit/${id}`
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