<template>
    <div class="info">
        <table class="table table-bordered">
            <tr>
                <td rowspan="3"><img :src="'/images/' + food.photo"></td>
                <td class="wide">
                    <h4>{{ tr(msg.name) }}</h4>
                </td>
                <td class="pinfo">{{ food.name }}</td>
            </tr>
            <tr>
                <td class="wide">
                    <h4>{{ tr(food.price) }}</h4>
                </td>
                <td class="pinfo">{{ food.price }}</td>
            </tr>
            <tr>
                <td class="wide">
                    <h4>{{ tr(food.sdesc) }}</h4>
                </td>
                <td class="pinfo"> {{ tr(food.desc) }} </td>
            </tr>
        </table>
    </div>
    <Food v-if="selectedDish" :dish="getSelectedDishDetails()" /> 
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

.info,
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
import Food from "@/components/Food.vue"; 
import food from "@/data/food";

export default {
    name: "MainComponent", 
    components: {
        Food
    },
    data() {
        return {
            selectedDish: null 
        }
    },
    methods: {
        showDetails(dish) {
            this.selectedDish = dish;
            console.log("Selected dish: ", this.selectedDish);
        },
        getSelectedDishDetails() {    
            return food.find(item => item.name === this.selectedDish); 
        }
    }
}
</script>

