function initialize() {
	document.querySelectorAll("a").forEach(
		a => {
			a.href =
				"https://www.lego.com/en-us/service/buildinginstructions/" +
				a.href.split("/")[a.href.split("/").length()]
			;
		}
		);
}
