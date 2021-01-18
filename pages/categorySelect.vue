<template>
    <div class="category-wrapper">
        <div class="ex-topmenu">
            <div class="ex-topmenu-sec">
                <div>
                    <img class="s" src="/images/search.svg">
                    <img class="c" src="/images/home/shoppingcart_d.svg">
                </div>
            </div>
        </div>

        <div class="shop-img">
            <div class="slider-categories mt-2">
                <div class="swiper-wrapper">
                    <SwiperSlideHome v-for="i in 10"
                        :key="i"
                        link="/"
                        title="12"
                        className="br-10"
                        image="/images/home/slide2.png" />
                </div>
            </div>

            <img src="/images/tmp/1 (2).jpg">
        </div>

        <div class="category">

            <div class="shop-info mt-4 mb-2 mx-2">
                <div>
                    <div class="fs-18 fw-600">فروشگاه افق کوروش</div>
                    <div class="mt-2">
                        <span><Stars rate="4" class="sstar"/></span>
                        <span class="fs-10 rn">امتیاز: 4</span>
                    </div>
                </div>
                <div class="shop-info-more primary--text">
                    <img src="/images/information.svg">
                    <p class="fs-10 mt--10">اطلاعات و نظرات</p>
                </div>
            </div>












            <div class="about fs-14 gray--text">
                درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما 
                درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما
                درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما درباره ما 
            </div>

            <div class="fs-14 mt-8 mb-2">اطلاعات تماس</div>
            <div class="contact fs-14">
                <div>
                    <span class="gray--text">تلفن تماس:</span>
                    <span class="float-left">09134545624</span>
                </div>
                <div class="mt-2">
                    <span class="gray--text">آدرس:</span>
                    <span class="float-left">یزد، امامشهر، انتهای بلوار کارگر، خ شهید حسین کیا</span>
                </div>
                <div class="socials mt-4">
                    <div class="social"><img src="/images/share/socials/twitter.svg"></div>
                    <div class="social"><img src="/images/share/socials/telegram.svg"></div>
                    <div class="social"><img src="/images/share/socials/instagram.svg"></div>
                    <div class="social"><img src="/images/share/socials/whatsapp.svg"></div>
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
        this.$store.commit('_HOME', ['title', 'دسته بندی محصولات']);
        new Swiper('.slider-categories', {
            slidesPerView: 'auto',
            spaceBetween: 10,
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
.category-wrapper{
    margin: -10px -10px -20px;
    width: calc(100% + 20px);
}
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
.shop-img img{
    width: 100%;
}
.category{
    margin-top: -20px;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
    position: relative;
}
.shop-info .sstar{
    display: inline-block;
}
.shop-info .sstar img{
    width: 18px;
    height: 18px;
}
.shop-info .rn{
    position: absolute;
    margin: 5px 15px;
}

.shop-info > div{
    display: inline-block;
}
.shop-info-more{
    text-align: center;
    float: left;
}
.shop-info-more img{
    width: 42px;
}






















.about,
.contact{
    padding: 20px 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
}
.contact{
    padding-bottom: 10px;
}
.social{
    display: inline-block;
    width: calc(25% - 3px);
    text-align: center;
}
.social img{
    width: 36px;
}
</style>