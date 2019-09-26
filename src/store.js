import Vue from "vue";
import Vuex from "vuex";

const server = "localhost";
const port = "8808";

const getOptions = {
  cache: "no-cache",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
};

const postOptions = {
  method: "POST",
  cache: "no-cache",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    course: null,
    key: null,
    name: null,
    status: null,
    role: null,
    message: null,
    foundTeam: null,
    team: null,
    teammates: null,
    gameData: null,
    roundLoop: null,
    round: -1
  },
  mutations: {
    setKey: (state, key) => (state.key = key.toUpperCase()),
    updateStatus: (state, status) => (state.status = status),
    setMessage: (state, message) => (state.message = message),
    setName: (state, name) => (state.name = name),
    setRole: (state, role) => (state.role = role),
    setCourse: (state, course) => (state.course = course),
    setFoundTeam: (state, found) => (state.foundTeam = found),
    setGameData: (state, data) => (state.gameData = data),
    setTeammates: (state, teammates) => (state.teammates = teammates),
    setTeam: (state, team) => (state.team = team),
    updateRound: state => (state.round = state.round + 1),
    setRound: (state, round) => (state.round = round),
    setRoundLoop: (state, active) => (state.roundLoop = active)
  },
  actions: {
    register: async ({ commit, dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/${state.key}`,
          getOptions
        );
        if (res.status === 200) {
          let options = JSON.parse(JSON.stringify(postOptions));
          options.body = JSON.stringify({
            name: state.name,
            course: state.course
          });
          const answer = await fetch(
            `http://${server}:${port}/register/${state.key}`,
            options
          );
          const text = await answer.text();
          if (text === "alreadyStarted") {
            commit("updateStatus", "alreadyStarted");
          } else if (text === "alreadyRegistered") {
            commit("updateStatus", "keyUsed");
          } else {
            commit("updateStatus", "registered");
          }
        } else {
          commit("updateStatus", "wrongKey");
        }
      } catch (_) {
        setTimeout(() => dispatch("register"), Math.random() * 500);
      }
    },
    getStatus: async ({ commit, dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/status/${state.key}`,
          getOptions
        );
        const answer = await res.json();

        if (answer.role !== "pending") {
          commit("updateStatus", "findTeam");
          commit("setTeammates", answer.teammates);
          commit("setTeam", answer.team);
          commit("setRole", answer.role);
        } else {
          setTimeout(() => dispatch("getStatus"), 5000);
        }
      } catch (_) {
        setTimeout(() => dispatch("getStatus"), Math.random() * 500);
      }
    },
    getMessage: async ({ commit, dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/message/${state.key}`,
          getOptions
        );
        const message = await res.text();

        if (message !== "no message") {
          commit("setMessage", message);
        }
        if (!state.foundTeam){
          setTimeout(() => dispatch("getMessage"), 5000);
        }
      } catch (_) {
        setTimeout(() => dispatch("getMessage"), Math.random() * 500);
      }
    },
    sendMessage: async ({ commit, dispatch, state }) => {
      try {
        let options = JSON.parse(JSON.stringify(postOptions));
        options.body = JSON.stringify({ message: state.message });

        await fetch(`http://${server}:${port}/message/${state.key}`, options);
        commit("setFoundTeam", true);
        if (!state.roundLoop) {
          dispatch("getRound");
        }
      } catch (error) {
        setTimeout(() => dispatch("sendMessage"), Math.random() * 500);
      }
    },
    teamFound: async ({ commit, dispatch, state }) => {
      try {
        let options = JSON.parse(JSON.stringify(postOptions));

        await fetch(`http://${server}:${port}/found/${state.key}`, options);
        commit("setFoundTeam", true);
        dispatch("getRound");
      } catch (_) {
        setTimeout(() => dispatch("teamFound"), Math.random() * 500);
      }
    },
    getRound: async ({ commit, dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/currentRound/${state.key}`,
          getOptions
        );
        const answer = await res.json();

        if (answer.message !== "pending") {
          commit("setRoundLoop", false);
          commit("updateRound");
          commit("updateStatus", answer.message);
          commit("setGameData", answer.gameData);
          if (answer.message === "passive") {
            dispatch("checkForNext");
          }
        } else {
          commit("setRoundLoop", true);
          setTimeout(() => dispatch("getRound"), 5000);
        }
      } catch (e) {
        console.error(e);
        setTimeout(() => dispatch("getRound"), Math.random() * 500);
      }
    },
    checkForNext: async ({ dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/next/${state.key}`,
          getOptions
        );
        const answer = await res.json();

        if (state.round < answer.round) {
          dispatch("getRound");
        } else {
          setTimeout(() => dispatch("checkForNext"), 5000);
        }
      } catch (e) {
        console.error(e);
        setTimeout(() => dispatch("checkForNext"), Math.random() * 500);
      }
    },
    triggerNext: ({ dispatch, state }) => {
      try {
        let options = JSON.parse(JSON.stringify(postOptions));
        options.body = JSON.stringify({ round: state.round });
        fetch(`http://${server}:${port}/next/${state.key}`, options);
        dispatch("checkForNext");
      } catch (e) {
        console.error(e);
        setTimeout(() => dispatch("triggerNext"), Math.random() * 500);
      }
    },
    rejoin: async ({ commit, dispatch, state }) => {
      try {
        const res = await fetch(
          `http://${server}:${port}/all/${state.key}`,
          getOptions
        );
        const answer = await res.json();
        if (answer.message === "wrongKey") {
          commit("updateStatus", answer.status);
        } else {
          commit("setCourse", answer.course);
          commit("setName", answer.name);
          commit("updateStatus", answer.status);

          if (answer.status === "findTeam") {
            commit("setFoundTeam", answer.foundTeam);
            commit("setMessage", answer.message);
            commit("setRole", answer.role);
            commit("setRound", answer.round);
            commit("setTeam", answer.team);
            commit("setTeammates", answer.teammates);
            commit("setRound", answer.round);
            if (answer.foundTeam) {
              dispatch("getRound");
            }
          }
        }
      } catch (e) {
        console.error(e);
        setTimeout(() => dispatch("rejoin"), Math.random() * 500);
      }
    }
  }
});
