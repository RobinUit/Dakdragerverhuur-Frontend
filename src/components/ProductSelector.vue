<template>
  <div class="options">
    <label :for="type">{{ type }}</label>
    <select
      :name="type"
      v-model="selected"
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
        v-if="type == 'Fietsendrager' && selected != 'none'"
      >
        <label for="amount">Aantal fietsen ({{ amountOfBikes }})</label>
        <number-input
          v-model="currentValue"
          :min="minValue"
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
  props: ["products", "type", "selected", "amountOfBikes"],
  data() {
    return {
      minValue: 0,
      maxValue: 0,
      currentValue: 0,
    };
  },
  methods: {
    checkUpdate(type) {      
      if (this.selected == "none" || type != "Fietsendrager") {        
        return;
      }      
      this.getBikeInfo();
    },
    getBikeInfo() {
      let values = this.products[this.selected - 1].bikes;
      this.amountOfBikes = values;
      values = values.split("-");
      this.minValue = parseInt(values[0]);
      this.maxValue = parseInt(values[1]);
      this.currentValue = this.minValue;
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
