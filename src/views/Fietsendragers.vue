<template>
  <div class="bike_racks">
    <div class="header">
      <h1>
        {{ $t("rents.bike_racks.title") }}
      </h1>
      <p>
        {{ $t("rents.subheader.one") }} <b>{{ $t("rents.subheader.two") }}</b>
        {{ $t("rents.subheader.three") }}
      </p>
    </div>
    <div class="items">
      <v-expansion-panels multiple v-model="panel">
        <v-expansion-panel
          v-for="(fietsendrager, index) in fietsendragers"
          :key="index"
        >
          <v-expansion-panel-header>
            <p>
              <b>{{ fietsendrager.title }}</b> ({{
                $t("rents.bike_racks.bike_racks_list." + [index] + ".subtitle")
              }})
            </p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="left">
              <img :src="getImageURL(fietsendrager.id)" />
            </div>
            <div class="right">
              <div class="prices">
                <ul>
                  <li>
                    <p id="left">{{ $t("rents.weeks.midweek") }}</p>
                    <p id="right">
                      {{ fietsendrager.prices.midweek | currency }}
                    </p>
                  </li>
                  <li>
                    <p id="left">{{ $t("rents.weeks.one_week") }}</p>
                    <p id="right">
                      {{ fietsendrager.prices.one_week | currency }}
                    </p>
                  </li>
                  <li>
                    <p id="left">{{ $t("rents.weeks.two_weeks") }}</p>
                    <p id="right">
                      {{ fietsendrager.prices.two_weeks | currency }}
                    </p>
                  </li>
                  <li>
                    <p id="left">{{ $t("rents.weeks.three_weeks") }}</p>
                    <p id="right">
                      {{ fietsendrager.prices.three_weeks | currency }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="information">
                <ul>
                  <li>
                    {{
                      $t(
                        "rents.bike_racks.bike_racks_list." +
                          [index] +
                          ".info.one"
                      )
                    }}
                  </li>
                  <li>
                    {{
                      $t(
                        "rents.bike_racks.bike_racks_list." + [index] + ".info.two"
                      )
                    }}
                  </li>
                  <li>
                    {{
                      $t(
                        "rents.bike_racks.bike_racks_list." + [index] + ".info.three"
                      )
                    }}
                  </li>
                </ul>
              </div>
              <div class="reserve">
                <button @click="reservePage(fietsendrager.title)">{{ $t("rents.reserve") }}</button>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import FIETSENDRAGER_JSON from "../assets/data/fietsendragers.json";
import router from '../router';

export default {
  name: "AppHuurprijzen",
  data() {
    return {
      fietsendragers: FIETSENDRAGER_JSON,
      panel: [0, 1],
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
        "../assets/images/fietsendragers",
        false,
        /\.jpg$/
      );
      return images("./" + id + ".jpg");
    },
    reservePage(product) {
      console.log(product);
      router.push('/reserveren');
    }
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.bike_racks {
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
</style>
