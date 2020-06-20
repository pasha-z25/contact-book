<template>
    <application :title="this.title">
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Имя</span>
                    <input id="first-name" type="text" name="Имя" class="input line" v-model="contact.name" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Фамилия</span>
                    <input id="last-name" type="text" name="Фамилия" class="input line" v-model="contact.surname" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Телефон</span>
                    <input id="phone" type="tel" name="Телефон" class="input line" v-model="contact.phone" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">E-mail</span>
                    <input id="email" type="email" name="E-mail" class="input line" v-model="contact.email" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Дата рождения</span>
                    <input id="birthday" type="date" name="Дата_рождения" class="input line" v-model="contact.bornDate" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Категория</span>
                    <select id="category" name="Категория" v-model="contact.id" @change="handleChange" class="select">
                        <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.name }}</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="text-center">
            <v-button name="Добавить" @click.native="addContact(contact)"/>
        </div>
    </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";
    import VButton from "../components/VButton";

    export default {
        name: "EditContact",
        components: { Application, VButton },
        data(handleChange) {
            return {
                title: "Add new contact",
                contact: {
                    name: '',
                    surname: '',
                    email: '',
                    id: '',
                    category: handleChange,
                    phone: '',
                    bornDate: '',
                }
            }
        },
        computed: {
            ...mapGetters([
                'getCategories',
            ]),
            categories() {
                return this.getCategories
            },
        },
        methods: {
            addContact (contact) {
                this.$store.dispatch('addNewContact', contact);
            },
            handleChange(e) {
                if(e.target.options.selectedIndex > -1) {
                    // console.log(e.target.options[e.target.options.selectedIndex].innerText);
                    this.contact.category = e.target.options[e.target.options.selectedIndex].innerText
                }
            }
        }
    }
</script>

<style scoped>

</style>