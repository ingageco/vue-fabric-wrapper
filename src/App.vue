<template>
  <div id="app">
    <h1>Examples</h1>
    <dot-grid-text-box />
  </div>
</template>

<script>
import DotGridTextBox from "./examples/DotGridTextBox";

export default {
  name: "App",
  components: {
    DotGridTextBox
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
