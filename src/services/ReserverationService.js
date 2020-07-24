import ApiService from "./ApiService.js";
import ValidateDataService from "./ValidateDataService.js";

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
    return ApiService.postRequest("http://localhost:3000/form", data);
  }

  resetData() {
    for (var key in data) {
      const exceptions = ["fietsendrager", "dakdrager", "dakkoffer"];
      if (key == "date") {
        data[key] = [];
        return;
      }
      if (exceptions.includes(key)) {
        data[key] = "none";
        return;
      }
      if (key == "aantal_fietsen") {
        data[key] = 0;
        return;
      }
      data[key] = "";
    }
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
    ValidateDataService.validateData(data);
  }
})();
