<template>
  <div class="home">
    <div class="image">
      <img
        src="@/assets/images/overig/koenigsegg.jpg"
        alt="Koenigsegg met Thule dakkoffer"
      />
    </div>
    <div class="reviews">
      <h1>
        Wat onze huurders zeggen:
      </h1>
      <RatingsCarousel />
      <p>
        Lees meer dan 150 ervaringen met dakdragerverhuur op
        <a
          href="https://www.huren.nl/m3298/dakdragerverhuur-eu"
          target="_blank"
        >
          <b>Huren.nl</b>
        </a>
      </p>
      <a href="https://www.huren.nl/m3298/dakdragerverhuur-eu" target="_blank">
        <img
          src="@/assets/images/overig/huren.png"
          alt="Aanbevolen door huren.nl"
          id="huren"
        />
      </a>
    </div>
  </div>
</template>

<script>
import RatingsCarousel from "../components/RatingsCarousel";

export default {
  name: "AppHome",
  components: {
    RatingsCarousel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .image {
    margin: 60px 0 40px 0;

    img {
      width: 100%;
      max-width: 600px;
    }
  }
  .reviews {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
      a {
        text-decoration: none;
        color: black;
      }
    }

    #huren {
      width: 150px;
      margin: 5px 0;
    }
  }
}
</style>
