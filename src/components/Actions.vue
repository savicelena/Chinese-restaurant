<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <h1 id="labelName">{{$t ('ourOffer')}}</h1>
            </div>
        </div>
        <div class="row actionRow">
            <div class="col-sm-12 col-lg-6 text-center colAction">
                <div class="carouselExampleIndicators carousel slide" id= "carousel1" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel1" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div>
                                <h3 class="foodName">{{$t ('recc4')}}</h3>
                                <img class="d-block w-100"  src="../assets/mala.jpg" alt="First slide">
                                <h3 class="foodName">{{$t ('action21')}}</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div>
                                <h3 class="foodName">{{$t ('recc5')}}</h3>
                                <img class="d-block w-100"  src="../assets/dumplings.jpg" alt="Second slide">
                                <h3 class="foodName">{{$t ('action22')}}</h3>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6 text-center colAction">
                 <div class="carouselExampleIndicators carousel slide" id="carousel2" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel2" data-slide-to="1"></li>
                        <li data-target="#carousel2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div>
                                <h3 class="foodName">{{$t ('recc1')}}</h3>
                                <img class="d-block w-100"  src="../assets/spicySoup.jpg" alt="First slide">
                                <h3 class="foodName">{{$t ('action11')}}</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div>
                                <h3 class="foodName">{{$t ('recc2')}}</h3>
                                <img class="d-block w-100"  src="../assets/chickenBlackBean.jpg" alt="Second slide">
                                <h3 class="foodName">{{$t ('action12')}}</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div>
                                <h3 class="foodName">{{$t ('recc3')}}</h3>
                                <img class="d-block w-100"  src="../assets/nianGao.jpg" alt="First slide">
                                <h3 class="foodName">{{$t ('action13')}}</h3>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .actionRow{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    #labelName{
        font-family: cursive;
        font-weight: bolder;
        font-size: 60px;
        color: #ffd360;
        -webkit-text-stroke: 3px #155263;
        padding: 5%;
    }
    img{
        height: 300px;
    }
    .carouselExampleIndicators{
        width: 50%;
        background-color: rgb(225, 207, 83, .5);
        padding: 5%;
        border-radius: 10%;
        width: 70%;
        margin-bottom: 5%;
    }
    .foodName{
        font-family: cursive;
        font-weight: bolder;
        font-size: 30px;
        color: #155263;
        -webkit-text-stroke: 1px #ffd360;;
        padding: 2%;
    }
    .colAction{
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
</style>
<script>
    export default{
        name: "Actions"
    }
</script>