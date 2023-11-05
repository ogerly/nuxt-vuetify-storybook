<template>
  <v-app>
    <v-app-bar scroll-behavior="elevate" scroll-threshold="678">
      <v-app-bar-nav-icon />
      <v-app-bar-title>Ocelot</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Home" to="/" />
        <v-list-item title="Startpage" to="/startpage" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="align-center justify-center">
      <slot />
    </v-main>
  </v-app>
</template>
