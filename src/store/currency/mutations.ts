import { MutationTree } from 'vuex'

import { State } from './types'
import { CurrencyMutations } from '@/constants/store/currency'

export const mutations: MutationTree<State> = {
  [CurrencyMutations.SET_DOLLAR_RATE](state, data): void {
    state.dollarRate = data
  }
}
