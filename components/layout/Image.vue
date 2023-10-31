<script setup>
const props = defineProps({
  src: { type: String, required: false, default: "/ocelot.png" },
  lazySrc: { type: String, required: false },
  width: { type: String, required: false },
  height: { type: String, required: false },
  minWidth: { type: String, required: false },
  minHeight: { type: String, required: false },
  maxWidth: { type: String, required: false },
  maxHeight: { type: String, required: false },
  aspectRatio: { type: String, required: false, default: "16/9" },
  cover: { type: Boolean, required: false, default: false },
  gradient: {
    type: String,
    required: false,
    default: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
  },
  alt: { type: String, required: false, default: "Ocelot" },
});
</script>
<template>
  <v-img
    :src="src"
    :lazy-src="lazySrc"
    :width="width"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    :min-width="minWidth"
    :min-height="minHeight"
    :aspect-ratio="aspectRatio"
    :cover="cover"
    :alt="alt"
    :gradient="gradient"
  >
    <!-- Display an overlay while the image is loading. -->
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>
