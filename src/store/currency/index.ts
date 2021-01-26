import { Module } from 'vuex'

import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

import { State } from './types'
import { RootState } from '@/store/types'

const state: State = {
  dollarRate: 0
}

export const currency: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}