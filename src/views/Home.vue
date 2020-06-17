<template>
     <application :title="this.title">
         <div v-if="contactsLength">
             <h2>home page</h2>
         </div>
         <div v-else>
             <h2>not contacts</h2>
         </div>
     </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";

    export default {
        name: "Home",
        components: {
            Application
        },
        data() {
            return {
                title: "Main Page"
            }
        },
        computed: {
            ...mapGetters([
                'getContactsLength'
            ]),
            contactsLength() {
                return this.getContactsLength
            }
        },
    }
</script>

<style scoped>

</style>