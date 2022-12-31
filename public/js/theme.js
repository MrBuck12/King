function loadTheme(theme) {
	if (!(theme == "main")) {
		function handle(node) {
			node.setAttribute("data-theme", theme);
		}

		var elms = document.querySelectorAll("*");
		for (let i = 0; i < elms.length; i++) {
			handle(elms[i]);
		}
	}
}

var them = JSON.parse(localStorage.getItem("__rogueconfig")).theme;
loadTheme(them);
console.log("Loaded Theme: " + them);