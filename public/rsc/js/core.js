const os_desk = document.getElementById("os-desktop");

os_desk.addEventListener("NewWindow", function (e) {
	console.log(`${e.detail.text} ${e.window} ${e}`);
});
console.log("Loaded CORESRC");

// INTERNAL USE
window.__XEN_WEBPACK.core.browser = class BrowserTool {
	constructor() {}
	fullscreen() {
		if (
			(document.fullScreenElement &&
				document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)
		) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(
					Element.ALLOW_KEYBOARD_INPUT
				);
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}
};

// System SubAPI
window.__XEN_WEBPACK.core.System = class System {
	constructor() {}

	begin() {
		console.log("Initializing XenOS");
		console.log("Getting Windows");
		const windowData = xen.windowManager.windows;
		localStorage.setItem("xen_window_data", JSON.stringify(windowData));
		const inStorageWindowData_Debug =
			localStorage.getItem("xen_window_data");
		console.log("Stored Window Data", inStorageWindowData_Debug);
		console.log("Registering Capture");
		console.log("Registering windowManager");
		console.log("Inserting DefaultWindow");

		const os_desk = document.getElementById("os-desktop");
		os_desk.innerHTML += `
<div
	id="defaultWindow"
	class="drag box"
	style="width: 613px; height: 518px; z-index: 10; top: 78px"
	onclick='const thisAppName = this.dataset.appname; xen.windowManager.focus(thisAppName);
console.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);'
	data-appname="defaultWindow"
>
	<div class="box-header">
		<div class="box-header-title">
			Welcome to XenOS :)
			<span
				class="os-mini"
				onclick=' xen.windowManager.modifyWindow("defaultWindow", "minimized", true);document.getElementById("defaultWindow").style.display = "none"'
			>
				<svg
					style="width: 12px; height: 15px"
					xmlns="http://www.w3.org/2000/svg"
					width="188"
					height="185"
					viewBox="0 0 188 185"
					fill="none"
				>
					<rect width="188" height="185" rx="92.5" fill="#FFD43C" />
				</svg> </span
			><span
				class="os-exit"
				onclick='xen.system.unregister("defaultWindow")'
			>
				<svg
					style="width: 12px; height: 15px"
					xmlns="http://www.w3.org/2000/svg"
					width="188"
					height="185"
					viewBox="0 0 188 185"
					fill="none"
				>
					<rect
						width="188"
						height="185"
						rx="92.5"
						fill="#F46868"
					/></svg
			></span>
		</div>
		<div class="box-body-inner">
			<iframe src="./welcome.html"> </iframe>
		</div>
	</div>
</div>
`;

		xen.windowManager.addWindow(
			"defaultWindow",
			document.getElementById("defaultWindow"),
			"location_x",
			"0px",
			"location_y",
			"37px"
		);
		console.log("Initialization complete");
		console.log("Clearing Console");

		setTimeout(() => {
			// console.clear();
			console.log(
				"%cWelcome to XenOS",
				"color:black; background-color:white; padding:5px; border-radius: 5px; line-height: 26px; font-size:30px;"
			);
		}, 3000);
		return true;
	}

	register(appName, posX, posY, location) {
		let check = document.getElementById(appName);
		if (check === null) {
			if ((appName, posX, posY == null)) {
				throw new TypeError(
					"Failed to register: \n missing required arguments"
				);
			} else {
				// Where a new app is created in the UI
				const os_desk = document.getElementById("os-desktop");
				try {
					let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.focus(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);`;
					let closeCode = `xen.system.unregister("${appName}")`;
					let miniCode = `xen.windowManager.modifyWindow("${appName}", "minimized", true);document.getElementById('${appName}').style.display = 'none'`;
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

					os_desk.appendChild(master);

					headerBox.classList.add("box-header");
					headerTitle.classList.add("box-header-title");
					boxBody.classList.add("box-body-inner");
					master.appendChild(headerBox);
					headerBox.appendChild(headerTitle);

					headerTitle.appendChild(headerTitleText);
					headerTitle.appendChild(closeSpan);
					headerTitle.appendChild(miniSpan);
					closeSpan.classList.add("os-exit");
					miniSpan.classList.add("os-mini");
					closeSpan.setAttribute("onclick", closeCode);
					miniSpan.setAttribute("onclick", miniCode);
					closeSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
<rect width="188" height="185" rx="92.5" fill="#F46868"></rect>
</svg>`;
					miniSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
<rect width="188" height="185" rx="92.5" fill="#FFD43C"></rect>
</svg>`;
					headerBox.appendChild(boxBody);

					boxBody.appendChild(contentFrame);
					contentFrame.src = location;
					master.setAttribute("onclick", injectCode);
					contentFrame.contentWindow.addEventListener(
						"error",
						function (event) {
							console.log(
								"An error occurred in the iframe:",
								event.message
							);
						}
					);
					xen.windowManager.addWindow(
						appName,
						master,
						"location_x",
						posX,
						"location_y",
						posY
					);
				} catch (e) {
					console.log("Xen Registration Error: \n" + e);
				}

				os_desk.dispatchEvent(
					new CustomEvent("NewWindow", {
						window: appName,
						detail: { text: appName },
					})
				);
			}
		} else {
			if (xen.windowManager.windows[appName].minimized == true) {
				document.getElementById(appName).style.display = "block";
				xen.windowManager.windows[appName].minimized = false;
			} else {
				throw new TypeError(
					"Failed to register: \n An app or window with the same name already exists."
				);
			}
		}
	}

	unregister(appName) {
		let win = document.getElementById(appName);
		win.innerHTML = ""; // Clear the content of the div
		win.remove(); // Remove the div from the DOM
		xen.windowManager.removeWindow(appName);
		console.log("Sucessfully unregistered window: " + appName);
	}

	launchpad(status) {
		const lp = document.getElementById("launchpad-overlay");
		if (status == true) {
			lp.style.display = "flex";
		} else {
			lp.style.display = "none";
		}
	}
};

// WindowManager SubAPI
window.__XEN_WEBPACK.WindowManager = class WindowManager {
	constructor() {
		this.windows = {};
		this.maximizedWindow = { name: null };
		this.activeWindow = { active: "null" };
		this.windowDrag = { drag: false };
	}

	focus(appName) {
		this.activeWindow.active = appName;
	}

	addWindow(id, el, ...props) {
		const windowProps = { el };
		Object.defineProperty(windowProps, "location_x", {
			get() {
				return windowProps._location_x;
			},
			set(val) {
				windowProps._location_x = val;
				el.style.left = val;
			},
		});
		Object.defineProperty(windowProps, "location_y", {
			get() {
				return windowProps._location_y;
			},
			set(val) {
				windowProps._location_y = val;
				el.style.top = val;
			},
		});

		for (let i = 0; i < props.length; i += 2) {
			windowProps["_" + props[i]] = props[i + 1];
		}
		this.windows[id] = windowProps;
	}
	removeWindow(id) {
		if (this.windows[id]) {
			delete this.windows[id];
		}
	}
	modifyWindow(id, prop, value) {
		if (this.windows[id]) {
			this.windows[id][prop] = value;
		}
	}
	getZIndex(id) {
		if (this.windows[id]) {
			return this.windows[id].zIndex;
		}
	}

	getLocation(id) {
		if (this.windows[id]) {
			const locationX = this.windows[id].location_x;
			const locationY = this.windows[id].location_y;
			const locationConcat = `X: ${locationX.replace(
				"px",
				""
			)} , Y: ${locationY.replace("px", "")}`;
			return locationConcat;
		}
	}

	getElement(id) {
		return this.windows[id].el;
	}
};

// window.__XEN_WEBPACK.app = class AppManager {
// 	constructor() {

//   }
// 	test(){
//     console.log('hi')
//   }
// };

window.__XEN_WEBPACK.core.NotificationComponent = class NotificationComponent {
	constructor() {
		this.notifications = {};
	}

	dispatch(name, description, icon) {
		const check = document.getElementById(name);

		if (check == null || check == undefined || check == "undefined") {
			const master = document.getElementById("os-desktop");
			const notiWrap = document.createElement("div");
			const iconWrap = document.createElement("div");
			const notiTitle = document.createElement("div");
			const notiDescription = document.createElement("div");
			master.appendChild(notiWrap);
			notiWrap.classList.add("os-notification-1");
			notiWrap.id = name;
			notiWrap.setAttribute("ondblclick", `this.style.display='none'`);
			notiWrap.appendChild(iconWrap);
			iconWrap.classList.add("os-notification-icon");
			iconWrap.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="447" height="112" viewBox="0 0 447 112" fill="none">
<rect x="243.5" y="39.5" width="18" height="34" rx="6.5" stroke="#F0F0F0" stroke-width="5"></rect>
<rect x="4" y="4" width="239" height="104" rx="26" stroke="white" stroke-width="8"></rect>
<rect x="15" y="17" rx="16" fill="white" style="width: 50px; fill: rgb(255, 255, 255);"></rect>
</svg>`;

			notiWrap.appendChild(notiTitle);
			notiTitle.innerText = name;
			notiTitle.classList.add("os-notification-title");

			notiWrap.appendChild(notiDescription);
			notiDescription.innerText = description;
			notiDescription.classList.add("os-notification-description");
		} else if (
			check !== null ||
			check !== undefined ||
			check !== "undefined"
		) {
			throw new TypeError(
				"Error while Dispatching: \n A notification with that name already exists."
			);
		}
	}
	retract(name) {
		let el = document.getElementById(name);
		el.style.display = "none";
	}
};

// OS MotherBoard API
window.__XEN_WEBPACK.core.OS = class OS {
	constructor() {
		this.fs = new window.__XEN_WEBPACK.core.VFS();
		this.windowManager = new window.__XEN_WEBPACK.WindowManager();
		this.system = new window.__XEN_WEBPACK.core.System();
		this.browserTool = new window.__XEN_WEBPACK.core.browser();
		this.notification =
			new window.__XEN_WEBPACK.core.NotificationComponent();
		this.apps = new window.__XEN_WEBPACK.core.AppManagerComponent();
		// this.appManager = new window.__XEN_WEBPACK.app();
	}
};

Object.defineProperty(window, "xen", {
	configurable: false,
	value: new window.__XEN_WEBPACK.core.OS(),
});
