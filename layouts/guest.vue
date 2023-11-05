<template>
  <v-app>
    <v-main class="align-center justify-center">
      <slot />
    </v-main>
    <v-footer class="d-flex flex-column" fixed-footer="true">
      <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Get connected with us on social networks!</strong>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        />
      </div>
    </v-footer>
  </v-app>
</template>
<script setup>
const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>
