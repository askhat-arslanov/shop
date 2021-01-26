import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CurrencyActions, CurrencyMutations } from '@/constants/store/currency'
import { Dollar } from '@/api/currency'

export const actions: ActionTree<State, RootState> = {
  async [CurrencyActions.GET_DOLLAR_RATE]({ commit }): Promise<void> {
    const data = await new Dollar().makeRequest()
    commit(CurrencyMutations.SET_DOLLAR_RATE, data)
  }
}
