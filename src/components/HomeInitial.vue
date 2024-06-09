<template>
    <div id="mainPageDiv" class="text-center">
        <div>
            <h1 id="welcome">{{$t ('welcome')}}</h1>
            <img src="../assets/plate.png" alt="Plate" id="plate">
        </div>
        
    </div>
</template>

<style scoped>
    @keyframes imgRotate { 
        100% { 
            transform: rotate(360deg); 
        } 
    }
    #plate{
        width: 120px;
        height: 120px;
        animation: imgRotate 70s linear infinite;
        justify-content: left;
    }

    #mainPageDiv{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    
    #welcome{
        font-family: cursive;
        font-weight: bolder;
        font-size: 60px;
        color: #ffd360;
        -webkit-text-stroke: 3px #155263;
    }
</style>

<script>
    export default{
        name: "HomeInitial",
    }
</script>
