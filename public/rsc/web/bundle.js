/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/rsc/js/entry.ts":
/*!********************************!*\
  !*** ./public/rsc/js/entry.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.__XEN_WEBPACK = { core: {}, html: {} };\nvar PreloadComponent = __webpack_require__(/*! ./preload.js */ \"./public/rsc/js/preload.js\");\nvar FileSystemComponent = __webpack_require__(/*! ./vfs.ts */ \"./public/rsc/js/vfs.ts\");\nvar AppManagerComponent = __webpack_require__(/*! ./AppManager.js */ \"./public/rsc/js/AppManager.js\");\nvar CoreScriptComponent = __webpack_require__(/*! ./core.js */ \"./public/rsc/js/core.js\");\nvar LeaderComponent = __webpack_require__(/*! ./index.js */ \"./public/rsc/js/index.js\");\nvar SetupComponent = __webpack_require__(/*! ./setup.js */ \"./public/rsc/js/setup.js\");\nvar BatteryComponent = __webpack_require__(/*! ./battery.js */ \"./public/rsc/js/battery.js\");\nvar dragComponent = __webpack_require__(/*! ./draggable.js */ \"./public/rsc/js/draggable.js\");\n// var PredictionAlgorithmComponent = require('./predict.js')\n// var ToolTipLibrary = require('tippy.js');\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/entry.ts?");

/***/ }),

/***/ "./public/rsc/js/vfs.ts":
/*!******************************!*\
  !*** ./public/rsc/js/vfs.ts ***!
  \******************************/
/***/ (() => {

eval("window.__XEN_WEBPACK.core.VFS = /** @class */ (function () {\n    function VFS() {\n    }\n    return VFS;\n}());\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/vfs.ts?");

/***/ }),

/***/ "./public/rsc/js/AppManager.js":
/*!*************************************!*\
  !*** ./public/rsc/js/AppManager.js ***!
  \*************************************/
/***/ (() => {

eval("window.__XEN_WEBPACK.core.AppManagerComponent = class AMC {\n  constructor(){\n     this.apps = {installed: \"\"};\n    this.permissions = {typeSetter: false};\n  }\n\n\n}\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/AppManager.js?");

/***/ }),

/***/ "./public/rsc/js/battery.js":
/*!**********************************!*\
  !*** ./public/rsc/js/battery.js ***!
  \**********************************/
/***/ (() => {

eval("console.log('Battery component loaded')\nfunction calculateBatWid(life) {\n  // turn percent into an integer\n  const _numDecimal = parseFloat(life) / 100;\n  const batLifeNum = _numDecimal * 100;\n  const batLife_nonPol = batLifeNum * 2;\n  const batLife = batLife_nonPol + 10;\n  return batLife;\n}\n\nfunction batToNum(life) {\n  const _numDecimal = parseFloat(life) / 100;\n  const batLifeNum = _numDecimal * 100;\n  return batLifeNum;\n}\nnavigator.getBattery().then((battery) => {\n  const bar = document.getElementById(\"os-battery-bar\");\n  const widget = document.getElementById(\"battery\");\n  try {\n    addEventListener(\"DOMContentLoaded\", (event) => {\n      if (batToNum(xen.system.battery()) < 15) {\n        bar.style.width = calculateBatWid(xen.system.battery());\n        bar.style.fill = \"#ff4040\";\n        xen.notification.dispatch('Low Battery', 'Your devices battery is running low.')\n      } else {\n        bar.style.width = calculateBatWid(xen.system.battery());\n        bar.style.fill = \"#fff\";\n      }\n\n      \n      battery.onlevelchange = (event) => {\n       if (batToNum(xen.system.battery()) < 15) {\n        bar.style.width = calculateBatWid(xen.system.battery());\n        bar.style.fill = \"#ff4040\";\n        xen.notification.dispatch('Low Battery', 'Your devices battery is running low.')\n      } else {\n        bar.style.width = calculateBatWid(xen.system.battery());\n        bar.style.fill = \"#fff\";\n      }\n      \n      };\n    });\n    batteryIsCharging = battery.charging;\n    xen.system.battery = () => `${battery.level * 100}%`;\n  } catch (e) {\n    console.error(\n      \"An error occured while trying to get battery readings: \\n\" + e\n    );\n    bar.style.fill = \"#ff4040\";\n  }\n});\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/battery.js?");

/***/ }),

