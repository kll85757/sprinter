import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import {
  state
} from '@/store/state.js'
import {
  getters
} from '@/store/getters.js'
import {
  mutations
} from '@/store/mutations.js'
import {
  actions
} from '@/store/actions.js'

export default new Vuex.Store({
  // keep state value
  plugins: [createPersistedState({
    paths: [
      'darkmode',
      'langs',
      'currentLang',
      'colors',
    ],
  })],

  state,
  getters,
  mutations,
  actions,
})
