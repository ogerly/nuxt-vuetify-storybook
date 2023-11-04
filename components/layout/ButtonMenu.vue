<script setup>
import { ref } from "vue";
const model = ref(false);

const props = defineProps({
  text: {
    type: String,
    default: "Ocelot Menu",
  },
  items: {
    type: Array,
    required: false,
    default: () => {
      return [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }];
    },
  },
  openOnClick: {
    type: Boolean,
    required: false,
    default: true,
  },
  openOnHover: {
    type: Boolean,
    required: false,
    default: false,
  },
  openOnFocus: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: { type: String, required: false },
  variant: { type: String, required: false },
  color: { type: String, required: false },
  prependIcon: { type: String, required: false },
  appendIcon: { type: String, required: false },
  rounded: { type: Number, required: false },
  block: { type: Boolean, required: false },
  icon: { type: String, required: false },
  density: { type: String, required: false },
  elevation: { type: Number, required: false },
  active: { type: Boolean, required: false },
});
</script>
<template>
  <v-menu
    v-model="model"
    :open-on-click="openOnClick"
    :open-on-hover="openOnHover"
    :open-on-focus="openOnFocus"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        :text="text"
        :icon="icon"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon"
        :rounded="rounded"
        :size="size"
        :color="color"
        :block="block"
        :variant="variant"
        :density="density"
        :elevation="elevation"
        :active="active"
      >
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
