<template>
    <div class="">

        <transition name="fade">
            <div class="modal" v-if="modalAddress" @click="closeModalAddress">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header text-center fs-14 gray--text mb-4">آدرس های منتخب من</div>
                    <div class="modal-body">
                        <div class="addresses" v-for="i in 3">
                            <span class="primary--text fs-14 ml-2">خونه</span>
                            <span class="gray--text fs-12">یزد، امامشهر، انتهای خیابان پلاک 5</span>
                        </div>
                        <v-btn
                            class="mt-8"
                            to="/map"
                            color="accent"
                            elevation="1"
                            rounded
                            block
                            x-large>
                            افزودن آدرس جدید
                            <v-icon
                                right
                                dark>
                                mdi-map-marker-plus-outline
                            </v-icon>
                        </v-btn>

                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <div class="current-address accent--text fs-13 fw-500">
            آدرس من:
            <span>
                <span class="mr-1 primary--text">{{ address.name }}</span>
                <span class="gray--text fw-300">{{ address.address }}</span>
            </span>
            <span class="float-left" @click="changeAddress">
                <i class="material-icons success--text fs-18">sync_alt</i>
            </span>
        </div>

        <div :class="{deactive: !selectedShop}">
            <div class="slider-default mt-5">
                <div class="swiper-wrapper">
                    <SwiperSlideHome v-for="i in 5"
                        :key="i"
                        link="/"
                        title="12"
                        className="br-15"
                        image="/images/home/slide1.png" />
                </div>
            </div>
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

            <div class="search mt-2">
                <a-input
                    className="br-10"
                    icon="search"
                    placeholder="جستجو..." />
            </div>

            <div class="products-box mt-8">
                <div class="darkGray--text fs-14 mb-2">پیشنهاد روز</div>
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
                <div class="darkGray--text fs-14 mb-2">پرتخفیف ترین ها</div>
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

            <div class="products-box mt-8 mb-2">
                <div class="darkGray--text fs-14 mb-2">جدیدترین ها</div>
                <div class="swiper-wrapper">
                    <SwiperSlideProduct v-for="i in 10"
                        :key="i+20"
                        :id="i+20"
                        name="گوشت چرخ کرده مهیا"
                        priceDiscount="320000"
                        price="300000"
                        image="/images/home/product.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
    layout: 'home',
    mounted(){
        this.$store.commit('_HOME', ['wmenu', 0]);
        new Swiper('.slider-default', {
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
        new Swiper('.slider-categories', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
        new Swiper('.products-box', {
            slidesPerView: 'auto',
            spaceBetween: 15,
        });
    },
    data(){
        return{
            modalAddress: false,
            address:{
                name: 'خونه',
                address: 'یزد امام شهر، انتهای بلوار کارگر',
            },
        }
    },
    methods:{
        closeModalAddress(){
            this.modalAddress = false;
        },
        changeAddress(){
            this.modalAddress = true;
        }
    },
    computed:{
        selectedShop(){
            return this.$store.state._home.selectedShop;
        }
    }
};
</script>

<style>
.deactive{
    opacity: 0;
}
.shops{
    display: flex;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px 10px 0;
    margin-bottom: 10px;
}
.shops .shop-logo .logo{
    max-width: 64px;
    max-height: 64px;
    border-radius: 10px;
}
.shops .shop-star{
    margin-top: -8px;
}
.addresses{
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 15px 10px;
    margin-bottom: 10px;
}
</style>