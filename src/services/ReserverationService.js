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
  eerste_afgifte: "",
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
    return ApiService.postRequest("/form", this.formatProductData());
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
    const keys = Object.keys(data);
    for (var key of keys) {
      const exceptions = ["fietsendrager", "dakdrager", "dakkoffer"];
      if (exceptions.includes(key)) {
        data[key] = "none";
        continue;
      }
      if (key == "date") {
        data.date = [];
        continue;
      }
      if (key == "aantal_fietsen") {
        data.aantal_fietsen = 0;
        continue;
      }
      data[key] = "";
    }
    this.saveDataToLocalStorage();

    return this.getData();
  }

  getData() {
    let storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      data = storedData;
      return data;
    }
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
