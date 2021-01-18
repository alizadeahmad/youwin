<template>
    <div class="cart-wrapper">
        <div class="cart-empty" v-if="!cart.count">
            <div>
                <img src="/images/cart/preshoppingcart.svg">
                <div class="mt-4 fs-14 gray--text">سبد خرید شما خالی است</div>
            </div>
        </div>

        <div class="cart" v-if="cart.count">
            <CartRow
                :isExists="true"
                name="شیر پر چرب هراز حجم 1 لیتری "
                :price="123456"
                :count="2"
            />
            <CartRow
                :isExists="false"
                name="شیر پر چرب هراز حجم 1 لیتری "
            />
        </div>
        <div class="cart-summary gray--text" v-if="cart.count">
            <div class="fs-14">
                <span>سود شما از این خرید:</span>
                <span class="float-left">{{ $cn(10000) }} ریال</span>
            </div>
            <div class="mt-2 fs-18">
                <span>قیمت کل سبد خرید:</span>
                <span class="float-left">{{ $cn(25000) }} ریال</span>
            </div>
            <div class="mt-4">
                <v-btn
                    color="secondary"
                    elevation="1"
                    rounded
                    block
                    to="/completeInfo"
                    x-large>
                    تایید و ادامه
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'home',
    mounted() {
        this.$store.commit('_HOME', ['wmenu', 2]);
    },
    data(){
        return{
        }
    },
    computed:{
        cart(){
            return this.$store.state._CART;
        }
    }
};
</script>

<style scoped>
.cart-wrapper{
    padding-bottom: 160px;
}
.cart-empty{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: calc(50vh - 142px);
}
.cart-empty img{
    width: 96px;
}
.cart-summary{
    background-color: #f2f2f2;
    position: fixed;
    bottom: 60px;
    width: calc(100% - 20px);
    padding: 20px;
    border-radius: 15px 15px 0 0;
}
</style>