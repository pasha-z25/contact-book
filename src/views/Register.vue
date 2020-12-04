<template>
  <authorization>
    <h1 class="title text-center"><span class="big">{{ $t('msgFillIn') }}</span> <br>{{ $t('msgRegistrationData') }}.</h1>
    <form @submit.prevent="handleClick(user)" class="form d-flex flex-wrap justify-content-center position-center">
      <div class="input-group email">
        <label class="label">
          <input type="email" class="input email" placeholder="E-mail" required v-model="user.email">
        </label>
      </div>
      <div class="input-group">
        <label class="label">
          <input type="text" class="input" placeholder="Name" required v-model="user.name">
        </label>
      </div>
      <div class="input-group">
        <label class="label">
          <input type="text" class="input" placeholder="Surname" required v-model="user.surname">
        </label>
      </div>
      <div class="input-group">
        <label class="label">
          <input type="password" class="input" placeholder="Password" required v-model="user.password">
        </label>
      </div>
      <div class="input-group">
        <label class="label">
          <input type="password" class="input" placeholder="Repeat Password" required v-model="user.repassword">
        </label>
      </div>
      <button type="submit" class="btn btn-orange submit" @click.prevent="handleClick(user)">{{ $t('btnRegister') }}</button>
    </form>
    <p class="text text-center">{{ $t('msgHaveAccount') }} <router-link to="/" class="link">{{ $t('msgLogIn') }}.</router-link></p>
  </authorization>
</template>

<script>
  import Authorization from "../layouts/Authorization";

  export default {
    name: "Register",
    components: {
      Authorization
    },
    data() {
      return {
        user: {
          email: '',
          name: '',
          surname: '',
          password: '',
          repassword: '',
        }
      }
    },
    methods: {
      handleClick(user) {
        (this.password === this.repassword)
        ? (
            this.$store.dispatch('registerUser', user)
          )
        : alert('Пароли не совпадают');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    max-width: 500px;
    margin-bottom: var(--indent-default);
  }
  .title, .text {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .input-group {
    margin-left: auto;
    margin-right: auto;
  }
  .input-group, .input, .submit {
    width: 220px;
    font-size: 16px;
  }
  .input {
    border: none;
    border-bottom: 1px solid var(--color-lighgray);
    background-color: transparent;
    margin-bottom: var(--indent-default);
    padding: 5px;
    color: inherit;
  }
  .input::placeholder {
    color: var(--color-lighgtext);
  }
  .input.email, .input-group.email {
    width: 100%;
    max-width: 470px;
  }
  .submit {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 10px 25px;
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
