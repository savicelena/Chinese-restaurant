<template>
    <div class="container-fluid" >
        <div class="row">

            <div class="col-lg-2 col-md-3 col-sm-12 menu">
                <HomeMenu></HomeMenu>
            </div>


            <div class="col-lg-10 col-md-9 col-sm-12" id="main">
                <div class="divCrumbs mt-3">
                    <ol class="breadcrumb crumbs">
                        <li v-for="bread in breadcrumb" :key="bread.text" :class="bread.active == true ? 'breadcrumb-item active' : 'breadcrumb-item'">
                            <router-link v-if="bread.active == false" :to="bread.route">{{bread.text}}</router-link>
                            <span v-if="bread.active == true">{{bread.text}}</span>
                        </li>
                    </ol>
                </div>
                <Actions></Actions>
                
               
            </div>

        </div>
    </div>
    
</template>

<style scoped>

    #main{
        background-image: url("../assets/enterier.jpg");
    }


    .crumbs{
        background-color: #ffd360;
        justify-content: left;
    }

    .divCrumbs{
        background-color: #ffd360;
        display: inline-block;
        height: 5%;
    }

    .menu{
        background-color: #ffd360;
    }

    a{
        color: #155263;
    }
</style>

<script>
import Actions from "@/components/Actions.vue"
import HomeMenu from "@/components/HomeMenu.vue"

    export default{
        name: "Home",
        components: {
            Actions,
            HomeMenu
        },
        data(){
            return {
                breadcrumb: [{text: this.$t('home'), route: '/', active: false}, {text: this.$t('actions'), route: '', active: true}]
            }
        }
    }
</script>