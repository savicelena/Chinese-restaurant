<template>
    <div class="container-fluid" >
        <div class="row">
            <div class="col-sm-12">
                <BreadcrumbComp :breadcrumb="breadcrumb"></BreadcrumbComp>
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

    .links{
        font-family: cursive;
        color: #155263;
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
    import BreadcrumbComp from '@/components/BreadcrumbComp.vue'

    export default{
        name: "Gallery",
        components: {
            BreadcrumbComp
        },
        data(){
            return{
                breadcrumb: [{text: 'gallery', route: '/gallery', active: true}]
            }
        }
    }
</script>
