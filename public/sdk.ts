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

/***/ "./public/sdk/fs.ts":
/*!**************************!*\
  !*** ./public/sdk/fs.ts ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://nodejs/./public/sdk/fs.ts?");

/***/ }),

/***/ "./public/sdk/mod.ts":
/*!***************************!*\
  !*** ./public/sdk/mod.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fs_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fs.ts */ \"./public/sdk/fs.ts\");\n/* harmony import */ var _fs_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fs_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _proxy_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy.ts */ \"./public/sdk/proxy.ts\");\n/* harmony import */ var _open_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open.ts */ \"./public/sdk/open.ts\");\n/* harmony import */ var _widget_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget.ts */ \"./public/sdk/widget.ts\");\n/* harmony import */ var _widget_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_widget_ts__WEBPACK_IMPORTED_MODULE_3__);\n// TODO: Port the SDK to TS and compile the bundle to /sdk.ts where it will be imported by the SW and above the jail (See the SW)\n\n\n\n\n\nvar xen = {};\nxen.fs = (_fs_ts__WEBPACK_IMPORTED_MODULE_0___default());\nxen.proxy = _proxy_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nxen.open = _open_ts__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nxen.widget = (_widget_ts__WEBPACK_IMPORTED_MODULE_3___default());\nxen.model = (_fs_ts__WEBPACK_IMPORTED_MODULE_0___default());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (xen);\n\n\n//# sourceURL=webpack://nodejs/./public/sdk/mod.ts?");

/***/ }),

/***/ "./public/sdk/open.ts":
/*!****************************!*\
  !*** ./public/sdk/open.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar endpoint = \"/fetch/\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (url) { return parent.window.open(endpoint + url); });\n\n\n//# sourceURL=webpack://nodejs/./public/sdk/open.ts?");

/***/ }),

/***/ "./public/sdk/proxy.ts":
/*!*****************************!*\
  !*** ./public/sdk/proxy.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar endpoint = \"/fetch/\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(fetch, {\n    apply: function (target, that, args) {\n        // WHATEVER the endpoint is\n        url = args[0];\n        args[0] = endpoint + url;\n        return Reflect.apply.apply(Reflect, arguments);\n    }\n}));\n\n\n//# sourceURL=webpack://nodejs/./public/sdk/proxy.ts?");

/***/ }),

/***/ "./public/sdk/widget.ts":
/*!******************************!*\
  !*** ./public/sdk/widget.ts ***!
  \******************************/
/***/ (() => {

eval("// Register widget\n\n\n//# sourceURL=webpack://nodejs/./public/sdk/widget.ts?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/sdk/mod.ts");
/******/ 	
/******/ })()
;