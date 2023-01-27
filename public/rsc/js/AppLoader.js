var _window = class WIN {
  constructor(options = {
    frame: true,
    transparent: false,
    fullScreen: false,
    width: 800,
    height: 500,
    alwaysOnTop: false,
    show: true,
  }) {
    this.opts = options;

    
  }
}

var _NativeWindow = class NATWIN {
  constructor(window) {
    this.raw = window;
  }

  getBounds() {
    return {
      x: this.raw.location_x,
      y: this.raw.location_y,
      width: this.raw.el.offsetWidth,
      h
    }
  }
}

_window.getAllWindows = function() {
  return Object.entries(xen.windowManager.windows).map(([name, window]) => {
    return window.native?new _NativeWindow(_);
  })
}

window.__XEN_WEBPACK.core.AppLoaderComponent = class ALC {
  window = _window;
  constructor() {
    
  }
};
