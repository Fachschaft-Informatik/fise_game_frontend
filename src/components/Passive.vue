<template>
  <v-card min-width="75%">
    <v-card-title>Passiver Spieler</v-card-title>
    <v-card-text>
      Der aktive Spieler, muss allen Teammitgliedern die richtigen Wörter zuweisen.
      Du als passiver Spieler musst ihm hierfür deinen Namen und dein Wort mitteilen.
      <v-card class="mx-auto" color="#26c6da" dark max-width="400">
        <v-card-title>
          <span class="title font-weight-light">Dein Wort ist:</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">{{
          gameData
        }}</v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["gameData"])
  }
};
</script>
