import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

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
