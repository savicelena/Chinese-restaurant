<template>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <breadcrumb-comp :breadcrumb="breadcrumb"></breadcrumb-comp>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-sm-12 text-center">
                <h3 class="title">{{$t ('videoG')}}</h3>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 mb-5">
                <iframe src="https://www.youtube.com/embed/EmVxWKy_pu0" frameborder="0"></iframe>
                <h5 class="title desc">{{$t ("video1Desc")}}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .title{
        font-family: cursive;
    }

    iframe{
        width: 70%;
        height: 500px;
    }

    a{
        color: #155263;
    }
</style>

<script>
    import BreadcrumbComp from '@/components/BreadcrumbComp.vue'

    export default{
        name: "VideoGallery",
        data(){
            return{
                breadcrumb: [{text: 'gallery', route: '/gallery', active: false}, {text: 'videoG', route: '/videoGallery', active: true}]
            }
        },
        components: {
            BreadcrumbComp
        }
    }
</script>