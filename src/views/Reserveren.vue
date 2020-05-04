<template>
  <div class="reserve">
    <input
      type="text"
      class="kentekenplaat"
      v-model="licenseplate"
      maxlength="8"
      @blur="getCarInformation()"
    />
    <pre>
      {{code}}
    </pre>
  </div>
</template>

<script>
// import Kentekenplaat from '../../public/js/kentekenplaat.js';
import axios from "axios";

export default {
  name: "AppReserveren",
  data() {
    return {
      licenseplate: "",
      code: ""
    };
  },
  methods: {
    // licenseplate: function() {
    //   new Kentekenplaat(document.querySelector('kentekenplaat'));
    // },
    getCarInformation() {
      if (this.licenseplate.trim().length < 4) {
        return;
      }
      axios.get("http://localhost:3000/rdw/" + this.licenseplate).then((response) => {
        this.code = response.data;
      });
    },
  },
  // beforeMount() {
  //   this.licenseplate()
  // }
};
</script>

<style lang="scss">
.reserve {
  margin: 40px auto;

  input {
    width: 1000px;
  }
}
</style>
