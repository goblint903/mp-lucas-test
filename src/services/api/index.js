import axios from "axios";

export { axios };
export * from "./vehicle";

export default {
  install(Vue) {
    Vue.prototype.$axios = axios;
  },
};
