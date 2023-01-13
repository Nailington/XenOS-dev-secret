const os_desk = document.getElementById("os-desktop");
os_desk.addEventListener("NewWindow", function(e) {
	console.log(`${e.detail.text} ${e.window} ${e}`);
});

// System SubAPI
window.__XEN_WEBPACK.core.System = class System {
	constructor() { }
	begin() {
		console.log("Initializing XenOS");
		console.log("Getting Windows");
		const windowData = xen.windowManager.windows;
		localStorage.setItem("xen_window_data", JSON.stringify(windowData));
		const inStorageWindowData_Debug = localStorage.getItem("xen_window_data");
		console.log("Stored Window Data", inStorageWindowData_Debug);
		console.log("Inserting DefaultWindow");
		const os_desk = document.getElementById("os-desktop");
		os_desk.innerHTML += `<div id='defaultWindow' class="drag box" style='width: 613px; height: 518px; z-index:10;' onclick='const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);' data-appname='defaultWindow'>
  <div class="box-header">
   <div class="box-header-title">Welcome to XenOS :) </div>
    <div class='box-body-inner'>
      <iframe src='./welcome.html'>  </iframe>
</div></div></div> `;
		xen.windowManager.addWindow(
			"defaultWindow",
			document.getElementById("defaultWindow"),
			"location_x",
			"0px",
			"location_y",
			"0px"
		);
		console.log("Initialization complete");
		console.log("Clearing Console");

		setTimeout(() => {
			// console.clear();
			console.log(
				"%cWelcome to XenOS",
				"color:black;background-color:white;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;"
			);
		}, 3000);
		return true;
    
	}

	register(appName, posX, posY) {
		if ((appName, posX, posY == null)) {
			throw new TypeError("Failed to register: \n missing required arguments");
		} else {
			// Where a new app is created in the UI
	const os_desk = document.getElementById("os-desktop");
try {
      let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);' data-appname='defaultWindow'`
			let master = document.createElement("div");
			let headerBox = document.createElement("div");
			let headerTitle = document.createElement("div");
			let headerTitleText = document.createTextNode(appName);
			let boxBody = document.createElement("div");
			let contentFrame = document.createElement("iframe");

			master.classList.add("drag");
			master.classList.add("box");
			master.id = appName;

			os_desk.appendChild(master);

			headerBox.classList.add("box-header");
			headerTitle.classList.add('box-header-title')
			boxBody.classList.add('box-body-inner')
			master.appendChild(headerBox)
			headerBox.appendChild(headerTitle)
			headerTitle.appendChild(headerTitleText)
			headerBox.appendChild(boxBody)
			// boxBody.appendChild('contentFrame')
      master.setAttribute('onclick', injectCode)
  	  xen.windowManager.addWindow(
				appName,
				master,
				"location_x",
				posX,
				"location_y",
				posY
			);
} catch(e) {
  console.log("Xen Registration Error: \n" + e);
}
     
		

  os_desk.dispatchEvent(new CustomEvent('NewWindow', { window: appName, detail: { text: appName } }))
		

		}
	}
  async launchpad(){
      const btn = document.getElementById('launchpad-button');
      const launchpad = document.getElementById('launchpad-overlay')
if (launchpad.style.display == 'none') {
   launchpad.style.display = "flex"
   launchpad.style.opacity = '1'


} else {
 launchpad.style.opacity = '0'
  launchpad.style.display = "none"

}
}
};

// WindowManager SubAPI
window.__XEN_WEBPACK.WindowManager = class WindowManager {
	constructor() {
		this.windows = {};
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

// OS MotherBoard API
window.__XEN_WEBPACK.core.OS = class OS {
	constructor() {
		this.windowManager = new window.__XEN_WEBPACK.WindowManager();
		this.system = new window.__XEN_WEBPACK.core.System();
	}
};

Object.defineProperty(window, "xen", {
	configurable: false,
	value: new window.__XEN_WEBPACK.core.OS(),
});
