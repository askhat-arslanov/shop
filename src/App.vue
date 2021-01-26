<template>
  <div id="app">
    <CategoryList />
    <Cart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { CurrencyActions } from '@/constants/store/currency'
import Cart from '@/components/cart/Cart.vue'
import CategoryList from '@/components/items/CategoryList.vue'

type State = {
  interval: number | undefined;
}

export default Vue.extend({
  name: 'App',
  components: {
    Cart,
    CategoryList
  },

  data(): State {
    return {
      interval: undefined
    }
  },

  methods: {
    ...mapActions({
      getDollarRate: `${StoreNames.CURRENCY}/${CurrencyActions.GET_DOLLAR_RATE}`
    })
  },

  mounted() {
    this.getDollarRate()

    this.interval = setInterval(() => {
      this.getDollarRate()
    }, 15 * 1000)
  },

  destroyed() {
    clearInterval(this.interval)
    this.interval = undefined
  }
})
</script>

<style lang="scss">
#app {
  display: block;
  margin: 0 auto;
  max-width: 600px;
  font-family: sans-serif;
  color: #2c3e50;
}
</style>