/***/ "./public/rsc/js/core.js":
/*!*******************************!*\
  !*** ./public/rsc/js/core.js ***!
  \*******************************/
/***/ (() => {

eval("const os_desk = document.getElementById(\"os-desktop\");\n\nos_desk.addEventListener(\"NewWindow\", function (e) {\n  console.log(`${e.detail.text} ${e.window} ${e}`);\n});\nconsole.log('Loaded CORESRC')\n\n// INTERNAL USE \nwindow.__XEN_WEBPACK.core.browser = class BrowserTool {\n  constructor() {}\n  fullscreen() {\n    if (\n      (document.fullScreenElement && document.fullScreenElement !== null) ||\n      (!document.mozFullScreen && !document.webkitIsFullScreen)\n    ) {\n      if (document.documentElement.requestFullScreen) {\n        document.documentElement.requestFullScreen();\n      } else if (document.documentElement.mozRequestFullScreen) {\n        document.documentElement.mozRequestFullScreen();\n      } else if (document.documentElement.webkitRequestFullScreen) {\n        document.documentElement.webkitRequestFullScreen(\n          Element.ALLOW_KEYBOARD_INPUT\n        );\n      }\n    } else {\n      if (document.cancelFullScreen) {\n        document.cancelFullScreen();\n      } else if (document.mozCancelFullScreen) {\n        document.mozCancelFullScreen();\n      } else if (document.webkitCancelFullScreen) {\n        document.webkitCancelFullScreen();\n      }\n    }\n  }\n};\n\n\n\n\n\n// System SubAPI\nwindow.__XEN_WEBPACK.core.System = class System {\n  constructor() {}\n\n  begin() {\n    console.log(\"Initializing XenOS\");\n    console.log(\"Getting Windows\");\n    const windowData = xen.windowManager.windows;\n    localStorage.setItem(\"xen_window_data\", JSON.stringify(windowData));\n    const inStorageWindowData_Debug = localStorage.getItem(\"xen_window_data\");\n    console.log(\"Stored Window Data\", inStorageWindowData_Debug);\n    console.log(\"Registering Capture\");\n    console.log(\"Registering windowManager\");\n    console.log(\"Inserting DefaultWindow\");\n\n    const os_desk = document.getElementById(\"os-desktop\");\n    os_desk.innerHTML += `<div id='defaultWindow' class=\"drag box\" style='width: 613px; height: 518px; z-index:10;top: 78px;' onclick='const thisAppName = this.dataset.appname; xen.windowManager.focus(thisAppName);\nconsole.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, \"zIndex\", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, \"location_x\", this.style.left);xen.windowManager.modifyWindow(thisAppName, \"location_y\", this.style.top);' data-appname='defaultWindow'>\n  <div class=\"box-header\">\n   <div class=\"box-header-title\">Welcome to XenOS :)   <span class='os-mini' \n onclick=' xen.windowManager.modifyWindow(\"defaultWindow\", \"minimized\", true);document.getElementById(\"defaultWindow\").style.display = \"none\"'> \n   <svg style=\"width: 12px;height: 15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"188\" height=\"185\" viewBox=\"0 0 188 185\" fill=\"none\">\n<rect width=\"188\" height=\"185\" rx=\"92.5\" fill=\"#FFD43C\"/>\n</svg>\n   </span><span class='os-exit' onclick='xen.system.unregister(\"defaultWindow\")'> <svg \nstyle=\"width: 12px;height: 15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"188\" height=\"185\" viewBox=\"0 0 188 185\" fill=\"none\">\n<rect width=\"188\" height=\"185\" rx=\"92.5\" fill=\"#F46868\"/>\n</svg></span> </div>\n    <div class='box-body-inner'>\n      <iframe src='./welcome.html'>  </iframe>\n</div></div></div> `;\n    \n\n    xen.windowManager.addWindow(\n      \"defaultWindow\",\n      document.getElementById(\"defaultWindow\"),\n      \"location_x\",\n      \"0px\",\n      \"location_y\",\n      \"37px\"\n    );\n    console.log(\"Initialization complete\");\n    console.log(\"Clearing Console\");\n\n    setTimeout(() => {\n       // console.clear();\n      console.log(\n        \"%cWelcome to XenOS\",\n        \"color:black;background-color:white;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;\"\n      );\n    }, 3000);\n    return true;\n  }\n\n  register(appName, posX, posY, location) {\n    let check = document.getElementById(appName);\n   if (check === null) {\n       if ((appName, posX, posY == null)) {\n      throw new TypeError(\"Failed to register: \\n missing required arguments\");\n    } else {\n      // Where a new app is created in the UI\n      const os_desk = document.getElementById(\"os-desktop\");\n      try {\n        let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.focus(thisAppName);xen.windowManager.modifyWindow(thisAppName, \"zIndex\", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, \"location_x\", this.style.left);xen.windowManager.modifyWindow(thisAppName, \"location_y\", this.style.top);`;\n        let closeCode = `xen.system.unregister(\"${appName}\")`\n        let miniCode = `xen.windowManager.modifyWindow(\"${appName}\", \"minimized\", true);document.getElementById('${appName}').style.display = 'none'`\n        let master = document.createElement(\"div\");\n        let headerBox = document.createElement(\"div\");\n        let headerTitle = document.createElement(\"div\");\n        let headerTitleText = document.createTextNode(appName);\n        let boxBody = document.createElement(\"div\");\n        let closeSpan = document.createElement(\"span\");\n        let miniSpan = document.createElement(\"span\");\n        let contentFrame = document.createElement(\"iframe\");\n        master.dataset.appname = appName;\n\n        master.classList.add(\"drag\");\n        master.classList.add(\"box\");\n        master.id = appName;\n\n        os_desk.appendChild(master);\n\n        headerBox.classList.add(\"box-header\");\n        headerTitle.classList.add(\"box-header-title\");\n        boxBody.classList.add(\"box-body-inner\");\n        master.appendChild(headerBox);\n        headerBox.appendChild(headerTitle);\n        \n        \n        headerTitle.appendChild(headerTitleText);\n        headerTitle.appendChild(closeSpan)\n        headerTitle.appendChild(miniSpan)\n        closeSpan.classList.add('os-exit')\n        miniSpan.classList.add('os-mini')\n        closeSpan.setAttribute(\"onclick\", closeCode)\n        miniSpan.setAttribute(\"onclick\", miniCode)\n        closeSpan.innerHTML = `<svg style=\"width: 15px;height: 15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"188\" height=\"185\" viewBox=\"0 0 188 185\" fill=\"none\">\n<rect width=\"188\" height=\"185\" rx=\"92.5\" fill=\"#F46868\"></rect>\n</svg>`\n         miniSpan.innerHTML = `<svg style=\"width: 15px;height: 15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"188\" height=\"185\" viewBox=\"0 0 188 185\" fill=\"none\">\n<rect width=\"188\" height=\"185\" rx=\"92.5\" fill=\"#FFD43C\"></rect>\n</svg>`\n        headerBox.appendChild(boxBody);\n\n        boxBody.appendChild(contentFrame);\n        contentFrame.src = location;\n        master.setAttribute(\"onclick\", injectCode);\n        contentFrame.contentWindow.addEventListener(\"error\", function (event) {\n          console.log(\"An error occurred in the iframe:\", event.message);\n        });\n        xen.windowManager.addWindow(\n          appName,\n          master,\n          \"location_x\",\n          posX,\n          \"location_y\",\n          posY\n        );\n      } catch (e) {\n        console.log(\"Xen Registration Error: \\n\" + e);\n      }\n\n      os_desk.dispatchEvent(\n        new CustomEvent(\"NewWindow\", {\n          window: appName,\n          detail: { text: appName },\n        })\n      );\n    }\n   } else {\n     if (xen.windowManager.windows[appName].minimized == true) {\n       document.getElementById(appName).style.display = 'block'\n       xen.windowManager.windows[appName].minimized = false; \n     } else {\n        throw new TypeError(\"Failed to register: \\n An app or window with the same name already exists.\");\n     }\n   }\n  \n  }\n\n  unregister(appName) {\n    let win = document.getElementById(appName);\n    win.innerHTML = \"\"; // clear the content of the div\n    win.remove(); // remove the div from the DOM\n    xen.windowManager.removeWindow(appName);\n    console.log(\"Sucessfully unregistered window: \" + appName);\n  }\n\n  launchpad(status) {\n const lp = document.getElementById(\"launchpad-overlay\");\n if(status == true) {\n     lp.style.display = 'flex'\n } else {\n   lp.style.display = 'none'\n }\n  }\n  \n};\n\n// WindowManager SubAPI\nwindow.__XEN_WEBPACK.WindowManager = class WindowManager {\n  constructor() {\n    this.windows = {};\n    this.maximizedWindow = { name: null };\n    this.activeWindow = { active: \"null\" };\n    this.windowDrag = { drag: false };\n  }\n\n  focus(appName) {\n    this.activeWindow.active = appName;\n  }\n\n  addWindow(id, el, ...props) {\n    const windowProps = { el };\n    Object.defineProperty(windowProps, \"location_x\", {\n      get() {\n        return windowProps._location_x;\n      },\n      set(val) {\n        windowProps._location_x = val;\n        el.style.left = val;\n      },\n    });\n    Object.defineProperty(windowProps, \"location_y\", {\n      get() {\n        return windowProps._location_y;\n      },\n      set(val) {\n        windowProps._location_y = val;\n        el.style.top = val;\n      },\n    });\n\n    for (let i = 0; i < props.length; i += 2) {\n      windowProps[\"_\" + props[i]] = props[i + 1];\n    }\n    this.windows[id] = windowProps;\n  }\n  removeWindow(id) {\n    if (this.windows[id]) {\n      delete this.windows[id];\n    }\n  }\n  modifyWindow(id, prop, value) {\n    if (this.windows[id]) {\n      this.windows[id][prop] = value;\n    }\n  }\n  getZIndex(id) {\n    if (this.windows[id]) {\n      return this.windows[id].zIndex;\n    }\n  }\n\n  getLocation(id) {\n    if (this.windows[id]) {\n      const locationX = this.windows[id].location_x;\n      const locationY = this.windows[id].location_y;\n      const locationConcat = `X: ${locationX.replace(\n        \"px\",\n        \"\"\n      )} , Y: ${locationY.replace(\"px\", \"\")}`;\n      return locationConcat;\n    }\n  }\n\n  getElement(id) {\n    return this.windows[id].el;\n  }\n};\n\n// window.__XEN_WEBPACK.app = class AppManager {\n// \tconstructor() {\n\n//   }\n// \ttest(){\n//     console.log('hi')\n//   }\n// };\n\n\n\n\n\nwindow.__XEN_WEBPACK.core.NotificationComponent = class NotificationComponent {\n  \n  constructor(){\n    this.notifications = {};\n  }\n  \n  \tdispatch(name, description, icon){\n      const check = document.getElementById(name);\n      \n      if (check == null || check == undefined || check == 'undefined') {\n        \n           const master = document.getElementById('os-desktop');\n    const notiWrap = document.createElement(\"div\");\n    const iconWrap = document.createElement(\"div\");\n    const notiTitle = document.createElement(\"div\");\n    const notiDescription = document.createElement(\"div\");\n           master.appendChild(notiWrap);\n      notiWrap.classList.add(\"os-notification-1\");\n      notiWrap.id = name;\n      notiWrap.setAttribute('ondblclick', `this.style.display='none'`)\n      notiWrap.appendChild(iconWrap);\n      iconWrap.classList.add(\"os-notification-icon\");\n         iconWrap.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"447\" height=\"112\" viewBox=\"0 0 447 112\" fill=\"none\">\n<rect x=\"243.5\" y=\"39.5\" width=\"18\" height=\"34\" rx=\"6.5\" stroke=\"#F0F0F0\" stroke-width=\"5\"></rect>\n<rect x=\"4\" y=\"4\" width=\"239\" height=\"104\" rx=\"26\" stroke=\"white\" stroke-width=\"8\"></rect>\n<rect x=\"15\" y=\"17\" rx=\"16\" fill=\"white\" style=\"width: 50px; fill: rgb(255, 255, 255);\"></rect>\n</svg>`\n      \n      notiWrap.appendChild(notiTitle);\n      notiTitle.innerText = name;\n      notiTitle.classList.add(\"os-notification-title\");\n            \n      notiWrap.appendChild(notiDescription);\n      notiDescription.innerText = description;\n      notiDescription.classList.add(\"os-notification-description\");\n      } else if (check !== null || check !== undefined || check !== 'undefined'){\n        throw new TypeError('Error while Dispatching: \\n A notification with that name already exists.')\n      }\n   \n      \n     \n  \n  \n      \n   } \n  retract(name){\n    let el = document.getElementById(name)\n    el.style.display = 'none'\n  }\n}\n\n\n\n// OS MotherBoard API\nwindow.__XEN_WEBPACK.core.OS = class OS {\n  constructor() {\n    this.windowManager = new window.__XEN_WEBPACK.WindowManager();\n    this.system = new window.__XEN_WEBPACK.core.System();\n    this.browserTool = new window.__XEN_WEBPACK.core.browser();\n     this.fileSystem = new window.__XEN_WEBPACK.core.VFS();\n    this.notification = new window.__XEN_WEBPACK.core.NotificationComponent();\n    this.appManager = new window.__XEN_WEBPACK.core.AppManagerComponent();\n    // this.appManager = new window.__XEN_WEBPACK.app();\n  }\n};\n\nObject.defineProperty(window, \"xen\", {\n  configurable: false,\n  value: new window.__XEN_WEBPACK.core.OS(),\n});\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/core.js?");

/***/ }),

