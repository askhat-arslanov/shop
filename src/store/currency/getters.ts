import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CurrencyGetters } from '@/constants/store/currency'

export const getters: GetterTree<State, RootState> = {
  [CurrencyGetters.DOLLAR_RATE](state): number {
    return state.dollarRate
  }
}
