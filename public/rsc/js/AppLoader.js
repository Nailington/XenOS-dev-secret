var _window = class WIN {
	constructor(options = {}, name, path) {
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
    this.path = path;

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

	loadFile(url) {
    document.getElementById(this.name).querySelector("iframe").src = this.path+'/'+url;
  }
  requestDispatchNotification(notificationName, body) {
    const flag = this.name+'_permission_notify';
    console.log(flag)
    var permCheck = localStorage.getItem(flag)
    console.log(permCheck)
    if (permCheck == null || permCheck == undefined || permCheck == false) {
      xen.browserTool.fullscreen()
      const requestMessage = confirm(this.name + " Wants permission to send in-OS notifications. \n 'OK' to Grant permissions \n 'cancel' to deny the permission");
    if (requestMessage == true) {
        console.log('Permission granted')
      localStorage.setItem(flag, 'true')
      setTimeout(function () {
          xen.notification.dispatch(notificationName, body) 
      }, 600)
  
          }
    else {
       console.log('permission refused')
  }
      xen.browserTool.fullscreen()
    } else if(permCheck === "true") {
xen.notification.dispatch(notificationName, body) 
    }
  }
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

	load(name, script = "", path) {
		{
			eval(`
(function(name, path) {
  ${script}
})("${name}", "${path}");
      `);
		}
	}
};
