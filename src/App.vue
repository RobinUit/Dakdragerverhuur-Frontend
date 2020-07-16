<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </v-app>
  </div>
</template>

<script>
import AppFooter from "@/components/shared/AppFooter";
import AppHeader from "@/components/shared/AppHeader";
import AppContent from "@/components/shared/AppContent";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppContent,
  },
};
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
