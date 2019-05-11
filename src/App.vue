<template>
  <div id="app">
    <!-- Compiled and minified CSS -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <header-auto-facil></header-auto-facil>
    <router-view></router-view>
  </div>
</template>


<script>
import HeaderAutoFacil from "./components/HeaderAutoFacil.vue";

export default {
  name: "app",
  components: {
    HeaderAutoFacil,
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
.bg-secondary-ligth{
  background-color: #e2e2e2;
}
.font-size-larger{
  font-size: larger;
}
.font-size-x-large{
  font-size: x-large;
}
.cursor-pointer{
  cursor: pointer;
}
.rigth-0{
  right: 0;
} 
.top-0{
  top: 0;
}
.text-blue-strong{
  color: #004b8c;
}
.bg-blue-ligth{
  background-color: #00ace4;
}
</style>
