window.loadTabCloak = () => {
	function toggleBlur() {
		var elms = document.querySelector(".content").children;
		for (let i = 0; i < elms.length; i++) {
			var className = elms[i].className;
			if (!(className == "cloak" || className == "tabCloak"))
				elms[i].setAttribute("data-blur", elms[i].getAttribute("data-blur") == "true" ? "" : "true");
		}
	}
	toggleBlur();
	setTimeout(() => {
		document.querySelector(".tabCloak").id = "active";
	}, 500);
	window.addEventListener("mouseup", (evt) => {
		if (evt.target.className == "tabCloak") {
			toggleBlur();
			setTimeout(() => {
				document.querySelector(".tabCloak").id = "";
			}, 300);
		}
	})
}

function loadProxySelect() {
	let selector = document.querySelector("#proxyselect");
	var currentProxy = JSON.parse(localStorage.getItem("__rogueconfig")).proxy;
	var proxies = {
		uv: "Ultraviolet",
		ratic: "Ratic"
	}
	
	var _proxies = Object.keys(proxies);
	_proxies.sort(function(x,y){ return x == currentProxy ? -1 : y == currentProxy ? 1 : 0; });
	console.log(_proxies);
	for (let i = 0; i < _proxies.length; i++) {
		let t = [
			_proxies[i],
			proxies[_proxies[i]]
		];
		let opt = document.createElement("option");
		opt.setAttribute("value", t[0]);
		opt.innerText = t[1];
		selector.appendChild(opt);
	}

	selector.addEventListener("change", function() {
		var config = JSON.parse(localStorage.getItem("__rogueconfig"));
		config.proxy = selector.value;
		localStorage.setItem("__rogueconfig", JSON.stringify(config));
	});
}

function loadThemeSelect() {
	var currentTheme = JSON.parse(localStorage.getItem("__rogueconfig")).theme;
	
	const themes = {
		incog: "Incognito",
		main: "None",
		discord: "Discord",
	}

	var _themes = Object.keys(themes);
	_themes.sort(function(x,y){ return x == currentTheme ? -1 : y == currentTheme ? 1 : 0; });

	let selector = document.querySelector("#themeselect");

	for (let i = 0; i < _themes.length; i++) {
		let t = [
			_themes[i],
			themes[_themes[i]]
		];
		let opt = document.createElement("option");
		opt.setAttribute("value", t[0]);
		opt.innerText = t[1];
		selector.appendChild(opt);
	}

	selector.addEventListener("change", function() {
		var config = JSON.parse(localStorage.getItem("__rogueconfig"));
		config.theme = selector.value;
		localStorage.setItem("__rogueconfig", JSON.stringify(config));
		location.pathname = "/";
	});
}

function loadSettings() {
	loadProxySelect();
	loadThemeSelect();
}

loadSettings();