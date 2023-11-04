<template>
  <v-checkbox
    v-model="localModel"
    :label="label"
    :append-icon="appendIcon"
  ></v-checkbox>
</template>
<script setup>
const props = defineProps({
  model: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Check me",
  },
  appendIcon: {
    type: String,
    default: "$vuetify",
  },
});

const localModel = ref(model);
</script>
