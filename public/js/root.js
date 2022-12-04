// Variables
Object.defineProperty(window, "__games", {
	writable: false,
	value: {
		"roblox": {
			icon: "/images/games/roblox.png",
			url: "https://now.gg/apps/roblox-corporation/5349/roblox.html"
		},
		"stumble": {
			icon: "/images/games/stumble.png",
			url: "https://now.gg/apps/kitka-games/7999/stumble-guys.html"
		},
		"slope": {
			icon: "/images/games/slope.png",
			url: "https://kdata1.com/2020/05/slope/"
		},
		"krunker": {
			icon: "/images/games/krunker.png",
			url: "https://krunker.io/"
		},
		"cookie": {
			icon: "/images/games/cookie.png",
			url: "https://orteil.dashnet.org/cookieclicker/"
		},
		"superhot": {
			icon: "/images/games/superhot.png",
			url: "https://phant0m.netlify.app/game/superhot/"
		},
		"vex 4": {
			icon: "/images/games/roblox.png",
			url: "https://html5.gamedistribution.com/80e6a5ae477f4d4fbcd1ea293d10087d/?gd_sdk_referrer_url=https%3A%2F%2Fwww.crazygames.com%2Fgame%2Fvex-4"
		},
		"snowball.io": {
			icon: "/images/games/roblox.png",
			url: "https://snowball-io.io/"
		},
		"1v1.lol": {
			icon: "/images/games/1v1lol.png",
			url: "https://1v1.lol/"
		},
		"run 3": {
			icon: "/images/games/slope.png",
			url: "https://player03.com/run/3/beta/"
		},
		"discord": {
			icon: "/images/discord.png",
			url: "https://discord.com/app/"
		},
	}
})

// Settings
localStorage.setItem("__rogueconfig", JSON.stringify({
	method: "frame", // frame or page
	proxy: "uv"
}));

// Utils
window.__openApp = (uri) => {
	const __config = JSON.parse(localStorage.getItem("__rogueconfig"));
	const __proxyConfig = __config.proxy == "uv" ? self.__uv$config : self.__osana$config;
	const _urlEncode = __config.proxy == "uv" ? __proxyConfig.encodeUrl : __proxyConfig.codec.encode;
 
	if (new URL(uri).origin == location.origin) {
		location.assign(uri);
	}
		
	else {
		window.navigator.serviceWorker.register('./sw.js', {
			scope: __proxyConfig.prefix
		}).then(() => {
			if (__config.method == "page") {
				if (!(window.self !== window.top)) window.location.assign(__proxyConfig.prefix + _urlEncode(uri));
				else {
					window.top.location.assign(__proxyConfig + _urlEncode(uri));
				}
			} else {
				const IFRAME = `<title>Google</title><link rel="icon" type="image/x-icon" href="https://google.com/favicon.ico"><iframe src="${location.origin + __proxyConfig.prefix + _urlEncode(uri)}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Your browser doesn't support iframes
</iframe>`;
				window.top.history.replaceState({}, "", "/");
				if (!(window.self !== window.top)) window.document.write(IFRAME);
				else window.top.document.write(IFRAME);
			}
		});
	}
}
