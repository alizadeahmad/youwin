<template>
    <div class="a-input-wrapper mb-6">
    	<label>{{ label }}</label>
    	<textarea :class="className" :placeholder="placeholder" @input="$emit('input', $event.target.value)">{{ value }}</textarea>
    	<i class="material-icons">{{ icon }}</i>
    </div>
</template>

<script>
export default{
	props:{
		label:{
			type: String
		},
		icon:{
			type: String
		},
		value:{
			type: String,
		},
		className:{
			type: String
		},
		placeholder:{
			type: String,
		}
	}
};
</script>

<style scoped>
.a-input-wrapper{
	position: relative;
}
label{
	position: absolute;
	top: -8px;
	right: 8px;
	padding: 0 8px;
	font-size: 11px;
	color: #000;
	background-color: #fff;
}
textarea{
	width: 100%;
	border: 1px solid #cacaca;
	padding: 12px;
	border-radius: 5px;
	font-weight: 200;
	outline: 0;
}
textarea:focus{
	border-color: #666;
}
.material-icons{
	color: #aaa;
	position: absolute;
	top: 12px;
	left: 8px;
}
</style>
