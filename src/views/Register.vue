<template>
  <authorization>
    <h1 class="title">Введите данные для регистрации.</h1>
    <form action="" class="form d-flex flex-wrap justify-content-center">
      <input type="text" class="input" placeholder="E-mail" required>
      <input type="text" class="input" placeholder="Name" required>
      <input type="password" class="input" placeholder="Password" required>
      <input type="password" class="input" placeholder="Repeat Password" required>
      <button type="submit" class="submit">Регистрация</button>
    </form>
    <p class="text">Есть аккаунт? <v-link href="/" class="link">Авторизируйтесь.</v-link></p>
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
    margin-left: auto;
    margin-right: auto;
    margin-bottom: var(--indent-default);
  }
  .title {
    font-size: 22px;
    text-align: center;
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .text {
    margin-bottom: calc(var(--indent-default) * 2);
  }
  .input, .submit {
    /*width: 100%;*/
    font-size: 16px;
  }
  .input {
    width: 48%;
    border: none;
    border-bottom: 1px solid var(--color-lighgray);
    background-color: transparent;
    margin-bottom: var(--indent-default);
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
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
  .input, .text {
    color: var(--color-lighgray);
  }
  .link {
    color: var(--color-orange);
  }
  .text {
    text-align: center;
  }
</style>
