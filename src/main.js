import Vue from 'vue'

import Authorization from  './layouts/Authorization'
import Register from './views/Register'
import App from './views/App'
import Add from './views/Add'
import View from './views/View'
import Edit from './views/Edit'
import Error from './views/Error'

import '../src/assets/css/_reset.css'

Vue.config.productionTip = false;

const routes = {
  '/': Authorization,
  '/register': Register,
  '/app': App,
  '/add': Add,
  '/view': View,
  '/edit': Edit,
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