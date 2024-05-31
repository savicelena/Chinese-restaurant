<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-sm-12 text-center imgDiv" data-aos="fade-up" data-aos-delay="200">
                <div class="card" style="width: 18rem;">
                    <div class="imgDiv">
                         <img class="card-img-top" src="../assets/newWorker1.jpg" alt="New worker">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ $t ('newWorker1Name')}}</h5>
                        <p class="card-text">{{$t ('newWorker1Description')}}</p>
                        <router-link to="/about" class="btn btn-danger">{{$t ('learnMore')}}</router-link>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-sm-12 imgDiv" data-aos="fade-up" data-aos-delay="300">
                <div class="card text-center" style="width: 18rem;">
                    <div class="imgDiv">
                         <img class="card-img-top" src="../assets/newWorker2.jpg" alt="New worker">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ $t ('newWorker2Name')}}</h5>
                        <p class="card-text">{{$t ('newWorker2Description')}}</p>
                        <router-link to="/about" class="btn btn-danger">{{$t ('learnMore')}}</router-link>
                    </div>
                </div>
            </div>


        </div>
    </div>
    
</template>

<style scoped>
   

    img{
        width: 200px;
        height: 200px;
    }

    .imgDiv{
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 10%;
    }
</style>

<script>
    export default{
        name: "NewWorkers"
    }
</script>