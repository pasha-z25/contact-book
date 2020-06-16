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

router.beforeEach((to, from, next) => {

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

new Vue({
  router, i18n,
  render: h =>h(App)
}).$mount('#app');