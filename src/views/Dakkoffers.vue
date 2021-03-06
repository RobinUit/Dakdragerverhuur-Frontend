<template>
  <div class="cargo_carriers">
    <div class="header">
      <h1>Huur dakkoffers</h1>
      <p>
        Alle prijzen inclusief
        <b>GRATIS</b>
        montageservice en laagste-prijsgarantie.
      </p>
    </div>
    <div class="items">
      <v-expansion-panels multiple v-model="panel">
        <v-expansion-panel
          v-for="(dakkoffer, index) in dakkoffers"
          :key="index"
          :index="dakkoffer"
        >
          <v-expansion-panel-header>
            <p>
              <b>{{ dakkoffer.title }}</b>
              ({{ dakkoffer.volume | formatSubheader }})
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="left">
              <img :src="getImageURL(dakkoffer.id)" />
            </div>
            <div class="right">
              <div class="prices">
                <ul>
                  <li>
                    <p id="left">Lang weekend of midweek</p>
                    <p id="right">{{ dakkoffer.prices.midweek | currency }}</p>
                  </li>
                  <li>
                    <p id="left">1 week</p>
                    <p id="right">{{ dakkoffer.prices.one_week | currency }}</p>
                  </li>
                  <li>
                    <p id="left">2 weken</p>
                    <p id="right">
                      {{ dakkoffer.prices.two_weeks | currency }}
                    </p>
                  </li>
                  <li>
                    <p id="left">3 weken</p>
                    <p id="right">
                      {{ dakkoffer.prices.three_weeks | currency }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="information">
                <ul>
                  <li>
                    {{ dakkoffer.volume }}
                  </li>
                  <li>
                    {{ dakkoffer.info }}
                  </li>
                  <li>Binnen afmetingen {{ dakkoffer.dimensions }}</li>
                </ul>
              </div>
              <div class="reserve">
                <button @click="reservePage(dakkoffer.id)">
                  Reserveer direct
                </button>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import DAKKOFFER_JSON from "../assets/data/dakkoffers.json";
import router from "../router";
import ReserverationService from "../services/ReserverationService";

export default {
  name: "AppHuurprijzen",
  data() {
    return {
      dakkoffers: DAKKOFFER_JSON,
      panel: [0],
    };
  },
  filters: {
    formatSubheader: function(value) {
      value = value.toString().split("(");
      return value[0].trim();
    },
  },
  methods: {
    getImageURL(id) {
      var images = require.context(
        "../assets/images/dakkoffers",
        false,
        /\.jpg$/
      );
      return images("./" + id + ".jpg");
    },
    reservePage(product) {
      ReserverationService.updateData("dakkoffer", product);
      ReserverationService.saveDataToLocalStorage();
      router.push("/reserveren");
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.cargo_carriers {
  margin: 40px 5px;

  .header {
    b {
      color: rgb(62, 164, 71);
    }
  }

  .items {
    width: 100%;
    max-width: 700px;
    margin: 40px auto 0px auto;

    p {
      text-align: left;
    }

    .v-expansion-panel-content {
      display: flex;

      .left {
        width: 40%;
        float: left;
        margin: 30px 10% 0 0;

        img {
          width: 100%;
        }
      }

      .right {
        width: 50%;
        float: right;

        li {
          list-style-type: none;
        }

        .prices {
          li {
            display: flex;
            width: 100%;

            #left {
              width: 75%;
              float: left;
            }
            #right {
              width: 25%;
              float: right;
            }
          }
        }

        .information {
          margin: 16px 0px;
          font-size: 12px;
          text-align: right;
        }

        .reserve {
          text-align: right;
          button {
            line-height: 35px;
            cursor: pointer;
            border: none;
            background-color: rgb(62, 164, 71);
            text-transform: uppercase;
            color: white;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            height: 35px;
            padding: 0 30px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .cargo_carriers {
    .items {
      .v-expansion-panel-content {
        .left,
        .right {
          left: unset;
          right: unset;
          width: 100%;
          margin: unset;
        }

        .left {
          img {
            max-width: 350px;
          }
        }

        .right {
          .information,
          .reserve {
            text-align: unset;
          }
        }
      }
    }
  }
}
</style>
