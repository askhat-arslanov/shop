import Vue from 'vue'
import Vuex from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { cart } from './cart'
import { currency } from './currency'
import { products } from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [StoreNames.CART]: cart,
    [StoreNames.CURRENCY]: currency,
    [StoreNames.PRODUCTS]: products
  }
})
