function stealthInit() {
	window.__location = new URL(location.href);
	history.replaceState({}, "", "/");
}

stealthInit();