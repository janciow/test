

<template>
<div>
    <h3>New Quote</h3>
    <p>counter: {{ counter }}</p>
    <button @click="incrementCounter">increment counter ++</button>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  },
  destroyed() {
    console.log("Destroyed!");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
};
</script>


<style scoped>
</style>