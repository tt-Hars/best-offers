<template>
  <v-row class="py-5">
    <v-col class="py-5 d-flex flex-column" cols="12" xs="12" sm="8">
      <span class="text-h6">
        <span>{{ lang.search.departingFlight }}</span> <span class="dot px-1"></span>
        {{ formatDate(flight.departureDate) }}</span
      >
      <v-row class="mt-5">
        <v-col class="d-flex" cols="12">
          <div>
            <div class="border__graphic"></div>
          </div>
          <div class="d-flex flex-column text-body-1 ml-4 mt-n4">
            <span class="mb-4">{{ flight.origin }} - {{ times.depart }}</span>
            <span>{{ flight.destination }} - {{ times.arrive }}</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="py-m2" cols="12" xs="12" sm="4">
      <v-list>
        <v-list-item
          disabled
          v-for="(item, i) in items(flight.cabinCode, flight.seatAvailability)"
          :key="i"
          :value="item"
          color="primary"
        >
          <v-list-item-title
            class="text-body-2 text-black font-weight-bold"
            v-text="item.text"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <v-divider />
  <v-row class="py-5">
    <v-col class="py-5 d-flex flex-column" cols="12" xs="12" sm="8">
      <span class="text-h6">
        <span>{{ lang.search.returningFlight }}</span> <span class="dot px-1"></span>
        {{ formatDate(flight.returnDate) }}</span
      >
      <v-row class="mt-5">
        <v-col class="d-flex" cols="12">
          <div>
            <div class="border__graphic"></div>
          </div>
          <div class="d-flex flex-column text-body-1 ml-4 mt-n4">
            <span class="mb-4">{{ flight.destination }} - {{ times.returnDepart }}</span>
            <span>{{ flight.origin }} - {{ times.returnArrive }}</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="py-m2" cols="12" xs="12" sm="4">
      <v-list>
        <v-list-item
          disabled
          v-for="(item, i) in items(flight.cabinCode, flight.seatAvailability)"
          :key="i"
          :value="item"
          color="primary"
        >
          <v-list-item-title
            class="text-body-2 text-black font-weight-bold"
            v-text="item.text"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { formatDate, randomTime } from '@/utils/common'
import { cabinCode } from '@/enums/cabinCode'
import { toRefs } from 'vue'
import { lang } from '@/i18n/en'

const props = defineProps({
  flight: { type: Object, required: true }
})

const { flight } = toRefs(props)

// generate legroom data to show in the expansion panel content
const getLegroom = (): string => {
  return ['c', 'f'].includes(flight.value.cabinCode)
    ? lang.search.extra
    : flight.value.cabinCode === 'p'
    ? lang.search.aboveAvg
    : lang.search.average
}

// static data to show in the expansion panel content
const items = (cabinClass: string, seats: number) => [
  { text: `${lang.search.seatsAvailable} ${seats}`, icon: 'mdi-information' },
  //@ts-ignore
  { text: `${cabinCode[cabinClass]} ${lang.search.class}`, icon: 'mdi-information' },
  { text: `${getLegroom()} ${lang.search.legroom}`, icon: 'mdi-information' }
]

// generate some random flight timings
const times = {
  depart: randomTime(),
  arrive: randomTime(),
  returnDepart: randomTime(),
  returnArrive: randomTime()
}
</script>

<style lang="scss" scoped>
.border__graphic {
  height: 30px;
  position: relative;
  border: 2px dotted #a1a1a1;
  border-radius: 5px;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #a1a1a1;
    border-radius: 50%;
    bottom: -15px;
    left: -5px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #a1a1a1;
    border-radius: 50%;
    top: -15px;
    left: -5px;
  }
}

.dot {
  &:before {
    content: '·';
  }
}
</style>
