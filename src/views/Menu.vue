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
                <main-course v-if="chosen[0]"></main-course>
                <dessert v-if="chosen[1]"></dessert>
                <appetizer v-if="chosen[2]"></appetizer>
            </div>
        </div>
    </div>   
</template>

<script>
import MainCourse from "@/components/MainCourse.vue"
import Dessert from "@/components/Dessert.vue"
import Appetizer from "@/components/Appetizer.vue"

export default {
    name: "Menu",
    components: {
        MainCourse,
        Dessert,
        Appetizer
    },
    data() {
        return {
            chosen: [true, false, false]  // Dva indeksa za dve komponente
        }
    },
    methods: {
        changeComponent(num) {
            this.chosen = [false, false, false];  // Resetujemo sve na false
            this.chosen[num] = true;  // Samo izabrani postavljamo na true
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
</style>
