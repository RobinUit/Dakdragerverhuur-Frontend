<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <AppContent />
      <AppFooter />
      <notifications
        group="alert"
        classes="alert"
        position="bottom center"
        width="500"
      />
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.alert {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 14px;

  color: #ffffff;
  background: #ffffff;
  border-left: 5px solid #ffffff;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.info {
    background: #44a4fc;
    border-left-color: #187fe7;
  }
}
</style>
