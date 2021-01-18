<template>
  <v-app>
  	<div class="header">
		<div class="header-sec">
			<img src="/images/back.png" style="width:32px;margin:14px 14px 14px 8px;vertical-align:middle" @click="to">
			<span class="fs-14">{{ title }}</span>
		</div>
  	</div>
  	<div class="body">
  		<Nuxt />
  	</div>
  </v-app>
</template>

<script>
export default{
	data(){
		return{
		}
	},
	methods:{
		to(){
			this.$router.back();
		}
	},
	computed:{
		title(){
            return this.$store.state._home.title;
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
	margin: 60px 0 10px;
	padding: 10px;
}
</style>