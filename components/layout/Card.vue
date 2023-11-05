<template>
  <v-card class="mx-auto" :loading="loading" max-width="344">
    <v-img :src="image" height="200px" cover />

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        {{ btnText }}
      </v-btn>

      <v-spacer />

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
const props = defineProps({
  loading: { type: Boolean, required: false },
  title: { type: String, required: false },
  subtitle: { type: String, required: false },
  text: { type: String, required: false },
  btnText: { type: String, required: false },
  image: { type: String, required: false },
  onError: {
    type: Function,
    required: false,
    default: (e) => {
      e.target.src = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    },
  },
});

const show = ref(false);
</script>
