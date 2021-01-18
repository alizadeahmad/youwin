export default (context, inject) => {
	const cn = (n, comma=true) =>{
		n = comma ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : n;
		n = n.toString();
		return n.replace(/1/g, "۱").replace(/2/g, "۲").replace(/3/g, "۳")
				.replace(/4/g, "۴").replace(/5/g, "۵").replace(/6/g, "۶")
				.replace(/7/g, "۷").replace(/8/g, "۸").replace(/9/g, "۹").replace(/0/g, "۰");
	}
	inject('cn', cn);
}
