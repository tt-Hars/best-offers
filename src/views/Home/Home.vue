<template>
  <v-img :alt="lang.home.imgAlt" width="1400" src="@/assets/flights_3.svg">
    <div class="ma-5 ma-sm-0 mb-0 d-flex justify-center fill-height align-end">
      <h1 class="text-h5 text-sm-h4 text-md-h3 font-weight-normal mb-6 mb-sm-7 mb-md-8">
        {{ lang.common.flights }}
      </h1>
    </div>
  </v-img>
  <v-sheet class="fill-height home__view-container w-100">
    <filter-view @clickHandler="searchResults" :data="{ countries, stations }"></filter-view>
    <!-- Child router view -->
    <router-view></router-view>
  </v-sheet>
</template>

<style lang="scss">
.home {
  &__view {
    &-container {
      max-width: 1280px;
    }
  }
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { isEmpty } from '@/utils/common'

import FilterView from '@/components/filter/Filter.vue'
import { Ifilter } from '@/models/filter'
import { lang } from '@/i18n/en'

const appStore = useAppStore()
const router = useRouter()
const { countries, stations } = storeToRefs(appStore)

// emitted event from Filter component, gets filtered data and routes to search page
function searchResults(formData: Ifilter) {
  appStore.fetchFlightResults(formData).then(() => {
    appStore.setFilters(formData)
    if (router.currentRoute.value.name !== 'Search') router.push({ name: 'Search' })
  })
}

onMounted(async () => {
  // gets the data for station's dropdowns on the load of application
  if (isEmpty(countries.value) || isEmpty(stations.value))
    await appStore.fetchCountriesAndStations()
})
</script>
