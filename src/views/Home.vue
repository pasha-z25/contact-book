<template>
     <application :title="this.title">
         <div v-if="contactsLength" class="d-flex flex-wrap">
             <ContactCard
                     v-for="contact in contacts"
                     :key="contact._id"
                     :id="contact._id"
                     :name="contact.name"
                     :surname="contact.surname"
                     :category="contact.category.name"
             />
             <div class="w-100">
                 <hr>
                 <p>Всего контактов: {{ contactsLength }}</p>
                 <p>Категорий: {{ categoriesLength }}</p>
             </div>
         </div>
         <div v-else>
             <p>Извините, у Вас ещё нет контактов.</p>
             <p>Вы можете <router-link to="/add" class="link">добавить</router-link> контакты сейчас или позже.</p>
         </div>
     </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";
    import ContactCard from "../components/ContactCard";

    export default {
        name: "Home",
        components: {
            ContactCard,
            Application
        },
        data() {
            return {
                title: "Main Page"
            }
        },
        computed: {
            ...mapGetters([
                'getContacts',
                'getContactsLength',
                'getCategoriesLength'
            ]),
            contacts() {
                return this.getContacts
            },
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