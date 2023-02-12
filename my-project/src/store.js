import { createStore } from  'vuex'

const mutations = {
  search(state) {
    state.searchId = ''
  }
},
state = {
  searchId: ''
}

export default createStore({
   mutations,
   state,
   strict: true
})
