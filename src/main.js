import Vue from 'vue'

import App from './App.vue'

import axios from 'axios'

import { Input, Button } from 'element-ui'

Vue.use(Input)
Vue.use(Button)

Vue.config.productionTip = false

import router from './router'

Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
