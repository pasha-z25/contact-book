<template>
  <authorization>
    <h1 class="title text-center"><span class="big">Авторизируйтесь</span> <br>для управления контактами.</h1>
    <form action="" class="form d-flex flex-column align-items-center justify-content-center position-center">
      <input type="email" class="input" placeholder="E-mail">
      <input type="password" class="input" placeholder="Password">
      <button type="submit" class="submit">Войти</button>
    </form>
    <p class="text text-center">Нет аккаунта? Без паники! <v-link href="/register" class="link">Регистрируемся.</v-link></p>
  </authorization>
</template>

<script>
  import Authorization from "../layouts/Authorization";
  import VLink from "../components/VLink";

  export default {
    name: "LogIn",
    components: {
      VLink,
      Authorization
    },
  }
</script>

<style scoped>
  .form {
    max-width: 250px;
    margin-bottom: var(--indent-default);
  }
  .title {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .text {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .input, .submit {
    width: 100%;
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
  .submit {
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
