<template>
    <div class="col-xs-12 col-sm-6" v-if="server">
        <p>Server Details are currently {{ server.status }}</p>
        <button @click="resetStatus">Change to normal</button>
    </div>

</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "normal";
    }
  },
  created() {
    serverBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
