<template>
  <div>
    <Item v-for="(item, idx) in items" :key="idx" :item="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Item from '@/components/items/Item.vue'

export default Vue.extend({
  name: 'ItemList',
  components: {
    Item
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style></style>
