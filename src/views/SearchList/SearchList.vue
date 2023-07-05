<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>
  <v-row class="pa-5">
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-sheet class="pa-2 d-flex w-100 justify-space-between">
            <div class="pa-2 d-flex w-100 justify-space-between">
              <span class="text-h6 font-weight-thin" v-if="filters.origin">{{
                lang.search.subHeading(filters.offer.title, filters.origin, filters.destination)
              }}</span>
              <span class="text-h6 font-weight-thin" v-else>{{ lang.search.heading }}</span>
              <v-btn class="ml-2" variant="plain" v-if="filters.origin" @click="routeToDashboard">{{
                lang.common.back
              }}</v-btn>
            </div>
            <div>
              <!-- <span class="pb-1">Sort by prices: </span><v-btn size="small" variant="plain">Low to high</v-btn>
              <span class="pb-1"> | </span><v-btn size="small" variant="plain">High to low</v-btn> -->
            </div>
          </v-sheet>

          <v-sheet>
            <v-expansion-panels v-if="!!filters.origin" multiple>
              <v-expansion-panel
                v-for="flight in massageData(flightsSearchData, filters)"
                :key="flight.uuid"
              >
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <search-list-panel
                      :currency="getCurrency"
                      :flight="flight"
                      :expanded="expanded"
                    />
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <search-list-panel-content :flight="flight"></search-list-panel-content>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels v-else multiple>
              <v-expansion-panel
                v-for="flight in getInitialData(flightsSearchData)"
                :key="flight.uuid"
              >
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <search-list-panel
                      :currency="getCurrency"
                      :flight="flight"
                      :expanded="expanded"
                    />
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <search-list-panel-content :flight="flight"></search-list-panel-content>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import SearchListPanel from './SearchListPanel.vue'
import SearchListPanelContent from './SearchListPanelContent.vue'
import { massageData, getInitialData } from '@/utils/searchList'
import { isEmpty, resetData } from '@/utils/common'
import { serviceTypeKeys } from '@/enums/serviceType'
import { lang } from '@/i18n/en'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()

const { stations, countries, flightsSearchData, filters, loading } = storeToRefs(appStore)

// get origin station's currency, if not avaiable select Euro by default
function getCurrency() {
  const countryCode = stations.value.find(
    (station) => filters.value.origin === `${station.name} - ${station.tlc}`
  )?.countryCode
  return (
    countries.value.find((country) => country.countryCode === countryCode)?.currencyCode || `EUR`
  )
}

// reset the store data and redirect to dashboard
function routeToDashboard() {
  router.push({ path: '/', replace: true }).then(() => {
    resetData(appStore)
  })
}

onMounted(async () => {
  if (isEmpty(flightsSearchData.value))
    // get the best offer data without filters when this component loads
    await appStore.fetchFlightResults({
      offer: { value: serviceTypeKeys.amadeusBestOffer },
      origin: '',
      destination: ''
    })
})
</script>
