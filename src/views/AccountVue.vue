<template>
    <div class="my-account grad">
        <div class="welcome">
            <h6>{{ tr(msg.welcome) }} {{ account ? account.username : '' }}</h6>
            <button class="btn btn-outline-dark" @click="handleSignOut">{{ tr(msg.signOut) }}</button>
        </div>
        <hr>
        <div class="tabs">
            <nav class="navbar">
                <a href="#" @click.prevent="changeTab(0)">
                    <img src="@/assets/icons/cart.png" alt="Cart" class="icon" style="width: 60px; height: 60px">
                    <div class="tab-text">
                        <span class="bold">{{ tr(msg.myCart) }}</span>
                    </div>
                </a>
                <a href="#" @click.prevent="changeTab(1)">
                    <img src="@/assets/icons/truck.png" alt="Orders" class="icon" style="width: 60px; height: 60px">
                    <div class="tab-text">
                        <span class="bold">{{$t('My orders')}}</span>
                    </div>
                </a>
            </nav>
        </div>
        <div class="content">
            <MyCartVue v-if="selectedTab === 0" :msg="msg" />
            <MyOrdersVue v-if="selectedTab === 1" :msg="msg"/>
        </div>
    </div>
</template>


<style scoped>
.grad {
    background-color: #ffd360;
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
    align-items: center;
    padding: 10px;
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

.navbar a img.icon {
    width: 60px; 
    height: 60px; 
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
    background-color: #ffffff;
}

.btn-outline-dark {
    background-color: #ffffff;
    color: #000;
    border: 1px solid #000;
}

.btn-outline-dark:hover {
    background-color: #000;
    color: #ffffff;
}
</style>


<script>
import MyCartVue from '@/components/MyCart.vue';
import MyOrdersVue from '@/components/MyOrders.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MyAccount',
    components: {
        MyCartVue,
        MyOrdersVue,
    },
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
                signOut: {
                    sr: 'Odjavi se',
                    en: 'Sign Out'
                }
            }
        }
    },
    computed: {
        ...mapGetters(['account'])
    },
    methods: {
        ...mapActions(['signOut']),
        changeTab(num) {
            this.selectedTab = num;
        },
        tr(messages) {
            return messages[this.$store.state.lang];
        },
        handleSignOut() {
            this.signOut().then(()=>{
                this.$router.push({ name: 'CheckSignIn' });
            });
            
        }
    }
}
</script>

