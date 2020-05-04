<template>
  <footer>
    <div class="footerElements">
      <div id="branding">
        Dakdragerverhuur.nl
      </div>
      <div class="copyright">
        © Copyright 2020 | Robin Uitbeijerse web development
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 75px;
}

.footerElements {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
}

.footerElements div {
  margin: 10px;
}

#branding {
  text-transform: uppercase;
}

</style>
