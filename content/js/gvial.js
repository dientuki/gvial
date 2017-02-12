/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Navigation {
    constructor(opts) {
        opts = {
            open: '#main-icon .burger-icon',
            close: '#main-icon .close-icon',
            css: 'is-menu-opened'
        };

        this.opts = opts;
        this.init();
    }

    init() {

        this.el = {
            open: document.querySelector(this.opts.open),
            close: document.querySelector(this.opts.close),
        };

        setTimeout(() => {
            this.el.open.addEventListener('click', () => {
                this.onClick();
            });
            this.el.close.addEventListener('click', () => {
                this.onClick();
            });
            document.getElementById('primary-navigation').addEventListener('click', (e) => {
                if (document.body.classList.contains('is-menu-opened') == false) {
                    return false;
                }
                if (e.target.id == "primary-navigation"){
                    this.onClick();
                }
            });
        }, 100);
    }

    onClick() {
        document.body.classList.toggle(this.opts.css);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Navigation;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Navigation__ = __webpack_require__(0);
//import LazyLoad from 'vanilla-lazyload';


new __WEBPACK_IMPORTED_MODULE_0__modules_Navigation__["a" /* default */]();
/*
let myLazyLoad = new LazyLoad({
  // example of options object -> see options section
  container: document.getElementById('scrollPane'),
  elements_selector: ".lzl",
  data_src: "src",
  data_srcset: "srcset",
});
*/

/***/ })
/******/ ]);