/***/ "./public/rsc/js/draggable.js":
/*!************************************!*\
  !*** ./public/rsc/js/draggable.js ***!
  \************************************/
/***/ (() => {

eval("const headerBar = document.getElementById(\"os-header\");\nlet rect = headerBar.getBoundingClientRect();\n\ndocument.addEventListener(\"mousemove\", function (e) {\n  const dragBoxes = document.querySelectorAll(\".box-header-title\");\n  dragBoxes.forEach(function (dBox) {\n        dBox.addEventListener('mousedown', function (e){\n    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {\n  } else {\n    const activeWindowName = xen.windowManager.activeWindow.active;\n    if (activeWindowName == \"null\") {\n      console.log(\"No Active Window Selected\");\n    } else {\n      try {\n        const activeWindow = document.getElementById(activeWindowName);\n        activeWindow.style.top = \"29px\";\n        e.preventDefault();\n        e.stopPropagation();\n      } catch (e) {\n        console.log(e);\n      }\n    }\n  }\n\n  })\n      });\n \n \n  \n});\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/draggable.js?");

/***/ }),

/***/ "./public/rsc/js/index.js":
/*!********************************!*\
  !*** ./public/rsc/js/index.js ***!
  \********************************/
/***/ (() => {

eval("function getCurrentTime() {\n  const date = new Date();\n  const options = {\n    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,\n    hour: 'numeric',\n    minute: 'numeric',\n    hour12: true\n  };\n  return date.toLocaleString('en-US', options);\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\twindow.__XEN_WEBPACK.core.VFS(\"fs\");\nconst timeText = document.getElementById('timeIndicator')\nfunction updateTime(){\ntimeText.innerText = getCurrentTime();\n}\n\n  setInterval(updateTime, 1000);\n  // XEN INIT\n  xen.system.begin();\n\n  // Okay, so the Event is now renamed to WindowRegistration, and the event caries the object windowName, (so you'd do `event.windowName`)\n\n  function initWindow(_win) {\n    const win = document.getElementById(_win);\n    const iframes = document.querySelectorAll(\"iframe\");\n    console.log(iframes);\n    const navbar = win.querySelector(\".box-header-title\");\n    let startX,\n      startY,\n      previousX,\n      previousY = 0;\n    \nnavbar.addEventListener('dblclick', (event) => {\n  const styles = `width: 99.9%; height: 80%; top: 29px; position: absolute; left: 3px;`;\n console.log(win.style)\nif (xen.windowManager.maximizedWindow.name == _win) {\n   xen.windowManager.maximizedWindow.name == _win\n   win.style = `width: 613px;height: 518px;z-index: 10;top: 86px;position: absolute;left: 305px;`;\n} else {\n  xen.windowManager.maximizedWindow.name == null;\n   localStorage.setItem('maximized-window', true)\n win.style = styles;\n}\n});\n    navbar.addEventListener(\"mousedown\", (e) => {\n      iframes.forEach(function (iframe) {\n        iframe.style.pointerEvents = \"none\";\n      });\n\n      startX = e.clientX - win.offsetLeft;\n      startY = e.clientY - win.offsetTop;\n\n     \n\n      document.addEventListener(\"mousemove\", handleMove, true);\n      document.addEventListener(\"mouseup\", () => {\n        document.removeEventListener(\"mouseup\", this);\n        document.removeEventListener(\"mousemove\", handleMove, true);\n      });\n    });\n\n    navbar.addEventListener(\"mouseup\", (e) => {\n      iframes.forEach(function (iframe) {\n        iframe.style.pointerEvents = \"auto\";\n      });\n      \n    });\n\n    const handleMove = (e) => {\n    \n      let elmTop = win.style.top.split(\"px\")[0];\n      let elmLeft = win.style.left.split(\"px\")[0];\n      let boundsTop = elmTop < 30;\n      let boundsLeft = elmLeft < 0 || elmLeft > screen.width - win.offsetWidth;\n\n      let left = e.clientX - startX;\n      let top = e.clientY - startY;\n\n      requestAnimationFrame(() => {\n        win.style.position = `absolute`;\n\n        win.style.top = top + \"px\";\n        win.style.left = left + \"px\";\n      });\n    };\n  }\n\n  const os_desk = document.getElementById(\"os-desktop\");\n  os_desk.addEventListener(\"NewWindow\", (e) => {\n    console.log(e.detail.text);\n    initWindow(e.detail.text);\n  });\n\n  initWindow(\"defaultWindow\");\n});\n\nconst btn = document.getElementById(\"launchpadButton\");\n const lp = document.getElementById(\"launchpad-overlay\");\n\nconsole.log(btn)\n\n// btn.addEventListener(\"click\", function (e) {\n//   console.log('click')\n//   if (lp.style.display == 'flex') {\n//       xen.system.launchpad(false)\n//   } else {\n//       xen.system.launchpad(true)\n//   }\n\n   \n// });\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/index.js?");

/***/ }),

