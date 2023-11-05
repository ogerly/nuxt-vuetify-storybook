<script setup>
const props = defineProps({
  text: { type: String, required: false },
  color: { type: String, required: false },
  size: { type: String, required: false },
  variant: { type: String, required: false },
  icon: { type: String, required: false },
  image: { type: String, required: false }
})
</script>
<template>
  <v-avatar
    :color="color"
    :size="size"
    :variant="variant"
    :icon="icon"
    :image="image"
  >
    {{ text }}
  </v-avatar>
</template>
