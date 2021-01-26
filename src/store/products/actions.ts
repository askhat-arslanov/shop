import { ActionTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { ProductsActions, ProductsMutations } from '@/constants/store/products'
import { ProductList } from '@/api/products'

export const actions: ActionTree<State, RootState> = {
  async [ProductsActions.GET_PRODUCT_LIST]({ commit }): Promise<void> {
    const data = await new ProductList().makeRequest()
    commit(ProductsMutations.SET_PRODUCT_LIST, data)
  }
}
