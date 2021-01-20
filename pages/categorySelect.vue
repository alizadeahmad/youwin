<template>
    <div class="category-wrapper">

        <transition name="fade">
            <div class="modal align-items-end" v-if="modalFilter" @click="closeModalFilter">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header">
                        <div class="fs-12 text-center mt--10">فیلتر محصولات</div>
                    </div>
                    <div class="modal-body">
                        <div class="mt-6 mb-2 fs-14 text-center">

                            <div class="a-select-wrapper mb-6">
                                <label>مجموعه</label>
                                <select>
                                    <option>شیر</option>
                                    <option>پنیر</option>
                                </select>
                                <i class="material-icons">keyboard_arrow_down</i>
                            </div>
                            <div class="filters-type mt-2 mb-6">
                                <span>جدیدترین ها</span>
                                <span>بیشترین تخفیف</span>
                                <span>پر امتیازترین</span>
                            </div>
                            <v-btn
                                color="secondary"
                                block
                                rounded
                                x-large>
                                تایید و ثبت فیلتر
                            </v-btn>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <div class="ex-topmenu">
            <div class="ex-topmenu-sec">
                <div>
                    <img class="s" src="/images/search.svg">
                    <img class="c" src="/images/home/shoppingcart_d.svg">
                </div>
            </div>
        </div>

        <div class="slider-categories-wrappers">
            <div class="slider-categories">
                <div class="swiper-wrapper">
                    <div class="category-slide swiper-slide" v-for="(i, index) in categories" :class="{selected: index==0}">{{ i }}</div>
                </div>
            </div>
        </div>

        <div class="shop-img-wrapper">
            <img class="shop-img" src="/images/tmp/1 (2).jpg">
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

            <div class="sub-categories gray--text">
                <div class="swiper-wrapper">
                    <div class="sub-category swiper-slide" v-for="(i, index) in subCategories" :class="{selected: index==0}">{{ i }}</div>
                </div>
            </div>

            <div class="products">
                <div class="product" v-for="i in 12">
                    <div class="product-image">
                        <img src="/images/tmp/2.png">
                    </div>
                    <div class="product-name fw-500 fs-14">
                        <span class="product-discount error">
                            <span class="pt-1">10-</span>
                            <span>%</span>
                        </span>
                        <div>شیر پرچرب  هراز حجم 1 لیتر</div>
                        <div class="mt-5">
                            <span class="fs-10 old-price">120000 ریال</span>
                            <span class="primary--text mr-2">110000 <span class="gray--text">ریال</span></span>
                        </div>
                    </div>
                    <div class="product-count">
                        <img class="secondary--text" src="/images/home/plus.png">
                        <div class="count fs-14">0</div>
                        <img class="error--text" src="/images/home/minus.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="filters">
            <div>
                <v-btn
                    @click="openModalFilter"
                    class="mx-2"
                    fab
                    dark
                    color="accent">
                    <v-icon dark>
                        mdi-filter
                    </v-icon>
                </v-btn>
            </div>
            <div>
                <v-btn
                    to="/cart"
                    color="secondary"
                    class="tt"
                    elevation="1"
                    rounded
                    block
                    x-large>
                        <div>مجموع: 110000 ریال</div>
                        <div class="fs-12">تایید و تسویه حساب</div>
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
        this.$store.commit('_HOME', ['title', 'دسته بندی محصولات']);
        new Swiper('.slider-categories', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
        new Swiper('.sub-categories', {
            slidesPerView: 'auto',
            spaceBetween: 10,
        });
    },
    data(){
        return{
            modalFilter: false,
            categories: ['لبنیات', 'کنسرویجات', 'میوه و سبزی', 'فرآورده های گوشتی', 'حبوبات', 'لوازم التحریر'],
            subCategories: ['شیر', 'کره', 'پنیر', 'ماست', 'کشک', 'دوغ', 'نوشیدنی', 'پوشیدنی', 'خوراکی', 'سلام'],
        }
    },
    methods:{
        openModalFilter(){
            this.modalFilter = true;
        },
        closeModalFilter(){
            this.modalFilter = false;
        }
    }
};
</script>

<style scoped>
.category-wrapper{
    margin: -10px -10px -20px;
    width: calc(100% + 20px);
    padding-bottom: 70px;
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
.slider-categories-wrappers{
    margin: 10px 10px -51px;
}
.category-slide{
    width: auto;
    background-color: rgba(0,0,0,.25);
    font-size: 14px;
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
}
.category-slide.selected{
    background-color: rgba(0,0,0,.95);
}
.shop-img{
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
.sub-categories{
    padding: 5px;
    margin: 0 -10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.sub-category{
    width: auto;
    padding: 5px 15px;
}
.sub-category.selected{
    color: #fc5830;
}
.product{
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}
.product:last-child{
    border-bottom: 0;
}
.product-discount{
    position: absolute;
    top: 20px;
    right: 72px;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    padding-right: 2px;
    padding-left: 2px;
    text-align: center;
    border-radius: 10px 0 10px 10px;
}
.product-discount span{
    display: block;
}

.product > div{
    display: inline-block;
    vertical-align: middle;
}
.product-image{
    width: 96px;
    height: 96px;
}
.product-image img{
}

.product-name{
    width: calc(100% - 138px);
}
.product-name .old-price{
    color: #aaa;
    font-weight: 100;
    text-decoration: line-through;
}

.product-count{
    text-align: center;
    width: 32px;
    padding-top: 5px;
}
.product-count img{
    width: 26px;
    border: 1px solid;
    border-radius: 50%;
}
.filters{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px 20px 20px 0;
}
.filters > div{
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
}
.filters-type span{
    border: 1px solid #fc5830;
    border-radius: 10px;
    padding: 5px 5px;
    font-size: 14px;
}
</style>
<style>
.tt .v-btn__content{
    display: unset;
    text-align: center;
    font-size: 12px;
    padding: 0 20px;
}
</style>