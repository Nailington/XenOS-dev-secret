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

/***/ "./public/rsc/js/core.js":
/*!*******************************!*\
  !*** ./public/rsc/js/core.js ***!
  \*******************************/
/***/ (() => {

eval("const os_desk = document.getElementById(\"os-desktop\");\nos_desk.addEventListener(\"NewWindow\", function(e) {\n\tconsole.log(`${e.detail.text} ${e.window} ${e}`);\n});\n\n// System SubAPI\nwindow.__XEN_WEBPACK.core.System = class System {\n\tconstructor() { }\n\tbegin() {\n\t\tconsole.log(\"Initializing XenOS\");\n\t\tconsole.log(\"Getting Windows\");\n\t\tconst windowData = xen.windowManager.windows;\n\t\tlocalStorage.setItem(\"xen_window_data\", JSON.stringify(windowData));\n\t\tconst inStorageWindowData_Debug = localStorage.getItem(\"xen_window_data\");\n\t\tconsole.log(\"Stored Window Data\", inStorageWindowData_Debug);\n\t\tconsole.log(\"Inserting DefaultWindow\");\n\t\tconst os_desk = document.getElementById(\"os-desktop\");\n\t\tos_desk.innerHTML += `<div id='defaultWindow' class=\"drag box\" style='width: 613px; height: 518px; z-index:10;' onclick='const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, \"zIndex\", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, \"location_x\", this.style.left);xen.windowManager.modifyWindow(thisAppName, \"location_y\", this.style.top);' data-appname='defaultWindow'>\n  <div class=\"box-header\">\n   <div class=\"box-header-title\">Welcome to XenOS :) </div>\n    <div class='box-body-inner'>\n      <iframe src='./welcome.html'>  </iframe>\n</div></div></div> `;\n\t\txen.windowManager.addWindow(\n\t\t\t\"defaultWindow\",\n\t\t\tdocument.getElementById(\"defaultWindow\"),\n\t\t\t\"location_x\",\n\t\t\t\"0px\",\n\t\t\t\"location_y\",\n\t\t\t\"0px\"\n\t\t);\n\t\tconsole.log(\"Initialization complete\");\n\t\tconsole.log(\"Clearing Console\");\n\n\t\tsetTimeout(() => {\n\t\t\t// console.clear();\n\t\t\tconsole.log(\n\t\t\t\t\"%cWelcome to XenOS\",\n\t\t\t\t\"color:black;background-color:white;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;\"\n\t\t\t);\n\t\t}, 3000);\n\t\treturn true;\n    \n\t}\n\n\tregister(appName, posX, posY) {\n\t\tif ((appName, posX, posY == null)) {\n\t\t\tthrow new TypeError(\"Failed to register: \\n missing required arguments\");\n\t\t} else {\n\t\t\t// Where a new app is created in the UI\n\tconst os_desk = document.getElementById(\"os-desktop\");\ntry {\n      let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.modifyWindow(thisAppName, \"zIndex\", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, \"location_x\", this.style.left);xen.windowManager.modifyWindow(thisAppName, \"location_y\", this.style.top);' data-appname='defaultWindow'`\n\t\t\tlet master = document.createElement(\"div\");\n\t\t\tlet headerBox = document.createElement(\"div\");\n\t\t\tlet headerTitle = document.createElement(\"div\");\n\t\t\tlet headerTitleText = document.createTextNode(appName);\n\t\t\tlet boxBody = document.createElement(\"div\");\n\t\t\tlet contentFrame = document.createElement(\"iframe\");\n\n\t\t\tmaster.classList.add(\"drag\");\n\t\t\tmaster.classList.add(\"box\");\n\t\t\tmaster.id = appName;\n\n\t\t\tos_desk.appendChild(master);\n\n\t\t\theaderBox.classList.add(\"box-header\");\n\t\t\theaderTitle.classList.add('box-header-title')\n\t\t\tboxBody.classList.add('box-body-inner')\n\t\t\tmaster.appendChild(headerBox)\n\t\t\theaderBox.appendChild(headerTitle)\n\t\t\theaderTitle.appendChild(headerTitleText)\n\t\t\theaderBox.appendChild(boxBody)\n\t\t\t// boxBody.appendChild('contentFrame')\n      master.setAttribute('onclick', injectCode)\n  \t  xen.windowManager.addWindow(\n\t\t\t\tappName,\n\t\t\t\tmaster,\n\t\t\t\t\"location_x\",\n\t\t\t\tposX,\n\t\t\t\t\"location_y\",\n\t\t\t\tposY\n\t\t\t);\n} catch(e) {\n  console.log(\"Xen Registration Error: \\n\" + e);\n}\n     \n\t\t\n\n  os_desk.dispatchEvent(new CustomEvent('NewWindow', { window: appName, detail: { text: appName } }))\n\t\t\n\n\t\t}\n\t}\n  async launchpad(){\n      const btn = document.getElementById('launchpad-button');\n      const launchpad = document.getElementById('launchpad-overlay')\nif (launchpad.style.display == 'none') {\n   launchpad.style.display = \"flex\"\n   launchpad.style.opacity = '1'\n\n\n} else {\n launchpad.style.opacity = '0'\n  launchpad.style.display = \"none\"\n\n}\n}\n};\n\n// WindowManager SubAPI\nwindow.__XEN_WEBPACK.WindowManager = class WindowManager {\n\tconstructor() {\n\t\tthis.windows = {};\n\t}\n\n\taddWindow(id, el, ...props) {\n\t\tconst windowProps = { el };\n\t\tObject.defineProperty(windowProps, \"location_x\", {\n\t\t\tget() {\n\t\t\t\treturn windowProps._location_x;\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\twindowProps._location_x = val;\n\t\t\t\tel.style.left = val;\n\t\t\t},\n\t\t});\n\t\tObject.defineProperty(windowProps, \"location_y\", {\n\t\t\tget() {\n\t\t\t\treturn windowProps._location_y;\n\t\t\t},\n\t\t\tset(val) {\n\t\t\t\twindowProps._location_y = val;\n\t\t\t\tel.style.top = val;\n\t\t\t},\n\t\t});\n\n\t\tfor (let i = 0; i < props.length; i += 2) {\n\t\t\twindowProps[\"_\" + props[i]] = props[i + 1];\n\t\t}\n\t\tthis.windows[id] = windowProps;\n\t}\n\n\tmodifyWindow(id, prop, value) {\n\t\tif (this.windows[id]) {\n\t\t\tthis.windows[id][prop] = value;\n\t\t}\n\t}\n\tgetZIndex(id) {\n\t\tif (this.windows[id]) {\n\t\t\treturn this.windows[id].zIndex;\n\t\t}\n\t}\n\n\tgetLocation(id) {\n\t\tif (this.windows[id]) {\n\t\t\tconst locationX = this.windows[id].location_x;\n\t\t\tconst locationY = this.windows[id].location_y;\n\t\t\tconst locationConcat = `X: ${locationX.replace(\n\t\t\t\t\"px\",\n\t\t\t\t\"\"\n\t\t\t)} , Y: ${locationY.replace(\"px\", \"\")}`;\n\t\t\treturn locationConcat;\n\t\t}\n\t}\n\n\tgetElement(id) {\n\t\treturn this.windows[id].el;\n\t}\n};\n\n// OS MotherBoard API\nwindow.__XEN_WEBPACK.core.OS = class OS {\n\tconstructor() {\n\t\tthis.windowManager = new window.__XEN_WEBPACK.WindowManager();\n\t\tthis.system = new window.__XEN_WEBPACK.core.System();\n\t}\n};\n\nObject.defineProperty(window, \"xen\", {\n\tconfigurable: false,\n\tvalue: new window.__XEN_WEBPACK.core.OS(),\n});\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/core.js?");

/***/ }),

