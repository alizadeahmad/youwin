<template>
    <div class="account-wrapper">
        <div class="account-menu avatar fs-14">
            <div class="sl">
                <div class="pt-5">
                    <img src="/images/account/avatar_f.png">
                    <div>
                        <div class="fs-18 fw-600">سجاد ملاحسینی</div>
                        <div class="mt-2 fs-14 gray--text db">اعتبار من: {{ $cn(250000) }} ریال</div>
                    </div>
                </div>
                <div class="l">
                    <img src="/images/account/exit.svg">
                </div>
            </div>
        </div>

        <div class="fs-14 fw-600 mt-6 mb-2">حساب کاربری</div>
        <div class="account-menu fs-14">
            <nuxt-link class="sl" to="/profile">
                <div>
                    <img src="/images/account/user.svg">
                    پروفایل من
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/wallet">
                <div>
                    <img src="/images/account/wallet.svg">
                    کیف پول من
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/address">
                <div>
                    <img src="/images/account/signs.svg">
                    آدرس های من
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/share">
                <div>
                    <img src="/images/account/share.svg">
                    ثبت و ارسال کد معرف
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/gift">
                <div>
                    <img src="/images/account/gift.svg">
                    کدهای هدیه من
                </div>
                <div class="l">
                    <v-badge
                        color="primary"
                        content="2">
                    </v-badge>
                </div>
            </nuxt-link>
        </div>

        <div class="fs-14 fw-600 mt-6 mb-2">درباره ما</div>
        <div class="account-menu fs-14">
            <nuxt-link class="sl" to="/callus">
                <div>
                    <img src="/images/account/phone-call.svg">
                    اطلاعات تماس
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/support">
                <div>
                    <img src="/images/account/support.svg">
                    ارتباط با پشتیبانی
                </div>
            </nuxt-link>
            <nuxt-link class="sl" to="/faq">
                <div>
                    <img src="/images/account/chat.svg">
                    سوالات متداول
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'منوی کاربری']);
    },
    data(){
        return{
        }
    }
};
</script>

<style scoped>
.db{
    display: block !important;
}
.account-menu{
    border: 1px solid #eee;
    border-radius: 10px;
}
.account-menu .sl{
    width: 100%;
    display: inline-block;
    padding: 20px 15px;
    margin-bottom: 0;
    border-bottom: 1px solid #eee;
    color: unset;
}
.account-menu .sl:last-child{
    border-bottom: 0px;
}
.account-menu .sl div{
    display: inline-block;
}
.account-menu .sl .l{
    float: left;
    margin: 5px 14px -5px;
}
.account-menu .sl.btns{
    text-align: center;
    margin-top: 20px;
}
.account-menu .sl.btns > div{
    padding: 0 5px;
    width: 48%;
}
.account-menu .sl.btns button{
    height: 40px;
}
.account-menu img{
    width: 18px;
    vertical-align: middle;
    margin-left: 10px;
}

.account-menu.avatar{
    border: 0px;
    border-bottom: 1px solid #eee;
    margin: -10px;
    border-radius: 0;
}
.account-menu.avatar img{
    width: 96px;
    border-radius: 50%;
    margin: -35px 0 0 10px;
}
.account-menu.avatar .l img{
    width: 24px;
    border-radius: 0;
    margin: 36px 0 0;
}
</style>