<template>
    <div class="food-detail">
      <table class="table table-bordered">
        <tr>
          <td rowspan="3"><img :src="'/images/' + food.photo" alt="Food Image"></td>
          <td class="wide">
            <h4>{{ tr(msg.name) }}</h4>
          </td>
          <td class="pinfo">{{ food.name }}</td>
        </tr>
        <tr>
          <td class="wide">
            <h4>{{ tr(msg.price) }}</h4>
          </td>
          <td class="pinfo">{{ food.price }}</td>
        </tr>
        <tr>
          <td class="wide">
            <h4>{{ tr(msg.sdesc) }}</h4>
          </td>
          <td class="pinfo">{{ tr(food.desc) }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <style scoped>
  img {
    width: 250px;
  }
  
  .pinfo {
    font-size: 20px;
    font-style: italic;
  }
  
  td.wide {
    width: 250px;
  }
  
  .food-detail,
  tr,
  h4 {
    background-color: rgb(182, 222, 215);
  }
  
  .swbtn {
    margin: 10px;
  }
  
  .comments {
    padding-top: 40px;
  }
  
  .comments textarea {
    width: 50%;
    height: 70px;
  }
  
  .combtn {
    margin: 20px;
  }
  
  .txt {
    font-size: 17px;
  }
  
  .name {
    font-size: 15px;
  }
  </style>
  
  <script>
  export default {
    props: {
      food: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        msg: {
          name: {
            sr: 'Naziv',
            en: 'Name'
          },
          price: {
            sr: 'Cena',
            en: 'Price'
          },
          sdesc: {
            sr: 'Kratak opis',
            en: 'Short description'
          },
          add: {
            sr: 'Dodaj',
            en: 'Add'
          }
        }
      };
    },
    methods: {
      tr(message) {
        return message.en; 
      }
    }
  };
  </script>
  