<template>
  <div>
    <ocelot />
    <v-container>
      <nuxt-link to="/startpage">
        Startpage
      </nuxt-link>
      <v-text-field v-model="model" append-icon="mdi-magnify" />
      <v-checkbox v-model="model" append-icon="mdi-check" />
      <LayoutCard />
    </v-container>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'default'
})
const model = ref(null)
</script>
