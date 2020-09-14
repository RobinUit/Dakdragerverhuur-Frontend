<template>
  <div class="contact">
    <div class="contactBox">
      <h1>Contact</h1>
      <br />
      <p>Afhaal en montage adres</p>
      <p><strong>LET OP alleen op afspraak geopend</strong></p>
      <br />
      <p>dakdragerverhuur.nl</p>
      <p>
        <a href="https://goo.gl/maps/pzmxEfw7YyxgDfB96" target="_blank"
          >Tankval 11</a
        >
      </p>
      <p>
        <a href="https://goo.gl/maps/pzmxEfw7YyxgDfB96" target="_blank"
          >2408ZC ALPHEN AAN DEN RIJN</a
        >
      </p>
      <br />
      <p>Telefoon: <a href="tel:+31681194541">06-81 19 45 41</a></p>
      <br />
      <p>
        <a href="mailto:info@dakdragerverhuur.nl">info@dakdragerverhuur.nl</a>
      </p>
    </div>
    <div class="contactImage"></div>
  </div>
</template>

<script>
export default {
  name: "AppContact",
};
</script>

<style lang="scss">
.contact {
  position: relative;
}
.contactImage {
  width: 100%;
  height: 80%;
  margin: 200px 0 0 0;
  position: fixed;
  left: 0;
  background: url("~@/assets/images/overig/thulebackground.jpg") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.contactBox {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  padding: 40px 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    font-weight: bold;
    color: black !important;
  }

  p {
    margin: 0;
  }
}
</style>
