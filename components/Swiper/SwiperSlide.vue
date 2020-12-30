<template>
    <div class="swiper-slide text-center">
        <img :src="image" class="max-h-50">
        <h1>{{ header }}</h1>
        <p class="gray--text fs-12 mt-2">{{ title }}</p>
        <v-btn
        	v-if="button"
			color="primary"
			elevation="1"
			rounded
			large
			class="px-50"
			:class="btnClass"
			:to="link"
		>{{ button }}</v-btn>
    </div>
</template>

<script>
export default{
	props:{
		image:{
			type: String
		},
		header:{
			type: String
		},
		title:{
			type: String
		},
		button:{
			type: String
		},
		btnClass:{
			type: String
		},
		link:{
			type: String
		}
	}
};
</script>