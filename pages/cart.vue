<template>
    <div class="categories">
        cart
    </div>
</template>

<script>
export default {
    layout: 'home',
    mounted() {
        this.$store.commit('_HOME', ['wmenu', 2]);
    },
    data(){
        return{
        }
    },
};
</script>

<style scoped>

</style>