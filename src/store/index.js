import { createStore } from 'vuex';

function getUniqueId(db) {
  let id = 0;
  for (let i = 0; db && i < db.length; i++) {
    if (db[i].id > id) {
      id = db[i].id;
    }
  }
  return id + 1;
}

export default createStore({
  state: {
    accounts: JSON.parse(localStorage.getItem('accounts')) || [],
    currentAccount: JSON.parse(localStorage.getItem('currentAccount')) || null,
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    orders: JSON.parse(localStorage.getItem('orders')) || [],
    lang: 'sr'
  },
  mutations: {
    setCurrentAccount(state, currentAccount) {
      state.currentAccount = currentAccount;
      localStorage.setItem('currentAccount', JSON.stringify(currentAccount));
    },
    addAccount(state, newAccount) {
      newAccount.id = getUniqueId(state.accounts);
      state.accounts.push(newAccount);
      localStorage.setItem('accounts', JSON.stringify(state.accounts));
      state.currentAccount = newAccount;
      localStorage.setItem('currentAccount', JSON.stringify(newAccount));
    },
    signOut(state) {
      state.currentAccount = null;
      localStorage.removeItem('currentAccount');
    },
    addToCart(state, item) {
      state.cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, item) {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    addOrder(state, order) {
      order.id = getUniqueId(state.orders);
      state.orders.push(order);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    }
  },
  actions: {
    signIn({ commit, state }, { username, password }) {
      return new Promise((resolve, reject) => {
        const account = state.accounts.find(acc => acc.username === username && acc.password === password);
        if (account) {
          commit('setCurrentAccount', account);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      });
    },
    signUp({ commit, state }, newAccount) {
      return new Promise((resolve, reject) => {
        const existingAccount = state.accounts.find(acc => acc.username === newAccount.username);
        if (!existingAccount) {
          commit('addAccount', newAccount);
          resolve();
        } else {
          reject(new Error('Username already exists'));
        }
      });
    },
    signOut({ commit }) {
      commit('signOut');
    },
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item);
    },
    placeOrder({ commit }, order) {
      commit('addOrder', order);
    }
  },
  getters: {
    isSignedIn(state) {
      return state.currentAccount != null;
    },
    account(state) {
      return state.currentAccount;
    },
    cartItems(state) {
      return state.cartItems;
    },
    orders(state) {
      return state.orders;
    }
  }
});
