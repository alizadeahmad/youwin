<template>
    <div class="list-wrapper mt-6">

            <div class="search mt-2">
                <a-input
                    className="br-10"
                    icon="search"
                    placeholder="جستجوی محصول..." />
            </div>

            <div class="products-box mt-8">
                <div class="darkGray--text fs-14 mb-2">سفارشات قبلی من</div>
                <div class="swiper-wrapper">
                    <SwiperSlideProduct v-for="i in 10"
                        :key="i"
                        :id="i"
                        name="گوشت چرخ کرده مهیا"
                        priceDiscount="320000"
                        price="300000"
                        image="/images/home/product.png" />
                </div>
            </div>

            <div class="products-box mt-8">
                <div class="darkGray--text fs-14 mb-2">جدیدترین ها</div>
                <div class="swiper-wrapper">
                    <SwiperSlideProduct v-for="i in 10"
                        :key="i"
                        :id="i"
                        name="گوشت چرخ کرده مهیا"
                        priceDiscount="320000"
                        price="300000"
                        image="/images/home/product.png" />
                </div>
            </div>


        <div class="list-summary gray--text">
            <div class="mt-2 fs-14">
                <span>تعداد اقلام انتخابی:</span>
                <span class="float-left">2 عدد</span>
            </div>
            <div class="mt-4">
                <v-btn
                    color="secondary"
                    elevation="1"
                    rounded
                    block
                    to="/list"
                    x-large>
                    تایید و ثبت لیست خرید
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'لیست خرید خانه']);
        new Swiper('.products-box', {
            slidesPerView: 'auto',
            spaceBetween: 15,
        });
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
.list-wrapper{
    padding-bottom: 140px;
}
.list-summary{
    background-color: #f2f2f2;
    position: fixed;
    bottom: 0px;
    width: calc(100% - 20px);
    padding: 20px;
    border-radius: 15px 15px 0 0;
    z-index: 1;
}
</style>