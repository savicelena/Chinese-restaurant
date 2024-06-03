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
                <div class="divCrumbs mt-3">
                    <ol class="breadcrumb crumbs">
                        <li v-for="bread in breadcrumb" :key="bread.text" :class="bread.active == true ? 'breadcrumb-item active' : 'breadcrumb-item'">
                            <router-link v-if="bread.active == false" :to="bread.route">{{bread.text}}</router-link>
                            <span v-if="bread.active == true">{{bread.text}}</span>
                        </li>
                    </ol>
                </div>
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

    .crumbs{
        background-color: #ffd360;
        justify-content: left;
    }

    .divCrumbs{
        background-color: #ffd360;
        display: inline-block;
        height: 5%;
    }

    a{
        color: #155263;
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
                chosen: [true, false],
                breadcrumb: [{text: this.$t('gallery'), route: '/gallery', active: false}, {text: this.$t('photoG'), route: '', active: true}]
            }
        },
        methods:{
            changeComponent(comp){
                this.chosen[(comp+1)%2] = false;
                this.chosen[comp] = true;
                switch(comp){
                    case 0:
                        this.breadcrumb = [{text: this.$t('gallery'), route: '/gallery', active: false}, {text: this.$t('photoG'), route: '', active: true}];
                        break;
                    case 1:
                        this.breadcrumb = [{text: this.$t('gallery'), route: '/gallery', active: false}, {text: this.$t('videoG'), route: '', active: true}];
                        break;
                }
            }
        }
    }
</script>
