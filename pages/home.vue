<template>
    <div class="">
        سلام
        <button class="primary" @click="oooopppp">change1</button>
        <br>
        <p>s1</p>
        <p>s2</p>
        <p>s3</p>
        <p>s4</p>
        <p>s5</p>
        <p>s6</p>
        <p>s7</p>
        <p>s8</p>
        <p>s9</p>
        <p>s10</p>
        <p>s11</p>
        <p>s12</p>
        <p>s13</p>
        <p>s14</p>
        <p>s15</p>
        <p>s16</p>
        <p>s17</p>
        <p>s18</p>
        <p>s19</p>
        <p>s20</p>
        <p>s21</p>
        <p>s22</p>
        <p>s23</p>
        <p>s24</p>
        <p>s25</p>
        <p>s26</p>
    </div>
</template>

<script>
export default {
    layout: 'home',
    data(){
        return{
        }
    },
    methods:{
        oooopppp(){
            this.$store.commit('CHANGE_LAYOUT_HOME', ['selectedShop', Math.floor(Math.random()*2)]);
        }
    }
};
</script>

<style scoped>
</style>