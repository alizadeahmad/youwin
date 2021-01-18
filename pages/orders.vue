<template>
    <div class="order-wrapper">
        <div class="order-empty" v-if="!orders">
            <div>
                <img src="/images/orders/invoice.png">
                <div class="mt-4 fs-14 gray--text">سفارشات من در این قسمت نمایش داده می شوند</div>
                <!-- temp button -->
                <button @click="orders=true" style="border:1px solid; background: yellow;margin-top:10px">Show Sample Orders</button>
            </div>
        </div>

        <div class="orders" v-if="orders">
            <div class="order fs-14">
                <div class="sl">
                    <div class="gray--text">شماره سفارش: {{ $cn(123456789, false) }}</div><div class="l">تاریخ: {{ $cn('99/04/12') }}</div>
                </div>
                <div class="sl">
                    <div class="gray--text">مبلغ سفارش:</div><div class="l">{{ $cn(220000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="gray--text">زمان تحویل:</div><div class="l">امروز {{ $cn('12:00') }} الی {{ $cn('14:00') }}</div>
                </div>
                <div class="sl">
                    <div class="gray--text">وضعیت سفارش:</div><div class="l">در انتظار تایید</div>
                </div>
                <div class="sl btns">
                    <div>
                        <v-btn
                            color="primary"
                            outlined
                            block
                            to="/orderDetails"
                            rounded>
                            جزئیات سفارش
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                            color="accent"
                            elevation="1"
                            block
                            rounded>
                            سفارش مجدد
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'home',
    mounted() {
        this.$store.commit('_HOME', ['wmenu', 3]);
    },
    data(){
        return{
            orders: false
        }
    }
};
</script>

<style scoped>
.order-wrapper{
    padding-bottom: 160px;
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
    padding: 20px 20px 0;
    border-radius: 10px;
}
.order .sl{
    margin-bottom: 10px;
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
</style>