/***/ "./public/rsc/js/preload.js":
/*!**********************************!*\
  !*** ./public/rsc/js/preload.js ***!
  \**********************************/
/***/ (() => {

eval("const os_preloader = document.getElementById(\"os-pre\");\nconst desk_defaultWindow = document.getElementById(\"defaultWindow\");\nconst os_preloader_txt = document.getElementById('os-pre-text')\nconst os_desk = document.getElementById(\"os-desktop\");\nfunction errorHandler(event) {\n  event.preventDefault();\n  console.log(event);\n  const style = `color:white;font-weight:bold;background-color:red;font-size:20px;`\n  console.error(\"Catastrophic error while initializing \\n\" + event.stack + '%c \\n CATASTROPHIC ERROR.. XENOS WILL NOT FUNCTION!', style);\n  os_preloader.style.color = 'red'\n  os_preloader_txt.innerText = 'Catastrophic Error!'\n}\n//window.addEventListener(\"error\", errorHandler);\n\nsetTimeout(() => {\n  window.removeEventListener(\"error\", errorHandler);\n\n}, 5000);\n\nwindow.__XEN_WEBPACK.html.os_preloader = os_preloader;\nwindow.__XEN_WEBPACK.html.desk_defaultWindow = desk_defaultWindow;\nwindow.__XEN_WEBPACK.html.os_desk = os_desk;\n\n\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('../../sw.js')\n    .then(function(registration) {\n      console.log('Service worker registered successfully');\n    })\n    .catch(function(error) {\n      console.log('Service worker registration failed: ' + error);\n    });\n}\n\nnavigator.serviceWorker.addEventListener('message', function(event) {\n  console.log(event.data.log);\n});\n\nsetTimeout(() => {\n  os_preloader.style.opacity = 0;\n  os_desk.style.transition = 'all .5s ease 0s;';\n}, 3000);\n\nsetTimeout(() => {\n  os_preloader.style.display = \"none\";\n}, 4000);\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/preload.js?");

/***/ }),

