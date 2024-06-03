<template>
    <div class="container-fluid" >
        <div class="row">

            <div class="col-lg-2 col-md-3 col-sm-12 menu">
                <HomeMenu></HomeMenu>
            </div>


            <div class="col-lg-10 col-md-9 col-sm-12" id="main">
                <breadcrumb-comp :breadcrumb="breadcrumb"></breadcrumb-comp>
                <BestGraded></BestGraded>
                
               
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
import BestGraded from "@/components/BestGraded.vue"
import HomeMenu from "@/components/HomeMenu.vue"
import BreadcrumbComp from '@/components/BreadcrumbComp.vue'

    export default{
        name: "Home",
        components: {
            BestGraded,
            HomeMenu,
            BreadcrumbComp
        },
        data(){
            return {
                breadcrumb: [{text: 'home', route: '/', active: false}, {text: 'bestGraded', route: '', active: true}]
            }
        }
    }
</script>