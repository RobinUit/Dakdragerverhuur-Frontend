<template>
  <div class="licensePlate">
    <div class="field">
      <input
        type="text"
        class="kentekenplaat"
        v-model="value.kenteken"
        maxlength="8"
        name="kenteken"
        @input="executeFormatLicensePlate()"
        @keyup.enter="getCarInformation()"
        @blur="getCarInformation()"
      />
    </div>
    <div class="carInformation">
      <p id="info">
        {{ value.merk }}
        {{ value.handelsbenaming }}
      </p>
      <div class="color" id="color"></div>
    </div>
  </div>
</template>

<script>
import color from "../assets/colors.json";
import ApiService from "../services/ApiService.js";
import moment from "moment";

export default {
  name: "LicensePlate",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    "value.kenteken": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "kenteken", this.value.kenteken);
    },
    "value.kleur": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "kleur", this.value.kleur);
    },
    "value.handelsbenaming": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(
        null,
        "handelsbenaming",
        this.value.handelsbenaming
      );
    },
    "value.inrichting": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "inrichting", this.value.inrichting);
    },
    "value.merk": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "merk", this.value.merk);
    },
    "value.eerste_afgifte_nl": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(
        null,
        "eerste_afgifte_nl",
        this.value.eerste_afgifte_nl
      );
    },
    "value.aantal_deuren": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "aantal_deuren", this.value.aantal_deuren);
    },
  },
  mounted() {
    if (this.value.kleur) {
      document.getElementById("color").style.display = "block";
      document.getElementById("color").style.backgroundColor =
        color[(this.value.kleur).toUpperCase()];
    }
  },
  methods: {
    getCarInformation() {
      var plate = this.value.kenteken.replace(/-/g, "");

      if (plate.length != 6) {
        this.value.merk = "";
        this.value.handelsbenaming = "";
        document.getElementById("color").style.display = "none";
        return;
      }
      ApiService.getRequest(process.env.VUE_APP_API_URL + "rdw/" + plate).then(
        (data) => {
          if (data.length == 0) {
            this.value.merk = "Geen geldig kenteken";
            this.value.handelsbenaming = "";
            document.getElementById("color").style.display = "none";
            return;
          }

          this.getAndSetAllVariables(data);

          document.getElementById("color").style.display = "block";
          document.getElementById("color").style.backgroundColor =
            color[data[0].eerste_kleur];
        }
      );
    },
    getAndSetAllVariables(data) {
      var carData = data[0];

      this.value.merk = this.formatText(carData.merk);
      this.value.handelsbenaming = this.formatText(
        this.checkSubString(carData.handelsbenaming)
      );
      this.value.kleur = this.formatText(carData.eerste_kleur);
      this.value.aantal_deuren = this.formatText(carData.aantal_deuren);
      this.value.eerste_afgifte_nl = this.formatDate(
        carData.datum_eerste_afgifte_nederland
      );
      this.value.inrichting = this.formatText(carData.inrichting);
    },
    checkSubString(text) {
      if (text.includes(this.value.merk.toUpperCase())) {
        return text.replace(this.value.merk.toUpperCase(), "").trim();
      }
      return text;
    },
    formatText(text) {
      return text.charAt(0) + text.slice(1).toLowerCase();
    },
    formatDate(date) {
      return moment(date, "YYYYMMDD").format("DD-MM-YYYY");
    },
    executeFormatLicensePlate() {
      this.value.kenteken = this.formatLicenseplate(this.value.kenteken);
    },
    formatLicenseplate(licensePlate) {
      licensePlate = licensePlate.replace(/-/g, "").toUpperCase();

      // licensePlates for diplomates should not be formatted
      var diplomatelicensePlateRegex = /^CD[ABFJNST]\d{1,3}$/; //for example: CDB1 of CDJ45
      if (licensePlate.match(diplomatelicensePlateRegex)) {
        return licensePlate;
      }

      var licensePlateRegexes = [
        /^([A-Z]{2})(\d{2})(\d{2})$/, // 1     XX-99-99    (since 1951)
        /^(\d{2})(\d{2})([A-Z]{2})$/, // 2     99-99-XX    (since 1965)
        /^(\d{2})([A-Z]{2})(\d{2})$/, // 3     99-XX-99    (since 1973)
        /^([A-Z]{2})(\d{2})([A-Z]{2})$/, // 4     XX-99-XX    (since 1978)
        /^([A-Z]{2})([A-Z]{2})(\d{2})$/, // 5     XX-XX-99    (since 1991)
        /^(\d{2})([A-Z]{2})([A-Z]{2})$/, // 6     99-XX-XX    (since 1999)
        /^(\d{2})([A-Z]{3})(\d{1})$/, // 7     99-XXX-9    (since 2005)
        /^(\d{1})([A-Z]{3})(\d{2})$/, // 8     9-XXX-99    (since 2009)
        /^([A-Z]{2})(\d{3})([A-Z]{1})$/, // 9     XX-999-X    (since 2006)
        /^([A-Z]{1})(\d{3})([A-Z]{2})$/, // 10    X-999-XX    (since 2008)
        /^([A-Z]{3})(\d{2})([A-Z]{1})$/, // 11    XXX-99-X    (since 2015)
        /^([A-Z]{1})(\d{2})([A-Z]{3})$/, // 12    X-99-XXX
        /^(\d{1})([A-Z]{2})(\d{3})$/, // 13    9-XX-999
        /^(\d{3})([A-Z]{2})(\d{1})$/, // 14    999-XX-9
        /^(\d{3})(\d{2})([A-Z]{1})$/, // 15    999-99-X
        /^([A-Z]{3})(\d{2})(\d{1})$/, // 16    XXX-99-9
        /^([A-Z]{3})([A-Z]{2})(\d{1})$/, // 17    XXX-XX-9
      ];

      var i;

      for (i in licensePlateRegexes) {
        if (licensePlate.match(licensePlateRegexes[i])) {
          return licensePlate.replace(licensePlateRegexes[i], "$1-$2-$3");
        }
      }
      return licensePlate;
    },
  },
};
</script>

<style lang="scss" scoped>
.licensePlate {
  display: flex;
  width: 100%;
  min-height: 100px;

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    text-align: left;
  }

  .field,
  .carInformation {
    width: 50%;
  }

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      margin: 0 auto;
      font-size: 20px;
      height: 40px;
      text-align: center;
    }
  }

  .carInformation {
    background-color: #f0f6ff;
    border-radius: 15px;
    margin: 0 10px;
    padding: 10px;
    min-height: 100px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;

    p {
      text-align: center;
      width: 100%;
      font-weight: bold;
      font-size: 1.4em;
      margin: 10px 0;
    }

    .color {
      display: none;
      position: absolute;
      bottom: 10px;
      background-color: white;
      border: 1px solid black;
      width: 60%;
      height: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

@media only screen and (max-width: 600px) {
  .licensePlate {
    display: block;

    .field,
    .carInformation {
      width: 100%;
    }

    .carInformation {
      margin: 10px 0;
    }
  }
}
</style>
