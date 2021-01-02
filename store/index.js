export const state = () => ({
	_home:{
		selectedShop: true,
	}
});

export const mutations = {
	CHANGE_LAYOUT_HOME(state, val){
		state._home[val[0]] = val[1];
	},
}