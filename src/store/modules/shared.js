// initial state
const state = () => ({
  loading: false,
  error: null
})
// getters
const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  }
}

// actions
const actions = {
  setLoading({commit}, payload) {
    commit("setLoading", payload)
  },
  setError({commit}, payload) {
    commit("setError", payload)
  },
  clearError({commit}) {
    commit("clearError")
  }
}

// mutations
const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
