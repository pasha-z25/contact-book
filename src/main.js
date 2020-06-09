import Vue from "vue";
import App from "./App";
import { router } from "./routes";
import { i18n } from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";

import './assets/css/_reset.css'
import './assets/css/main.css'
import './assets/css/media.css'

Vue.config.productionTip = false;
Vue.use(FlagIcon);

new Vue({
  router, i18n,
  render: h =>h(App)
}).$mount('#app');