<template>
  <v-card min-width="50%">
    <v-card-title>Das Spiel hat begonnen</v-card-title>
    <v-card-text>
      Wenn du dich bereits angemeldet hast und rausgeschmissen wurdest, oder an ein anderes Endgerät umgezogen bist,
      gib deinen Code einfach hier ein um dem laufenden Spiel wieder bei zu treten.
      <br />Wenn du dich noch nicht angemeldet hast, wende dich an die Fachschaft.
      <v-text-field
        class="mt-5"
        label="Bitte Code eingeben"
        placeholder="0FB3"
        v-model="playerKey"
        :error-messages="status==='wrongKey'?'Der eingegebene Code wurde nicht registriert':undefined"
      />
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn @click="go" :disabled="!(key && key.length === 4)">GO</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["key", "status"]),
    playerKey: {
      get: function() {
        return this.key;
      },
      set: function(updated) {
        this.setKey(updated);
      }
    }
  },
  methods: {
    ...mapMutations(["setKey", "setName", "setCourse"]),
    ...mapActions(["rejoin"]),
    go: async function() {
      await this.rejoin();
    }
  }
};
</script>
