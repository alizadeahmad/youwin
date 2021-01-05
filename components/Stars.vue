<template>
    <div class="">
    	<span class="star-w" v-for="i in 5">
    		<img :src="getImg(i)" class="star">
    	</span>
    </div>
</template>

<script>
export default{
	props:{
		rate: String
	},
	methods:{
		getImg(i){
			return (i<=this.rate) ? '/images/star1.png' : '/images/star0.png';
		}
	}
};
</script>

<style scoped>
.star-w{
	width: 13px;
	height: 13px;
}
.star{
	width: 13px;
	height: 13px;
}
</style>
