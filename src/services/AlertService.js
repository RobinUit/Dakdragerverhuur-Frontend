import Vue from "vue";

export default new (class AlertService {
  error(message) {
    Vue.notify({
      group: "alert",
      type: "error",
      title: "Er is iets fout gegaan",
      duration: 10000,
      text: message,
    });
  }

  warning(message) {
    Vue.notify({
      group: "alert",
      type: "warn",
      title: "Let op!",
      duration: 5000,
      text: message,
    });
  }

  success(message) {
    Vue.notify({
      group: "alert",
      type: "success",
      title: "Gelukt",
      duration: 5000,
      text: message,
    });
  }

  info(message) {
    Vue.notify({
      group: "alert",
      type: "info",
      duration: 5000,
      text: message,
    });
  }
})();
