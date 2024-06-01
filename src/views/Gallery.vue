<template>
    <div class="container-fluid gallery" >
        <div class="row" id="pageRow">

            <div class="col-lg-2 col-md-3 col-sm-12 menuGallery">
                <nav class="navbar">
                    <a href="#" @click.prevent="changeComponent(0)" class="links">{{$t ('photoG')}}</a> 
                    <a href="#" @click.prevent="changeComponent(1)" class="links">{{$t ('videoG')}}</a> 
                </nav>
            </div>


            <div class="col-lg-10 col-md-9 col-sm-12">
                <PhotoGallery v-if="chosen[0] == true"></PhotoGallery>
                <VideoGallery v-if="chosen[1] == true"></VideoGallery>
            </div>

        </div>
    </div>
</template>

<style scoped>

    .gallery{
        border-top: 1px solid #155263;
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

    .menuGallery{
        background-color: #ffd360;
    }

    .links{
        font-family: cursive;
    }
</style>

<script>
    import PhotoGallery from "@/components/PhotoGallery.vue"
    import VideoGallery from "@/components/VideoGallery.vue"

    export default{
        name: "Gallery",
        components:{
            PhotoGallery,
            VideoGallery
        },
        data(){
            return{
                chosen: [true, false]
            }
        },
        methods:{
            changeComponent(comp){
                this.chosen[(comp+1)%2] = false;
                this.chosen[comp] = true;
            }
        }
    }
</script>
