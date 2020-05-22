import Vue from 'vue'
// import VueRouter from "vue-router";
import Error from "./views/Error";
// import routes from "./routes";

import LogIn from "./views/LogIn";
import Register from "./views/Register";
import App from "./views/App";
const routes = {
  '/': LogIn,
  '/register': Register,
  '/app': App,
};

import './assets/css/_reset.css'
import './assets/css/main.css'
import './assets/css/media.css'

Vue.config.productionTip = false;
// const router = new VueRouter({ routes });

new Vue({
  data: {
    currentRoute: window.location.pathname
    },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Error
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app');