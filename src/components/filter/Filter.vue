<template>
  <v-form @submit.prevent="onClickHandler" v-model="isValid" ref="formElementRef">
    <v-row class="pa-5">
      <v-col class="pb-0" cols="12">
        <v-card>
          <v-row class="pa-5">
            <v-col class="pb-0" cols="12" xs="12" sm="6">
              <auto-complete
                :rules="fromToRule(form.destination)"
                v-model:station="form.origin"
                id="origin"
                :items="transformCountryDataDisplayString(data)"
                :label="lang.common.whereFrom"
              ></auto-complete>
            </v-col>
            <v-col class="pb-0" cols="12" xs="12" sm="6">
              <auto-complete
                :rules="fromToRule(form.origin)"
                v-model:station="form.destination"
                id="destination"
                :items="transformCountryDataDisplayString(data)"
                :label="lang.common.whereTo"
              ></auto-complete>
            </v-col>
          </v-row>
          <v-row class="pa-5 mt-0">
            <date-range
              :today="today"
              v-model:departureDate="form.departureDate"
              v-model:returnDate="form.returnDate"
            ></date-range>
            <v-col class="pb-md-0" cols="12" sm="12" md="4">
              <v-select
                required
                :rules="requiredRule"
                return-object
                id="offers"
                v-model="form.offer"
                variant="outlined"
                :label="lang.common.offer"
                :items="offerItems"
                item-title="title"
                item-value="value"
                persistent-hint
                :hint="`${form.offer.hint}`"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-md-0 pb-5" cols="12">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  id="submit"
                  type="submit"
                  elevation="4"
                  size="x-large"
                  variant="outlined"
                  :color="isValid ? 'primary' : 'warning'"
                >
                  <v-icon></v-icon>
                  {{ lang.common.search }}
                  <v-icon></v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { toRefs, ref, reactive, nextTick, watch } from 'vue'
import AutoComplete from '@/components/autoComplete/AutoComplete.vue'
import DateRange from '@/components/dateRange/DateRange.vue'
import { transformCountryDataDisplayString } from '@/utils/filterUtils'
import { requiredRule, fromToRule } from '@/utils/validationRules'
import { serviceTypeKeys } from '@/enums/serviceType'
import { lang } from '@/i18n/en'
import constants from '@/constants/homeView'
import { useAppStore } from '@/store/app'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const BEST_OFFER = serviceTypeKeys.amadeusBestOffer
const props = defineProps({
  data: Object
})

const offerItems = ref(constants.offers)

const { data } = toRefs(props)
const isValid = ref(false)
const formElementRef = ref()
const appStore = useAppStore()

const { filters, filterFormElementRef } = storeToRefs(appStore)

const form = reactive({
  origin: undefined,
  destination: undefined,
  departureDate: undefined,
  returnDate: undefined,
  offer: offerItems.value.filter((offer: any) => offer.value === BEST_OFFER)[0]
})
const today = new Date()

//event emitter to send data to Home component
const emits = defineEmits(['clickHandler'])

function onClickHandler() {
  if (isValid.value) emits('clickHandler', form)
}

watch(form, () => {
  const formErrors = formElementRef.value.errors
  if (formErrors.length > 0) {
    const formItems = formElementRef.value.items
    const errorItems = formItems.filter((formItem: any) => formItem.isValid === false)
    errorItems.forEach((errorItem: any) => {
      nextTick(() => {
        errorItem.validate()
      })
    })
  }
})

onMounted(() => {
  if (!!filters.value.origin) Object.assign(form, filters.value)
})
</script>
