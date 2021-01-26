import { MutationTree } from 'vuex'

import { State } from './types'
import { ProductsMutations } from '@/constants/store/products'

export const mutations: MutationTree<State> = {
  [ProductsMutations.SET_PRODUCT_LIST](state, data): void {
    state.productList = data
  }
}
