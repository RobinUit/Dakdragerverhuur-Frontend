import ApiService from "./ApiService.js";
import ValidateDataService from "./ValidateDataService.js";
import DAKDRAGER_JSON from "../assets/data/dakdragers.json";
import DAKKOFFER_JSON from "../assets/data/dakkoffers.json";
import FIETSENDRAGER_JSON from "../assets/data/fietsendragers.json";

let data = {
  naam: "",
  email: "",
  telefoonnummer: "",
  date: [],
  opmerking: "",
  kenteken: "",
  merk: "",
  handelsbenaming: "",
  eerste_afgifte_nl: "",
  aantal_deuren: "",
  inrichting: "",
  kleur: "",
  dakdrager: "none",
  dakkoffer: "none",
  fietsendrager: "none",
  aantal_fietsen: 0,
};

Object.preventExtensions(data);

export default new (class ReservationService {
  saveDataToLocalStorage() {
    localStorage.setItem("data", JSON.stringify(data));
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  sendDataToAPI() {
    return ApiService.postRequest(
      process.env.VUE_APP_API_URL + "/form",
      this.formatProductData()
    );
  }

  formatProductData() {
    let dakdragers = DAKDRAGER_JSON;
    let dakkoffers = DAKKOFFER_JSON;
    let fietsendragers = FIETSENDRAGER_JSON;

    let formattedData = Object.assign({}, data);

    if (formattedData.dakdrager != "none") {
      formattedData.dakdrager = dakdragers[formattedData.dakdrager - 1].title;
    }

    if (formattedData.dakkoffer != "none") {
      formattedData.dakkoffer = dakkoffers[formattedData.dakkoffer - 1].title;
    }

    if (formattedData.fietsendrager != "none") {
      formattedData.fietsendrager =
        fietsendragers[formattedData.fietsendrager - 1].title;
    }

    if (formattedData.fietsendrager == "none") {
      formattedData.aantal_fietsen = 0;
    }

    return formattedData;
  }

  resetForm() {
    for (var key in data) {
      console.log(key);
      const exceptions = ["fietsendrager", "dakdrager", "dakkoffer"];
      if (key == "date") {
        data[key] = [];
        return;
      }
      if (exceptions.includes(key)) {
        console.log(key);
        data[key] = "none";
        return;
      }
      if (key == "aantal_fietsen") {
        data[key] = 0;
        return;
      }
      data[key] = "";
    }
    this.saveDataToLocalStorage();

    return this.getData();
  }

  getData() {
    let storedData = JSON.parse(localStorage.getItem("data"));
    if (!storedData) {
      return data;
    }
    data = storedData;
    return data;
  }

  updateData(key, value) {
    try {
      data[key] = value;
    } catch (e) {
      console.log(e);
    }
  }

  removeData(key) {
    data[key] = "";
  }

  validateData() {
    return ValidateDataService.validateData(data);
  }
})();
