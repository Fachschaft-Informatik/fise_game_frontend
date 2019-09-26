<template>
  <v-card min-width="75%">
    <v-card-title>Finde dein Team</v-card-title>
    <v-card-text>
      Deine nächste Aufgabe ist es, dein Team zu finden. Hierfür bekommst du die Namen deiner Teammates und eure Team Nummer. Außerdem hat euer Teamleiter die Möglichkeit, euch einen Treffpunkt mit zu teilen.
      Wenn du dein Team gefunden hast, klicke auf <strong>Team gefunden</strong>.
      <br /><br />
      <strong>Deine TeamNr.: {{teamNr}}</strong>
      <v-card class="my-5">
        <v-card-text>
          <strong>Dein Team:</strong>
          <ul>
            <li v-for="(mate, i) in teammates" v-bind:key="i">{{mate}}</li>
          </ul>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto" color="#26c6da" dark max-width="400">
        <v-card-title>
          <span class="title font-weight-bold no-word-break subtitle-2">Nachricht von deinem Teamleiter:</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold subtitle-1">{{message || "-"}}</v-card-text>
      </v-card>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn @click="teamFound" :class="{
        found: foundTeam
      }" :disabled="foundTeam || !myMessage || myMessage.length < 10">TEAM GEFUNDEN</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data(){
    return {
      teamNr: "-"
    }
  },
  computed: {
    ...mapState(["message", "teammates", "foundTeam", "team"]),
    myMessage: {
      get: function() {
        return this.message;
      },
      set: function(newValue) {
        this.setMessage(newValue);
      }
    }
  },
  methods: {
    ...mapMutations(["setMessage"]),
    ...mapActions(["sendMessage", "teamFound"])
  },
  mounted(){
    this.teamNr = this.team;
  }
};
</script>
<style scoped>
.found {
  border: solid 1px #086400;
  color: #086400;
}
</style>
