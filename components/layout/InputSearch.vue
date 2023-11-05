<script setup>
const props = defineProps({
  text: { type: String, required: false, default: "Ocelot Text" },
  icon: { type: String, required: false, default: "$vuetify" },
});
</script>
<template>
  <v-input
    :prepend-icon="icon"
    :append-icon="icon"
    messages="dasd"
    error-messages="dasd"
    warning-messages="dasd"
  />
</template>
