/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/src/Core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/src/Class/Example.js":
/*!**************************************!*\
  !*** ./example/src/Class/Example.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Example; });\n/* harmony import */ var _src_EventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/EventBus */ \"./src/EventBus.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Example =\n/*#__PURE__*/\nfunction () {\n  function Example() {\n    _classCallCheck(this, Example);\n\n    if (!this.init()) return false;\n    this.EventBus = new _src_EventBus__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(Example, [{\n    key: \"init\",\n    value: function init() {\n      this.selectors = {\n        clickButton: 'example-click'\n      };\n      this.clickButton = document.querySelector(\".\".concat(this.selectors.clickButton));\n      if (!this.clickButton) return false;\n      return true;\n    }\n  }]);\n\n  return Example;\n}();\n\n\n\n//# sourceURL=webpack:///./example/src/Class/Example.js?");

/***/ }),

/***/ "./example/src/Core.js":
/*!*****************************!*\
  !*** ./example/src/Core.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Class_Example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Class/Example */ \"./example/src/Class/Example.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Core = function Core() {\n  _classCallCheck(this, Core);\n\n  new _Class_Example__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\nnew Core();\n\n//# sourceURL=webpack:///./example/src/Core.js?");

/***/ }),

/***/ "./src/Class/Store.js":
/*!****************************!*\
  !*** ./src/Class/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Store =\n/*#__PURE__*/\nfunction () {\n  function Store() {\n    _classCallCheck(this, Store);\n\n    if (!this.init()) return false;\n  }\n\n  _createClass(Store, [{\n    key: \"init\",\n    value: function init() {\n      this.state = {\n        channels: {},\n        emitters: {},\n        listeners: {}\n      };\n      return true;\n    }\n  }]);\n\n  return Store;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Class/Store.js?");

/***/ }),

/***/ "./src/EventBus.js":
/*!*************************!*\
  !*** ./src/EventBus.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventBus; });\n/* harmony import */ var _Class_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Class/Store */ \"./src/Class/Store.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // Require custom-event-polyfill for IE9-11\n\nvar EventBus =\n/*#__PURE__*/\nfunction () {\n  function EventBus() {\n    _classCallCheck(this, EventBus);\n\n    if (!this.init()) return false;\n  }\n\n  _createClass(EventBus, [{\n    key: \"init\",\n    value: function init() {\n      this.initializedAt = Date.now();\n      this.selectors = {\n        proxy: 'jsEventBusProxy'\n      };\n      this.body = document.querySelector('body');\n      this.proxy = this.setupProxy();\n      this.store = new _Class_Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      return true;\n    }\n  }, {\n    key: \"setupProxy\",\n    value: function setupProxy() {\n      var proxyEl = document.querySelector(\".\".concat(this.selectors.proxy, \"-\").concat(this.initializedAt));\n\n      if (!proxyEl) {\n        var newProxy = document.createElement('div');\n        newProxy.classList.add(\"\".concat(this.selectors.proxy, \"-\").concat(this.initializedAt));\n        this.body.append(newProxy);\n      }\n    } // Public methods\n\n  }, {\n    key: \"create\",\n    value: function create() {}\n  }, {\n    key: \"subscribe\",\n    value: function subscribe() {}\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe() {}\n  }, {\n    key: \"broadcast\",\n    value: function broadcast() {}\n  }, {\n    key: \"emit\",\n    value: function emit() {}\n  }, {\n    key: \"publish\",\n    value: function publish() {}\n  }, {\n    key: \"enterChannel\",\n    value: function enterChannel() {}\n  }, {\n    key: \"leaveChannel\",\n    value: function leaveChannel() {}\n  }, {\n    key: \"createChannel\",\n    value: function createChannel() {}\n  }, {\n    key: \"observe\",\n    value: function observe() {}\n  }, {\n    key: \"snapshot\",\n    value: function snapshot() {}\n  }]);\n\n  return EventBus;\n}();\n\n\n\n//# sourceURL=webpack:///./src/EventBus.js?");

/***/ })

/******/ });