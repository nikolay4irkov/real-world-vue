<template>
  <form @submit.prevent="submit" class="">
    <input type="text" v-model="email" @blur="$v.email.$touch()" />
    <div v-if="$v.email.$error">
      <p v-if="!$v.email.email">Please, enter valid email</p>
      <p v-if="!$v.email.required">Email is required</p>
    </div>

    <button :disabled="$v.$invalid" type="submit">Submit</button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: null,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("Form submission " + this.email);
      }
    },
  },
};
</script>

<style></style>
