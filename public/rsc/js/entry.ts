window.__XEN_WEBPACK = { core: {}, html: {} };

var PreloadComponent = require("./preload.js");
var FileSystemComponent = require("./vfs.ts");
var AppManagerComponent = require("./AppManager.js");
var AppLoaderComponent = require('./AppLoader.js');
var CoreScriptComponent = require("./core.js");
var LeaderComponent = require("./index.js");
var SetupComponent = require("./setup.js");
var BatteryComponent = require("./battery.js");
var dragComponent = require("./draggable.js");

// var PredictionAlgorithmComponent = require('./predict.js')
// var ToolTipLibrary = require('tippy.js');

navigator.serviceWorker.register("/sw.js", {
	scope: "/",
});

function testInstall(sample: string) {
	// Test install
	navigator.serviceWorker.addEventListener("message", async event => {
		const resp = await fetch(event.data);

		const body = await resp.text();

		console.log(
			body === sample ? "App installs work" : "App install failed"
		);
	});

	navigator.serviceWorker.ready.then(registration =>
		registration.active.postMessage({
			manifest: {
				publisher: "test",
				project: "sample",
			},
			file: "index.html",
			content: sample,
		})
	);
}


