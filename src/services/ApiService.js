import axios from "axios";

export default new (class ApiService {
  async getRequest(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postRequest(url, data) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
})();
