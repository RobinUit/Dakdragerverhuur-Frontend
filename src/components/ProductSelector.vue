<template>
  <div class="options">
    <label class="header" :for="type">{{ type }}</label>
    <select
      :name="type"
      v-model="value[type]"
      @change="checkUpdate(type)"
      class="select"
    >
      <option value="none">Nee</option>
      <option
        :value="product.id"
        v-for="product in products"
        v-bind:key="product.id"
        >{{ product.title }}</option
      >
    </select>
    <transition name="fadeHeight">
      <div
        class="optional"
        v-if="type == 'fietsendrager' && value[type] != 'none'"
      >
        <label for="amount">Aantal fietsen ({{ totalBikes }})</label>
        <number-input
          v-model="value.aantal_fietsen"
          :min="1"
          :max="maxValue"
          center
          controls
        ></number-input>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ProductSelector",
  props: {
    value: {
      type: Object,
      required: true,
    },
    products: Array,
    type: String,
  },
  watch: {
    "value.dakdrager": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "dakdrager", this.value.dakdrager);
    },
    "value.dakkoffer": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "dakkoffer", this.value.dakkoffer);
    },
    "value.fietsendrager": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(null, "fietsendrager", this.value.fietsendrager);
    },
    "value.aantal_fietsen": function() {
      this.$emit("input", this.value);
      this.$parent.updateData(
        null,
        "aantal_fietsen",
        this.value.aantal_fietsen
      );
    },
  },
  data() {
    return {
      maxValue: 0,
      totalBikes: 0,
    };
  },
  mounted() {
    if (this.type == "fietsendrager") {
      this.checkUpdate(this.type);
    }
  },
  methods: {
    checkUpdate(type) {
      if (this.value[type] == "none" || type != "fietsendrager") {
        return;
      }
      this.getBikeInfo(type);
    },
    getBikeInfo(type) {
      let values = this.products[this.value[type] - 1].bikes;
      this.totalBikes = values;
      values = values.split("-");
      this.maxValue = parseInt(values[1]);


      if (
        this.value.aantal_fietsen === 0 ||
        this.value.aantal_fietsen > this.maxValue
      ) {
        this.value.aantal_fietsen = 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}

.options {
  margin: 30px 0;

  .header {
    text-transform: capitalize;
  }

  label {
    display: inline-block;
    width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    text-align: left;
  }

  select {
    -webkit-appearance: none;
    /*webkit browsers */
    -moz-appearance: none;
    /*Firefox */
    appearance: none;
    /* modern browsers */
    border-radius: 0;
    width: 100%;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: none;
    border: none;
    display: block;
    box-sizing: border-box;
    font-size: 14px;
    height: 50px;
    padding: 5px 20px;
    cursor: pointer;
  }

  .optional {
    margin: 15px 0 30px 0;
  }

  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all 0.5s;
    max-height: 80px;
  }
  .fadeHeight-enter,
  .fadeHeight-leave-to {
    opacity: 0;
    max-height: 0px;
  }
}
</style>
