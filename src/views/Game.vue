<template>
  <v-container>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <registered v-if="status==='registered'" />
        <send-message v-else-if="status === 'findTeam' && role==='lead'" />
        <find-team v-else-if="status === 'findTeam' && role==='member'" />
        <passive v-else-if="status === 'passive'" />
        <active v-else-if="status === 'active'" />
        <result v-else-if="status === 'finished'" />
        <rejoin v-else />
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import RegisteredComponent from "../components/Registered";
import SendMessageComponent from "../components/SendMessage";
import FindTeamComponent from "../components/FindTeam";
import PassiveComponent from "../components/Passive";
import ActiveComponent from "../components/Active";
import ResultComponent from "../components/Result";
import RejoinComponent from "../components/Rejoin";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Registered: RegisteredComponent,
    SendMessage: SendMessageComponent,
    FindTeam: FindTeamComponent,
    Passive: PassiveComponent,
    Active: ActiveComponent,
    Result: ResultComponent,
    Rejoin: RejoinComponent
  },
  computed: {
    ...mapState(["status", "role"])
  },
  methods: {
    ...mapActions(["getStatus", "getMessage"]),
    triggerPhase: function(status) {
      if (status === "registered") {
        this.getStatus();
      } else if (status === "findTeam" && this.role !== "lead") {
        this.getMessage();
      }
    }
  },
  watch: {
    status(newStatus) {
      this.triggerPhase(newStatus);
    }
  },
  mounted() {
    this.triggerPhase(this.status);
  }
};
</script>