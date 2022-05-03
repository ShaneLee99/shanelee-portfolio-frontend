(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/Jarallax.js":
/*!********************************!*\
  !*** ./components/Jarallax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jarallax; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Pleht_OneDrive_Desktop_MyWebsite_crypticzxi_portfolio_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/dist/jarallax.esm.js");
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ "./node_modules/jarallax/dist/jarallax.css");
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\Pleht\\OneDrive\\Desktop\\MyWebsite\\crypticzxi-portfolio-frontend\\components\\Jarallax.js",
    _s = $RefreshSig$();



 // Optional video extension

Object(jarallax__WEBPACK_IMPORTED_MODULE_3__["jarallaxVideo"])();
function Jarallax(_ref) {
  _s();

  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = Object(C_Users_Pleht_OneDrive_Desktop_MyWebsite_crypticzxi_portfolio_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children"]);

  var $el = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // Init Jarallax.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if ($el.current) {
      Object(jarallax__WEBPACK_IMPORTED_MODULE_3__["jarallax"])($el.current, props);
    } // Destroy Jarallax.


    return function destroy() {
      if ($el.current) {
        Object(jarallax__WEBPACK_IMPORTED_MODULE_3__["jarallax"])($el.current, 'destroy');
      }
    };
  }, []); // Update options.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if ($el.current) {
      Object(jarallax__WEBPACK_IMPORTED_MODULE_3__["jarallax"])($el.current, 'destroy');
      Object(jarallax__WEBPACK_IMPORTED_MODULE_3__["jarallax"])($el.current, props);
    }
  }, [props]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: $el,
    className: "jarallax ".concat(className),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(Jarallax, "yNp7mHYvxcfHDykh1rYOgv7QpRo=");

_c = Jarallax;

var _c;

$RefreshReg$(_c, "Jarallax");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.css":
/*!*************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/jarallax/dist/jarallax.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/jarallax/dist/jarallax.css",
      function () {
        content = __webpack_require__(/*! !../../next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./jarallax.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/jarallax/dist/jarallax.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.esm.js ***!
  \****************************************************/
/*! exports provided: jarallax, jarallaxElement, jarallaxVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jarallax", function() { return jarallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jarallaxElement", function() { return jarallaxElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jarallaxVideo", function() { return jarallaxVideo; });
/*!
 * Jarallax v2.0.3 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */
function ready(callback) {
  if ('complete' === document.readyState || 'interactive' === document.readyState) {
    // Already ready or interactive, execute callback
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback, {
      capture: true,
      once: true,
      passive: true
    });
  }
}

/* eslint-disable import/no-mutable-exports */

/* eslint-disable no-restricted-globals */
let win$1;

if ('undefined' !== typeof window) {
  win$1 = window;
} else if ('undefined' !== typeof global) {
  win$1 = global;
} else if ('undefined' !== typeof self) {
  win$1 = self;
} else {
  win$1 = {};
}

var global$2 = win$1;

const {
  navigator
} = global$2;
const isMobile = /*#__PURE__*/ /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
let $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */

function getDeviceHeight() {
  if (!$deviceHelper && document.body) {
    $deviceHelper = document.createElement('div');
    $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
    document.body.appendChild($deviceHelper);
  }

  return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global$2.innerHeight || document.documentElement.clientHeight;
} // Window height data


let wndH;

function updateWndVars() {
  if (isMobile) {
    wndH = getDeviceHeight();
  } else {
    wndH = global$2.innerHeight || document.documentElement.clientHeight;
  }
}

updateWndVars();
global$2.addEventListener('resize', updateWndVars);
global$2.addEventListener('orientationchange', updateWndVars);
global$2.addEventListener('load', updateWndVars);
ready(() => {
  updateWndVars();
}); // list with all jarallax instances
// need to render all in one scroll/resize event

const jarallaxList = []; // get all parents of the element.

function getParents(elem) {
  const parents = [];

  while (null !== elem.parentElement) {
    elem = elem.parentElement;

    if (1 === elem.nodeType) {
      parents.push(elem);
    }
  }

  return parents;
}

function updateParallax() {
  if (!jarallaxList.length) {
    return;
  }

  jarallaxList.forEach((data, k) => {
    const {
      instance,
      oldData
    } = data;
    const clientRect = instance.$item.getBoundingClientRect();
    const newData = {
      width: clientRect.width,
      height: clientRect.height,
      top: clientRect.top,
      bottom: clientRect.bottom,
      wndW: global$2.innerWidth,
      wndH
    };
    const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
    const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
    jarallaxList[k].oldData = newData;

    if (isResized) {
      instance.onResize();
    }

    if (isScrolled) {
      instance.onScroll();
    }
  });
  global$2.requestAnimationFrame(updateParallax);
}

let instanceID = 0; // Jarallax class

class Jarallax {
  constructor(item, userOptions) {
    const self = this;
    self.instanceID = instanceID;
    instanceID += 1;
    self.$item = item;
    self.defaults = {
      type: 'scroll',
      // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
      speed: 0.5,
      // supported value from -1 to 2
      imgSrc: null,
      imgElement: '.jarallax-img',
      imgSize: 'cover',
      imgPosition: '50% 50%',
      imgRepeat: 'no-repeat',
      // supported only for background, not for <img> tag
      keepImg: false,
      // keep <img> tag in it's default place
      elementInViewport: null,
      zIndex: -100,
      disableParallax: false,
      disableVideo: false,
      // video
      videoSrc: null,
      videoStartTime: 0,
      videoEndTime: 0,
      videoVolume: 0,
      videoLoop: true,
      videoPlayOnlyVisible: true,
      videoLazyLoading: true,
      // events
      onScroll: null,
      // function(calculations) {}
      onInit: null,
      // function() {}
      onDestroy: null,
      // function() {}
      onCoverImage: null // function() {}

    }; // prepare data-options

    const dataOptions = self.$item.dataset || {};
    const pureDataOptions = {};
    Object.keys(dataOptions).forEach(key => {
      const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);

      if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) {
        pureDataOptions[loweCaseOption] = dataOptions[key];
      }
    });
    self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
    self.pureOptions = self.extend({}, self.options); // prepare 'true' and 'false' strings to boolean

    Object.keys(self.options).forEach(key => {
      if ('true' === self.options[key]) {
        self.options[key] = true;
      } else if ('false' === self.options[key]) {
        self.options[key] = false;
      }
    }); // fix speed option [-1.0, 2.0]

    self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed))); // prepare disableParallax callback

    if ('string' === typeof self.options.disableParallax) {
      self.options.disableParallax = new RegExp(self.options.disableParallax);
    }

    if (self.options.disableParallax instanceof RegExp) {
      const disableParallaxRegexp = self.options.disableParallax;

      self.options.disableParallax = () => disableParallaxRegexp.test(navigator.userAgent);
    }

    if ('function' !== typeof self.options.disableParallax) {
      self.options.disableParallax = () => false;
    } // prepare disableVideo callback


    if ('string' === typeof self.options.disableVideo) {
      self.options.disableVideo = new RegExp(self.options.disableVideo);
    }

    if (self.options.disableVideo instanceof RegExp) {
      const disableVideoRegexp = self.options.disableVideo;

      self.options.disableVideo = () => disableVideoRegexp.test(navigator.userAgent);
    }

    if ('function' !== typeof self.options.disableVideo) {
      self.options.disableVideo = () => false;
    } // custom element to check if parallax in viewport


    let elementInVP = self.options.elementInViewport; // get first item from array

    if (elementInVP && 'object' === typeof elementInVP && 'undefined' !== typeof elementInVP.length) {
      [elementInVP] = elementInVP;
    } // check if dom element


    if (!(elementInVP instanceof Element)) {
      elementInVP = null;
    }

    self.options.elementInViewport = elementInVP;
    self.image = {
      src: self.options.imgSrc || null,
      $container: null,
      useImgTag: false,
      // 1. Position fixed is needed for the most of browsers because absolute position have glitches
      // 2. On MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
      // 3. Previously used 'absolute' for mobile devices. But we re-tested on iPhone 12 and 'fixed' position is working better, then 'absolute', so for now position is always 'fixed'
      position: 'fixed'
    };

    if (self.initImg() && self.canInitParallax()) {
      self.init();
    }
  } // add styles to element
  // eslint-disable-next-line class-methods-use-this


  css(el, styles) {
    if ('string' === typeof styles) {
      return global$2.getComputedStyle(el).getPropertyValue(styles);
    }

    Object.keys(styles).forEach(key => {
      el.style[key] = styles[key];
    });
    return el;
  } // Extend like jQuery.extend
  // eslint-disable-next-line class-methods-use-this


  extend(out, ...args) {
    out = out || {};
    Object.keys(args).forEach(i => {
      if (!args[i]) {
        return;
      }

      Object.keys(args[i]).forEach(key => {
        out[key] = args[i][key];
      });
    });
    return out;
  } // get window size and scroll position. Useful for extensions
  // eslint-disable-next-line class-methods-use-this


  getWindowData() {
    return {
      width: global$2.innerWidth || document.documentElement.clientWidth,
      height: wndH,
      y: document.documentElement.scrollTop
    };
  } // Jarallax functions


  initImg() {
    const self = this; // find image element

    let $imgElement = self.options.imgElement;

    if ($imgElement && 'string' === typeof $imgElement) {
      $imgElement = self.$item.querySelector($imgElement);
    } // check if dom element


    if (!($imgElement instanceof Element)) {
      if (self.options.imgSrc) {
        $imgElement = new Image();
        $imgElement.src = self.options.imgSrc;
      } else {
        $imgElement = null;
      }
    }

    if ($imgElement) {
      if (self.options.keepImg) {
        self.image.$item = $imgElement.cloneNode(true);
      } else {
        self.image.$item = $imgElement;
        self.image.$itemParent = $imgElement.parentNode;
      }

      self.image.useImgTag = true;
    } // true if there is img tag


    if (self.image.$item) {
      return true;
    } // get image src


    if (null === self.image.src) {
      self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      self.image.bgImage = self.css(self.$item, 'background-image');
    }

    return !(!self.image.bgImage || 'none' === self.image.bgImage);
  }

  canInitParallax() {
    return !this.options.disableParallax();
  }

  init() {
    const self = this;
    const containerStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    };
    let imageStyles = {
      pointerEvents: 'none',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
      willChange: 'transform,opacity'
    };

    if (!self.options.keepImg) {
      // save default user styles
      const curStyle = self.$item.getAttribute('style');

      if (curStyle) {
        self.$item.setAttribute('data-jarallax-original-styles', curStyle);
      }

      if (self.image.useImgTag) {
        const curImgStyle = self.image.$item.getAttribute('style');

        if (curImgStyle) {
          self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
        }
      }
    } // set relative position and z-index to the parent


    if ('static' === self.css(self.$item, 'position')) {
      self.css(self.$item, {
        position: 'relative'
      });
    }

    if ('auto' === self.css(self.$item, 'z-index')) {
      self.css(self.$item, {
        zIndex: 0
      });
    } // container for parallax image


    self.image.$container = document.createElement('div');
    self.css(self.image.$container, containerStyles);
    self.css(self.image.$container, {
      'z-index': self.options.zIndex
    }); // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    // needed only when background in fixed position

    if ('fixed' === this.image.position) {
      self.css(self.image.$container, {
        '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      });
    }

    self.image.$container.setAttribute('id', `jarallax-container-${self.instanceID}`);
    self.$item.appendChild(self.image.$container); // use img tag

    if (self.image.useImgTag) {
      imageStyles = self.extend({
        'object-fit': self.options.imgSize,
        'object-position': self.options.imgPosition,
        'max-width': 'none'
      }, containerStyles, imageStyles); // use div with background image
    } else {
      self.image.$item = document.createElement('div');

      if (self.image.src) {
        imageStyles = self.extend({
          'background-position': self.options.imgPosition,
          'background-size': self.options.imgSize,
          'background-repeat': self.options.imgRepeat,
          'background-image': self.image.bgImage || `url("${self.image.src}")`
        }, containerStyles, imageStyles);
      }
    }

    if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) {
      self.image.position = 'absolute';
    } // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
    //    discussion - https://github.com/nk-o/jarallax/issues/9
    // 2. Check if parents have overflow scroll


    if ('fixed' === self.image.position) {
      const $parents = getParents(self.$item).filter(el => {
        const styles = global$2.getComputedStyle(el);
        const parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
        const overflowRegex = /(auto|scroll)/;
        return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
      });
      self.image.position = $parents.length ? 'absolute' : 'fixed';
    } // add position to parallax block


    imageStyles.position = self.image.position; // insert parallax image

    self.css(self.image.$item, imageStyles);
    self.image.$container.appendChild(self.image.$item); // set initial position and size

    self.onResize();
    self.onScroll(true); // call onInit event

    if (self.options.onInit) {
      self.options.onInit.call(self);
    } // remove default user background


    if ('none' !== self.css(self.$item, 'background-image')) {
      self.css(self.$item, {
        'background-image': 'none'
      });
    }

    self.addToParallaxList();
  } // add to parallax instances list


  addToParallaxList() {
    jarallaxList.push({
      instance: this
    });

    if (1 === jarallaxList.length) {
      global$2.requestAnimationFrame(updateParallax);
    }
  } // remove from parallax instances list


  removeFromParallaxList() {
    const self = this;
    jarallaxList.forEach((data, key) => {
      if (data.instance.instanceID === self.instanceID) {
        jarallaxList.splice(key, 1);
      }
    });
  }

  destroy() {
    const self = this;
    self.removeFromParallaxList(); // return styles on container as before jarallax init

    const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
    self.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

    if (!originalStylesTag) {
      self.$item.removeAttribute('style');
    } else {
      self.$item.setAttribute('style', originalStylesTag);
    }

    if (self.image.useImgTag) {
      // return styles on img tag as before jarallax init
      const originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
      self.image.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init

      if (!originalStylesImgTag) {
        self.image.$item.removeAttribute('style');
      } else {
        self.image.$item.setAttribute('style', originalStylesTag);
      } // move img tag to its default position


      if (self.image.$itemParent) {
        self.image.$itemParent.appendChild(self.image.$item);
      }
    } // remove additional dom elements


    if (self.image.$container) {
      self.image.$container.parentNode.removeChild(self.image.$container);
    } // call onDestroy event


    if (self.options.onDestroy) {
      self.options.onDestroy.call(self);
    } // delete jarallax from item


    delete self.$item.jarallax;
  } // Fallback for removed function.
  // Does nothing now.
  // eslint-disable-next-line class-methods-use-this


  clipContainer() {}

  coverImage() {
    const self = this;
    const rect = self.image.$container.getBoundingClientRect();
    const contH = rect.height;
    const {
      speed
    } = self.options;
    const isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
    let scrollDist = 0;
    let resultH = contH;
    let resultMT = 0; // scroll parallax

    if (isScroll) {
      // scroll distance and height for image
      if (0 > speed) {
        scrollDist = speed * Math.max(contH, wndH);

        if (wndH < contH) {
          scrollDist -= speed * (contH - wndH);
        }
      } else {
        scrollDist = speed * (contH + wndH);
      } // size for scroll parallax


      if (1 < speed) {
        resultH = Math.abs(scrollDist - wndH);
      } else if (0 > speed) {
        resultH = scrollDist / speed + Math.abs(scrollDist);
      } else {
        resultH += (wndH - contH) * (1 - speed);
      }

      scrollDist /= 2;
    } // store scroll distance


    self.parallaxScrollDistance = scrollDist; // vertical center

    if (isScroll) {
      resultMT = (wndH - resultH) / 2;
    } else {
      resultMT = (contH - resultH) / 2;
    } // apply result to item


    self.css(self.image.$item, {
      height: `${resultH}px`,
      marginTop: `${resultMT}px`,
      left: 'fixed' === self.image.position ? `${rect.left}px` : '0',
      width: `${rect.width}px`
    }); // call onCoverImage event

    if (self.options.onCoverImage) {
      self.options.onCoverImage.call(self);
    } // return some useful data. Used in the video cover function


    return {
      image: {
        height: resultH,
        marginTop: resultMT
      },
      container: rect
    };
  }

  isVisible() {
    return this.isElementInViewport || false;
  }

  onScroll(force) {
    const self = this;
    const rect = self.$item.getBoundingClientRect();
    const contT = rect.top;
    const contH = rect.height;
    const styles = {}; // check if in viewport

    let viewportRect = rect;

    if (self.options.elementInViewport) {
      viewportRect = self.options.elementInViewport.getBoundingClientRect();
    }

    self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global$2.innerWidth; // stop calculations if item is not in viewport

    if (force ? false : !self.isElementInViewport) {
      return;
    } // calculate parallax helping variables


    const beforeTop = Math.max(0, contT);
    const beforeTopEnd = Math.max(0, contH + contT);
    const afterTop = Math.max(0, -contT);
    const beforeBottom = Math.max(0, contT + contH - wndH);
    const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
    const afterBottom = Math.max(0, -contT + wndH - contH);
    const fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH)); // calculate on how percent of section is visible

    let visiblePercent = 1;

    if (contH < wndH) {
      visiblePercent = 1 - (afterTop || beforeBottom) / contH;
    } else if (beforeTopEnd <= wndH) {
      visiblePercent = beforeTopEnd / wndH;
    } else if (beforeBottomEnd <= wndH) {
      visiblePercent = beforeBottomEnd / wndH;
    } // opacity


    if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
      styles.transform = 'translate3d(0,0,0)';
      styles.opacity = visiblePercent;
    } // scale


    if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
      let scale = 1;

      if (0 > self.options.speed) {
        scale -= self.options.speed * visiblePercent;
      } else {
        scale += self.options.speed * (1 - visiblePercent);
      }

      styles.transform = `scale(${scale}) translate3d(0,0,0)`;
    } // scroll


    if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
      let positionY = self.parallaxScrollDistance * fromViewportCenter; // fix if parallax block in absolute position

      if ('absolute' === self.image.position) {
        positionY -= contT;
      }

      styles.transform = `translate3d(0,${positionY}px,0)`;
    }

    self.css(self.image.$item, styles); // call onScroll event

    if (self.options.onScroll) {
      self.options.onScroll.call(self, {
        section: rect,
        beforeTop,
        beforeTopEnd,
        afterTop,
        beforeBottom,
        beforeBottomEnd,
        afterBottom,
        visiblePercent,
        fromViewportCenter
      });
    }
  }

  onResize() {
    this.coverImage();
  }

} // global definition


