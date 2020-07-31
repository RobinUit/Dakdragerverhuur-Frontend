import axios from "axios";
import AlertService from "../services/AlertService";

export default new (class ApiService {
  async getRequest(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response) {
        AlertService.error(error.response.data.message);
      } else if (error.request) {
        AlertService.error(error.request);
      } else {
        AlertService.error("Er is iets fout gegaan");
      }
      return "error";
    }
  }

  async postRequest(url, data) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      if (error.response) {
        AlertService.error(error.response.data.message);
      } else if (error.request) {
        AlertService.error(error.request);
      } else {
        AlertService.error("Er is iets fout gegaan");
      }
      return "error";
    }
  }
})();
