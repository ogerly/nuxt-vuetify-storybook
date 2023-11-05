<!-- eslint-disable-next-line no-undef -->
<template>
  <v-checkbox
    v-model="model"
    :label="label"
    :append-icon="appendIcon"
  ></v-checkbox>
</template>
<script setup>
const label = ref("Check me");
const appendIcon = ref("$vuetify");
const model = ref(false);
</script>
