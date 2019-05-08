<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <header-auto-facil></header-auto-facil>
    <router-link to="/s">Go to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderAutoFacil from "./components/HeaderAutoFacil.vue";

export default {
  name: "app",
  components: {
    HeaderAutoFacil
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
