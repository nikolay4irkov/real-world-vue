<template>
  <div class="">
    <div class="">
      <input type="text" v-model="contact" @keyup.enter="addContact" />
      <button @click="addContact">Add</button>
      <button @click="sortContacts">Sort</button>
      <transition-group name="slide" tag="ul">
        <p v-for="contact in contacts" :key="contact">{{ contact }}</p>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: "",
      contacts: ["pete", "john", "ann", "zack", "bob", "xander"],
    };
  },
  methods: {
    addContact() {
      if (this.contact) {
        this.contacts.push(this.contact);
        this.contact = "";
      }
    },
    sortContacts() {
      this.contacts.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style>
.slide-enter,
.slide-leave-to {
  transform: translateY(10px);
}

.slide-enter-active,
.slide-leave-to-active {
  transition: all 1s ease;
}

.slide-move {
  transition: transform 2s ease;
}

ul {
  display: flex;
  flex-direction: column;
}

p {
  display: inline-block;
  /* margin: 0 10px; */
}
</style>
