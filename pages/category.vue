<template>
    <div class="categories">
        <nuxt-link class="category black--text" v-for="i in 5" to="/categorySelect" :key="i">
            <img src="/images/home/product.png">
            <p>مواد پروتئینی</p>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    layout: 'home',
    mounted(){
        this.$store.commit('_HOME', ['wmenu', 1]);
    },
    data(){
        return{
        }
    },
};
</script>

<style scoped>
.category{
    display: inline-block;
    width: 46%;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px -3px rgba(0,0,0,.25);
    text-align: center;
    margin: 2%;
    font-size: 14px;
    padding: 10px;
    text-decoration: none;
}
.category img{
    border-radius: 5px;
}
.category p{
    margin: 0;
}
</style>