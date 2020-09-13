<template>
  <footer>
    <div class="footerElements">
      <div class="branding">
        Dakdragerverhuur.nl
      </div>
      <div class="copyright">
        © Copyright 2020 | Robin Uitbeijerse web development
      </div>
      <a
        class="contact"
        href="mailto:robin@uitbeijerse.eu?SUBJECT=Contact | dakdragerverhuur.nl"
      >
        Klik hier om contact op te nemen bij problemen, vragen of feedback.
      </a>
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

    .copyright,
    .contact {
      font-size: 12px;
      margin: auto 0;
    }

    .contact {
      color: rgb(44, 62, 80);
      text-decoration: underline;
      margin-bottom: 10px;
    }
  }
}
</style>
