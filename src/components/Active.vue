<template>
  <v-card min-width="75%">
    <v-card-title class="no-word-break">Aktiver Spieler</v-card-title>
    <v-card-text>
      Als aktiver Spieler musst du allen Teammitgliedern die richtigen Wörter zuweisen.
      Die passiven Spieler müssen dir hierfür ihre Namen und Wörter mitteilen.
      <v-card>
        <v-card-text>
          <v-text-field
            v-for="(mate, i) in gameData"
            v-bind:key="i"
            :label="`${mate.name}'s Wort:`"
            v-model="answers[i]"
            :error="error[i]"
          />
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            @click="check"
            :class="{
              'wrong-btn': wrongAnswer
            }"
            :disabled="isDisabled()"
          >SUBMIT</v-btn>
        </v-card-actions>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      answers: [],
      error: [],
      wrongAnswer: false
    };
  },
  computed: {
    ...mapState(["gameData"])
  },
  methods: {
    ...mapActions(["triggerNext"]),
    isDisabled: function() {
      const nonEmpty = this.answers.reduce(
        (count, val) => (val ? ++count : count),
        0
      );
      return this.gameData.length !== nonEmpty;
    },
    check: function() {
      let allRight = true;
      for (let i = 0; i < this.gameData.length; i++) {
        this.error[i] =
          this.gameData[i].val.toLowerCase() !== this.answers[i].toLowerCase();
        if (this.error[i]) {
          allRight = false;
        }
      }
      if (allRight) {
        this.triggerNext();
      } else {
        this.wrongAnswer = true;
      }
    }
  }
};
</script>
<style scoped>
.wrong-answer > div > div > label {
  color: red;
}
.wrong-btn {
  border: solid 1px #640000;
  color: #640000;
}
</style>
