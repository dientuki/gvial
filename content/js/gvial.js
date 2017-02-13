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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b():a.LazyLoad=b()}(this,function(){function a(){k||(j={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},k=!0)}function b(a,b,c){function d(){return window.innerWidth||l.documentElement.clientWidth||document.body.clientWidth}function e(){return window.innerHeight||l.documentElement.clientHeight||document.body.clientHeight}function f(a){return a.getBoundingClientRect().top+m-l.documentElement.clientTop}function g(a){return a.getBoundingClientRect().left+n-l.documentElement.clientLeft}function h(){var d;return d=b===window?e()+m:f(b)+b.offsetHeight,d<=f(a)-c}function i(){var e;return e=b===window?d()+window.pageXOffset:g(b)+d(),e<=g(a)-c}function j(){var d;return d=b===window?m:f(b),d>=f(a)+c+a.offsetHeight}function k(){var d;return d=b===window?n:g(b),d>=g(a)+c+a.offsetWidth}var l,m,n;return l=a.ownerDocument,m=window.pageYOffset||l.body.scrollTop,n=window.pageXOffset||l.body.scrollLeft,!(h()||j()||i()||k())}function c(){var a=new Date;return a.getTime()}function d(a,b){var c,d={};for(c in a)a.hasOwnProperty(c)&&(d[c]=a[c]);for(c in b)b.hasOwnProperty(c)&&(d[c]=b[c]);return d}function e(a){return Array.prototype.slice.call(a)}function f(a,b){var c=a.parentElement;if("PICTURE"===c.tagName)for(var d=0;d<c.children.length;d++){var e=c.children[d];if("SOURCE"===e.tagName){var f=e.getAttribute("data-"+b);f&&e.setAttribute("srcset",f)}}}function g(a,b,c){var d=a.tagName,e=a.getAttribute("data-"+c);if("IMG"===d){f(a,b);var g=a.getAttribute("data-"+b);return g&&a.setAttribute("srcset",g),void(e&&a.setAttribute("src",e))}return"IFRAME"===d?void(e&&a.setAttribute("src",e)):void(a.style.backgroundImage="url("+e+")")}function h(a,b){return function(){return a.apply(b,arguments)}}function i(b){a(),this._settings=d(j,b),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=h(this.handleScroll,this),window.addEventListener("resize",this._handleScrollFn),this.update()}var j,k=!1;return i.prototype._showOnAppear=function(a){function b(){a.removeEventListener("load",c),a.classList.remove(d.class_loading),d.callback_error&&d.callback_error(a)}function c(){null!==d&&(d.callback_load&&d.callback_load(a),a.classList.remove(d.class_loading),a.classList.add(d.class_loaded),a.removeEventListener("load",c),a.removeEventListener("error",b))}var d=this._settings;"IMG"!==a.tagName&&"IFRAME"!==a.tagName||(a.addEventListener("load",c),a.addEventListener("error",b),a.classList.add(d.class_loading)),g(a,d.data_srcset,d.data_src),d.callback_set&&d.callback_set(a)},i.prototype._loopThroughElements=function(){var a,c,d=this._settings,e=this._elements,f=e?e.length:0,g=[];for(a=0;a<f;a++)c=e[a],d.skip_invisible&&null===c.offsetParent||b(c,d.container,d.threshold)&&(this._showOnAppear(c),g.push(a),c.wasProcessed=!0);for(;g.length>0;)e.splice(g.pop(),1),d.callback_processed&&d.callback_processed(e.length);0===f&&this._stopScrollHandler()},i.prototype._purgeElements=function(){var a,b,c=this._elements,d=c.length,e=[];for(a=0;a<d;a++)b=c[a],b.wasProcessed&&e.push(a);for(;e.length>0;)c.splice(e.pop(),1)},i.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._handleScrollFn))},i.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._handleScrollFn))},i.prototype.handleScroll=function(){var a,b,d;this._settings&&(b=c(),d=this._settings.throttle,0!==d?(a=d-(b-this._previousLoopTime),a<=0||a>d?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=b,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(h(function(){this._previousLoopTime=c(),this._loopTimeout=null,this._loopThroughElements()},this),a))):this._loopThroughElements())},i.prototype.update=function(){this._elements=e(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},i.prototype.destroy=function(){window.removeEventListener("resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},i});
//# sourceMappingURL=lazyload.min.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Navigation__ = __webpack_require__(0);



new __WEBPACK_IMPORTED_MODULE_1__modules_Navigation__["a" /* default */]();

let myLazyLoad = new __WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload___default.a({
  // example of options object -> see options section
  elements_selector: ".lzl",
  data_src: "original",
  data_srcset: "original-set",
});

/***/ })
/******/ ]);