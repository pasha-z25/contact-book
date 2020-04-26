<template>
    <div class="auth-form-wrapper">
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
        name: "auth",
    }
</script>

<style scoped>
    .form {
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
        max-width: 250px;
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