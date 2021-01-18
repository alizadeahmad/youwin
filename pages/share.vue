<template>
    <div class="share-wrapper mt-6">
        <div class="insert-code">
            <p class="gray--text fs-14">در صورتی که دوستان شما یووین را به شما معرفی کرده اند با ثبت کد معرف دوستان خود از هدیه یووین بهره مند شوید</p>
            <div class="ic mt-6">
                <div class="r">
                    <a-input
                        v-model="vModel"
                        label="کد تخفیف"
                        required />
                </div>
                <div class="l">
                    <v-btn
                        class="cbtn"
                        x-large
                        color="secondary">
                        <v-icon dark>
                            done
                        </v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="share mt-6 fs-14 text-center">
            <p class="gray--text">با ارسال کد اختصاصی زیر، دوستانت رو به یووین دعوت کن. یووین با هر خرید دوستانت کیف پولت رو شارژ می کنه</p>
            <p class="black--text fw-500 mt-5">کد اختصاصی شما</p>
            <p class="black--text fw-500 mt--10 mb-5">ABCDEFGHI</p>
            <p class="gray--text">لینک دعوت خود را به اشتراک بگذارید</p>
            <div class="socials mt-6">
                <div class="social" v-for="i in socials">
                    <img :src="i.img" @click="sharing(i.action)">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'ثبت و ارسال کد معرف']);
    },
    data(){
        return{
            vModel: '', // temp
            socials:[
                {img:'/images/share/socials/blogger.svg', action:'a'},
                {img:'/images/share/socials/busuu.svg', action:'b'},
                {img:'/images/share/socials/dropbox.svg', action:'c'},
                {img:'/images/share/socials/facebook.svg', action:'d'},
                {img:'/images/share/socials/foursquare.svg', action:'e'},
                {img:'/images/share/socials/google-allo.svg', action:'f'},
                {img:'/images/share/socials/google-drive.svg', action:'g'},
                {img:'/images/share/socials/instagram.svg', action:'h'},
                {img:'/images/share/socials/line.svg', action:'i'},
                {img:'/images/share/socials/linkedin.svg', action:'j'},
                {img:'/images/share/socials/skype.svg', action:'k'},
                {img:'/images/share/socials/telegram.svg', action:'l'},
                {img:'/images/share/socials/twitter.svg', action:'m'},
                {img:'/images/share/socials/viber.svg', action:'n'},
                {img:'/images/share/socials/wechat.svg', action:'o'},
                {img:'/images/share/socials/whatsapp.svg', action:'p'},
            ]
        }
    },
    methods:{
        sharing(e){
            if(e == 'a') alert('Share to Blogger!');
            else if(e == 'b') alert('Share to Busuu!');
            //else if(e == ...) alert('Share to ...!');
            else alert('Share to another!');
        }
    }
};
</script>

<style scoped>
.insert-code{
    margin: -10px -10px 0;
    padding: 10px 10px 0;
    border-bottom: 1px solid #eee;
}
.insert-code .ic > div{
    display: inline-block;
}
.insert-code .ic .r{
    width: calc(100% - 60px);
}
.insert-code .ic .l{
    width: 55px;
    text-align: left;
}
.cbtn{
    min-width: 49px !important;
    max-width: 49px !important;
    border-radius: 8px;
    height: 49px !important;
}

.social{
    display: inline-block;
    width: 128px;
    height: 64px;
}
.social img{
    width: 42px;
}

</style>