<template>
    <div class="menu">
        <nav class="navbar">
            <router-link to="/offers" class="links">{{$t ('actions')}}</router-link>
            <router-link to="/newWorkers" class="links">{{$t ('newWorkers')}}</router-link>
            <router-link to="/bestGraded" class="links">{{$t ('bestGraded')}}</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .navbar {
        justify-content: center;
        display: grid;
    }


    .navbar>a{
        color: #155263;
        font-size: 20px;
        text-align: center;
        padding: 10%;
        
    }

    .menu{
        background-color: #ffd360;
    }

    .links{
        font-family: cursive;
        text-decoration: none;
    }
</style>

<script>
    export default{
        name: 'HomeMenu'
    }
</script>
