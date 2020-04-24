<template>
    <div class="wrapper">
        <img src="../assets/logo.png" alt="logo" width="128px" height="128px" class="logo">
        <h1 class="title"><span class="big">Авторизируйтесь</span> <br>для управления контактами.</h1>
        <form action="" class="form">
            <input type="text" class="input" placeholder="E-mail">
            <input type="password" class="input" placeholder="Password">
            <button type="submit" class="submit">Войти</button>
        </form>
        <p class="text">Нет аккаунта? Без паники! <a href="#" class="link">Регистрируемся.</a></p>
    </div>
</template>

<script>
    export default {
        name: "auth"
    }
</script>

<style scoped>
    .wrapper, .form {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .form {
        width: 250px;
        margin-bottom: var(--indent-default);
    }
    .wrapper {
        flex: 1;
        background: -webkit-gradient(linear, left top, left bottom, from(var(--color-dark)), to(var(--color-gray)));
        background: -o-linear-gradient(top, var(--color-dark) 0%, var(--color-gray) 100%);
        background: linear-gradient(180deg, var(--color-dark) 0%, var(--color-gray) 100%);
    }
    .logo {
        margin-bottom: calc(var(--indent-default) * 3);
    }
    .title {
        font-size: 22px;
        text-align: center;
        margin-bottom: calc(var(--indent-default) * 2);
    }
    .title .big {
        font-size: 26px;
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
    }
    .submit {
        display: inline-block;
        text-align: center;
        padding: 10px 15px;
        border-radius: 5px;
        font-weight: 700;
        background: var(--color-orange);
        color: var(--color-dark);
    }
    .wrapper, .input, .text {
        color: var(--color-lighgray);
    }
    .link {
        color: var(--color-orange);
    }
</style>