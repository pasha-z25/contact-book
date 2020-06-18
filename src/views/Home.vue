<template>
     <application :title="this.title">
         <div v-if="contactsLength">
             <h2>home page</h2>
             <p>contactsLength {{ contactsLength }}</p>
             <p>categoriesLength {{ categoriesLength }}</p>
         </div>
         <div v-else>
             <h2>not contacts</h2>
             <p>categoriesLength {{ categoriesLength }}</p>
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
                'getContactsLength',
                'getCategoriesLength'
            ]),
            contactsLength() {
                return this.getContactsLength
            },
            categoriesLength() {
                return this.getCategoriesLength
            }
        },
    }
</script>

<style scoped>

</style>