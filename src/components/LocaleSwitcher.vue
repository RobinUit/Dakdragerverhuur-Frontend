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
            {{ locale }}
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

<style lang="scss">
.currentLocale {
  display: inline-block;
}

.currentLocale img {
  vertical-align: middle;
  width: 28px;
  margin: auto 0;
}

.localeDropdown {
  display: none;
  position: absolute;
  right: 0;
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

.currentLocale:hover .localeDropdown {
  display: block;
}
</style>
