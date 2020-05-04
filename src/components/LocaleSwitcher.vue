<template>
  <div class="locale">
    <div class="currentLocale">
      <img id="localeImage" :src="images.nl" />
      <div class="localeDropdown">
        <ul>
          <li
            v-for="locale in locales"
            :key="locale"
            @click="switchLocale(locale)"
          >
            {{ $t("other." + locale) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  methods: {
    switchLocale: function(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        document.getElementById("localeImage");
      }
    },
  },
  data() {
    return {
      locales: ["nl", "en"],
      images: {
        nl: require("../assets/images/icons/nl-flag.png"),
        en: require("../assets/images/icons/uk-flag.png"),
      },
    };
  },
};
</script>

<style scoped>

.currentLocale {
  position: relative;
  display: inline;
}

.currentLocale img {
  height: 36px;
}

li {
  text-decoration: none;
  list-style: none;
}

.localeDropdown {
  position: absolute;
  width: 180px;
  color: #ffffff;
  background: #000000;
  height: 60px;
  line-height: 30px;
  text-align: left;
  visibility: hidden;
  border-radius: 6px;
}

.localeDropdown ul {
  margin: 5px;
}

.localeDropdown li {
  cursor: pointer;
}

.localeDropdown:after {
  content: "";
  position: absolute;
  bottom: 100%;
  right: 5%;
  margin-left: -8px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #000000;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}

.locale:hover .localeDropdown {
  visibility: visible;
  opacity: 0.8;
  top: 20px;
  right: 0%;
  z-index: 999;
}
</style>
