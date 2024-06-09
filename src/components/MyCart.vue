<template>
    <div class="container">
        <hr>
        <h3>{{ tr(msg.myCart) }}:</h3>
        <div v-if="cartItems.length > 0">
            <div v-for="(cartItem, index) in cartItems" :key="index" class="cart-item" style="margin-left: 10%;">
                <div class="cart-item-info">
                    <h5>{{ cartItem.name[this.$i18n.locale] }}</h5>
                    <p>
                        <button @click="decreaseQuantity(cartItem)">-</button>
                        <span>{{ cartItem.quantity }}</span>
                        <button @click="increaseQuantity(cartItem)">+</button>
                    </p>
                    <p>{{ tr(msg.type) }}: {{ cartItem.type }}</p>
                    <p>{{ tr(msg.price) }}: {{ cartItem.price }}</p>
                </div>
                <button class="btn btn-outline-dark" @click="removeFromCart(cartItem)">
                    {{ tr(msg.remove) }}
                </button>
                &nbsp;
                <button class="btn btn-outline-dark" @click="orderFromCart(cartItem)">
                    {{ tr(msg.order) }}
                </button>
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
                const basket = JSON.parse(localStorage.getItem("basket")) || [];
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
        removeFromCart(cartItem) {
            try {
                const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
                if (currentAccount) {
                    const username = currentAccount.username;
                    let basket = JSON.parse(localStorage.getItem("basket")) || [];
                    const userCart = basket.find(user => user.username === username);
                    if (userCart) {
                        const dishIndex = userCart.dishes.findIndex(
                            dish => dish.name.en === cartItem.name.en && dish.type === cartItem.type
                        );
                        if (dishIndex > -1) {
                            userCart.dishes.splice(dishIndex, 1);
                            if (userCart.dishes.length === 0) {
                                const userIndex = basket.findIndex(user => user.username === username);
                                basket.splice(userIndex, 1);
                            }
                            localStorage.setItem("basket", JSON.stringify(basket));
                            this.fetchCartItems();
                        }
                    }
                }
            } catch (error) {
                console.error("Error removing item from cart:", error);
            }
        },
        tr(messages) {
            return messages[this.$i18n.locale];
        },
        orderFromCart(cartItem) {
            try {
                const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
                if (currentAccount) {
                    const username = currentAccount.username;
                    let orders = JSON.parse(localStorage.getItem("orders")) || [];
                    const userOrders = orders.find(user => user.username === username);

                    if (userOrders) {
                        userOrders.dishes.push(cartItem);
                    } else {
                        orders.push({
                            username: username,
                            dishes: [cartItem]
                        });
                    }

                    localStorage.setItem("orders", JSON.stringify(orders));
                    this.removeFromCart(cartItem);
                } else {
                    let msg = this.$i18n.locale === 'en' ? "You must sign in to place an order." : "Morate se prijaviti da biste izvršili narudžbinu.";
                    alert(msg);
                }
            } catch (error) {
                console.error("Error ordering item from cart:", error);
            }
        },
        increaseQuantity(cartItem) {
            cartItem.quantity++;
            this.updatePrice(cartItem, cartItem.quantity-1);
        },
        decreaseQuantity(cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                this.updatePrice(cartItem, cartItem.quantity+1);
            }
        },
        updatePrice(cartItem, prevQuantity) {
            let sumPrice = parseFloat(cartItem.price);
            let portionPrice = sumPrice / prevQuantity;
            let quantity = parseInt(cartItem.quantity);
            let price = quantity * portionPrice;
            cartItem.price = price.toFixed(2);
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
