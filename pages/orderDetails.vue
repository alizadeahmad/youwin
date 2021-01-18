<template>
    <div class="order-wrapper">

        <div class="fs-12 mt-4 mb-2">جزئیات سفارش</div>
        <div class="order fs-14">
            <div class="sl">
                <div class="gray--text">شماره سفارش: {{ $cn(123456789, false) }}</div><div class="l">تاریخ: {{ $cn('99/04/12') }}</div>
            </div>
            <div class="sl">
                <div class="gray--text">زمان تحویل:</div><div class="l">امروز {{ $cn('12:00') }} الی {{ $cn('14:00') }}</div>
            </div>
            <div class="sl">
                <div class="gray--text">وضعیت سفارش:</div><div class="l">در انتظار تایید</div>
            </div>
            <div class="sl">
                <div class="gray--text">سفارش دهنده:</div><div class="l">سجاد ملاحسینی</div>
            </div>
            <div class="sl">
                <div class="gray--text">آدرس تحویل:</div><div class="l" style="max-width:65%">یزد، امامشهر، انتهای بلوار کارگر، کوچه توحید</div>
            </div>
        </div>

        <div class="fs-12 mt-6 mb-2">آیتم های سفارش</div>
        <div class="order products-item fs-14 fw-500">
            <div class="sl">
                <div>
                    <img src="/images/tmp/1.jpg">
                    شیر پر چرب هراز حجم 1 لیتر
                </div>
                <div class="l">1 عدد</div>
            </div>
            <div class="sl">
                <div>
                    <img src="/images/tmp/2.jpg">
                    آبمیوه سیب موز سان استار
                </div>
                <div class="l">1 عدد</div>
            </div>
        </div>

        <div class="fs-12 mt-6 mb-2">جزئیات پرداخت</div>
        <div class="order fs-14">
            <div class="sl">
                <div class="gray--text">مجموع سفارش:</div><div class="l">{{ $cn(110000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="gray--text">هزینه بسته بندی:</div><div class="l">{{ $cn(50000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="gray--text">هزینه ارسال:</div><div class="l">{{ $cn(50000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="gray--text">مجموع تخفیف:</div><div class="l">{{ $cn(10000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="gray--text">مبلغ کل:</div><div class="l">{{ $cn(220000) }} ریال</div>
            </div>
            <div class="sl">
                <div class="gray--text">وضعیت پرداخت:</div><div class="l secondary--text">پرداخت شده آنلاین</div>
            </div>
        </div>

        <div class="re-ordering">
            <v-btn
                color="accent"
                block
                to="/home"
                rounded
                x-large>
                سفارش مجدد
            </v-btn>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'جزئیات سفارش']);
    },
    data(){
        return{
        }
    }
};
</script>

<style scoped>
.order-wrapper{
    padding-bottom: 80px;
}
.order-empty{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: calc(50vh - 142px);
}
.order-empty img{
    width: 96px;
}
.order{
    border: 1px solid #ddd;
    padding: 20px 20px 10px;
    border-radius: 10px;
}
.order .sl{
    margin-bottom: 10px;
    width: 100%;
    display: inline-block;
}
.order .sl div{
    display: inline-block;
}
.order .sl .l{
    float: left;
}
.order .sl.btns{
    text-align: center;
    margin-top: 20px;
}
.order .sl.btns > div{
    padding: 0 5px;
    width: 48%;
}
.order .sl.btns button{
    height: 40px;
}

.products-item{
    padding: 0;
}
.products-item .sl{
    padding: 10px;
    margin-bottom: 0;
    border-bottom: 1px solid #eee;
}
.products-item .sl:last-child{
    border-bottom: 0px;
}
.products-item img{
    width: 48px;
    vertical-align: middle;
    margin-left: 10px;
}
.products-item .l{
    padding-top: 15px;
}
.re-ordering{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
}
</style>