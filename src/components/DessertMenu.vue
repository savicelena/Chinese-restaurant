<template>
    <div class="container">
        <div class="row">
            <div v-for="item in items" :key="item.id" class="col-lg-6 d-flex align-items-center mb-4">
                <img class="flex-shrink-0 img-fluid rounded" :src="item.photo" alt="" style="width: 80px;">
                <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                        <span>{{ item.name }}</span>
                        <span class="text-primary">{{ item.price }}</span>
                    </h5>
                    <small class="fst-italic">{{ item.desc.en }}</small>
                    <div class="rating mt-2">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'sortType'],
    data() {
        return {
            mainCourses: [] // Inicijalizujemo listu glavnih jela
        }
    },
    created() {
        // Učitavamo glavna jela kad se komponenta kreira
        this.mainCourses = require('@/data/desserts.json');
    }
}
</script>

<style scoped>
.rating .fa-star {
    color: #ddd; /* Siva boja za neaktivne zvezdice */
}

.rating .checked {
    color: #ffcc00; /* Zlatna boja za aktivne zvezdice */
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
    gap: 20px; /* Dodaj razmak između kartica */
}

.col-lg-6 {
    flex: 1 1 calc(50% - 20px); /* Širina 50% minus razmak između kartica */
    box-sizing: border-box; /* Osigurava da padding i border ne utiču na širinu */
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
</style>
