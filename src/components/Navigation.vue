<template>
<div class="container-fluid bottomBorder">
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-custom col-sm-12">
        <ul class="navbarUl">
            <li><router-link to="/"  class="link" id="/" @click="clickLink('/')">{{$t ('home')}}</router-link></li>
            <li><router-link to="/gallery" class="link" id="/gallery" @click="clickLink('/gallery')">{{$t ('gallery')}}</router-link></li>
            <li><router-link to="/menu" class="link" id="/menu" @click="clickLink('/menu')">{{$t ('menu')}}</router-link></li>
            <li><router-link to="/account" class="link" id="/signin" @click="clickLink('/signin')">{{$t ('myAccount')}}</router-link></li>
            <li><router-link to="/about" class="link" id="/about" @click="clickLink('/about')">{{$t ('about')}}</router-link></li>
            <li class="dropdown" id="drop">
                <a class="nav-link dropdown-toggle link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

  nav a.router-link-exact-active {
        color: chocolate !important;
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

  .link{
    font-family: cursive;
    text-decoration: none;
  }

  .bottomBorder{
    border-bottom: 1px solid #155263;
  }

  
</style>

<script>
    export default{
        name: "Navigation",
        data(){
          return{
            signed: ''
          }
        },
        methods: {
          changeLang(lang){
            this.$i18n.locale = lang;  
          },
          clickLink(route){
            let currentRoute = this.$route.path;
            if(localStorage.getItem("currentAccount") != null && route == '/signin'){
              route = "/account";
            }
            if(currentRoute == "/account"){
              currentRoute = "/signin";
            }else if(currentRoute == '/offers' || currentRoute == '/bestGraded' || currentRoute == '/newWorkers'){
              currentRoute = '/';
            }else if(currentRoute == '/photoGallery' || currentRoute == '/videoGallery'){
              currentRoute = '/gallery';
            }else if(currentRoute.includes("/menu")){
              currentRoute = '/menu';
            }
            document.getElementById(currentRoute).style.color = "#155263";
            
            switch(route){
              case "/":
              case "/offers":
              case "/newWorkers":
              case "/bestGraded":
                document.getElementById("/").style.color = "chocolate";
                break;
              case "/gallery":
                document.getElementById("/gallery").style.color = "chocolate";
                break;
              case "/menu":
                document.getElementById("/menu").style.color = "chocolate";
                break;
              case "/signin":
              case "/account":
                document.getElementById("/signin").style.color = "chocolate";
                break;
              case "/about":
                document.getElementById("/about").style.color = "chocolate";
                break;
            }
          }
        },
        created(){
          if(localStorage.getItem("currentAccount") != null){
            this.signed = true;
          }
        },
        watch: {
          '$route'(to, from){
            if(from.path == '/account' && to.path == '/'){
              document.getElementById("/signin").style.color = "#155263";
            }else if(from.path == '/newWorkers' && to.path == "/about"){
              document.getElementById("/").style.color = "#155263"
            }
          }
        }
    }
</script>