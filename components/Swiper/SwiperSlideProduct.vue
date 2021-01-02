<template>
	<div class="swiper-slide">
			<div class="product-image">
	        	<img :src="image">
			</div>
			<div class="product-name">{{ name }}</div>
			<div class="text-right pr-2">
				<div class="d-ib mt-3">
					<div class="product-price-discount fs-10 gray--text"><span class="price-discount">{{ cn(priceDiscount) }}</span> <span class="currency">ریال</span></div>
					<div class="product-price primary--text fs-14">{{ cn(price) }} <span class="currency gray--text">ریال</span></div>
				</div>
				<div class="add-cart d-ib">
					<img src="/images/home/icon8.png">
				</div>
			</div>
		<nuxt-link :to="link">
		</nuxt-link>
	</div>
</template>

<script>
export default{
	props:{
		image:{
			type: String
		},
		name:{
			type: String
		},
		link:{
			type: String
		},
		priceDiscount:{
			type: String
		},
		price:{
			type: String
		}
	},
	methods:{
		cn(n){
			n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			n = n.toString();
			return n.replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳")
				     .replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶")
				     .replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹").replace(/0/g, "۰");
		}
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
	width: 40px;
	height: 40px;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 0 10px 0 10px;
	overflow: hidden;
}
.d-ib{
	display: inline-block;
}
</style>