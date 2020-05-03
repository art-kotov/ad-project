import * as firebase from "firebase";
// initial state
const state = () => ({
  user: null
})
// getters
const getters = {
  user: (state) => state.user,
  isUserLoggedIn: (state) => !!state.user
}

// actions
const actions = {
  registerUser: async ({commit}, {email, password}) => {
    commit("clearError", null, {root: true});
    commit("setLoading", true, {root: true});
    try {
      const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
      commit('setUser', user.uid);
      commit("setLoading", false, {root: true});
    } catch (e) {
      let errorMessage = e.message;
      commit("setLoading", false, {root: true});
      commit("setError", errorMessage, {root: true});
      throw e
    }
  },
  loginUser: async ({commit}, {email, password}) => {
    commit("clearError", null, {root: true});
    commit("setLoading", true, {root: true});
    try {
      const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
      commit('setUser', user.uid);
      commit("setLoading", false, {root: true});
    } catch (e) {
      let errorMessage = e.message;
      commit("setLoading", false, {root: true});
      commit("setError", errorMessage, {root: true});
      throw e
    }
  },
  autoLoginUser: ({commit}, payload) => {
    commit("setUser", payload.uid)
  }
}

// mutations
const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
