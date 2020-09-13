<template>
  <div class="cargo_racks">
    <div class="header">
      <h1>Huur dakdragers</h1>
      <p>
        Alle prijzen inclusief
        <b>GRATIS</b>
        montageservice en laagste-prijsgarantie.
      </p>
    </div>
    <div class="items">
      <v-expansion-panels multiple v-model="panel">
        <v-expansion-panel
          v-for="(dakdrager, index) in dakdragers"
          :key="index"
          :index="dakdrager"
        >
          <v-expansion-panel-header>
            <p>
              <b>{{ dakdrager.title }}</b>
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="left">
              <img :src="getImageURL(dakdrager.id)" />
            </div>
            <div class="right">
              <div class="prices">
                <ul>
                  <li>
                    <p id="left">Lang weekend of midweek</p>
                    <p id="right">{{ dakdrager.prices.midweek | currency }}</p>
                  </li>
                  <li>
                    <p id="left">1 week</p>
                    <p id="right">{{ dakdrager.prices.one_week | currency }}</p>
                  </li>
                  <li>
                    <p id="left">2 weken</p>
                    <p id="right">
                      {{ dakdrager.prices.two_weeks | currency }}
                    </p>
                  </li>
                  <li>
                    <p id="left">3 weken</p>
                    <p id="right">
                      {{ dakdrager.prices.three_weeks | currency }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="reserve">
                <button @click="reservePage(dakdrager.id)">
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
import DAKDRAGER_JSON from "../assets/data/dakdragers.json";
import router from "../router";
import ReserverationService from "../services/ReserverationService";

export default {
  name: "AppHuurprijzen",
  data() {
    return {
      dakdragers: DAKDRAGER_JSON,
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
        "../assets/images/dakdragers",
        false,
        /\.jpg$/
      );
      return images("./" + id + ".jpg");
    },
    reservePage(product) {
      ReserverationService.updateData("dakdrager", product);
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

.cargo_racks {
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
        margin: 0 10% 0 0;

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
          margin-top: 25px;
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
  .cargo_racks {
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
