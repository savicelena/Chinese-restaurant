<template>
    <!-- <div class="container-xxl py-5"> -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
              <BreadcrumbComp :breadcrumb="breadcrumb"></BreadcrumbComp>
          </div>
        </div>
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

          <div class="sort-menu mt-3">
            <button class="sort-button" @click="toggleDropdown">
              {{$t('Sort')}}
            </button>
            <ul v-if="showDropdown" class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="sortMenu('price')">{{ $t('Sort by Price') }}</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="sortMenu('name')">{{ $t('Sort by Name') }}</a>
              </li>
            </ul>
          </div>
          <div class="search-menu mt-3">
            <input type="text" v-model="searchQueryName" @input="filterMenu" :placeholder="$t('Search by Name')">
          </div>
          <div class="search-menu mt-3">
            <input type="text" v-model="searchQueryPrice" @input="filterMenu" :placeholder="$t('Search by Price')">
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
        <div class="col-lg-10 col-md-9 col-sm-12" id="main" style="margin-left: 20%;">
          <div v-if="chosen[0]">
            <main-course :items="filteredItems" @food-selected="navigateToFoodDetail"></main-course>
          </div>
          <div v-if="chosen[1]">
            <dessert :items="filteredItems" @food-selected="navigateToFoodDetail"></dessert>
          </div>
          <div v-if="chosen[2]">
            <appetizer :items="filteredItems" @food-selected="navigateToFoodDetail"></appetizer>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </template>
  
  <script>
  import MainCourse from "@/components/MainCourse.vue";
  import Dessert from "@/components/DessertMenu.vue";
  import Appetizer from "@/components/AppetizerMenu.vue";
  import mainCourses from "@/data/mainCourse.json";
  import desserts from "@/data/desserts.json";
  import appetizers from "@/data/appetizers.json";
  import BreadcrumbComp from '@/components/BreadcrumbComp.vue'
  
  export default {
    name: "MenuFood",
    components: {
      MainCourse,
      Dessert,
      Appetizer,
      BreadcrumbComp
    },
    data() {
      return {
        chosen: [true, false, false],
        sorted: false,
        sortType: '',
        showDropdown: false,
        searchQueryName: '',
        searchQueryPrice: '',
        foodData: mainCourses,
        breadcrumb: [{text: 'menu', route: '/menu', active: true}]
      };
    },
    computed: {
      sortedItems() {
        let sortedData = [...this.foodData];
        if (this.sorted) {
          if (this.sortType === 'price') {
            sortedData.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
          } else if (this.sortType === 'name') {
            sortedData.sort((a, b) => a.name[this.$i18n.locale].localeCompare(b.name[this.$i18n.locale]));
          }
        }
        return sortedData;
      },
      filteredItems() {
        let filteredData = this.sortedItems;
        if (this.searchQueryName) {
          filteredData = filteredData.filter(item => item.name[this.$i18n.locale].toLowerCase().includes(this.searchQueryName.toLowerCase()));
        }
        if (this.searchQueryPrice) {
          filteredData = filteredData.filter(item => item.price.replace('$', '').includes(this.searchQueryPrice));
        }
        return filteredData;
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
      },
      filterMenu() {
        this.searchQueryName = this.searchQueryName.trim();
        this.searchQueryPrice = this.searchQueryPrice.trim();
      },
    viewDetail(item) {
      this.$router.push({ name: 'FoodDetail', params: { food: item } });
    }
    }
  };
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
    background-color: #ff9900; 
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .sort-button:hover {
    background-color: #e68a00; 
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
  
  .search-menu {
    display: inline-block;
    margin-left: 10px;
  }
  
  .search-menu input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>
  