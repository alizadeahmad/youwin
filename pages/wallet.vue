<template>
    <div class="wallet-wrapper">
        <div class="wallet-summary">
            <div class="sl">
                <div class="">
                    <div class="fs-14">موجودی فعلی</div>
                    <div class="mt-2 fs-24 primary--text db">{{ $cn(250000) }} <span class="fs-12">ریال</span></div>
                </div>
                <div class="l">
                    <nuxt-link class="hw" to="/commission">
                        <img src="/images/account/percentage_h.svg">
                        <div class="fs-12">سوابق پورسانت</div>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="fs-14 fw-600 mt-6 mb-2">افزایش اعتبار</div>
        <div class="increase-credit fs-14">
            <div class="text-center">
                <div class="ic">{{ $cn(100000) }} ریال</div>
                <div class="ic">{{ $cn(200000) }} ریال</div>
                <div class="ic">{{ $cn(500000) }} ریال</div>
            </div>
            <div class="text-center mt-10">
                <img src="/images/home/minus.png" class="icb error--text">
                <span class="ict gray--text">مبالغ دیگر</span>
                <img src="/images/home/plus.png" class="icb secondary--text">
            </div>
        </div>


        <div class="increase-credit-btn">
            <v-btn
                color="accent"
                block
                rounded
                x-large>
                افزایش اعتبار
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'کیف پول من']);
    },
    data(){
        return{
        }
    }
};
</script>

<style scoped>
.wallet-wrapper{
    padding-bottom: 60px;
}
.wallet-summary{
    margin: 16px -10px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}
.wallet-summary .sl > div{
    display: inline-block;
    width: calc(50% - 3px);
    text-align: center;
}
.wallet-summary img{
    width: 36px;
}
.wallet-summary .hw{
    display: inline-block;
    width: 100px;
    height: 100px;
    padding: 20px 0;
    color: #33cf86;
    background-color: #effff8;
    border: 1px solid;
    border-radius: 10px;
    text-decoration: none;
}
.increase-credit{
    border: 1px solid #eee;
    padding: 20px 10px;
    border-radius: 10px;
}
.increase-credit .ic{
    border: 1px solid #fc5830;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 100px;
}
.increase-credit .icb{
    width: 26px;
    border: 2px solid;
    border-radius: 50%;
    vertical-align: middle;
}
.increase-credit .ict{
    margin: 0 50px;
}
.increase-credit-btn{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
}
</style>