const jarallax$1 = function (items, options, ...args) {
  // check for dom element
  // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  if ('object' === typeof HTMLElement ? items instanceof HTMLElement : items && 'object' === typeof items && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) {
    items = [items];
  }

  const len = items.length;
  let k = 0;
  let ret;

  for (k; k < len; k += 1) {
    if ('object' === typeof options || 'undefined' === typeof options) {
      if (!items[k].jarallax) {
        items[k].jarallax = new Jarallax(items[k], options);
      }
    } else if (items[k].jarallax) {
      // eslint-disable-next-line prefer-spread
      ret = items[k].jarallax[options].apply(items[k].jarallax, args);
    }

    if ('undefined' !== typeof ret) {
      return ret;
    }
  }

  return items;
};

jarallax$1.constructor = Jarallax;

/*!
 * Name    : Video Worker
 * Version : 2.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/video-worker
 */

/* eslint-disable import/no-mutable-exports */

/* eslint-disable no-restricted-globals */
let win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof global !== 'undefined') {
  win = global;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

var global$1 = win; // Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery

function Deferred() {
  this.doneCallbacks = [];
  this.failCallbacks = [];
}

Deferred.prototype = {
  execute(list, args) {
    let i = list.length; // eslint-disable-next-line no-param-reassign

    args = Array.prototype.slice.call(args);

    while (i) {
      i -= 1;
      list[i].apply(null, args);
    }
  },

  resolve(...args) {
    this.execute(this.doneCallbacks, args);
  },

  reject(...args) {
    this.execute(this.failCallbacks, args);
  },

  done(callback) {
    this.doneCallbacks.push(callback);
  },

  fail(callback) {
    this.failCallbacks.push(callback);
  }

};
let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = /*#__PURE__*/new Deferred();
const loadingVimeoDefer = /*#__PURE__*/new Deferred();

class VideoWorker {
  constructor(url, options) {
    const self = this;
    self.url = url;
    self.options_default = {
      autoplay: false,
      loop: false,
      mute: false,
      volume: 100,
      showControls: true,
      accessibilityHidden: false,
      // start / end video time in seconds
      startTime: 0,
      endTime: 0
    };
    self.options = self.extend({}, self.options_default, options); // Fix wrong option name.
    // Thanks to https://github.com/nk-o/video-worker/issues/13.

    if (typeof self.options.showContols !== 'undefined') {
      self.options.showControls = self.options.showContols;
      delete self.options.showContols;
    } // check URL


    self.videoID = self.parseURL(url); // init

    if (self.videoID) {
      self.ID = ID;
      ID += 1;
      self.loadAPI();
      self.init();
    }
  } // Extend like jQuery.extend
  // eslint-disable-next-line class-methods-use-this


  extend(...args) {
    const out = args[0] || {};
    Object.keys(args).forEach(i => {
      if (!args[i]) {
        return;
      }

      Object.keys(args[i]).forEach(key => {
        out[key] = args[i][key];
      });
    });
    return out;
  }

  parseURL(url) {
    // parse youtube ID
    function getYoutubeID(ytUrl) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
      const match = ytUrl.match(regExp);
      return match && match[1].length === 11 ? match[1] : false;
    } // parse vimeo ID


    function getVimeoID(vmUrl) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      const match = vmUrl.match(regExp);
      return match && match[3] ? match[3] : false;
    } // parse local string


    function getLocalVideos(locUrl) {
      // eslint-disable-next-line no-useless-escape
      const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
      const result = {};
      let ready = 0;
      videoFormats.forEach(val => {
        // eslint-disable-next-line no-useless-escape
        const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);

        if (match && match[1] && match[2]) {
          // eslint-disable-next-line prefer-destructuring
          result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
          ready = 1;
        }
      });
      return ready ? result : false;
    }

    const Youtube = getYoutubeID(url);
    const Vimeo = getVimeoID(url);
    const Local = getLocalVideos(url);

    if (Youtube) {
      this.type = 'youtube';
      return Youtube;
    }

    if (Vimeo) {
      this.type = 'vimeo';
      return Vimeo;
    }

    if (Local) {
      this.type = 'local';
      return Local;
    }

    return false;
  }

  isValid() {
    return !!this.videoID;
  } // events


  on(name, callback) {
    this.userEventsList = this.userEventsList || []; // add new callback in events list

    (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
  }

  off(name, callback) {
    if (!this.userEventsList || !this.userEventsList[name]) {
      return;
    }

    if (!callback) {
      delete this.userEventsList[name];
    } else {
      this.userEventsList[name].forEach((val, key) => {
        if (val === callback) {
          this.userEventsList[name][key] = false;
        }
      });
    }
  }

  fire(name, ...args) {
    if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
      this.userEventsList[name].forEach(val => {
        // call with all arguments
        if (val) {
          val.apply(this, args);
        }
      });
    }
  }

  play(start) {
    const self = this;

    if (!self.player) {
      return;
    }

    if (self.type === 'youtube' && self.player.playVideo) {
      if (typeof start !== 'undefined') {
        self.player.seekTo(start || 0);
      }

      if (global$1.YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
        self.player.playVideo();
      }
    }

    if (self.type === 'vimeo') {
      if (typeof start !== 'undefined') {
        self.player.setCurrentTime(start);
      }

      self.player.getPaused().then(paused => {
        if (paused) {
          self.player.play();
        }
      });
    }

    if (self.type === 'local') {
      if (typeof start !== 'undefined') {
        self.player.currentTime = start;
      }

      if (self.player.paused) {
        self.player.play();
      }
    }
  }

  pause() {
    const self = this;

    if (!self.player) {
      return;
    }

    if (self.type === 'youtube' && self.player.pauseVideo) {
      if (global$1.YT.PlayerState.PLAYING === self.player.getPlayerState()) {
        self.player.pauseVideo();
      }
    }

    if (self.type === 'vimeo') {
      self.player.getPaused().then(paused => {
        if (!paused) {
          self.player.pause();
        }
      });
    }

    if (self.type === 'local') {
      if (!self.player.paused) {
        self.player.pause();
      }
    }
  }

  mute() {
    const self = this;

    if (!self.player) {
      return;
    }

    if (self.type === 'youtube' && self.player.mute) {
      self.player.mute();
    }

    if (self.type === 'vimeo' && self.player.setVolume) {
      self.player.setVolume(0);
    }

    if (self.type === 'local') {
      self.$video.muted = true;
    }
  }

  unmute() {
    const self = this;

    if (!self.player) {
      return;
    }

    if (self.type === 'youtube' && self.player.mute) {
      self.player.unMute();
    }

    if (self.type === 'vimeo' && self.player.setVolume) {
      self.player.setVolume(self.options.volume);
    }

    if (self.type === 'local') {
      self.$video.muted = false;
    }
  }

  setVolume(volume = false) {
    const self = this;

    if (!self.player || !volume) {
      return;
    }

    if (self.type === 'youtube' && self.player.setVolume) {
      self.player.setVolume(volume);
    }

    if (self.type === 'vimeo' && self.player.setVolume) {
      self.player.setVolume(volume);
    }

    if (self.type === 'local') {
      self.$video.volume = volume / 100;
    }
  }

  getVolume(callback) {
    const self = this;

    if (!self.player) {
      callback(false);
      return;
    }

    if (self.type === 'youtube' && self.player.getVolume) {
      callback(self.player.getVolume());
    }

    if (self.type === 'vimeo' && self.player.getVolume) {
      self.player.getVolume().then(volume => {
        callback(volume);
      });
    }

    if (self.type === 'local') {
      callback(self.$video.volume * 100);
    }
  }

  getMuted(callback) {
    const self = this;

    if (!self.player) {
      callback(null);
      return;
    }

    if (self.type === 'youtube' && self.player.isMuted) {
      callback(self.player.isMuted());
    }

    if (self.type === 'vimeo' && self.player.getVolume) {
      self.player.getVolume().then(volume => {
        callback(!!volume);
      });
    }

    if (self.type === 'local') {
      callback(self.$video.muted);
    }
  }

  getImageURL(callback) {
    const self = this;

    if (self.videoImage) {
      callback(self.videoImage);
      return;
    }

    if (self.type === 'youtube') {
      const availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
      let step = 0;
      const tempImg = new Image();

      tempImg.onload = function () {
        // if no thumbnail, youtube add their own image with width = 120px
        if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
          // ok
          self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
          callback(self.videoImage);
        } else {
          // try another size
          step += 1;
          this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
        }
      };

      tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
    }

    if (self.type === 'vimeo') {
      let request = new XMLHttpRequest(); // https://vimeo.com/api/oembed.json?url=https://vimeo.com/235212527

      request.open('GET', `https://vimeo.com/api/oembed.json?url=${self.url}`, true);

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 400) {
            // Success!
            const response = JSON.parse(this.responseText);

            if (response.thumbnail_url) {
              self.videoImage = response.thumbnail_url;
              callback(self.videoImage);
            }
          }
        }
      };

      request.send();
      request = null;
    }
  } // fallback to the old version.


  getIframe(callback) {
    this.getVideo(callback);
  }

  getVideo(callback) {
    const self = this; // return generated video block

    if (self.$video) {
      callback(self.$video);
      return;
    } // generate new video block


    self.onAPIready(() => {
      let hiddenDiv;

      if (!self.$video) {
        hiddenDiv = document.createElement('div');
        hiddenDiv.style.display = 'none';
      } // Youtube


      if (self.type === 'youtube') {
        self.playerOptions = {
          // GDPR Compliance.
          host: 'https://www.youtube-nocookie.com',
          videoId: self.videoID,
          playerVars: {
            autohide: 1,
            rel: 0,
            autoplay: 0,
            // autoplay enable on mobile devices
            playsinline: 1
          }
        }; // hide controls

        if (!self.options.showControls) {
          self.playerOptions.playerVars.iv_load_policy = 3;
          self.playerOptions.playerVars.modestbranding = 1;
          self.playerOptions.playerVars.controls = 0;
          self.playerOptions.playerVars.showinfo = 0;
          self.playerOptions.playerVars.disablekb = 1;
        } // events


        let ytStarted;
        let ytProgressInterval;
        self.playerOptions.events = {
          onReady(e) {
            // mute
            if (self.options.mute) {
              e.target.mute();
            } else if (self.options.volume) {
              e.target.setVolume(self.options.volume);
            } // autoplay


            if (self.options.autoplay) {
              self.play(self.options.startTime);
            }

            self.fire('ready', e); // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
            // https://github.com/nk-o/video-worker/issues/2

            if (self.options.loop && !self.options.endTime) {
              const secondsOffset = 0.1;
              self.options.endTime = self.player.getDuration() - secondsOffset;
            } // volumechange


            setInterval(() => {
              self.getVolume(volume => {
                if (self.options.volume !== volume) {
                  self.options.volume = volume;
                  self.fire('volumechange', e);
                }
              });
            }, 150);
          },

          onStateChange(e) {
            // loop
            if (self.options.loop && e.data === global$1.YT.PlayerState.ENDED) {
              self.play(self.options.startTime);
            }

            if (!ytStarted && e.data === global$1.YT.PlayerState.PLAYING) {
              ytStarted = 1;
              self.fire('started', e);
            }

            if (e.data === global$1.YT.PlayerState.PLAYING) {
              self.fire('play', e);
            }

            if (e.data === global$1.YT.PlayerState.PAUSED) {
              self.fire('pause', e);
            }

            if (e.data === global$1.YT.PlayerState.ENDED) {
              self.fire('ended', e);
            } // progress check


            if (e.data === global$1.YT.PlayerState.PLAYING) {
              ytProgressInterval = setInterval(() => {
                self.fire('timeupdate', e); // check for end of video and play again or stop

                if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                  if (self.options.loop) {
                    self.play(self.options.startTime);
                  } else {
                    self.pause();
                  }
                }
              }, 150);
            } else {
              clearInterval(ytProgressInterval);
            }
          },

          onError(e) {
            self.fire('error', e);
          }

        };
        const firstInit = !self.$video;

        if (firstInit) {
          const div = document.createElement('div');
          div.setAttribute('id', self.playerID);
          hiddenDiv.appendChild(div);
          document.body.appendChild(hiddenDiv);
        }

        self.player = self.player || new global$1.YT.Player(self.playerID, self.playerOptions);

        if (firstInit) {
          self.$video = document.getElementById(self.playerID); // add accessibility attributes

          if (self.options.accessibilityHidden) {
            self.$video.setAttribute('tabindex', '-1');
            self.$video.setAttribute('aria-hidden', 'true');
          } // get video width and height


          self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
          self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
        }
      } // Vimeo


      if (self.type === 'vimeo') {
        self.playerOptions = {
          // GDPR Compliance.
          dnt: 1,
          id: self.videoID,
          autopause: 0,
          transparent: 0,
          autoplay: self.options.autoplay ? 1 : 0,
          loop: self.options.loop ? 1 : 0,
          muted: self.options.mute ? 1 : 0
        };

        if (self.options.volume) {
          self.playerOptions.volume = self.options.volume;
        } // hide controls


        if (!self.options.showControls) {
          self.playerOptions.badge = 0;
          self.playerOptions.byline = 0;
          self.playerOptions.portrait = 0;
          self.playerOptions.title = 0;
          self.playerOptions.background = 1;
        }

        if (!self.$video) {
          let playerOptionsString = '';
          Object.keys(self.playerOptions).forEach(key => {
            if (playerOptionsString !== '') {
              playerOptionsString += '&';
            }

            playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;
          }); // we need to create iframe manually because when we create it using API
          // js events won't triggers after iframe moved to another place

          self.$video = document.createElement('iframe');
          self.$video.setAttribute('id', self.playerID);
          self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);
          self.$video.setAttribute('frameborder', '0');
          self.$video.setAttribute('mozallowfullscreen', '');
          self.$video.setAttribute('allowfullscreen', '');
          self.$video.setAttribute('title', 'Vimeo video player'); // add accessibility attributes

          if (self.options.accessibilityHidden) {
            self.$video.setAttribute('tabindex', '-1');
            self.$video.setAttribute('aria-hidden', 'true');
          }

          hiddenDiv.appendChild(self.$video);
          document.body.appendChild(hiddenDiv);
        }

        self.player = self.player || new global$1.Vimeo.Player(self.$video, self.playerOptions); // set current time for autoplay

        if (self.options.startTime && self.options.autoplay) {
          self.player.setCurrentTime(self.options.startTime);
        } // get video width and height


        self.player.getVideoWidth().then(width => {
          self.videoWidth = width || 1280;
        });
        self.player.getVideoHeight().then(height => {
          self.videoHeight = height || 720;
        }); // events

        let vmStarted;
        self.player.on('timeupdate', e => {
          if (!vmStarted) {
            self.fire('started', e);
            vmStarted = 1;
          }

          self.fire('timeupdate', e); // check for end of video and play again or stop

          if (self.options.endTime) {
            if (self.options.endTime && e.seconds >= self.options.endTime) {
              if (self.options.loop) {
                self.play(self.options.startTime);
              } else {
                self.pause();
              }
            }
          }
        });
        self.player.on('play', e => {
          self.fire('play', e); // check for the start time and start with it

          if (self.options.startTime && e.seconds === 0) {
            self.play(self.options.startTime);
          }
        });
        self.player.on('pause', e => {
          self.fire('pause', e);
        });
        self.player.on('ended', e => {
          self.fire('ended', e);
        });
        self.player.on('loaded', e => {
          self.fire('ready', e);
        });
        self.player.on('volumechange', e => {
          self.fire('volumechange', e);
        });
        self.player.on('error', e => {
          self.fire('error', e);
        });
      } // Local


      function addSourceToLocal(element, src, type) {
        const source = document.createElement('source');
        source.src = src;
        source.type = type;
        element.appendChild(source);
      }

      if (self.type === 'local') {
        if (!self.$video) {
          self.$video = document.createElement('video'); // show controls

          if (self.options.showControls) {
            self.$video.controls = true;
          } // mute


          if (self.options.mute) {
            self.$video.muted = true;
          } else if (self.$video.volume) {
            self.$video.volume = self.options.volume / 100;
          } // loop


          if (self.options.loop) {
            self.$video.loop = true;
          } // autoplay enable on mobile devices


          self.$video.setAttribute('playsinline', '');
          self.$video.setAttribute('webkit-playsinline', ''); // add accessibility attributes

          if (self.options.accessibilityHidden) {
            self.$video.setAttribute('tabindex', '-1');
            self.$video.setAttribute('aria-hidden', 'true');
          }

          self.$video.setAttribute('id', self.playerID);
          hiddenDiv.appendChild(self.$video);
          document.body.appendChild(hiddenDiv);
          Object.keys(self.videoID).forEach(key => {
            addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);
          });
        }

        self.player = self.player || self.$video;
        let locStarted;
        self.player.addEventListener('playing', e => {
          if (!locStarted) {
            self.fire('started', e);
          }

          locStarted = 1;
        });
        self.player.addEventListener('timeupdate', function (e) {
          self.fire('timeupdate', e); // check for end of video and play again or stop

          if (self.options.endTime) {
            if (self.options.endTime && this.currentTime >= self.options.endTime) {
              if (self.options.loop) {
                self.play(self.options.startTime);
              } else {
                self.pause();
              }
            }
          }
        });
        self.player.addEventListener('play', e => {
          self.fire('play', e);
        });
        self.player.addEventListener('pause', e => {
          self.fire('pause', e);
        });
        self.player.addEventListener('ended', e => {
          self.fire('ended', e);
        });
        self.player.addEventListener('loadedmetadata', function () {
          // get video width and height
          self.videoWidth = this.videoWidth || 1280;
          self.videoHeight = this.videoHeight || 720;
          self.fire('ready'); // autoplay

          if (self.options.autoplay) {
            self.play(self.options.startTime);
          }
        });
        self.player.addEventListener('volumechange', e => {
          self.getVolume(volume => {
            self.options.volume = volume;
          });
          self.fire('volumechange', e);
        });
        self.player.addEventListener('error', e => {
          self.fire('error', e);
        });
      }

      callback(self.$video);
    });
  }

  init() {
    const self = this;
    self.playerID = `VideoWorker-${self.ID}`;
  }

  loadAPI() {
    const self = this;

    if (YoutubeAPIadded && VimeoAPIadded) {
      return;
    }

    let src = ''; // load Youtube API

    if (self.type === 'youtube' && !YoutubeAPIadded) {
      YoutubeAPIadded = 1;
      src = 'https://www.youtube.com/iframe_api';
    } // load Vimeo API


    if (self.type === 'vimeo' && !VimeoAPIadded) {
      VimeoAPIadded = 1; // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7

      if (typeof global$1.Vimeo !== 'undefined') {
        return;
      }

      src = 'https://player.vimeo.com/api/player.js';
    }

    if (!src) {
      return;
    } // add script in head section


    let tag = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    tag.src = src;
    head.appendChild(tag);
    head = null;
    tag = null;
  }

  onAPIready(callback) {
    const self = this; // Youtube

    if (self.type === 'youtube') {
      // Listen for global YT player callback
      if ((typeof global$1.YT === 'undefined' || global$1.YT.loaded === 0) && !loadingYoutubePlayer) {
        // Prevents Ready event from being called twice
        loadingYoutubePlayer = 1; // Creates deferred so, other players know when to wait.

        global$1.onYouTubeIframeAPIReady = function () {
          global$1.onYouTubeIframeAPIReady = null;
          loadingYoutubeDefer.resolve('done');
          callback();
        };
      } else if (typeof global$1.YT === 'object' && global$1.YT.loaded === 1) {
        callback();
      } else {
        loadingYoutubeDefer.done(() => {
          callback();
        });
      }
    } // Vimeo


    if (self.type === 'vimeo') {
      if (typeof global$1.Vimeo === 'undefined' && !loadingVimeoPlayer) {
        loadingVimeoPlayer = 1;
        const vimeoInterval = setInterval(() => {
          if (typeof global$1.Vimeo !== 'undefined') {
            clearInterval(vimeoInterval);
            loadingVimeoDefer.resolve('done');
            callback();
          }
        }, 20);
      } else if (typeof global$1.Vimeo !== 'undefined') {
        callback();
      } else {
        loadingVimeoDefer.done(() => {
          callback();
        });
      }
    } // Local


    if (self.type === 'local') {
      callback();
    }
  }

}

