<template>
  <v-card min-width="75%">
    <v-card-title>Hey {{name}},</v-card-title>
    <v-card-text>du hast dich mit dem Code <strong>"{{key}}"</strong> für den Studiengang <strong>{{course.toUpperCase()}}</strong> angemeldet. Bitte warte bis alle Teams zusammen gestellt sind und das Spiel beginnt.</v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["key", "name", "course"])
  }
};
</script>
