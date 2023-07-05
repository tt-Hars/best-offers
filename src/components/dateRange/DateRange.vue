<template>
  <v-col class="pb-md-0" cols="12" xs="12" sm="6" md="4">
    <v-text-field
      v-model="departureDate"
      :rules="startRules(returnDate, today)"
      @input="$emit('update:departureDate', $event.target.value)"
      required
      :label="lang.common.departureDate"
      variant="outlined"
      type="date"
      id="departure"
    ></v-text-field>
  </v-col>
  <v-col class="pb-md-0" cols="12" xs="12" sm="6" md="4">
    <v-text-field
      v-model="returnDate"
      :rules="returnRules(departureDate, today)"
      @input="$emit('update:returnDate', $event.target.value)"
      required
      :label="lang.common.returnDate"
      variant="outlined"
      type="date"
      id="return"
    ></v-text-field>
  </v-col>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { returnRules, startRules } from '@/utils/validationRules'
import { lang } from '@/i18n/en'

const props = defineProps({
  departureDate: { type: String, required: true, default: '' },
  returnDate: { type: String, required: true, default: '' },
  today: { type: Date, required: true, default: new Date() }
})

const { departureDate, returnDate, today } = toRefs(props)

//sends the date just to receive it back as prop and update model in parent component
defineEmits(['update:departureDate', 'update:returnDate'])
</script>

<style scoped></style>
