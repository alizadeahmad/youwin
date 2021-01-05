<template>
	<div class="swiper-slide" :class="{added: isAdded}">
		<div class="product-image">
        	<img :src="image">
		</div>
		<div class="product-name">{{ name }}</div>
		<div class="ac-section text-right pr-2">
			<div class="d-ib mt-3">
				<div class="product-price-discount fs-10 gray--text"><span class="price-discount">{{ cn(priceDiscount) }}</span> <span class="currency">ریال</span></div>
				<div class="product-price primary--text fs-14">{{ cn(price) }} <span class="currency gray--text">ریال</span></div>
			</div>
			<div class="add-cart accent d-ib" @click="isAddedCheck">
				<img src="/images/home/shoppingcart_w.png">
			</div>
		</div>
		<div class="pm-section">
			<div class="minus-cart error--text d-ib" @click="paCountCheck(false)">
				<img src="/images/home/minus.png">
			</div>
			<div class="count-cart d-ib mt-4">{{ paCount }}</div>
			<div class="plus-cart secondary--text d-ib" @click="paCountCheck(true)">
				<img src="/images/home/plus.png">
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		id:{
			type: Number
		},
		image:{
			type: String
		},
		name:{
			type: String
		},
		priceDiscount:{
			type: String
		},
		price:{
			type: String
		}
	},
	data(){
		return{
			paCount: 0,
			isAdded: false,
		}
	},
	methods:{
		isAddedCheck(){
			this.isAdded = true;
			this.paCountCheck(true);
		},
		paCountCheck(s){
			this.paCount = s ? this.paCount+1 : this.paCount-1;
			if(this.paCount == 0){
				this.isAdded = false;
			}
			let obj = {
				id: this.id,
				count: this.paCount,
				name: this.name,
				price: this.price,
				image: this.image
			};
            this.$store.commit('_CART_SYNC', obj);
		},
		cn(n){
			n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			n = n.toString();
			return n.replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳")
				     .replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶")
				     .replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹").replace(/0/g, "۰");
		}
	},
	watch:{
	}
};
</script>

<style scoped>
.swiper-slide{
	width: 150px;
	height: 220px;
	background-color: #f9f9f9;
	border-radius: 10px;
	box-shadow: 0 4px 6px -3px rgba(0,0,0,.25);
	text-align: center;
}
a{
	text-decoration: none;
}
.product-image{
	padding: 10px;
	max-width: 130px;
	max-height: 130px;
}
.product-image img{
	border-radius: 5px;
	/*width: 100%;*/
}
.product-name{
	font-size: 12px;
	color: #5d5e5d;
}
.product-price-discount .price-discount{
	text-decoration: line-through;
}
.add-cart{
	padding: 10px;
	width: 24px;
	height: 24px;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 0 10px 0 10px;
	overflow: hidden;
}
.d-ib{
	display: inline-block;
}
.hide{
	display: none;
}

.minus-cart, .plus-cart{
	position: absolute;
	bottom: 0;
	padding: 5px;
	width: 30px;
	height: 30px;
	border: 2px solid;
}
.minus-cart{
	right: 0;
	border-radius: 10px 0 10px 0;
}
.plus-cart{
	left: 0;
	border-radius: 0 10px 0 10px;
}
.count-cart{
}
.pm-section{
	display: none;
}
.swiper-slide.added .ac-section{
	display: none;
}
.swiper-slide.added .pm-section{
	display: block;
}
</style>