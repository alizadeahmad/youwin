<template>
	<div class="swiper-slide">
		<nuxt-link :to="link">
	        <img :src="image" :class="className">
		</nuxt-link>
	</div>
</template>

<script>
export default{
	props:{
		image:{
			type: String
		},
		className:{
			type: String
		},
		link:{
			type: String
		}
	}
};
</script>

<style scoped>
.swiper-slide{
	width: auto;
}
</style>