export const state = () => ({
	_CART: {count:0, products:[]},
	_home:{
		wmenu: 0,
		selectedShop: null,
	}
});

export const mutations = {
	_CART_SYNC(state, obj){
		obj.date = new Date().toJSON().slice(0,10)+' '+new Date().toJSON().slice(11,19);
		let products = state._CART.products;
		if(obj.count){
			let isExists = false;
			for(let i in products){
				if(products[i].id == obj.id){
					products[i] = obj;
					isExists = true;
				}
			}
			if(!isExists){
				state._CART.products.push(obj);
			}
		}else{
			for(let i in products){
				if(products[i].id == obj.id){
					products.splice(i, 1);
				}
			}
		}

		// getCounts
		let counts = 0;
		for(let i in products) counts += products[i].count;

		state._CART.count = counts;
	},
	_HOME(state, val){
		state._home[val[0]] = val[1];
	},
}
