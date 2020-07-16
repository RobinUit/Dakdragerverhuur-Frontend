<template>
  <div class="container">
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContent",
};
</script>

<style>
.container {
  min-height: calc(100vh - 75px);
  text-align: center;
  width: 100vw;
}

.content-wrapper {
  display: inline-block;
  width: 100%;
  max-width: 1080px;
  align-items: center;
  padding-top: 60px;
}
</style>