/***/ "./public/rsc/js/setup.js":
/*!********************************!*\
  !*** ./public/rsc/js/setup.js ***!
  \********************************/
/***/ (() => {

eval("const setupText = document.getElementById(\"SetupText\");\nconst Wrap = document.getElementById(\"SetupWrapper\");\nconst pwButtonWrap = document.getElementById('passWordButtonChoice')\nconst pwInput = document.getElementById('passWordInput')\nconst yesButton = document.getElementById('yesButton')\nconst noButton = document.getElementById('noButton')\nconst keyBindMenu = document.getElementById('keybinds')\nconst finalButton = document.getElementById('doneButtonFinal')\nconst setupStatus = localStorage.getItem('setup_status')\nfunction set(a, b) {\n  localStorage.getItem(a, b);\n}\nfunction step1() {\n  setupText.innerHTML = \"Please wait while we initialize your profile\";\n  set('profile_name', 'Profile1')\n   set('active_profile', 'Profile1')\n  set('profile_password', '_*_xenos_*_nopassword_*_')\n}\nfunction step2() {\n  setupText.innerHTML =\n    \"Thanks for waiting. Would you like to choose a password?\";\n  setupText.style.animation = \"none\";\n  pwButtonWrap.style.display = 'block'\n}\nfunction pwOption(status) {\n  if (status === 'yes') {\n    noButton.style.display = 'none'\n    yesButton.style.display = 'none'\n    pwInput.style.display = 'block'\n    // submitButton.style.display = 'block'\n  } else {\n    noButton.style.display = 'none'\n    yesButton.style.display = 'none'\n  }\n}\nfunction step3() {\n  setupText.innerHTML =\n    \"Great!\";\n  setupText.style = ''\n\n}\nasync function step4() {\n  setupText.innerHTML =\n    \"Let's introduce you to some important keybinds!\";\n  setupText.style.animation = \"none\";\n  setTimeout(() => {\n    keyBindMenu.style = `display: flex;animation: 0s ease 0s 1 normal none running none;align-items: center;justify-content: center; align-content: center; flex-wrap: nowrap;flex-direction: column;`\n\n  }, 1000);\n  finalButton.onclick = function() {\n    keyBindMenu.style = '';\n    finalButton.style.display = 'none';\n    setupText.innerHTML =\n      \"Perfect. Welcome to XenOS!\";\n    setTimeout(() => {\n      Wrap.style.opacity = '0'\n    }, 1000);\n    setTimeout(() => {\n      Wrap.style.display = 'none'\n      localStorage.setItem('setup_status', 'done')\n    }, 1000);\n\n  }\n}\n\nif (setupStatus == null) {\n  Wrap.style = '';\n  // needs to setup lol\n  setTimeout(() => {\n    step1();\n  }, 6700);\n  setTimeout(() => {\n    step2();\n    yesButton.onclick = function() {\n      pwOption('yes')\n    }\n    noButton.onclick = function() {\n      pwOption('no')\n      step3()\n      setTimeout(() => {\n        step4()\n      }, 4900);\n    }\n  }, 15500);\n\n} else if (setupStatus == 'done') {\n  console.log('already setup')\n} else {\n  console.log('idk')\n}\n\n\n\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/setup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/rsc/js/entry.ts");
/******/ 	
/******/ })()
;