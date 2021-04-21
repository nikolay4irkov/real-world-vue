<template>
  <div>
    <label v-if="label">{{ label }}</label>

    <select @input="updateValue" v-bind="$attrs">
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { inputMixin } from "@/mixins/inputMixin.js";
export default {
  mixins: [inputMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
