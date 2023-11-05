<script setup>
const props = defineProps({
  label: { type: String, default: "Ocelot Text", required: false },
  placeholder: { type: String, default: "Ocelot Placeholder", required: false },
  prependIcon: { type: String, default: "$vuetify", required: false },
  prependInnerIcon: { type: String, default: "$vuetify", required: false },
  appendIcon: { type: String, default: "$vuetify", required: false },
  appendInnerIcon: { type: String, default: "$vuetify", required: false },
  messages: { type: String, default: "Ocelot Messages", required: false },
  error: { type: String, default: "Ocelot Error", required: false },
  errorMessages: {
    type: String,
    default: "Ocelot Error Messages",
    required: false,
  },
  maxErrors: { type: Number, default: 3, required: false },
  disabled: { type: Boolean, default: false, required: false },
  density: { type: String, default: "comfortable", required: false },
  readonly: { type: Boolean, default: false, required: false },
  clearable: { type: Boolean, default: false, required: false },
  focused: { type: Boolean, default: false, required: false },
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
  validationValue: { type: String, required: false },
});
</script>

<template>
  <v-form>
    <v-text-field
      v-model="model"
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
      :validation-value="validationValue"
      :error="error"
    />
  </v-form>
</template>
