<template>
<div class="container">
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-custom col-sm-12">
        <ul class="navbarUl">
            <li><router-link to="/" class="link">{{$t ('home')}}</router-link></li>
            <li><router-link to="/gallery" class="link" >{{$t ('gallery')}}</router-link></li>
            <li><router-link to="/menu" class="link">{{$t ('menu')}}</router-link></li>
            <li><router-link to="/account" class="link" >{{$t ('myAccount')}}</router-link></li>
            <li><router-link to="/about" class="link">{{$t ('about')}}</router-link></li>
            <li class="dropdown" id="drop">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{$t ('langChoose')}}
                </a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item link" href="#" @click.prevent="changeLang('sr')">{{$t ('serbian')}}</a>
                  <a class="dropdown-item link" href="#" @click.prevent="changeLang('en')">{{$t ('english')}}</a>
                </div>
            </li>
        </ul>
    </nav>
  </div>
</div>
    
</template>

<style scoped>
  .navbar {
    padding: 0;
    display: flex;
    justify-content: center;
    /* postavljanje da može da se scroll-uje na malim ekranima*/
    flex-wrap: nowrap;
    /* overflow-x: auto; */
    vertical-align:top;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar>ul>li{
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }

  .navbar>ul>li>a{
    color: #155263;
  }

  .dropdown{
    align-content: left;
  }

  #drop{
    padding: 5px;
  }

  .link:hover{
    color: #ffd360;
  }


  


</style>

<script>
    export default{
        name: "Navigation",
        methods: {
            changeLang(lang){
                this.$i18n.locale = lang;  
            }
        }
    }
</script>