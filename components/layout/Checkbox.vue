<template>
  <div>
    <v-checkbox
      v-model="model"
      :label="label"
      :color="color"
      :value="value"
      :hide-details="hideDetails"
      :append-icon="appendIcon"
      :prepend-icon="prependIcon"
      :error="error"
      :error-messages="errorMessages"
    ></v-checkbox>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { VCheckbox } from "vuetify/components";
const model = ref(false);
const props = defineProps({
  label: { type: String, required: false },
  color: { type: String, required: false },
  value: { type: Boolean, required: false },
  hideDetails: { type: Boolean, required: false },
  appendIcon: { type: String, required: false },
  prependIcon: { type: String, required: false },
  error: { type: Boolean, required: false },
  errorMessages: { type: String, required: false },
});
</script>
