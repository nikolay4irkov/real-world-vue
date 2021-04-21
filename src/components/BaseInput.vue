<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
import { inputMixin } from "@/mixins/inputMixin.js";
export default {
  mixins: [inputMixin],
};
</script>

<style></style>
