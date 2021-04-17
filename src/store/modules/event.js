import EventService from "./../../services/EventService";

export const namespaced = true;

export const state = {
  events: [],
  event: null,
  eventsTotal: 0,
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_TOTAL_EVENTS_COUNT(state, count) {
    state.eventsTotal = count;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Your event has been created!",
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem creating event: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchEvents({ commit, dispatch }, { page, perPage }) {
    EventService.getEvents(page, perPage)
      .then((response) => {
        commit("SET_EVENTS", response.data);
        commit(
          "SET_TOTAL_EVENTS_COUNT",
          parseInt(response.headers["x-total-count"])
        );
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    var event = getters.getEventById(id);

    if (event) {
      commit("SET_EVENT", event);
    } else {
      EventService.getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((error) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching event: " + error.message,
          };
          dispatch("notification/add", notification, { root: true });
        });
    }
  },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
