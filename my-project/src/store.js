import { createStore } from 'vuex'

const mutations = {
  randomCounter(state) {
    state.counter += 1
  }
}

const state = {
  counter: 0
}

export default createStore({
  mutations,
  state,
  strict: true
})
