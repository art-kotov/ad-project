import Vue from 'vue'
import Vuex from 'vuex'
import ads from "@/store/modules/ads";
import user from "@/store/modules/user";
import shared from "@/store/modules/shared";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads,
    user,
    shared
  }
})
