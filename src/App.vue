<template>
  <div id="app">
    <Auth />
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>

import '../src/assets/css/_reset.css'
import Auth from "./views/auth";

export default {
  name: 'App',
  components: {Auth},
  views: {
    Auth
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 100vw;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
