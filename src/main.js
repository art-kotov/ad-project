import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'
import {mapActions} from "vuex";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  methods: {
    ...mapActions("user", ["autoLoginUser"])
  },
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyDdHK0wYFtp8FWjZtJi4a050sRmVHkxpLo",
      authDomain: "itc-ads-c0929.firebaseapp.com",
      databaseURL: "https://itc-ads-c0929.firebaseio.com",
      projectId: "itc-ads-c0929",
      storageBucket: "itc-ads-c0929.appspot.com",
      messagingSenderId: "149751060371",
      appId: "1:149751060371:web:be84640da63dc06bc7fa66"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.autoLoginUser(user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
