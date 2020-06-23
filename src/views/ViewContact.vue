<template>
    <application :title="this.title">
        <div>
            {{ contact }}
        </div>
        <div>
            <button @click="contact2">new</button>
            <p>{{ contact2 }}</p>
        </div>
    </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";
    export default {
        name: "ViewContact",
        components: {
            Application
        },
        data() {
            return {
                title: "View current user"
            }
        },
        computed: {
            ...mapGetters([
                'getCurrentContact',
            ]),
            contact() {
                return this.getCurrentContact
            },
        },
        methods: {
            contact2() {
                return this.getCurrentContact
            },
        }
    }
</script>

<style scoped>

</style>