/***/ "./public/rsc/js/draggable.js":
/*!************************************!*\
  !*** ./public/rsc/js/draggable.js ***!
  \************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/draggable.js?");

/***/ }),

/***/ "./public/rsc/js/entry.js":
/*!********************************!*\
  !*** ./public/rsc/js/entry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.__XEN_WEBPACK = {core: {}, html: {}};\n\nvar p = __webpack_require__(/*! ./preload.js */ \"./public/rsc/js/preload.js\");\nvar c = __webpack_require__(/*! ./core.js */ \"./public/rsc/js/core.js\");\nvar i = __webpack_require__(/*! ./index.js */ \"./public/rsc/js/index.js\");\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/entry.js?");

/***/ }),

/***/ "./public/rsc/js/index.js":
/*!********************************!*\
  !*** ./public/rsc/js/index.js ***!
  \********************************/
/***/ (() => {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n\n\t// XEN INIT\n\txen.system.begin()\n\n\n\t// Okay, so the Event is now renamed to WindowRegistration, and the event caries the object windowName, (so you'd do `event.windowName`) \n\n\tfunction initWindow(_win) {\n    const win = document.getElementById(_win);\n    const iframe = document.querySelector(\"iframe\");\n\t\tconst navbar = win.querySelector(\".box-header-title\");\n\tlet startX, startY;\n\nnavbar.addEventListener(\"mousedown\", (e) => {\n  startX = e.pageX - win.offsetLeft;\n  startY = e.pageY - win.offsetTop;\n\n  document.addEventListener(\"mousemove\", handleMove, true);\n  document.addEventListener(\"mouseup\", () => {\n    document.removeEventListener(\"mouseup\", this);\n    document.removeEventListener(\"mousemove\", handleMove, true);\n  });\n});\n\nconst handleMove = (e) => {\n  let left = e.pageX - startX;\n  let top = e.pageY - startY;\n  \n  if ((top > 0 && top < screen.height - win.offsetHeight) && (left > 0 && left + win.offsetWidth < screen.width))\n  requestAnimationFrame(() => {\n        win.style.cssText = `position: absolute; top: ${top}px; left: ${left}px;`;\n    });\n}\n\n    \n\t}\n \n\n  \nconst os_desk = document.getElementById(\"os-desktop\");\n\t os_desk.addEventListener(\"NewWindow\", (e) => {\n     \n     console.log(e.detail.text)\n\t\tinitWindow(e.detail.text);\n\t})\n\t\n\tinitWindow('defaultWindow');\n});\n\nconst btn = document.getElementById('launchpad-button');\nbtn.addEventListener(\"click\", function(e) { \n xen.system.launchpad();\n})\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/index.js?");

/***/ }),

/***/ "./public/rsc/js/preload.js":
/*!**********************************!*\
  !*** ./public/rsc/js/preload.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// NON JQEURY\nconst os_preloader = document.getElementById(\"os-pre\");\nconst desk_defaultWindow = document.getElementById(\"defaultWindow\");\nconst os_desk = document.getElementById(\"os-desktop\");\n\nwindow.__XEN_WEBPACK.html.os_preloader = os_preloader;\nwindow.__XEN_WEBPACK.html.desk_defaultWindow = desk_defaultWindow;\nwindow.__XEN_WEBPACK.html.os_desk = os_desk;\n\nwindow.__XEN_WEBPACK.core.draggable = __webpack_require__(/*! ./draggable.js */ \"./public/rsc/js/draggable.js\");\n\nsetTimeout(() => {\n  os_preloader.style.opacity = 0;\n   os_desk.style.transition = \"1s\";\n  os_desk.style.display = \"block\";\n}, 3000);\n\n\nsetTimeout(() => {\n  os_preloader.style.display = 'none'\n  }, 4000);\n\n\n\n//# sourceURL=webpack://nodejs/./public/rsc/js/preload.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/rsc/js/entry.js");
/******/ 	
/******/ })()
;