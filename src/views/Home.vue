<template>
    <div class="container-fluid" >
        <div class="row" id="pageRow">

            <div class="col-lg-2 col-md-3 col-sm-12 menu">
                <nav class="navbar">
                    <a href="#" @click="changeComponent(0)" class="links">{{$t ('home')}}</a> 
                    <a href="#" @click="changeComponent(1)" class="links">{{$t ('actions')}}</a> 
                    <a href="#" @click="changeComponent(2)" class="links">{{$t ('newWorkers')}}</a> 
                    <a href="#" @click="changeComponent(3)" class="links">{{$t ('bestGraded')}}</a> 
                </nav>
            </div>


            <div class="col-lg-10 col-md-9 col-sm-12" id="main">
                <home-initial v-if="chosen[0] == true"></home-initial>
               <actions v-if="chosen[1] == true"></actions>
               <NewWorkers v-if="chosen[2] == true"></NewWorkers>
               <BestGraded v-if="chosen[3] == true"></BestGraded>
               
            </div>

        </div>
    </div>
    
</template>

<style scoped>

    #main{
        background-image: url("../assets/enterier.jpg");
    }

    #pageRow{
        height: 100vh;
    }

    .navbar {
        justify-content: center;
        display: grid;
    }


    .navbar>a{
        color: #155263;
        font-size: 20px;
        text-align: center;
        padding: 10%;
        
    }

    .menu{
        background-color: #ffd360;
    }

    .links{
        font-family: cursive;
    }
</style>

<script>
import HomeInitial from "@/components/HomeInitial.vue"
import Actions from "@/components/Actions.vue"
import BestGraded from "@/components/BestGraded.vue"
import NewWorkers from "@/components/NewWorkers.vue"

    export default{
        name: "Home",
        components: {
            HomeInitial,
            Actions,
            BestGraded,
            NewWorkers
        },
        data(){
            return {
                chosen: [true, false, false, false]
            }
        },
        methods: {
            changeComponent(num){
                for(let i =0; i <= 3; i++){
                    this.chosen[i] = false;
                }
                this.chosen[num] = true;
            }
        }
    }
</script>