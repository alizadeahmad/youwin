<template>
    <div class="cart-wrapper mt-6">


        <div class="summary-list">
            <div class="sl">
                <div class="fs-14 gray--text">مجموع سفارش:</div><div class="l">{{ $cn(110000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="fs-14 gray--text">هزینه بسته بندی:</div><div class="l">{{ $cn(50000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="fs-14 gray--text">هزینه ارسال:</div><div class="l">{{ $cn(50000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="fs-14 gray--text">مجموع تخفیف:</div><div class="l">{{ $cn(10000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="fs-14 gray--text">مبلغ کل:</div><div class="l">{{ $cn(220000) }} ریال</div>
            </div>
            <div class="sl discount mt-10">
                <div class="r">
                    <a-input
                        v-model="vModel"
                        label="کد تخفیف"
                        required />
                </div>
                <div class="l">
                    <v-btn
                        color="secondary"
                        elevation="1"
                        class="h50"
                        x-large>
                        اعمال
                    </v-btn>
                </div>
            </div>
        </div>

        <div>
            <div class="payment-types">
                <div class="payment-type" @click="paymentTypeSelect(1)" :class="{selected: paymentType==1}">
                    <div class="payment-type-image"><img src="/images/cart/wallet_g.svg" width="48"></div>
                    <div class="payment-type-text">
                        <div class="t">پرداخت اعتباری</div>
                        <div class="d">پرداخت از طریق کیف پول <span class="h">اعتبار کافی</span></div>
                    </div>
                </div>
                <div class="payment-type" @click="paymentTypeSelect(2)" :class="{selected: paymentType==2}">
                    <div class="payment-type-image"><img src="/images/cart/credit-card_g.png" width="48"></div>
                    <div class="payment-type-text">
                        <div class="t">پرداخت آنلاین</div>
                        <div class="d">پرداخت از طریق کارت های عضو شبکه شتاب</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <v-btn
                color="secondary"
                elevation="1"
                rounded
                block
                to="/invoice"
                x-large>
                تایید و ادامه
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'فاکتور پرداخت']);
    },
    data(){
        return{
            vModel: '', // temp
            paymentType: null,
        }
    },
    methods:{
        paymentTypeSelect(i){
            this.paymentType = i;
        },
    }
};
</script>

<style scoped>
.h50{
    height: 49px !important;
}
.summary-list{
    border: 1px solid #ddd;
    padding: 20px 20px 0;
    border-radius: 10px;
}
.summary-list .sl{
    margin-bottom: 10px;
}
.summary-list .sl div{
    display: inline-block;
}
.summary-list .sl .l{
    float: left;
}
.discount .r{
    width: calc(100% - 100px);
}

.payment-type{
    display: flex;
    border: 1px solid #cfd2cc;
    border-radius: 10px;
    margin-top: 15px;
    padding: 20px 15px;
}
.payment-type-image{
    padding: 8px;
    width: 48px;
    height: 48px;
}
.payment-type-text{
    padding: 0 15px;
}
.payment-type .t{
    font-size: 14px;
    font-weight: 600;
}
.payment-type .d{
    margin-top: 4px;
    font-size: 12px;
    color: gray;
    min-width: 200px;
}
.payment-type .h{
    float: left;
}
/* SELECTED */
.payment-type.selected{
    border-color: #33cf86;
    background-color: #effff8;
}
.payment-type.selected .d{
    color: #33cf86;
}
</style>