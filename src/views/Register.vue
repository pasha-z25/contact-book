<template>
  <authorization>
    <h1 class="title text-center"><span class="big">Заполните</span> <br>данные для регистрации.</h1>
    <form action="" class="form d-flex flex-wrap justify-content-center position-center">
      <input type="email" class="input" placeholder="E-mail" required>
      <input type="text" class="input" placeholder="Name" required>
      <input type="password" class="input" placeholder="Password" required>
      <input type="password" class="input" placeholder="Repeat Password" required>
      <button type="submit" class="submit">Регистрация</button>
    </form>
    <p class="text text-center">Есть аккаунт? <v-link href="/" class="link">Авторизируйтесь.</v-link></p>
  </authorization>
</template>

<script>
  import Authorization from "../layouts/Authorization";
  import VLink from "../components/VLink";

  export default {
    name: "Register",
    components: {
      VLink,
      Authorization
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
