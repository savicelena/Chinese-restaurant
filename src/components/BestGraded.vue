<template>
    <div class="container-fluid">
        <div class="row">
            
            <div class="col-sm-12 text-center divGrades text">
                <div v-for="grade in sortedGrades" :key="grade.name" class="grades">
                    <h2>{{grade.name[this.$i18n.locale]}}</h2>
                    <img :src="grade.photo" alt="">
                    <h5>{{grade.avg}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img{
        height: 200px;
        width: 200px;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .grades{
        background-color: rgb(225, 207, 83, .5);
        margin-top: 5%;
        margin-bottom: 5%;
        width: 50%;
        padding: 2%;
    }
    .divGrades{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text{
        font-family: cursive;
        font-weight: bolder;
    }
</style>

<script>
    export default{
        name: "BestGraded",
        data(){
            return{
                sortedGrades: ""
            }
        },
        created(){
            let allGrades = JSON.parse(localStorage.getItem("grades"));
            this.sortedGrades = allGrades.sort((e1, e2) => e2.avg - e1.avg)
            let len = this.sortedGrades.length;
            let i = 3;
            let num = 3;
            do{
                this.sortedGrades.splice(i, 1);
                num++;
            }while(num < len)
        }
    }
</script>