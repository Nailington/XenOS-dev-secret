function warning(a) {
	console.warning(
		"%c " + a,
		"color:white;font-weight:bold;background-color:#de5b00;font-size:20px;"
	);
}
function bad(a) {
	console.error(
		"%c " + a,
		"color:white;font-weight:bold;background-color:red;font-size:20px;"
	);
}
function good(a) {
	console.error(
		"%c " + a,
		"color:white;font-weight:bold;background-color:green;font-size:20px;"
	);
}

window.__XEN_WEBPACK.core.AppManagerComponent = class AMC {
	constructor() {
		this.apps = {
			appsInstalled: [{ WelcomeToXenOS: { repository: "none/preload" } }],
		};
	}

	async #install(author, proj, file, content) {
		navigator.serviceWorker.addEventListener("message", async event => {
			//console.log(event.data);
			console.log("Installed!");
		});

		navigator.serviceWorker.ready.then(registration =>
			registration.active.postMessage({
				info: {
					author: author,
					project: proj,
				},
				file: file,
				content: content,
			})
		);
	}

	async install(
		pkg,
		repo = "https://xenos-app-repository.enderkingj.repl.co"
	) {
		const [author, project] = pkg.split("/");

		var percent = 0;

		// prefetch app details
		percent += 1;
		console.log(
			`%cXenOS PKG\n%c FETCH: META\n%c${Array.from("x".repeat(percent))
				.map(e => "=")
				.join("")}`,
			"background:white;font-family:sans-serif;color:black;padding:3px;border-radius:4px;font-size:18px;",
			"font-size:16px;color:white;",
			"background: rgb(255, 255, 255, 0.1;font-size:15px;"
		);

		var metaBody = {
			id: pkg,
		};

		var meta = await (
			await fetch(repo + "/stream", {
				method: "POST",
				body: JSON.stringify(metaBody),
			})
		).json();
		percent += 19;

		console.log(
			`%c SUCCESS: ${meta.name}\n%c${Array.from("x".repeat(percent))
				.map(e => "=")
				.join("")}%c`,
			"font-size:16px; color:white;",
			"font-size:15px; color:white;",
			"background: rgb(255, 255, 255, 0.1;"
		);

		metaBody.session = meta.session;

		var togo = 100 - percent - 20;
		var per = togo / meta.assets.length;

		for (let asset of meta.assets) {
			metaBody.asset = asset;

			console.log(
				`%c FETCH: ${meta.name}/${asset}\n%c${Array.from(
					"x".repeat(percent)
				)
					.map(e => "=")
					.join("")}%c`,
				"font-size:16px; color:white;",
				"font-size:15px; color:white;",
				"background: rgb(255, 255, 255, 0.1;"
			);

			percent += Math.floor(per);

			var resp = await fetch(repo + "/download", {
				method: "POST",
				body: JSON.stringify(metaBody),
			});

			var body = await resp.text();

			console.log(
				`%c SUCCESS: ${meta.name}/${asset}\n%c${Array.from(
					"x".repeat(percent)
				)
					.map(e => "=")
					.join("")}%c`,
				"font-size:16px; color:white;",
				"font-size:15px; color:white;",
				"background: rgb(255, 255, 255, 0.1;"
			);

			await this.#install(author, project, asset, body);
		}

		console.log(
			`%c FETCH: SESSION_CLEAR\n%c${Array.from("x".repeat(percent))
				.map(e => "=")
				.join("")}%c`,
			"font-size:16px; color:white;",
			"font-size:15px; color:white;",
			"background: rgb(255, 255, 255, 0.1;"
		);

		var resp = await fetch(repo + "/clear", {
			method: "POST",
			body: JSON.stringify(metaBody),
		});

		percent += 20;

		console.log(
			`%c SUCCESS: SESSION_CLEAR\n%c${Array.from("x".repeat(percent))
				.map(e => "=")
				.join("")}%c`,
			"font-size:16px; color:white;",
			"font-size:15px; color:white;",
			"background: rgb(255, 255, 255, 0.1;"
		);

		console.log(
			`%c SUCCESS: ${meta.name} DOWNLOADED\n%c${Array.from(
				"x".repeat(percent)
			)
				.map(e => "=")
				.join("")}%c`,
			"font-size:16px; color:white;",
			"font-size:15px; color:white;",
			"background: rgb(255, 255, 255, 0.1;"
		);
	}

	async launch(pkg, callbackFunc, openType) {
		const path = "/apps/" + pkg;
		const meta = await (await fetch(path + "/manifest.json")).json();

		if (meta.type === "app") {
			/*
      		var mainFile = await (await fetch(path + "/" + meta.entry)).text();

			window.xen.apps.loader.load(meta.name, mainFile);
      		*/
			
			const location = path + "/index.html";

			xen.system.register(meta.name, "10", "10", location);
		}

		if (meta.type === "embed") {
			const location = localStorage.get("prefix") + meta.embedUrl;

			// TODO: Convert xen.system.register to use promise and return the iframe element so that an inject script can be added to it

			xen.system.register(meta.name, "10", "10", location);
		}

		/*
		if (meta.type === "proxy") {
			const location = "/sw?proxy=" + meta.repo + "";

			navigator.serviceWorker
				.register(location, {
					scope: meta.proxyPrefix,
				})
				.then(reg => console.log(`Proxy ${meta.name} installed`))
				.catch(error =>
					console.log(
						`Failed to install proxy ${meta.name}: ${error}`
					)
				);
		*/
		}
		/*
		if (meta.type == "web") {
			const location = path + "/index.html";

			const appName = meta.name;
			let check = document.getElementById(meta.name);
			if (check === null) {
				if (pkg == null) {
					return new TypeError(
						"Failed to register: \n missing required arguments"
					);
				}

				// Where a new app is created in the UI
				const desk = document.getElementById("os-desktop");
				try {
					let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.focus(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);`;
					let closeCode = `xen.system.unregister("${appName}")`;
					let miniCode = `
xen.windowManager.modifyWindow("${appName}", "minimized", true);
document.getElementById('${appName}').style.animation = 'minimize 0.1s ease-out'
requestAnimationFrame(() => {
  setTimeout(() => {
  	document.getElementById('${appName}').style.display = 'none';
  	document.getElementById('${appName}').style.animation = ''
  }, 100);
});
  			`;
					let master = document.createElement("div");
					let headerBox = document.createElement("div");
					let headerTitle = document.createElement("div");
					let headerTitleText = document.createTextNode(appName);
					let boxBody = document.createElement("div");
					let closeSpan = document.createElement("span");
					let miniSpan = document.createElement("span");
					let contentFrame = document.createElement("iframe");

					master.dataset.appname = appName;
					master.classList.add("drag");
					master.classList.add("box");
					master.id = appName;
					master.setAttribute("onclick", injectCode);
					desk.appendChild(master);

					headerBox.classList.add("box-header");
					master.appendChild(headerBox);

					closeSpan.classList.add("os-exit");
					miniSpan.classList.add("os-mini");

					headerTitle.classList.add("box-header-title");
					headerTitle.appendChild(headerTitleText);
					headerTitle.appendChild(closeSpan);
					headerTitle.appendChild(miniSpan);
					headerBox.appendChild(headerTitle);

					boxBody.classList.add("box-body-inner");

					closeSpan.setAttribute("onclick", closeCode);
					closeSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
  	<rect width="188" height="185" rx="92.5" fill="#F46868"></rect>
  	</svg>`;

					miniSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
  	<rect width="188" height="185" rx="92.5" fill="#FFD43C"></rect>
  	</svg>`;
					miniSpan.setAttribute("onclick", miniCode);

					headerBox.appendChild(boxBody);

					boxBody.appendChild(contentFrame);

					contentFrame.src = location;
					contentFrame.contentWindow.addEventListener(
						"error",
						event =>
							console.log(
								"An error occurred in the iframe:",
								event.message
							)
					);

					xen.windowManager.addWindow(appName, master);
				} catch (e) {
					console.log(" Error: \n" + e);
				}

				desk.dispatchEvent(
					new CustomEvent("NewWindow", {
						window: appName,
						detail: { text: appName },
					})
				);
			} else {
				if (xen.windowManager.windows[appName].minimized) {
					document.getElementById(appName).style.display = "block";
					xen.windowManager.windows[appName].minimized = false;
				} else {
					throw new TypeError(
						"Failed to register: \n An app or window with the same name already exists."
					);
				}
			}
			callbackFunc(pkg);
		}
    */
	}
};
