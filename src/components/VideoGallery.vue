<template>
    
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-sm-12 text-center">
                <h3 class="title">{{$t ('videoG')}}</h3>
            </div>
        </div>
        <div class="row videoRow mt-3">
            <div class="col-sm-12">
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

    .videoRow{
        height: 50vh;
    }

    iframe{
        width: 70%;
        height: 100%;
    }
</style>

<script>
    export default{
        name: "VideoGallery"
    }
</script>