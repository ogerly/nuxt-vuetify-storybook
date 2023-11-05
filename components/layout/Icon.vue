<script setup>
const props = defineProps({
  size: { type: String, required: false },
  color: { type: String, required: false },
  icon: { type: String, required: false }
})
</script>
<template>
  <v-icon :size="size" :color="color" :icon="icon" />
</template>
