import ApiService from "./ApiService.js";

let data = {
  naam: "",
  email: "",
  telefoonnummer: "",
  kenteken: "",
  van: "",
  tot: "",
  dakdrager: "",
  dakkoffer: "",
  fietsendrager: "",
  aantal: "",
  opmerking: "",
  merk: "",
  handelsbenaming: "",
  eerste_afgifte_nl: "",
  aantal_deuren: "",
  inrichting: "",
};

Object.preventExtensions(data);

export default new (class ReservationService {
  saveDataToLocalStorage() {
      console.log(data);
      
    localStorage.setItem("data", JSON.stringify(data));
  }

  getDataFromLocalStorage() {
    data = JSON.parse(localStorage.getItem("data"));
    return data;
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  sendDataToAPI() {
    ApiService.postRequest("https://localhost:3000/form", data).then(
      (response) => {
        console.log(response);
      }
    );
  }

  resetData() {
    for (var key in data) {
      data[key] = "";
    }
  }

  getData() {
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
})();
