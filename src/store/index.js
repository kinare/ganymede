import Vue from "vue";
import Vuex from "vuex";
import { RestaurantStore } from "@/modules/restaurants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Restaurants: RestaurantStore
  }
});
