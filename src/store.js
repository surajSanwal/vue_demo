import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    update: {}
  },

  mutations: {
    getUsers: async state => {
      let users = await localStorage.getItem("users");
      state.users = users;
    },
    addUser: (state, user) => {
      state.users.push(user);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUser: (state, user, index) => {
      //   let index = state.users.findIndex(item => item.email === user.email);
      //   if (index) {
      state.users[index] = user;
      localStorage.setItem("users", JSON.stringify(state.users));
      //   }
    },
    deleteUser: (state, index) => {
      //   let index = state.users.findIndex(item => item.email === user.email);
      //   if (index) {
      state.users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(state.users));
      //   }
    },
    setUpdate: (state, index) => {
      state.update = state.users[index];
    }
  },
  actions: {
    async addUserAction({ commit }, user) {
      commit("addUser", user);
    },

    async updateUserAction({ commit }, user, index) {
      commit("updateUser", user, index);
    },

    async deleteUserAction({ commit }, index) {
      commit("deleteUser", index);
    },

    async setUpdateAction({ commit }, index) {
      commit("setUpdate", index);
    }
  },
  getters: {
    getUpdated: state => state.update
  }
});
