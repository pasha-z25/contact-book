import Vue from 'vue'

import LogIn from "./components/LogIn";
import Register from "./components/Register";

import '../src/assets/css/_reset.css'

Vue.config.productionTip = false;

const routes = {
  '/': LogIn,
  '/register': Register,
};

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