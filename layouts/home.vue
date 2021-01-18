<template>
  <v-app>

    <transition name="fade">
        <div class="modal" v-if="!modalSelectShop" @click="closeModalSelectShop">
            <div class="modal-wrapper pb-4" @click.stop>
                <div class="modal-header text-center fs-14 gray--text mb-4">انتخاب فروشگاه</div>
                <div class="modal-body">
                    <div class="shops" @click="selectedShop(i)" v-for="i in 3">
                        <div class="shop-logo">
                            <img class="logo" src="/images/home/ok.png">
                            <Stars rate="3" class="shop-star"/>
                        </div>
                        <div class="shop-name pt-1 pr-3">
                            <h1 class="primary--text fs-14">فروشگاه افق کوروش {{ i }}</h1>
                            <div class="gray--text mt-3 fs-11">یزد، بلوار 22 بهمن، جنب چرخ گردون</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
    </transition>

  	<div class="header">
		<div class="header-sec">
			<img src="/images/home/icon1.png" style="width:42px;margin:9px;" @click="goAcoount">
		</div>
		<div class="header-sec text-center">
			<img src="/images/home/logo.png" style="height:42px;margin:9px;">
		</div>
		<div class="header-sec text-left">
			<div v-if="selectedShop">
				<img src="/images/home/icon2.png" style="width:42px;margin:9px 5px;" @click="goNotif">
				<img src="/images/home/ok.png" style="width:38px;margin:11px 0 11px 11px;border-radius:10px;" @click="changeShop">
			</div>
		</div>
  	</div>
  	<div class="body">
  		<Nuxt />
  	</div>
  	<div class="footer">
		<div v-for="(menu, i) in menus" :key="menu.label" class="footer-sec" @click="menuSit(i)">
			<nuxt-link :to="menu.link" :class="{'primary--text': wmenu == i}">
				<div class="cart-count" v-if="i == 2 && _CART.count">{{ _CART.count }}</div>
				<img :src="wmenu == i ? menu.img : menu.img_d" />
				<div class="fs-10">{{ menu.label }}</div>
			</nuxt-link>
		</div>
  	</div>
  </v-app>
</template>

<script>
export default{
	data(){
		return{
			menus:[
				{link:'/home', img: '/images/home/home.png', img_d: '/images/home/home_d.png', label: 'خانه'},
				{link:'/category', img: '/images/home/menu.png', img_d: '/images/home/menu_d.png', label: 'دسته بندی'},
				{link:'/cart', img: '/images/home/shoppingcart.png', img_d: '/images/home/shoppingcart_d.png', label: 'سبد خرید'},
				{link:'/orders', img: '/images/home/my_order.png', img_d: '/images/home/my_order_d.png', label: 'سفارشات'},
				{link:'/list', img: '/images/home/shoppinglist.png', img_d: '/images/home/shoppinglist_d.png', label: 'لیست خرید'}
			]
		}
	},
	methods:{
		menuSit(i){
            this.$store.commit('_HOME', ['wmenu', i]);
		},
		changeShop(){
            this.$store.commit('_HOME', ['selectedShop', null]);
		},
        closeModalSelectShop(){

        },
        selectedShop(i){
            this.$store.commit('_HOME', ['selectedShop', i]);
        },
        goAcoount(){
        	this.$router.push('/account');
        },
        goNotif(){
        	this.$router.push('/notif');
        }
	},
	computed:{
		wmenu(){
            return this.$store.state._home.wmenu;
		},
        _CART() {
            let _cart = this.$store.state._CART;
            return _cart;
        },
        modalSelectShop(){
            return this.$store.state._home.selectedShop;
        }
    },

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
	position: relative;
	text-align: center;
}
.footer-sec a{
	text-decoration: none;
	color: gray;
}
.footer-sec img{
	width:32px;
	margin:7px 7px -10px;
}
.footer .cart-count{
	position: absolute;
    font-size: 10px;
    background: #33cf86;
    min-width: 16px;
    height: 16px;
    color: #fff;
    line-height: 18px;
    border-radius: 50%;
    top: 8px;
    left: calc(50% + 5px);
}
</style>