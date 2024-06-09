<template>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></head>
    <div class="container">
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-lg-6 d-flex align-items-center mb-4" @click="selectFood(item.id)">
                <router-link :to="'/menu/' + item.id">
                    <img class="flex-shrink-0 img-fluid rounded" :src="item.photo" alt="" style="width: 80px;">
                    <div class="w-100 d-flex flex-column text-start ps-4">
                        <h5 class="d-flex justify-content-between border-bottom pb-2">
                            <span>{{ item.name[this.$i18n.locale] }}</span>
                            
                            <span class="text-primary">&nbsp; {{ item.price }}</span>
                            
                        </h5>
                        <small class="fst-italic truncate">{{ item.desc[this.$i18n.locale] }}</small>
                        
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'sortType'],
    data() {
        return {
            mainCourses: [] 
        }
    },
    created() {
        this.mainCourses = require('@/data/appetizers.json');
    },methods: {
    selectFood(foodId) {
      this.$emit('food-selected', foodId);
    }
  }
}
</script>

<style scoped>
.rating .fa-star {
    color: #ddd; 
}

.rating .checked {
    color: #ffcc00;
}

.mt-2 {
    margin-top: 0.5rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
}

.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
}

.col-lg-6 {
    flex: 1 1 calc(50% - 20px); 
    box-sizing: border-box; 
}

img {
    width: 80px;
    height: auto;
    margin-right: 20px;
}

.w-100 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text-primary {
    display: flex;
    align-items: center;
}

.star-icon {
    margin-left: 5px; 
    color: #ffcc00; 
}

.truncate{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 300px;
    }

    a{
        color: #155263;
    }
</style>

