// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import Vuex from 'vuex'

import './assets/css/caseinfo.css'
import './assets/js/bootstrap.min.js'
import './assets/js/init.js'
import './assets/js/startup.js'
import './assets/js/core/data.js'
import store from '@/store/index.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
