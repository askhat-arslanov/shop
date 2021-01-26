<template>
  <div class="category-list">
    <Category
      v-for="category in productList"
      :key="category.name"
      :name="category.name"
      :items="category.items"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import Category from '@/components/items/Category.vue'
import { ProductsActions, ProductsGetters } from '@/constants/store/products'
import { StoreNames } from '@/constants/store/storeNames'

export default Vue.extend({
  name: 'CategoryList',
  components: {
    Category
  },

  methods: {
    ...mapActions({
      getProductList: `${StoreNames.PRODUCTS}/${ProductsActions.GET_PRODUCT_LIST}`
    })
  },

  computed: {
    ...mapGetters({
      productList: `${StoreNames.PRODUCTS}/${ProductsGetters.PRODUCT_LIST}`
    })
  },

  mounted() {
    this.getProductList()
  }
})
</script>

<style lang="scss">
.category-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}
</style>
