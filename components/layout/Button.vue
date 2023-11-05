<template>
  <v-btn
    type="button"
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
    @click="onClick"
  />
</template>

<script>
export default {
  props: {
    text: { type: String, required: false, default: 'Ocelot' },
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
    active: { type: Boolean, required: false }
  }
}
</script>
