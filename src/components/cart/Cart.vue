<template>
  <div class="cart">
    <div class="cart__title">
      Корзина
    </div>

    <div v-if="itemList && itemList.length">
      <CartItem v-for="item in itemList" :key="item.id" :item="item" />
      <div class="cart__total">Всего: {{ total }} руб.</div>
    </div>

    <div v-else>
      Ваши товары будут отображены здесь
    </div>
  </div>
</template>

<script lang="ts">  
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import CartItem from '@/components/cart/CartItem.vue'
import { CartActions, CartGetters } from '@/constants/store/cart'
import { CurrencyGetters } from '@/constants/store/currency'
import { StoreNames } from '@/constants/store/storeNames'

export default Vue.extend({
  name: 'Cart',
  components: {
    CartItem
  },

  computed: {
    ...mapGetters({
      itemList: `${StoreNames.CART}/${CartGetters.ITEM_LIST}`,
      totalPrice: `${StoreNames.CART}/${CartGetters.TOTAL_PRICE}`,
      dollarRate: `${StoreNames.CURRENCY}/${CurrencyGetters.DOLLAR_RATE}`
    }),
    total() {
      return (this.totalPrice * this.dollarRate).toFixed(2)
    }
  },

  methods: {
    ...mapActions({
      removeFromCart: `${StoreNames.CART}/${CartActions.REMOVE_FROM_CART}`
    })
  }
})
</script>

<style lang="scss">
.cart {
  max-width: 100%;
  padding: 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  background-color: var(--color-main-background);
  box-shadow: var(--common-shadow);
  transition: box-shadow 0.2s;

  &__title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__total {
    padding: 24px;
    font-weight: bold;
    text-align: right;
  }
}
</style>
