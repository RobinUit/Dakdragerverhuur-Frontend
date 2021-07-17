import axios from "axios";
import AlertService from "./AlertService";

const API_URL = "https://api.uitbeijerse.eu/dakdragerverhuur";

export default new (class ApiService {
  async getRequest(url) {
    try {
      const response = await axios.get(API_URL + url);
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async postRequest(url, data) {
    try {
      const response = await axios.post(API_URL + url, data);
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  handleErrors(error) {
    if (error.response) {
      if (error.response.data.message.includes("kenteken")) {
        AlertService.alert("warning", error.response.data.message);
        return;
      }
      AlertService.alert(
        error.response.data.status,
        error.response.data.message
      );
    } else {
      AlertService.alert(
        "error",
        "Er is een onbekende fout opgetreden, probeer het later opnieuw"
      );
    }
  }
})();
