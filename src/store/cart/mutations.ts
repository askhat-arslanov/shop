import { MutationTree } from 'vuex'

import { State } from './types'
import { CartMutations } from '@/constants/store/cart'

export const mutations: MutationTree<State> = {
  [CartMutations.ADD_TO_CART](state, item): void {
    const itemAdded = state.itemList.find(({ id }) => item.id === id)
    if (itemAdded) {
      if (itemAdded.inCart < item.count) itemAdded.inCart++
    } else {
      state.itemList.push({ ...item, inCart: 1 })
    }
  },

  [CartMutations.REMOVE_FROM_CART](state, id): void {
    state.itemList = state.itemList.filter(item => item.id !== id)
  },

  [CartMutations.SET_IN_CART](state, { id, inCart }): void {
    const item = state.itemList.find(item => item.id === id)
    if (item && inCart <= item.count && inCart >= 0) {
      item.inCart = inCart
    }
  }
}
