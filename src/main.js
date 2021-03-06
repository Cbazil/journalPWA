// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import SuiVue from 'semantic-ui-vue';
import router from './router';
import VueResource from 'vue-resource';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(SuiVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
