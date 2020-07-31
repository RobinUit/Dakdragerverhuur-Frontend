import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material-design-icons/styles.css";
import vuetify from "./plugins/vuetify";
import VueCurrencyFilter from "vue-currency-filter"; 
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from "vuetify/lib";
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(Vuetify)
Vue.use(VueNumberInput);
Vue.use(VueCurrencyFilter, {
  symbol: "€",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true,
});

Vue.config.productionTip = false;

export default new Vuetify ({
  icons: {
    iconfont: 'fa'
  }
})

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
