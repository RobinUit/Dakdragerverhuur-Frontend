import Vue from "vue";

export default new (class AlertService {
  error(message) {
    Vue.notify({
      group: "alert",
      type: "error",
      title: "Er is iets fout gegaan",
      text: message,
    });
  }

  warning(message) {
    Vue.notify({
      group: "alert",
      type: "warn",
      title: "Let op!",
      text: message,
    });
  }

  success(message) {
    Vue.notify({
      group: "alert",
      type: "success",
      title: "Gelukt",
      text: message,
    });
  }

  info(message) {
    Vue.notify({
      group: "alert",
      type: "info",
      text: message,
    });
  }
})();
