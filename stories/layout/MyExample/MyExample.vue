<script setup>
const props = defineProps({
  text: { type: String, required: false, default: "Ocelot Text" },
});
</script>
<template>
  <h1>{{ props.text }}</h1>
</template>
