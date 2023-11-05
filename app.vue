<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-text-field v-model="model" append-icon="mdi-magnify" />
        <v-checkbox v-model="model" append-icon="mdi-check" />
        <LayoutCard />
      </v-container>
      <NuxtWelcome />
    </v-app>
  </NuxtLayout>
</template>
<script setup>
const model = ref(null);
</script>
