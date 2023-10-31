<template>
  <v-card
    max-width="344"
    :height="height"
    :max-height="maxHeight"
    :elevation="elevation"
    :color="color"
    :flat="flat"
    :hover="hover"
    :outlined="outlined"
    :rounded="rounded"
    :tile="tile"
    :class="classes"
    :classes="{
      'ds-card--primary': primary,
      'ds-card--secondary': secondary,
      'ds-card--centered': centered,
      'ds-card--hover': hover,
      'ds-card--space': space,
    }"
    :tag="tag"
    :header-tag="headerTag"
    :header="header"
    :icon="icon"
    :image="image"
    :show="show"
    :width="width"
    :min-height="minHeight"
    :min-width="minWidth"
    :transition="transition"
  >
    <v-img src="assets/ocelot.png" height="200px" cover></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-skeleton-loader
    class="mx-auto"
    elevation="12"
    max-width="400"
    type="table-heading, list-item-two-line, image, table-tfoot"
  ></v-skeleton-loader>
</template>
<script setup>
const show = false;
const height = "350px";
const minHeight = "350px";
const maxHeight = "700px";
const primary = false;
const secondary = false;
const border = true;
const centered = true;
const hover = false;
const space = false;
const tag = "div";
const headerTag = "h3";
const header = "Top western road trips";
const icon = "location_city";
const image = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
const onError = (e) => {
  e.target.src = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
};
</script>
