<template>
    <application :title="this.title">
      <form @submit.prevent="addContact(contact)"> <!-- -->
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Имя</span>
                    <input id="name" type="text" name="Имя" class="input line" v-model="contact.name" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Фамилия</span>
                    <input id="surname" type="text" name="Фамилия" class="input line" v-model="contact.surname" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Телефон</span>
                    <input id="phone" type="tel" name="Телефон" class="input line" v-model="contact.phone[0].value" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">E-mail</span>
                    <input id="email" type="email" name="E-mail" class="input line" v-model="contact.email[0]" required/>
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Дата рождения</span>
                    <input id="birthday" type="text" name="Дата_рождения" class="input line" v-model="contact.bornDate" required/>
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
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Должность</span>
                    <input id="position" type="text" name="Должность" class="input line" v-model="contact.position" />
                </label>
            </div>
        </div>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Описание</span>
                    <textarea id="information" name="Описание" class="textarea line" v-model="contact.information" maxlength="1024"></textarea>
                </label>
            </div>
        </div>
        <div class="text-center">
            <v-button name="Добавить" type="submit"/>
        </div>
      </form>
    </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";
    import VButton from "../components/VButton";

    export default {
        name: "EditContact",
        components: { Application, VButton },
        data() {
            return {
                title: "Edit current contact",
                extraFields: {
                  position: '',
                  information: ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'getCategories',
                'getCurrentContact',
            ]),
            categories() {
                return this.getCategories
            },
            contact() {
                return {...this.getCurrentContact, ...this.extraFields}
            },
        },
        methods: {
            addContact (contact) {
                this.$store.dispatch('modificationContact', contact);
            },
            handleChange(e) {
                if(e.target.options.selectedIndex > -1) {
                    // console.log(e.target.options[e.target.options.selectedIndex].innerText);
                    // console.log(e.target.options[e.target.options.selectedIndex].value);
                    this.contact.category = e.target.options[e.target.options.selectedIndex].value
                }
            }
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