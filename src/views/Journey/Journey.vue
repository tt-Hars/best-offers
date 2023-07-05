<template>
  <v-container fluid class="fill-height">
    <v-card class="pa-8 flex-column fill-height d-flex align-center justify-center w-100 text-h5">
      {{
        //@ts-expect-error
        lang.journey.heading($route.params.id)
      }}
      <v-btn class="mt-5" @click="$router.go(-1)">{{ lang.common.back }}</v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { lang } from '@/i18n/en'
</script>

<style scoped>
.fill-height {
  height: 95vh !important;
}
</style>
