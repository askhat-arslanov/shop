import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import { State } from './types'
import { ProductsGetters } from '@/constants/store/products'
import { Product } from '@/api/products/types'

export const getters: GetterTree<State, RootState> = {
  [ProductsGetters.PRODUCT_LIST](state): Product[] {
    return state.productList
  }
}
