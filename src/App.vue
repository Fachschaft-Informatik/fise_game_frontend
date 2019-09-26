<template>
  <v-app id="app">
    <v-app-bar app dense>
      <v-btn id="logo" text to="/">
        <v-img
          src="./assets/logo.png"
          max-width="2.5rem"
          max-height="2.5rem"
          class="mx-0"
          contain
          to="/"
        />
        <v-toolbar-title class="headline text-uppercase">
          <span>Ersti</span>
          <span class="subtitle-1 font-weight-light">Spiel</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-show="status==='alreadyStarted' " text to="/game">rejoin</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["status"])
  }
};
</script>
<style>
#logo::before,
#logo:active::before,
#logo:hover::before {
  opacity: 0;
}

.v-content {
  background-color: #ededed;
}
</style>
