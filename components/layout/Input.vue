<script setup>
import { ref } from "vue";
const value = ref("");

const props = defineProps({
  label: { type: String, required: false },
  placeholder: { type: String, required: false },
  prependIcon: { type: String, required: false },
  prependInnerIcon: { type: String, required: false },
  appendIcon: { type: String, required: false },
  appendInnerIcon: { type: String, required: false },
  messages: { type: String, required: false },
  error: { type: String, required: false },
  errorMessages: { type: String, required: false },
  maxErrors: { type: Number, required: false },
  disabled: { type: Boolean, required: false },
  density: { type: String, required: false },
  readonly: { type: Boolean, required: false },
  clearable: { type: Boolean, required: false },
  focused: { type: Boolean, required: false },
  rules: {
    type: Array,
    required: false,
    default: () => [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 20 || "Max 20 characters",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    ],
  },
  validateOn: { type: String, required: false },
  ValidationValue: { type: String, required: false },
});
</script>
<template>
  <v-form>
    <v-text-field
      v-model="value"
      :label="label"
      :placeholder="placeholder"
      :prepend-icon="prependIcon"
      :prepend-inner-icon="prependInnerIcon"
      :append-icon="appendIcon"
      :append-inner-icon="appendInnerIcon"
      :messages="messages"
      :error-messages="errorMessages"
      :max-errors="maxErrors"
      :disabled="disabled"
      :density="density"
      :readonly="readonly"
      :clearable="clearable"
      :focused="focused"
      :rules="rules"
      :validate-on="validateOn"
      :ValidationValue="ValidationValue"
      @input="$emit('input', $event)"
    ></v-text-field>
  </v-form>
</template>
