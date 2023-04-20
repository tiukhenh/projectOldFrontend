import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    username: 0
  },
  mutations: {
    login(state,username){
        state.username = username;
        localStorage.setItem('username', username);
        alert('log in');
    },
    logout(state){
        state.username="";
        localStorage.removeItem('username');
        alert('log out');
    },
    initializeStore(state){
        if(localStorage.getItem('username')){
            state.username = localStorage.getItem('username');
        }
    }
  },
  getters: {
  },
  actions: {
    login({commit}, username) {
      commit('login', username);
    },
  },
  modules: {
  }
});