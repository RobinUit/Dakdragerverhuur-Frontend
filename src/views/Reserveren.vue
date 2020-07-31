<template>
  <div class="reserve">
    <h1>Prijs en reserverings formulier</h1>
    <p>
      Vul het onderstaande formulier in voor reserveringen, prijsopgave of meer
      informatie.
      <br />
      Wij zullen zo spoedig mogelijk antwoorden.
    </p>
    <div class="reservationForm">
      <form id="reservationForm">
        <div class="field">
          <label>Naam</label>
          <input
            type="text"
            name="naam"
            placeholder="Typ hier uw voor- en achternaam"
            autocomplete="name"
            @blur="updateData"
            v-model="formData.naam"
            required
          />
        </div>
        <div class="field">
          <label>E-mail </label>
          <input
            type="email"
            name="email"
            placeholder="Typ hier uw e-mailadres"
            autocomplete="email"
            @blur="updateData"
            v-model="formData.email"
            required
          />
        </div>
        <div class="field">
          <label>Telefoonnummer</label>
          <input
            type="tel"
            id="phone"
            name="telefoonnummer"
            placeholder="Typ hier uw telefoonnummer"
            autocomplete="tel"
            @blur="updateData"
            v-model="formData.telefoonnummer"
            required
          />
        </div>
        <LicensePlate v-model="formData" />
        <DatePicker v-model="formData" />
        <ProductSelector
          :products="dakdragers"
          type="dakdrager"
          v-model="formData"
        ></ProductSelector>
        <ProductSelector
          :products="dakkoffers"
          type="dakkoffer"
          v-model="formData"
        ></ProductSelector>
        <ProductSelector
          :products="fietsendragers"
          type="fietsendrager"
          v-model="formData"
        ></ProductSelector>
        <div class="field">
          <label>Opmerking</label>
          <textarea
            type="text"
            placeholder="Typ hier uw vraag of opmerking"
            name="opmerking"
            @blur="updateData"
            v-model="formData.opmerking"
          />
        </div>
        <div class="reserve">
          <button @click="submitForm()" type="button">
            Verstuur
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LicensePlate from "../components/LicensePlate";
import DatePicker from "../components/DatePicker";
import ProductSelector from "../components/ProductSelector";
import ReservationService from "../services/ReserverationService.js";
import DAKDRAGER_JSON from "../assets/data/dakdragers.json";
import DAKKOFFER_JSON from "../assets/data/dakkoffers.json";
import FIETSENDRAGER_JSON from "../assets/data/fietsendragers.json";
import AlertService from "../services/AlertService";
import ReserverationService from "../services/ReserverationService.js";

export default {
  name: "AppReserveren",
  components: {
    LicensePlate,
    DatePicker,
    ProductSelector,
  },
  beforeMount() {
    this.formData = ReservationService.getData();

    window.onbeforeunload = closingCode;
    function closingCode() {
      ReservationService.saveDataToLocalStorage();
      return null;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.saveData();
    next();
  },
  data() {
    return {
      dakdragers: DAKDRAGER_JSON,
      dakkoffers: DAKKOFFER_JSON,
      fietsendragers: FIETSENDRAGER_JSON,
      formData: {
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
      },
    };
  },

  methods: {
    submitForm() {
      if (ReservationService.validateData()) {
        ReservationService.sendDataToAPI()
          .then((response) => {
            if (response == "error") {
              return;
            }
            this.formData = ReserverationService.resetForm();
            AlertService.success("Je aanvraag is met succes ontvangen!");
          })
          .catch(() => {
            AlertService.error(
              "Er is iets fout gegaan met het versturen van de gegevens. Probeer het later opnieuw"
            );
          });
      }
    },
    updateData(event, value, key) {
      if (!event) {
        ReservationService.updateData(value, key);
        return;
      }
      ReservationService.updateData(event.target.name, event.target.value);
    },
    saveData() {
      ReservationService.saveDataToLocalStorage();
    },
  },
};
</script>

<style lang="scss" scoped>
.reserve {
  margin: 40px auto;

  .reservationForm {
    width: 90%;
    max-width: 600px;
    padding: 1px 50px;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .field {
    margin: 30px 0;
    text-align: left;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    text-align: left;
  }

  input,
  textarea {
    -webkit-appearance: none;
    width: 100%;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: none;
    border: none;
    display: block;
    box-sizing: border-box;
    font-size: 14px;
  }

  input {
    height: 50px;
    padding: 5px 20px;
  }

  textarea {
    min-height: 200px;
    padding: 20px;
    resize: none;
  }

  .reserve {
    button {
      line-height: 35px;
      cursor: pointer;
      border: none;
      background-color: rgb(62, 164, 71);
      text-transform: uppercase;
      color: white;
      font-size: 14px;
      font-weight: bold;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      height: 35px;
      padding: 0 30px;
    }
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  transition: background-color 5000s ease-in-out 0s;
}

</style>
