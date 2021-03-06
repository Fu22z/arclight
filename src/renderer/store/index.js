import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import { sharedFullState } from './sharedFullState'
import { sharedMutation } from './sharedMutation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [sharedFullState, sharedMutation]
})
