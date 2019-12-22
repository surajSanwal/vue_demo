import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    update: {}
  },

  mutations: {
    addUser: (state, user) => {
      state.users.push(user);
    },
    updateUser: (state, user, index) => {
      //   let index = state.users.findIndex(item => item.email === user.email);
      //   if (index) {
      state.users[index] = user;
      //   }
    },
    deleteUser: (state, index) => {
      //   let index = state.users.findIndex(item => item.email === user.email);
      //   if (index) {
      state.users.splice(index, 1);
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
