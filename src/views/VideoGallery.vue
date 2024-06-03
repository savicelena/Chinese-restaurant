<template>
    
    <div class="container-fluid">
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
    export default{
        name: "VideoGallery",
        data(){
            return{
                breadcrumb: [{text: this.$t('gallery'), route: '/gallery', active: false}, {text: this.$t('videoG'), route: '/videoGallery', active: true}]
            }
        }
    }
</script>