import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { CartActions, CartMutations } from '@/constants/store/cart'

export const actions: ActionTree<State, RootState> = {
  [CartActions.ADD_TO_CART]({ commit }, data): void {
    commit(CartMutations.ADD_TO_CART, data)
  },

  [CartActions.REMOVE_FROM_CART]({ commit }, data): void {
    commit(CartMutations.REMOVE_FROM_CART, data)
  },

  [CartActions.SET_IN_CART]({ commit }, data): void {
    commit(CartMutations.SET_IN_CART, data)
  }
}
