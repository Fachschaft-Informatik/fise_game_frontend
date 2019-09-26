<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="500">
    <v-card-title align="center" justify="center">
      <span class="title font-weight-light mx-auto" width="100%">
        Geschafft!
        <br />Eure nächste Station ist:
      </span>
    </v-card-title>
    <v-card-text align="center" justify="center" class="headline font-weight-bold">
      <div id="main">{{data[0]}}*</div>
      <div id="sub" >* {{data[1]}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["gameData"]),
    data: function(){return this.gameData.split("\n")}
  }
};
</script>

<style scoped>
#main{
  font-size: xx-large;
}
#sub{
  font-size: x-small;
}
</style>