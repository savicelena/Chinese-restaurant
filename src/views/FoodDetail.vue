<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-12 col-md-5">
        <table class="text">
          <tr colspan="2">
            <td>
              <h4>{{dish.name[this.$i18n.locale]}}</h4>
            </td>
          </tr>
          <tr rowspan="2">
            <img :src="dish.photo" alt="Slika jela">
          </tr>
          <tr rowspan="2">
            <p>{{dish.desc[this.$i18n.locale]}}</p>
          </tr>
          <tr>
            <td>
              {{$t('big')}} <br>
              {{dish.priceBig}}
            </td>
            <td>
              {{$t('small')}} <br>
              {{dish.price}}
            </td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12 col-md-5">
        <form>
          <table id="orderTable" class="text">
            <tr>
              <td rowspan="2">
                <h5>{{$t ('tasteIt')}}</h5>
              </td>
            </tr>
            <tr colspan="2">
              <td>
                <label for="big">{{$t('big')}}</label> &nbsp;
                <input type="radio" v-model="type" name="type" id="big" value="priceBig" @change="radioChanged()">
              </td>
              <td>
                <label for="small">{{$t('small')}}</label> &nbsp;
                <input type="radio" v-model="type" name="type" id="small" value="price" @change="radioChanged()">
              </td>
            </tr>
            <tr>
              <td>{{$t ('quantity')}}:</td>
              <td>
                <input type="number" v-model="quantity" name="quantity" id="quantity" @change="quantityChanged()">
              </td>
            </tr>
            <tr>
              <td>{{$t('currentPrice')}}:</td>
              <td id="price">0</td>
            </tr>
            <tr colspan="2">
              <td>
                <button class="btn btn-light" @click="order()">{{$t("orderIt")}}</button>
              </td>
            </tr>
          </table>
        </form>
        

        <div class="grading">
          <form>
            <div class="rating">
              <input type="radio" id="star5" name="rating" value="5" class="star" v-model="grade">
              <label for="star5"></label>
              <input type="radio" id="star4" name="rating" value="4" class="star" v-model="grade">
              <label for="star4"></label>
              <input type="radio" id="star3" name="rating" value="3" class="star" v-model="grade">
              <label for="star3"></label>
              <input type="radio" id="star2" name="rating" value="2" class="star" v-model="grade">
              <label for="star2"></label>
              <input type="radio" id="star1" name="rating" value="1" class="star" v-model="grade">
              <label for="star1"></label>
            </div> <br>
          
          <button type="submit" class="btn btn-light text" @click="addGrade()">{{$t("gradeDish")}}</button>
        </form>
          
      </div>
    </div>
        
    <div class="col-sm-12 col-md-2 d-flex mt-5" >
      <div id="averageGradeDiv">
        <h4 id="averageGrade">0</h4>
      </div>
    </div>
	
      
    </div>
  </div>
</template>

<style scoped>

  img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  tr{
    display: flex;
    justify-content: center;
    padding: 2%;
  }

  td{
    padding: 3%;
    width: 200px;
  }

  .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    text-align: center;
    display: inline-block;
  }
  .rating > input {
    display: none;
  }
  .rating > label {
    display: inline-block;
    font-size: 25px;
    color: #000;
    cursor: pointer;
    transition: color 0.2s;
  }
  .rating > label:hover,
  .rating > label:hover ~ label,
  .rating > input:checked ~ label {
    /* color: #f39c12; */
    color: #155263;
  }
  .star:checked + label:before,
  .star:checked ~ .star + label:before {
    content: '\2605';
    /* color: #f39c12; */
    color: #155263;
  }
  .star:not(:checked) + label:before {
    content: '\2606'; 
  }

  .grading{
    color: black;
    background-color: #ffd360;
    padding: 3%;
    margin-bottom: 5%;
  }

  button{
    background-color: #ffd360;
  }

  #orderTable{
    width: 100%;
    text-align: center;
  }
  
  .text{
    font-family: cursive;
  }

  #averageGrade{
    background-color: #ffd360;
    border-radius: 50%;
    text-align: center;
    padding: 20%;
    width: 100%;
    border: solid #155263;
  }

  #averageGradeDiv{
    width: 50%;
  }

  

</style>

