import Vue from "vue";

export default new (class AlertService {
  alert(type, message) {
    if (!message || typeof message !== "string") {
      return;
    }
    switch (type) {
      case "error":
        this.error(message);
        break;
      case "warning":
        this.warning(message);
        break;
      case "success":
        this.success(message);
        break;
      case "info":
        this.info(message);
        break;
      default:
        this.default(message);
    }
  }
  error(message) {
    Vue.$toast.error(message, {
      showCloseButtonOnHover: false,
    });
  }

  warning(message) {
    Vue.$toast.warning(message);
  }

  success(message) {
    Vue.$toast.success(message, {
      hideProgressBar: false,
    });
  }

  info(message) {
    Vue.$toast.info(message, {
      hideProgressBar: false,
    });
  }

  default(message) {
    Vue.$toast(message);
  }
})();
