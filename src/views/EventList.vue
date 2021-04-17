<template>
  <div class="">
    <h1>Event for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }"
        >Prev
      </router-link>
      |
    </template>
    <template v-if="isNextPage">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from "./../components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    EventCard,
  },

  created() {
    this.$store.dispatch("event/fetchEvents", {
      perPage: 2,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    isNextPage() {
      return this.event.eventsTotal > this.page * 2;
    },
    ...mapState(["event", "user"]),
  },
};
</script>

<style lang="scss" scoped></style>
