<template>
  <authorization>
    <h1 class="title text-center"><span class="big">{{ $t('msgLogIn') }}</span> <br>{{ $t('msgToManage') }}.</h1>
    <form @submit.prevent="handleClick(user)" class="form d-flex flex-column align-items-center justify-content-center position-center">
        <div class="input-group">
            <label class="label">
                <input id="email" type="email" class="input" placeholder="E-mail" v-model="user.email" />
            </label>
        </div>
        <div class="input-group">
            <label class="label">
                <input id="password" type="password" class="input" placeholder="Password" v-model="user.password" />
            </label>
        </div>
        <v-button type="submit" class="submit" @click.prevent="handleClick(user)">{{ $t('btnLogIn') }}</v-button>
    </form>
    <p class="text text-center">{{ $t('msgNoAccountNoPanic') }} <router-link to="/register" class="link">{{ $t('msgRegister') }}.</router-link></p>
  </authorization>
</template>

<script>
  import Authorization from "../layouts/Authorization";
  import VButton from "../components/VButton";
  import { mapGetters } from "vuex"

  export default {
    name: "LogIn",
    components: {
      VButton,
      Authorization
    },
    data() {
      return {
        user: {
            email: 'test@mail.md',
            password: '6811217'
        }
      }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ]),
    },
    methods: {
      handleClick(user) {
          this.$store.dispatch('fetchUser', user);
      }
    },
  }
</script>

<style scoped>
  .title {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .text {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .submit {
    border: none;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 700;
    transition: .2s;
    background-color: var(--color-orange);
    color: var(--color-dark);
  }
  .submit:hover {
    box-shadow: 0 0 15px 0 var(--color-orange);
  }
  .link {
    color: var(--color-orange);
  }
</style>
