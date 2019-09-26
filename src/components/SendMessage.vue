<template>
  <v-card min-width="75%">
    <v-card-title class="no-word-break">Du wurdest als Team-Lead von Team {{team}} ausgewählt</v-card-title>
    <v-card-text>
      <v-card class="my-5">
        <v-card-text>
          <strong>Dein Team:</strong>
          <ul>
            <li v-for="(mate, i) in teammates" v-bind:key="i">{{mate}}</li>
          </ul>
        </v-card-text>
      </v-card>
      <strong>Erkläre deinem Team wie sie dich finden:</strong>
      <v-textarea
        solo
        auto-grow
        placeholder="Ich warte vor der Türe auf euch. Ihr erkennt mich an meinem grünen T-Shirt."
        v-model="myMessage"
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        @click="send"
        :loading="loading"
        :disabled="loading || !myMessage || myMessage.length < 10"
      >{{btnText}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState(["message", "team", "teammates", "messageSend"]),
    myMessage: {
      get: function() {
        return this.message;
      },
      set: function(newValue) {
        this.setMessage(newValue);
      }
    },
    btnText: function() {
      return this.messageSend ? "UPDATE" : "SEND";
    }
  },
  methods: {
    ...mapMutations(["setMessage"]),
    ...mapActions(["sendMessage"]),
    async send() {
      this.loading = true;
      await this.sendMessage();
    }
  },
  watch: {
    loading(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    }
  }
};
</script>
