<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="picker"
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateRangeText"
        label="Huurtermijn"
        prepend-icon="mdi-calendar-blank"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      :close-on-content-click="false"
      year-icon="mdi-calendar-blank"
      v-model="value.date"
      first-day-of-week="0"
      locale="nl"
      range
      :min="minDate"
      :allowed-dates="allowedDates"
      :title-date-format="getTitleDateFormat"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Annuleren</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(picker)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value)
    }
  },
  data() {
    return {
      modal: false,
      picker: [],
      availableDates: "",
    };
  },
  computed: {
    minDate() {
      const today = new Date();
      return this.formatDate(today);
    },
    dateRangeText() {
      if (this.picker[0] > this.picker[1]) {
        this.reverseDates();
      }
      if (this.picker == 0) {
        return "";
      } else if (this.picker.length == 1 || this.picker[0] == this.picker[1]) {
        return this.formatPickerDate(this.picker[0]);
      }
      return (
        "Van " +
        this.formatPickerDate(this.picker[0]) +
        " tot " +
        this.formatPickerDate(this.picker[1])
      );
    },
  },
  methods: {
    getTitleDateFormat(isoDate) {
      const ONE_DAY = 24 * 60 * 60 * 1000;
      const date1 = new Date(isoDate[0]);
      const date2 = new Date(isoDate[1]);

      const diffDays = Math.round(Math.abs((date1 - date2) / ONE_DAY)) + 1;

      if (!isoDate[1] && isoDate[0]) {
        return "Einddatum";
      } else if (diffDays == 1) {
        return "1 dag";
      } else if (diffDays > 1) {
        return diffDays + " dagen";
      }
      return "Begindatum";
    },

    formatDate(date) {
      let month = `${date.getMonth() + 1}`;
      let day = `${date.getDate()}`;
      const year = date.getFullYear();

      if (month.length < 2) month = `0${month}`;
      if (day.length < 2) day = `0${day}`;

      return [year, month, day].join("-");
    },

    formatPickerDate(date) {
      if (!date) return null;

      const [year, month, day] = date.toString().split("-");
      return `${day}-${month}-${year}`;
    },

    reverseDates() {
      this.picker = this.picker.reverse();
    },

    allowedDates: (date) => {
      if (moment(date).day() !== 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-text-field {
  margin: 18px 0 30px 0 !important;
}
</style>
