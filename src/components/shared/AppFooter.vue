<template>
  <footer>
    <div class="footerElements">
      <div class="branding">
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

<style lang="scss">
footer {
  position: relative;
  bottom: 0;
  width: 100vw;
  height: 75px;

  .footerElements {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 500px;

    div {
      margin: 10px;
    }

    .branding {
      text-transform: uppercase;
      font-size: 14px;
    }

    .copyright {
      font-size: 12px;
    }
  }
}
</style>
