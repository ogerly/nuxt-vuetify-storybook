<template>
  <v-img src="/ocelot-storybook.png" height="400" />

  <v-divider />
  <div>Dokumentation</div>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(variant, i) in featuresDocs" :key="i" cols="auto">
        <v-card class="mx-auto" max-width="344" :variant="variant.variant">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1">
                {{ variant.title }}
              </div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-divider />
  <div>Frontend</div>
  <v-container>
    <v-row align="center" justify="center">
      <v-col v-for="(variant, i) in featuresFrontend" :key="i" cols="auto">
        <v-card class="mx-auto" max-width="344" :variant="variant.variant">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1">
                {{ variant.title }}
              </div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-divider />
  <div>Stackblitz</div>
  <div class="justify-center d-flex">
    <v-card height="700" width="95%">
      <iframe
        key="storybook-vuetify-nuxt-q2hrhd"
        src="https://stackblitz.com/edit/storybook-vuetify-nuxt-q2hrhd?embed=1&file=README.md"
        frameborder="0"
        width="100%"
        height="100%"
      />
    </v-card>
  </div>
</template>
<script setup>
const featuresFrontend = [
  { title: 'Nuxt', variant: 'elevated' },
  { title: 'Vuetify', variant: 'elevated' },
  { title: 'Storybook', variant: 'elevated' },
  { title: 'Figma', variant: 'elevated' },
  { title: 'Cromatic', variant: 'elevated' }
]

const featuresDocs = [
  { title: 'Docsify', variant: 'elevated' },
  { title: 'GitHub', variant: 'elevated' },
  { title: 'Stackplitz', variant: 'elevated' }
]

const text = ['elevated', 'flat', 'tonal', 'outlined']
</script>
