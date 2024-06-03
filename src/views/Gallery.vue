<template>
    <div class="container-fluid gallery" >
        <div class="row">
            <div class="col-sm-12">
                <div class="divCrumbs mt-3">
                    <ol class="breadcrumb crumbs">
                        <li v-for="bread in breadcrumb" :key="bread.text" :class="bread.active == true ? 'breadcrumb-item active' : 'breadcrumb-item'">
                            <router-link v-if="bread.active == false" :to="bread.route">{{bread.text}}</router-link>
                            <span v-if="bread.active == true">{{bread.text}}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="row mb-5">

            <div class="col-sm-12 col-md-1"></div>

            <div class="col-sm-12 col-md-4">
                <h4 class="links">{{$t ('photoG')}}</h4>
                <div>
                    <router-link to="/photoGallery"><img src="../assets/photogallery.jpg" alt="Photo Gallery"></router-link>
                </div>
            </div>

             <div class="col-sm-12 col-md-2"></div>

            <div class="col-sm-12 col-md-4">
                <h4 class="links">{{$t ('videoG')}}</h4>
                <div>
                    <router-link to="/videoGallery"><img src="../assets/videogallery.jpg" alt="Video Gallery"></router-link>
                </div>
            </div>

            <div class="col-sm-12 col-md-1"></div>

        </div>
    </div>
</template>

<style scoped>

    .gallery{
        border-top: 1px solid #155263;
    }


    .links{
        font-family: cursive;
        color: #155263;
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

    img{
        height: 400px;
        width:  100%;
        padding: 5%;
        border-radius: 20%;
        border: solid 2px #ffd360;
    }

    a:hover>img{
        height: 420px;
        width: 110%;
    }


</style>

<script>

    export default{
        name: "Gallery",
        data(){
            return{
                breadcrumb: [{text: this.$t('gallery'), route: '/gallery', active: true}]
            }
        }
    }
</script>
