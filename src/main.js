import Vue from 'vue'

import LogIn from "./views/LogIn";
import Register from "./views/Register";
import Error from "./views/Error";
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