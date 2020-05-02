// initial state
const state = () => ({
  ads: [
    {
      title: 'First ad',
      description: 'Hello i am description',
      promo: false,
      imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      id: '123'
    },
    {
      title: 'Second ad',
      description: 'Hello i am description',
      promo: true,
      imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      id: '1234'
    },
    {
      title: 'Third ad',
      description: 'Hello i am description',
      promo: true,
      imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      id: '12345'
    }
  ]
})
// getters
const getters = {
  ads:(state) => state.ads,
  promoAds:(state) => state.ads.filter(ad => ad.promo),
  myAds:(state) => state.ads,
  adById: (state) => id => state.ads.find(ad => ad.id === id)

}

// actions
const actions = {
  createAd:({commit}, payload) => {
    console.log('action payload', payload)
    payload.id = (Math.random()*10).toString()
    commit("createAd", payload)
  }
}

// mutations
const mutations = {
  createAd: (state, payload) => {
    state.ads.push(payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
