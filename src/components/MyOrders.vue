<template>
    <div class="container">
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-lg-6 d-flex align-items-center mb-4">
                <router-link :to="'/menu/' + item.id">
                    <img class="flex-shrink-0 img-fluid rounded" :src="item.photo" alt="" style="width: 80px;">
                    <div class="w-100 d-flex flex-column text-start ps-4">
                        <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>{{ item.name[this.$i18n.locale] }}</span>
                            <span class="text-primary">&nbsp;&nbsp;{{ item.price }}</span>
                        </h5>
                        <small class="fst-italic truncate">{{ item.desc[this.$i18n.locale] }}</small>
                    </div>
                </router-link>
            </div>
        </div>
        <hr>
        <h3>{{$t('My orders')}}:</h3>
        <div v-if="cartItems.length > 0">
            <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-item" style="margin-left: 15%;">
                <div class="cart-item-info">
                    <h5>{{ cartItem.name[this.$i18n.locale] }}</h5>
                    <p>{{ tr(msg.quantity) }}: {{ cartItem.quantity }}</p>
                    <p>{{ tr(msg.type) }}: {{ cartItem.type }}</p>
                    <p>{{ tr(msg.price) }}: {{ cartItem.price }}</p>
                </div>
                <div>
                    <label>{{$t('Your order is on the way!')}}</label>
                </div>
            </div>
        </div>
        <div v-else>
            <p>{{ tr(msg.noItemsInCart) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            cartItems: [],
            msg: {
                myCart: {
                    sr: 'Moja korpa',
                    en: 'My Cart'
                },
                quantity: {
                    sr: 'Količina',
                    en: 'Quantity'
                },
                type: {
                    sr: 'Tip',
                    en: 'Type'
                },
                price: {
                    sr: 'Cena',
                    en: 'Price'
                },
                remove: {
                    sr: 'Ukloni',
                    en: 'Remove'
                },
                noItemsInCart: {
                    sr: 'Nema artikala u korpi',
                    en: 'No items in the cart'
                },
                order: {
                    sr: 'Poruči',
                    en: 'Order'
                }
            }
        }
    },
    created() {
        this.fetchItems();
        this.fetchCartItems();
    },
    methods: {
        fetchItems() {
        },
        fetchCartItems() {
            try {
                const basket = JSON.parse(localStorage.getItem("orders")) || [];
                const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

                if (currentAccount) {
                    const username = currentAccount.username;
                    const userCart = basket.find(user => user.username === username);
                    if (userCart) {
                        this.cartItems = userCart.dishes;
                    } else {
                        this.cartItems = [];
                    }
                } else {
                    this.cartItems = [];
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
                this.cartItems = [];
            }
        },
        
        tr(messages) {
            return messages[this.$i18n.locale];
        }
        
    }
}
</script>

<style scoped>
.grad {
    background-color: rgb(61, 23, 23);
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

.navbar a img.icon {
    width: 24px;
    height: 24px;
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

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h5,
.cart-item-info p {
    margin: 0;
}
</style>
