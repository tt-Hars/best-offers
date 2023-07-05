<template>
  <v-autocomplete
    clearable
    :id="id"
    :label="inputLabel"
    :items="displayItems"
    item-title="title"
    item-value="title"
    variant="outlined"
    :model-value="station"
    :placeholder="inputLabel"
    required
    @update:model-value="$emit('update:station', $event)"
  >
    <template #item="{ props, item }">
      <v-list-item
        v-bind="props"
        :title="item.raw.title"
        :subtitle="item.raw.subtitle"
      ></v-list-item>
    </template>
  </v-autocomplete>
</template>

<style lang="scss">
.v {
  &-autocomplete {
    &__selection {
      &-text {
        display: inline-block;
        max-width: inherit;
        text-overflow: ellipsis;
        overflow: hidden;
        overflow-wrap: normal;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { TStationsDisplay } from '@/models/countries'

defineProps({
  inputLabel: String,
  id: String,
  displayItems: Array<TStationsDisplay>,
  station: String
})

//sends the date just to receive it back as prop and update model in parent component
defineEmits(['update:station'])
</script>
