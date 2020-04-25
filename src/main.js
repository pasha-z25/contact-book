import Vue from 'vue'
import routes from './routes'
import '../src/assets/css/_reset.css'

Vue.config.productionTip = false;

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
          ? require('./views/' + matchingView + '.vue')
          : require('./views/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});