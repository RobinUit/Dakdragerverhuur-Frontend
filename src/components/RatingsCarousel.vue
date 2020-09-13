<template>
  <div class="slideshow">
    <v-carousel
      :continuous="true"
      cycle
      show-arrows-on-hover
      hide-delimiters
      height="auto"
      interval="10000"
    >
      <v-carousel-item
        v-for="(rating, index) in ratings"
        :key="index"
        :index="rating"
      >
        <div class="rating" id="rating">
          <img
            src="@/assets/images/overig/quote.png"
            alt="Quote icoon"
            class="quote"
          />
          <div class="text">
            <p>
              {{ rating.review }}
            </p>
            <p id="author">- {{ rating.author }}</p>
          </div>
          <img
            :src="getImgUrl(rating.rating)"
            alt="10 sterren beoordeling"
            class="ratingImage"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import RATINGS_JSON from "../assets/data/reviews.json";

export default {
  name: "RatingsCarousel",
  data() {
    return {
      ratings: RATINGS_JSON,
    };
  },
  methods: {
    getImgUrl(rating) {
      var images = require.context("@/assets/images/overig", false, /\.png$/);
      return images("./" + rating + ".png");
    },
  },
};
</script>

<style lang="scss" scoped>
.slideshow {
  width: 100%;
  text-align: left;

  .rating {
    position: relative;
    width: 80%;
    min-height: 260px;
    padding: 20px;
    margin: 10px auto;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding-bottom: 50px;
    display: flex;
    align-items: center;

    .text {
      margin: 20px 70px;
      p {
        margin: 0;
        color: black;
      }

      #author {
        font-weight: bold;
        font-style: italic;
      }
    }

    .quote,
    .ratingImage {
      position: absolute;
    }

    .quote {
      height: 20px;
      width: auto;
      top: 50px;
      left: 50px;
      filter: grayscale(100%);
    }

    .ratingImage {
      width: 200px;
      height: auto;
      right: 0;
      bottom: 0;
      margin: 0 25px 25px 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 900px) {
  .slideshow {
    .rating {
      .text {
        p {
          margin: 5px;
          overflow: hidden;
        }
      }
      .quote {
        left: 40px;
        top: 40px;
      }

      .ratingImage {
        right: 50%;
        transform: translateX(50%);
        bottom: 25px;
        margin: 0;
        width: 180px;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .slideshow {
    .rating {
      .text {
        margin: 10px 25px 25px 25px;
      }

      .quote {
        left: 15px;
        top: 30px;
        height: 15px;
      }
    }
  }
}

@media (pointer: coarse) {
}
</style>
