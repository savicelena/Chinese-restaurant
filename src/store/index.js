// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,  
  },
  getters: {
    isSignedIn: state => !!state.user, 
    getUser: state => state.user, 
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;  
    },
    CLEAR_USER(state) {
      state.user = null;  
    },
  },
  actions: {
    signIn({ commit }, user) {
      
      commit('SET_USER', user);
    },
    signOut({ commit }) {
      
      commit('CLEAR_USER');
    },
  },
  modules: {
   
  }
});
