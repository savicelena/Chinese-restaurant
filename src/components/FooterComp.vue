<template>
    <footer id="footer" class="text-center">
        <h3 class="text">{{$t ('footer')}}</h3>
    </footer>
</template>

<style scoped>
    #footer{
        background-color: #ffd360;
        border-top: 1px solid #155263;
        border-bottom: 1px solid #155263;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text{
        font-family: cursive;
        color: #155263;
        font-size: 12px;
        margin: auto;
    }
</style>

<script>
    export default{
        name: "FooterComp"
    }
</script>
