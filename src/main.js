import Vue from "vue";
import Vuex from "vuex";
import { Datetime } from "vue-datetime";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Datetime);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
