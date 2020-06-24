<template>
    <div class="dropdown">
        <p class="link" @click="isOpen = !isOpen"><span class="point"></span><span class="point"></span><span class="point"></span></p>
        <ul class="dropdown-menu" :class="{ open: isOpen }">
            <li class="dropdown-item"><span class="dropdown-link" @click="getFullContactView({id})">View</span></li>
<!--            <li class="dropdown-item"><router-link :to=linkView class="dropdown-link" @click.native="getFullContact({id})">View</router-link></li>-->
<!--            <li class="dropdown-item"><router-link :to=linkEdit class="dropdown-link" @click.native="getFullContact({id})">Edit</router-link></li>-->
            <li class="dropdown-item"><span class="dropdown-link" @click="getFullContactEdit({id})">Edit</span></li>
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
            linkEdit({id}) {
                return `/edit/${id}`
            },
            linkView({id}) {
                return `/view/${id}`
            }
        },
        methods: {
            getFullContactView({id}) {
                console.log('ID: ', id);
                this.$store.dispatch('fullInfoContactView', id);
            },
            getFullContactEdit({id}) {
                console.log('ID: ', id);
                this.$store.dispatch('fullInfoContactEdit', id);
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
    .dropdown-link {
        cursor: pointer;
    }
</style>