import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material-design-icons/styles.css";
import vuetify from "./plugins/vuetify";
import VueCurrencyFilter from "vue-currency-filter";
import "@fortawesome/fontawesome-free/css/all.css";
import Vuetify from "vuetify/lib";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
  position: "bottom-center",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__slideBlurred",
  maxToasts: 4,
  newestOnTop: true,
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      return false;
    }
    return toast;
  },
};

const currencyOptions = {
  symbol: "€",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true,
};

Vue.use(Toast, toastOptions);
Vue.use(VueCurrencyFilter, currencyOptions);
Vue.use(Vuetify);
Vue.use(VueNumberInput);

Vue.config.productionTip = false;

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
