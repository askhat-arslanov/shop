<template>
  <div class="cart-item">
    <span class="cart-item__name">{{ item.name }}</span>

    <span class="cart-item__price">{{ itemPrice }} руб./шт.</span>

    <span class="cart-item__count">
      <button class="change-count-btn decrease" @click="onDecrease">-</button>

      <input class="cart-item__count-value" :value="item.inCart" type="text" @keyup="onChange" />

      <button class="change-count-btn increase" @click="onIncrease">+</button>
    </span>

    <button class="cart-item__remove" @click="remove(item.id)">✕</button>

    <span v-if="item.count < 10" class="cart-item__warning">Количество товара ограничено</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { StoreNames } from '@/constants/store/storeNames'
import { CartActions } from '@/constants/store/cart'
import { CurrencyGetters } from '@/constants/store/currency'

export default Vue.extend({
  name: 'CartItem',

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    ...mapActions({
      setInCart: `${StoreNames.CART}/${CartActions.SET_IN_CART}`,
      remove: `${StoreNames.CART}/${CartActions.REMOVE_FROM_CART}`
    }),
    onIncrease(): void {
      this.setInCart({
        id: this.item.id,
        inCart: this.item.inCart + 1
      })
    },
    onDecrease(): void {
      this.setInCart({
        id: this.item.id,
        inCart: this.item.inCart - 1
      })
    },
    onChange(e: Event): void {
      const target = e.target as HTMLInputElement
      this.setInCart({
        id: this.item.id,
        inCart: +target.value
      })
    }
  },

  computed: {
    ...mapGetters({
      dollarRate: `${StoreNames.CURRENCY}/${CurrencyGetters.DOLLAR_RATE}`
    }),
    itemPrice(): string {
      return (this.dollarRate * this.item.price).toFixed(2)
    }
  }
})
</script>

<style lang="scss">
.cart-item {
  display: flex;
  margin: 0;
  padding: 40px 20px 40px 20px;
  position: relative;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color:rgb(250, 250, 250);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgb(240, 240, 240);
  }

  &__name {
    font-size: 13px;
    margin-right: 10px;
  }

  &__price {
    margin-left: auto;
    font-weight: bold;
    font-size: 13px;
    white-space: pre;
  }

  &__count-value {
    margin: 0;
    width: 30px;
    height: 20px;
    text-align: center;
    border: 1px solid rgb(165, 165, 165);
    border-left: none;
    border-right: none;
  }

  &__count {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .change-count-btn {
    background: none;
    outline: none;
    width: 20px;
    height: 20px;
    border: 1px solid rgb(165, 165, 165);
    background-color: #fff;
    cursor: pointer;

    &.increase {
      border-radius: 0 5px 5px 0;
    }

    &.decrease {
      border-radius: 5px 0 0 5px;
    }
  }

  &__remove {
    position: absolute;
    top: 10px;
    right: 15px;
    width: 15px;
    height: 15px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: rgb(255, 92, 168);
    font-size: 18px;
    line-height: 18px;

    &::after {
      position: absolute;
      top: 1px;
      right: 0;
      display: block;
      content: '';
      background-color: rgb(255, 192, 222);
      width: 15px;
      height: 15px;
      opacity: 0;
      border-radius: 5px;
      transition: all 0.2s;
    }

    &:hover {
      color: rgb(255, 49, 145);

      &::after {
        opacity: 0.5;
      }
    }
  }

  &__warning {
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 13px;
    font-weight: bold;
    color: rgb(255, 49, 145);
  }
}
</style>
