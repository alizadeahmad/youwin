<template>
  <div class="">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <SwiperSlide
            header="یه فروشگاه بزرگ همراه شما"
            title="با یو وین همیشه یه فروشگاه بزرگ رو همرات داری"
            :image="require('~/assets/images/onboarding/1.png')" />
        <SwiperSlide
            header="تخفیف های ویژه"
            title="با ثبت نام توی یو وین از انبوه تخفیفات لذت ببرید"
            :image="require('~/assets/images/onboarding/2.png')" />
        <SwiperSlide
            button="بزن بریم"
            btnClass="letsGo"
            header="تحویل به موقع و سریع"
            title="تعهد ما تحویل سفارشات سر وقتش هست"
            link="/login"
            :image="require('~/assets/images/onboarding/3.png')" />
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
};
</script>

<style>
.swiper-container {
  height: 100vh;
}
.swiper-slide {
  background-color: #fff;
}
.letsGo{
    bottom: 48px;
    position: absolute;
    transform: translateX(50%);
}
</style>