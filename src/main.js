import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Integrating axios with vue as $http
Vue.prototype.$axios = axios.create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: "Base Url",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
