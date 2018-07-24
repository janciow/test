<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ swithchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Fn</button>
    </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    name: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    swithchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Janek";
      this.$emit("nameWasReset", this.name);
    }
  },
  created() {
       eventBus.$on('ageWasEdited', (age) => {
           this.userAge = age;
       })
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
