<template>
    <header id="headerDiv">
        <img src="../assets/logo.jpg" alt="Logo" id="logo">
        <div class="text-center mt-2">
            <h3 id="name" >Xìng fú<p id="opening">{{$t ('opening')}}</p></h3>
        </div>
        
    </header>
</template>

<style scoped>
    #headerDiv{
        background-color:#ffd360;
        padding: 1%;
        display: flex;
        justify-content: left;
        border-bottom: 1px solid #155263; 
    }

    #logo{
       width: 110px;
       height: 75px;
       border: solid 2px;
    }

    #name{
        margin-left: 1%;
        color: #155263;
        font-family: cursive;
        font-weight: bolder;
        text-align: center;
    }

    #opening{
        font-size: 10px;
    }
</style>

<script>

    export default{
        name: "Header"
    }
</script>
