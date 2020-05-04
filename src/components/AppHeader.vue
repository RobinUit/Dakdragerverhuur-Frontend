<template>
  <header>
    <div class="headerElements">
      <div class="desktopNavigation">
        <div class="branding" v-on:click="navigate">
          <h1>Dakdragerverhuur.nl</h1>
        </div>
        <nav>
          <router-link to="/">{{ $t('nav.home')}}</router-link>
          <router-link to="/huurprijzen">{{ $t('nav.rents')}}</router-link>
          <router-link to="/reserveren">{{ $t('nav.reserve')}}</router-link>
          <router-link to="/contact">{{ $t('nav.contact')}}</router-link>
        </nav>
        <div class="localization">
          <LocaleSwitcher />
        </div>
      </div>
      <div class="mobileNavigation">
        <nav>
          <router-link to="/">{{ $t('nav.home')}}</router-link>
          <router-link to="/huurprijzen">{{ $t('nav.rents')}}</router-link>
          <router-link to="/reserveren">{{ $t('nav.reserve')}}</router-link>
          <router-link to="/contact">{{ $t('nav.contact')}}</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import router from "../router";
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  name: "AppHeader",
  components: {
    LocaleSwitcher
  },
  methods: {
    navigate: function() {
      router.push("home");
    },
  },
};
</script>

<style>
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
}

.desktopNavigation {
  height: 100%;
  width: 100%;
  max-width: 1080px;
  position: relative;
  display: inline-flex;
}

.branding {
  text-align: left;
  width: 25%;
  margin: auto 0;
  margin-left: 10px;
}

.branding h1 {
  cursor: pointer;
  width: 100%;
  font-size: 1em;
  text-transform: uppercase;
}

nav {
  margin: auto 0;
  width: 50%;
  display: inline-flex;
}

nav a {
  width: 25%;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
  color: black;
}

.localization {
  text-align: right;
  margin: auto 0;
  margin-right: 10px;
  width: 25%;
}

.mobileNavigation {
  display: none;
}

@media only screen and (max-width: 750px) {
  .mobileNavigation {
    display: block;
  }

  .desktopNavigation {
    display: none;
  }
}
</style>