<script>


  export default{
    name: "FoodDetail",
    data(){
      return{
        id: '',
        dish: '',
        quantity: '',
        type: '',
        grade: '',
        allGrades: '',
        basket: '',
        translationsEn: '',
        translationsSr: ''
      }
    },
    created(){
      this.id = this.$route.params.id;
      let mainCourses = require('@/data/mainCourse.json');
      let desserts = require('@/data/desserts.json');
      let appetizers = require('@/data/appetizers.json');
      this.translationsEn = require("@/translations/english.json");
      this.translationsSr = require("@/translations/serbian.json");
      this.dish = mainCourses.find(mc => mc.id == this.id);
      if(this.dish == null){
        this.dish = desserts.find(mc => mc.id == this.id);
        if(this.dish == null){
          this.dish = appetizers.find(mc => mc.id == this.id)
        }
      }
      this.allGrades = JSON.parse(localStorage.getItem("grades"));
      this.basket = JSON.parse(localStorage.getItem("basket"));
      
    },
    mounted(){
      let myGrade = this.allGrades.find( grade=> grade.name.en == this.dish.name.en);
      if(myGrade != null){
        document.getElementById("averageGrade").innerText = myGrade.avg;
      }
    },
    methods: {
      radioChanged(){
        if(this.quantity != ''){
          let portionPrice = parseFloat(this.dish[this.type].replace("$", ""));
          let price = this.quantity * portionPrice;
          document.getElementById("price").innerText = price;
        }
      },
      quantityChanged(){
        if(this.type != ''){
          let portionPrice = parseFloat(this.dish[this.type].replace("$", ""));
          let price = this.quantity * portionPrice;
          document.getElementById("price").innerText = price;
        }
      },
      addGrade(){
        let dishGrade = this.allGrades.find(dish => dish.name.en == this.dish.name.en);
        if(dishGrade == null){
          this.allGrades.push({
            "name": this.dish.name,
            "sum": parseInt(this.grade),
            "total": 1,
            "avg": parseFloat(this.grade).toFixed(2),
            "photo": this.dish.photo
          });
          document.getElementById("averageGrade").innerText = parseFloat(this.grade).toFixed(2);
        }else{
          dishGrade.sum += parseInt(this.grade);
          dishGrade.total += 1;
          dishGrade.avg = dishGrade.sum / dishGrade.total;
          dishGrade.avg = dishGrade.avg.toFixed(2);
          document.getElementById("averageGrade").innerText = dishGrade.avg;
        }
        localStorage.setItem("grades", JSON.stringify(this.allGrades));

      },
      order(){
        if(localStorage.getItem("currentAccount") == null){
          let msg;
          if(this.$i18n.locale == 'en'){
            msg = this.translationsEn.mustSignIn;
          }else{
            msg = this.translationsSr.mustSignIn;
          }
          alert(msg);
          return;
        }
        if(this.type == '' || this.quantity == ''){
          let msg;
          if(this.$i18n.locale == 'en'){
            msg = this.translationsEn.blankFields;
          }else{
            msg = this.translationsSr.blankFields;
          }
          alert(msg);
          return;
        }
        let username = JSON.parse(localStorage.getItem("currentAccount")).username;
        let foundUser = this.basket.find(usr => usr.username == username);
        let portion;
        if(this.type == "price"){
          portion = "small";
        }else{
          portion = "big";
        }
        let price = parseFloat(document.getElementById("price").innerText);
        if(foundUser == null){
          this.basket.push({
            username: username,
            dishes: [{name: this.dish.name, quantity: this.quantity, type: portion, price: price}]
          });
        }else{
          console.log(foundUser);
          console.log(this.dish.name.en);
          console.log(portion);
          let foundDish = foundUser.dishes.find( ds => ds.name.en == this.dish.name.en && ds.type == portion);
          console.log(foundDish);
          if(foundDish != null){
            foundDish.quantity += this.quantity;
            foundDish.price += price;
            
          }else{
            foundUser.dishes.push({
              name: this.dish.name, 
              quantity: this.quantity, 
              type: portion, 
              price: price
            })
          }

          

        }
        localStorage.setItem("basket", JSON.stringify(this.basket));
        
      }
    }
  }
</script>
