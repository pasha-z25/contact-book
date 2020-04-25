import Vue from 'vue'
//import routes from './routes'
import App from './App.vue'
//import Auth from './views/Auth.vue'
import '../src/assets/css/_reset.css'

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');


/**
const NotFound = { template: '<p>Страница не найдена</p>' }
const Home = { template: '<p>главная</p>' }
const About = { template: '<p>о нас</p>' }

const routes = {
  '/': Home,
  '/about': About
};

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});
 */