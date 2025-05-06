function initialize() {
	 document.querySelectorAll("a").forEach(
		a => {
			a.href =
				"https://www.lego.com/en-us/service/buildinginstructions/" +
				a.href.split("/")[a.href.split("/").length - 1]
			;
		}
	);
	 document.querySelectorAll("img").forEach(
		img => {
			img.src =
				"https://www.lego.com/cdn/product-assets/product.img.pri/" +
				img.src.split("/")[img.src.split("/").length - 1] +
				".jpg"
			;
		}
	);
}
