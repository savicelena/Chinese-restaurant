<template>
  <div class="my-account grad">
      
      <hr>
      <div class="tabs">
          <nav class="navbar">
              <a href="#" @click.prevent="changeTab(0)">
                  <div class="tab-text">
                      <span class="bold">{{ tr(msg.myCart) }}</span>
                  </div>
              </a>
              <a href="#" @click.prevent="changeTab(1)">
                  <div class="tab-text">
                      <span class="bold">{{ tr(msg.myOrders) }}</span>
                  </div>
              </a>
          </nav>
      </div>
      <div class="content">
          <div v-if="selectedTab === 0">
              <h3>{{ tr(msg.myCart) }}:</h3>
              <table class="table">
                  <thead v-show="myCart.length > 0">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">{{ tr(msg.item) }}</th>
                          <th scope="col">{{ tr(msg.quantity) }}</th>
                          <th scope="col">{{ tr(msg.remove) }}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(item, index) in myCart" :key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ item.name }}</td>
                          <td>{{ item.quantity }}</td>
                          <td class="delbut">
                              <button class="btn btn-outline-dark" @click="removeFromCart(item)">
                                  {{ tr(msg.remove) }}
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div v-if="selectedTab === 1">
              <h3>{{ tr(msg.myOrders) }}:</h3>
              <table class="table table-striped">
                  <thead v-show="myOrders.length > 0">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">{{ tr(msg.orderId) }}</th>
                          <th scope="col">{{ tr(msg.date) }}</th>
                          <th scope="col">{{ tr(msg.total) }}</th>
                          <th scope="col">{{ tr(msg.status) }}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(order, index) in myOrders" :key="index">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ order.id }}</td>
                          <td>{{ order.date }}</td>
                          <td>{{ order.total }}</td>
                          <td>{{ order.status }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<style scoped>
.grad {
  background-color: rgb(229, 158, 158);
}

.my-account,
th,
td,
tr,
a {
  color: rgb(0, 0, 0);
  font-size: 18px;
}

h6 {
  font-weight: bold;
}

.welcome {
  display: flex;
  justify-content: space-between;
}

.sobtn {
  margin: 10px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.navbar {
  display: flex;
  gap: 20px;
}

.navbar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.tab-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-text .bold {
  font-weight: bold;
  color: #000;
}

.content {
  margin-top: 20px;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyAccount',
  data() {
      return {
          selectedTab: 0,
          msg: {
              welcome: {
                  sr: 'Dobrodošli',
                  en: 'Welcome'
              },
              myCart: {
                  sr: 'Moja korpa',
                  en: 'My Cart'
              },
              item: {
                  sr: 'Proizvod',
                  en: 'Item'
              },
              quantity: {
                  sr: 'Količina',
                  en: 'Quantity'
              },
              remove: {
                  sr: 'Ukloni',
                  en: 'Remove'
              },
              signOut: {
                  sr: 'Odjavi se',
                  en: 'Sign Out'
              },
              myOrders: {
                  sr: 'Moje narudžbine',
                  en: 'My Orders'
              },
              orderId: {
                  sr: 'ID narudžbine',
                  en: 'Order ID'
              },
              date: {
                  sr: 'Datum',
                  en: 'Date'
              },
              total: {
                  sr: 'Ukupno',
                  en: 'Total'
              },
              status: {
                  sr: 'Status',
                  en: 'Status'
              }
          }
      }
  },
  computed: {
      myCart() {
          return this.$store.state.cartItems;
      },
      myOrders() {
          return this.$store.state.orders.filter(order => order.accountId === this.account.id);
      },
      ...mapGetters(['account'])
  },
  methods: {
      ...mapActions(['signOut', 'removeFromCart']),
      changeTab(num) {
          this.selectedTab = num;
      },
      tr(messages) {
          return messages[this.$store.state.lang];
      }
  }
}
</script>
