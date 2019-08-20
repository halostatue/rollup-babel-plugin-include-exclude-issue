import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import defaultState from './default_state'

const state = { ...defaultState }

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
