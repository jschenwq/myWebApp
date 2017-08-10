// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Weixin from './Weixin';
import router from './router';
require('./lib/lib-flexible.js');
require('./scss/main.scss');
require('./weixin.scss');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Weixin/>',
  components: { Weixin }
})
