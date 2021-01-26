<template>
  <div class="category">
    <div class="category__name">
      {{ name }}
    </div>

    <ItemList :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ItemList from '@/components/items/ItemList.vue'

export default Vue.extend({
  name: 'Category',
  components: {
    ItemList
  },

  props: {
    name: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.category {
  max-width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: var(--color-main-background);
  box-shadow: var(--common-shadow);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &__name {
    border-bottom: 2px solid #eef4f7;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 20px;
  }
}
</style>
