import Vue from 'vue'
import routes from './routes'
//import App from './App.vue'
import '../src/assets/css/_reset.css'

Vue.config.productionTip = false;

/**
new Vue({
  render: h => h(App),
}).$mount('#app');
*/


const app = new Vue({
  el: '#app',
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
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