function jarallaxVideo$1(jarallax = global$2.jarallax) {
  if ('undefined' === typeof jarallax) {
    return;
  }

  const Jarallax = jarallax.constructor; // append video after when block will be visible.

  const defOnScroll = Jarallax.prototype.onScroll;

  Jarallax.prototype.onScroll = function () {
    const self = this;
    defOnScroll.apply(self);
    const isReady = !self.isVideoInserted && self.video && (!self.options.videoLazyLoading || self.isElementInViewport) && !self.options.disableVideo();

    if (isReady) {
      self.isVideoInserted = true;
      self.video.getVideo(video => {
        const $parent = video.parentNode;
        self.css(video, {
          position: self.image.position,
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
          width: '100%',
          height: '100%',
          maxWidth: 'none',
          maxHeight: 'none',
          pointerEvents: 'none',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          willChange: 'transform,opacity',
          margin: 0,
          zIndex: -1
        });
        self.$video = video; // add Poster attribute to self-hosted video

        if ('local' === self.video.type) {
          if (self.image.src) {
            self.$video.setAttribute('poster', self.image.src);
          } else if (self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src) {
            self.$video.setAttribute('poster', self.image.$item.src);
          }
        } // insert video tag


        self.image.$container.appendChild(video); // remove parent video element (created by VideoWorker)

        $parent.parentNode.removeChild($parent); // call onVideoInsert event

        if (self.options.onVideoInsert) {
          self.options.onVideoInsert.call(self);
        }
      });
    }
  }; // cover video


  const defCoverImage = Jarallax.prototype.coverImage;

  Jarallax.prototype.coverImage = function () {
    const self = this;
    const imageData = defCoverImage.apply(self);
    const node = self.image.$item ? self.image.$item.nodeName : false;

    if (imageData && self.video && node && ('IFRAME' === node || 'VIDEO' === node)) {
      let h = imageData.image.height;
      let w = h * self.image.width / self.image.height;
      let ml = (imageData.container.width - w) / 2;
      let mt = imageData.image.marginTop;

      if (imageData.container.width > w) {
        w = imageData.container.width;
        h = w * self.image.height / self.image.width;
        ml = 0;
        mt += (imageData.image.height - h) / 2;
      } // add video height over than need to hide controls


      if ('IFRAME' === node) {
        h += 400;
        mt -= 200;
      }

      self.css(self.$video, {
        width: `${w}px`,
        marginLeft: `${ml}px`,
        height: `${h}px`,
        marginTop: `${mt}px`
      });
    }

    return imageData;
  }; // init video


  const defInitImg = Jarallax.prototype.initImg;

  Jarallax.prototype.initImg = function () {
    const self = this;
    const defaultResult = defInitImg.apply(self);

    if (!self.options.videoSrc) {
      self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
    }

    if (self.options.videoSrc) {
      self.defaultInitImgResult = defaultResult;
      return true;
    }

    return defaultResult;
  };

  const defCanInitParallax = Jarallax.prototype.canInitParallax;

  Jarallax.prototype.canInitParallax = function () {
    const self = this;
    let defaultResult = defCanInitParallax.apply(self);

    if (!self.options.videoSrc) {
      return defaultResult;
    } // Init video api


    const video = new VideoWorker(self.options.videoSrc, {
      autoplay: true,
      loop: self.options.videoLoop,
      showControls: false,
      accessibilityHidden: true,
      startTime: self.options.videoStartTime || 0,
      endTime: self.options.videoEndTime || 0,
      mute: self.options.videoVolume ? 0 : 1,
      volume: self.options.videoVolume || 0
    }); // call onVideoWorkerInit event

    if (self.options.onVideoWorkerInit) {
      self.options.onVideoWorkerInit.call(self, video);
    }

    function resetDefaultImage() {
      if (self.image.$default_item) {
        self.image.$item = self.image.$default_item;
        self.image.$item.style.display = 'block'; // set image width and height

        self.coverImage();
        self.onScroll();
      }
    }

    if (video.isValid()) {
      // Force enable parallax.
      // When the parallax disabled on mobile devices, we still need to display videos.
      // https://github.com/nk-o/jarallax/issues/159
      if (this.options.disableParallax()) {
        defaultResult = true;
        self.image.position = 'absolute';
        self.options.type = 'scroll';
        self.options.speed = 1;
      } // if parallax will not be inited, we can add thumbnail on background.


      if (!defaultResult) {
        if (!self.defaultInitImgResult) {
          video.getImageURL(url => {
            // save default user styles
            const curStyle = self.$item.getAttribute('style');

            if (curStyle) {
              self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            } // set new background


            self.css(self.$item, {
              'background-image': `url("${url}")`,
              'background-position': 'center',
              'background-size': 'cover'
            });
          });
        } // init video

      } else {
        video.on('ready', () => {
          if (self.options.videoPlayOnlyVisible) {
            const oldOnScroll = self.onScroll;

            self.onScroll = function () {
              oldOnScroll.apply(self);

              if (!self.videoError && (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded)) {
                if (self.isVisible()) {
                  video.play();
                } else {
                  video.pause();
                }
              }
            };
          } else {
            video.play();
          }
        });
        video.on('started', () => {
          self.image.$default_item = self.image.$item;
          self.image.$item = self.$video; // set video width and height

          self.image.width = self.video.videoWidth || 1280;
          self.image.height = self.video.videoHeight || 720;
          self.coverImage();
          self.onScroll(); // hide image

          if (self.image.$default_item) {
            self.image.$default_item.style.display = 'none';
          }
        });
        video.on('ended', () => {
          self.videoEnded = true;

          if (!self.options.videoLoop) {
            // show default image if Loop disabled.
            resetDefaultImage();
          }
        });
        video.on('error', () => {
          self.videoError = true; // show default image if video loading error.

          resetDefaultImage();
        });
        self.video = video; // set image if not exists

        if (!self.defaultInitImgResult) {
          // set empty image on self-hosted video if not defined
          self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

          if ('local' !== video.type) {
            video.getImageURL(url => {
              self.image.bgImage = `url("${url}")`;
              self.init();
            });
            return false;
          }
        }
      }
    }

    return defaultResult;
  }; // Destroy video parallax


  const defDestroy = Jarallax.prototype.destroy;

  Jarallax.prototype.destroy = function () {
    const self = this;

    if (self.image.$default_item) {
      self.image.$item = self.image.$default_item;
      delete self.image.$default_item;
    }

    defDestroy.apply(self);
  };
}

function jarallaxElement$1(jarallax = global$2.jarallax) {
  // eslint-disable-next-line no-console
  console.warn("Jarallax Element extension is DEPRECATED, please, avoid using it. We recommend you look at something like `lax.js` library <https://github.com/alexfoxy/lax.js>. It is much more powerful and has a less code (in cases when you don't want to add parallax backgrounds).");

  if ('undefined' === typeof jarallax) {
    return;
  }

  const Jarallax = jarallax.constructor; // redefine default methods

  ['initImg', 'canInitParallax', 'init', 'destroy', 'coverImage', 'isVisible', 'onScroll', 'onResize'].forEach(key => {
    const def = Jarallax.prototype[key];

    Jarallax.prototype[key] = function (...args) {
      const self = this;

      if ('initImg' === key && null !== self.$item.getAttribute('data-jarallax-element')) {
        self.options.type = 'element';
        self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || '100';
      }

      if ('element' !== self.options.type) {
        return def.apply(self, args);
      }

      self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';

      switch (key) {
        case 'init':
          {
            const speedArr = `${self.pureOptions.speed}`.split(' ');
            self.options.speed = self.pureOptions.speed || 0;
            self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
            self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
            const thresholdArr = self.pureOptions.threshold.split(' ');
            self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
            self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
            def.apply(self, args); // restore background image if available.

            const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');

            if (originalStylesTag) {
              self.$item.setAttribute('style', originalStylesTag);
            }

            return true;
          }

        case 'onResize':
          {
            const defTransform = self.css(self.$item, 'transform');
            self.css(self.$item, {
              transform: ''
            });
            const rect = self.$item.getBoundingClientRect();
            self.itemData = {
              width: rect.width,
              height: rect.height,
              y: rect.top + self.getWindowData().y,
              x: rect.left
            };
            self.css(self.$item, {
              transform: defTransform
            });
            break;
          }

        case 'onScroll':
          {
            const wnd = self.getWindowData();
            const centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
            const moveY = centerPercent * self.options.speedY;
            const moveX = centerPercent * self.options.speedX;
            let my = moveY;
            let mx = moveX;
            if (null !== self.options.thresholdY && moveY > self.options.thresholdY) my = 0;
            if (null !== self.options.thresholdX && moveX > self.options.thresholdX) mx = 0;
            self.css(self.$item, {
              transform: `translate3d(${mx}px,${my}px,0)`
            });
            break;
          }

        case 'initImg':
        case 'isVisible':
        case 'coverImage':
          return true;
        // no default
      }

      return def.apply(self, args);
    };
  });
}

const jarallax = jarallax$1;
const jarallaxVideo = function jarallaxVideo() {
  return jarallaxVideo$1(jarallax);
};
const jarallaxElement = function jarallaxElement() {
  return jarallaxElement$1(jarallax);
};


