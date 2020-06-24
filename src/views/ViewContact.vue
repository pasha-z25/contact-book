<template>
    <application :title="this.title">
        <div>
            <p><b>Name</b> <span>{{ contact.name }}</span></p>
            <p><b>Surname</b> <span>{{ contact.surname }}</span></p>
            <p><b>Phone</b> <span>{{ contact.phone[0].value }}</span></p>
            <p><b>Email</b> <span>{{ contact.email[0] }}</span></p>
            <p><b>Born Date</b> <span>{{ contact.bornDate | cutDate }}</span></p>
            <p><b>Category</b> <span>{{ contact.phone[0].category | capitalize }}</span></p>
            <p v-if="contact.position"><b>Position</b> <span>{{ contact.position }}</span></p>
            <p v-if="contact.information"><b>Information</b> <span>{{ contact.information }}</span></p>
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
        filters: {
            cutDate(value) {
                return value.substring(0, 10)
            },
            capitalize(value) {
                if (!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style scoped>

</style>