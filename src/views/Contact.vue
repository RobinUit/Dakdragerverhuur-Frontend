<template>
  <div class="contact">
    <div class="contactBox">
      <h1>Contact</h1>
      <br />
      <p>{{ $t('contact.header')}}</p>
      <p><strong>{{ $t('contact.info')}}</strong></p>
      <br />
      <p>dakdragerverhuur.nl</p>
      <p>
        <a href="https://goo.gl/maps/J766rguZDFzitVD5A" target="_blank"
          >Zaagmolenweg 28 unit 10</a
        >
      </p>
      <p>
        <a href="https://goo.gl/maps/J766rguZDFzitVD5A" target="_blank"
          >2401LN ALPHEN AAN DEN RIJN</a
        >
      </p>
      <br />
      <p>{{ $t('contact.phone')}}: <a href="tel:+31681194541">06-81 19 45 41</a></p>
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
    color: black;
  }

  p {
  margin: 0;
}
}
</style>