//# sourceMappingURL=jarallax.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/jarallax/dist/jarallax.css":
/*!*************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-5-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/jarallax/dist/jarallax.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jarallax {\n  position: relative;\n  z-index: 0;\n}\n.jarallax > .jarallax-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n", "",{"version":3,"sources":["webpack://node_modules/jarallax/dist/jarallax.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,oBAAiB;KAAjB,iBAAiB;EACjB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,WAAW;AACb","sourcesContent":[".jarallax {\n  position: relative;\n  z-index: 0;\n}\n.jarallax > .jarallax-img {\n  position: absolute;\n  object-fit: cover;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9KYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzPzEwYjciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzcyJdLCJuYW1lcyI6WyJqYXJhbGxheFZpZGVvIiwiSmFyYWxsYXgiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiJGVsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImphcmFsbGF4IiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBQ0FBLDhEQUFhO0FBRUUsU0FBU0MsUUFBVCxPQUEwRDtBQUFBOztBQUFBLDRCQUF0Q0MsU0FBc0M7QUFBQSxNQUF0Q0EsU0FBc0MsK0JBQTFCLEVBQTBCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEIsQ0FEdUUsQ0FHdkU7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLEdBQUcsQ0FBQ0csT0FBUixFQUFpQjtBQUNmQywrREFBUSxDQUFDSixHQUFHLENBQUNHLE9BQUwsRUFBY0osS0FBZCxDQUFSO0FBQ0QsS0FIYSxDQUtk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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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b0Isd0JBQXdCLGdCQUFnQixTQUFTLE1BQU0sWUFBWSxjQUFjLEtBQUssaUJBQWlCLFlBQVksWUFBWSxZQUFZLFdBQVcsS0FBSyxzQkFBc0IsZUFBZSxTQUFTLE1BQU0sVUFBVSxPQUFPLEtBQUssd0NBQXdDLFlBQVksVUFBVSxxQ0FBcUMsZUFBZSxXQUFXLE9BQU8sU0FBUyxnQ0FBZ0MsbUJBQW1CLGdDQUFnQyxnRUFBZ0UsRUFBRSwyQ0FBMkMscUJBQXFCLHNCQUFzQiw0REFBNEQsOENBQThDLGNBQWMsbUJBQW1CLGdDQUFnQyxTQUFTLGdDQUFnQyxTQUFTLG9CQUFvQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixxQ0FBcUMsZ0NBQWdDLEc7Ozs7Ozs7Ozs7Ozs7QUNBOXlDO0FBQUE7QUFBQTtBQUFBO0FBQ3FGO0FBQ3JGLDhCQUE4Qiw0RUFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxjQUFjLHVCQUF1QixlQUFlLEdBQUcsNkJBQTZCLHVCQUF1Qix5QkFBeUIseUJBQXlCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsd0dBQXdHLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLG9DQUFvQyx1QkFBdUIsZUFBZSxHQUFHLDZCQUE2Qix1QkFBdUIsc0JBQXNCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNqdkI7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBqYXJhbGxheCwgamFyYWxsYXhWaWRlbyB9IGZyb20gJ2phcmFsbGF4JztcclxuaW1wb3J0ICdqYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzcyc7XHJcblxyXG4vLyBPcHRpb25hbCB2aWRlbyBleHRlbnNpb25cclxuamFyYWxsYXhWaWRlbygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSmFyYWxsYXgoeyBjbGFzc05hbWUgPSAnJywgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCAkZWwgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gSW5pdCBKYXJhbGxheC5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCRlbC5jdXJyZW50KSB7XHJcbiAgICAgIGphcmFsbGF4KCRlbC5jdXJyZW50LCBwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzdHJveSBKYXJhbGxheC5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICBpZiAoJGVsLmN1cnJlbnQpIHtcclxuICAgICAgICBqYXJhbGxheCgkZWwuY3VycmVudCwgJ2Rlc3Ryb3knKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFVwZGF0ZSBvcHRpb25zLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoJGVsLmN1cnJlbnQpIHtcclxuICAgICAgamFyYWxsYXgoJGVsLmN1cnJlbnQsICdkZXN0cm95Jyk7XHJcbiAgICAgIGphcmFsbGF4KCRlbC5jdXJyZW50LCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17JGVsfSBjbGFzc05hbWU9e2BqYXJhbGxheCAke2NsYXNzTmFtZX1gfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vamFyYWxsYXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vamFyYWxsYXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2phcmFsbGF4LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKiFcbiAqIEphcmFsbGF4IHYyLjAuMyAoaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgpXG4gKiBDb3B5cmlnaHQgMjAyMiBuSyA8aHR0cHM6Ly9ua2Rldi5pbmZvPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5mdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICBpZiAoJ2NvbXBsZXRlJyA9PT0gZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCAnaW50ZXJhY3RpdmUnID09PSBkb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgLy8gQWxyZWFkeSByZWFkeSBvciBpbnRlcmFjdGl2ZSwgZXhlY3V0ZSBjYWxsYmFja1xuICAgIGNhbGxiYWNrKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xubGV0IHdpbiQxO1xuXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB3aW5kb3cpIHtcbiAgd2luJDEgPSB3aW5kb3c7XG59IGVsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgZ2xvYmFsKSB7XG4gIHdpbiQxID0gZ2xvYmFsO1xufSBlbHNlIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHNlbGYpIHtcbiAgd2luJDEgPSBzZWxmO1xufSBlbHNlIHtcbiAgd2luJDEgPSB7fTtcbn1cblxudmFyIGdsb2JhbCQyID0gd2luJDE7XG5cbmNvbnN0IHtcbiAgbmF2aWdhdG9yXG59ID0gZ2xvYmFsJDI7XG5jb25zdCBpc01vYmlsZSA9IC8qI19fUFVSRV9fKi8gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xubGV0ICRkZXZpY2VIZWxwZXI7XG4vKipcbiAqIFRoZSBtb3N0IHBvcHVsYXIgbW9iaWxlIGJyb3dzZXJzIGNoYW5nZXMgaGVpZ2h0IGFmdGVyIHBhZ2Ugc2Nyb2xsIGFuZCB0aGlzIGdlbmVyYXRlcyBpbWFnZSBqdW1waW5nLlxuICogV2UgY2FuIGZpeCBpdCB1c2luZyB0aGlzIHdvcmthcm91bmQgd2l0aCB2aCB1bml0cy5cbiAqL1xuXG5mdW5jdGlvbiBnZXREZXZpY2VIZWlnaHQoKSB7XG4gIGlmICghJGRldmljZUhlbHBlciAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgJGRldmljZUhlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICRkZXZpY2VIZWxwZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogZml4ZWQ7IHRvcDogLTk5OTlweDsgbGVmdDogMDsgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDA7JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRkZXZpY2VIZWxwZXIpO1xuICB9XG5cbiAgcmV0dXJuICgkZGV2aWNlSGVscGVyID8gJGRldmljZUhlbHBlci5jbGllbnRIZWlnaHQgOiAwKSB8fCBnbG9iYWwkMi5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufSAvLyBXaW5kb3cgaGVpZ2h0IGRhdGFcblxuXG5sZXQgd25kSDtcblxuZnVuY3Rpb24gdXBkYXRlV25kVmFycygpIHtcbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgd25kSCA9IGdldERldmljZUhlaWdodCgpO1xuICB9IGVsc2Uge1xuICAgIHduZEggPSBnbG9iYWwkMi5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG5cbnVwZGF0ZVduZFZhcnMoKTtcbmdsb2JhbCQyLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVduZFZhcnMpO1xuZ2xvYmFsJDIuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVXbmRWYXJzKTtcbmdsb2JhbCQyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB1cGRhdGVXbmRWYXJzKTtcbnJlYWR5KCgpID0+IHtcbiAgdXBkYXRlV25kVmFycygpO1xufSk7IC8vIGxpc3Qgd2l0aCBhbGwgamFyYWxsYXggaW5zdGFuY2VzXG4vLyBuZWVkIHRvIHJlbmRlciBhbGwgaW4gb25lIHNjcm9sbC9yZXNpemUgZXZlbnRcblxuY29uc3QgamFyYWxsYXhMaXN0ID0gW107IC8vIGdldCBhbGwgcGFyZW50cyBvZiB0aGUgZWxlbWVudC5cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBbXTtcblxuICB3aGlsZSAobnVsbCAhPT0gZWxlbS5wYXJlbnRFbGVtZW50KSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcblxuICAgIGlmICgxID09PSBlbGVtLm5vZGVUeXBlKSB7XG4gICAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuICBpZiAoIWphcmFsbGF4TGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBqYXJhbGxheExpc3QuZm9yRWFjaCgoZGF0YSwgaykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGluc3RhbmNlLFxuICAgICAgb2xkRGF0YVxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IGNsaWVudFJlY3QgPSBpbnN0YW5jZS4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgd2lkdGg6IGNsaWVudFJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNsaWVudFJlY3QuaGVpZ2h0LFxuICAgICAgdG9wOiBjbGllbnRSZWN0LnRvcCxcbiAgICAgIGJvdHRvbTogY2xpZW50UmVjdC5ib3R0b20sXG4gICAgICB3bmRXOiBnbG9iYWwkMi5pbm5lcldpZHRoLFxuICAgICAgd25kSFxuICAgIH07XG4gICAgY29uc3QgaXNSZXNpemVkID0gIW9sZERhdGEgfHwgb2xkRGF0YS53bmRXICE9PSBuZXdEYXRhLnduZFcgfHwgb2xkRGF0YS53bmRIICE9PSBuZXdEYXRhLnduZEggfHwgb2xkRGF0YS53aWR0aCAhPT0gbmV3RGF0YS53aWR0aCB8fCBvbGREYXRhLmhlaWdodCAhPT0gbmV3RGF0YS5oZWlnaHQ7XG4gICAgY29uc3QgaXNTY3JvbGxlZCA9IGlzUmVzaXplZCB8fCAhb2xkRGF0YSB8fCBvbGREYXRhLnRvcCAhPT0gbmV3RGF0YS50b3AgfHwgb2xkRGF0YS5ib3R0b20gIT09IG5ld0RhdGEuYm90dG9tO1xuICAgIGphcmFsbGF4TGlzdFtrXS5vbGREYXRhID0gbmV3RGF0YTtcblxuICAgIGlmIChpc1Jlc2l6ZWQpIHtcbiAgICAgIGluc3RhbmNlLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2Nyb2xsZWQpIHtcbiAgICAgIGluc3RhbmNlLm9uU2Nyb2xsKCk7XG4gICAgfVxuICB9KTtcbiAgZ2xvYmFsJDIucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbn1cblxubGV0IGluc3RhbmNlSUQgPSAwOyAvLyBKYXJhbGxheCBjbGFzc1xuXG5jbGFzcyBKYXJhbGxheCB7XG4gIGNvbnN0cnVjdG9yKGl0ZW0sIHVzZXJPcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5pbnN0YW5jZUlEID0gaW5zdGFuY2VJRDtcbiAgICBpbnN0YW5jZUlEICs9IDE7XG4gICAgc2VsZi4kaXRlbSA9IGl0ZW07XG4gICAgc2VsZi5kZWZhdWx0cyA9IHtcbiAgICAgIHR5cGU6ICdzY3JvbGwnLFxuICAgICAgLy8gdHlwZSBvZiBwYXJhbGxheDogc2Nyb2xsLCBzY2FsZSwgb3BhY2l0eSwgc2NhbGUtb3BhY2l0eSwgc2Nyb2xsLW9wYWNpdHlcbiAgICAgIHNwZWVkOiAwLjUsXG4gICAgICAvLyBzdXBwb3J0ZWQgdmFsdWUgZnJvbSAtMSB0byAyXG4gICAgICBpbWdTcmM6IG51bGwsXG4gICAgICBpbWdFbGVtZW50OiAnLmphcmFsbGF4LWltZycsXG4gICAgICBpbWdTaXplOiAnY292ZXInLFxuICAgICAgaW1nUG9zaXRpb246ICc1MCUgNTAlJyxcbiAgICAgIGltZ1JlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAvLyBzdXBwb3J0ZWQgb25seSBmb3IgYmFja2dyb3VuZCwgbm90IGZvciA8aW1nPiB0YWdcbiAgICAgIGtlZXBJbWc6IGZhbHNlLFxuICAgICAgLy8ga2VlcCA8aW1nPiB0YWcgaW4gaXQncyBkZWZhdWx0IHBsYWNlXG4gICAgICBlbGVtZW50SW5WaWV3cG9ydDogbnVsbCxcbiAgICAgIHpJbmRleDogLTEwMCxcbiAgICAgIGRpc2FibGVQYXJhbGxheDogZmFsc2UsXG4gICAgICBkaXNhYmxlVmlkZW86IGZhbHNlLFxuICAgICAgLy8gdmlkZW9cbiAgICAgIHZpZGVvU3JjOiBudWxsLFxuICAgICAgdmlkZW9TdGFydFRpbWU6IDAsXG4gICAgICB2aWRlb0VuZFRpbWU6IDAsXG4gICAgICB2aWRlb1ZvbHVtZTogMCxcbiAgICAgIHZpZGVvTG9vcDogdHJ1ZSxcbiAgICAgIHZpZGVvUGxheU9ubHlWaXNpYmxlOiB0cnVlLFxuICAgICAgdmlkZW9MYXp5TG9hZGluZzogdHJ1ZSxcbiAgICAgIC8vIGV2ZW50c1xuICAgICAgb25TY3JvbGw6IG51bGwsXG4gICAgICAvLyBmdW5jdGlvbihjYWxjdWxhdGlvbnMpIHt9XG4gICAgICBvbkluaXQ6IG51bGwsXG4gICAgICAvLyBmdW5jdGlvbigpIHt9XG4gICAgICBvbkRlc3Ryb3k6IG51bGwsXG4gICAgICAvLyBmdW5jdGlvbigpIHt9XG4gICAgICBvbkNvdmVySW1hZ2U6IG51bGwgLy8gZnVuY3Rpb24oKSB7fVxuXG4gICAgfTsgLy8gcHJlcGFyZSBkYXRhLW9wdGlvbnNcblxuICAgIGNvbnN0IGRhdGFPcHRpb25zID0gc2VsZi4kaXRlbS5kYXRhc2V0IHx8IHt9O1xuICAgIGNvbnN0IHB1cmVEYXRhT3B0aW9ucyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGFPcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBsb3dlQ2FzZU9wdGlvbiA9IGtleS5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChsb3dlQ2FzZU9wdGlvbiAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHNlbGYuZGVmYXVsdHNbbG93ZUNhc2VPcHRpb25dKSB7XG4gICAgICAgIHB1cmVEYXRhT3B0aW9uc1tsb3dlQ2FzZU9wdGlvbl0gPSBkYXRhT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYub3B0aW9ucyA9IHNlbGYuZXh0ZW5kKHt9LCBzZWxmLmRlZmF1bHRzLCBwdXJlRGF0YU9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgICBzZWxmLnB1cmVPcHRpb25zID0gc2VsZi5leHRlbmQoe30sIHNlbGYub3B0aW9ucyk7IC8vIHByZXBhcmUgJ3RydWUnIGFuZCAnZmFsc2UnIHN0cmluZ3MgdG8gYm9vbGVhblxuXG4gICAgT2JqZWN0LmtleXMoc2VsZi5vcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoJ3RydWUnID09PSBzZWxmLm9wdGlvbnNba2V5XSkge1xuICAgICAgICBzZWxmLm9wdGlvbnNba2V5XSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKCdmYWxzZScgPT09IHNlbGYub3B0aW9uc1trZXldKSB7XG4gICAgICAgIHNlbGYub3B0aW9uc1trZXldID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7IC8vIGZpeCBzcGVlZCBvcHRpb24gWy0xLjAsIDIuMF1cblxuICAgIHNlbGYub3B0aW9ucy5zcGVlZCA9IE1hdGgubWluKDIsIE1hdGgubWF4KC0xLCBwYXJzZUZsb2F0KHNlbGYub3B0aW9ucy5zcGVlZCkpKTsgLy8gcHJlcGFyZSBkaXNhYmxlUGFyYWxsYXggY2FsbGJhY2tcblxuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSBuZXcgUmVnRXhwKHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBjb25zdCBkaXNhYmxlUGFyYWxsYXhSZWdleHAgPSBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4O1xuXG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gKCkgPT4gZGlzYWJsZVBhcmFsbGF4UmVnZXhwLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KSB7XG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gKCkgPT4gZmFsc2U7XG4gICAgfSAvLyBwcmVwYXJlIGRpc2FibGVWaWRlbyBjYWxsYmFja1xuXG5cbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKSB7XG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gbmV3IFJlZ0V4cChzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgY29uc3QgZGlzYWJsZVZpZGVvUmVnZXhwID0gc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbztcblxuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9ICgpID0+IGRpc2FibGVWaWRlb1JlZ2V4cC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbykge1xuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9ICgpID0+IGZhbHNlO1xuICAgIH0gLy8gY3VzdG9tIGVsZW1lbnQgdG8gY2hlY2sgaWYgcGFyYWxsYXggaW4gdmlld3BvcnRcblxuXG4gICAgbGV0IGVsZW1lbnRJblZQID0gc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0OyAvLyBnZXQgZmlyc3QgaXRlbSBmcm9tIGFycmF5XG5cbiAgICBpZiAoZWxlbWVudEluVlAgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBlbGVtZW50SW5WUCAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGVsZW1lbnRJblZQLmxlbmd0aCkge1xuICAgICAgW2VsZW1lbnRJblZQXSA9IGVsZW1lbnRJblZQO1xuICAgIH0gLy8gY2hlY2sgaWYgZG9tIGVsZW1lbnRcblxuXG4gICAgaWYgKCEoZWxlbWVudEluVlAgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgZWxlbWVudEluVlAgPSBudWxsO1xuICAgIH1cblxuICAgIHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydCA9IGVsZW1lbnRJblZQO1xuICAgIHNlbGYuaW1hZ2UgPSB7XG4gICAgICBzcmM6IHNlbGYub3B0aW9ucy5pbWdTcmMgfHwgbnVsbCxcbiAgICAgICRjb250YWluZXI6IG51bGwsXG4gICAgICB1c2VJbWdUYWc6IGZhbHNlLFxuICAgICAgLy8gMS4gUG9zaXRpb24gZml4ZWQgaXMgbmVlZGVkIGZvciB0aGUgbW9zdCBvZiBicm93c2VycyBiZWNhdXNlIGFic29sdXRlIHBvc2l0aW9uIGhhdmUgZ2xpdGNoZXNcbiAgICAgIC8vIDIuIE9uIE1hY09TIHdpdGggc21vb3RoIHNjcm9sbCB0aGVyZSBpcyBhIGh1Z2UgbGFncyB3aXRoIGFic29sdXRlIHBvc2l0aW9uIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzc1XG4gICAgICAvLyAzLiBQcmV2aW91c2x5IHVzZWQgJ2Fic29sdXRlJyBmb3IgbW9iaWxlIGRldmljZXMuIEJ1dCB3ZSByZS10ZXN0ZWQgb24gaVBob25lIDEyIGFuZCAnZml4ZWQnIHBvc2l0aW9uIGlzIHdvcmtpbmcgYmV0dGVyLCB0aGVuICdhYnNvbHV0ZScsIHNvIGZvciBub3cgcG9zaXRpb24gaXMgYWx3YXlzICdmaXhlZCdcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnXG4gICAgfTtcblxuICAgIGlmIChzZWxmLmluaXRJbWcoKSAmJiBzZWxmLmNhbkluaXRQYXJhbGxheCgpKSB7XG4gICAgICBzZWxmLmluaXQoKTtcbiAgICB9XG4gIH0gLy8gYWRkIHN0eWxlcyB0byBlbGVtZW50XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBjc3MoZWwsIHN0eWxlcykge1xuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHN0eWxlcykge1xuICAgICAgcmV0dXJuIGdsb2JhbCQyLmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVzKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGVsLnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH0gLy8gRXh0ZW5kIGxpa2UgalF1ZXJ5LmV4dGVuZFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgZXh0ZW5kKG91dCwgLi4uYXJncykge1xuICAgIG91dCA9IG91dCB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaWYgKCFhcmdzW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoYXJnc1tpXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBvdXRba2V5XSA9IGFyZ3NbaV1ba2V5XTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG4gIH0gLy8gZ2V0IHdpbmRvdyBzaXplIGFuZCBzY3JvbGwgcG9zaXRpb24uIFVzZWZ1bCBmb3IgZXh0ZW5zaW9uc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgZ2V0V2luZG93RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGdsb2JhbCQyLmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB3bmRILFxuICAgICAgeTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH0gLy8gSmFyYWxsYXggZnVuY3Rpb25zXG5cblxuICBpbml0SW1nKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBmaW5kIGltYWdlIGVsZW1lbnRcblxuICAgIGxldCAkaW1nRWxlbWVudCA9IHNlbGYub3B0aW9ucy5pbWdFbGVtZW50O1xuXG4gICAgaWYgKCRpbWdFbGVtZW50ICYmICdzdHJpbmcnID09PSB0eXBlb2YgJGltZ0VsZW1lbnQpIHtcbiAgICAgICRpbWdFbGVtZW50ID0gc2VsZi4kaXRlbS5xdWVyeVNlbGVjdG9yKCRpbWdFbGVtZW50KTtcbiAgICB9IC8vIGNoZWNrIGlmIGRvbSBlbGVtZW50XG5cblxuICAgIGlmICghKCRpbWdFbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIGlmIChzZWxmLm9wdGlvbnMuaW1nU3JjKSB7XG4gICAgICAgICRpbWdFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICRpbWdFbGVtZW50LnNyYyA9IHNlbGYub3B0aW9ucy5pbWdTcmM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaW1nRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRpbWdFbGVtZW50KSB7XG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmtlZXBJbWcpIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9ICRpbWdFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSAkaW1nRWxlbWVudDtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbVBhcmVudCA9ICRpbWdFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuaW1hZ2UudXNlSW1nVGFnID0gdHJ1ZTtcbiAgICB9IC8vIHRydWUgaWYgdGhlcmUgaXMgaW1nIHRhZ1xuXG5cbiAgICBpZiAoc2VsZi5pbWFnZS4kaXRlbSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBnZXQgaW1hZ2Ugc3JjXG5cblxuICAgIGlmIChudWxsID09PSBzZWxmLmltYWdlLnNyYykge1xuICAgICAgc2VsZi5pbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JztcbiAgICAgIHNlbGYuaW1hZ2UuYmdJbWFnZSA9IHNlbGYuY3NzKHNlbGYuJGl0ZW0sICdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICEoIXNlbGYuaW1hZ2UuYmdJbWFnZSB8fCAnbm9uZScgPT09IHNlbGYuaW1hZ2UuYmdJbWFnZSk7XG4gIH1cblxuICBjYW5Jbml0UGFyYWxsYXgoKSB7XG4gICAgcmV0dXJuICF0aGlzLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH07XG4gICAgbGV0IGltYWdlU3R5bGVzID0ge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCcsXG4gICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSxvcGFjaXR5J1xuICAgIH07XG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy5rZWVwSW1nKSB7XG4gICAgICAvLyBzYXZlIGRlZmF1bHQgdXNlciBzdHlsZXNcbiAgICAgIGNvbnN0IGN1clN0eWxlID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgIGlmIChjdXJTdHlsZSkge1xuICAgICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnLCBjdXJTdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmltYWdlLnVzZUltZ1RhZykge1xuICAgICAgICBjb25zdCBjdXJJbWdTdHlsZSA9IHNlbGYuaW1hZ2UuJGl0ZW0uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgIGlmIChjdXJJbWdTdHlsZSkge1xuICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycsIGN1ckltZ1N0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gc2V0IHJlbGF0aXZlIHBvc2l0aW9uIGFuZCB6LWluZGV4IHRvIHRoZSBwYXJlbnRcblxuXG4gICAgaWYgKCdzdGF0aWMnID09PSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAncG9zaXRpb24nKSkge1xuICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCdhdXRvJyA9PT0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3otaW5kZXgnKSkge1xuICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICB6SW5kZXg6IDBcbiAgICAgIH0pO1xuICAgIH0gLy8gY29udGFpbmVyIGZvciBwYXJhbGxheCBpbWFnZVxuXG5cbiAgICBzZWxmLmltYWdlLiRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRjb250YWluZXIsIGNvbnRhaW5lclN0eWxlcyk7XG4gICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kY29udGFpbmVyLCB7XG4gICAgICAnei1pbmRleCc6IHNlbGYub3B0aW9ucy56SW5kZXhcbiAgICB9KTsgLy8gaXQgd2lsbCByZW1vdmUgc29tZSBpbWFnZSBvdmVybGFwcGluZ1xuICAgIC8vIG92ZXJsYXBwaW5nIG9jY3VyIGR1ZSB0byBhbiBpbWFnZSBwb3NpdGlvbiBmaXhlZCBpbnNpZGUgYWJzb2x1dGUgcG9zaXRpb24gZWxlbWVudFxuICAgIC8vIG5lZWRlZCBvbmx5IHdoZW4gYmFja2dyb3VuZCBpbiBmaXhlZCBwb3NpdGlvblxuXG4gICAgaWYgKCdmaXhlZCcgPT09IHRoaXMuaW1hZ2UucG9zaXRpb24pIHtcbiAgICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwge1xuICAgICAgICAnLXdlYmtpdC1jbGlwLXBhdGgnOiAncG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpJyxcbiAgICAgICAgJ2NsaXAtcGF0aCc6ICdwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSknXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLmltYWdlLiRjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBqYXJhbGxheC1jb250YWluZXItJHtzZWxmLmluc3RhbmNlSUR9YCk7XG4gICAgc2VsZi4kaXRlbS5hcHBlbmRDaGlsZChzZWxmLmltYWdlLiRjb250YWluZXIpOyAvLyB1c2UgaW1nIHRhZ1xuXG4gICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICBpbWFnZVN0eWxlcyA9IHNlbGYuZXh0ZW5kKHtcbiAgICAgICAgJ29iamVjdC1maXQnOiBzZWxmLm9wdGlvbnMuaW1nU2l6ZSxcbiAgICAgICAgJ29iamVjdC1wb3NpdGlvbic6IHNlbGYub3B0aW9ucy5pbWdQb3NpdGlvbixcbiAgICAgICAgJ21heC13aWR0aCc6ICdub25lJ1xuICAgICAgfSwgY29udGFpbmVyU3R5bGVzLCBpbWFnZVN0eWxlcyk7IC8vIHVzZSBkaXYgd2l0aCBiYWNrZ3JvdW5kIGltYWdlXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaWYgKHNlbGYuaW1hZ2Uuc3JjKSB7XG4gICAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogc2VsZi5vcHRpb25zLmltZ1Bvc2l0aW9uLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiBzZWxmLm9wdGlvbnMuaW1nU2l6ZSxcbiAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiBzZWxmLm9wdGlvbnMuaW1nUmVwZWF0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogc2VsZi5pbWFnZS5iZ0ltYWdlIHx8IGB1cmwoXCIke3NlbGYuaW1hZ2Uuc3JjfVwiKWBcbiAgICAgICAgfSwgY29udGFpbmVyU3R5bGVzLCBpbWFnZVN0eWxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCdvcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3NjYWxlJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3NjYWxlLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAxID09PSBzZWxmLm9wdGlvbnMuc3BlZWQpIHtcbiAgICAgIHNlbGYuaW1hZ2UucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH0gLy8gMS4gQ2hlY2sgaWYgb25lIG9mIHBhcmVudHMgaGF2ZSB0cmFuc2Zvcm0gc3R5bGUgKHdpdGhvdXQgdGhpcyBjaGVjaywgc2Nyb2xsIHRyYW5zZm9ybSB3aWxsIGJlIGludmVydGVkIGlmIHVzZWQgcGFyYWxsYXggd2l0aCBwb3NpdGlvbiBmaXhlZClcbiAgICAvLyAgICBkaXNjdXNzaW9uIC0gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzlcbiAgICAvLyAyLiBDaGVjayBpZiBwYXJlbnRzIGhhdmUgb3ZlcmZsb3cgc2Nyb2xsXG5cblxuICAgIGlmICgnZml4ZWQnID09PSBzZWxmLmltYWdlLnBvc2l0aW9uKSB7XG4gICAgICBjb25zdCAkcGFyZW50cyA9IGdldFBhcmVudHMoc2VsZi4kaXRlbSkuZmlsdGVyKGVsID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2xvYmFsJDIuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgICAgIGNvbnN0IHBhcmVudFRyYW5zZm9ybSA9IHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSB8fCBzdHlsZXNbJy1tb3otdHJhbnNmb3JtJ10gfHwgc3R5bGVzLnRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgICAgICAgcmV0dXJuIHBhcmVudFRyYW5zZm9ybSAmJiAnbm9uZScgIT09IHBhcmVudFRyYW5zZm9ybSB8fCBvdmVyZmxvd1JlZ2V4LnRlc3Qoc3R5bGVzLm92ZXJmbG93ICsgc3R5bGVzWydvdmVyZmxvdy15J10gKyBzdHlsZXNbJ292ZXJmbG93LXgnXSk7XG4gICAgICB9KTtcbiAgICAgIHNlbGYuaW1hZ2UucG9zaXRpb24gPSAkcGFyZW50cy5sZW5ndGggPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJztcbiAgICB9IC8vIGFkZCBwb3NpdGlvbiB0byBwYXJhbGxheCBibG9ja1xuXG5cbiAgICBpbWFnZVN0eWxlcy5wb3NpdGlvbiA9IHNlbGYuaW1hZ2UucG9zaXRpb247IC8vIGluc2VydCBwYXJhbGxheCBpbWFnZVxuXG4gICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwgaW1hZ2VTdHlsZXMpO1xuICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmltYWdlLiRpdGVtKTsgLy8gc2V0IGluaXRpYWwgcG9zaXRpb24gYW5kIHNpemVcblxuICAgIHNlbGYub25SZXNpemUoKTtcbiAgICBzZWxmLm9uU2Nyb2xsKHRydWUpOyAvLyBjYWxsIG9uSW5pdCBldmVudFxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5vbkluaXQpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5vbkluaXQuY2FsbChzZWxmKTtcbiAgICB9IC8vIHJlbW92ZSBkZWZhdWx0IHVzZXIgYmFja2dyb3VuZFxuXG5cbiAgICBpZiAoJ25vbmUnICE9PSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAnYmFja2dyb3VuZC1pbWFnZScpKSB7XG4gICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ25vbmUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLmFkZFRvUGFyYWxsYXhMaXN0KCk7XG4gIH0gLy8gYWRkIHRvIHBhcmFsbGF4IGluc3RhbmNlcyBsaXN0XG5cblxuICBhZGRUb1BhcmFsbGF4TGlzdCgpIHtcbiAgICBqYXJhbGxheExpc3QucHVzaCh7XG4gICAgICBpbnN0YW5jZTogdGhpc1xuICAgIH0pO1xuXG4gICAgaWYgKDEgPT09IGphcmFsbGF4TGlzdC5sZW5ndGgpIHtcbiAgICAgIGdsb2JhbCQyLnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQYXJhbGxheCk7XG4gICAgfVxuICB9IC8vIHJlbW92ZSBmcm9tIHBhcmFsbGF4IGluc3RhbmNlcyBsaXN0XG5cblxuICByZW1vdmVGcm9tUGFyYWxsYXhMaXN0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGphcmFsbGF4TGlzdC5mb3JFYWNoKChkYXRhLCBrZXkpID0+IHtcbiAgICAgIGlmIChkYXRhLmluc3RhbmNlLmluc3RhbmNlSUQgPT09IHNlbGYuaW5zdGFuY2VJRCkge1xuICAgICAgICBqYXJhbGxheExpc3Quc3BsaWNlKGtleSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucmVtb3ZlRnJvbVBhcmFsbGF4TGlzdCgpOyAvLyByZXR1cm4gc3R5bGVzIG9uIGNvbnRhaW5lciBhcyBiZWZvcmUgamFyYWxsYXggaW5pdFxuXG4gICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNUYWcgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcbiAgICBzZWxmLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTsgLy8gbnVsbCBvY2N1cnMgaWYgdGhlcmUgaXMgbm8gc3R5bGUgdGFnIGJlZm9yZSBqYXJhbGxheCBpbml0XG5cbiAgICBpZiAoIW9yaWdpbmFsU3R5bGVzVGFnKSB7XG4gICAgICBzZWxmLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZXNUYWcpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLmltYWdlLnVzZUltZ1RhZykge1xuICAgICAgLy8gcmV0dXJuIHN0eWxlcyBvbiBpbWcgdGFnIGFzIGJlZm9yZSBqYXJhbGxheCBpbml0XG4gICAgICBjb25zdCBvcmlnaW5hbFN0eWxlc0ltZ1RhZyA9IHNlbGYuaW1hZ2UuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpO1xuICAgICAgc2VsZi5pbWFnZS4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7IC8vIG51bGwgb2NjdXJzIGlmIHRoZXJlIGlzIG5vIHN0eWxlIHRhZyBiZWZvcmUgamFyYWxsYXggaW5pdFxuXG4gICAgICBpZiAoIW9yaWdpbmFsU3R5bGVzSW1nVGFnKSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZXNUYWcpO1xuICAgICAgfSAvLyBtb3ZlIGltZyB0YWcgdG8gaXRzIGRlZmF1bHQgcG9zaXRpb25cblxuXG4gICAgICBpZiAoc2VsZi5pbWFnZS4kaXRlbVBhcmVudCkge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtUGFyZW50LmFwcGVuZENoaWxkKHNlbGYuaW1hZ2UuJGl0ZW0pO1xuICAgICAgfVxuICAgIH0gLy8gcmVtb3ZlIGFkZGl0aW9uYWwgZG9tIGVsZW1lbnRzXG5cblxuICAgIGlmIChzZWxmLmltYWdlLiRjb250YWluZXIpIHtcbiAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcik7XG4gICAgfSAvLyBjYWxsIG9uRGVzdHJveSBldmVudFxuXG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLm9uRGVzdHJveSkge1xuICAgICAgc2VsZi5vcHRpb25zLm9uRGVzdHJveS5jYWxsKHNlbGYpO1xuICAgIH0gLy8gZGVsZXRlIGphcmFsbGF4IGZyb20gaXRlbVxuXG5cbiAgICBkZWxldGUgc2VsZi4kaXRlbS5qYXJhbGxheDtcbiAgfSAvLyBGYWxsYmFjayBmb3IgcmVtb3ZlZCBmdW5jdGlvbi5cbiAgLy8gRG9lcyBub3RoaW5nIG5vdy5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIGNsaXBDb250YWluZXIoKSB7fVxuXG4gIGNvdmVySW1hZ2UoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgcmVjdCA9IHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250SCA9IHJlY3QuaGVpZ2h0O1xuICAgIGNvbnN0IHtcbiAgICAgIHNwZWVkXG4gICAgfSA9IHNlbGYub3B0aW9ucztcbiAgICBjb25zdCBpc1Njcm9sbCA9ICdzY3JvbGwnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2Nyb2xsLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZTtcbiAgICBsZXQgc2Nyb2xsRGlzdCA9IDA7XG4gICAgbGV0IHJlc3VsdEggPSBjb250SDtcbiAgICBsZXQgcmVzdWx0TVQgPSAwOyAvLyBzY3JvbGwgcGFyYWxsYXhcblxuICAgIGlmIChpc1Njcm9sbCkge1xuICAgICAgLy8gc2Nyb2xsIGRpc3RhbmNlIGFuZCBoZWlnaHQgZm9yIGltYWdlXG4gICAgICBpZiAoMCA+IHNwZWVkKSB7XG4gICAgICAgIHNjcm9sbERpc3QgPSBzcGVlZCAqIE1hdGgubWF4KGNvbnRILCB3bmRIKTtcblxuICAgICAgICBpZiAod25kSCA8IGNvbnRIKSB7XG4gICAgICAgICAgc2Nyb2xsRGlzdCAtPSBzcGVlZCAqIChjb250SCAtIHduZEgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxEaXN0ID0gc3BlZWQgKiAoY29udEggKyB3bmRIKTtcbiAgICAgIH0gLy8gc2l6ZSBmb3Igc2Nyb2xsIHBhcmFsbGF4XG5cblxuICAgICAgaWYgKDEgPCBzcGVlZCkge1xuICAgICAgICByZXN1bHRIID0gTWF0aC5hYnMoc2Nyb2xsRGlzdCAtIHduZEgpO1xuICAgICAgfSBlbHNlIGlmICgwID4gc3BlZWQpIHtcbiAgICAgICAgcmVzdWx0SCA9IHNjcm9sbERpc3QgLyBzcGVlZCArIE1hdGguYWJzKHNjcm9sbERpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0SCArPSAod25kSCAtIGNvbnRIKSAqICgxIC0gc3BlZWQpO1xuICAgICAgfVxuXG4gICAgICBzY3JvbGxEaXN0IC89IDI7XG4gICAgfSAvLyBzdG9yZSBzY3JvbGwgZGlzdGFuY2VcblxuXG4gICAgc2VsZi5wYXJhbGxheFNjcm9sbERpc3RhbmNlID0gc2Nyb2xsRGlzdDsgLy8gdmVydGljYWwgY2VudGVyXG5cbiAgICBpZiAoaXNTY3JvbGwpIHtcbiAgICAgIHJlc3VsdE1UID0gKHduZEggLSByZXN1bHRIKSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdE1UID0gKGNvbnRIIC0gcmVzdWx0SCkgLyAyO1xuICAgIH0gLy8gYXBwbHkgcmVzdWx0IHRvIGl0ZW1cblxuXG4gICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwge1xuICAgICAgaGVpZ2h0OiBgJHtyZXN1bHRIfXB4YCxcbiAgICAgIG1hcmdpblRvcDogYCR7cmVzdWx0TVR9cHhgLFxuICAgICAgbGVmdDogJ2ZpeGVkJyA9PT0gc2VsZi5pbWFnZS5wb3NpdGlvbiA/IGAke3JlY3QubGVmdH1weGAgOiAnMCcsXG4gICAgICB3aWR0aDogYCR7cmVjdC53aWR0aH1weGBcbiAgICB9KTsgLy8gY2FsbCBvbkNvdmVySW1hZ2UgZXZlbnRcblxuICAgIGlmIChzZWxmLm9wdGlvbnMub25Db3ZlckltYWdlKSB7XG4gICAgICBzZWxmLm9wdGlvbnMub25Db3ZlckltYWdlLmNhbGwoc2VsZik7XG4gICAgfSAvLyByZXR1cm4gc29tZSB1c2VmdWwgZGF0YS4gVXNlZCBpbiB0aGUgdmlkZW8gY292ZXIgZnVuY3Rpb25cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIGhlaWdodDogcmVzdWx0SCxcbiAgICAgICAgbWFyZ2luVG9wOiByZXN1bHRNVFxuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcjogcmVjdFxuICAgIH07XG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCB8fCBmYWxzZTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGZvcmNlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgcmVjdCA9IHNlbGYuJGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udFQgPSByZWN0LnRvcDtcbiAgICBjb25zdCBjb250SCA9IHJlY3QuaGVpZ2h0O1xuICAgIGNvbnN0IHN0eWxlcyA9IHt9OyAvLyBjaGVjayBpZiBpbiB2aWV3cG9ydFxuXG4gICAgbGV0IHZpZXdwb3J0UmVjdCA9IHJlY3Q7XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0KSB7XG4gICAgICB2aWV3cG9ydFJlY3QgPSBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgc2VsZi5pc0VsZW1lbnRJblZpZXdwb3J0ID0gMCA8PSB2aWV3cG9ydFJlY3QuYm90dG9tICYmIDAgPD0gdmlld3BvcnRSZWN0LnJpZ2h0ICYmIHZpZXdwb3J0UmVjdC50b3AgPD0gd25kSCAmJiB2aWV3cG9ydFJlY3QubGVmdCA8PSBnbG9iYWwkMi5pbm5lcldpZHRoOyAvLyBzdG9wIGNhbGN1bGF0aW9ucyBpZiBpdGVtIGlzIG5vdCBpbiB2aWV3cG9ydFxuXG4gICAgaWYgKGZvcmNlID8gZmFsc2UgOiAhc2VsZi5pc0VsZW1lbnRJblZpZXdwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBjYWxjdWxhdGUgcGFyYWxsYXggaGVscGluZyB2YXJpYWJsZXNcblxuXG4gICAgY29uc3QgYmVmb3JlVG9wID0gTWF0aC5tYXgoMCwgY29udFQpO1xuICAgIGNvbnN0IGJlZm9yZVRvcEVuZCA9IE1hdGgubWF4KDAsIGNvbnRIICsgY29udFQpO1xuICAgIGNvbnN0IGFmdGVyVG9wID0gTWF0aC5tYXgoMCwgLWNvbnRUKTtcbiAgICBjb25zdCBiZWZvcmVCb3R0b20gPSBNYXRoLm1heCgwLCBjb250VCArIGNvbnRIIC0gd25kSCk7XG4gICAgY29uc3QgYmVmb3JlQm90dG9tRW5kID0gTWF0aC5tYXgoMCwgY29udEggLSAoY29udFQgKyBjb250SCAtIHduZEgpKTtcbiAgICBjb25zdCBhZnRlckJvdHRvbSA9IE1hdGgubWF4KDAsIC1jb250VCArIHduZEggLSBjb250SCk7XG4gICAgY29uc3QgZnJvbVZpZXdwb3J0Q2VudGVyID0gMSAtIDIgKiAoKHduZEggLSBjb250VCkgLyAod25kSCArIGNvbnRIKSk7IC8vIGNhbGN1bGF0ZSBvbiBob3cgcGVyY2VudCBvZiBzZWN0aW9uIGlzIHZpc2libGVcblxuICAgIGxldCB2aXNpYmxlUGVyY2VudCA9IDE7XG5cbiAgICBpZiAoY29udEggPCB3bmRIKSB7XG4gICAgICB2aXNpYmxlUGVyY2VudCA9IDEgLSAoYWZ0ZXJUb3AgfHwgYmVmb3JlQm90dG9tKSAvIGNvbnRIO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlVG9wRW5kIDw9IHduZEgpIHtcbiAgICAgIHZpc2libGVQZXJjZW50ID0gYmVmb3JlVG9wRW5kIC8gd25kSDtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZUJvdHRvbUVuZCA8PSB3bmRIKSB7XG4gICAgICB2aXNpYmxlUGVyY2VudCA9IGJlZm9yZUJvdHRvbUVuZCAvIHduZEg7XG4gICAgfSAvLyBvcGFjaXR5XG5cblxuICAgIGlmICgnb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY2FsZS1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3Njcm9sbC1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUpIHtcbiAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwwLDApJztcbiAgICAgIHN0eWxlcy5vcGFjaXR5ID0gdmlzaWJsZVBlcmNlbnQ7XG4gICAgfSAvLyBzY2FsZVxuXG5cbiAgICBpZiAoJ3NjYWxlJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3NjYWxlLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSkge1xuICAgICAgbGV0IHNjYWxlID0gMTtcblxuICAgICAgaWYgKDAgPiBzZWxmLm9wdGlvbnMuc3BlZWQpIHtcbiAgICAgICAgc2NhbGUgLT0gc2VsZi5vcHRpb25zLnNwZWVkICogdmlzaWJsZVBlcmNlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZSArPSBzZWxmLm9wdGlvbnMuc3BlZWQgKiAoMSAtIHZpc2libGVQZXJjZW50KTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlM2QoMCwwLDApYDtcbiAgICB9IC8vIHNjcm9sbFxuXG5cbiAgICBpZiAoJ3Njcm9sbCcgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY3JvbGwtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlKSB7XG4gICAgICBsZXQgcG9zaXRpb25ZID0gc2VsZi5wYXJhbGxheFNjcm9sbERpc3RhbmNlICogZnJvbVZpZXdwb3J0Q2VudGVyOyAvLyBmaXggaWYgcGFyYWxsYXggYmxvY2sgaW4gYWJzb2x1dGUgcG9zaXRpb25cblxuICAgICAgaWYgKCdhYnNvbHV0ZScgPT09IHNlbGYuaW1hZ2UucG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb25ZIC09IGNvbnRUO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsJHtwb3NpdGlvbll9cHgsMClgO1xuICAgIH1cblxuICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGl0ZW0sIHN0eWxlcyk7IC8vIGNhbGwgb25TY3JvbGwgZXZlbnRcblxuICAgIGlmIChzZWxmLm9wdGlvbnMub25TY3JvbGwpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5vblNjcm9sbC5jYWxsKHNlbGYsIHtcbiAgICAgICAgc2VjdGlvbjogcmVjdCxcbiAgICAgICAgYmVmb3JlVG9wLFxuICAgICAgICBiZWZvcmVUb3BFbmQsXG4gICAgICAgIGFmdGVyVG9wLFxuICAgICAgICBiZWZvcmVCb3R0b20sXG4gICAgICAgIGJlZm9yZUJvdHRvbUVuZCxcbiAgICAgICAgYWZ0ZXJCb3R0b20sXG4gICAgICAgIHZpc2libGVQZXJjZW50LFxuICAgICAgICBmcm9tVmlld3BvcnRDZW50ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuY292ZXJJbWFnZSgpO1xuICB9XG5cbn0gLy8gZ2xvYmFsIGRlZmluaXRpb25cblxuXG5jb25zdCBqYXJhbGxheCQxID0gZnVuY3Rpb24gKGl0ZW1zLCBvcHRpb25zLCAuLi5hcmdzKSB7XG4gIC8vIGNoZWNrIGZvciBkb20gZWxlbWVudFxuICAvLyB0aGFua3M6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzg0Mjg2L2phdmFzY3JpcHQtaXNkb20taG93LWRvLXlvdS1jaGVjay1pZi1hLWphdmFzY3JpcHQtb2JqZWN0LWlzLWEtZG9tLW9iamVjdFxuICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBIVE1MRWxlbWVudCA/IGl0ZW1zIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiBpdGVtcyAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIGl0ZW1zICYmIG51bGwgIT09IGl0ZW1zICYmIDEgPT09IGl0ZW1zLm5vZGVUeXBlICYmICdzdHJpbmcnID09PSB0eXBlb2YgaXRlbXMubm9kZU5hbWUpIHtcbiAgICBpdGVtcyA9IFtpdGVtc107XG4gIH1cblxuICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gIGxldCBrID0gMDtcbiAgbGV0IHJldDtcblxuICBmb3IgKGs7IGsgPCBsZW47IGsgKz0gMSkge1xuICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIG9wdGlvbnMgfHwgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICBpZiAoIWl0ZW1zW2tdLmphcmFsbGF4KSB7XG4gICAgICAgIGl0ZW1zW2tdLmphcmFsbGF4ID0gbmV3IEphcmFsbGF4KGl0ZW1zW2tdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGl0ZW1zW2tdLmphcmFsbGF4KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgcmV0ID0gaXRlbXNba10uamFyYWxsYXhbb3B0aW9uc10uYXBwbHkoaXRlbXNba10uamFyYWxsYXgsIGFyZ3MpO1xuICAgIH1cblxuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHJldCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG5qYXJhbGxheCQxLmNvbnN0cnVjdG9yID0gSmFyYWxsYXg7XG5cbi8qIVxuICogTmFtZSAgICA6IFZpZGVvIFdvcmtlclxuICogVmVyc2lvbiA6IDIuMC4wXG4gKiBBdXRob3IgIDogbksgPGh0dHBzOi8vbmtkZXYuaW5mbz5cbiAqIEdpdEh1YiAgOiBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xubGV0IHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbiA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gIHdpbiA9IHt9O1xufVxuXG52YXIgZ2xvYmFsJDEgPSB3aW47IC8vIERlZmVycmVkXG4vLyB0aGFua3MgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xODA5NjcxNS9pbXBsZW1lbnQtZGVmZXJyZWQtb2JqZWN0LXdpdGhvdXQtdXNpbmctanF1ZXJ5XG5cbmZ1bmN0aW9uIERlZmVycmVkKCkge1xuICB0aGlzLmRvbmVDYWxsYmFja3MgPSBbXTtcbiAgdGhpcy5mYWlsQ2FsbGJhY2tzID0gW107XG59XG5cbkRlZmVycmVkLnByb3RvdHlwZSA9IHtcbiAgZXhlY3V0ZShsaXN0LCBhcmdzKSB7XG4gICAgbGV0IGkgPSBsaXN0Lmxlbmd0aDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cbiAgICB3aGlsZSAoaSkge1xuICAgICAgaSAtPSAxO1xuICAgICAgbGlzdFtpXS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzb2x2ZSguLi5hcmdzKSB7XG4gICAgdGhpcy5leGVjdXRlKHRoaXMuZG9uZUNhbGxiYWNrcywgYXJncyk7XG4gIH0sXG5cbiAgcmVqZWN0KC4uLmFyZ3MpIHtcbiAgICB0aGlzLmV4ZWN1dGUodGhpcy5mYWlsQ2FsbGJhY2tzLCBhcmdzKTtcbiAgfSxcblxuICBkb25lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5kb25lQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9LFxuXG4gIGZhaWwoY2FsbGJhY2spIHtcbiAgICB0aGlzLmZhaWxDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxufTtcbmxldCBJRCA9IDA7XG5sZXQgWW91dHViZUFQSWFkZGVkID0gMDtcbmxldCBWaW1lb0FQSWFkZGVkID0gMDtcbmxldCBsb2FkaW5nWW91dHViZVBsYXllciA9IDA7XG5sZXQgbG9hZGluZ1ZpbWVvUGxheWVyID0gMDtcbmNvbnN0IGxvYWRpbmdZb3V0dWJlRGVmZXIgPSAvKiNfX1BVUkVfXyovbmV3IERlZmVycmVkKCk7XG5jb25zdCBsb2FkaW5nVmltZW9EZWZlciA9IC8qI19fUFVSRV9fKi9uZXcgRGVmZXJyZWQoKTtcblxuY2xhc3MgVmlkZW9Xb3JrZXIge1xuICBjb25zdHJ1Y3Rvcih1cmwsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnVybCA9IHVybDtcbiAgICBzZWxmLm9wdGlvbnNfZGVmYXVsdCA9IHtcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgbXV0ZTogZmFsc2UsXG4gICAgICB2b2x1bWU6IDEwMCxcbiAgICAgIHNob3dDb250cm9sczogdHJ1ZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlIaWRkZW46IGZhbHNlLFxuICAgICAgLy8gc3RhcnQgLyBlbmQgdmlkZW8gdGltZSBpbiBzZWNvbmRzXG4gICAgICBzdGFydFRpbWU6IDAsXG4gICAgICBlbmRUaW1lOiAwXG4gICAgfTtcbiAgICBzZWxmLm9wdGlvbnMgPSBzZWxmLmV4dGVuZCh7fSwgc2VsZi5vcHRpb25zX2RlZmF1bHQsIG9wdGlvbnMpOyAvLyBGaXggd3Jvbmcgb3B0aW9uIG5hbWUuXG4gICAgLy8gVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL3ZpZGVvLXdvcmtlci9pc3N1ZXMvMTMuXG5cbiAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5zaG93Q29udG9scyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5zaG93Q29udHJvbHMgPSBzZWxmLm9wdGlvbnMuc2hvd0NvbnRvbHM7XG4gICAgICBkZWxldGUgc2VsZi5vcHRpb25zLnNob3dDb250b2xzO1xuICAgIH0gLy8gY2hlY2sgVVJMXG5cblxuICAgIHNlbGYudmlkZW9JRCA9IHNlbGYucGFyc2VVUkwodXJsKTsgLy8gaW5pdFxuXG4gICAgaWYgKHNlbGYudmlkZW9JRCkge1xuICAgICAgc2VsZi5JRCA9IElEO1xuICAgICAgSUQgKz0gMTtcbiAgICAgIHNlbGYubG9hZEFQSSgpO1xuICAgICAgc2VsZi5pbml0KCk7XG4gICAgfVxuICB9IC8vIEV4dGVuZCBsaWtlIGpRdWVyeS5leHRlbmRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIGV4dGVuZCguLi5hcmdzKSB7XG4gICAgY29uc3Qgb3V0ID0gYXJnc1swXSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgaWYgKCFhcmdzW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoYXJnc1tpXSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBvdXRba2V5XSA9IGFyZ3NbaV1ba2V5XTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBwYXJzZVVSTCh1cmwpIHtcbiAgICAvLyBwYXJzZSB5b3V0dWJlIElEXG4gICAgZnVuY3Rpb24gZ2V0WW91dHViZUlEKHl0VXJsKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC8uKig/OnlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9KShbXiNcXCZcXD9dKikuKi87XG4gICAgICBjb25zdCBtYXRjaCA9IHl0VXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0ubGVuZ3RoID09PSAxMSA/IG1hdGNoWzFdIDogZmFsc2U7XG4gICAgfSAvLyBwYXJzZSB2aW1lbyBJRFxuXG5cbiAgICBmdW5jdGlvbiBnZXRWaW1lb0lEKHZtVXJsKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC9odHRwcz86XFwvXFwvKD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteL10qKVxcL3ZpZGVvc1xcL3xhbGJ1bVxcLyhcXGQrKVxcL3ZpZGVvXFwvfHZpZGVvXFwvfCkoXFxkKykoPzokfFxcL3xcXD8pLztcbiAgICAgIGNvbnN0IG1hdGNoID0gdm1VcmwubWF0Y2gocmVnRXhwKTtcbiAgICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFszXSA/IG1hdGNoWzNdIDogZmFsc2U7XG4gICAgfSAvLyBwYXJzZSBsb2NhbCBzdHJpbmdcblxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxWaWRlb3MobG9jVXJsKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgIGNvbnN0IHZpZGVvRm9ybWF0cyA9IGxvY1VybC5zcGxpdCgvLCg/PW1wNFxcOnx3ZWJtXFw6fG9ndlxcOnxvZ2dcXDopLyk7XG4gICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgIGxldCByZWFkeSA9IDA7XG4gICAgICB2aWRlb0Zvcm1hdHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWwubWF0Y2goL14obXA0fHdlYm18b2d2fG9nZylcXDooLiopLyk7XG5cbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdICYmIG1hdGNoWzJdKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgcmVzdWx0W21hdGNoWzFdID09PSAnb2d2JyA/ICdvZ2cnIDogbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gICAgICAgICAgcmVhZHkgPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZWFkeSA/IHJlc3VsdCA6IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IFlvdXR1YmUgPSBnZXRZb3V0dWJlSUQodXJsKTtcbiAgICBjb25zdCBWaW1lbyA9IGdldFZpbWVvSUQodXJsKTtcbiAgICBjb25zdCBMb2NhbCA9IGdldExvY2FsVmlkZW9zKHVybCk7XG5cbiAgICBpZiAoWW91dHViZSkge1xuICAgICAgdGhpcy50eXBlID0gJ3lvdXR1YmUnO1xuICAgICAgcmV0dXJuIFlvdXR1YmU7XG4gICAgfVxuXG4gICAgaWYgKFZpbWVvKSB7XG4gICAgICB0aGlzLnR5cGUgPSAndmltZW8nO1xuICAgICAgcmV0dXJuIFZpbWVvO1xuICAgIH1cblxuICAgIGlmIChMb2NhbCkge1xuICAgICAgdGhpcy50eXBlID0gJ2xvY2FsJztcbiAgICAgIHJldHVybiBMb2NhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiAhIXRoaXMudmlkZW9JRDtcbiAgfSAvLyBldmVudHNcblxuXG4gIG9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy51c2VyRXZlbnRzTGlzdCA9IHRoaXMudXNlckV2ZW50c0xpc3QgfHwgW107IC8vIGFkZCBuZXcgY2FsbGJhY2sgaW4gZXZlbnRzIGxpc3RcblxuICAgICh0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdIHx8ICh0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIG9mZihuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy51c2VyRXZlbnRzTGlzdCB8fCAhdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGlmICh2YWwgPT09IGNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXVtrZXldID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZpcmUobmFtZSwgLi4uYXJncykge1xuICAgIGlmICh0aGlzLnVzZXJFdmVudHNMaXN0ICYmIHR5cGVvZiB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgIC8vIGNhbGwgd2l0aCBhbGwgYXJndW1lbnRzXG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICB2YWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoc3RhcnQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIucGxheVZpZGVvKSB7XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLnBsYXllci5zZWVrVG8oc3RhcnQgfHwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICE9PSBzZWxmLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnNldEN1cnJlbnRUaW1lKHN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5wbGF5ZXIuZ2V0UGF1c2VkKCkudGhlbihwYXVzZWQgPT4ge1xuICAgICAgICBpZiAocGF1c2VkKSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLnBsYXllci5jdXJyZW50VGltZSA9IHN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5wbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIucGF1c2VWaWRlbykge1xuICAgICAgaWYgKGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBMQVlJTkcgPT09IHNlbGYucGxheWVyLmdldFBsYXllclN0YXRlKCkpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgIHNlbGYucGxheWVyLmdldFBhdXNlZCgpLnRoZW4ocGF1c2VkID0+IHtcbiAgICAgICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgICAgICBzZWxmLnBsYXllci5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBpZiAoIXNlbGYucGxheWVyLnBhdXNlZCkge1xuICAgICAgICBzZWxmLnBsYXllci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG11dGUoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLm11dGUpIHtcbiAgICAgIHNlbGYucGxheWVyLm11dGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLnNldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKDApO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1bm11dGUoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLm11dGUpIHtcbiAgICAgIHNlbGYucGxheWVyLnVuTXV0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoc2VsZi5vcHRpb25zLnZvbHVtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgc2VsZi4kdmlkZW8ubXV0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZXRWb2x1bWUodm9sdW1lID0gZmFsc2UpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIgfHwgIXZvbHVtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSh2b2x1bWUpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUodm9sdW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBzZWxmLiR2aWRlby52b2x1bWUgPSB2b2x1bWUgLyAxMDA7XG4gICAgfVxuICB9XG5cbiAgZ2V0Vm9sdW1lKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLmdldFZvbHVtZSkge1xuICAgICAgY2FsbGJhY2soc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5nZXRWb2x1bWUoKS50aGVuKHZvbHVtZSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZvbHVtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLiR2aWRlby52b2x1bWUgKiAxMDApO1xuICAgIH1cbiAgfVxuXG4gIGdldE11dGVkKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIuaXNNdXRlZCkge1xuICAgICAgY2FsbGJhY2soc2VsZi5wbGF5ZXIuaXNNdXRlZCgpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLmdldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkudGhlbih2b2x1bWUgPT4ge1xuICAgICAgICBjYWxsYmFjayghIXZvbHVtZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLiR2aWRlby5tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW1hZ2VVUkwoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmIChzZWxmLnZpZGVvSW1hZ2UpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYudmlkZW9JbWFnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVTaXplcyA9IFsnbWF4cmVzZGVmYXVsdCcsICdzZGRlZmF1bHQnLCAnaHFkZWZhdWx0JywgJzAnXTtcbiAgICAgIGxldCBzdGVwID0gMDtcbiAgICAgIGNvbnN0IHRlbXBJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgdGVtcEltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGlmIG5vIHRodW1ibmFpbCwgeW91dHViZSBhZGQgdGhlaXIgb3duIGltYWdlIHdpdGggd2lkdGggPSAxMjBweFxuICAgICAgICBpZiAoKHRoaXMubmF0dXJhbFdpZHRoIHx8IHRoaXMud2lkdGgpICE9PSAxMjAgfHwgc3RlcCA9PT0gYXZhaWxhYmxlU2l6ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIC8vIG9rXG4gICAgICAgICAgc2VsZi52aWRlb0ltYWdlID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7c2VsZi52aWRlb0lEfS8ke2F2YWlsYWJsZVNpemVzW3N0ZXBdfS5qcGdgO1xuICAgICAgICAgIGNhbGxiYWNrKHNlbGYudmlkZW9JbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdHJ5IGFub3RoZXIgc2l6ZVxuICAgICAgICAgIHN0ZXAgKz0gMTtcbiAgICAgICAgICB0aGlzLnNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3NlbGYudmlkZW9JRH0vJHthdmFpbGFibGVTaXplc1tzdGVwXX0uanBnYDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGVtcEltZy5zcmMgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtzZWxmLnZpZGVvSUR9LyR7YXZhaWxhYmxlU2l6ZXNbc3RlcF19LmpwZ2A7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgLy8gaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD1odHRwczovL3ZpbWVvLmNvbS8yMzUyMTI1MjdcblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBgaHR0cHM6Ly92aW1lby5jb20vYXBpL29lbWJlZC5qc29uP3VybD0ke3NlbGYudXJsfWAsIHRydWUpO1xuXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgIC8vIFN1Y2Nlc3MhXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudGh1bWJuYWlsX3VybCkge1xuICAgICAgICAgICAgICBzZWxmLnZpZGVvSW1hZ2UgPSByZXNwb25zZS50aHVtYm5haWxfdXJsO1xuICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLnZpZGVvSW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG4gIH0gLy8gZmFsbGJhY2sgdG8gdGhlIG9sZCB2ZXJzaW9uLlxuXG5cbiAgZ2V0SWZyYW1lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5nZXRWaWRlbyhjYWxsYmFjayk7XG4gIH1cblxuICBnZXRWaWRlbyhjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyByZXR1cm4gZ2VuZXJhdGVkIHZpZGVvIGJsb2NrXG5cbiAgICBpZiAoc2VsZi4kdmlkZW8pIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYuJHZpZGVvKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGdlbmVyYXRlIG5ldyB2aWRlbyBibG9ja1xuXG5cbiAgICBzZWxmLm9uQVBJcmVhZHkoKCkgPT4ge1xuICAgICAgbGV0IGhpZGRlbkRpdjtcblxuICAgICAgaWYgKCFzZWxmLiR2aWRlbykge1xuICAgICAgICBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IC8vIFlvdXR1YmVcblxuXG4gICAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zID0ge1xuICAgICAgICAgIC8vIEdEUFIgQ29tcGxpYW5jZS5cbiAgICAgICAgICBob3N0OiAnaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20nLFxuICAgICAgICAgIHZpZGVvSWQ6IHNlbGYudmlkZW9JRCxcbiAgICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgICBhdXRvaGlkZTogMSxcbiAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgIGF1dG9wbGF5OiAwLFxuICAgICAgICAgICAgLy8gYXV0b3BsYXkgZW5hYmxlIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgICAgICBwbGF5c2lubGluZTogMVxuICAgICAgICAgIH1cbiAgICAgICAgfTsgLy8gaGlkZSBjb250cm9sc1xuXG4gICAgICAgIGlmICghc2VsZi5vcHRpb25zLnNob3dDb250cm9scykge1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLml2X2xvYWRfcG9saWN5ID0gMztcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5tb2Rlc3RicmFuZGluZyA9IDE7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuY29udHJvbHMgPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLnNob3dpbmZvID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5kaXNhYmxla2IgPSAxO1xuICAgICAgICB9IC8vIGV2ZW50c1xuXG5cbiAgICAgICAgbGV0IHl0U3RhcnRlZDtcbiAgICAgICAgbGV0IHl0UHJvZ3Jlc3NJbnRlcnZhbDtcbiAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLmV2ZW50cyA9IHtcbiAgICAgICAgICBvblJlYWR5KGUpIHtcbiAgICAgICAgICAgIC8vIG11dGVcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubXV0ZSkge1xuICAgICAgICAgICAgICBlLnRhcmdldC5tdXRlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYub3B0aW9ucy52b2x1bWUpIHtcbiAgICAgICAgICAgICAgZS50YXJnZXQuc2V0Vm9sdW1lKHNlbGYub3B0aW9ucy52b2x1bWUpO1xuICAgICAgICAgICAgfSAvLyBhdXRvcGxheVxuXG5cbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmZpcmUoJ3JlYWR5JywgZSk7IC8vIEZvciBzZWFtbGVzcyBsb29wcywgc2V0IHRoZSBlbmRUaW1lIHRvIDAuMSBzZWNvbmRzIGxlc3MgdGhhbiB0aGUgdmlkZW8ncyBkdXJhdGlvblxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vdmlkZW8td29ya2VyL2lzc3Vlcy8yXG5cbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCAmJiAhc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kc09mZnNldCA9IDAuMTtcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmVuZFRpbWUgPSBzZWxmLnBsYXllci5nZXREdXJhdGlvbigpIC0gc2Vjb25kc09mZnNldDtcbiAgICAgICAgICAgIH0gLy8gdm9sdW1lY2hhbmdlXG5cblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLmdldFZvbHVtZSh2b2x1bWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudm9sdW1lICE9PSB2b2x1bWUpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3ZvbHVtZWNoYW5nZScsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBvblN0YXRlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIC8vIGxvb3BcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCAmJiBlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF5dFN0YXJ0ZWQgJiYgZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgIHl0U3RhcnRlZCA9IDE7XG4gICAgICAgICAgICAgIHNlbGYuZmlyZSgnc3RhcnRlZCcsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgIHNlbGYuZmlyZSgncGxheScsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcbiAgICAgICAgICAgICAgc2VsZi5maXJlKCdwYXVzZScsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgICAgICAgICBzZWxmLmZpcmUoJ2VuZGVkJywgZSk7XG4gICAgICAgICAgICB9IC8vIHByb2dyZXNzIGNoZWNrXG5cblxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgICB5dFByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5maXJlKCd0aW1ldXBkYXRlJywgZSk7IC8vIGNoZWNrIGZvciBlbmQgb2YgdmlkZW8gYW5kIHBsYXkgYWdhaW4gb3Igc3RvcFxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIHNlbGYucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh5dFByb2dyZXNzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBvbkVycm9yKGUpIHtcbiAgICAgICAgICAgIHNlbGYuZmlyZSgnZXJyb3InLCBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXNlbGYuJHZpZGVvO1xuXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIHNlbGYucGxheWVySUQpO1xuICAgICAgICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgbmV3IGdsb2JhbCQxLllULlBsYXllcihzZWxmLnBsYXllcklELCBzZWxmLnBsYXllck9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcbiAgICAgICAgICBzZWxmLiR2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYucGxheWVySUQpOyAvLyBhZGQgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmFjY2Vzc2liaWxpdHlIaWRkZW4pIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgIH0gLy8gZ2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcblxuXG4gICAgICAgICAgc2VsZi52aWRlb1dpZHRoID0gcGFyc2VJbnQoc2VsZi4kdmlkZW8uZ2V0QXR0cmlidXRlKCd3aWR0aCcpLCAxMCkgfHwgMTI4MDtcbiAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gcGFyc2VJbnQoc2VsZi4kdmlkZW8uZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSwgMTApIHx8IDcyMDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBWaW1lb1xuXG5cbiAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zID0ge1xuICAgICAgICAgIC8vIEdEUFIgQ29tcGxpYW5jZS5cbiAgICAgICAgICBkbnQ6IDEsXG4gICAgICAgICAgaWQ6IHNlbGYudmlkZW9JRCxcbiAgICAgICAgICBhdXRvcGF1c2U6IDAsXG4gICAgICAgICAgdHJhbnNwYXJlbnQ6IDAsXG4gICAgICAgICAgYXV0b3BsYXk6IHNlbGYub3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgIGxvb3A6IHNlbGYub3B0aW9ucy5sb29wID8gMSA6IDAsXG4gICAgICAgICAgbXV0ZWQ6IHNlbGYub3B0aW9ucy5tdXRlID8gMSA6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZvbHVtZSkge1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy52b2x1bWUgPSBzZWxmLm9wdGlvbnMudm9sdW1lO1xuICAgICAgICB9IC8vIGhpZGUgY29udHJvbHNcblxuXG4gICAgICAgIGlmICghc2VsZi5vcHRpb25zLnNob3dDb250cm9scykge1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5iYWRnZSA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLmJ5bGluZSA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBvcnRyYWl0ID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMudGl0bGUgPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5iYWNrZ3JvdW5kID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZi4kdmlkZW8pIHtcbiAgICAgICAgICBsZXQgcGxheWVyT3B0aW9uc1N0cmluZyA9ICcnO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGYucGxheWVyT3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllck9wdGlvbnNTdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgIHBsYXllck9wdGlvbnNTdHJpbmcgKz0gJyYnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbGF5ZXJPcHRpb25zU3RyaW5nICs9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQoc2VsZi5wbGF5ZXJPcHRpb25zW2tleV0pfWA7XG4gICAgICAgICAgfSk7IC8vIHdlIG5lZWQgdG8gY3JlYXRlIGlmcmFtZSBtYW51YWxseSBiZWNhdXNlIHdoZW4gd2UgY3JlYXRlIGl0IHVzaW5nIEFQSVxuICAgICAgICAgIC8vIGpzIGV2ZW50cyB3b24ndCB0cmlnZ2VycyBhZnRlciBpZnJhbWUgbW92ZWQgdG8gYW5vdGhlciBwbGFjZVxuXG4gICAgICAgICAgc2VsZi4kdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZi5wbGF5ZXJJRCk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7c2VsZi52aWRlb0lEfT8ke3BsYXllck9wdGlvbnNTdHJpbmd9YCk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdmcmFtZWJvcmRlcicsICcwJyk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdtb3phbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd0aXRsZScsICdWaW1lbyB2aWRlbyBwbGF5ZXInKTsgLy8gYWRkIGFjY2Vzc2liaWxpdHkgYXR0cmlidXRlc1xuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hY2Nlc3NpYmlsaXR5SGlkZGVuKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoc2VsZi4kdmlkZW8pO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgbmV3IGdsb2JhbCQxLlZpbWVvLlBsYXllcihzZWxmLiR2aWRlbywgc2VsZi5wbGF5ZXJPcHRpb25zKTsgLy8gc2V0IGN1cnJlbnQgdGltZSBmb3IgYXV0b3BsYXlcblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSAmJiBzZWxmLm9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICBzZWxmLnBsYXllci5zZXRDdXJyZW50VGltZShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgfSAvLyBnZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuXG5cbiAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0VmlkZW9XaWR0aCgpLnRoZW4od2lkdGggPT4ge1xuICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHdpZHRoIHx8IDEyODA7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5nZXRWaWRlb0hlaWdodCgpLnRoZW4oaGVpZ2h0ID0+IHtcbiAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gaGVpZ2h0IHx8IDcyMDtcbiAgICAgICAgfSk7IC8vIGV2ZW50c1xuXG4gICAgICAgIGxldCB2bVN0YXJ0ZWQ7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZSA9PiB7XG4gICAgICAgICAgaWYgKCF2bVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHNlbGYuZmlyZSgnc3RhcnRlZCcsIGUpO1xuICAgICAgICAgICAgdm1TdGFydGVkID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLmZpcmUoJ3RpbWV1cGRhdGUnLCBlKTsgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSAmJiBlLnNlY29uZHMgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCdwbGF5JywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdwbGF5JywgZSk7IC8vIGNoZWNrIGZvciB0aGUgc3RhcnQgdGltZSBhbmQgc3RhcnQgd2l0aCBpdFxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5zdGFydFRpbWUgJiYgZS5zZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ3BhdXNlJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdwYXVzZScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ2VuZGVkJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdlbmRlZCcsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ2xvYWRlZCcsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgncmVhZHknLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3ZvbHVtZWNoYW5nZScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ2Vycm9yJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdlcnJvcicsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTG9jYWxcblxuXG4gICAgICBmdW5jdGlvbiBhZGRTb3VyY2VUb0xvY2FsKGVsZW1lbnQsIHNyYywgdHlwZSkge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgc291cmNlLnNyYyA9IHNyYztcbiAgICAgICAgc291cmNlLnR5cGUgPSB0eXBlO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgaWYgKCFzZWxmLiR2aWRlbykge1xuICAgICAgICAgIHNlbGYuJHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTsgLy8gc2hvdyBjb250cm9sc1xuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICB9IC8vIG11dGVcblxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5tdXRlKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLiR2aWRlby52b2x1bWUpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnZvbHVtZSA9IHNlbGYub3B0aW9ucy52b2x1bWUgLyAxMDA7XG4gICAgICAgICAgfSAvLyBsb29wXG5cblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgICAgfSAvLyBhdXRvcGxheSBlbmFibGUgb24gbW9iaWxlIGRldmljZXNcblxuXG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3dlYmtpdC1wbGF5c2lubGluZScsICcnKTsgLy8gYWRkIGFjY2Vzc2liaWxpdHkgYXR0cmlidXRlc1xuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hY2Nlc3NpYmlsaXR5SGlkZGVuKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZi5wbGF5ZXJJRCk7XG4gICAgICAgICAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKHNlbGYuJHZpZGVvKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc2VsZi52aWRlb0lEKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBhZGRTb3VyY2VUb0xvY2FsKHNlbGYuJHZpZGVvLCBzZWxmLnZpZGVvSURba2V5XSwgYHZpZGVvLyR7a2V5fWApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIgPSBzZWxmLnBsYXllciB8fCBzZWxmLiR2aWRlbztcbiAgICAgICAgbGV0IGxvY1N0YXJ0ZWQ7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCBlID0+IHtcbiAgICAgICAgICBpZiAoIWxvY1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHNlbGYuZmlyZSgnc3RhcnRlZCcsIGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvY1N0YXJ0ZWQgPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2VsZi5maXJlKCd0aW1ldXBkYXRlJywgZSk7IC8vIGNoZWNrIGZvciBlbmQgb2YgdmlkZW8gYW5kIHBsYXkgYWdhaW4gb3Igc3RvcFxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUgJiYgdGhpcy5jdXJyZW50VGltZSA+PSBzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wYXVzZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgncGxheScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3BhdXNlJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgnZW5kZWQnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAgICAgc2VsZi52aWRlb1dpZHRoID0gdGhpcy52aWRlb1dpZHRoIHx8IDEyODA7XG4gICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IHRoaXMudmlkZW9IZWlnaHQgfHwgNzIwO1xuICAgICAgICAgIHNlbGYuZmlyZSgncmVhZHknKTsgLy8gYXV0b3BsYXlcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCd2b2x1bWVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmdldFZvbHVtZSh2b2x1bWUgPT4ge1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3ZvbHVtZWNoYW5nZScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ2Vycm9yJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhzZWxmLiR2aWRlbyk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYucGxheWVySUQgPSBgVmlkZW9Xb3JrZXItJHtzZWxmLklEfWA7XG4gIH1cblxuICBsb2FkQVBJKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKFlvdXR1YmVBUElhZGRlZCAmJiBWaW1lb0FQSWFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNyYyA9ICcnOyAvLyBsb2FkIFlvdXR1YmUgQVBJXG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgIVlvdXR1YmVBUElhZGRlZCkge1xuICAgICAgWW91dHViZUFQSWFkZGVkID0gMTtcbiAgICAgIHNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICB9IC8vIGxvYWQgVmltZW8gQVBJXG5cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgIVZpbWVvQVBJYWRkZWQpIHtcbiAgICAgIFZpbWVvQVBJYWRkZWQgPSAxOyAvLyBVc2VmdWwgd2hlbiBWaW1lbyBBUEkgYWRkZWQgdXNpbmcgUmVxdWlyZUpTIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL3ZpZGVvLXdvcmtlci9wdWxsLzdcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5WaW1lbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzcmMgPSAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanMnO1xuICAgIH1cblxuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBhZGQgc2NyaXB0IGluIGhlYWQgc2VjdGlvblxuXG5cbiAgICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHRhZy5zcmMgPSBzcmM7XG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xuICAgIGhlYWQgPSBudWxsO1xuICAgIHRhZyA9IG51bGw7XG4gIH1cblxuICBvbkFQSXJlYWR5KGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIFlvdXR1YmVcblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgLy8gTGlzdGVuIGZvciBnbG9iYWwgWVQgcGxheWVyIGNhbGxiYWNrXG4gICAgICBpZiAoKHR5cGVvZiBnbG9iYWwkMS5ZVCA9PT0gJ3VuZGVmaW5lZCcgfHwgZ2xvYmFsJDEuWVQubG9hZGVkID09PSAwKSAmJiAhbG9hZGluZ1lvdXR1YmVQbGF5ZXIpIHtcbiAgICAgICAgLy8gUHJldmVudHMgUmVhZHkgZXZlbnQgZnJvbSBiZWluZyBjYWxsZWQgdHdpY2VcbiAgICAgICAgbG9hZGluZ1lvdXR1YmVQbGF5ZXIgPSAxOyAvLyBDcmVhdGVzIGRlZmVycmVkIHNvLCBvdGhlciBwbGF5ZXJzIGtub3cgd2hlbiB0byB3YWl0LlxuXG4gICAgICAgIGdsb2JhbCQxLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGdsb2JhbCQxLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gbnVsbDtcbiAgICAgICAgICBsb2FkaW5nWW91dHViZURlZmVyLnJlc29sdmUoJ2RvbmUnKTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsJDEuWVQgPT09ICdvYmplY3QnICYmIGdsb2JhbCQxLllULmxvYWRlZCA9PT0gMSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGluZ1lvdXR1YmVEZWZlci5kb25lKCgpID0+IHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIFZpbWVvXG5cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuVmltZW8gPT09ICd1bmRlZmluZWQnICYmICFsb2FkaW5nVmltZW9QbGF5ZXIpIHtcbiAgICAgICAgbG9hZGluZ1ZpbWVvUGxheWVyID0gMTtcbiAgICAgICAgY29uc3QgdmltZW9JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlZpbWVvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh2aW1lb0ludGVydmFsKTtcbiAgICAgICAgICAgIGxvYWRpbmdWaW1lb0RlZmVyLnJlc29sdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwkMS5WaW1lbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRpbmdWaW1lb0RlZmVyLmRvbmUoKCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gLy8gTG9jYWxcblxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBqYXJhbGxheFZpZGVvJDEoamFyYWxsYXggPSBnbG9iYWwkMi5qYXJhbGxheCkge1xuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBqYXJhbGxheCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IEphcmFsbGF4ID0gamFyYWxsYXguY29uc3RydWN0b3I7IC8vIGFwcGVuZCB2aWRlbyBhZnRlciB3aGVuIGJsb2NrIHdpbGwgYmUgdmlzaWJsZS5cblxuICBjb25zdCBkZWZPblNjcm9sbCA9IEphcmFsbGF4LnByb3RvdHlwZS5vblNjcm9sbDtcblxuICBKYXJhbGxheC5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgZGVmT25TY3JvbGwuYXBwbHkoc2VsZik7XG4gICAgY29uc3QgaXNSZWFkeSA9ICFzZWxmLmlzVmlkZW9JbnNlcnRlZCAmJiBzZWxmLnZpZGVvICYmICghc2VsZi5vcHRpb25zLnZpZGVvTGF6eUxvYWRpbmcgfHwgc2VsZi5pc0VsZW1lbnRJblZpZXdwb3J0KSAmJiAhc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbygpO1xuXG4gICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgIHNlbGYuaXNWaWRlb0luc2VydGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYudmlkZW8uZ2V0VmlkZW8odmlkZW8gPT4ge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gdmlkZW8ucGFyZW50Tm9kZTtcbiAgICAgICAgc2VsZi5jc3ModmlkZW8sIHtcbiAgICAgICAgICBwb3NpdGlvbjogc2VsZi5pbWFnZS5wb3NpdGlvbixcbiAgICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICAgIHJpZ2h0OiAnMHB4JyxcbiAgICAgICAgICBib3R0b206ICcwcHgnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgbWF4V2lkdGg6ICdub25lJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6ICdub25lJyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCcsXG4gICAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtLG9wYWNpdHknLFxuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICB6SW5kZXg6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLiR2aWRlbyA9IHZpZGVvOyAvLyBhZGQgUG9zdGVyIGF0dHJpYnV0ZSB0byBzZWxmLWhvc3RlZCB2aWRlb1xuXG4gICAgICAgIGlmICgnbG9jYWwnID09PSBzZWxmLnZpZGVvLnR5cGUpIHtcbiAgICAgICAgICBpZiAoc2VsZi5pbWFnZS5zcmMpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgc2VsZi5pbWFnZS5zcmMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pbWFnZS4kaXRlbSAmJiAnSU1HJyA9PT0gc2VsZi5pbWFnZS4kaXRlbS50YWdOYW1lICYmIHNlbGYuaW1hZ2UuJGl0ZW0uc3JjKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIHNlbGYuaW1hZ2UuJGl0ZW0uc3JjKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gaW5zZXJ0IHZpZGVvIHRhZ1xuXG5cbiAgICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZGVvKTsgLy8gcmVtb3ZlIHBhcmVudCB2aWRlbyBlbGVtZW50IChjcmVhdGVkIGJ5IFZpZGVvV29ya2VyKVxuXG4gICAgICAgICRwYXJlbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkcGFyZW50KTsgLy8gY2FsbCBvblZpZGVvSW5zZXJ0IGV2ZW50XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5vblZpZGVvSW5zZXJ0KSB7XG4gICAgICAgICAgc2VsZi5vcHRpb25zLm9uVmlkZW9JbnNlcnQuY2FsbChzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyBjb3ZlciB2aWRlb1xuXG5cbiAgY29uc3QgZGVmQ292ZXJJbWFnZSA9IEphcmFsbGF4LnByb3RvdHlwZS5jb3ZlckltYWdlO1xuXG4gIEphcmFsbGF4LnByb3RvdHlwZS5jb3ZlckltYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IGRlZkNvdmVySW1hZ2UuYXBwbHkoc2VsZik7XG4gICAgY29uc3Qgbm9kZSA9IHNlbGYuaW1hZ2UuJGl0ZW0gPyBzZWxmLmltYWdlLiRpdGVtLm5vZGVOYW1lIDogZmFsc2U7XG5cbiAgICBpZiAoaW1hZ2VEYXRhICYmIHNlbGYudmlkZW8gJiYgbm9kZSAmJiAoJ0lGUkFNRScgPT09IG5vZGUgfHwgJ1ZJREVPJyA9PT0gbm9kZSkpIHtcbiAgICAgIGxldCBoID0gaW1hZ2VEYXRhLmltYWdlLmhlaWdodDtcbiAgICAgIGxldCB3ID0gaCAqIHNlbGYuaW1hZ2Uud2lkdGggLyBzZWxmLmltYWdlLmhlaWdodDtcbiAgICAgIGxldCBtbCA9IChpbWFnZURhdGEuY29udGFpbmVyLndpZHRoIC0gdykgLyAyO1xuICAgICAgbGV0IG10ID0gaW1hZ2VEYXRhLmltYWdlLm1hcmdpblRvcDtcblxuICAgICAgaWYgKGltYWdlRGF0YS5jb250YWluZXIud2lkdGggPiB3KSB7XG4gICAgICAgIHcgPSBpbWFnZURhdGEuY29udGFpbmVyLndpZHRoO1xuICAgICAgICBoID0gdyAqIHNlbGYuaW1hZ2UuaGVpZ2h0IC8gc2VsZi5pbWFnZS53aWR0aDtcbiAgICAgICAgbWwgPSAwO1xuICAgICAgICBtdCArPSAoaW1hZ2VEYXRhLmltYWdlLmhlaWdodCAtIGgpIC8gMjtcbiAgICAgIH0gLy8gYWRkIHZpZGVvIGhlaWdodCBvdmVyIHRoYW4gbmVlZCB0byBoaWRlIGNvbnRyb2xzXG5cblxuICAgICAgaWYgKCdJRlJBTUUnID09PSBub2RlKSB7XG4gICAgICAgIGggKz0gNDAwO1xuICAgICAgICBtdCAtPSAyMDA7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuY3NzKHNlbGYuJHZpZGVvLCB7XG4gICAgICAgIHdpZHRoOiBgJHt3fXB4YCxcbiAgICAgICAgbWFyZ2luTGVmdDogYCR7bWx9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2h9cHhgLFxuICAgICAgICBtYXJnaW5Ub3A6IGAke210fXB4YFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbiAgfTsgLy8gaW5pdCB2aWRlb1xuXG5cbiAgY29uc3QgZGVmSW5pdEltZyA9IEphcmFsbGF4LnByb3RvdHlwZS5pbml0SW1nO1xuXG4gIEphcmFsbGF4LnByb3RvdHlwZS5pbml0SW1nID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSBkZWZJbml0SW1nLmFwcGx5KHNlbGYpO1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMudmlkZW9TcmMpIHtcbiAgICAgIHNlbGYub3B0aW9ucy52aWRlb1NyYyA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LXZpZGVvJykgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLnZpZGVvU3JjKSB7XG4gICAgICBzZWxmLmRlZmF1bHRJbml0SW1nUmVzdWx0ID0gZGVmYXVsdFJlc3VsdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IGRlZkNhbkluaXRQYXJhbGxheCA9IEphcmFsbGF4LnByb3RvdHlwZS5jYW5Jbml0UGFyYWxsYXg7XG5cbiAgSmFyYWxsYXgucHJvdG90eXBlLmNhbkluaXRQYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVmYXVsdFJlc3VsdCA9IGRlZkNhbkluaXRQYXJhbGxheC5hcHBseShzZWxmKTtcblxuICAgIGlmICghc2VsZi5vcHRpb25zLnZpZGVvU3JjKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgICB9IC8vIEluaXQgdmlkZW8gYXBpXG5cblxuICAgIGNvbnN0IHZpZGVvID0gbmV3IFZpZGVvV29ya2VyKHNlbGYub3B0aW9ucy52aWRlb1NyYywge1xuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBsb29wOiBzZWxmLm9wdGlvbnMudmlkZW9Mb29wLFxuICAgICAgc2hvd0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlIaWRkZW46IHRydWUsXG4gICAgICBzdGFydFRpbWU6IHNlbGYub3B0aW9ucy52aWRlb1N0YXJ0VGltZSB8fCAwLFxuICAgICAgZW5kVGltZTogc2VsZi5vcHRpb25zLnZpZGVvRW5kVGltZSB8fCAwLFxuICAgICAgbXV0ZTogc2VsZi5vcHRpb25zLnZpZGVvVm9sdW1lID8gMCA6IDEsXG4gICAgICB2b2x1bWU6IHNlbGYub3B0aW9ucy52aWRlb1ZvbHVtZSB8fCAwXG4gICAgfSk7IC8vIGNhbGwgb25WaWRlb1dvcmtlckluaXQgZXZlbnRcblxuICAgIGlmIChzZWxmLm9wdGlvbnMub25WaWRlb1dvcmtlckluaXQpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5vblZpZGVvV29ya2VySW5pdC5jYWxsKHNlbGYsIHZpZGVvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldERlZmF1bHRJbWFnZSgpIHtcbiAgICAgIGlmIChzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0pIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbTtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gc2V0IGltYWdlIHdpZHRoIGFuZCBoZWlnaHRcblxuICAgICAgICBzZWxmLmNvdmVySW1hZ2UoKTtcbiAgICAgICAgc2VsZi5vblNjcm9sbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aWRlby5pc1ZhbGlkKCkpIHtcbiAgICAgIC8vIEZvcmNlIGVuYWJsZSBwYXJhbGxheC5cbiAgICAgIC8vIFdoZW4gdGhlIHBhcmFsbGF4IGRpc2FibGVkIG9uIG1vYmlsZSBkZXZpY2VzLCB3ZSBzdGlsbCBuZWVkIHRvIGRpc3BsYXkgdmlkZW9zLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vamFyYWxsYXgvaXNzdWVzLzE1OVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgoKSkge1xuICAgICAgICBkZWZhdWx0UmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHNlbGYub3B0aW9ucy50eXBlID0gJ3Njcm9sbCc7XG4gICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZCA9IDE7XG4gICAgICB9IC8vIGlmIHBhcmFsbGF4IHdpbGwgbm90IGJlIGluaXRlZCwgd2UgY2FuIGFkZCB0aHVtYm5haWwgb24gYmFja2dyb3VuZC5cblxuXG4gICAgICBpZiAoIWRlZmF1bHRSZXN1bHQpIHtcbiAgICAgICAgaWYgKCFzZWxmLmRlZmF1bHRJbml0SW1nUmVzdWx0KSB7XG4gICAgICAgICAgdmlkZW8uZ2V0SW1hZ2VVUkwodXJsID0+IHtcbiAgICAgICAgICAgIC8vIHNhdmUgZGVmYXVsdCB1c2VyIHN0eWxlc1xuICAgICAgICAgICAgY29uc3QgY3VyU3R5bGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgICAgaWYgKGN1clN0eWxlKSB7XG4gICAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycsIGN1clN0eWxlKTtcbiAgICAgICAgICAgIH0gLy8gc2V0IG5ldyBiYWNrZ3JvdW5kXG5cblxuICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoXCIke3VybH1cIilgLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gaW5pdCB2aWRlb1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlby5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy52aWRlb1BsYXlPbmx5VmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3Qgb2xkT25TY3JvbGwgPSBzZWxmLm9uU2Nyb2xsO1xuXG4gICAgICAgICAgICBzZWxmLm9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBvbGRPblNjcm9sbC5hcHBseShzZWxmKTtcblxuICAgICAgICAgICAgICBpZiAoIXNlbGYudmlkZW9FcnJvciAmJiAoc2VsZi5vcHRpb25zLnZpZGVvTG9vcCB8fCAhc2VsZi5vcHRpb25zLnZpZGVvTG9vcCAmJiAhc2VsZi52aWRlb0VuZGVkKSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8ub24oJ3N0YXJ0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtID0gc2VsZi5pbWFnZS4kaXRlbTtcbiAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gc2VsZi4kdmlkZW87IC8vIHNldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG5cbiAgICAgICAgICBzZWxmLmltYWdlLndpZHRoID0gc2VsZi52aWRlby52aWRlb1dpZHRoIHx8IDEyODA7XG4gICAgICAgICAgc2VsZi5pbWFnZS5oZWlnaHQgPSBzZWxmLnZpZGVvLnZpZGVvSGVpZ2h0IHx8IDcyMDtcbiAgICAgICAgICBzZWxmLmNvdmVySW1hZ2UoKTtcbiAgICAgICAgICBzZWxmLm9uU2Nyb2xsKCk7IC8vIGhpZGUgaW1hZ2VcblxuICAgICAgICAgIGlmIChzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0pIHtcbiAgICAgICAgICAgIHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLm9uKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICBzZWxmLnZpZGVvRW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMudmlkZW9Mb29wKSB7XG4gICAgICAgICAgICAvLyBzaG93IGRlZmF1bHQgaW1hZ2UgaWYgTG9vcCBkaXNhYmxlZC5cbiAgICAgICAgICAgIHJlc2V0RGVmYXVsdEltYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8ub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGYudmlkZW9FcnJvciA9IHRydWU7IC8vIHNob3cgZGVmYXVsdCBpbWFnZSBpZiB2aWRlbyBsb2FkaW5nIGVycm9yLlxuXG4gICAgICAgICAgcmVzZXREZWZhdWx0SW1hZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYudmlkZW8gPSB2aWRlbzsgLy8gc2V0IGltYWdlIGlmIG5vdCBleGlzdHNcblxuICAgICAgICBpZiAoIXNlbGYuZGVmYXVsdEluaXRJbWdSZXN1bHQpIHtcbiAgICAgICAgICAvLyBzZXQgZW1wdHkgaW1hZ2Ugb24gc2VsZi1ob3N0ZWQgdmlkZW8gaWYgbm90IGRlZmluZWRcbiAgICAgICAgICBzZWxmLmltYWdlLnNyYyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnO1xuXG4gICAgICAgICAgaWYgKCdsb2NhbCcgIT09IHZpZGVvLnR5cGUpIHtcbiAgICAgICAgICAgIHZpZGVvLmdldEltYWdlVVJMKHVybCA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuaW1hZ2UuYmdJbWFnZSA9IGB1cmwoXCIke3VybH1cIilgO1xuICAgICAgICAgICAgICBzZWxmLmluaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICB9OyAvLyBEZXN0cm95IHZpZGVvIHBhcmFsbGF4XG5cblxuICBjb25zdCBkZWZEZXN0cm95ID0gSmFyYWxsYXgucHJvdG90eXBlLmRlc3Ryb3k7XG5cbiAgSmFyYWxsYXgucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtKSB7XG4gICAgICBzZWxmLmltYWdlLiRpdGVtID0gc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtO1xuICAgICAgZGVsZXRlIHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbTtcbiAgICB9XG5cbiAgICBkZWZEZXN0cm95LmFwcGx5KHNlbGYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBqYXJhbGxheEVsZW1lbnQkMShqYXJhbGxheCA9IGdsb2JhbCQyLmphcmFsbGF4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybihcIkphcmFsbGF4IEVsZW1lbnQgZXh0ZW5zaW9uIGlzIERFUFJFQ0FURUQsIHBsZWFzZSwgYXZvaWQgdXNpbmcgaXQuIFdlIHJlY29tbWVuZCB5b3UgbG9vayBhdCBzb21ldGhpbmcgbGlrZSBgbGF4LmpzYCBsaWJyYXJ5IDxodHRwczovL2dpdGh1Yi5jb20vYWxleGZveHkvbGF4LmpzPi4gSXQgaXMgbXVjaCBtb3JlIHBvd2VyZnVsIGFuZCBoYXMgYSBsZXNzIGNvZGUgKGluIGNhc2VzIHdoZW4geW91IGRvbid0IHdhbnQgdG8gYWRkIHBhcmFsbGF4IGJhY2tncm91bmRzKS5cIik7XG5cbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgamFyYWxsYXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBKYXJhbGxheCA9IGphcmFsbGF4LmNvbnN0cnVjdG9yOyAvLyByZWRlZmluZSBkZWZhdWx0IG1ldGhvZHNcblxuICBbJ2luaXRJbWcnLCAnY2FuSW5pdFBhcmFsbGF4JywgJ2luaXQnLCAnZGVzdHJveScsICdjb3ZlckltYWdlJywgJ2lzVmlzaWJsZScsICdvblNjcm9sbCcsICdvblJlc2l6ZSddLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBkZWYgPSBKYXJhbGxheC5wcm90b3R5cGVba2V5XTtcblxuICAgIEphcmFsbGF4LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoJ2luaXRJbWcnID09PSBrZXkgJiYgbnVsbCAhPT0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtZWxlbWVudCcpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy50eXBlID0gJ2VsZW1lbnQnO1xuICAgICAgICBzZWxmLnB1cmVPcHRpb25zLnNwZWVkID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtZWxlbWVudCcpIHx8ICcxMDAnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ2VsZW1lbnQnICE9PSBzZWxmLm9wdGlvbnMudHlwZSkge1xuICAgICAgICByZXR1cm4gZGVmLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnB1cmVPcHRpb25zLnRocmVzaG9sZCA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVzaG9sZCcpIHx8ICcnO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZEFyciA9IGAke3NlbGYucHVyZU9wdGlvbnMuc3BlZWR9YC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gc2VsZi5wdXJlT3B0aW9ucy5zcGVlZCB8fCAwO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkWSA9IHNwZWVkQXJyWzBdID8gcGFyc2VGbG9hdChzcGVlZEFyclswXSkgOiAwO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkWCA9IHNwZWVkQXJyWzFdID8gcGFyc2VGbG9hdChzcGVlZEFyclsxXSkgOiAwO1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkQXJyID0gc2VsZi5wdXJlT3B0aW9ucy50aHJlc2hvbGQuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy50aHJlc2hvbGRZID0gdGhyZXNob2xkQXJyWzBdID8gcGFyc2VGbG9hdCh0aHJlc2hvbGRBcnJbMF0pIDogbnVsbDtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy50aHJlc2hvbGRYID0gdGhyZXNob2xkQXJyWzFdID8gcGFyc2VGbG9hdCh0aHJlc2hvbGRBcnJbMV0pIDogbnVsbDtcbiAgICAgICAgICAgIGRlZi5hcHBseShzZWxmLCBhcmdzKTsgLy8gcmVzdG9yZSBiYWNrZ3JvdW5kIGltYWdlIGlmIGF2YWlsYWJsZS5cblxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNUYWcgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcblxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3R5bGVzVGFnKSB7XG4gICAgICAgICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdpbmFsU3R5bGVzVGFnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ29uUmVzaXplJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkZWZUcmFuc2Zvcm0gPSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHNlbGYuJGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBzZWxmLml0ZW1EYXRhID0ge1xuICAgICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgeTogcmVjdC50b3AgKyBzZWxmLmdldFdpbmRvd0RhdGEoKS55LFxuICAgICAgICAgICAgICB4OiByZWN0LmxlZnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogZGVmVHJhbnNmb3JtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdvblNjcm9sbCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgd25kID0gc2VsZi5nZXRXaW5kb3dEYXRhKCk7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXJQZXJjZW50ID0gKHduZC55ICsgd25kLmhlaWdodCAvIDIgLSBzZWxmLml0ZW1EYXRhLnkgLSBzZWxmLml0ZW1EYXRhLmhlaWdodCAvIDIpIC8gKHduZC5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVZID0gY2VudGVyUGVyY2VudCAqIHNlbGYub3B0aW9ucy5zcGVlZFk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWCA9IGNlbnRlclBlcmNlbnQgKiBzZWxmLm9wdGlvbnMuc3BlZWRYO1xuICAgICAgICAgICAgbGV0IG15ID0gbW92ZVk7XG4gICAgICAgICAgICBsZXQgbXggPSBtb3ZlWDtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBzZWxmLm9wdGlvbnMudGhyZXNob2xkWSAmJiBtb3ZlWSA+IHNlbGYub3B0aW9ucy50aHJlc2hvbGRZKSBteSA9IDA7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2VsZi5vcHRpb25zLnRocmVzaG9sZFggJiYgbW92ZVggPiBzZWxmLm9wdGlvbnMudGhyZXNob2xkWCkgbXggPSAwO1xuICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke214fXB4LCR7bXl9cHgsMClgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdpbml0SW1nJzpcbiAgICAgICAgY2FzZSAnaXNWaXNpYmxlJzpcbiAgICAgICAgY2FzZSAnY292ZXJJbWFnZSc6XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICB9KTtcbn1cblxuY29uc3QgamFyYWxsYXggPSBqYXJhbGxheCQxO1xuY29uc3QgamFyYWxsYXhWaWRlbyA9IGZ1bmN0aW9uIGphcmFsbGF4VmlkZW8oKSB7XG4gIHJldHVybiBqYXJhbGxheFZpZGVvJDEoamFyYWxsYXgpO1xufTtcbmNvbnN0IGphcmFsbGF4RWxlbWVudCA9IGZ1bmN0aW9uIGphcmFsbGF4RWxlbWVudCgpIHtcbiAgcmV0dXJuIGphcmFsbGF4RWxlbWVudCQxKGphcmFsbGF4KTtcbn07XG5cbmV4cG9ydCB7IGphcmFsbGF4LCBqYXJhbGxheEVsZW1lbnQsIGphcmFsbGF4VmlkZW8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWphcmFsbGF4LmVzbS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWAke2lkfSAke2NvdW50fWA7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGtleT0+e3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT9gQG1lZGlhICR7b2JqLm1lZGlhfSB7JHtvYmouY3NzfX1gOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9YFxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJHtidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpfSAqL2A7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9KCk9PntyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz0obGlzdCxvcHRpb25zKT0+e29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qYXJhbGxheCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4uamFyYWxsYXggPiAuamFyYWxsYXgtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmphcmFsbGF4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5qYXJhbGxheCA+IC5qYXJhbGxheC1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=