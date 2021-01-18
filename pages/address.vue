<template>
    <div class="address-wrapper">

        <div class="address" v-for="i in 2">
            <div class="map">
                <img src="/images/tmp/map.jpg">
            </div>
            <div class="mt-2">
                <div class="sl">
                    <div class="primary--text">خانه</div>
                    <div class="l">
                        <img src="/images/address/edit_bl.png">
                        <img src="/images/address/error.svg">
                    </div>
                </div>
                <div class="sl">
                    <div class="gray--text fs-12">یزد، امامشهر، انتهای بلوار کارگر، خ شهید حسین کیا، کوچه توحید</div>
                </div>
            </div>
        </div>

        <div class="add-address">
            <v-btn
                to="/selectAddress"
                class="mx-2"
                fab
                dark
                color="accent">
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'آدرس های من']);
    },
    data(){
        return{
        }
    },
    methods:{
    }
};
</script>

<style scoped>
.address-wrapper{
    padding-bottom: 60px;
}
.address{
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
    margin-bottom: 20px;
}
.address .map{
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #cdd0df;
}
.address .sl{
    width: 100%;
    display: inline-block;
}
.address .sl div{
    display: inline-block;
}
.address .sl .l{
    float: left;
}
.address .sl .l img{
    width: 24px;
    margin: 0 10px;
}
.add-address{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
}
</style>