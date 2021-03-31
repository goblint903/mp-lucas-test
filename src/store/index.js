import Vue from "vue";
import Vuex from "vuex";
import createPersist from "vuex-localstorage";

import vehicle from "./vehicle";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    vehicle,
  },
  strict: debug,
  plugins: [
    createPersist({
      namespace: "epi-vehicle-store",
      initialState: {},
      expires: 7 * 24 * 60 * 60 * 1e3,
    }),
  ],
});

export default store;
