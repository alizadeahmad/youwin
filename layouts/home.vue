<template>
  <v-app>
  	<div class="header">
		<div class="header-sec">
			<img src="/images/home/icon1.png" style="width:42px;margin:9px;">
		</div>
		<div class="header-sec text-center">
			<img src="/images/home/logo.png" style="height:42px;margin:9px;">
		</div>
		<div class="header-sec text-left">
			<div v-if="selectedShop">
				<img src="/images/home/icon2.png" style="width:42px;margin:9px 5px;">
				<img src="/images/home/ok.png" style="width:38px;margin:11px 0 11px 11px;border-radius:10px;">
			</div>
		</div>
  	</div>
  	<div class="body">
  		<Nuxt />
  	</div>
  	<div class="footer">
		<div v-for="(menu, i) in menus" :key="menu.label" class="footer-sec" :class="{'primary--text': wmenu == i}" @click="menuSit(i)">
			<img :src="menu.img" />
			<div class="fs-10">{{ menu.label }}</div>
		</div>
  	</div>
  </v-app>
</template>

<script>
export default{
	data(){
		return{
			menus:[
				{img: '/images/home/icon3.png', label: 'خانه'},
				{img: '/images/home/icon4.png', label: 'دسته بندی'},
				{img: '/images/home/icon5.png', label: 'سبد خرید'},
				{img: '/images/home/icon6.png', label: 'سفارشات'},
				{img: '/images/home/icon7.png', label: 'لیست خرید'}
			],
			wmenu: 0,
		}
	},
	methods:{
		menuSit(i){
			this.wmenu = i;
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
	z-index: 98;
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
	z-index: 99;
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