(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

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


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
/*!***********************************!*\
  !*** (webpack)/webpack/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 149:
/***/ (function(module) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(149);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9KYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2phcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzPzEwYjciLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJqYXJhbGxheFZpZGVvIiwiSmFyYWxsYXgiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiJGVsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImphcmFsbGF4IiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7O0FBQ0FBLDhEQUFhO0FBRUUsU0FBU0MsUUFBVCxPQUEwRDtBQUFBOztBQUFBLDRCQUF0Q0MsU0FBc0M7QUFBQSxNQUF0Q0EsU0FBc0MsK0JBQTFCLEVBQTBCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEIsQ0FEdUUsQ0FHdkU7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLEdBQUcsQ0FBQ0csT0FBUixFQUFpQjtBQUNmQywrREFBUSxDQUFDSixHQUFHLENBQUNHLE9BQUwsRUFBY0osS0FBZCxDQUFSO0FBQ0QsS0FIYSxDQUtkOzs7QUFDQSxXQUFPLFNBQVNNLE9BQVQsR0FBbUI7QUFDeEIsVUFBSUwsR0FBRyxDQUFDRyxPQUFSLEVBQWlCO0FBQ2ZDLGlFQUFRLENBQUNKLEdBQUcsQ0FBQ0csT0FBTCxFQUFjLFNBQWQsQ0FBUjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FKdUUsQ0FpQnZFOztBQUNBRCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixHQUFHLENBQUNHLE9BQVIsRUFBaUI7QUFDZkMsK0RBQVEsQ0FBQ0osR0FBRyxDQUFDRyxPQUFMLEVBQWMsU0FBZCxDQUFSO0FBQ0FDLCtEQUFRLENBQUNKLEdBQUcsQ0FBQ0csT0FBTCxFQUFjSixLQUFkLENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDQSxLQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUssT0FBRyxFQUFFQyxHQUFWO0FBQWUsYUFBUyxxQkFBY0gsU0FBZCxDQUF4QjtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBOUJ1QkYsUTs7S0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnhCLFVBQVUsbUJBQU8sQ0FBQyx5TUFBOEY7QUFDaEgsMEJBQTBCLG1CQUFPLENBQUMsOFNBQWdKOztBQUVsTDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSw4U0FBZ0o7QUFDdEo7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4U0FBZ0o7O0FBRTFLOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjLFNBQVMsZUFBZSxVQUFVO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQ0FBaUM7QUFDakMscUNBQXFDLGdCQUFnQjs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsbUZBQW1GOztBQUVuRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0Esc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxtRUFBbUUsZ0JBQWdCO0FBQ25GLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0NBQWdDO0FBQ3ZDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWU7QUFDM0UsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTCwrQ0FBK0M7O0FBRS9DO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFOztBQUV4RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTCw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCLG9CQUFvQixTQUFTO0FBQzdCLGlEQUFpRCxVQUFVO0FBQzNELGdCQUFnQixXQUFXO0FBQzNCLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkpBQTJKOztBQUUzSjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFOztBQUV6RTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsa0NBQWtDLE1BQU07QUFDeEMsS0FBSzs7O0FBR0w7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsVUFBVTtBQUNwRDs7QUFFQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlDQUFpQztBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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QVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGphcmFsbGF4LCBqYXJhbGxheFZpZGVvIH0gZnJvbSAnamFyYWxsYXgnO1xyXG5pbXBvcnQgJ2phcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzJztcclxuXHJcbi8vIE9wdGlvbmFsIHZpZGVvIGV4dGVuc2lvblxyXG5qYXJhbGxheFZpZGVvKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKYXJhbGxheCh7IGNsYXNzTmFtZSA9ICcnLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0ICRlbCA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBJbml0IEphcmFsbGF4LlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoJGVsLmN1cnJlbnQpIHtcclxuICAgICAgamFyYWxsYXgoJGVsLmN1cnJlbnQsIHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXN0cm95IEphcmFsbGF4LlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgIGlmICgkZWwuY3VycmVudCkge1xyXG4gICAgICAgIGphcmFsbGF4KCRlbC5jdXJyZW50LCAnZGVzdHJveScpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gVXBkYXRlIG9wdGlvbnMuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICgkZWwuY3VycmVudCkge1xyXG4gICAgICBqYXJhbGxheCgkZWwuY3VycmVudCwgJ2Rlc3Ryb3knKTtcclxuICAgICAgamFyYWxsYXgoJGVsLmN1cnJlbnQsIHByb3BzKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXskZWx9IGNsYXNzTmFtZT17YGphcmFsbGF4ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9qYXJhbGxheC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9qYXJhbGxheC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vamFyYWxsYXguY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIVxuICogSmFyYWxsYXggdjIuMC4zIChodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheClcbiAqIENvcHlyaWdodCAyMDIyIG5LIDxodHRwczovL25rZGV2LmluZm8+XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbmZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gIGlmICgnY29tcGxldGUnID09PSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8ICdpbnRlcmFjdGl2ZScgPT09IGRvY3VtZW50LnJlYWR5U3RhdGUpIHtcbiAgICAvLyBBbHJlYWR5IHJlYWR5IG9yIGludGVyYWN0aXZlLCBleGVjdXRlIGNhbGxiYWNrXG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5sZXQgd2luJDE7XG5cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdpbmRvdykge1xuICB3aW4kMSA9IHdpbmRvdztcbn0gZWxzZSBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBnbG9iYWwpIHtcbiAgd2luJDEgPSBnbG9iYWw7XG59IGVsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygc2VsZikge1xuICB3aW4kMSA9IHNlbGY7XG59IGVsc2Uge1xuICB3aW4kMSA9IHt9O1xufVxuXG52YXIgZ2xvYmFsJDIgPSB3aW4kMTtcblxuY29uc3Qge1xuICBuYXZpZ2F0b3Jcbn0gPSBnbG9iYWwkMjtcbmNvbnN0IGlzTW9iaWxlID0gLyojX19QVVJFX18qLyAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5sZXQgJGRldmljZUhlbHBlcjtcbi8qKlxuICogVGhlIG1vc3QgcG9wdWxhciBtb2JpbGUgYnJvd3NlcnMgY2hhbmdlcyBoZWlnaHQgYWZ0ZXIgcGFnZSBzY3JvbGwgYW5kIHRoaXMgZ2VuZXJhdGVzIGltYWdlIGp1bXBpbmcuXG4gKiBXZSBjYW4gZml4IGl0IHVzaW5nIHRoaXMgd29ya2Fyb3VuZCB3aXRoIHZoIHVuaXRzLlxuICovXG5cbmZ1bmN0aW9uIGdldERldmljZUhlaWdodCgpIHtcbiAgaWYgKCEkZGV2aWNlSGVscGVyICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAkZGV2aWNlSGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGRldmljZUhlbHBlci5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOiBmaXhlZDsgdG9wOiAtOTk5OXB4OyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMHZoOyB3aWR0aDogMDsnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJGRldmljZUhlbHBlcik7XG4gIH1cblxuICByZXR1cm4gKCRkZXZpY2VIZWxwZXIgPyAkZGV2aWNlSGVscGVyLmNsaWVudEhlaWdodCA6IDApIHx8IGdsb2JhbCQyLmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG59IC8vIFdpbmRvdyBoZWlnaHQgZGF0YVxuXG5cbmxldCB3bmRIO1xuXG5mdW5jdGlvbiB1cGRhdGVXbmRWYXJzKCkge1xuICBpZiAoaXNNb2JpbGUpIHtcbiAgICB3bmRIID0gZ2V0RGV2aWNlSGVpZ2h0KCk7XG4gIH0gZWxzZSB7XG4gICAgd25kSCA9IGdsb2JhbCQyLmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cbn1cblxudXBkYXRlV25kVmFycygpO1xuZ2xvYmFsJDIuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlV25kVmFycyk7XG5nbG9iYWwkMi5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVduZFZhcnMpO1xuZ2xvYmFsJDIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHVwZGF0ZVduZFZhcnMpO1xucmVhZHkoKCkgPT4ge1xuICB1cGRhdGVXbmRWYXJzKCk7XG59KTsgLy8gbGlzdCB3aXRoIGFsbCBqYXJhbGxheCBpbnN0YW5jZXNcbi8vIG5lZWQgdG8gcmVuZGVyIGFsbCBpbiBvbmUgc2Nyb2xsL3Jlc2l6ZSBldmVudFxuXG5jb25zdCBqYXJhbGxheExpc3QgPSBbXTsgLy8gZ2V0IGFsbCBwYXJlbnRzIG9mIHRoZSBlbGVtZW50LlxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGVsZW0pIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdO1xuXG4gIHdoaWxlIChudWxsICE9PSBlbGVtLnBhcmVudEVsZW1lbnQpIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKDEgPT09IGVsZW0ubm9kZVR5cGUpIHtcbiAgICAgIHBhcmVudHMucHVzaChlbGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG4gIGlmICghamFyYWxsYXhMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGphcmFsbGF4TGlzdC5mb3JFYWNoKChkYXRhLCBrKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaW5zdGFuY2UsXG4gICAgICBvbGREYXRhXG4gICAgfSA9IGRhdGE7XG4gICAgY29uc3QgY2xpZW50UmVjdCA9IGluc3RhbmNlLiRpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICB3aWR0aDogY2xpZW50UmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogY2xpZW50UmVjdC5oZWlnaHQsXG4gICAgICB0b3A6IGNsaWVudFJlY3QudG9wLFxuICAgICAgYm90dG9tOiBjbGllbnRSZWN0LmJvdHRvbSxcbiAgICAgIHduZFc6IGdsb2JhbCQyLmlubmVyV2lkdGgsXG4gICAgICB3bmRIXG4gICAgfTtcbiAgICBjb25zdCBpc1Jlc2l6ZWQgPSAhb2xkRGF0YSB8fCBvbGREYXRhLnduZFcgIT09IG5ld0RhdGEud25kVyB8fCBvbGREYXRhLnduZEggIT09IG5ld0RhdGEud25kSCB8fCBvbGREYXRhLndpZHRoICE9PSBuZXdEYXRhLndpZHRoIHx8IG9sZERhdGEuaGVpZ2h0ICE9PSBuZXdEYXRhLmhlaWdodDtcbiAgICBjb25zdCBpc1Njcm9sbGVkID0gaXNSZXNpemVkIHx8ICFvbGREYXRhIHx8IG9sZERhdGEudG9wICE9PSBuZXdEYXRhLnRvcCB8fCBvbGREYXRhLmJvdHRvbSAhPT0gbmV3RGF0YS5ib3R0b207XG4gICAgamFyYWxsYXhMaXN0W2tdLm9sZERhdGEgPSBuZXdEYXRhO1xuXG4gICAgaWYgKGlzUmVzaXplZCkge1xuICAgICAgaW5zdGFuY2Uub25SZXNpemUoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTY3JvbGxlZCkge1xuICAgICAgaW5zdGFuY2Uub25TY3JvbGwoKTtcbiAgICB9XG4gIH0pO1xuICBnbG9iYWwkMi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUGFyYWxsYXgpO1xufVxuXG5sZXQgaW5zdGFuY2VJRCA9IDA7IC8vIEphcmFsbGF4IGNsYXNzXG5cbmNsYXNzIEphcmFsbGF4IHtcbiAgY29uc3RydWN0b3IoaXRlbSwgdXNlck9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmluc3RhbmNlSUQgPSBpbnN0YW5jZUlEO1xuICAgIGluc3RhbmNlSUQgKz0gMTtcbiAgICBzZWxmLiRpdGVtID0gaXRlbTtcbiAgICBzZWxmLmRlZmF1bHRzID0ge1xuICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICAvLyB0eXBlIG9mIHBhcmFsbGF4OiBzY3JvbGwsIHNjYWxlLCBvcGFjaXR5LCBzY2FsZS1vcGFjaXR5LCBzY3JvbGwtb3BhY2l0eVxuICAgICAgc3BlZWQ6IDAuNSxcbiAgICAgIC8vIHN1cHBvcnRlZCB2YWx1ZSBmcm9tIC0xIHRvIDJcbiAgICAgIGltZ1NyYzogbnVsbCxcbiAgICAgIGltZ0VsZW1lbnQ6ICcuamFyYWxsYXgtaW1nJyxcbiAgICAgIGltZ1NpemU6ICdjb3ZlcicsXG4gICAgICBpbWdQb3NpdGlvbjogJzUwJSA1MCUnLFxuICAgICAgaW1nUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgIC8vIHN1cHBvcnRlZCBvbmx5IGZvciBiYWNrZ3JvdW5kLCBub3QgZm9yIDxpbWc+IHRhZ1xuICAgICAga2VlcEltZzogZmFsc2UsXG4gICAgICAvLyBrZWVwIDxpbWc+IHRhZyBpbiBpdCdzIGRlZmF1bHQgcGxhY2VcbiAgICAgIGVsZW1lbnRJblZpZXdwb3J0OiBudWxsLFxuICAgICAgekluZGV4OiAtMTAwLFxuICAgICAgZGlzYWJsZVBhcmFsbGF4OiBmYWxzZSxcbiAgICAgIGRpc2FibGVWaWRlbzogZmFsc2UsXG4gICAgICAvLyB2aWRlb1xuICAgICAgdmlkZW9TcmM6IG51bGwsXG4gICAgICB2aWRlb1N0YXJ0VGltZTogMCxcbiAgICAgIHZpZGVvRW5kVGltZTogMCxcbiAgICAgIHZpZGVvVm9sdW1lOiAwLFxuICAgICAgdmlkZW9Mb29wOiB0cnVlLFxuICAgICAgdmlkZW9QbGF5T25seVZpc2libGU6IHRydWUsXG4gICAgICB2aWRlb0xhenlMb2FkaW5nOiB0cnVlLFxuICAgICAgLy8gZXZlbnRzXG4gICAgICBvblNjcm9sbDogbnVsbCxcbiAgICAgIC8vIGZ1bmN0aW9uKGNhbGN1bGF0aW9ucykge31cbiAgICAgIG9uSW5pdDogbnVsbCxcbiAgICAgIC8vIGZ1bmN0aW9uKCkge31cbiAgICAgIG9uRGVzdHJveTogbnVsbCxcbiAgICAgIC8vIGZ1bmN0aW9uKCkge31cbiAgICAgIG9uQ292ZXJJbWFnZTogbnVsbCAvLyBmdW5jdGlvbigpIHt9XG5cbiAgICB9OyAvLyBwcmVwYXJlIGRhdGEtb3B0aW9uc1xuXG4gICAgY29uc3QgZGF0YU9wdGlvbnMgPSBzZWxmLiRpdGVtLmRhdGFzZXQgfHwge307XG4gICAgY29uc3QgcHVyZURhdGFPcHRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXMoZGF0YU9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGxvd2VDYXNlT3B0aW9uID0ga2V5LnN1YnN0cigwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcblxuICAgICAgaWYgKGxvd2VDYXNlT3B0aW9uICYmICd1bmRlZmluZWQnICE9PSB0eXBlb2Ygc2VsZi5kZWZhdWx0c1tsb3dlQ2FzZU9wdGlvbl0pIHtcbiAgICAgICAgcHVyZURhdGFPcHRpb25zW2xvd2VDYXNlT3B0aW9uXSA9IGRhdGFPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5vcHRpb25zID0gc2VsZi5leHRlbmQoe30sIHNlbGYuZGVmYXVsdHMsIHB1cmVEYXRhT3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICAgIHNlbGYucHVyZU9wdGlvbnMgPSBzZWxmLmV4dGVuZCh7fSwgc2VsZi5vcHRpb25zKTsgLy8gcHJlcGFyZSAndHJ1ZScgYW5kICdmYWxzZScgc3RyaW5ncyB0byBib29sZWFuXG5cbiAgICBPYmplY3Qua2V5cyhzZWxmLm9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICgndHJ1ZScgPT09IHNlbGYub3B0aW9uc1trZXldKSB7XG4gICAgICAgIHNlbGYub3B0aW9uc1trZXldID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoJ2ZhbHNlJyA9PT0gc2VsZi5vcHRpb25zW2tleV0pIHtcbiAgICAgICAgc2VsZi5vcHRpb25zW2tleV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTsgLy8gZml4IHNwZWVkIG9wdGlvbiBbLTEuMCwgMi4wXVxuXG4gICAgc2VsZi5vcHRpb25zLnNwZWVkID0gTWF0aC5taW4oMiwgTWF0aC5tYXgoLTEsIHBhcnNlRmxvYXQoc2VsZi5vcHRpb25zLnNwZWVkKSkpOyAvLyBwcmVwYXJlIGRpc2FibGVQYXJhbGxheCBjYWxsYmFja1xuXG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCkge1xuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9IG5ldyBSZWdFeHAoc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIGNvbnN0IGRpc2FibGVQYXJhbGxheFJlZ2V4cCA9IHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXg7XG5cbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAoKSA9PiBkaXNhYmxlUGFyYWxsYXhSZWdleHAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG5cbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXggPSAoKSA9PiBmYWxzZTtcbiAgICB9IC8vIHByZXBhcmUgZGlzYWJsZVZpZGVvIGNhbGxiYWNrXG5cblxuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8pIHtcbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSBuZXcgUmVnRXhwKHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8pO1xuICAgIH1cblxuICAgIGlmIChzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBjb25zdCBkaXNhYmxlVmlkZW9SZWdleHAgPSBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvO1xuXG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gKCkgPT4gZGlzYWJsZVZpZGVvUmVnZXhwLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKSB7XG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvID0gKCkgPT4gZmFsc2U7XG4gICAgfSAvLyBjdXN0b20gZWxlbWVudCB0byBjaGVjayBpZiBwYXJhbGxheCBpbiB2aWV3cG9ydFxuXG5cbiAgICBsZXQgZWxlbWVudEluVlAgPSBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQ7IC8vIGdldCBmaXJzdCBpdGVtIGZyb20gYXJyYXlcblxuICAgIGlmIChlbGVtZW50SW5WUCAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIGVsZW1lbnRJblZQICYmICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZWxlbWVudEluVlAubGVuZ3RoKSB7XG4gICAgICBbZWxlbWVudEluVlBdID0gZWxlbWVudEluVlA7XG4gICAgfSAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuXG5cbiAgICBpZiAoIShlbGVtZW50SW5WUCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50SW5WUCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0ID0gZWxlbWVudEluVlA7XG4gICAgc2VsZi5pbWFnZSA9IHtcbiAgICAgIHNyYzogc2VsZi5vcHRpb25zLmltZ1NyYyB8fCBudWxsLFxuICAgICAgJGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIHVzZUltZ1RhZzogZmFsc2UsXG4gICAgICAvLyAxLiBQb3NpdGlvbiBmaXhlZCBpcyBuZWVkZWQgZm9yIHRoZSBtb3N0IG9mIGJyb3dzZXJzIGJlY2F1c2UgYWJzb2x1dGUgcG9zaXRpb24gaGF2ZSBnbGl0Y2hlc1xuICAgICAgLy8gMi4gT24gTWFjT1Mgd2l0aCBzbW9vdGggc2Nyb2xsIHRoZXJlIGlzIGEgaHVnZSBsYWdzIHdpdGggYWJzb2x1dGUgcG9zaXRpb24gLSBodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9pc3N1ZXMvNzVcbiAgICAgIC8vIDMuIFByZXZpb3VzbHkgdXNlZCAnYWJzb2x1dGUnIGZvciBtb2JpbGUgZGV2aWNlcy4gQnV0IHdlIHJlLXRlc3RlZCBvbiBpUGhvbmUgMTIgYW5kICdmaXhlZCcgcG9zaXRpb24gaXMgd29ya2luZyBiZXR0ZXIsIHRoZW4gJ2Fic29sdXRlJywgc28gZm9yIG5vdyBwb3NpdGlvbiBpcyBhbHdheXMgJ2ZpeGVkJ1xuICAgICAgcG9zaXRpb246ICdmaXhlZCdcbiAgICB9O1xuXG4gICAgaWYgKHNlbGYuaW5pdEltZygpICYmIHNlbGYuY2FuSW5pdFBhcmFsbGF4KCkpIHtcbiAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH1cbiAgfSAvLyBhZGQgc3R5bGVzIHRvIGVsZW1lbnRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIGNzcyhlbCwgc3R5bGVzKSB7XG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2Ygc3R5bGVzKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsJDIuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZXMpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZWwuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfSAvLyBFeHRlbmQgbGlrZSBqUXVlcnkuZXh0ZW5kXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBleHRlbmQob3V0LCAuLi5hcmdzKSB7XG4gICAgb3V0ID0gb3V0IHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoIWFyZ3NbaV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhhcmdzW2ldKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIG91dFtrZXldID0gYXJnc1tpXVtrZXldO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfSAvLyBnZXQgd2luZG93IHNpemUgYW5kIHNjcm9sbCBwb3NpdGlvbi4gVXNlZnVsIGZvciBleHRlbnNpb25zXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBnZXRXaW5kb3dEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZ2xvYmFsJDIuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHduZEgsXG4gICAgICB5OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfSAvLyBKYXJhbGxheCBmdW5jdGlvbnNcblxuXG4gIGluaXRJbWcoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGZpbmQgaW1hZ2UgZWxlbWVudFxuXG4gICAgbGV0ICRpbWdFbGVtZW50ID0gc2VsZi5vcHRpb25zLmltZ0VsZW1lbnQ7XG5cbiAgICBpZiAoJGltZ0VsZW1lbnQgJiYgJ3N0cmluZycgPT09IHR5cGVvZiAkaW1nRWxlbWVudCkge1xuICAgICAgJGltZ0VsZW1lbnQgPSBzZWxmLiRpdGVtLnF1ZXJ5U2VsZWN0b3IoJGltZ0VsZW1lbnQpO1xuICAgIH0gLy8gY2hlY2sgaWYgZG9tIGVsZW1lbnRcblxuXG4gICAgaWYgKCEoJGltZ0VsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgaWYgKHNlbGYub3B0aW9ucy5pbWdTcmMpIHtcbiAgICAgICAgJGltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgJGltZ0VsZW1lbnQuc3JjID0gc2VsZi5vcHRpb25zLmltZ1NyYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRpbWdFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJGltZ0VsZW1lbnQpIHtcbiAgICAgIGlmIChzZWxmLm9wdGlvbnMua2VlcEltZykge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gJGltZ0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9ICRpbWdFbGVtZW50O1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtUGFyZW50ID0gJGltZ0VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5pbWFnZS51c2VJbWdUYWcgPSB0cnVlO1xuICAgIH0gLy8gdHJ1ZSBpZiB0aGVyZSBpcyBpbWcgdGFnXG5cblxuICAgIGlmIChzZWxmLmltYWdlLiRpdGVtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIGdldCBpbWFnZSBzcmNcblxuXG4gICAgaWYgKG51bGwgPT09IHNlbGYuaW1hZ2Uuc3JjKSB7XG4gICAgICBzZWxmLmltYWdlLnNyYyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnO1xuICAgICAgc2VsZi5pbWFnZS5iZ0ltYWdlID0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gISghc2VsZi5pbWFnZS5iZ0ltYWdlIHx8ICdub25lJyA9PT0gc2VsZi5pbWFnZS5iZ0ltYWdlKTtcbiAgfVxuXG4gIGNhbkluaXRQYXJhbGxheCgpIHtcbiAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5kaXNhYmxlUGFyYWxsYXgoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICBsZXQgaW1hZ2VTdHlsZXMgPSB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB0cmFuc2Zvcm1TdHlsZTogJ3ByZXNlcnZlLTNkJyxcbiAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtLG9wYWNpdHknXG4gICAgfTtcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmtlZXBJbWcpIHtcbiAgICAgIC8vIHNhdmUgZGVmYXVsdCB1c2VyIHN0eWxlc1xuICAgICAgY29uc3QgY3VyU3R5bGUgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgaWYgKGN1clN0eWxlKSB7XG4gICAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycsIGN1clN0eWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICAgIGNvbnN0IGN1ckltZ1N0eWxlID0gc2VsZi5pbWFnZS4kaXRlbS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgaWYgKGN1ckltZ1N0eWxlKSB7XG4gICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VySW1nU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBzZXQgcmVsYXRpdmUgcG9zaXRpb24gYW5kIHotaW5kZXggdG8gdGhlIHBhcmVudFxuXG5cbiAgICBpZiAoJ3N0YXRpYycgPT09IHNlbGYuY3NzKHNlbGYuJGl0ZW0sICdwb3NpdGlvbicpKSB7XG4gICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJ2F1dG8nID09PSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAnei1pbmRleCcpKSB7XG4gICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgIHpJbmRleDogMFxuICAgICAgfSk7XG4gICAgfSAvLyBjb250YWluZXIgZm9yIHBhcmFsbGF4IGltYWdlXG5cblxuICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwgY29udGFpbmVyU3R5bGVzKTtcbiAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRjb250YWluZXIsIHtcbiAgICAgICd6LWluZGV4Jzogc2VsZi5vcHRpb25zLnpJbmRleFxuICAgIH0pOyAvLyBpdCB3aWxsIHJlbW92ZSBzb21lIGltYWdlIG92ZXJsYXBwaW5nXG4gICAgLy8gb3ZlcmxhcHBpbmcgb2NjdXIgZHVlIHRvIGFuIGltYWdlIHBvc2l0aW9uIGZpeGVkIGluc2lkZSBhYnNvbHV0ZSBwb3NpdGlvbiBlbGVtZW50XG4gICAgLy8gbmVlZGVkIG9ubHkgd2hlbiBiYWNrZ3JvdW5kIGluIGZpeGVkIHBvc2l0aW9uXG5cbiAgICBpZiAoJ2ZpeGVkJyA9PT0gdGhpcy5pbWFnZS5wb3NpdGlvbikge1xuICAgICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kY29udGFpbmVyLCB7XG4gICAgICAgICctd2Via2l0LWNsaXAtcGF0aCc6ICdwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSknLFxuICAgICAgICAnY2xpcC1wYXRoJzogJ3BvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYGphcmFsbGF4LWNvbnRhaW5lci0ke3NlbGYuaW5zdGFuY2VJRH1gKTtcbiAgICBzZWxmLiRpdGVtLmFwcGVuZENoaWxkKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcik7IC8vIHVzZSBpbWcgdGFnXG5cbiAgICBpZiAoc2VsZi5pbWFnZS51c2VJbWdUYWcpIHtcbiAgICAgIGltYWdlU3R5bGVzID0gc2VsZi5leHRlbmQoe1xuICAgICAgICAnb2JqZWN0LWZpdCc6IHNlbGYub3B0aW9ucy5pbWdTaXplLFxuICAgICAgICAnb2JqZWN0LXBvc2l0aW9uJzogc2VsZi5vcHRpb25zLmltZ1Bvc2l0aW9uLFxuICAgICAgICAnbWF4LXdpZHRoJzogJ25vbmUnXG4gICAgICB9LCBjb250YWluZXJTdHlsZXMsIGltYWdlU3R5bGVzKTsgLy8gdXNlIGRpdiB3aXRoIGJhY2tncm91bmQgaW1hZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBpZiAoc2VsZi5pbWFnZS5zcmMpIHtcbiAgICAgICAgaW1hZ2VTdHlsZXMgPSBzZWxmLmV4dGVuZCh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBzZWxmLm9wdGlvbnMuaW1nUG9zaXRpb24sXG4gICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6IHNlbGYub3B0aW9ucy5pbWdTaXplLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6IHNlbGYub3B0aW9ucy5pbWdSZXBlYXQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBzZWxmLmltYWdlLmJnSW1hZ2UgfHwgYHVybChcIiR7c2VsZi5pbWFnZS5zcmN9XCIpYFxuICAgICAgICB9LCBjb250YWluZXJTdHlsZXMsIGltYWdlU3R5bGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJ29wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8IDEgPT09IHNlbGYub3B0aW9ucy5zcGVlZCkge1xuICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgfSAvLyAxLiBDaGVjayBpZiBvbmUgb2YgcGFyZW50cyBoYXZlIHRyYW5zZm9ybSBzdHlsZSAod2l0aG91dCB0aGlzIGNoZWNrLCBzY3JvbGwgdHJhbnNmb3JtIHdpbGwgYmUgaW52ZXJ0ZWQgaWYgdXNlZCBwYXJhbGxheCB3aXRoIHBvc2l0aW9uIGZpeGVkKVxuICAgIC8vICAgIGRpc2N1c3Npb24gLSBodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9pc3N1ZXMvOVxuICAgIC8vIDIuIENoZWNrIGlmIHBhcmVudHMgaGF2ZSBvdmVyZmxvdyBzY3JvbGxcblxuXG4gICAgaWYgKCdmaXhlZCcgPT09IHNlbGYuaW1hZ2UucG9zaXRpb24pIHtcbiAgICAgIGNvbnN0ICRwYXJlbnRzID0gZ2V0UGFyZW50cyhzZWxmLiRpdGVtKS5maWx0ZXIoZWwgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBnbG9iYWwkMi5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgY29uc3QgcGFyZW50VHJhbnNmb3JtID0gc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddIHx8IHN0eWxlc1snLW1vei10cmFuc2Zvcm0nXSB8fCBzdHlsZXMudHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBvdmVyZmxvd1JlZ2V4ID0gLyhhdXRvfHNjcm9sbCkvO1xuICAgICAgICByZXR1cm4gcGFyZW50VHJhbnNmb3JtICYmICdub25lJyAhPT0gcGFyZW50VHJhbnNmb3JtIHx8IG92ZXJmbG93UmVnZXgudGVzdChzdHlsZXMub3ZlcmZsb3cgKyBzdHlsZXNbJ292ZXJmbG93LXknXSArIHN0eWxlc1snb3ZlcmZsb3cteCddKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5pbWFnZS5wb3NpdGlvbiA9ICRwYXJlbnRzLmxlbmd0aCA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnO1xuICAgIH0gLy8gYWRkIHBvc2l0aW9uIHRvIHBhcmFsbGF4IGJsb2NrXG5cblxuICAgIGltYWdlU3R5bGVzLnBvc2l0aW9uID0gc2VsZi5pbWFnZS5wb3NpdGlvbjsgLy8gaW5zZXJ0IHBhcmFsbGF4IGltYWdlXG5cbiAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRpdGVtLCBpbWFnZVN0eWxlcyk7XG4gICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuaW1hZ2UuJGl0ZW0pOyAvLyBzZXQgaW5pdGlhbCBwb3NpdGlvbiBhbmQgc2l6ZVxuXG4gICAgc2VsZi5vblJlc2l6ZSgpO1xuICAgIHNlbGYub25TY3JvbGwodHJ1ZSk7IC8vIGNhbGwgb25Jbml0IGV2ZW50XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLm9uSW5pdCkge1xuICAgICAgc2VsZi5vcHRpb25zLm9uSW5pdC5jYWxsKHNlbGYpO1xuICAgIH0gLy8gcmVtb3ZlIGRlZmF1bHQgdXNlciBiYWNrZ3JvdW5kXG5cblxuICAgIGlmICgnbm9uZScgIT09IHNlbGYuY3NzKHNlbGYuJGl0ZW0sICdiYWNrZ3JvdW5kLWltYWdlJykpIHtcbiAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAnbm9uZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYuYWRkVG9QYXJhbGxheExpc3QoKTtcbiAgfSAvLyBhZGQgdG8gcGFyYWxsYXggaW5zdGFuY2VzIGxpc3RcblxuXG4gIGFkZFRvUGFyYWxsYXhMaXN0KCkge1xuICAgIGphcmFsbGF4TGlzdC5wdXNoKHtcbiAgICAgIGluc3RhbmNlOiB0aGlzXG4gICAgfSk7XG5cbiAgICBpZiAoMSA9PT0gamFyYWxsYXhMaXN0Lmxlbmd0aCkge1xuICAgICAgZ2xvYmFsJDIucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgICB9XG4gIH0gLy8gcmVtb3ZlIGZyb20gcGFyYWxsYXggaW5zdGFuY2VzIGxpc3RcblxuXG4gIHJlbW92ZUZyb21QYXJhbGxheExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgamFyYWxsYXhMaXN0LmZvckVhY2goKGRhdGEsIGtleSkgPT4ge1xuICAgICAgaWYgKGRhdGEuaW5zdGFuY2UuaW5zdGFuY2VJRCA9PT0gc2VsZi5pbnN0YW5jZUlEKSB7XG4gICAgICAgIGphcmFsbGF4TGlzdC5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5yZW1vdmVGcm9tUGFyYWxsYXhMaXN0KCk7IC8vIHJldHVybiBzdHlsZXMgb24gY29udGFpbmVyIGFzIGJlZm9yZSBqYXJhbGxheCBpbml0XG5cbiAgICBjb25zdCBvcmlnaW5hbFN0eWxlc1RhZyA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpO1xuICAgIHNlbGYuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpOyAvLyBudWxsIG9jY3VycyBpZiB0aGVyZSBpcyBubyBzdHlsZSB0YWcgYmVmb3JlIGphcmFsbGF4IGluaXRcblxuICAgIGlmICghb3JpZ2luYWxTdHlsZXNUYWcpIHtcbiAgICAgIHNlbGYuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuaW1hZ2UudXNlSW1nVGFnKSB7XG4gICAgICAvLyByZXR1cm4gc3R5bGVzIG9uIGltZyB0YWcgYXMgYmVmb3JlIGphcmFsbGF4IGluaXRcbiAgICAgIGNvbnN0IG9yaWdpbmFsU3R5bGVzSW1nVGFnID0gc2VsZi5pbWFnZS4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG4gICAgICBzZWxmLmltYWdlLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTsgLy8gbnVsbCBvY2N1cnMgaWYgdGhlcmUgaXMgbm8gc3R5bGUgdGFnIGJlZm9yZSBqYXJhbGxheCBpbml0XG5cbiAgICAgIGlmICghb3JpZ2luYWxTdHlsZXNJbWdUYWcpIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyk7XG4gICAgICB9IC8vIG1vdmUgaW1nIHRhZyB0byBpdHMgZGVmYXVsdCBwb3NpdGlvblxuXG5cbiAgICAgIGlmIChzZWxmLmltYWdlLiRpdGVtUGFyZW50KSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW1QYXJlbnQuYXBwZW5kQ2hpbGQoc2VsZi5pbWFnZS4kaXRlbSk7XG4gICAgICB9XG4gICAgfSAvLyByZW1vdmUgYWRkaXRpb25hbCBkb20gZWxlbWVudHNcblxuXG4gICAgaWYgKHNlbGYuaW1hZ2UuJGNvbnRhaW5lcikge1xuICAgICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5pbWFnZS4kY29udGFpbmVyKTtcbiAgICB9IC8vIGNhbGwgb25EZXN0cm95IGV2ZW50XG5cblxuICAgIGlmIChzZWxmLm9wdGlvbnMub25EZXN0cm95KSB7XG4gICAgICBzZWxmLm9wdGlvbnMub25EZXN0cm95LmNhbGwoc2VsZik7XG4gICAgfSAvLyBkZWxldGUgamFyYWxsYXggZnJvbSBpdGVtXG5cblxuICAgIGRlbGV0ZSBzZWxmLiRpdGVtLmphcmFsbGF4O1xuICB9IC8vIEZhbGxiYWNrIGZvciByZW1vdmVkIGZ1bmN0aW9uLlxuICAvLyBEb2VzIG5vdGhpbmcgbm93LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgY2xpcENvbnRhaW5lcigpIHt9XG5cbiAgY292ZXJJbWFnZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCByZWN0ID0gc2VsZi5pbWFnZS4kY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRIID0gcmVjdC5oZWlnaHQ7XG4gICAgY29uc3Qge1xuICAgICAgc3BlZWRcbiAgICB9ID0gc2VsZi5vcHRpb25zO1xuICAgIGNvbnN0IGlzU2Nyb2xsID0gJ3Njcm9sbCcgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY3JvbGwtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlO1xuICAgIGxldCBzY3JvbGxEaXN0ID0gMDtcbiAgICBsZXQgcmVzdWx0SCA9IGNvbnRIO1xuICAgIGxldCByZXN1bHRNVCA9IDA7IC8vIHNjcm9sbCBwYXJhbGxheFxuXG4gICAgaWYgKGlzU2Nyb2xsKSB7XG4gICAgICAvLyBzY3JvbGwgZGlzdGFuY2UgYW5kIGhlaWdodCBmb3IgaW1hZ2VcbiAgICAgIGlmICgwID4gc3BlZWQpIHtcbiAgICAgICAgc2Nyb2xsRGlzdCA9IHNwZWVkICogTWF0aC5tYXgoY29udEgsIHduZEgpO1xuXG4gICAgICAgIGlmICh3bmRIIDwgY29udEgpIHtcbiAgICAgICAgICBzY3JvbGxEaXN0IC09IHNwZWVkICogKGNvbnRIIC0gd25kSCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbERpc3QgPSBzcGVlZCAqIChjb250SCArIHduZEgpO1xuICAgICAgfSAvLyBzaXplIGZvciBzY3JvbGwgcGFyYWxsYXhcblxuXG4gICAgICBpZiAoMSA8IHNwZWVkKSB7XG4gICAgICAgIHJlc3VsdEggPSBNYXRoLmFicyhzY3JvbGxEaXN0IC0gd25kSCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPiBzcGVlZCkge1xuICAgICAgICByZXN1bHRIID0gc2Nyb2xsRGlzdCAvIHNwZWVkICsgTWF0aC5hYnMoc2Nyb2xsRGlzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRIICs9ICh3bmRIIC0gY29udEgpICogKDEgLSBzcGVlZCk7XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbERpc3QgLz0gMjtcbiAgICB9IC8vIHN0b3JlIHNjcm9sbCBkaXN0YW5jZVxuXG5cbiAgICBzZWxmLnBhcmFsbGF4U2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxEaXN0OyAvLyB2ZXJ0aWNhbCBjZW50ZXJcblxuICAgIGlmIChpc1Njcm9sbCkge1xuICAgICAgcmVzdWx0TVQgPSAod25kSCAtIHJlc3VsdEgpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0TVQgPSAoY29udEggLSByZXN1bHRIKSAvIDI7XG4gICAgfSAvLyBhcHBseSByZXN1bHQgdG8gaXRlbVxuXG5cbiAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRpdGVtLCB7XG4gICAgICBoZWlnaHQ6IGAke3Jlc3VsdEh9cHhgLFxuICAgICAgbWFyZ2luVG9wOiBgJHtyZXN1bHRNVH1weGAsXG4gICAgICBsZWZ0OiAnZml4ZWQnID09PSBzZWxmLmltYWdlLnBvc2l0aW9uID8gYCR7cmVjdC5sZWZ0fXB4YCA6ICcwJyxcbiAgICAgIHdpZHRoOiBgJHtyZWN0LndpZHRofXB4YFxuICAgIH0pOyAvLyBjYWxsIG9uQ292ZXJJbWFnZSBldmVudFxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5vbkNvdmVySW1hZ2UpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5vbkNvdmVySW1hZ2UuY2FsbChzZWxmKTtcbiAgICB9IC8vIHJldHVybiBzb21lIHVzZWZ1bCBkYXRhLiBVc2VkIGluIHRoZSB2aWRlbyBjb3ZlciBmdW5jdGlvblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgaGVpZ2h0OiByZXN1bHRILFxuICAgICAgICBtYXJnaW5Ub3A6IHJlc3VsdE1UXG4gICAgICB9LFxuICAgICAgY29udGFpbmVyOiByZWN0XG4gICAgfTtcbiAgfVxuXG4gIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0IHx8IGZhbHNlO1xuICB9XG5cbiAgb25TY3JvbGwoZm9yY2UpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCByZWN0ID0gc2VsZi4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250VCA9IHJlY3QudG9wO1xuICAgIGNvbnN0IGNvbnRIID0gcmVjdC5oZWlnaHQ7XG4gICAgY29uc3Qgc3R5bGVzID0ge307IC8vIGNoZWNrIGlmIGluIHZpZXdwb3J0XG5cbiAgICBsZXQgdmlld3BvcnRSZWN0ID0gcmVjdDtcblxuICAgIGlmIChzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQpIHtcbiAgICAgIHZpZXdwb3J0UmVjdCA9IHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICBzZWxmLmlzRWxlbWVudEluVmlld3BvcnQgPSAwIDw9IHZpZXdwb3J0UmVjdC5ib3R0b20gJiYgMCA8PSB2aWV3cG9ydFJlY3QucmlnaHQgJiYgdmlld3BvcnRSZWN0LnRvcCA8PSB3bmRIICYmIHZpZXdwb3J0UmVjdC5sZWZ0IDw9IGdsb2JhbCQyLmlubmVyV2lkdGg7IC8vIHN0b3AgY2FsY3VsYXRpb25zIGlmIGl0ZW0gaXMgbm90IGluIHZpZXdwb3J0XG5cbiAgICBpZiAoZm9yY2UgPyBmYWxzZSA6ICFzZWxmLmlzRWxlbWVudEluVmlld3BvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGNhbGN1bGF0ZSBwYXJhbGxheCBoZWxwaW5nIHZhcmlhYmxlc1xuXG5cbiAgICBjb25zdCBiZWZvcmVUb3AgPSBNYXRoLm1heCgwLCBjb250VCk7XG4gICAgY29uc3QgYmVmb3JlVG9wRW5kID0gTWF0aC5tYXgoMCwgY29udEggKyBjb250VCk7XG4gICAgY29uc3QgYWZ0ZXJUb3AgPSBNYXRoLm1heCgwLCAtY29udFQpO1xuICAgIGNvbnN0IGJlZm9yZUJvdHRvbSA9IE1hdGgubWF4KDAsIGNvbnRUICsgY29udEggLSB3bmRIKTtcbiAgICBjb25zdCBiZWZvcmVCb3R0b21FbmQgPSBNYXRoLm1heCgwLCBjb250SCAtIChjb250VCArIGNvbnRIIC0gd25kSCkpO1xuICAgIGNvbnN0IGFmdGVyQm90dG9tID0gTWF0aC5tYXgoMCwgLWNvbnRUICsgd25kSCAtIGNvbnRIKTtcbiAgICBjb25zdCBmcm9tVmlld3BvcnRDZW50ZXIgPSAxIC0gMiAqICgod25kSCAtIGNvbnRUKSAvICh3bmRIICsgY29udEgpKTsgLy8gY2FsY3VsYXRlIG9uIGhvdyBwZXJjZW50IG9mIHNlY3Rpb24gaXMgdmlzaWJsZVxuXG4gICAgbGV0IHZpc2libGVQZXJjZW50ID0gMTtcblxuICAgIGlmIChjb250SCA8IHduZEgpIHtcbiAgICAgIHZpc2libGVQZXJjZW50ID0gMSAtIChhZnRlclRvcCB8fCBiZWZvcmVCb3R0b20pIC8gY29udEg7XG4gICAgfSBlbHNlIGlmIChiZWZvcmVUb3BFbmQgPD0gd25kSCkge1xuICAgICAgdmlzaWJsZVBlcmNlbnQgPSBiZWZvcmVUb3BFbmQgLyB3bmRIO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlQm90dG9tRW5kIDw9IHduZEgpIHtcbiAgICAgIHZpc2libGVQZXJjZW50ID0gYmVmb3JlQm90dG9tRW5kIC8gd25kSDtcbiAgICB9IC8vIG9wYWNpdHlcblxuXG4gICAgaWYgKCdvcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3NjYWxlLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2Nyb2xsLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSkge1xuICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLDAsMCknO1xuICAgICAgc3R5bGVzLm9wYWNpdHkgPSB2aXNpYmxlUGVyY2VudDtcbiAgICB9IC8vIHNjYWxlXG5cblxuICAgIGlmICgnc2NhbGUnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlKSB7XG4gICAgICBsZXQgc2NhbGUgPSAxO1xuXG4gICAgICBpZiAoMCA+IHNlbGYub3B0aW9ucy5zcGVlZCkge1xuICAgICAgICBzY2FsZSAtPSBzZWxmLm9wdGlvbnMuc3BlZWQgKiB2aXNpYmxlUGVyY2VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlICs9IHNlbGYub3B0aW9ucy5zcGVlZCAqICgxIC0gdmlzaWJsZVBlcmNlbnQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGUzZCgwLDAsMClgO1xuICAgIH0gLy8gc2Nyb2xsXG5cblxuICAgIGlmICgnc2Nyb2xsJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3Njcm9sbC1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUpIHtcbiAgICAgIGxldCBwb3NpdGlvblkgPSBzZWxmLnBhcmFsbGF4U2Nyb2xsRGlzdGFuY2UgKiBmcm9tVmlld3BvcnRDZW50ZXI7IC8vIGZpeCBpZiBwYXJhbGxheCBibG9jayBpbiBhYnNvbHV0ZSBwb3NpdGlvblxuXG4gICAgICBpZiAoJ2Fic29sdXRlJyA9PT0gc2VsZi5pbWFnZS5wb3NpdGlvbikge1xuICAgICAgICBwb3NpdGlvblkgLT0gY29udFQ7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwke3Bvc2l0aW9uWX1weCwwKWA7XG4gICAgfVxuXG4gICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kaXRlbSwgc3R5bGVzKTsgLy8gY2FsbCBvblNjcm9sbCBldmVudFxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5vblNjcm9sbCkge1xuICAgICAgc2VsZi5vcHRpb25zLm9uU2Nyb2xsLmNhbGwoc2VsZiwge1xuICAgICAgICBzZWN0aW9uOiByZWN0LFxuICAgICAgICBiZWZvcmVUb3AsXG4gICAgICAgIGJlZm9yZVRvcEVuZCxcbiAgICAgICAgYWZ0ZXJUb3AsXG4gICAgICAgIGJlZm9yZUJvdHRvbSxcbiAgICAgICAgYmVmb3JlQm90dG9tRW5kLFxuICAgICAgICBhZnRlckJvdHRvbSxcbiAgICAgICAgdmlzaWJsZVBlcmNlbnQsXG4gICAgICAgIGZyb21WaWV3cG9ydENlbnRlclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5jb3ZlckltYWdlKCk7XG4gIH1cblxufSAvLyBnbG9iYWwgZGVmaW5pdGlvblxuXG5cbmNvbnN0IGphcmFsbGF4JDEgPSBmdW5jdGlvbiAoaXRlbXMsIG9wdGlvbnMsIC4uLmFyZ3MpIHtcbiAgLy8gY2hlY2sgZm9yIGRvbSBlbGVtZW50XG4gIC8vIHRoYW5rczogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODQyODYvamF2YXNjcmlwdC1pc2RvbS1ob3ctZG8teW91LWNoZWNrLWlmLWEtamF2YXNjcmlwdC1vYmplY3QtaXMtYS1kb20tb2JqZWN0XG4gIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIEhUTUxFbGVtZW50ID8gaXRlbXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IGl0ZW1zICYmICdvYmplY3QnID09PSB0eXBlb2YgaXRlbXMgJiYgbnVsbCAhPT0gaXRlbXMgJiYgMSA9PT0gaXRlbXMubm9kZVR5cGUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBpdGVtcy5ub2RlTmFtZSkge1xuICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgbGV0IGsgPSAwO1xuICBsZXQgcmV0O1xuXG4gIGZvciAoazsgayA8IGxlbjsgayArPSAxKSB7XG4gICAgaWYgKCdvYmplY3QnID09PSB0eXBlb2Ygb3B0aW9ucyB8fCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGlmICghaXRlbXNba10uamFyYWxsYXgpIHtcbiAgICAgICAgaXRlbXNba10uamFyYWxsYXggPSBuZXcgSmFyYWxsYXgoaXRlbXNba10sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbXNba10uamFyYWxsYXgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICByZXQgPSBpdGVtc1trXS5qYXJhbGxheFtvcHRpb25zXS5hcHBseShpdGVtc1trXS5qYXJhbGxheCwgYXJncyk7XG4gICAgfVxuXG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcmV0KSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbmphcmFsbGF4JDEuY29uc3RydWN0b3IgPSBKYXJhbGxheDtcblxuLyohXG4gKiBOYW1lICAgIDogVmlkZW8gV29ya2VyXG4gKiBWZXJzaW9uIDogMi4wLjBcbiAqIEF1dGhvciAgOiBuSyA8aHR0cHM6Ly9ua2Rldi5pbmZvPlxuICogR2l0SHViICA6IGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL3ZpZGVvLXdvcmtlclxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5sZXQgd2luO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgd2luID0ge307XG59XG5cbnZhciBnbG9iYWwkMSA9IHdpbjsgLy8gRGVmZXJyZWRcbi8vIHRoYW5rcyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDk2NzE1L2ltcGxlbWVudC1kZWZlcnJlZC1vYmplY3Qtd2l0aG91dC11c2luZy1qcXVlcnlcblxuZnVuY3Rpb24gRGVmZXJyZWQoKSB7XG4gIHRoaXMuZG9uZUNhbGxiYWNrcyA9IFtdO1xuICB0aGlzLmZhaWxDYWxsYmFja3MgPSBbXTtcbn1cblxuRGVmZXJyZWQucHJvdG90eXBlID0ge1xuICBleGVjdXRlKGxpc3QsIGFyZ3MpIHtcbiAgICBsZXQgaSA9IGxpc3QubGVuZ3RoOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcblxuICAgIHdoaWxlIChpKSB7XG4gICAgICBpIC09IDE7XG4gICAgICBsaXN0W2ldLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfSxcblxuICByZXNvbHZlKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmV4ZWN1dGUodGhpcy5kb25lQ2FsbGJhY2tzLCBhcmdzKTtcbiAgfSxcblxuICByZWplY3QoLi4uYXJncykge1xuICAgIHRoaXMuZXhlY3V0ZSh0aGlzLmZhaWxDYWxsYmFja3MsIGFyZ3MpO1xuICB9LFxuXG4gIGRvbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmRvbmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH0sXG5cbiAgZmFpbChjYWxsYmFjaykge1xuICAgIHRoaXMuZmFpbENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG59O1xubGV0IElEID0gMDtcbmxldCBZb3V0dWJlQVBJYWRkZWQgPSAwO1xubGV0IFZpbWVvQVBJYWRkZWQgPSAwO1xubGV0IGxvYWRpbmdZb3V0dWJlUGxheWVyID0gMDtcbmxldCBsb2FkaW5nVmltZW9QbGF5ZXIgPSAwO1xuY29uc3QgbG9hZGluZ1lvdXR1YmVEZWZlciA9IC8qI19fUFVSRV9fKi9uZXcgRGVmZXJyZWQoKTtcbmNvbnN0IGxvYWRpbmdWaW1lb0RlZmVyID0gLyojX19QVVJFX18qL25ldyBEZWZlcnJlZCgpO1xuXG5jbGFzcyBWaWRlb1dvcmtlciB7XG4gIGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudXJsID0gdXJsO1xuICAgIHNlbGYub3B0aW9uc19kZWZhdWx0ID0ge1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBtdXRlOiBmYWxzZSxcbiAgICAgIHZvbHVtZTogMTAwLFxuICAgICAgc2hvd0NvbnRyb2xzOiB0cnVlLFxuICAgICAgYWNjZXNzaWJpbGl0eUhpZGRlbjogZmFsc2UsXG4gICAgICAvLyBzdGFydCAvIGVuZCB2aWRlbyB0aW1lIGluIHNlY29uZHNcbiAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgIGVuZFRpbWU6IDBcbiAgICB9O1xuICAgIHNlbGYub3B0aW9ucyA9IHNlbGYuZXh0ZW5kKHt9LCBzZWxmLm9wdGlvbnNfZGVmYXVsdCwgb3B0aW9ucyk7IC8vIEZpeCB3cm9uZyBvcHRpb24gbmFtZS5cbiAgICAvLyBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL25rLW8vdmlkZW8td29ya2VyL2lzc3Vlcy8xMy5cblxuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnNob3dDb250b2xzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2VsZi5vcHRpb25zLnNob3dDb250cm9scyA9IHNlbGYub3B0aW9ucy5zaG93Q29udG9scztcbiAgICAgIGRlbGV0ZSBzZWxmLm9wdGlvbnMuc2hvd0NvbnRvbHM7XG4gICAgfSAvLyBjaGVjayBVUkxcblxuXG4gICAgc2VsZi52aWRlb0lEID0gc2VsZi5wYXJzZVVSTCh1cmwpOyAvLyBpbml0XG5cbiAgICBpZiAoc2VsZi52aWRlb0lEKSB7XG4gICAgICBzZWxmLklEID0gSUQ7XG4gICAgICBJRCArPSAxO1xuICAgICAgc2VsZi5sb2FkQVBJKCk7XG4gICAgICBzZWxmLmluaXQoKTtcbiAgICB9XG4gIH0gLy8gRXh0ZW5kIGxpa2UgalF1ZXJ5LmV4dGVuZFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBvdXQgPSBhcmdzWzBdIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoIWFyZ3NbaV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhhcmdzW2ldKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIG91dFtrZXldID0gYXJnc1tpXVtrZXldO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHBhcnNlVVJMKHVybCkge1xuICAgIC8vIHBhcnNlIHlvdXR1YmUgSURcbiAgICBmdW5jdGlvbiBnZXRZb3V0dWJlSUQoeXRVcmwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgY29uc3QgcmVnRXhwID0gLy4qKD86eW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj0pKFteI1xcJlxcP10qKS4qLztcbiAgICAgIGNvbnN0IG1hdGNoID0geXRVcmwubWF0Y2gocmVnRXhwKTtcbiAgICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXS5sZW5ndGggPT09IDExID8gbWF0Y2hbMV0gOiBmYWxzZTtcbiAgICB9IC8vIHBhcnNlIHZpbWVvIElEXG5cblxuICAgIGZ1bmN0aW9uIGdldFZpbWVvSUQodm1VcmwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgY29uc3QgcmVnRXhwID0gL2h0dHBzPzpcXC9cXC8oPzp3d3dcXC58cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzpjaGFubmVsc1xcLyg/OlxcdytcXC8pP3xncm91cHNcXC8oW14vXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xuICAgICAgY29uc3QgbWF0Y2ggPSB2bVVybC5tYXRjaChyZWdFeHApO1xuICAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzNdID8gbWF0Y2hbM10gOiBmYWxzZTtcbiAgICB9IC8vIHBhcnNlIGxvY2FsIHN0cmluZ1xuXG5cbiAgICBmdW5jdGlvbiBnZXRMb2NhbFZpZGVvcyhsb2NVcmwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgY29uc3QgdmlkZW9Gb3JtYXRzID0gbG9jVXJsLnNwbGl0KC8sKD89bXA0XFw6fHdlYm1cXDp8b2d2XFw6fG9nZ1xcOikvKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgbGV0IHJlYWR5ID0gMDtcbiAgICAgIHZpZGVvRm9ybWF0cy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICBjb25zdCBtYXRjaCA9IHZhbC5tYXRjaCgvXihtcDR8d2VibXxvZ3Z8b2dnKVxcOiguKikvKTtcblxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0gJiYgbWF0Y2hbMl0pIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgICByZXN1bHRbbWF0Y2hbMV0gPT09ICdvZ3YnID8gJ29nZycgOiBtYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgICAgICAgICByZWFkeSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlYWR5ID8gcmVzdWx0IDogZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgWW91dHViZSA9IGdldFlvdXR1YmVJRCh1cmwpO1xuICAgIGNvbnN0IFZpbWVvID0gZ2V0VmltZW9JRCh1cmwpO1xuICAgIGNvbnN0IExvY2FsID0gZ2V0TG9jYWxWaWRlb3ModXJsKTtcblxuICAgIGlmIChZb3V0dWJlKSB7XG4gICAgICB0aGlzLnR5cGUgPSAneW91dHViZSc7XG4gICAgICByZXR1cm4gWW91dHViZTtcbiAgICB9XG5cbiAgICBpZiAoVmltZW8pIHtcbiAgICAgIHRoaXMudHlwZSA9ICd2aW1lbyc7XG4gICAgICByZXR1cm4gVmltZW87XG4gICAgfVxuXG4gICAgaWYgKExvY2FsKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbG9jYWwnO1xuICAgICAgcmV0dXJuIExvY2FsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy52aWRlb0lEO1xuICB9IC8vIGV2ZW50c1xuXG5cbiAgb24obmFtZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnVzZXJFdmVudHNMaXN0ID0gdGhpcy51c2VyRXZlbnRzTGlzdCB8fCBbXTsgLy8gYWRkIG5ldyBjYWxsYmFjayBpbiBldmVudHMgbGlzdFxuXG4gICAgKHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gfHwgKHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgb2ZmKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJFdmVudHNMaXN0IHx8ICF0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgZGVsZXRlIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0uZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHZhbCA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdW2tleV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmlyZShuYW1lLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMudXNlckV2ZW50c0xpc3QgJiYgdHlwZW9mIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnVzZXJFdmVudHNMaXN0W25hbWVdLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgLy8gY2FsbCB3aXRoIGFsbCBhcmd1bWVudHNcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIHZhbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcGxheShzdGFydCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5wbGF5VmlkZW8pIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnNlZWtUbyhzdGFydCB8fCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBMQVlJTkcgIT09IHNlbGYucGxheWVyLmdldFBsYXllclN0YXRlKCkpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIuc2V0Q3VycmVudFRpbWUoc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBsYXllci5nZXRQYXVzZWQoKS50aGVuKHBhdXNlZCA9PiB7XG4gICAgICAgIGlmIChwYXVzZWQpIHtcbiAgICAgICAgICBzZWxmLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYucGxheWVyLmN1cnJlbnRUaW1lID0gc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnBsYXllci5wYXVzZWQpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIucGxheSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5wYXVzZVZpZGVvKSB7XG4gICAgICBpZiAoZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUExBWUlORyA9PT0gc2VsZi5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSkge1xuICAgICAgICBzZWxmLnBsYXllci5wYXVzZVZpZGVvKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgc2VsZi5wbGF5ZXIuZ2V0UGF1c2VkKCkudGhlbihwYXVzZWQgPT4ge1xuICAgICAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgICAgIHNlbGYucGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIGlmICghc2VsZi5wbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbXV0ZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIubXV0ZSkge1xuICAgICAgc2VsZi5wbGF5ZXIubXV0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUoMCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgc2VsZi4kdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVubXV0ZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIubXV0ZSkge1xuICAgICAgc2VsZi5wbGF5ZXIudW5NdXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZShzZWxmLm9wdGlvbnMudm9sdW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBzZWxmLiR2aWRlby5tdXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZvbHVtZSh2b2x1bWUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllciB8fCAhdm9sdW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLnNldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSh2b2x1bWUpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIHNlbGYuJHZpZGVvLnZvbHVtZSA9IHZvbHVtZSAvIDEwMDtcbiAgICB9XG4gIH1cblxuICBnZXRWb2x1bWUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLnBsYXllci5nZXRWb2x1bWUoKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5nZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLmdldFZvbHVtZSgpLnRoZW4odm9sdW1lID0+IHtcbiAgICAgICAgY2FsbGJhY2sodm9sdW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYuJHZpZGVvLnZvbHVtZSAqIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TXV0ZWQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5wbGF5ZXIpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5pc011dGVkKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLnBsYXllci5pc011dGVkKCkpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycgJiYgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5nZXRWb2x1bWUoKS50aGVuKHZvbHVtZSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKCEhdm9sdW1lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYuJHZpZGVvLm11dGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXRJbWFnZVVSTChjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYudmlkZW9JbWFnZSkge1xuICAgICAgY2FsbGJhY2soc2VsZi52aWRlb0ltYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZVNpemVzID0gWydtYXhyZXNkZWZhdWx0JywgJ3NkZGVmYXVsdCcsICdocWRlZmF1bHQnLCAnMCddO1xuICAgICAgbGV0IHN0ZXAgPSAwO1xuICAgICAgY29uc3QgdGVtcEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICB0ZW1wSW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaWYgbm8gdGh1bWJuYWlsLCB5b3V0dWJlIGFkZCB0aGVpciBvd24gaW1hZ2Ugd2l0aCB3aWR0aCA9IDEyMHB4XG4gICAgICAgIGlmICgodGhpcy5uYXR1cmFsV2lkdGggfHwgdGhpcy53aWR0aCkgIT09IDEyMCB8fCBzdGVwID09PSBhdmFpbGFibGVTaXplcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgLy8gb2tcbiAgICAgICAgICBzZWxmLnZpZGVvSW1hZ2UgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtzZWxmLnZpZGVvSUR9LyR7YXZhaWxhYmxlU2l6ZXNbc3RlcF19LmpwZ2A7XG4gICAgICAgICAgY2FsbGJhY2soc2VsZi52aWRlb0ltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0cnkgYW5vdGhlciBzaXplXG4gICAgICAgICAgc3RlcCArPSAxO1xuICAgICAgICAgIHRoaXMuc3JjID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7c2VsZi52aWRlb0lEfS8ke2F2YWlsYWJsZVNpemVzW3N0ZXBdfS5qcGdgO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0ZW1wSW1nLnNyYyA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3NlbGYudmlkZW9JRH0vJHthdmFpbGFibGVTaXplc1tzdGVwXX0uanBnYDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvLyBodHRwczovL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPWh0dHBzOi8vdmltZW8uY29tLzIzNTIxMjUyN1xuXG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIGBodHRwczovL3ZpbWVvLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPSR7c2VsZi51cmx9YCwgdHJ1ZSk7XG5cbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgLy8gU3VjY2VzcyFcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50aHVtYm5haWxfdXJsKSB7XG4gICAgICAgICAgICAgIHNlbGYudmlkZW9JbWFnZSA9IHJlc3BvbnNlLnRodW1ibmFpbF91cmw7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYudmlkZW9JbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cbiAgfSAvLyBmYWxsYmFjayB0byB0aGUgb2xkIHZlcnNpb24uXG5cblxuICBnZXRJZnJhbWUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmdldFZpZGVvKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldFZpZGVvKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIHJldHVybiBnZW5lcmF0ZWQgdmlkZW8gYmxvY2tcblxuICAgIGlmIChzZWxmLiR2aWRlbykge1xuICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZ2VuZXJhdGUgbmV3IHZpZGVvIGJsb2NrXG5cblxuICAgIHNlbGYub25BUElyZWFkeSgoKSA9PiB7XG4gICAgICBsZXQgaGlkZGVuRGl2O1xuXG4gICAgICBpZiAoIXNlbGYuJHZpZGVvKSB7XG4gICAgICAgIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW5EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gLy8gWW91dHViZVxuXG5cbiAgICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMgPSB7XG4gICAgICAgICAgLy8gR0RQUiBDb21wbGlhbmNlLlxuICAgICAgICAgIGhvc3Q6ICdodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbScsXG4gICAgICAgICAgdmlkZW9JZDogc2VsZi52aWRlb0lELFxuICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgIGF1dG9oaWRlOiAxLFxuICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgYXV0b3BsYXk6IDAsXG4gICAgICAgICAgICAvLyBhdXRvcGxheSBlbmFibGUgb24gbW9iaWxlIGRldmljZXNcbiAgICAgICAgICAgIHBsYXlzaW5saW5lOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9OyAvLyBoaWRlIGNvbnRyb2xzXG5cbiAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzKSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuaXZfbG9hZF9wb2xpY3kgPSAzO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLm1vZGVzdGJyYW5kaW5nID0gMTtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5jb250cm9scyA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuc2hvd2luZm8gPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLmRpc2FibGVrYiA9IDE7XG4gICAgICAgIH0gLy8gZXZlbnRzXG5cblxuICAgICAgICBsZXQgeXRTdGFydGVkO1xuICAgICAgICBsZXQgeXRQcm9ncmVzc0ludGVydmFsO1xuICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuZXZlbnRzID0ge1xuICAgICAgICAgIG9uUmVhZHkoZSkge1xuICAgICAgICAgICAgLy8gbXV0ZVxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5tdXRlKSB7XG4gICAgICAgICAgICAgIGUudGFyZ2V0Lm11dGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5vcHRpb25zLnZvbHVtZSkge1xuICAgICAgICAgICAgICBlLnRhcmdldC5zZXRWb2x1bWUoc2VsZi5vcHRpb25zLnZvbHVtZSk7XG4gICAgICAgICAgICB9IC8vIGF1dG9wbGF5XG5cblxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuZmlyZSgncmVhZHknLCBlKTsgLy8gRm9yIHNlYW1sZXNzIGxvb3BzLCBzZXQgdGhlIGVuZFRpbWUgdG8gMC4xIHNlY29uZHMgbGVzcyB0aGFuIHRoZSB2aWRlbydzIGR1cmF0aW9uXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXIvaXNzdWVzLzJcblxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wICYmICFzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzT2Zmc2V0ID0gMC4xO1xuICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMuZW5kVGltZSA9IHNlbGYucGxheWVyLmdldER1cmF0aW9uKCkgLSBzZWNvbmRzT2Zmc2V0O1xuICAgICAgICAgICAgfSAvLyB2b2x1bWVjaGFuZ2VcblxuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuZ2V0Vm9sdW1lKHZvbHVtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy52b2x1bWUgIT09IHZvbHVtZSkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgndm9sdW1lY2hhbmdlJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgLy8gbG9vcFxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wICYmIGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcbiAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXl0U3RhcnRlZCAmJiBlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcbiAgICAgICAgICAgICAgeXRTdGFydGVkID0gMTtcbiAgICAgICAgICAgICAgc2VsZi5maXJlKCdzdGFydGVkJywgZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcbiAgICAgICAgICAgICAgc2VsZi5maXJlKCdwbGF5JywgZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3BhdXNlJywgZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAgIHNlbGYuZmlyZSgnZW5kZWQnLCBlKTtcbiAgICAgICAgICAgIH0gLy8gcHJvZ3Jlc3MgY2hlY2tcblxuXG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgIHl0UHJvZ3Jlc3NJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3RpbWV1cGRhdGUnLCBlKTsgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUgJiYgc2VsZi5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSA+PSBzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHl0UHJvZ3Jlc3NJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG9uRXJyb3IoZSkge1xuICAgICAgICAgICAgc2VsZi5maXJlKCdlcnJvcicsIGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhc2VsZi4kdmlkZW87XG5cbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgc2VsZi5wbGF5ZXJJRCk7XG4gICAgICAgICAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIgPSBzZWxmLnBsYXllciB8fCBuZXcgZ2xvYmFsJDEuWVQuUGxheWVyKHNlbGYucGxheWVySUQsIHNlbGYucGxheWVyT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xuICAgICAgICAgIHNlbGYuJHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5wbGF5ZXJJRCk7IC8vIGFkZCBhY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXNcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYWNjZXNzaWJpbGl0eUhpZGRlbikge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgfSAvLyBnZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuXG5cbiAgICAgICAgICBzZWxmLnZpZGVvV2lkdGggPSBwYXJzZUludChzZWxmLiR2aWRlby5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyksIDEwKSB8fCAxMjgwO1xuICAgICAgICAgIHNlbGYudmlkZW9IZWlnaHQgPSBwYXJzZUludChzZWxmLiR2aWRlby5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpLCAxMCkgfHwgNzIwO1xuICAgICAgICB9XG4gICAgICB9IC8vIFZpbWVvXG5cblxuICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMgPSB7XG4gICAgICAgICAgLy8gR0RQUiBDb21wbGlhbmNlLlxuICAgICAgICAgIGRudDogMSxcbiAgICAgICAgICBpZDogc2VsZi52aWRlb0lELFxuICAgICAgICAgIGF1dG9wYXVzZTogMCxcbiAgICAgICAgICB0cmFuc3BhcmVudDogMCxcbiAgICAgICAgICBhdXRvcGxheTogc2VsZi5vcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG4gICAgICAgICAgbG9vcDogc2VsZi5vcHRpb25zLmxvb3AgPyAxIDogMCxcbiAgICAgICAgICBtdXRlZDogc2VsZi5vcHRpb25zLm11dGUgPyAxIDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMudm9sdW1lKSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnZvbHVtZSA9IHNlbGYub3B0aW9ucy52b2x1bWU7XG4gICAgICAgIH0gLy8gaGlkZSBjb250cm9sc1xuXG5cbiAgICAgICAgaWYgKCFzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzKSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLmJhZGdlID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuYnlsaW5lID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucG9ydHJhaXQgPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy50aXRsZSA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLmJhY2tncm91bmQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxmLiR2aWRlbykge1xuICAgICAgICAgIGxldCBwbGF5ZXJPcHRpb25zU3RyaW5nID0gJyc7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc2VsZi5wbGF5ZXJPcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheWVyT3B0aW9uc1N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgcGxheWVyT3B0aW9uc1N0cmluZyArPSAnJic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsYXllck9wdGlvbnNTdHJpbmcgKz0gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWxmLnBsYXllck9wdGlvbnNba2V5XSl9YDtcbiAgICAgICAgICB9KTsgLy8gd2UgbmVlZCB0byBjcmVhdGUgaWZyYW1lIG1hbnVhbGx5IGJlY2F1c2Ugd2hlbiB3ZSBjcmVhdGUgaXQgdXNpbmcgQVBJXG4gICAgICAgICAgLy8ganMgZXZlbnRzIHdvbid0IHRyaWdnZXJzIGFmdGVyIGlmcmFtZSBtb3ZlZCB0byBhbm90aGVyIHBsYWNlXG5cbiAgICAgICAgICBzZWxmLiR2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxmLnBsYXllcklEKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHtzZWxmLnZpZGVvSUR9PyR7cGxheWVyT3B0aW9uc1N0cmluZ31gKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ21vemFsbG93ZnVsbHNjcmVlbicsICcnKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ1ZpbWVvIHZpZGVvIHBsYXllcicpOyAvLyBhZGQgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmFjY2Vzc2liaWxpdHlIaWRkZW4pIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChzZWxmLiR2aWRlbyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIgPSBzZWxmLnBsYXllciB8fCBuZXcgZ2xvYmFsJDEuVmltZW8uUGxheWVyKHNlbGYuJHZpZGVvLCBzZWxmLnBsYXllck9wdGlvbnMpOyAvLyBzZXQgY3VycmVudCB0aW1lIGZvciBhdXRvcGxheVxuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICYmIHNlbGYub3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgICAgIHNlbGYucGxheWVyLnNldEN1cnJlbnRUaW1lKHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICB9IC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG5cblxuICAgICAgICBzZWxmLnBsYXllci5nZXRWaWRlb1dpZHRoKCkudGhlbih3aWR0aCA9PiB7XG4gICAgICAgICAgc2VsZi52aWRlb1dpZHRoID0gd2lkdGggfHwgMTI4MDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmdldFZpZGVvSGVpZ2h0KCkudGhlbihoZWlnaHQgPT4ge1xuICAgICAgICAgIHNlbGYudmlkZW9IZWlnaHQgPSBoZWlnaHQgfHwgNzIwO1xuICAgICAgICB9KTsgLy8gZXZlbnRzXG5cbiAgICAgICAgbGV0IHZtU3RhcnRlZDtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBlID0+IHtcbiAgICAgICAgICBpZiAoIXZtU3RhcnRlZCkge1xuICAgICAgICAgICAgc2VsZi5maXJlKCdzdGFydGVkJywgZSk7XG4gICAgICAgICAgICB2bVN0YXJ0ZWQgPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuZmlyZSgndGltZXVwZGF0ZScsIGUpOyAvLyBjaGVjayBmb3IgZW5kIG9mIHZpZGVvIGFuZCBwbGF5IGFnYWluIG9yIHN0b3BcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIGUuc2Vjb25kcyA+PSBzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wYXVzZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ3BsYXknLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3BsYXknLCBlKTsgLy8gY2hlY2sgZm9yIHRoZSBzdGFydCB0aW1lIGFuZCBzdGFydCB3aXRoIGl0XG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSAmJiBlLnNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbigncGF1c2UnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3BhdXNlJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbignZW5kZWQnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ2VuZGVkJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbignbG9hZGVkJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdyZWFkeScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgndm9sdW1lY2hhbmdlJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbignZXJyb3InLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ2Vycm9yJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBMb2NhbFxuXG5cbiAgICAgIGZ1bmN0aW9uIGFkZFNvdXJjZVRvTG9jYWwoZWxlbWVudCwgc3JjLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICBzb3VyY2Uuc3JjID0gc3JjO1xuICAgICAgICBzb3VyY2UudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgICBpZiAoIXNlbGYuJHZpZGVvKSB7XG4gICAgICAgICAgc2VsZi4kdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpOyAvLyBzaG93IGNvbnRyb2xzXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnNob3dDb250cm9scykge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uY29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgIH0gLy8gbXV0ZVxuXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm11dGUpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuJHZpZGVvLnZvbHVtZSkge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8udm9sdW1lID0gc2VsZi5vcHRpb25zLnZvbHVtZSAvIDEwMDtcbiAgICAgICAgICB9IC8vIGxvb3BcblxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgICB9IC8vIGF1dG9wbGF5IGVuYWJsZSBvbiBtb2JpbGUgZGV2aWNlc1xuXG5cbiAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnd2Via2l0LXBsYXlzaW5saW5lJywgJycpOyAvLyBhZGQgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmFjY2Vzc2liaWxpdHlIaWRkZW4pIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxmLnBsYXllcklEKTtcbiAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoc2VsZi4kdmlkZW8pO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuRGl2KTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzZWxmLnZpZGVvSUQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGFkZFNvdXJjZVRvTG9jYWwoc2VsZi4kdmlkZW8sIHNlbGYudmlkZW9JRFtrZXldLCBgdmlkZW8vJHtrZXl9YCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnBsYXllciA9IHNlbGYucGxheWVyIHx8IHNlbGYuJHZpZGVvO1xuICAgICAgICBsZXQgbG9jU3RhcnRlZDtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIGUgPT4ge1xuICAgICAgICAgIGlmICghbG9jU3RhcnRlZCkge1xuICAgICAgICAgICAgc2VsZi5maXJlKCdzdGFydGVkJywgZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbG9jU3RhcnRlZCA9IDE7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3RpbWV1cGRhdGUnLCBlKTsgLy8gY2hlY2sgZm9yIGVuZCBvZiB2aWRlbyBhbmQgcGxheSBhZ2FpbiBvciBzdG9wXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSAmJiB0aGlzLmN1cnJlbnRUaW1lID49IHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhdXNlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdwbGF5JywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgncGF1c2UnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdlbmRlZCcsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZ2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICBzZWxmLnZpZGVvV2lkdGggPSB0aGlzLnZpZGVvV2lkdGggfHwgMTI4MDtcbiAgICAgICAgICBzZWxmLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlb0hlaWdodCB8fCA3MjA7XG4gICAgICAgICAgc2VsZi5maXJlKCdyZWFkeScpOyAvLyBhdXRvcGxheVxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZ2V0Vm9sdW1lKHZvbHVtZSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuZmlyZSgndm9sdW1lY2hhbmdlJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgnZXJyb3InLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHNlbGYuJHZpZGVvKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5wbGF5ZXJJRCA9IGBWaWRlb1dvcmtlci0ke3NlbGYuSUR9YDtcbiAgfVxuXG4gIGxvYWRBUEkoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoWW91dHViZUFQSWFkZGVkICYmIFZpbWVvQVBJYWRkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc3JjID0gJyc7IC8vIGxvYWQgWW91dHViZSBBUElcblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiAhWW91dHViZUFQSWFkZGVkKSB7XG4gICAgICBZb3V0dWJlQVBJYWRkZWQgPSAxO1xuICAgICAgc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuICAgIH0gLy8gbG9hZCBWaW1lbyBBUElcblxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiAhVmltZW9BUElhZGRlZCkge1xuICAgICAgVmltZW9BUElhZGRlZCA9IDE7IC8vIFVzZWZ1bCB3aGVuIFZpbWVvIEFQSSBhZGRlZCB1c2luZyBSZXF1aXJlSlMgaHR0cHM6Ly9naXRodWIuY29tL25rLW8vdmlkZW8td29ya2VyL3B1bGwvN1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlZpbWVvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNyYyA9ICdodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qcyc7XG4gICAgfVxuXG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGFkZCBzY3JpcHQgaW4gaGVhZCBzZWN0aW9uXG5cblxuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdGFnLnNyYyA9IHNyYztcbiAgICBoZWFkLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgaGVhZCA9IG51bGw7XG4gICAgdGFnID0gbnVsbDtcbiAgfVxuXG4gIG9uQVBJcmVhZHkoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gWW91dHViZVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIGdsb2JhbCBZVCBwbGF5ZXIgY2FsbGJhY2tcbiAgICAgIGlmICgodHlwZW9mIGdsb2JhbCQxLllUID09PSAndW5kZWZpbmVkJyB8fCBnbG9iYWwkMS5ZVC5sb2FkZWQgPT09IDApICYmICFsb2FkaW5nWW91dHViZVBsYXllcikge1xuICAgICAgICAvLyBQcmV2ZW50cyBSZWFkeSBldmVudCBmcm9tIGJlaW5nIGNhbGxlZCB0d2ljZVxuICAgICAgICBsb2FkaW5nWW91dHViZVBsYXllciA9IDE7IC8vIENyZWF0ZXMgZGVmZXJyZWQgc28sIG90aGVyIHBsYXllcnMga25vdyB3aGVuIHRvIHdhaXQuXG5cbiAgICAgICAgZ2xvYmFsJDEub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZ2xvYmFsJDEub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBudWxsO1xuICAgICAgICAgIGxvYWRpbmdZb3V0dWJlRGVmZXIucmVzb2x2ZSgnZG9uZScpO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwkMS5ZVCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsJDEuWVQubG9hZGVkID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkaW5nWW91dHViZURlZmVyLmRvbmUoKCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gLy8gVmltZW9cblxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJykge1xuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5WaW1lbyA9PT0gJ3VuZGVmaW5lZCcgJiYgIWxvYWRpbmdWaW1lb1BsYXllcikge1xuICAgICAgICBsb2FkaW5nVmltZW9QbGF5ZXIgPSAxO1xuICAgICAgICBjb25zdCB2aW1lb0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuVmltZW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHZpbWVvSW50ZXJ2YWwpO1xuICAgICAgICAgICAgbG9hZGluZ1ZpbWVvRGVmZXIucmVzb2x2ZSgnZG9uZScpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCQxLlZpbWVvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGluZ1ZpbWVvRGVmZXIuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBMb2NhbFxuXG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGphcmFsbGF4VmlkZW8kMShqYXJhbGxheCA9IGdsb2JhbCQyLmphcmFsbGF4KSB7XG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGphcmFsbGF4KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgSmFyYWxsYXggPSBqYXJhbGxheC5jb25zdHJ1Y3RvcjsgLy8gYXBwZW5kIHZpZGVvIGFmdGVyIHdoZW4gYmxvY2sgd2lsbCBiZSB2aXNpYmxlLlxuXG4gIGNvbnN0IGRlZk9uU2Nyb2xsID0gSmFyYWxsYXgucHJvdG90eXBlLm9uU2Nyb2xsO1xuXG4gIEphcmFsbGF4LnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBkZWZPblNjcm9sbC5hcHBseShzZWxmKTtcbiAgICBjb25zdCBpc1JlYWR5ID0gIXNlbGYuaXNWaWRlb0luc2VydGVkICYmIHNlbGYudmlkZW8gJiYgKCFzZWxmLm9wdGlvbnMudmlkZW9MYXp5TG9hZGluZyB8fCBzZWxmLmlzRWxlbWVudEluVmlld3BvcnQpICYmICFzZWxmLm9wdGlvbnMuZGlzYWJsZVZpZGVvKCk7XG5cbiAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgc2VsZi5pc1ZpZGVvSW5zZXJ0ZWQgPSB0cnVlO1xuICAgICAgc2VsZi52aWRlby5nZXRWaWRlbyh2aWRlbyA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSB2aWRlby5wYXJlbnROb2RlO1xuICAgICAgICBzZWxmLmNzcyh2aWRlbywge1xuICAgICAgICAgIHBvc2l0aW9uOiBzZWxmLmltYWdlLnBvc2l0aW9uLFxuICAgICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgIGJvdHRvbTogJzBweCcsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICBtYXhXaWR0aDogJ25vbmUnLFxuICAgICAgICAgIG1heEhlaWdodDogJ25vbmUnLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogJ3ByZXNlcnZlLTNkJyxcbiAgICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0sb3BhY2l0eScsXG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuJHZpZGVvID0gdmlkZW87IC8vIGFkZCBQb3N0ZXIgYXR0cmlidXRlIHRvIHNlbGYtaG9zdGVkIHZpZGVvXG5cbiAgICAgICAgaWYgKCdsb2NhbCcgPT09IHNlbGYudmlkZW8udHlwZSkge1xuICAgICAgICAgIGlmIChzZWxmLmltYWdlLnNyYykge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdwb3N0ZXInLCBzZWxmLmltYWdlLnNyYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmltYWdlLiRpdGVtICYmICdJTUcnID09PSBzZWxmLmltYWdlLiRpdGVtLnRhZ05hbWUgJiYgc2VsZi5pbWFnZS4kaXRlbS5zcmMpIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgc2VsZi5pbWFnZS4kaXRlbS5zcmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBpbnNlcnQgdmlkZW8gdGFnXG5cblxuICAgICAgICBzZWxmLmltYWdlLiRjb250YWluZXIuYXBwZW5kQ2hpbGQodmlkZW8pOyAvLyByZW1vdmUgcGFyZW50IHZpZGVvIGVsZW1lbnQgKGNyZWF0ZWQgYnkgVmlkZW9Xb3JrZXIpXG5cbiAgICAgICAgJHBhcmVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRwYXJlbnQpOyAvLyBjYWxsIG9uVmlkZW9JbnNlcnQgZXZlbnRcblxuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uVmlkZW9JbnNlcnQpIHtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMub25WaWRlb0luc2VydC5jYWxsKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vIGNvdmVyIHZpZGVvXG5cblxuICBjb25zdCBkZWZDb3ZlckltYWdlID0gSmFyYWxsYXgucHJvdG90eXBlLmNvdmVySW1hZ2U7XG5cbiAgSmFyYWxsYXgucHJvdG90eXBlLmNvdmVySW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaW1hZ2VEYXRhID0gZGVmQ292ZXJJbWFnZS5hcHBseShzZWxmKTtcbiAgICBjb25zdCBub2RlID0gc2VsZi5pbWFnZS4kaXRlbSA/IHNlbGYuaW1hZ2UuJGl0ZW0ubm9kZU5hbWUgOiBmYWxzZTtcblxuICAgIGlmIChpbWFnZURhdGEgJiYgc2VsZi52aWRlbyAmJiBub2RlICYmICgnSUZSQU1FJyA9PT0gbm9kZSB8fCAnVklERU8nID09PSBub2RlKSkge1xuICAgICAgbGV0IGggPSBpbWFnZURhdGEuaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IHcgPSBoICogc2VsZi5pbWFnZS53aWR0aCAvIHNlbGYuaW1hZ2UuaGVpZ2h0O1xuICAgICAgbGV0IG1sID0gKGltYWdlRGF0YS5jb250YWluZXIud2lkdGggLSB3KSAvIDI7XG4gICAgICBsZXQgbXQgPSBpbWFnZURhdGEuaW1hZ2UubWFyZ2luVG9wO1xuXG4gICAgICBpZiAoaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aCA+IHcpIHtcbiAgICAgICAgdyA9IGltYWdlRGF0YS5jb250YWluZXIud2lkdGg7XG4gICAgICAgIGggPSB3ICogc2VsZi5pbWFnZS5oZWlnaHQgLyBzZWxmLmltYWdlLndpZHRoO1xuICAgICAgICBtbCA9IDA7XG4gICAgICAgIG10ICs9IChpbWFnZURhdGEuaW1hZ2UuaGVpZ2h0IC0gaCkgLyAyO1xuICAgICAgfSAvLyBhZGQgdmlkZW8gaGVpZ2h0IG92ZXIgdGhhbiBuZWVkIHRvIGhpZGUgY29udHJvbHNcblxuXG4gICAgICBpZiAoJ0lGUkFNRScgPT09IG5vZGUpIHtcbiAgICAgICAgaCArPSA0MDA7XG4gICAgICAgIG10IC09IDIwMDtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jc3Moc2VsZi4kdmlkZW8sIHtcbiAgICAgICAgd2lkdGg6IGAke3d9cHhgLFxuICAgICAgICBtYXJnaW5MZWZ0OiBgJHttbH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aH1weGAsXG4gICAgICAgIG1hcmdpblRvcDogYCR7bXR9cHhgXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xuICB9OyAvLyBpbml0IHZpZGVvXG5cblxuICBjb25zdCBkZWZJbml0SW1nID0gSmFyYWxsYXgucHJvdG90eXBlLmluaXRJbWc7XG5cbiAgSmFyYWxsYXgucHJvdG90eXBlLmluaXRJbWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdFJlc3VsdCA9IGRlZkluaXRJbWcuYXBwbHkoc2VsZik7XG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy52aWRlb1NyYykge1xuICAgICAgc2VsZi5vcHRpb25zLnZpZGVvU3JjID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtdmlkZW8nKSB8fCBudWxsO1xuICAgIH1cblxuICAgIGlmIChzZWxmLm9wdGlvbnMudmlkZW9TcmMpIHtcbiAgICAgIHNlbGYuZGVmYXVsdEluaXRJbWdSZXN1bHQgPSBkZWZhdWx0UmVzdWx0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gIH07XG5cbiAgY29uc3QgZGVmQ2FuSW5pdFBhcmFsbGF4ID0gSmFyYWxsYXgucHJvdG90eXBlLmNhbkluaXRQYXJhbGxheDtcblxuICBKYXJhbGxheC5wcm90b3R5cGUuY2FuSW5pdFBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWZhdWx0UmVzdWx0ID0gZGVmQ2FuSW5pdFBhcmFsbGF4LmFwcGx5KHNlbGYpO1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMudmlkZW9TcmMpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICAgIH0gLy8gSW5pdCB2aWRlbyBhcGlcblxuXG4gICAgY29uc3QgdmlkZW8gPSBuZXcgVmlkZW9Xb3JrZXIoc2VsZi5vcHRpb25zLnZpZGVvU3JjLCB7XG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGxvb3A6IHNlbGYub3B0aW9ucy52aWRlb0xvb3AsXG4gICAgICBzaG93Q29udHJvbHM6IGZhbHNlLFxuICAgICAgYWNjZXNzaWJpbGl0eUhpZGRlbjogdHJ1ZSxcbiAgICAgIHN0YXJ0VGltZTogc2VsZi5vcHRpb25zLnZpZGVvU3RhcnRUaW1lIHx8IDAsXG4gICAgICBlbmRUaW1lOiBzZWxmLm9wdGlvbnMudmlkZW9FbmRUaW1lIHx8IDAsXG4gICAgICBtdXRlOiBzZWxmLm9wdGlvbnMudmlkZW9Wb2x1bWUgPyAwIDogMSxcbiAgICAgIHZvbHVtZTogc2VsZi5vcHRpb25zLnZpZGVvVm9sdW1lIHx8IDBcbiAgICB9KTsgLy8gY2FsbCBvblZpZGVvV29ya2VySW5pdCBldmVudFxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5vblZpZGVvV29ya2VySW5pdCkge1xuICAgICAgc2VsZi5vcHRpb25zLm9uVmlkZW9Xb3JrZXJJbml0LmNhbGwoc2VsZiwgdmlkZW8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGVmYXVsdEltYWdlKCkge1xuICAgICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtO1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBzZXQgaW1hZ2Ugd2lkdGggYW5kIGhlaWdodFxuXG4gICAgICAgIHNlbGYuY292ZXJJbWFnZSgpO1xuICAgICAgICBzZWxmLm9uU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvLmlzVmFsaWQoKSkge1xuICAgICAgLy8gRm9yY2UgZW5hYmxlIHBhcmFsbGF4LlxuICAgICAgLy8gV2hlbiB0aGUgcGFyYWxsYXggZGlzYWJsZWQgb24gbW9iaWxlIGRldmljZXMsIHdlIHN0aWxsIG5lZWQgdG8gZGlzcGxheSB2aWRlb3MuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheC9pc3N1ZXMvMTU5XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVQYXJhbGxheCgpKSB7XG4gICAgICAgIGRlZmF1bHRSZXN1bHQgPSB0cnVlO1xuICAgICAgICBzZWxmLmltYWdlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgc2VsZi5vcHRpb25zLnR5cGUgPSAnc2Nyb2xsJztcbiAgICAgICAgc2VsZi5vcHRpb25zLnNwZWVkID0gMTtcbiAgICAgIH0gLy8gaWYgcGFyYWxsYXggd2lsbCBub3QgYmUgaW5pdGVkLCB3ZSBjYW4gYWRkIHRodW1ibmFpbCBvbiBiYWNrZ3JvdW5kLlxuXG5cbiAgICAgIGlmICghZGVmYXVsdFJlc3VsdCkge1xuICAgICAgICBpZiAoIXNlbGYuZGVmYXVsdEluaXRJbWdSZXN1bHQpIHtcbiAgICAgICAgICB2aWRlby5nZXRJbWFnZVVSTCh1cmwgPT4ge1xuICAgICAgICAgICAgLy8gc2F2ZSBkZWZhdWx0IHVzZXIgc3R5bGVzXG4gICAgICAgICAgICBjb25zdCBjdXJTdHlsZSA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICBpZiAoY3VyU3R5bGUpIHtcbiAgICAgICAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUpO1xuICAgICAgICAgICAgfSAvLyBzZXQgbmV3IGJhY2tncm91bmRcblxuXG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybChcIiR7dXJsfVwiKWAsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBpbml0IHZpZGVvXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvLm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZpZGVvUGxheU9ubHlWaXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRPblNjcm9sbCA9IHNlbGYub25TY3JvbGw7XG5cbiAgICAgICAgICAgIHNlbGYub25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG9sZE9uU2Nyb2xsLmFwcGx5KHNlbGYpO1xuXG4gICAgICAgICAgICAgIGlmICghc2VsZi52aWRlb0Vycm9yICYmIChzZWxmLm9wdGlvbnMudmlkZW9Mb29wIHx8ICFzZWxmLm9wdGlvbnMudmlkZW9Mb29wICYmICFzZWxmLnZpZGVvRW5kZWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5vbignc3RhcnRlZCcsICgpID0+IHtcbiAgICAgICAgICBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0gPSBzZWxmLmltYWdlLiRpdGVtO1xuICAgICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLiR2aWRlbzsgLy8gc2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcblxuICAgICAgICAgIHNlbGYuaW1hZ2Uud2lkdGggPSBzZWxmLnZpZGVvLnZpZGVvV2lkdGggfHwgMTI4MDtcbiAgICAgICAgICBzZWxmLmltYWdlLmhlaWdodCA9IHNlbGYudmlkZW8udmlkZW9IZWlnaHQgfHwgNzIwO1xuICAgICAgICAgIHNlbGYuY292ZXJJbWFnZSgpO1xuICAgICAgICAgIHNlbGYub25TY3JvbGwoKTsgLy8gaGlkZSBpbWFnZVxuXG4gICAgICAgICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgICAgICAgc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGYudmlkZW9FbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoIXNlbGYub3B0aW9ucy52aWRlb0xvb3ApIHtcbiAgICAgICAgICAgIC8vIHNob3cgZGVmYXVsdCBpbWFnZSBpZiBMb29wIGRpc2FibGVkLlxuICAgICAgICAgICAgcmVzZXREZWZhdWx0SW1hZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZi52aWRlb0Vycm9yID0gdHJ1ZTsgLy8gc2hvdyBkZWZhdWx0IGltYWdlIGlmIHZpZGVvIGxvYWRpbmcgZXJyb3IuXG5cbiAgICAgICAgICByZXNldERlZmF1bHRJbWFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi52aWRlbyA9IHZpZGVvOyAvLyBzZXQgaW1hZ2UgaWYgbm90IGV4aXN0c1xuXG4gICAgICAgIGlmICghc2VsZi5kZWZhdWx0SW5pdEltZ1Jlc3VsdCkge1xuICAgICAgICAgIC8vIHNldCBlbXB0eSBpbWFnZSBvbiBzZWxmLWhvc3RlZCB2aWRlbyBpZiBub3QgZGVmaW5lZFxuICAgICAgICAgIHNlbGYuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyc7XG5cbiAgICAgICAgICBpZiAoJ2xvY2FsJyAhPT0gdmlkZW8udHlwZSkge1xuICAgICAgICAgICAgdmlkZW8uZ2V0SW1hZ2VVUkwodXJsID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5pbWFnZS5iZ0ltYWdlID0gYHVybChcIiR7dXJsfVwiKWA7XG4gICAgICAgICAgICAgIHNlbGYuaW5pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gIH07IC8vIERlc3Ryb3kgdmlkZW8gcGFyYWxsYXhcblxuXG4gIGNvbnN0IGRlZkRlc3Ryb3kgPSBKYXJhbGxheC5wcm90b3R5cGUuZGVzdHJveTtcblxuICBKYXJhbGxheC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmIChzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0pIHtcbiAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICBkZWxldGUgc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtO1xuICAgIH1cblxuICAgIGRlZkRlc3Ryb3kuYXBwbHkoc2VsZik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGphcmFsbGF4RWxlbWVudCQxKGphcmFsbGF4ID0gZ2xvYmFsJDIuamFyYWxsYXgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS53YXJuKFwiSmFyYWxsYXggRWxlbWVudCBleHRlbnNpb24gaXMgREVQUkVDQVRFRCwgcGxlYXNlLCBhdm9pZCB1c2luZyBpdC4gV2UgcmVjb21tZW5kIHlvdSBsb29rIGF0IHNvbWV0aGluZyBsaWtlIGBsYXguanNgIGxpYnJhcnkgPGh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4Zm94eS9sYXguanM+LiBJdCBpcyBtdWNoIG1vcmUgcG93ZXJmdWwgYW5kIGhhcyBhIGxlc3MgY29kZSAoaW4gY2FzZXMgd2hlbiB5b3UgZG9uJ3Qgd2FudCB0byBhZGQgcGFyYWxsYXggYmFja2dyb3VuZHMpLlwiKTtcblxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBqYXJhbGxheCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IEphcmFsbGF4ID0gamFyYWxsYXguY29uc3RydWN0b3I7IC8vIHJlZGVmaW5lIGRlZmF1bHQgbWV0aG9kc1xuXG4gIFsnaW5pdEltZycsICdjYW5Jbml0UGFyYWxsYXgnLCAnaW5pdCcsICdkZXN0cm95JywgJ2NvdmVySW1hZ2UnLCAnaXNWaXNpYmxlJywgJ29uU2Nyb2xsJywgJ29uUmVzaXplJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGRlZiA9IEphcmFsbGF4LnByb3RvdHlwZVtrZXldO1xuXG4gICAgSmFyYWxsYXgucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICgnaW5pdEltZycgPT09IGtleSAmJiBudWxsICE9PSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1lbGVtZW50JykpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLnR5cGUgPSAnZWxlbWVudCc7XG4gICAgICAgIHNlbGYucHVyZU9wdGlvbnMuc3BlZWQgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1lbGVtZW50JykgfHwgJzEwMCc7XG4gICAgICB9XG5cbiAgICAgIGlmICgnZWxlbWVudCcgIT09IHNlbGYub3B0aW9ucy50eXBlKSB7XG4gICAgICAgIHJldHVybiBkZWYuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYucHVyZU9wdGlvbnMudGhyZXNob2xkID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyZXNob2xkJykgfHwgJyc7XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkQXJyID0gYCR7c2VsZi5wdXJlT3B0aW9ucy5zcGVlZH1gLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWQgPSBzZWxmLnB1cmVPcHRpb25zLnNwZWVkIHx8IDA7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWRZID0gc3BlZWRBcnJbMF0gPyBwYXJzZUZsb2F0KHNwZWVkQXJyWzBdKSA6IDA7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWRYID0gc3BlZWRBcnJbMV0gPyBwYXJzZUZsb2F0KHNwZWVkQXJyWzFdKSA6IDA7XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGRBcnIgPSBzZWxmLnB1cmVPcHRpb25zLnRocmVzaG9sZC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnRocmVzaG9sZFkgPSB0aHJlc2hvbGRBcnJbMF0gPyBwYXJzZUZsb2F0KHRocmVzaG9sZEFyclswXSkgOiBudWxsO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLnRocmVzaG9sZFggPSB0aHJlc2hvbGRBcnJbMV0gPyBwYXJzZUZsb2F0KHRocmVzaG9sZEFyclsxXSkgOiBudWxsO1xuICAgICAgICAgICAgZGVmLmFwcGx5KHNlbGYsIGFyZ3MpOyAvLyByZXN0b3JlIGJhY2tncm91bmQgaW1hZ2UgaWYgYXZhaWxhYmxlLlxuXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0eWxlc1RhZyA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpO1xuXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxTdHlsZXNUYWcpIHtcbiAgICAgICAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZXNUYWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnb25SZXNpemUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZlRyYW5zZm9ybSA9IHNlbGYuY3NzKHNlbGYuJGl0ZW0sICd0cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc2VsZi4kaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHNlbGYuaXRlbURhdGEgPSB7XG4gICAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICB5OiByZWN0LnRvcCArIHNlbGYuZ2V0V2luZG93RGF0YSgpLnksXG4gICAgICAgICAgICAgIHg6IHJlY3QubGVmdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBkZWZUcmFuc2Zvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ29uU2Nyb2xsJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB3bmQgPSBzZWxmLmdldFdpbmRvd0RhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlclBlcmNlbnQgPSAod25kLnkgKyB3bmQuaGVpZ2h0IC8gMiAtIHNlbGYuaXRlbURhdGEueSAtIHNlbGYuaXRlbURhdGEuaGVpZ2h0IC8gMikgLyAod25kLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBjZW50ZXJQZXJjZW50ICogc2VsZi5vcHRpb25zLnNwZWVkWTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVYID0gY2VudGVyUGVyY2VudCAqIHNlbGYub3B0aW9ucy5zcGVlZFg7XG4gICAgICAgICAgICBsZXQgbXkgPSBtb3ZlWTtcbiAgICAgICAgICAgIGxldCBteCA9IG1vdmVYO1xuICAgICAgICAgICAgaWYgKG51bGwgIT09IHNlbGYub3B0aW9ucy50aHJlc2hvbGRZICYmIG1vdmVZID4gc2VsZi5vcHRpb25zLnRocmVzaG9sZFkpIG15ID0gMDtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBzZWxmLm9wdGlvbnMudGhyZXNob2xkWCAmJiBtb3ZlWCA+IHNlbGYub3B0aW9ucy50aHJlc2hvbGRYKSBteCA9IDA7XG4gICAgICAgICAgICBzZWxmLmNzcyhzZWxmLiRpdGVtLCB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7bXh9cHgsJHtteX1weCwwKWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2luaXRJbWcnOlxuICAgICAgICBjYXNlICdpc1Zpc2libGUnOlxuICAgICAgICBjYXNlICdjb3ZlckltYWdlJzpcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG4gIH0pO1xufVxuXG5jb25zdCBqYXJhbGxheCA9IGphcmFsbGF4JDE7XG5jb25zdCBqYXJhbGxheFZpZGVvID0gZnVuY3Rpb24gamFyYWxsYXhWaWRlbygpIHtcbiAgcmV0dXJuIGphcmFsbGF4VmlkZW8kMShqYXJhbGxheCk7XG59O1xuY29uc3QgamFyYWxsYXhFbGVtZW50ID0gZnVuY3Rpb24gamFyYWxsYXhFbGVtZW50KCkge1xuICByZXR1cm4gamFyYWxsYXhFbGVtZW50JDEoamFyYWxsYXgpO1xufTtcblxuZXhwb3J0IHsgamFyYWxsYXgsIGphcmFsbGF4RWxlbWVudCwgamFyYWxsYXhWaWRlbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amFyYWxsYXguZXNtLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmphcmFsbGF4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi5qYXJhbGxheCA+IC5qYXJhbGxheC1pbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL2phcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuamFyYWxsYXgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG59XFxuLmphcmFsbGF4ID4gLmphcmFsbGF4LWltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gMTQ5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG52YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDE0OSk7XG4vKioqKioqLyB9KSgpXG47Il0sInNvdXJjZVJvb3QiOiIifQ==