<template>
    <div class="">
        <div class="current-address accent--text fs-13 fw-500">
            آدرس من:
            <span>
                <span class="mr-1 primary--text">{{ address.name }}</span>
                <span class="gray--text fw-300">{{ address.address }}</span>
            </span>
            <span class="float-left">
                <i class="material-icons success--text fs-18">sync_alt</i>
            </span>
        </div>
        <div class="slider-default mt-5">
            <div class="swiper-wrapper">
                <SwiperSlideHome v-for="i in 5"
                    link="/"
                    title="12"
                    className="br-15"
                    image="/images/home/slide1.png" />
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="slider-categories mt-2">
            <div class="swiper-wrapper">
                <SwiperSlideHome v-for="i in 10"
                    link="/"
                    title="12"
                    className="br-10"
                    image="/images/home/slide2.png" />
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="search mt-2">
            <a-input
                className="br-10"
                icon="search"
                placeholder="جستجو..." />
        </div>

        <div class="products-box">
            <div class="darkGray--text fs-14 mb-2">پیشنهاد روز</div>
            <div class="swiper-wrapper">
                <SwiperSlideProduct v-for="i in 10"
                    link="/"
                    name="گوشت چرخ کرده مهیا"
                    priceDiscount="320000"
                    price="300000"
                    image="/images/home/product.png" />
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
    layout: 'home',
    mounted() {
        new Swiper('.slider-default', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 20,
        });
        new Swiper('.slider-categories', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 10,
        });
        new Swiper('.products-box', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 15,
        });
    },
    data(){
        return{
            address:{
                name: 'خونه',
                address: 'یزد امام شهر، انتهای بلوار کارگر',
            },
            sliders:[
                {img:'', link:''}
            ]
        }
    },
    methods:{
        oooopppp(){
            this.$store.commit('CHANGE_LAYOUT_HOME', ['selectedShop', Math.floor(Math.random()*2)]);
        }
    }
};
</script>