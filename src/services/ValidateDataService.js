import AlertService from "./AlertService.js";

export default new (class ValidateDataService {
  validateData(data) {
    return (
      this.validateRequired(data) &&
      this.validateEmailAndPhonenumber(data.email, data.telefoonnummer) &&
      this.validateLength(data.kenteken) &&
      this.validateProducts(data)
    );
  }

  validateRequired(data) {
    let incorrectFields = [];
    let notRequired = [
      "opmerking",
      "merk",
      "inrichting",
      "handelsbenaming",
      "eerste_afgifte_nl",
      "aantal_deuren",
      "kleur",
      "aantal_fietsen",
    ];

    for (let key in data) {
      if ((data[key] == "" || data[key] == []) && !notRequired.includes(key)) {
        if (key == "date") {
          key = "huurtermijn";
        }
        incorrectFields.push(key.charAt(0).toUpperCase() + key.slice(1));
      }
    }

    if (incorrectFields.length != 0) {
      let allFields = "";
      incorrectFields.forEach((entry, index) => {
        if (incorrectFields.length - 1 == index) {
          allFields += entry;
          return;
        }
        allFields += entry + ", ";
      });
      AlertService.error("1 of meer velden zijn niet ingevuld: " + allFields);
      return false;
    }
    return true;
  }

  validateEmailAndPhonenumber(email, phonenumber) {
    // eslint-disable-next-line no-useless-escape
    var regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // eslint-disable-next-line no-useless-escape
    var regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!regMail.test(email)) {
      AlertService.error("Vul een geldig e-mailadres in");
      return false;
    }
    if (!regPhone.test(phonenumber)) {
      AlertService.error("Vul een geldig telefoonnummer in");
      return false;
    }
    return true;
  }

  validateLength(kenteken) {
    if (kenteken.length != 8) {
      AlertService.error("Kenteken is onjuist");
      return false;
    }
    return true;
  }

  validateProducts(data) {
    if (
      data.dakkoffer == "none" &&
      data.fietsendrager == "none" &&
      data.fietsendrager == "none"
    ) {
      AlertService.error("Kies een dakdrager, dakkoffer of fietsendrager");
      return false;
    }
    return true;
  }
})();
