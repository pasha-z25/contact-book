<template>
    <application :title="this.title">
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Категория</span>
                    <select id="category" name="Категория" v-model="category.id" class="select">
                        <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.name }}</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="text-center">
            <v-button name="Удалить" @click.native="removeCategory(category)"/>
        </div>
        <br>
        <hr>
        <br>
        <div class="input-block">
            <div class="input-group light">
                <label class="label">
                    <span class="text">Новая категория</span>
                    <input id="name" type="text" name="Имя" class="input line" v-model="category.name" />
                </label>
            </div>
        </div>
        <div class="text-center">
            <v-button name="Добавить категорию" @click.native="addCategory(category)"/>
        </div>
    </application>
</template>

<script>
    import { mapGetters } from "vuex"
    import Application from "../layouts/Application";
    import VButton from "../components/VButton";

    export default {
        name: "EditCategory",
        components: { Application, VButton },
        data() {
            return {
                title: "Edit category",
                category: {
                    id: '',
                    name: '',
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
            removeCategory (contact) {
                console.log('Obj cont: ',contact);
                this.$store.dispatch('removeCategory', contact);
            },
            addCategory (category) {
                console.log('Obj cont: ',category);
                this.$store.dispatch('addNewCategory', category);
            }
        }
    }
</script>

<style scoped>

</style>