<template>
  <v-row class="py-3 px-0">
    <v-col cols="12" class="d-flex align-center pa-0 flex-column flex-sm-row flex-md-row">
      <v-col cols="12" xs="12" sm="9" md="8" class="expansion-panel__text--wrapper">
        <span class="font-weight-normal text-body-1 text-md-h6 mr-5"
          >{{ formatDate(flight.departureDate, true) }}&nbsp;-&nbsp;{{
            formatDate(flight.returnDate, true)
          }}</span
        >
        <div class="d-flex justify-space-between mt-2 mt-md-0 align-center">
          <span>
            <span class="text-left text-body-2 text-md-body-1 font-weight-normal"
              >{{ flight.origin }}&nbsp;-&nbsp;{{ flight.destination }}</span
            >
            <span v-if="!expanded" class="text-right text-body-2 text-md-body-1 font-weight-normal">
              &nbsp;|&nbsp;
              {{
                // @ts-ignore
                cabinCode[flight.cabinCode]
              }}
              class
            </span>
          </span>
        </div>
      </v-col>
      <v-col
        class="justify-sm-end d-flex expansion-panel__text--wrapper pt-0 pb-6 pb-sm-0"
        cols="12"
        xs="12"
        sm="3"
        md="3"
      >
        <div class="d-flex flex-row-reverse flex-sm-row align-center">
          <v-fade-transition leave-absolute>
            <v-btn :to="route" variant="outlined" color="primary" class="mr-5" v-if="expanded">{{
              lang.search.letsFly
            }}</v-btn>
          </v-fade-transition>
          <div>
            <span class="font-weight-bold text-body-1">{{ currency() }}</span>
            <span class="font-weight-bold ml-1 mr-5 mr-sm-0 text-body-1">{{
              flight.price.amount
            }}</span>
          </div>
        </div>
      </v-col>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { formatDate } from '@/utils/common'
import { cabinCode } from '@/enums/cabinCode'
import { lang } from '@/i18n/en'

const props = defineProps({
  expanded: Boolean,
  flight: { type: Object, required: true },
  currency: { type: Function, required: true }
})

const { flight } = toRefs(props)
const route = `journey/${flight.value.uuid}`
</script>

<style lang="scss" scoped>
.expansion-panel {
  &__text {
    &--wrapper {
      max-height: 90px !important;
    }
  }
}
</style>
