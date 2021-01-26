import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CartGetters } from '@/constants/store/cart'
import { Item } from './types'

export const getters: GetterTree<State, RootState> = {
  [CartGetters.TOTAL_PRICE](state): number {
    return state.itemList.reduce((acc, curr) => curr.inCart * curr.price + acc, 0)
  },

  [CartGetters.ITEM_LIST](state): Item[] {
    return state.itemList
  }
}
