var _window = class WIN {
	constructor(options = {}, name) {
		this.opts = Object.assign(
			{
				frame: true,
				transparent: false,
				fullScreen: false,
				width: 800,
				height: 500,
				alwaysOnTop: false,
				show: true,
				x: 10,
				y: 10,
			},
			options
		);

		this.name = name;

		console.log(options);

		xen.system.register(
			name,
			options.x + "",
			options.y + "",
			undefined,
			false
		);
	}

	loadURL(url) {
		document.getElementById(this.name).querySelector("iframe").src = url;
	}

	loadFile(url) {}
};

var _NativeWindow = class NATWIN {
	constructor(window) {
		this.raw = window;
	}

	getBounds() {
		return {
			x: this.raw.location_x,
			y: this.raw.location_y,
			width: this.raw.el.offsetWidth,
			height: this.raw.el.offsetHeight,
		};
	}
};

_window.getAllWindows = function () {
	return Object.entries(xen.windowManager.windows).map(([name, window]) => {
		return window.native ? new _NativeWindow(window) : window;
	});
};

window.__XEN_WEBPACK.core.AppLoaderComponent = class ALC {
	window = _window;
	constructor() {}

	load(name, script = "") {
		{
			eval(`
(function(name) {
  ${script}
})("${name}");
      `);
		}
	}
};
