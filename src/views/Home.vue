<template>
  <v-container>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card class="pa-4" min-width="50%">
          <v-card-title>Anmelden</v-card-title>
          <v-card-text>
            <v-text-field label="Name" placeholder=" " v-model="playerName" />
            <v-radio-group column v-model="playerCourse">
              <template v-slot:label>
                <div>Studiengang</div>
              </template>
              <v-radio label="Cyber Security" value="csb"></v-radio>
              <v-radio label="Informatik (Bachelor)" value="ib"></v-radio>
              <v-radio label="Medizinische Informatik" value="imb"></v-radio>
              <v-radio label="Unternehmensinformatik" value="uib"></v-radio>
            </v-radio-group>
            <v-text-field
              label="Bitte Code eingeben"
              placeholder="0FB3"
              v-model="playerKey"
              :error-messages="status==='wrongKey' ? `Code fehlerhaft`: status==='keyUsed'? 'Code bereits verwendet':undefined"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="go" :disabled="!(course && name && key && key.length == 4 )">GO</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["key", "status", "name", "course"]),
    playerCourse: {
      get: function() {
        return this.course;
      },
      set: function(updated) {
        this.setCourse(updated);
      }
    },
    playerKey: {
      get: function() {
        return this.key;
      },
      set: function(updated) {
        this.setKey(updated);
      }
    },
    playerName: {
      get: function() {
        return this.name;
      },
      set: function(updated) {
        this.setName(updated);
      }
    }
  },
  methods: {
    ...mapMutations(["setKey", "setName", "setCourse"]),
    ...mapActions(["register", "help"]),
    go: async function() {
      await this.register();
      if (!this.status || this.status !== "wrongKey") {
        this.$router.push("/game");
      }
    }
  },
  mounted() {
    this.help();
  }
};
</script>
