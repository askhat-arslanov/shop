<template>
  <div class="item">
    <div class="item__name">{{ item.name }} ({{ item.count }})</div>

    <div :class="[`item__price ${highlightColor}`]">
      {{ itemPrice }}
    </div>

    <img class="item__cart" src="@/assets/icons/cart.svg" alt="Cart" @click="onAddToCart(item)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { CartActions } from '@/constants/store/cart'
import { CurrencyGetters } from '@/constants/store/currency'

export default Vue.extend({
  name: 'Item',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      highlightColor: ''
    }
  },

  methods: {
    ...mapActions({
      onAddToCart: `${StoreNames.CART}/${CartActions.ADD_TO_CART}`
    })
  },

  computed: {
    ...mapGetters({
      dollarRate: `${StoreNames.CURRENCY}/${CurrencyGetters.DOLLAR_RATE}`
    }),
    itemPrice(): string {
      return (this.dollarRate * this.item.price).toFixed(2)
    }
  },

  watch: {
    dollarRate(newValue, oldValue) {
      if (oldValue) {
        this.highlightColor = newValue < oldValue ? 'green' : 'red'
      }
    }
  }
})
</script>

<style lang="scss">
.item {
  display: flex;
  margin-top: 15px;

  &__name {
    flex-grow: 10;
    font-size: 13px;
  }

  &__price {
    position: relative;
    margin-left: 10px;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      border-radius: 5px;
      display: inline-block;
      width: 100%;
      height: 18px;
      opacity: 0.3;
    }

    &.green::after {
      background-color: rgb(148, 235, 49);
    }

    &.red::after {
      background-color: rgb(235, 49, 96);
    }
  }

  &__cart {
    margin-left: 5px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all 0.1s;

    &:hover {
      transform: translateY(-1px);
      filter: brightness(0.7) sepia(1) hue-rotate(190deg) saturate(4);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
