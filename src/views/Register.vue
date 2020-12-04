<template>
  <authorization>
    <h1 class="title text-center"><span class="big">Заполните</span> <br>данные для регистрации.</h1>
    <form action="" class="form d-flex flex-wrap justify-content-center position-center">
      <input type="email" class="input email" placeholder="E-mail" required v-model="email">
      <input type="text" class="input" placeholder="Name" required v-model="name">
      <input type="text" class="input" placeholder="Surname" required v-model="surname">
      <input type="password" class="input" placeholder="Password" required v-model="password">
      <input type="password" class="input" placeholder="Repeat Password" required v-model="repassword">
      <v-button type="submit" class="submit" @click="handleClick">{{ $t('btnLogIn') }}</v-button>
    </form>
    <p class="text text-center">Есть аккаунт? <router-link to="/" class="link">Авторизируйтесь.</router-link></p>
  </authorization>
</template>

<script>
  import Authorization from "../layouts/Authorization";
  import routes from "../routes";
  import VButton from "../components/VButton";

  export default {
    name: "Register",
    components: {
      VButton,
      Authorization
    },
    data() {
      return {
        email: '',
        name: '',
        surname: '',
        password: '',
        repassword: '',
      }
    },
    methods: {
      handleClick(e) {
        e.preventDefault();
        (this.password === this.repassword)
        ? (
          fetch('/api/users/register', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              'email': this.email,
              'password': this.password,
              'name': this.name,
              'surname': this.surname
            })
          }).then(response => response.json())
                  .catch(console.log)
                  .then(data => {
                    console.log(data.message);
                    setTimeout(() => {
                      this.$root.currentRoute = '/';
                      window.history.pushState(
                              null,
                              routes['/'],
                              '/'
                      )
                    }, 2000)
                  })
          )
        : alert('Пароли не совпадают');
        console.log('auth ', this.email, this.password)

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
  .input, .submit {
    width: 220px;
    font-size: 16px;
  }
  .input {
    border: none;
    border-bottom: 1px solid var(--color-lighgray);
    background-color: transparent;
    margin-bottom: var(--indent-default);
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    color: inherit;
  }
  .input.email {
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
