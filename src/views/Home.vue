<template>
    <div class="container-fluid" >
        <div class="row">

            <div class="col-lg-2 col-md-3 col-sm-12 menu">
                <HomeMenu></HomeMenu>
            </div>


            <div class="col-lg-10 col-md-9 col-sm-12" id="main">
                <breadcrumb-comp :breadcrumb="breadcrumb"></breadcrumb-comp>
                <home-initial></home-initial>
               
            </div>

        </div>
    </div>
    
</template>

<style scoped>

    #main{
        background-image: url("../assets/enterier.jpg");
    }


    .menu{
        background-color: #ffd360;
    }

    a{
        color: #155263;
    }
</style>

<script>
import HomeInitial from "@/components/HomeInitial.vue"
import HomeMenu from "@/components/HomeMenu.vue"
import BreadcrumbComp from '@/components/BreadcrumbComp.vue'

    export default{
        name: "Home",
        components: {
            HomeInitial,
            HomeMenu,
            BreadcrumbComp
        },
        data(){
            return {
                breadcrumb: [{text: 'home', route: '/', active: true}]
            }
        }
    }
</script>