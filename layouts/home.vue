<template>
  <v-app>
  	<div class="header">
		<div class="header-sec">
			<img src="~/assets/images/home/icon1.png" style="width:42px;margin:9px;">
		</div>
		<div class="header-sec text-center">
			<img src="~/assets/images/home/logo.png" style="height:42px;margin:9px;">
		</div>
		<div class="header-sec text-left">
			<div v-if="selectedShop">
				<img src="~/assets/images/home/icon2.png" style="width:42px;margin:9px;">
				<img src="~/assets/images/home/ok.png" style="width:38px;margin:11px 0 11px 11px;border-radius:10px;">
			</div>
		</div>
  	</div>
  	<div class="body">
  		<Nuxt />
  	</div>
  	<div class="footer">
		<div class="footer-sec">
			<img src="~/assets/images/home/icon3.png">
			<div class="fs-10">خانه</div>
		</div>
		<div class="footer-sec">
			<img src="~/assets/images/home/icon4.png">
			<div class="fs-10">دسته بندی</div>
		</div>
		<div class="footer-sec">
			<img src="~/assets/images/home/icon5.png">
			<div class="fs-10">سبد خرید</div>
		</div>
		<div class="footer-sec">
			<img src="~/assets/images/home/icon6.png">
			<div class="fs-10">سفارشات</div>
		</div>
		<div class="footer-sec">
			<img src="~/assets/images/home/icon7.png">
			<div class="fs-10">لیست خرید</div>
		</div>
  	</div>
  </v-app>
</template>

<script>
export default{
	data(){
		return{
		}
	},
	computed:{
		selectedShop() {
			return this.$store.state._home.selectedShop;
		}
	}

};
</script>

<style scoped>
.header{
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	width: 100%;
	height: 60px;
	box-shadow: 0 0 1px rgba(35,40,45,.25);
	display: flex;
}
.header-sec{
	flex: 1;
}
.body{
	margin: 60px 0;
	padding: 10px;
}
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	width: 100%;
	height: 60px;
	box-shadow: 0 0 1px rgba(35,40,45,.25);
	display: flex;
}
.footer-sec{
	flex: 1;
	text-align: center;
	color: gray;
}
.footer-sec img{
	width:36px;
	margin:7px 7px -14px;
}
</style>