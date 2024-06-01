<template>
    <div class="container-fluid">
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

    #title{
        font-family: cursive;
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

    
</style>

<script>
    import images from "../data/gallery.js"

    export default{
        name: "PhotoGallery",
        data(){
            return{
                allImages: '',
                clicked: ''
            }
        }, created(){
            this.allImages = images;
            console.log(images);
        }
    }
</script>
