<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-text-field v-model="model" append-icon="mdi-magnify"></v-text-field>
        <v-checkbox append-icon="mdi-check" v-model="model"></v-checkbox>
        <NuxtPage />
      </v-container>
      <NuxtWelcome />
    </v-app>
  </NuxtLayout>
</template>
<script setup>
const model = ref('')
</script> 