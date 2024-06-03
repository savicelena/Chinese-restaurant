<template>
    <div class="divCrumbs mt-3">
        <ol class="breadcrumb crumbs">
            <li v-for="bread in breadcrumb" :key="bread.text" :class="bread.active == true ? 'breadcrumb-item active' : 'breadcrumb-item'">
                <router-link v-if="bread.active == false" :to="bread.route" class="text">{{$t (bread.text)}}</router-link>
                <span v-if="bread.active == true" class="text">{{$t (bread.text)}}</span>
            </li>
        </ol>
    </div>
</template>

<style scoped>
    .crumbs{
        background-color: #ffd360;
        justify-content: left;
    }

    .divCrumbs{
        background-color: #ffd360;
        display: inline-block;
        height: 5%;
    }

    a{
        color: #155263;
    }

    .text{
        font-family: cursive;
    }
</style>

<script>
    export default{
        name: "BreadcrumbComp",
        props: [
            'breadcrumb'
        ]
    }
</script>
