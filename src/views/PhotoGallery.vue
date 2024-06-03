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
                <h3 id="title">{{$t ('photoG')}}</h3>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 tableDiv">
                <table id="table">
                    <tr v-for='(image, index) in allImages' :key="index" class="mt-3">
                        <td v-for='link in image' :key="link">
                            <a :href="link"><img :src="link" alt="Image" :id="index"></a>
                        </td>
                    </tr>
                </table>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .crumbs{
        background-color: #ffd360;
        justify-content: left;
    }

    .divCrumbs{
        background-color: #ffd360;
        display: inline-block;
        height: 5%;
    }

    #title{
        font-family: cursive;
        color: #155263;
    }

    img{
        width: 80%;
        height: 50%;
        padding: 5%;
    }

    a:hover>img{
        width: 100%;
        height: 80%;
        border: solid 2px #ffd360;
    }

    .tableDiv{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #table>td{
        padding: 10px;
    }
    
    a{
        color: #155263;
    }

    
</style>

<script>
    import images from "../data/gallery.js"

    export default{
        name: "PhotoGallery",
        data(){
            return{
                allImages: '',
                clicked: '',
                breadcrumb: [{text: this.$t('gallery'), route: '/gallery', active: false}, {text: this.$t('photoG'), route: '/photoGallery', active: true}]
            }
        }, created(){
            this.allImages = images;
            console.log(images);
        }
    }
</script>
