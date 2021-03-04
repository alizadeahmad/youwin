<template>
	<div class="prod-wrapper">

        <div class="ex-topmenu">
            <div class="ex-topmenu-sec">
                <div>
                    <img class="c" src="/images/home/shoppingcart_d.svg">
                </div>
            </div>
        </div>

        <div class="product-image">
            <span class="product-discount error">
                <span class="pt-1">10-</span>
                <span>%</span>
            </span>

            <img src="/images/tmp/2.png">
        </div>
        <div class="product-name py-4 sl">
            <div>
                <div>شیر پر چرب هراز حجم 1 لیتر</div>
                <div class="mt-2 db">
                    <span><Stars rate="4" class="sstar"/></span>
                    <span class="fs-10 rn">امتیاز: 4</span>
                </div>
            </div>
            <div class="l">
                <nuxt-link to="/" class="shop-info-more primary--text">
                    <img src="/images/information.svg">
                    <p class="fs-10 mt--10">نظرات خریداران</p>
                </nuxt-link>
            </div>
        </div>

        <div class="product-desc pt-4 pb-5">
            <div class="darkGray--text fs-14 mb-2">توضیحات</div>
            <div class="gray--text fs-14">
                توضیحات محصول توضیحات محصول توضیحات محصول توضیحات محصول توضیحات محصول توضیحات محصول 
            </div>
        </div>

        <div class="products-box mt-8">
            <div class="darkGray--text fs-14 mb-2">محصولات مشابه</div>
            <div class="swiper-wrapper">
                <SwiperSlideProduct v-for="i in 10"
                    :key="i+10"
                    :id="i+10"
                    name="گوشت چرخ کرده مهیا"
                    priceDiscount="320000"
                    price="300000"
                    image="/images/home/product.png" />
            </div>
        </div>

        <div class="add-cart gray--text">
            <div class="sl">
                <div>
                    <div class="fs-16" style="text-decoration:line-through">{{ $cn(10000) }} ریال</div>
                    <div class="db mt-2 fs-20"><span class="primary--text">{{ $cn(25000) }}</span> ریال</div>
                </div>
                <div class="l mt-4">
                    <v-btn
                        color="secondary"
                        elevation="1"
                        rounded
                        block
                        x-large>
                        افزودن به سبد خرید
                    </v-btn>
                </div>
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
        this.$store.commit('_HOME', ['title', 'لبنیات']);
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
a{text-decoration: none;}
.db{display: block !important;}
.ex-topmenu{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}
.ex-topmenu-sec img{
    margin-top: 15px;
    margin-left: 20px;
    vertical-align: middle;
}
.ex-topmenu-sec .s{
    width: 20px;
}
.ex-topmenu-sec .c{
    width: 28px;
}
.prod-wrapper{
    padding-bottom: 110px;
}
.product-image{
    position: relative;
    height: 240px;
    text-align: center;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
}
.product-image img{
    max-width: 100%;
    max-height: 100%;
}
.product-discount{
    position: absolute;
    top: -10px;
    left: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    padding-right: 5px;
    padding-left: 5px;
    text-align: center;
    border-radius: 0 0 10px 10px;
}
.product-discount span{
    display: block;
}
.product-name, .product-desc{
    border-bottom: 1px solid #eee;
}
.shop-info-more{
    text-align: center;
    float: left;
}
.shop-info-more img{
    width: 42px;
}
.sl{
    margin-bottom: 10px;
}
.sl div{
    display: inline-block;
}
.sl .l{
    float: left;
    font-size: 14px;
}
.add-cart{
    background-color: #f2f2f2;
    position: fixed;
    bottom: 0px;
    width: calc(100% - 20px);
    padding: 20px;
    border-radius: 15px 15px 0 0;
    z-index: 1;
}
</style>
<style>
.product-name .star{
    width: 16px;
    height: 16px;
}
</style>