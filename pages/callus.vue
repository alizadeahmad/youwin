<template>
    <div class="callus-wrapper">
        <div class="map"></div>
        <div class="callus-info">

            <div class="fs-14 mt-6 mb-2">درباره ما</div>
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
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'اطلاعات تماس']);
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
.map{
    width: 100%;
    height: 400px;
    background: url('/images/tmp/map.png');
    background-size: auto 100vh;
}
.callus-wrapper{
    margin: -10px -10px -20px;
    width: calc(100% + 20px);
}
.callus-info{
    margin-top: -20px;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    background-color: #fff;
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