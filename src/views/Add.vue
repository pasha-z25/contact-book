<template>
    <div id="app">
        <v-burger />
        <v-aside :class="{ open: isOpen }" />
        <main class="main">
            <v-header>
                {{ this.title }}
            </v-header>
            <section class="content">
                <div class="input-block">
                    <v-input id="first-name" class="light" vclass="line" label="Имя" name="Имя" placeholder="Name"/>
                </div>
                <div class="input-block">
                    <v-input id="last-name" class="light" vclass="line" label="Фамилия" name="Фамилия" placeholder="Surname"/>
                </div>
                <div class="input-block">
                    <v-input id="phone" type="tel" class="light" vclass="line" label="Телефон" name="Телефон" placeholder="Phone"/>
                </div>
                <div class="input-block">
                    <v-input id="email" type="email" class="light" vclass="line" label="E-mail" name="E-mail" placeholder="E-mail"/>
                </div>
                <div class="input-block">
                    <v-input id="birthday" type="date" class="light" vclass="line" label="Дата рождения" name="Дата рождения" placeholder="Birthday"/>
                </div>
                <div class="text-center">
                    <v-button name="Добавить"/>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import VHeader from "../components/VHeader";
    import VAside from "../layouts/VAside";
    import VInput from "../components/VInput";
    import VBurger from "../components/VBurger";
    import VButton from "../components/VButton";

    export default {
        name: "Add",
        components: {VButton, VBurger, VInput, VHeader, VAside },
        data() {
            return {
                isOpen: false,
                title: "Add contact"
            }
        }
    }
</script>

<style scoped>
    #app {
        display: flex;
        min-height: 100vh;
        position: relative;
    }
</style>