import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './config/axios'
Vue.prototype.$axios = axios;

// import ELEMENT from 'element-ui'
// Vue.use(ELEMENT)

import {RESTFULAPI} from './config/Api'
Vue.prototype.RESTFULAPI = RESTFULAPI;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
