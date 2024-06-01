<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="download-menu">
                    <h1 class="mb-3">{{$t('Food menu')}}</h1>
                    <a href="/files/menu.pdf" download>
                        <img src="@/assets/icons/download.jpg" alt="Download Menu" width="20px" height="20px">
                        <div class="menu-text">
                            <span class="bold">{{$t('Download Menu')}}</span>
                        </div>
                    </a>
                </div>
                <!-- Dugme za sortiranje -->
                <div class="sort-menu mt-3">
                    <button class="sort-button" @click="toggleDropdown">
                        Sortiraj
                    </button>
                    <ul v-if="showDropdown" class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click.prevent="sortMenu('price')">{{ $t('Sort by Price') }}</a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="sortMenu('name')">{{ $t('Sort by Name') }}</a></li>
                    </ul>
                </div>
            </div>
            <div class="menu">
                <nav class="navbar">
                    <a href="#" @click.prevent="changeComponent(0)">
                        <img src="@/assets/icons/mainCourse.png" alt="Main Course">
                        <div class="menu-text">
                            <span class="bold">{{$t('mainCourse')}}</span>
                        </div>
                    </a> 
                    <a href="#" @click.prevent="changeComponent(1)">
                        <img src="@/assets/icons/desserts.png" alt="Dessert">
                        <div class="menu-text">
                            <span class="bold">{{$t('dessert')}}</span>
                        </div>
                    </a>
                    <a href="#" @click.prevent="changeComponent(2)">
                        <img src="@/assets/icons/appetizer.png" alt="Appetizer">
                        <div class="menu-text">
                            <span class="bold">{{$t('appetizer')}}</span>
                        </div>
                    </a>
                </nav>
            </div>
            
            <div class="col-lg-10 col-md-9 col-sm-12" id="main">
                <main-course v-if="chosen[0]" :items="sortedItems" :sortType="sortType"></main-course>
                <dessert v-if="chosen[1]" :items="sortedItems" :sortType="sortType"></dessert>
                <appetizer v-if="chosen[2]" :items="sortedItems" :sortType="sortType"></appetizer>
            </div>
        </div>
    </div>   
</template>

<script>
import MainCourse from "@/components/MainCourse.vue";
import Dessert from "@/components/DessertMenu.vue";
import Appetizer from "@/components/AppetizerMenu.vue";
import mainCourses from "@/data/mainCourse.json";
import desserts from "@/data/desserts.json";
import appetizers from "@/data/appetizers.json";

export default {
    name: "MenuFood",
    components: {
        MainCourse,
        Dessert,
        Appetizer
    },
    data() {
        return {
            chosen: [true, false, false],
            sorted: false,
            sortType: '',
            showDropdown: false,
            foodData: mainCourses // Početni podaci su za glavna jela
        }
    },
    computed: {
        sortedItems() {
            let sortedData = [...this.foodData];
            if (this.sorted) {
                if (this.sortType === 'price') {
                    sortedData.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
                } else if (this.sortType === 'name') {
                    sortedData.sort((a, b) => a.name.localeCompare(b.name));
                }
            }
            return sortedData;
        }
    },
    methods: {
        changeComponent(num) {
            this.chosen = [false, false, false];
            this.chosen[num] = true;
            if (num === 0) {
                this.foodData = mainCourses;
            } else if (num === 1) {
                this.foodData = desserts;
            } else if (num === 2) {
                this.foodData = appetizers;
            }
        },
        sortMenu(type) {
            this.sortType = type;
            this.sorted = true;
            this.showDropdown = false;
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    }
}
</script>

<style scoped>
.menu {
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

.navbar a img {
    width: 40px;
    height: 40px;
}

.menu-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu-text .bold {
    font-weight: bold;
    color: #000;
}

.sort-menu {
    position: relative;
    display: inline-block;
}

.sort-button {
    background-color: #ff9900; /* Narandžasta boja za dugme */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.sort-button:hover {
    background-color: #e68a00; /* Tamnija nijansa narandžaste za hover */
}

.dropdown-menu {
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: white;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1000;
    display: block;
    width: 100%;
    padding: 0;
}

.dropdown-item {
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    display: block;
    width: 100%;
    clear: both;
    color: #000;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}
</style>
