<template>
    <div class="cart-product fs-14">
    	<div v-if="isExists" class="cart-product-w">
	        <div class="cart-product-title">
	            <div class="cart-product-name fw-600">
	                {{ name }}
	            </div>
	            <div class="cart-product-price gray--text">
	                {{ $cn(price) }} <span class="fs-14">ریال</span>
	            </div>
	        </div>
	        <div class="cart-product-count">
	            <div class="cart-product-count-select">
	                <img class="error--text" src="/images/home/minus.png" @click="productCount(false)">
	                <span class="cpct">{{ nCount }}</span>
	                <img class="secondary--text" src="/images/home/plus.png" @click="productCount(true)">
	            </div>
	            <div class="cart-product-final-price gray--text">
	                مجموع: <span class="primary--text fs-16">{{ $cn(nCount*price) }}</span> <span class="">ریال</span>
	            </div>
	        </div>
    	</div>
    	<div v-else class="cart-product-w isntExists">
	        <div class="cart-product-title">
	            <div class="cart-product-name gray--text fw-400">
	                {{ name }}
	            </div>
	            <div class="cart-product-price">
	                ناموجود
	                <img src="/images/exchange.svg">
	                <img src="/images/error.svg">
	            </div>
	        </div>
    	</div>
    </div>
</template>

<script>
export default{
	props:{
		name: String,
		price: Number,
		count: Number,
		isExists: Boolean
	},
	data(){
		return{
			nCount: this.count
		}
	},
	/*
	computed:{
		nCount(){
			return this.count
		}
	},*/
	methods:{
		productCount(s){
			this.nCount = s ? this.nCount+1 : this.nCount-1;
			if(this.nCount == 0){
				alert('Removed this order!');
			}
		}
	}
};
</script>

<style scoped>
.cart-product{
    margin: 15px 0;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(0,0,0,.15);
    overflow: hidden;
}
.cart-product-w{
    padding: 15px 10px;
}
.cart-product-title{
}
.cart-product-name{
    display: inline-block;
    width: calc(100% - 108px);
}
.cart-product-price{
    display: inline-block;
    width: 108px;
    float: left;
    text-align: left;
    font-size: 16px;
}

.cart-product-count{
    margin-top: 20px;
}
.cart-product-count-select{
    display: inline-block;
    width: 50%;
}
.cart-product-count-select img{
    width: 26px;
    border: 2px solid;
    border-radius: 50%;
    vertical-align: middle;
}
.cart-product-final-price{
    display: inline-block;
    width: 50%;
    text-align: left;
    float: left;
}
.cpct{
    display: inline-block;
    width: 40px;
    text-align: center;
}
.isntExists{
	background-color: #fff3f6;
}
.isntExists .cart-product-price{
	font-size: 14px;
	color: #f1224c;
}
.isntExists .cart-product-price img{
	width: 26px;
	vertical-align: middle;
}
</style>
