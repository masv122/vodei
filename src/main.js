import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "../public/css/all.css";
import  VueWorker from "vue-worker";
Vue.use(VueWorker);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://localhost:3000/vodeiBDD";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
