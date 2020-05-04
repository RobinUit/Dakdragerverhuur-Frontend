<template>
  <div id="app">
    <AppHeader/>
    <AppContent/>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppContent
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
