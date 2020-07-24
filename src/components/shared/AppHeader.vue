<template>
  <header>
    <div class="headerElements">
      <div class="mobileNavigation">
        <nav>
          <router-link to="/">{{ $t("nav.home") }}</router-link>
          <router-link to="/huurprijzen">{{
            $t("nav.rents.title")
          }}</router-link>
          <router-link to="/reserveren">{{ $t("nav.reserve") }}</router-link>
          <router-link to="/contact">{{ $t("nav.contact") }}</router-link>
        </nav>
      </div>
      <div class="desktopNavigation">
        <div class="branding" v-on:click="navigate">
          <h1>Dakdragerverhuur.nl</h1>
        </div>
        <nav>
          <router-link to="/home"
            ><p>{{ $t("nav.home") }}</p></router-link
          >
          <div class="dropdown">
            <router-link to="/huurprijzen" class="drop"
              ><p class="drop">{{ $t("nav.rents.title") }}▼</p></router-link
            >
            <div class="dropdown-content">
              <router-link to="/huurprijzen/dakdragers"
                ><p>{{ $t("nav.rents.cargo_racks") }}</p></router-link
              >
              <router-link to="/huurprijzen/dakkoffers"
                ><p>{{ $t("nav.rents.cargo_carriers") }}</p>
              </router-link>
              <router-link to="/huurprijzen/fietsendragers"
                ><p>{{ $t("nav.rents.bike_racks") }}</p></router-link
              >
            </div>
          </div>
          <router-link to="/reserveren"
            ><p>{{ $t("nav.reserve") }}</p></router-link
          >
          <router-link to="/contact"
            ><p>{{ $t("nav.contact") }}</p></router-link
          >
        </nav>
        <div class="localization">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import router from "../../router";
import LocaleSwitcher from "../LocaleSwitcher.vue";

export default {
  name: "AppHeader",
  components: {
    LocaleSwitcher,
  },
  methods: {
    navigate: function() {
      router.push("home").catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

header {
  width: 100vw;
  height: 60px;
  box-shadow: 0px 0px 10px 0px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerElements {
  width: 100%;
  height: 100%;

  .desktopNavigation {
    height: 100%;
    width: 100%;
    max-width: 1080px;
    position: relative;
    display: inline-flex;

    .branding {
      text-align: left;
      width: 25%;
      margin: auto 0;
      margin-left: 10px;

      h1 {
        cursor: pointer;
        width: 100%;
        font-size: 1em;
        text-transform: uppercase;
      }
    }

    nav {
      margin: auto 0;
      width: 50%;
      display: inline-flex;

      p {
        position: relative;
        margin: 0 auto;
        display: inline-block;
        padding: 0 10px;
        font-weight: bold;
      }

      a {
        width: 25%;
        height: 100%;
        justify-content: space-between;
        text-decoration: none;
        color: black;
        position: relative;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        a {
          float: none;
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;

          p {
            font-weight: normal;
          }
        }
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      p:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 1.5px;
        left: 50%;
        position: absolute;
        background: black;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
    }

    p:hover:after,
    .router-link-active p:after,
    .router-link-exact-active p:after {
      width: 100%;
      left: 0;
    }

    .dropdown {
      .drop {
        p:hover:after {
          pointer-events: none !important;
        }
      }
    }

    .localization {
      text-align: right;
      margin: auto 0;
      margin-right: 10px;
      width: 25%;
    }
  }

  .mobileNavigation {
    display: none;
  }
}

@media only screen and (max-width: 750px) {
  header {
    .headerElements {
      .mobileNavigation {
        display: block;
      }

      .desktopNavigation {
        display: none;
      }
    }
  }
}
</style>
