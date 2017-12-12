// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import store from './store/index'

import '../node_modules/font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: `<app/>`,
  components: { app }
})
