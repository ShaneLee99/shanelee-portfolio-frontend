exports.ids = [0];
exports.modules = {

/***/ "./components/Jarallax.js":
/*!********************************!*\
  !*** ./components/Jarallax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Jarallax; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/dist/jarallax.cjs");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ "./node_modules/jarallax/dist/jarallax.css");
/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Pleht\\OneDrive\\Desktop\\MyWebsite\\crypticzxi-portfolio-frontend\\components\\Jarallax.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // Optional video extension

Object(jarallax__WEBPACK_IMPORTED_MODULE_2__["jarallaxVideo"])();
function Jarallax(_ref) {
  let {
    className = '',
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  const $el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // Init Jarallax.

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if ($el.current) {
      Object(jarallax__WEBPACK_IMPORTED_MODULE_2__["jarallax"])($el.current, props);
    } // Destroy Jarallax.


    return function destroy() {
      if ($el.current) {
        Object(jarallax__WEBPACK_IMPORTED_MODULE_2__["jarallax"])($el.current, 'destroy');
      }
    };
  }, []); // Update options.

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if ($el.current) {
      Object(jarallax__WEBPACK_IMPORTED_MODULE_2__["jarallax"])($el.current, 'destroy');
      Object(jarallax__WEBPACK_IMPORTED_MODULE_2__["jarallax"])($el.current, props);
    }
  }, [props]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: $el,
    className: `jarallax ${className}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.cjs":
/*!*************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.cjs ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Jarallax v2.0.3 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */


Object.defineProperty(exports, '__esModule', { value: true });

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

exports.jarallax = jarallax;
exports.jarallaxElement = jarallaxElement;
exports.jarallaxVideo = jarallaxVideo;
//# sourceMappingURL=jarallax.cjs.map


/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.css":
/*!*************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0phcmFsbGF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qYXJhbGxheC9kaXN0L2phcmFsbGF4LmNqcyJdLCJuYW1lcyI6WyJqYXJhbGxheFZpZGVvIiwiSmFyYWxsYXgiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiJGVsIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImphcmFsbGF4IiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7QUFDQUEsOERBQWE7QUFFRSxTQUFTQyxRQUFULE9BQTBEO0FBQUEsTUFBeEM7QUFBRUMsYUFBUyxHQUFHLEVBQWQ7QUFBa0JDO0FBQWxCLEdBQXdDO0FBQUEsTUFBVEMsS0FBUzs7QUFDdkUsUUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQixDQUR1RSxDQUd2RTs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUYsR0FBRyxDQUFDRyxPQUFSLEVBQWlCO0FBQ2ZDLCtEQUFRLENBQUNKLEdBQUcsQ0FBQ0csT0FBTCxFQUFjSixLQUFkLENBQVI7QUFDRCxLQUhhLENBS2Q7OztBQUNBLFdBQU8sU0FBU00sT0FBVCxHQUFtQjtBQUN4QixVQUFJTCxHQUFHLENBQUNHLE9BQVIsRUFBaUI7QUFDZkMsaUVBQVEsQ0FBQ0osR0FBRyxDQUFDRyxPQUFMLEVBQWMsU0FBZCxDQUFSO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FYUSxFQVdOLEVBWE0sQ0FBVCxDQUp1RSxDQWlCdkU7O0FBQ0FELHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlGLEdBQUcsQ0FBQ0csT0FBUixFQUFpQjtBQUNmQywrREFBUSxDQUFDSixHQUFHLENBQUNHLE9BQUwsRUFBYyxTQUFkLENBQVI7QUFDQUMsK0RBQVEsQ0FBQ0osR0FBRyxDQUFDRyxPQUFMLEVBQWNKLEtBQWQsQ0FBUjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNBLEtBQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBSyxPQUFHLEVBQUVDLEdBQVY7QUFBZSxhQUFTLEVBQUcsWUFBV0gsU0FBVSxFQUFoRDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7O0FDdENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsY0FBYyxTQUFTLGVBQWUsVUFBVTtBQUNuRztBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDO0FBQ2pDLHFDQUFxQyxnQkFBZ0I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLG1GQUFtRjs7QUFFbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wscURBQXFEOztBQUVyRDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLHNCQUFzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsbUVBQW1FLGdCQUFnQjtBQUNuRixrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdDQUFnQztBQUN2QyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxlQUFlO0FBQzNFLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7O0FBR0wsK0NBQStDOztBQUUvQztBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0wsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixvQkFBb0IsU0FBUztBQUM3QixpREFBaUQsVUFBVTtBQUMzRCxnQkFBZ0IsV0FBVztBQUMzQixLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJKQUEySjs7QUFFM0o7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLGtDQUFrQyxNQUFNO0FBQ3hDLEtBQUs7OztBQUdMO0FBQ0EsdUVBQXVFOztBQUV2RTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7O0FBRUEsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxTQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWEsR0FBRyxxQkFBcUI7QUFDL0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1EQUFtRCxhQUFhLEdBQUcscUJBQXFCO0FBQ3hGO0FBQ0E7O0FBRUEsa0RBQWtELGFBQWEsR0FBRyxxQkFBcUI7QUFDdkY7O0FBRUE7QUFDQSx5Q0FBeUM7O0FBRXpDLG1FQUFtRSxTQUFTOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsSUFBSSxHQUFHLDRDQUE0QztBQUN6RixXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFLGFBQWEsR0FBRyxvQkFBb0I7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHOztBQUVoRztBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsSUFBSTtBQUMxRSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7OztBQUdULGlEQUFpRDs7QUFFakQsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixFQUFFO0FBQ3BCLHVCQUF1QixHQUFHO0FBQzFCLG1CQUFtQixFQUFFO0FBQ3JCLHNCQUFzQixHQUFHO0FBQ3pCLE9BQU87QUFDUDs7QUFFQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0EsU0FBUztBQUNULDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBLDJDQUEyQyxJQUFJO0FBQy9DO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUcsS0FBSyxHQUFHO0FBQ25ELGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBqYXJhbGxheCwgamFyYWxsYXhWaWRlbyB9IGZyb20gJ2phcmFsbGF4JztcclxuaW1wb3J0ICdqYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzcyc7XHJcblxyXG4vLyBPcHRpb25hbCB2aWRlbyBleHRlbnNpb25cclxuamFyYWxsYXhWaWRlbygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSmFyYWxsYXgoeyBjbGFzc05hbWUgPSAnJywgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCAkZWwgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gSW5pdCBKYXJhbGxheC5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCRlbC5jdXJyZW50KSB7XHJcbiAgICAgIGphcmFsbGF4KCRlbC5jdXJyZW50LCBwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzdHJveSBKYXJhbGxheC5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICBpZiAoJGVsLmN1cnJlbnQpIHtcclxuICAgICAgICBqYXJhbGxheCgkZWwuY3VycmVudCwgJ2Rlc3Ryb3knKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFVwZGF0ZSBvcHRpb25zLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoJGVsLmN1cnJlbnQpIHtcclxuICAgICAgamFyYWxsYXgoJGVsLmN1cnJlbnQsICdkZXN0cm95Jyk7XHJcbiAgICAgIGphcmFsbGF4KCRlbC5jdXJyZW50LCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17JGVsfSBjbGFzc05hbWU9e2BqYXJhbGxheCAke2NsYXNzTmFtZX1gfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSIsIi8qIVxuICogSmFyYWxsYXggdjIuMC4zIChodHRwczovL2dpdGh1Yi5jb20vbmstby9qYXJhbGxheClcbiAqIENvcHlyaWdodCAyMDIyIG5LIDxodHRwczovL25rZGV2LmluZm8+XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcbiAgaWYgKCdjb21wbGV0ZScgPT09IGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgJ2ludGVyYWN0aXZlJyA9PT0gZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgIC8vIEFscmVhZHkgcmVhZHkgb3IgaW50ZXJhY3RpdmUsIGV4ZWN1dGUgY2FsbGJhY2tcbiAgICBjYWxsYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmxldCB3aW4kMTtcblxuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygd2luZG93KSB7XG4gIHdpbiQxID0gd2luZG93O1xufSBlbHNlIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGdsb2JhbCkge1xuICB3aW4kMSA9IGdsb2JhbDtcbn0gZWxzZSBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzZWxmKSB7XG4gIHdpbiQxID0gc2VsZjtcbn0gZWxzZSB7XG4gIHdpbiQxID0ge307XG59XG5cbnZhciBnbG9iYWwkMiA9IHdpbiQxO1xuXG5jb25zdCB7XG4gIG5hdmlnYXRvclxufSA9IGdsb2JhbCQyO1xuY29uc3QgaXNNb2JpbGUgPSAvKiNfX1BVUkVfXyovIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbmxldCAkZGV2aWNlSGVscGVyO1xuLyoqXG4gKiBUaGUgbW9zdCBwb3B1bGFyIG1vYmlsZSBicm93c2VycyBjaGFuZ2VzIGhlaWdodCBhZnRlciBwYWdlIHNjcm9sbCBhbmQgdGhpcyBnZW5lcmF0ZXMgaW1hZ2UganVtcGluZy5cbiAqIFdlIGNhbiBmaXggaXQgdXNpbmcgdGhpcyB3b3JrYXJvdW5kIHdpdGggdmggdW5pdHMuXG4gKi9cblxuZnVuY3Rpb24gZ2V0RGV2aWNlSGVpZ2h0KCkge1xuICBpZiAoISRkZXZpY2VIZWxwZXIgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICRkZXZpY2VIZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkZGV2aWNlSGVscGVyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGZpeGVkOyB0b3A6IC05OTk5cHg7IGxlZnQ6IDA7IGhlaWdodDogMTAwdmg7IHdpZHRoOiAwOyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkZGV2aWNlSGVscGVyKTtcbiAgfVxuXG4gIHJldHVybiAoJGRldmljZUhlbHBlciA/ICRkZXZpY2VIZWxwZXIuY2xpZW50SGVpZ2h0IDogMCkgfHwgZ2xvYmFsJDIuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbn0gLy8gV2luZG93IGhlaWdodCBkYXRhXG5cblxubGV0IHduZEg7XG5cbmZ1bmN0aW9uIHVwZGF0ZVduZFZhcnMoKSB7XG4gIGlmIChpc01vYmlsZSkge1xuICAgIHduZEggPSBnZXREZXZpY2VIZWlnaHQoKTtcbiAgfSBlbHNlIHtcbiAgICB3bmRIID0gZ2xvYmFsJDIuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuXG51cGRhdGVXbmRWYXJzKCk7XG5nbG9iYWwkMi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVXbmRWYXJzKTtcbmdsb2JhbCQyLmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlV25kVmFycyk7XG5nbG9iYWwkMi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdXBkYXRlV25kVmFycyk7XG5yZWFkeSgoKSA9PiB7XG4gIHVwZGF0ZVduZFZhcnMoKTtcbn0pOyAvLyBsaXN0IHdpdGggYWxsIGphcmFsbGF4IGluc3RhbmNlc1xuLy8gbmVlZCB0byByZW5kZXIgYWxsIGluIG9uZSBzY3JvbGwvcmVzaXplIGV2ZW50XG5cbmNvbnN0IGphcmFsbGF4TGlzdCA9IFtdOyAvLyBnZXQgYWxsIHBhcmVudHMgb2YgdGhlIGVsZW1lbnQuXG5cbmZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICBjb25zdCBwYXJlbnRzID0gW107XG5cbiAgd2hpbGUgKG51bGwgIT09IGVsZW0ucGFyZW50RWxlbWVudCkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoMSA9PT0gZWxlbS5ub2RlVHlwZSkge1xuICAgICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJhbGxheCgpIHtcbiAgaWYgKCFqYXJhbGxheExpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgamFyYWxsYXhMaXN0LmZvckVhY2goKGRhdGEsIGspID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnN0YW5jZSxcbiAgICAgIG9sZERhdGFcbiAgICB9ID0gZGF0YTtcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gaW5zdGFuY2UuJGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIHdpZHRoOiBjbGllbnRSZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBjbGllbnRSZWN0LmhlaWdodCxcbiAgICAgIHRvcDogY2xpZW50UmVjdC50b3AsXG4gICAgICBib3R0b206IGNsaWVudFJlY3QuYm90dG9tLFxuICAgICAgd25kVzogZ2xvYmFsJDIuaW5uZXJXaWR0aCxcbiAgICAgIHduZEhcbiAgICB9O1xuICAgIGNvbnN0IGlzUmVzaXplZCA9ICFvbGREYXRhIHx8IG9sZERhdGEud25kVyAhPT0gbmV3RGF0YS53bmRXIHx8IG9sZERhdGEud25kSCAhPT0gbmV3RGF0YS53bmRIIHx8IG9sZERhdGEud2lkdGggIT09IG5ld0RhdGEud2lkdGggfHwgb2xkRGF0YS5oZWlnaHQgIT09IG5ld0RhdGEuaGVpZ2h0O1xuICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSBpc1Jlc2l6ZWQgfHwgIW9sZERhdGEgfHwgb2xkRGF0YS50b3AgIT09IG5ld0RhdGEudG9wIHx8IG9sZERhdGEuYm90dG9tICE9PSBuZXdEYXRhLmJvdHRvbTtcbiAgICBqYXJhbGxheExpc3Rba10ub2xkRGF0YSA9IG5ld0RhdGE7XG5cbiAgICBpZiAoaXNSZXNpemVkKSB7XG4gICAgICBpbnN0YW5jZS5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGlmIChpc1Njcm9sbGVkKSB7XG4gICAgICBpbnN0YW5jZS5vblNjcm9sbCgpO1xuICAgIH1cbiAgfSk7XG4gIGdsb2JhbCQyLnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQYXJhbGxheCk7XG59XG5cbmxldCBpbnN0YW5jZUlEID0gMDsgLy8gSmFyYWxsYXggY2xhc3NcblxuY2xhc3MgSmFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihpdGVtLCB1c2VyT3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuaW5zdGFuY2VJRCA9IGluc3RhbmNlSUQ7XG4gICAgaW5zdGFuY2VJRCArPSAxO1xuICAgIHNlbGYuJGl0ZW0gPSBpdGVtO1xuICAgIHNlbGYuZGVmYXVsdHMgPSB7XG4gICAgICB0eXBlOiAnc2Nyb2xsJyxcbiAgICAgIC8vIHR5cGUgb2YgcGFyYWxsYXg6IHNjcm9sbCwgc2NhbGUsIG9wYWNpdHksIHNjYWxlLW9wYWNpdHksIHNjcm9sbC1vcGFjaXR5XG4gICAgICBzcGVlZDogMC41LFxuICAgICAgLy8gc3VwcG9ydGVkIHZhbHVlIGZyb20gLTEgdG8gMlxuICAgICAgaW1nU3JjOiBudWxsLFxuICAgICAgaW1nRWxlbWVudDogJy5qYXJhbGxheC1pbWcnLFxuICAgICAgaW1nU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGltZ1Bvc2l0aW9uOiAnNTAlIDUwJScsXG4gICAgICBpbWdSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgLy8gc3VwcG9ydGVkIG9ubHkgZm9yIGJhY2tncm91bmQsIG5vdCBmb3IgPGltZz4gdGFnXG4gICAgICBrZWVwSW1nOiBmYWxzZSxcbiAgICAgIC8vIGtlZXAgPGltZz4gdGFnIGluIGl0J3MgZGVmYXVsdCBwbGFjZVxuICAgICAgZWxlbWVudEluVmlld3BvcnQ6IG51bGwsXG4gICAgICB6SW5kZXg6IC0xMDAsXG4gICAgICBkaXNhYmxlUGFyYWxsYXg6IGZhbHNlLFxuICAgICAgZGlzYWJsZVZpZGVvOiBmYWxzZSxcbiAgICAgIC8vIHZpZGVvXG4gICAgICB2aWRlb1NyYzogbnVsbCxcbiAgICAgIHZpZGVvU3RhcnRUaW1lOiAwLFxuICAgICAgdmlkZW9FbmRUaW1lOiAwLFxuICAgICAgdmlkZW9Wb2x1bWU6IDAsXG4gICAgICB2aWRlb0xvb3A6IHRydWUsXG4gICAgICB2aWRlb1BsYXlPbmx5VmlzaWJsZTogdHJ1ZSxcbiAgICAgIHZpZGVvTGF6eUxvYWRpbmc6IHRydWUsXG4gICAgICAvLyBldmVudHNcbiAgICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgICAgLy8gZnVuY3Rpb24oY2FsY3VsYXRpb25zKSB7fVxuICAgICAgb25Jbml0OiBudWxsLFxuICAgICAgLy8gZnVuY3Rpb24oKSB7fVxuICAgICAgb25EZXN0cm95OiBudWxsLFxuICAgICAgLy8gZnVuY3Rpb24oKSB7fVxuICAgICAgb25Db3ZlckltYWdlOiBudWxsIC8vIGZ1bmN0aW9uKCkge31cblxuICAgIH07IC8vIHByZXBhcmUgZGF0YS1vcHRpb25zXG5cbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IHNlbGYuJGl0ZW0uZGF0YXNldCB8fCB7fTtcbiAgICBjb25zdCBwdXJlRGF0YU9wdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhT3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgbG93ZUNhc2VPcHRpb24gPSBrZXkuc3Vic3RyKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuXG4gICAgICBpZiAobG93ZUNhc2VPcHRpb24gJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzZWxmLmRlZmF1bHRzW2xvd2VDYXNlT3B0aW9uXSkge1xuICAgICAgICBwdXJlRGF0YU9wdGlvbnNbbG93ZUNhc2VPcHRpb25dID0gZGF0YU9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxmLm9wdGlvbnMgPSBzZWxmLmV4dGVuZCh7fSwgc2VsZi5kZWZhdWx0cywgcHVyZURhdGFPcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gICAgc2VsZi5wdXJlT3B0aW9ucyA9IHNlbGYuZXh0ZW5kKHt9LCBzZWxmLm9wdGlvbnMpOyAvLyBwcmVwYXJlICd0cnVlJyBhbmQgJ2ZhbHNlJyBzdHJpbmdzIHRvIGJvb2xlYW5cblxuICAgIE9iamVjdC5rZXlzKHNlbGYub3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCd0cnVlJyA9PT0gc2VsZi5vcHRpb25zW2tleV0pIHtcbiAgICAgICAgc2VsZi5vcHRpb25zW2tleV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgnZmFsc2UnID09PSBzZWxmLm9wdGlvbnNba2V5XSkge1xuICAgICAgICBzZWxmLm9wdGlvbnNba2V5XSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pOyAvLyBmaXggc3BlZWQgb3B0aW9uIFstMS4wLCAyLjBdXG5cbiAgICBzZWxmLm9wdGlvbnMuc3BlZWQgPSBNYXRoLm1pbigyLCBNYXRoLm1heCgtMSwgcGFyc2VGbG9hdChzZWxmLm9wdGlvbnMuc3BlZWQpKSk7IC8vIHByZXBhcmUgZGlzYWJsZVBhcmFsbGF4IGNhbGxiYWNrXG5cbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KSB7XG4gICAgICBzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4ID0gbmV3IFJlZ0V4cChzZWxmLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgY29uc3QgZGlzYWJsZVBhcmFsbGF4UmVnZXhwID0gc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheDtcblxuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9ICgpID0+IGRpc2FibGVQYXJhbGxheFJlZ2V4cC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCkge1xuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVQYXJhbGxheCA9ICgpID0+IGZhbHNlO1xuICAgIH0gLy8gcHJlcGFyZSBkaXNhYmxlVmlkZW8gY2FsbGJhY2tcblxuXG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2Ygc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbykge1xuICAgICAgc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyA9IG5ldyBSZWdFeHAoc2VsZi5vcHRpb25zLmRpc2FibGVWaWRlbyk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIGNvbnN0IGRpc2FibGVWaWRlb1JlZ2V4cCA9IHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW87XG5cbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSAoKSA9PiBkaXNhYmxlVmlkZW9SZWdleHAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG5cbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8pIHtcbiAgICAgIHNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8gPSAoKSA9PiBmYWxzZTtcbiAgICB9IC8vIGN1c3RvbSBlbGVtZW50IHRvIGNoZWNrIGlmIHBhcmFsbGF4IGluIHZpZXdwb3J0XG5cblxuICAgIGxldCBlbGVtZW50SW5WUCA9IHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydDsgLy8gZ2V0IGZpcnN0IGl0ZW0gZnJvbSBhcnJheVxuXG4gICAgaWYgKGVsZW1lbnRJblZQICYmICdvYmplY3QnID09PSB0eXBlb2YgZWxlbWVudEluVlAgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBlbGVtZW50SW5WUC5sZW5ndGgpIHtcbiAgICAgIFtlbGVtZW50SW5WUF0gPSBlbGVtZW50SW5WUDtcbiAgICB9IC8vIGNoZWNrIGlmIGRvbSBlbGVtZW50XG5cblxuICAgIGlmICghKGVsZW1lbnRJblZQIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRJblZQID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxmLm9wdGlvbnMuZWxlbWVudEluVmlld3BvcnQgPSBlbGVtZW50SW5WUDtcbiAgICBzZWxmLmltYWdlID0ge1xuICAgICAgc3JjOiBzZWxmLm9wdGlvbnMuaW1nU3JjIHx8IG51bGwsXG4gICAgICAkY29udGFpbmVyOiBudWxsLFxuICAgICAgdXNlSW1nVGFnOiBmYWxzZSxcbiAgICAgIC8vIDEuIFBvc2l0aW9uIGZpeGVkIGlzIG5lZWRlZCBmb3IgdGhlIG1vc3Qgb2YgYnJvd3NlcnMgYmVjYXVzZSBhYnNvbHV0ZSBwb3NpdGlvbiBoYXZlIGdsaXRjaGVzXG4gICAgICAvLyAyLiBPbiBNYWNPUyB3aXRoIHNtb290aCBzY3JvbGwgdGhlcmUgaXMgYSBodWdlIGxhZ3Mgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvbiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy83NVxuICAgICAgLy8gMy4gUHJldmlvdXNseSB1c2VkICdhYnNvbHV0ZScgZm9yIG1vYmlsZSBkZXZpY2VzLiBCdXQgd2UgcmUtdGVzdGVkIG9uIGlQaG9uZSAxMiBhbmQgJ2ZpeGVkJyBwb3NpdGlvbiBpcyB3b3JraW5nIGJldHRlciwgdGhlbiAnYWJzb2x1dGUnLCBzbyBmb3Igbm93IHBvc2l0aW9uIGlzIGFsd2F5cyAnZml4ZWQnXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJ1xuICAgIH07XG5cbiAgICBpZiAoc2VsZi5pbml0SW1nKCkgJiYgc2VsZi5jYW5Jbml0UGFyYWxsYXgoKSkge1xuICAgICAgc2VsZi5pbml0KCk7XG4gICAgfVxuICB9IC8vIGFkZCBzdHlsZXMgdG8gZWxlbWVudFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgY3NzKGVsLCBzdHlsZXMpIHtcbiAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzdHlsZXMpIHtcbiAgICAgIHJldHVybiBnbG9iYWwkMi5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBlbC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsO1xuICB9IC8vIEV4dGVuZCBsaWtlIGpRdWVyeS5leHRlbmRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIGV4dGVuZChvdXQsIC4uLmFyZ3MpIHtcbiAgICBvdXQgPSBvdXQgfHwge307XG4gICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmICghYXJnc1tpXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKGFyZ3NbaV0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgb3V0W2tleV0gPSBhcmdzW2ldW2tleV07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0O1xuICB9IC8vIGdldCB3aW5kb3cgc2l6ZSBhbmQgc2Nyb2xsIHBvc2l0aW9uLiBVc2VmdWwgZm9yIGV4dGVuc2lvbnNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIGdldFdpbmRvd0RhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBnbG9iYWwkMi5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogd25kSCxcbiAgICAgIHk6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9IC8vIEphcmFsbGF4IGZ1bmN0aW9uc1xuXG5cbiAgaW5pdEltZygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gZmluZCBpbWFnZSBlbGVtZW50XG5cbiAgICBsZXQgJGltZ0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuaW1nRWxlbWVudDtcblxuICAgIGlmICgkaW1nRWxlbWVudCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mICRpbWdFbGVtZW50KSB7XG4gICAgICAkaW1nRWxlbWVudCA9IHNlbGYuJGl0ZW0ucXVlcnlTZWxlY3RvcigkaW1nRWxlbWVudCk7XG4gICAgfSAvLyBjaGVjayBpZiBkb20gZWxlbWVudFxuXG5cbiAgICBpZiAoISgkaW1nRWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICBpZiAoc2VsZi5vcHRpb25zLmltZ1NyYykge1xuICAgICAgICAkaW1nRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAkaW1nRWxlbWVudC5zcmMgPSBzZWxmLm9wdGlvbnMuaW1nU3JjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGltZ0VsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkaW1nRWxlbWVudCkge1xuICAgICAgaWYgKHNlbGYub3B0aW9ucy5rZWVwSW1nKSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSAkaW1nRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtID0gJGltZ0VsZW1lbnQ7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW1QYXJlbnQgPSAkaW1nRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmltYWdlLnVzZUltZ1RhZyA9IHRydWU7XG4gICAgfSAvLyB0cnVlIGlmIHRoZXJlIGlzIGltZyB0YWdcblxuXG4gICAgaWYgKHNlbGYuaW1hZ2UuJGl0ZW0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gZ2V0IGltYWdlIHNyY1xuXG5cbiAgICBpZiAobnVsbCA9PT0gc2VsZi5pbWFnZS5zcmMpIHtcbiAgICAgIHNlbGYuaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyc7XG4gICAgICBzZWxmLmltYWdlLmJnSW1hZ2UgPSBzZWxmLmNzcyhzZWxmLiRpdGVtLCAnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIH1cblxuICAgIHJldHVybiAhKCFzZWxmLmltYWdlLmJnSW1hZ2UgfHwgJ25vbmUnID09PSBzZWxmLmltYWdlLmJnSW1hZ2UpO1xuICB9XG5cbiAgY2FuSW5pdFBhcmFsbGF4KCkge1xuICAgIHJldHVybiAhdGhpcy5vcHRpb25zLmRpc2FibGVQYXJhbGxheCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBjb250YWluZXJTdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIGxldCBpbWFnZVN0eWxlcyA9IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHRyYW5zZm9ybVN0eWxlOiAncHJlc2VydmUtM2QnLFxuICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0sb3BhY2l0eSdcbiAgICB9O1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMua2VlcEltZykge1xuICAgICAgLy8gc2F2ZSBkZWZhdWx0IHVzZXIgc3R5bGVzXG4gICAgICBjb25zdCBjdXJTdHlsZSA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICBpZiAoY3VyU3R5bGUpIHtcbiAgICAgICAgc2VsZi4kaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJywgY3VyU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5pbWFnZS51c2VJbWdUYWcpIHtcbiAgICAgICAgY29uc3QgY3VySW1nU3R5bGUgPSBzZWxmLmltYWdlLiRpdGVtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICBpZiAoY3VySW1nU3R5bGUpIHtcbiAgICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnLCBjdXJJbWdTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIHNldCByZWxhdGl2ZSBwb3NpdGlvbiBhbmQgei1pbmRleCB0byB0aGUgcGFyZW50XG5cblxuICAgIGlmICgnc3RhdGljJyA9PT0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3Bvc2l0aW9uJykpIHtcbiAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnYXV0bycgPT09IHNlbGYuY3NzKHNlbGYuJGl0ZW0sICd6LWluZGV4JykpIHtcbiAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgekluZGV4OiAwXG4gICAgICB9KTtcbiAgICB9IC8vIGNvbnRhaW5lciBmb3IgcGFyYWxsYXggaW1hZ2VcblxuXG4gICAgc2VsZi5pbWFnZS4kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZi5jc3Moc2VsZi5pbWFnZS4kY29udGFpbmVyLCBjb250YWluZXJTdHlsZXMpO1xuICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGNvbnRhaW5lciwge1xuICAgICAgJ3otaW5kZXgnOiBzZWxmLm9wdGlvbnMuekluZGV4XG4gICAgfSk7IC8vIGl0IHdpbGwgcmVtb3ZlIHNvbWUgaW1hZ2Ugb3ZlcmxhcHBpbmdcbiAgICAvLyBvdmVybGFwcGluZyBvY2N1ciBkdWUgdG8gYW4gaW1hZ2UgcG9zaXRpb24gZml4ZWQgaW5zaWRlIGFic29sdXRlIHBvc2l0aW9uIGVsZW1lbnRcbiAgICAvLyBuZWVkZWQgb25seSB3aGVuIGJhY2tncm91bmQgaW4gZml4ZWQgcG9zaXRpb25cblxuICAgIGlmICgnZml4ZWQnID09PSB0aGlzLmltYWdlLnBvc2l0aW9uKSB7XG4gICAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRjb250YWluZXIsIHtcbiAgICAgICAgJy13ZWJraXQtY2xpcC1wYXRoJzogJ3BvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKScsXG4gICAgICAgICdjbGlwLXBhdGgnOiAncG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5pbWFnZS4kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgamFyYWxsYXgtY29udGFpbmVyLSR7c2VsZi5pbnN0YW5jZUlEfWApO1xuICAgIHNlbGYuJGl0ZW0uYXBwZW5kQ2hpbGQoc2VsZi5pbWFnZS4kY29udGFpbmVyKTsgLy8gdXNlIGltZyB0YWdcblxuICAgIGlmIChzZWxmLmltYWdlLnVzZUltZ1RhZykge1xuICAgICAgaW1hZ2VTdHlsZXMgPSBzZWxmLmV4dGVuZCh7XG4gICAgICAgICdvYmplY3QtZml0Jzogc2VsZi5vcHRpb25zLmltZ1NpemUsXG4gICAgICAgICdvYmplY3QtcG9zaXRpb24nOiBzZWxmLm9wdGlvbnMuaW1nUG9zaXRpb24sXG4gICAgICAgICdtYXgtd2lkdGgnOiAnbm9uZSdcbiAgICAgIH0sIGNvbnRhaW5lclN0eWxlcywgaW1hZ2VTdHlsZXMpOyAvLyB1c2UgZGl2IHdpdGggYmFja2dyb3VuZCBpbWFnZVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmltYWdlLiRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGlmIChzZWxmLmltYWdlLnNyYykge1xuICAgICAgICBpbWFnZVN0eWxlcyA9IHNlbGYuZXh0ZW5kKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHNlbGYub3B0aW9ucy5pbWdQb3NpdGlvbixcbiAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogc2VsZi5vcHRpb25zLmltZ1NpemUsXG4gICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0Jzogc2VsZi5vcHRpb25zLmltZ1JlcGVhdCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IHNlbGYuaW1hZ2UuYmdJbWFnZSB8fCBgdXJsKFwiJHtzZWxmLmltYWdlLnNyY31cIilgXG4gICAgICAgIH0sIGNvbnRhaW5lclN0eWxlcywgaW1hZ2VTdHlsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgnb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY2FsZScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY2FsZS1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgMSA9PT0gc2VsZi5vcHRpb25zLnNwZWVkKSB7XG4gICAgICBzZWxmLmltYWdlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB9IC8vIDEuIENoZWNrIGlmIG9uZSBvZiBwYXJlbnRzIGhhdmUgdHJhbnNmb3JtIHN0eWxlICh3aXRob3V0IHRoaXMgY2hlY2ssIHNjcm9sbCB0cmFuc2Zvcm0gd2lsbCBiZSBpbnZlcnRlZCBpZiB1c2VkIHBhcmFsbGF4IHdpdGggcG9zaXRpb24gZml4ZWQpXG4gICAgLy8gICAgZGlzY3Vzc2lvbiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy85XG4gICAgLy8gMi4gQ2hlY2sgaWYgcGFyZW50cyBoYXZlIG92ZXJmbG93IHNjcm9sbFxuXG5cbiAgICBpZiAoJ2ZpeGVkJyA9PT0gc2VsZi5pbWFnZS5wb3NpdGlvbikge1xuICAgICAgY29uc3QgJHBhcmVudHMgPSBnZXRQYXJlbnRzKHNlbGYuJGl0ZW0pLmZpbHRlcihlbCA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdsb2JhbCQyLmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICBjb25zdCBwYXJlbnRUcmFuc2Zvcm0gPSBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gfHwgc3R5bGVzWyctbW96LXRyYW5zZm9ybSddIHx8IHN0eWxlcy50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG92ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XG4gICAgICAgIHJldHVybiBwYXJlbnRUcmFuc2Zvcm0gJiYgJ25vbmUnICE9PSBwYXJlbnRUcmFuc2Zvcm0gfHwgb3ZlcmZsb3dSZWdleC50ZXN0KHN0eWxlcy5vdmVyZmxvdyArIHN0eWxlc1snb3ZlcmZsb3cteSddICsgc3R5bGVzWydvdmVyZmxvdy14J10pO1xuICAgICAgfSk7XG4gICAgICBzZWxmLmltYWdlLnBvc2l0aW9uID0gJHBhcmVudHMubGVuZ3RoID8gJ2Fic29sdXRlJyA6ICdmaXhlZCc7XG4gICAgfSAvLyBhZGQgcG9zaXRpb24gdG8gcGFyYWxsYXggYmxvY2tcblxuXG4gICAgaW1hZ2VTdHlsZXMucG9zaXRpb24gPSBzZWxmLmltYWdlLnBvc2l0aW9uOyAvLyBpbnNlcnQgcGFyYWxsYXggaW1hZ2VcblxuICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGl0ZW0sIGltYWdlU3R5bGVzKTtcbiAgICBzZWxmLmltYWdlLiRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5pbWFnZS4kaXRlbSk7IC8vIHNldCBpbml0aWFsIHBvc2l0aW9uIGFuZCBzaXplXG5cbiAgICBzZWxmLm9uUmVzaXplKCk7XG4gICAgc2VsZi5vblNjcm9sbCh0cnVlKTsgLy8gY2FsbCBvbkluaXQgZXZlbnRcblxuICAgIGlmIChzZWxmLm9wdGlvbnMub25Jbml0KSB7XG4gICAgICBzZWxmLm9wdGlvbnMub25Jbml0LmNhbGwoc2VsZik7XG4gICAgfSAvLyByZW1vdmUgZGVmYXVsdCB1c2VyIGJhY2tncm91bmRcblxuXG4gICAgaWYgKCdub25lJyAhPT0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ2JhY2tncm91bmQtaW1hZ2UnKSkge1xuICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICdub25lJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5hZGRUb1BhcmFsbGF4TGlzdCgpO1xuICB9IC8vIGFkZCB0byBwYXJhbGxheCBpbnN0YW5jZXMgbGlzdFxuXG5cbiAgYWRkVG9QYXJhbGxheExpc3QoKSB7XG4gICAgamFyYWxsYXhMaXN0LnB1c2goe1xuICAgICAgaW5zdGFuY2U6IHRoaXNcbiAgICB9KTtcblxuICAgIGlmICgxID09PSBqYXJhbGxheExpc3QubGVuZ3RoKSB7XG4gICAgICBnbG9iYWwkMi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUGFyYWxsYXgpO1xuICAgIH1cbiAgfSAvLyByZW1vdmUgZnJvbSBwYXJhbGxheCBpbnN0YW5jZXMgbGlzdFxuXG5cbiAgcmVtb3ZlRnJvbVBhcmFsbGF4TGlzdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBqYXJhbGxheExpc3QuZm9yRWFjaCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICBpZiAoZGF0YS5pbnN0YW5jZS5pbnN0YW5jZUlEID09PSBzZWxmLmluc3RhbmNlSUQpIHtcbiAgICAgICAgamFyYWxsYXhMaXN0LnNwbGljZShrZXksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnJlbW92ZUZyb21QYXJhbGxheExpc3QoKTsgLy8gcmV0dXJuIHN0eWxlcyBvbiBjb250YWluZXIgYXMgYmVmb3JlIGphcmFsbGF4IGluaXRcblxuICAgIGNvbnN0IG9yaWdpbmFsU3R5bGVzVGFnID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG4gICAgc2VsZi4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7IC8vIG51bGwgb2NjdXJzIGlmIHRoZXJlIGlzIG5vIHN0eWxlIHRhZyBiZWZvcmUgamFyYWxsYXggaW5pdFxuXG4gICAgaWYgKCFvcmlnaW5hbFN0eWxlc1RhZykge1xuICAgICAgc2VsZi4kaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuJGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdpbmFsU3R5bGVzVGFnKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pbWFnZS51c2VJbWdUYWcpIHtcbiAgICAgIC8vIHJldHVybiBzdHlsZXMgb24gaW1nIHRhZyBhcyBiZWZvcmUgamFyYWxsYXggaW5pdFxuICAgICAgY29uc3Qgb3JpZ2luYWxTdHlsZXNJbWdUYWcgPSBzZWxmLmltYWdlLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnKTtcbiAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LW9yaWdpbmFsLXN0eWxlcycpOyAvLyBudWxsIG9jY3VycyBpZiB0aGVyZSBpcyBubyBzdHlsZSB0YWcgYmVmb3JlIGphcmFsbGF4IGluaXRcblxuICAgICAgaWYgKCFvcmlnaW5hbFN0eWxlc0ltZ1RhZykge1xuICAgICAgICBzZWxmLmltYWdlLiRpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIG9yaWdpbmFsU3R5bGVzVGFnKTtcbiAgICAgIH0gLy8gbW92ZSBpbWcgdGFnIHRvIGl0cyBkZWZhdWx0IHBvc2l0aW9uXG5cblxuICAgICAgaWYgKHNlbGYuaW1hZ2UuJGl0ZW1QYXJlbnQpIHtcbiAgICAgICAgc2VsZi5pbWFnZS4kaXRlbVBhcmVudC5hcHBlbmRDaGlsZChzZWxmLmltYWdlLiRpdGVtKTtcbiAgICAgIH1cbiAgICB9IC8vIHJlbW92ZSBhZGRpdGlvbmFsIGRvbSBlbGVtZW50c1xuXG5cbiAgICBpZiAoc2VsZi5pbWFnZS4kY29udGFpbmVyKSB7XG4gICAgICBzZWxmLmltYWdlLiRjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmltYWdlLiRjb250YWluZXIpO1xuICAgIH0gLy8gY2FsbCBvbkRlc3Ryb3kgZXZlbnRcblxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5vbkRlc3Ryb3kpIHtcbiAgICAgIHNlbGYub3B0aW9ucy5vbkRlc3Ryb3kuY2FsbChzZWxmKTtcbiAgICB9IC8vIGRlbGV0ZSBqYXJhbGxheCBmcm9tIGl0ZW1cblxuXG4gICAgZGVsZXRlIHNlbGYuJGl0ZW0uamFyYWxsYXg7XG4gIH0gLy8gRmFsbGJhY2sgZm9yIHJlbW92ZWQgZnVuY3Rpb24uXG4gIC8vIERvZXMgbm90aGluZyBub3cuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBjbGlwQ29udGFpbmVyKCkge31cblxuICBjb3ZlckltYWdlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHJlY3QgPSBzZWxmLmltYWdlLiRjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udEggPSByZWN0LmhlaWdodDtcbiAgICBjb25zdCB7XG4gICAgICBzcGVlZFxuICAgIH0gPSBzZWxmLm9wdGlvbnM7XG4gICAgY29uc3QgaXNTY3JvbGwgPSAnc2Nyb2xsJyA9PT0gc2VsZi5vcHRpb25zLnR5cGUgfHwgJ3Njcm9sbC1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGU7XG4gICAgbGV0IHNjcm9sbERpc3QgPSAwO1xuICAgIGxldCByZXN1bHRIID0gY29udEg7XG4gICAgbGV0IHJlc3VsdE1UID0gMDsgLy8gc2Nyb2xsIHBhcmFsbGF4XG5cbiAgICBpZiAoaXNTY3JvbGwpIHtcbiAgICAgIC8vIHNjcm9sbCBkaXN0YW5jZSBhbmQgaGVpZ2h0IGZvciBpbWFnZVxuICAgICAgaWYgKDAgPiBzcGVlZCkge1xuICAgICAgICBzY3JvbGxEaXN0ID0gc3BlZWQgKiBNYXRoLm1heChjb250SCwgd25kSCk7XG5cbiAgICAgICAgaWYgKHduZEggPCBjb250SCkge1xuICAgICAgICAgIHNjcm9sbERpc3QgLT0gc3BlZWQgKiAoY29udEggLSB3bmRIKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsRGlzdCA9IHNwZWVkICogKGNvbnRIICsgd25kSCk7XG4gICAgICB9IC8vIHNpemUgZm9yIHNjcm9sbCBwYXJhbGxheFxuXG5cbiAgICAgIGlmICgxIDwgc3BlZWQpIHtcbiAgICAgICAgcmVzdWx0SCA9IE1hdGguYWJzKHNjcm9sbERpc3QgLSB3bmRIKTtcbiAgICAgIH0gZWxzZSBpZiAoMCA+IHNwZWVkKSB7XG4gICAgICAgIHJlc3VsdEggPSBzY3JvbGxEaXN0IC8gc3BlZWQgKyBNYXRoLmFicyhzY3JvbGxEaXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdEggKz0gKHduZEggLSBjb250SCkgKiAoMSAtIHNwZWVkKTtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsRGlzdCAvPSAyO1xuICAgIH0gLy8gc3RvcmUgc2Nyb2xsIGRpc3RhbmNlXG5cblxuICAgIHNlbGYucGFyYWxsYXhTY3JvbGxEaXN0YW5jZSA9IHNjcm9sbERpc3Q7IC8vIHZlcnRpY2FsIGNlbnRlclxuXG4gICAgaWYgKGlzU2Nyb2xsKSB7XG4gICAgICByZXN1bHRNVCA9ICh3bmRIIC0gcmVzdWx0SCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRNVCA9IChjb250SCAtIHJlc3VsdEgpIC8gMjtcbiAgICB9IC8vIGFwcGx5IHJlc3VsdCB0byBpdGVtXG5cblxuICAgIHNlbGYuY3NzKHNlbGYuaW1hZ2UuJGl0ZW0sIHtcbiAgICAgIGhlaWdodDogYCR7cmVzdWx0SH1weGAsXG4gICAgICBtYXJnaW5Ub3A6IGAke3Jlc3VsdE1UfXB4YCxcbiAgICAgIGxlZnQ6ICdmaXhlZCcgPT09IHNlbGYuaW1hZ2UucG9zaXRpb24gPyBgJHtyZWN0LmxlZnR9cHhgIDogJzAnLFxuICAgICAgd2lkdGg6IGAke3JlY3Qud2lkdGh9cHhgXG4gICAgfSk7IC8vIGNhbGwgb25Db3ZlckltYWdlIGV2ZW50XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLm9uQ292ZXJJbWFnZSkge1xuICAgICAgc2VsZi5vcHRpb25zLm9uQ292ZXJJbWFnZS5jYWxsKHNlbGYpO1xuICAgIH0gLy8gcmV0dXJuIHNvbWUgdXNlZnVsIGRhdGEuIFVzZWQgaW4gdGhlIHZpZGVvIGNvdmVyIGZ1bmN0aW9uXG5cblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZToge1xuICAgICAgICBoZWlnaHQ6IHJlc3VsdEgsXG4gICAgICAgIG1hcmdpblRvcDogcmVzdWx0TVRcbiAgICAgIH0sXG4gICAgICBjb250YWluZXI6IHJlY3RcbiAgICB9O1xuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQgfHwgZmFsc2U7XG4gIH1cblxuICBvblNjcm9sbChmb3JjZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IHJlY3QgPSBzZWxmLiRpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRUID0gcmVjdC50b3A7XG4gICAgY29uc3QgY29udEggPSByZWN0LmhlaWdodDtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTsgLy8gY2hlY2sgaWYgaW4gdmlld3BvcnRcblxuICAgIGxldCB2aWV3cG9ydFJlY3QgPSByZWN0O1xuXG4gICAgaWYgKHNlbGYub3B0aW9ucy5lbGVtZW50SW5WaWV3cG9ydCkge1xuICAgICAgdmlld3BvcnRSZWN0ID0gc2VsZi5vcHRpb25zLmVsZW1lbnRJblZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIHNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCA9IDAgPD0gdmlld3BvcnRSZWN0LmJvdHRvbSAmJiAwIDw9IHZpZXdwb3J0UmVjdC5yaWdodCAmJiB2aWV3cG9ydFJlY3QudG9wIDw9IHduZEggJiYgdmlld3BvcnRSZWN0LmxlZnQgPD0gZ2xvYmFsJDIuaW5uZXJXaWR0aDsgLy8gc3RvcCBjYWxjdWxhdGlvbnMgaWYgaXRlbSBpcyBub3QgaW4gdmlld3BvcnRcblxuICAgIGlmIChmb3JjZSA/IGZhbHNlIDogIXNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gY2FsY3VsYXRlIHBhcmFsbGF4IGhlbHBpbmcgdmFyaWFibGVzXG5cblxuICAgIGNvbnN0IGJlZm9yZVRvcCA9IE1hdGgubWF4KDAsIGNvbnRUKTtcbiAgICBjb25zdCBiZWZvcmVUb3BFbmQgPSBNYXRoLm1heCgwLCBjb250SCArIGNvbnRUKTtcbiAgICBjb25zdCBhZnRlclRvcCA9IE1hdGgubWF4KDAsIC1jb250VCk7XG4gICAgY29uc3QgYmVmb3JlQm90dG9tID0gTWF0aC5tYXgoMCwgY29udFQgKyBjb250SCAtIHduZEgpO1xuICAgIGNvbnN0IGJlZm9yZUJvdHRvbUVuZCA9IE1hdGgubWF4KDAsIGNvbnRIIC0gKGNvbnRUICsgY29udEggLSB3bmRIKSk7XG4gICAgY29uc3QgYWZ0ZXJCb3R0b20gPSBNYXRoLm1heCgwLCAtY29udFQgKyB3bmRIIC0gY29udEgpO1xuICAgIGNvbnN0IGZyb21WaWV3cG9ydENlbnRlciA9IDEgLSAyICogKCh3bmRIIC0gY29udFQpIC8gKHduZEggKyBjb250SCkpOyAvLyBjYWxjdWxhdGUgb24gaG93IHBlcmNlbnQgb2Ygc2VjdGlvbiBpcyB2aXNpYmxlXG5cbiAgICBsZXQgdmlzaWJsZVBlcmNlbnQgPSAxO1xuXG4gICAgaWYgKGNvbnRIIDwgd25kSCkge1xuICAgICAgdmlzaWJsZVBlcmNlbnQgPSAxIC0gKGFmdGVyVG9wIHx8IGJlZm9yZUJvdHRvbSkgLyBjb250SDtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZVRvcEVuZCA8PSB3bmRIKSB7XG4gICAgICB2aXNpYmxlUGVyY2VudCA9IGJlZm9yZVRvcEVuZCAvIHduZEg7XG4gICAgfSBlbHNlIGlmIChiZWZvcmVCb3R0b21FbmQgPD0gd25kSCkge1xuICAgICAgdmlzaWJsZVBlcmNlbnQgPSBiZWZvcmVCb3R0b21FbmQgLyB3bmRIO1xuICAgIH0gLy8gb3BhY2l0eVxuXG5cbiAgICBpZiAoJ29wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2NhbGUtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY3JvbGwtb3BhY2l0eScgPT09IHNlbGYub3B0aW9ucy50eXBlKSB7XG4gICAgICBzdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsMCwwKSc7XG4gICAgICBzdHlsZXMub3BhY2l0eSA9IHZpc2libGVQZXJjZW50O1xuICAgIH0gLy8gc2NhbGVcblxuXG4gICAgaWYgKCdzY2FsZScgPT09IHNlbGYub3B0aW9ucy50eXBlIHx8ICdzY2FsZS1vcGFjaXR5JyA9PT0gc2VsZi5vcHRpb25zLnR5cGUpIHtcbiAgICAgIGxldCBzY2FsZSA9IDE7XG5cbiAgICAgIGlmICgwID4gc2VsZi5vcHRpb25zLnNwZWVkKSB7XG4gICAgICAgIHNjYWxlIC09IHNlbGYub3B0aW9ucy5zcGVlZCAqIHZpc2libGVQZXJjZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGUgKz0gc2VsZi5vcHRpb25zLnNwZWVkICogKDEgLSB2aXNpYmxlUGVyY2VudCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcy50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZTNkKDAsMCwwKWA7XG4gICAgfSAvLyBzY3JvbGxcblxuXG4gICAgaWYgKCdzY3JvbGwnID09PSBzZWxmLm9wdGlvbnMudHlwZSB8fCAnc2Nyb2xsLW9wYWNpdHknID09PSBzZWxmLm9wdGlvbnMudHlwZSkge1xuICAgICAgbGV0IHBvc2l0aW9uWSA9IHNlbGYucGFyYWxsYXhTY3JvbGxEaXN0YW5jZSAqIGZyb21WaWV3cG9ydENlbnRlcjsgLy8gZml4IGlmIHBhcmFsbGF4IGJsb2NrIGluIGFic29sdXRlIHBvc2l0aW9uXG5cbiAgICAgIGlmICgnYWJzb2x1dGUnID09PSBzZWxmLmltYWdlLnBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uWSAtPSBjb250VDtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCR7cG9zaXRpb25ZfXB4LDApYDtcbiAgICB9XG5cbiAgICBzZWxmLmNzcyhzZWxmLmltYWdlLiRpdGVtLCBzdHlsZXMpOyAvLyBjYWxsIG9uU2Nyb2xsIGV2ZW50XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLm9uU2Nyb2xsKSB7XG4gICAgICBzZWxmLm9wdGlvbnMub25TY3JvbGwuY2FsbChzZWxmLCB7XG4gICAgICAgIHNlY3Rpb246IHJlY3QsXG4gICAgICAgIGJlZm9yZVRvcCxcbiAgICAgICAgYmVmb3JlVG9wRW5kLFxuICAgICAgICBhZnRlclRvcCxcbiAgICAgICAgYmVmb3JlQm90dG9tLFxuICAgICAgICBiZWZvcmVCb3R0b21FbmQsXG4gICAgICAgIGFmdGVyQm90dG9tLFxuICAgICAgICB2aXNpYmxlUGVyY2VudCxcbiAgICAgICAgZnJvbVZpZXdwb3J0Q2VudGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNvdmVySW1hZ2UoKTtcbiAgfVxuXG59IC8vIGdsb2JhbCBkZWZpbml0aW9uXG5cblxuY29uc3QgamFyYWxsYXgkMSA9IGZ1bmN0aW9uIChpdGVtcywgb3B0aW9ucywgLi4uYXJncykge1xuICAvLyBjaGVjayBmb3IgZG9tIGVsZW1lbnRcbiAgLy8gdGhhbmtzOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM4NDI4Ni9qYXZhc2NyaXB0LWlzZG9tLWhvdy1kby15b3UtY2hlY2staWYtYS1qYXZhc2NyaXB0LW9iamVjdC1pcy1hLWRvbS1vYmplY3RcbiAgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgSFRNTEVsZW1lbnQgPyBpdGVtcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogaXRlbXMgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBpdGVtcyAmJiBudWxsICE9PSBpdGVtcyAmJiAxID09PSBpdGVtcy5ub2RlVHlwZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1zLm5vZGVOYW1lKSB7XG4gICAgaXRlbXMgPSBbaXRlbXNdO1xuICB9XG5cbiAgY29uc3QgbGVuID0gaXRlbXMubGVuZ3RoO1xuICBsZXQgayA9IDA7XG4gIGxldCByZXQ7XG5cbiAgZm9yIChrOyBrIDwgbGVuOyBrICs9IDEpIHtcbiAgICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBvcHRpb25zIHx8ICd1bmRlZmluZWQnID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgaWYgKCFpdGVtc1trXS5qYXJhbGxheCkge1xuICAgICAgICBpdGVtc1trXS5qYXJhbGxheCA9IG5ldyBKYXJhbGxheChpdGVtc1trXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtc1trXS5qYXJhbGxheCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgIHJldCA9IGl0ZW1zW2tdLmphcmFsbGF4W29wdGlvbnNdLmFwcGx5KGl0ZW1zW2tdLmphcmFsbGF4LCBhcmdzKTtcbiAgICB9XG5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiByZXQpIHtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuamFyYWxsYXgkMS5jb25zdHJ1Y3RvciA9IEphcmFsbGF4O1xuXG4vKiFcbiAqIE5hbWUgICAgOiBWaWRlbyBXb3JrZXJcbiAqIFZlcnNpb24gOiAyLjAuMFxuICogQXV0aG9yICA6IG5LIDxodHRwczovL25rZGV2LmluZm8+XG4gKiBHaXRIdWIgIDogaHR0cHM6Ly9naXRodWIuY29tL25rLW8vdmlkZW8td29ya2VyXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmxldCB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbiA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbiA9IHNlbGY7XG59IGVsc2Uge1xuICB3aW4gPSB7fTtcbn1cblxudmFyIGdsb2JhbCQxID0gd2luOyAvLyBEZWZlcnJlZFxuLy8gdGhhbmtzIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgwOTY3MTUvaW1wbGVtZW50LWRlZmVycmVkLW9iamVjdC13aXRob3V0LXVzaW5nLWpxdWVyeVxuXG5mdW5jdGlvbiBEZWZlcnJlZCgpIHtcbiAgdGhpcy5kb25lQ2FsbGJhY2tzID0gW107XG4gIHRoaXMuZmFpbENhbGxiYWNrcyA9IFtdO1xufVxuXG5EZWZlcnJlZC5wcm90b3R5cGUgPSB7XG4gIGV4ZWN1dGUobGlzdCwgYXJncykge1xuICAgIGxldCBpID0gbGlzdC5sZW5ndGg7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuXG4gICAgd2hpbGUgKGkpIHtcbiAgICAgIGkgLT0gMTtcbiAgICAgIGxpc3RbaV0uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9LFxuXG4gIHJlc29sdmUoLi4uYXJncykge1xuICAgIHRoaXMuZXhlY3V0ZSh0aGlzLmRvbmVDYWxsYmFja3MsIGFyZ3MpO1xuICB9LFxuXG4gIHJlamVjdCguLi5hcmdzKSB7XG4gICAgdGhpcy5leGVjdXRlKHRoaXMuZmFpbENhbGxiYWNrcywgYXJncyk7XG4gIH0sXG5cbiAgZG9uZShjYWxsYmFjaykge1xuICAgIHRoaXMuZG9uZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfSxcblxuICBmYWlsKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5mYWlsQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbn07XG5sZXQgSUQgPSAwO1xubGV0IFlvdXR1YmVBUElhZGRlZCA9IDA7XG5sZXQgVmltZW9BUElhZGRlZCA9IDA7XG5sZXQgbG9hZGluZ1lvdXR1YmVQbGF5ZXIgPSAwO1xubGV0IGxvYWRpbmdWaW1lb1BsYXllciA9IDA7XG5jb25zdCBsb2FkaW5nWW91dHViZURlZmVyID0gLyojX19QVVJFX18qL25ldyBEZWZlcnJlZCgpO1xuY29uc3QgbG9hZGluZ1ZpbWVvRGVmZXIgPSAvKiNfX1BVUkVfXyovbmV3IERlZmVycmVkKCk7XG5cbmNsYXNzIFZpZGVvV29ya2VyIHtcbiAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi51cmwgPSB1cmw7XG4gICAgc2VsZi5vcHRpb25zX2RlZmF1bHQgPSB7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIG11dGU6IGZhbHNlLFxuICAgICAgdm9sdW1lOiAxMDAsXG4gICAgICBzaG93Q29udHJvbHM6IHRydWUsXG4gICAgICBhY2Nlc3NpYmlsaXR5SGlkZGVuOiBmYWxzZSxcbiAgICAgIC8vIHN0YXJ0IC8gZW5kIHZpZGVvIHRpbWUgaW4gc2Vjb25kc1xuICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgZW5kVGltZTogMFxuICAgIH07XG4gICAgc2VsZi5vcHRpb25zID0gc2VsZi5leHRlbmQoe30sIHNlbGYub3B0aW9uc19kZWZhdWx0LCBvcHRpb25zKTsgLy8gRml4IHdyb25nIG9wdGlvbiBuYW1lLlxuICAgIC8vIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXIvaXNzdWVzLzEzLlxuXG4gICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc2hvd0NvbnRvbHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzID0gc2VsZi5vcHRpb25zLnNob3dDb250b2xzO1xuICAgICAgZGVsZXRlIHNlbGYub3B0aW9ucy5zaG93Q29udG9scztcbiAgICB9IC8vIGNoZWNrIFVSTFxuXG5cbiAgICBzZWxmLnZpZGVvSUQgPSBzZWxmLnBhcnNlVVJMKHVybCk7IC8vIGluaXRcblxuICAgIGlmIChzZWxmLnZpZGVvSUQpIHtcbiAgICAgIHNlbGYuSUQgPSBJRDtcbiAgICAgIElEICs9IDE7XG4gICAgICBzZWxmLmxvYWRBUEkoKTtcbiAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH1cbiAgfSAvLyBFeHRlbmQgbGlrZSBqUXVlcnkuZXh0ZW5kXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBleHRlbmQoLi4uYXJncykge1xuICAgIGNvbnN0IG91dCA9IGFyZ3NbMF0gfHwge307XG4gICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmICghYXJnc1tpXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKGFyZ3NbaV0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgb3V0W2tleV0gPSBhcmdzW2ldW2tleV07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgcGFyc2VVUkwodXJsKSB7XG4gICAgLy8gcGFyc2UgeW91dHViZSBJRFxuICAgIGZ1bmN0aW9uIGdldFlvdXR1YmVJRCh5dFVybCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICBjb25zdCByZWdFeHAgPSAvLiooPzp5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PSkoW14jXFwmXFw/XSopLiovO1xuICAgICAgY29uc3QgbWF0Y2ggPSB5dFVybC5tYXRjaChyZWdFeHApO1xuICAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdLmxlbmd0aCA9PT0gMTEgPyBtYXRjaFsxXSA6IGZhbHNlO1xuICAgIH0gLy8gcGFyc2UgdmltZW8gSURcblxuXG4gICAgZnVuY3Rpb24gZ2V0VmltZW9JRCh2bVVybCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICBjb25zdCByZWdFeHAgPSAvaHR0cHM/OlxcL1xcLyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyhbXi9dKilcXC92aWRlb3NcXC98YWxidW1cXC8oXFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86JHxcXC98XFw/KS87XG4gICAgICBjb25zdCBtYXRjaCA9IHZtVXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbM10gPyBtYXRjaFszXSA6IGZhbHNlO1xuICAgIH0gLy8gcGFyc2UgbG9jYWwgc3RyaW5nXG5cblxuICAgIGZ1bmN0aW9uIGdldExvY2FsVmlkZW9zKGxvY1VybCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICBjb25zdCB2aWRlb0Zvcm1hdHMgPSBsb2NVcmwuc3BsaXQoLywoPz1tcDRcXDp8d2VibVxcOnxvZ3ZcXDp8b2dnXFw6KS8pO1xuICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICBsZXQgcmVhZHkgPSAwO1xuICAgICAgdmlkZW9Gb3JtYXRzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdmFsLm1hdGNoKC9eKG1wNHx3ZWJtfG9ndnxvZ2cpXFw6KC4qKS8pO1xuXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICAgIHJlc3VsdFttYXRjaFsxXSA9PT0gJ29ndicgPyAnb2dnJyA6IG1hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICAgICAgICAgIHJlYWR5ID0gMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVhZHkgPyByZXN1bHQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBZb3V0dWJlID0gZ2V0WW91dHViZUlEKHVybCk7XG4gICAgY29uc3QgVmltZW8gPSBnZXRWaW1lb0lEKHVybCk7XG4gICAgY29uc3QgTG9jYWwgPSBnZXRMb2NhbFZpZGVvcyh1cmwpO1xuXG4gICAgaWYgKFlvdXR1YmUpIHtcbiAgICAgIHRoaXMudHlwZSA9ICd5b3V0dWJlJztcbiAgICAgIHJldHVybiBZb3V0dWJlO1xuICAgIH1cblxuICAgIGlmIChWaW1lbykge1xuICAgICAgdGhpcy50eXBlID0gJ3ZpbWVvJztcbiAgICAgIHJldHVybiBWaW1lbztcbiAgICB9XG5cbiAgICBpZiAoTG9jYWwpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsb2NhbCc7XG4gICAgICByZXR1cm4gTG9jYWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLnZpZGVvSUQ7XG4gIH0gLy8gZXZlbnRzXG5cblxuICBvbihuYW1lLCBjYWxsYmFjaykge1xuICAgIHRoaXMudXNlckV2ZW50c0xpc3QgPSB0aGlzLnVzZXJFdmVudHNMaXN0IHx8IFtdOyAvLyBhZGQgbmV3IGNhbGxiYWNrIGluIGV2ZW50cyBsaXN0XG5cbiAgICAodGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXSB8fCAodGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICBvZmYobmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMudXNlckV2ZW50c0xpc3QgfHwgIXRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBkZWxldGUgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXS5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICBpZiAodmFsID09PSBjYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV1ba2V5XSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmaXJlKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy51c2VyRXZlbnRzTGlzdCAmJiB0eXBlb2YgdGhpcy51c2VyRXZlbnRzTGlzdFtuYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudXNlckV2ZW50c0xpc3RbbmFtZV0uZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAvLyBjYWxsIHdpdGggYWxsIGFyZ3VtZW50c1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgdmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGF5KHN0YXJ0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLnBsYXlWaWRlbykge1xuICAgICAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIuc2Vla1RvKHN0YXJ0IHx8IDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUExBWUlORyAhPT0gc2VsZi5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSkge1xuICAgICAgICBzZWxmLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLnBsYXllci5zZXRDdXJyZW50VGltZShzdGFydCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYucGxheWVyLmdldFBhdXNlZCgpLnRoZW4ocGF1c2VkID0+IHtcbiAgICAgICAgaWYgKHBhdXNlZCkge1xuICAgICAgICAgIHNlbGYucGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIuY3VycmVudFRpbWUgPSBzdGFydDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYucGxheWVyLnBhdXNlZCkge1xuICAgICAgICBzZWxmLnBsYXllci5wbGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLnBhdXNlVmlkZW8pIHtcbiAgICAgIGlmIChnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HID09PSBzZWxmLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpKSB7XG4gICAgICAgIHNlbGYucGxheWVyLnBhdXNlVmlkZW8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICBzZWxmLnBsYXllci5nZXRQYXVzZWQoKS50aGVuKHBhdXNlZCA9PiB7XG4gICAgICAgIGlmICghcGF1c2VkKSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgaWYgKCFzZWxmLnBsYXllci5wYXVzZWQpIHtcbiAgICAgICAgc2VsZi5wbGF5ZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtdXRlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5tdXRlKSB7XG4gICAgICBzZWxmLnBsYXllci5tdXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5zZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLnNldFZvbHVtZSgwKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICBzZWxmLiR2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdW5tdXRlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5tdXRlKSB7XG4gICAgICBzZWxmLnBsYXllci51bk11dGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLnNldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKHNlbGYub3B0aW9ucy52b2x1bWUpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIHNlbGYuJHZpZGVvLm11dGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0Vm9sdW1lKHZvbHVtZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYucGxheWVyIHx8ICF2b2x1bWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScgJiYgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKSB7XG4gICAgICBzZWxmLnBsYXllci5zZXRWb2x1bWUodm9sdW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLnNldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgc2VsZi4kdmlkZW8udm9sdW1lID0gdm9sdW1lIC8gMTAwO1xuICAgIH1cbiAgfVxuXG4gIGdldFZvbHVtZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJyAmJiBzZWxmLnBsYXllci5nZXRWb2x1bWUpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYucGxheWVyLmdldFZvbHVtZSgpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmIHNlbGYucGxheWVyLmdldFZvbHVtZSkge1xuICAgICAgc2VsZi5wbGF5ZXIuZ2V0Vm9sdW1lKCkudGhlbih2b2x1bWUgPT4ge1xuICAgICAgICBjYWxsYmFjayh2b2x1bWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8udm9sdW1lICogMTAwKTtcbiAgICB9XG4gIH1cblxuICBnZXRNdXRlZChjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLnBsYXllcikge1xuICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmIHNlbGYucGxheWVyLmlzTXV0ZWQpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGYucGxheWVyLmlzTXV0ZWQoKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3ZpbWVvJyAmJiBzZWxmLnBsYXllci5nZXRWb2x1bWUpIHtcbiAgICAgIHNlbGYucGxheWVyLmdldFZvbHVtZSgpLnRoZW4odm9sdW1lID0+IHtcbiAgICAgICAgY2FsbGJhY2soISF2b2x1bWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ2xvY2FsJykge1xuICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8ubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldEltYWdlVVJMKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoc2VsZi52aWRlb0ltYWdlKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLnZpZGVvSW1hZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd5b3V0dWJlJykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlU2l6ZXMgPSBbJ21heHJlc2RlZmF1bHQnLCAnc2RkZWZhdWx0JywgJ2hxZGVmYXVsdCcsICcwJ107XG4gICAgICBsZXQgc3RlcCA9IDA7XG4gICAgICBjb25zdCB0ZW1wSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIHRlbXBJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpZiBubyB0aHVtYm5haWwsIHlvdXR1YmUgYWRkIHRoZWlyIG93biBpbWFnZSB3aXRoIHdpZHRoID0gMTIwcHhcbiAgICAgICAgaWYgKCh0aGlzLm5hdHVyYWxXaWR0aCB8fCB0aGlzLndpZHRoKSAhPT0gMTIwIHx8IHN0ZXAgPT09IGF2YWlsYWJsZVNpemVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAvLyBva1xuICAgICAgICAgIHNlbGYudmlkZW9JbWFnZSA9IGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke3NlbGYudmlkZW9JRH0vJHthdmFpbGFibGVTaXplc1tzdGVwXX0uanBnYDtcbiAgICAgICAgICBjYWxsYmFjayhzZWxmLnZpZGVvSW1hZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRyeSBhbm90aGVyIHNpemVcbiAgICAgICAgICBzdGVwICs9IDE7XG4gICAgICAgICAgdGhpcy5zcmMgPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtzZWxmLnZpZGVvSUR9LyR7YXZhaWxhYmxlU2l6ZXNbc3RlcF19LmpwZ2A7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRlbXBJbWcuc3JjID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7c2VsZi52aWRlb0lEfS8ke2F2YWlsYWJsZVNpemVzW3N0ZXBdfS5qcGdgO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICd2aW1lbycpIHtcbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8vIGh0dHBzOi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9aHR0cHM6Ly92aW1lby5jb20vMjM1MjEyNTI3XG5cbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgYGh0dHBzOi8vdmltZW8uY29tL2FwaS9vZW1iZWQuanNvbj91cmw9JHtzZWxmLnVybH1gLCB0cnVlKTtcblxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAvLyBTdWNjZXNzIVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnRodW1ibmFpbF91cmwpIHtcbiAgICAgICAgICAgICAgc2VsZi52aWRlb0ltYWdlID0gcmVzcG9uc2UudGh1bWJuYWlsX3VybDtcbiAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi52aWRlb0ltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuICB9IC8vIGZhbGxiYWNrIHRvIHRoZSBvbGQgdmVyc2lvbi5cblxuXG4gIGdldElmcmFtZShjYWxsYmFjaykge1xuICAgIHRoaXMuZ2V0VmlkZW8oY2FsbGJhY2spO1xuICB9XG5cbiAgZ2V0VmlkZW8oY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gcmV0dXJuIGdlbmVyYXRlZCB2aWRlbyBibG9ja1xuXG4gICAgaWYgKHNlbGYuJHZpZGVvKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLiR2aWRlbyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBnZW5lcmF0ZSBuZXcgdmlkZW8gYmxvY2tcblxuXG4gICAgc2VsZi5vbkFQSXJlYWR5KCgpID0+IHtcbiAgICAgIGxldCBoaWRkZW5EaXY7XG5cbiAgICAgIGlmICghc2VsZi4kdmlkZW8pIHtcbiAgICAgICAgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSAvLyBZb3V0dWJlXG5cblxuICAgICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG4gICAgICAgIHNlbGYucGxheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyBHRFBSIENvbXBsaWFuY2UuXG4gICAgICAgICAgaG9zdDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tJyxcbiAgICAgICAgICB2aWRlb0lkOiBzZWxmLnZpZGVvSUQsXG4gICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgICByZWw6IDAsXG4gICAgICAgICAgICBhdXRvcGxheTogMCxcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5IGVuYWJsZSBvbiBtb2JpbGUgZGV2aWNlc1xuICAgICAgICAgICAgcGxheXNpbmxpbmU6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH07IC8vIGhpZGUgY29udHJvbHNcblxuICAgICAgICBpZiAoIXNlbGYub3B0aW9ucy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5pdl9sb2FkX3BvbGljeSA9IDM7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMubW9kZXN0YnJhbmRpbmcgPSAxO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzLmNvbnRyb2xzID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMucGxheWVyVmFycy5zaG93aW5mbyA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnBsYXllclZhcnMuZGlzYWJsZWtiID0gMTtcbiAgICAgICAgfSAvLyBldmVudHNcblxuXG4gICAgICAgIGxldCB5dFN0YXJ0ZWQ7XG4gICAgICAgIGxldCB5dFByb2dyZXNzSW50ZXJ2YWw7XG4gICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5ldmVudHMgPSB7XG4gICAgICAgICAgb25SZWFkeShlKSB7XG4gICAgICAgICAgICAvLyBtdXRlXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm11dGUpIHtcbiAgICAgICAgICAgICAgZS50YXJnZXQubXV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLm9wdGlvbnMudm9sdW1lKSB7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LnNldFZvbHVtZShzZWxmLm9wdGlvbnMudm9sdW1lKTtcbiAgICAgICAgICAgIH0gLy8gYXV0b3BsYXlcblxuXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5maXJlKCdyZWFkeScsIGUpOyAvLyBGb3Igc2VhbWxlc3MgbG9vcHMsIHNldCB0aGUgZW5kVGltZSB0byAwLjEgc2Vjb25kcyBsZXNzIHRoYW4gdGhlIHZpZGVvJ3MgZHVyYXRpb25cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL3ZpZGVvLXdvcmtlci9pc3N1ZXMvMlxuXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3AgJiYgIXNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlY29uZHNPZmZzZXQgPSAwLjE7XG4gICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5lbmRUaW1lID0gc2VsZi5wbGF5ZXIuZ2V0RHVyYXRpb24oKSAtIHNlY29uZHNPZmZzZXQ7XG4gICAgICAgICAgICB9IC8vIHZvbHVtZWNoYW5nZVxuXG5cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5nZXRWb2x1bWUodm9sdW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLnZvbHVtZSAhPT0gdm9sdW1lKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgICAgICAgc2VsZi5maXJlKCd2b2x1bWVjaGFuZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgb25TdGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICAvLyBsb29wXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3AgJiYgZS5kYXRhID09PSBnbG9iYWwkMS5ZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xuICAgICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgheXRTdGFydGVkICYmIGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgICB5dFN0YXJ0ZWQgPSAxO1xuICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3N0YXJ0ZWQnLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgICBzZWxmLmZpcmUoJ3BsYXknLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG4gICAgICAgICAgICAgIHNlbGYuZmlyZSgncGF1c2UnLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gZ2xvYmFsJDEuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcbiAgICAgICAgICAgICAgc2VsZi5maXJlKCdlbmRlZCcsIGUpO1xuICAgICAgICAgICAgfSAvLyBwcm9ncmVzcyBjaGVja1xuXG5cbiAgICAgICAgICAgIGlmIChlLmRhdGEgPT09IGdsb2JhbCQxLllULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcbiAgICAgICAgICAgICAgeXRQcm9ncmVzc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZmlyZSgndGltZXVwZGF0ZScsIGUpOyAvLyBjaGVjayBmb3IgZW5kIG9mIHZpZGVvIGFuZCBwbGF5IGFnYWluIG9yIHN0b3BcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSAmJiBzZWxmLnBsYXllci5nZXRDdXJyZW50VGltZSgpID49IHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeXRQcm9ncmVzc0ludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgb25FcnJvcihlKSB7XG4gICAgICAgICAgICBzZWxmLmZpcmUoJ2Vycm9yJywgZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICFzZWxmLiR2aWRlbztcblxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxmLnBsYXllcklEKTtcbiAgICAgICAgICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnBsYXllciA9IHNlbGYucGxheWVyIHx8IG5ldyBnbG9iYWwkMS5ZVC5QbGF5ZXIoc2VsZi5wbGF5ZXJJRCwgc2VsZi5wbGF5ZXJPcHRpb25zKTtcblxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XG4gICAgICAgICAgc2VsZi4kdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLnBsYXllcklEKTsgLy8gYWRkIGFjY2Vzc2liaWxpdHkgYXR0cmlidXRlc1xuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5hY2Nlc3NpYmlsaXR5SGlkZGVuKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICB9IC8vIGdldCB2aWRlbyB3aWR0aCBhbmQgaGVpZ2h0XG5cblxuICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHBhcnNlSW50KHNlbGYuJHZpZGVvLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSwgMTApIHx8IDEyODA7XG4gICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IHBhcnNlSW50KHNlbGYuJHZpZGVvLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JyksIDEwKSB8fCA3MjA7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVmltZW9cblxuXG4gICAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICAgIHNlbGYucGxheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyBHRFBSIENvbXBsaWFuY2UuXG4gICAgICAgICAgZG50OiAxLFxuICAgICAgICAgIGlkOiBzZWxmLnZpZGVvSUQsXG4gICAgICAgICAgYXV0b3BhdXNlOiAwLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiAwLFxuICAgICAgICAgIGF1dG9wbGF5OiBzZWxmLm9wdGlvbnMuYXV0b3BsYXkgPyAxIDogMCxcbiAgICAgICAgICBsb29wOiBzZWxmLm9wdGlvbnMubG9vcCA/IDEgOiAwLFxuICAgICAgICAgIG11dGVkOiBzZWxmLm9wdGlvbnMubXV0ZSA/IDEgOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy52b2x1bWUpIHtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMudm9sdW1lID0gc2VsZi5vcHRpb25zLnZvbHVtZTtcbiAgICAgICAgfSAvLyBoaWRlIGNvbnRyb2xzXG5cblxuICAgICAgICBpZiAoIXNlbGYub3B0aW9ucy5zaG93Q29udHJvbHMpIHtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuYmFkZ2UgPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5ieWxpbmUgPSAwO1xuICAgICAgICAgIHNlbGYucGxheWVyT3B0aW9ucy5wb3J0cmFpdCA9IDA7XG4gICAgICAgICAgc2VsZi5wbGF5ZXJPcHRpb25zLnRpdGxlID0gMDtcbiAgICAgICAgICBzZWxmLnBsYXllck9wdGlvbnMuYmFja2dyb3VuZCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYuJHZpZGVvKSB7XG4gICAgICAgICAgbGV0IHBsYXllck9wdGlvbnNTdHJpbmcgPSAnJztcbiAgICAgICAgICBPYmplY3Qua2V5cyhzZWxmLnBsYXllck9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJPcHRpb25zU3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICBwbGF5ZXJPcHRpb25zU3RyaW5nICs9ICcmJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyT3B0aW9uc1N0cmluZyArPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlbGYucGxheWVyT3B0aW9uc1trZXldKX1gO1xuICAgICAgICAgIH0pOyAvLyB3ZSBuZWVkIHRvIGNyZWF0ZSBpZnJhbWUgbWFudWFsbHkgYmVjYXVzZSB3aGVuIHdlIGNyZWF0ZSBpdCB1c2luZyBBUElcbiAgICAgICAgICAvLyBqcyBldmVudHMgd29uJ3QgdHJpZ2dlcnMgYWZ0ZXIgaWZyYW1lIG1vdmVkIHRvIGFub3RoZXIgcGxhY2VcblxuICAgICAgICAgIHNlbGYuJHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdpZCcsIHNlbGYucGxheWVySUQpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3NlbGYudmlkZW9JRH0/JHtwbGF5ZXJPcHRpb25zU3RyaW5nfWApO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnZnJhbWVib3JkZXInLCAnMCcpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnbW96YWxsb3dmdWxsc2NyZWVuJywgJycpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnVmltZW8gdmlkZW8gcGxheWVyJyk7IC8vIGFkZCBhY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXNcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYWNjZXNzaWJpbGl0eUhpZGRlbikge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKHNlbGYuJHZpZGVvKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnBsYXllciA9IHNlbGYucGxheWVyIHx8IG5ldyBnbG9iYWwkMS5WaW1lby5QbGF5ZXIoc2VsZi4kdmlkZW8sIHNlbGYucGxheWVyT3B0aW9ucyk7IC8vIHNldCBjdXJyZW50IHRpbWUgZm9yIGF1dG9wbGF5XG5cbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5zdGFydFRpbWUgJiYgc2VsZi5vcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgc2VsZi5wbGF5ZXIuc2V0Q3VycmVudFRpbWUoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgIH0gLy8gZ2V0IHZpZGVvIHdpZHRoIGFuZCBoZWlnaHRcblxuXG4gICAgICAgIHNlbGYucGxheWVyLmdldFZpZGVvV2lkdGgoKS50aGVuKHdpZHRoID0+IHtcbiAgICAgICAgICBzZWxmLnZpZGVvV2lkdGggPSB3aWR0aCB8fCAxMjgwO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuZ2V0VmlkZW9IZWlnaHQoKS50aGVuKGhlaWdodCA9PiB7XG4gICAgICAgICAgc2VsZi52aWRlb0hlaWdodCA9IGhlaWdodCB8fCA3MjA7XG4gICAgICAgIH0pOyAvLyBldmVudHNcblxuICAgICAgICBsZXQgdm1TdGFydGVkO1xuICAgICAgICBzZWxmLnBsYXllci5vbigndGltZXVwZGF0ZScsIGUgPT4ge1xuICAgICAgICAgIGlmICghdm1TdGFydGVkKSB7XG4gICAgICAgICAgICBzZWxmLmZpcmUoJ3N0YXJ0ZWQnLCBlKTtcbiAgICAgICAgICAgIHZtU3RhcnRlZCA9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5maXJlKCd0aW1ldXBkYXRlJywgZSk7IC8vIGNoZWNrIGZvciBlbmQgb2YgdmlkZW8gYW5kIHBsYXkgYWdhaW4gb3Igc3RvcFxuXG4gICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmVuZFRpbWUgJiYgZS5zZWNvbmRzID49IHNlbGYub3B0aW9ucy5lbmRUaW1lKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheShzZWxmLm9wdGlvbnMuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhdXNlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbigncGxheScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgncGxheScsIGUpOyAvLyBjaGVjayBmb3IgdGhlIHN0YXJ0IHRpbWUgYW5kIHN0YXJ0IHdpdGggaXRcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuc3RhcnRUaW1lICYmIGUuc2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCdwYXVzZScsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgncGF1c2UnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCdlbmRlZCcsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgnZW5kZWQnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCdsb2FkZWQnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3JlYWR5JywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCd2b2x1bWVjaGFuZ2UnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLm9uKCdlcnJvcicsIGUgPT4ge1xuICAgICAgICAgIHNlbGYuZmlyZSgnZXJyb3InLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIExvY2FsXG5cblxuICAgICAgZnVuY3Rpb24gYWRkU291cmNlVG9Mb2NhbChlbGVtZW50LCBzcmMsIHR5cGUpIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgICAgIHNvdXJjZS5zcmMgPSBzcmM7XG4gICAgICAgIHNvdXJjZS50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi50eXBlID09PSAnbG9jYWwnKSB7XG4gICAgICAgIGlmICghc2VsZi4kdmlkZW8pIHtcbiAgICAgICAgICBzZWxmLiR2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7IC8vIHNob3cgY29udHJvbHNcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuc2hvd0NvbnRyb2xzKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5jb250cm9scyA9IHRydWU7XG4gICAgICAgICAgfSAvLyBtdXRlXG5cblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMubXV0ZSkge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi4kdmlkZW8udm9sdW1lKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby52b2x1bWUgPSBzZWxmLm9wdGlvbnMudm9sdW1lIC8gMTAwO1xuICAgICAgICAgIH0gLy8gbG9vcFxuXG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgIHNlbGYuJHZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICAgIH0gLy8gYXV0b3BsYXkgZW5hYmxlIG9uIG1vYmlsZSBkZXZpY2VzXG5cblxuICAgICAgICAgIHNlbGYuJHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJyk7XG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyk7IC8vIGFkZCBhY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXNcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuYWNjZXNzaWJpbGl0eUhpZGRlbikge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdpZCcsIHNlbGYucGxheWVySUQpO1xuICAgICAgICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChzZWxmLiR2aWRlbyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHNlbGYudmlkZW9JRCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYWRkU291cmNlVG9Mb2NhbChzZWxmLiR2aWRlbywgc2VsZi52aWRlb0lEW2tleV0sIGB2aWRlby8ke2tleX1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucGxheWVyID0gc2VsZi5wbGF5ZXIgfHwgc2VsZi4kdmlkZW87XG4gICAgICAgIGxldCBsb2NTdGFydGVkO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgZSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2NTdGFydGVkKSB7XG4gICAgICAgICAgICBzZWxmLmZpcmUoJ3N0YXJ0ZWQnLCBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsb2NTdGFydGVkID0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHNlbGYuZmlyZSgndGltZXVwZGF0ZScsIGUpOyAvLyBjaGVjayBmb3IgZW5kIG9mIHZpZGVvIGFuZCBwbGF5IGFnYWluIG9yIHN0b3BcblxuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZW5kVGltZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5lbmRUaW1lICYmIHRoaXMuY3VycmVudFRpbWUgPj0gc2VsZi5vcHRpb25zLmVuZFRpbWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5KHNlbGYub3B0aW9ucy5zdGFydFRpbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYucGF1c2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3BsYXknLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdwYXVzZScsIGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBlID0+IHtcbiAgICAgICAgICBzZWxmLmZpcmUoJ2VuZGVkJywgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBnZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuICAgICAgICAgIHNlbGYudmlkZW9XaWR0aCA9IHRoaXMudmlkZW9XaWR0aCB8fCAxMjgwO1xuICAgICAgICAgIHNlbGYudmlkZW9IZWlnaHQgPSB0aGlzLnZpZGVvSGVpZ2h0IHx8IDcyMDtcbiAgICAgICAgICBzZWxmLmZpcmUoJ3JlYWR5Jyk7IC8vIGF1dG9wbGF5XG5cbiAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoc2VsZi5vcHRpb25zLnN0YXJ0VGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndm9sdW1lY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5nZXRWb2x1bWUodm9sdW1lID0+IHtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi5maXJlKCd2b2x1bWVjaGFuZ2UnLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB7XG4gICAgICAgICAgc2VsZi5maXJlKCdlcnJvcicsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soc2VsZi4kdmlkZW8pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBsYXllcklEID0gYFZpZGVvV29ya2VyLSR7c2VsZi5JRH1gO1xuICB9XG5cbiAgbG9hZEFQSSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmIChZb3V0dWJlQVBJYWRkZWQgJiYgVmltZW9BUElhZGRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzcmMgPSAnJzsgLy8gbG9hZCBZb3V0dWJlIEFQSVxuXG4gICAgaWYgKHNlbGYudHlwZSA9PT0gJ3lvdXR1YmUnICYmICFZb3V0dWJlQVBJYWRkZWQpIHtcbiAgICAgIFlvdXR1YmVBUElhZGRlZCA9IDE7XG4gICAgICBzcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgfSAvLyBsb2FkIFZpbWVvIEFQSVxuXG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nICYmICFWaW1lb0FQSWFkZGVkKSB7XG4gICAgICBWaW1lb0FQSWFkZGVkID0gMTsgLy8gVXNlZnVsIHdoZW4gVmltZW8gQVBJIGFkZGVkIHVzaW5nIFJlcXVpcmVKUyBodHRwczovL2dpdGh1Yi5jb20vbmstby92aWRlby13b3JrZXIvcHVsbC83XG5cbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuVmltZW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3JjID0gJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzJztcbiAgICB9XG5cbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gYWRkIHNjcmlwdCBpbiBoZWFkIHNlY3Rpb25cblxuXG4gICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGxldCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB0YWcuc3JjID0gc3JjO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICBoZWFkID0gbnVsbDtcbiAgICB0YWcgPSBudWxsO1xuICB9XG5cbiAgb25BUElyZWFkeShjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBZb3V0dWJlXG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAneW91dHViZScpIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgZ2xvYmFsIFlUIHBsYXllciBjYWxsYmFja1xuICAgICAgaWYgKCh0eXBlb2YgZ2xvYmFsJDEuWVQgPT09ICd1bmRlZmluZWQnIHx8IGdsb2JhbCQxLllULmxvYWRlZCA9PT0gMCkgJiYgIWxvYWRpbmdZb3V0dWJlUGxheWVyKSB7XG4gICAgICAgIC8vIFByZXZlbnRzIFJlYWR5IGV2ZW50IGZyb20gYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgICAgIGxvYWRpbmdZb3V0dWJlUGxheWVyID0gMTsgLy8gQ3JlYXRlcyBkZWZlcnJlZCBzbywgb3RoZXIgcGxheWVycyBrbm93IHdoZW4gdG8gd2FpdC5cblxuICAgICAgICBnbG9iYWwkMS5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnbG9iYWwkMS5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IG51bGw7XG4gICAgICAgICAgbG9hZGluZ1lvdXR1YmVEZWZlci5yZXNvbHZlKCdkb25lJyk7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCQxLllUID09PSAnb2JqZWN0JyAmJiBnbG9iYWwkMS5ZVC5sb2FkZWQgPT09IDEpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRpbmdZb3V0dWJlRGVmZXIuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBWaW1lb1xuXG5cbiAgICBpZiAoc2VsZi50eXBlID09PSAndmltZW8nKSB7XG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlZpbWVvID09PSAndW5kZWZpbmVkJyAmJiAhbG9hZGluZ1ZpbWVvUGxheWVyKSB7XG4gICAgICAgIGxvYWRpbmdWaW1lb1BsYXllciA9IDE7XG4gICAgICAgIGNvbnN0IHZpbWVvSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5WaW1lbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodmltZW9JbnRlcnZhbCk7XG4gICAgICAgICAgICBsb2FkaW5nVmltZW9EZWZlci5yZXNvbHZlKCdkb25lJyk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsJDEuVmltZW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkaW5nVmltZW9EZWZlci5kb25lKCgpID0+IHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIExvY2FsXG5cblxuICAgIGlmIChzZWxmLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gamFyYWxsYXhWaWRlbyQxKGphcmFsbGF4ID0gZ2xvYmFsJDIuamFyYWxsYXgpIHtcbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgamFyYWxsYXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBKYXJhbGxheCA9IGphcmFsbGF4LmNvbnN0cnVjdG9yOyAvLyBhcHBlbmQgdmlkZW8gYWZ0ZXIgd2hlbiBibG9jayB3aWxsIGJlIHZpc2libGUuXG5cbiAgY29uc3QgZGVmT25TY3JvbGwgPSBKYXJhbGxheC5wcm90b3R5cGUub25TY3JvbGw7XG5cbiAgSmFyYWxsYXgucHJvdG90eXBlLm9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGRlZk9uU2Nyb2xsLmFwcGx5KHNlbGYpO1xuICAgIGNvbnN0IGlzUmVhZHkgPSAhc2VsZi5pc1ZpZGVvSW5zZXJ0ZWQgJiYgc2VsZi52aWRlbyAmJiAoIXNlbGYub3B0aW9ucy52aWRlb0xhenlMb2FkaW5nIHx8IHNlbGYuaXNFbGVtZW50SW5WaWV3cG9ydCkgJiYgIXNlbGYub3B0aW9ucy5kaXNhYmxlVmlkZW8oKTtcblxuICAgIGlmIChpc1JlYWR5KSB7XG4gICAgICBzZWxmLmlzVmlkZW9JbnNlcnRlZCA9IHRydWU7XG4gICAgICBzZWxmLnZpZGVvLmdldFZpZGVvKHZpZGVvID0+IHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9IHZpZGVvLnBhcmVudE5vZGU7XG4gICAgICAgIHNlbGYuY3NzKHZpZGVvLCB7XG4gICAgICAgICAgcG9zaXRpb246IHNlbGYuaW1hZ2UucG9zaXRpb24sXG4gICAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgYm90dG9tOiAnMHB4JyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIG1heFdpZHRoOiAnbm9uZScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgIHRyYW5zZm9ybVN0eWxlOiAncHJlc2VydmUtM2QnLFxuICAgICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSxvcGFjaXR5JyxcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi4kdmlkZW8gPSB2aWRlbzsgLy8gYWRkIFBvc3RlciBhdHRyaWJ1dGUgdG8gc2VsZi1ob3N0ZWQgdmlkZW9cblxuICAgICAgICBpZiAoJ2xvY2FsJyA9PT0gc2VsZi52aWRlby50eXBlKSB7XG4gICAgICAgICAgaWYgKHNlbGYuaW1hZ2Uuc3JjKSB7XG4gICAgICAgICAgICBzZWxmLiR2aWRlby5zZXRBdHRyaWJ1dGUoJ3Bvc3RlcicsIHNlbGYuaW1hZ2Uuc3JjKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuaW1hZ2UuJGl0ZW0gJiYgJ0lNRycgPT09IHNlbGYuaW1hZ2UuJGl0ZW0udGFnTmFtZSAmJiBzZWxmLmltYWdlLiRpdGVtLnNyYykge1xuICAgICAgICAgICAgc2VsZi4kdmlkZW8uc2V0QXR0cmlidXRlKCdwb3N0ZXInLCBzZWxmLmltYWdlLiRpdGVtLnNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGluc2VydCB2aWRlbyB0YWdcblxuXG4gICAgICAgIHNlbGYuaW1hZ2UuJGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlbyk7IC8vIHJlbW92ZSBwYXJlbnQgdmlkZW8gZWxlbWVudCAoY3JlYXRlZCBieSBWaWRlb1dvcmtlcilcblxuICAgICAgICAkcGFyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoJHBhcmVudCk7IC8vIGNhbGwgb25WaWRlb0luc2VydCBldmVudFxuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25WaWRlb0luc2VydCkge1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5vblZpZGVvSW5zZXJ0LmNhbGwoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gY292ZXIgdmlkZW9cblxuXG4gIGNvbnN0IGRlZkNvdmVySW1hZ2UgPSBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZTtcblxuICBKYXJhbGxheC5wcm90b3R5cGUuY292ZXJJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBpbWFnZURhdGEgPSBkZWZDb3ZlckltYWdlLmFwcGx5KHNlbGYpO1xuICAgIGNvbnN0IG5vZGUgPSBzZWxmLmltYWdlLiRpdGVtID8gc2VsZi5pbWFnZS4kaXRlbS5ub2RlTmFtZSA6IGZhbHNlO1xuXG4gICAgaWYgKGltYWdlRGF0YSAmJiBzZWxmLnZpZGVvICYmIG5vZGUgJiYgKCdJRlJBTUUnID09PSBub2RlIHx8ICdWSURFTycgPT09IG5vZGUpKSB7XG4gICAgICBsZXQgaCA9IGltYWdlRGF0YS5pbWFnZS5oZWlnaHQ7XG4gICAgICBsZXQgdyA9IGggKiBzZWxmLmltYWdlLndpZHRoIC8gc2VsZi5pbWFnZS5oZWlnaHQ7XG4gICAgICBsZXQgbWwgPSAoaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aCAtIHcpIC8gMjtcbiAgICAgIGxldCBtdCA9IGltYWdlRGF0YS5pbWFnZS5tYXJnaW5Ub3A7XG5cbiAgICAgIGlmIChpbWFnZURhdGEuY29udGFpbmVyLndpZHRoID4gdykge1xuICAgICAgICB3ID0gaW1hZ2VEYXRhLmNvbnRhaW5lci53aWR0aDtcbiAgICAgICAgaCA9IHcgKiBzZWxmLmltYWdlLmhlaWdodCAvIHNlbGYuaW1hZ2Uud2lkdGg7XG4gICAgICAgIG1sID0gMDtcbiAgICAgICAgbXQgKz0gKGltYWdlRGF0YS5pbWFnZS5oZWlnaHQgLSBoKSAvIDI7XG4gICAgICB9IC8vIGFkZCB2aWRlbyBoZWlnaHQgb3ZlciB0aGFuIG5lZWQgdG8gaGlkZSBjb250cm9sc1xuXG5cbiAgICAgIGlmICgnSUZSQU1FJyA9PT0gbm9kZSkge1xuICAgICAgICBoICs9IDQwMDtcbiAgICAgICAgbXQgLT0gMjAwO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNzcyhzZWxmLiR2aWRlbywge1xuICAgICAgICB3aWR0aDogYCR7d31weGAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGAke21sfXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtofXB4YCxcbiAgICAgICAgbWFyZ2luVG9wOiBgJHttdH1weGBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG4gIH07IC8vIGluaXQgdmlkZW9cblxuXG4gIGNvbnN0IGRlZkluaXRJbWcgPSBKYXJhbGxheC5wcm90b3R5cGUuaW5pdEltZztcblxuICBKYXJhbGxheC5wcm90b3R5cGUuaW5pdEltZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBkZWZhdWx0UmVzdWx0ID0gZGVmSW5pdEltZy5hcHBseShzZWxmKTtcblxuICAgIGlmICghc2VsZi5vcHRpb25zLnZpZGVvU3JjKSB7XG4gICAgICBzZWxmLm9wdGlvbnMudmlkZW9TcmMgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC12aWRlbycpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYub3B0aW9ucy52aWRlb1NyYykge1xuICAgICAgc2VsZi5kZWZhdWx0SW5pdEltZ1Jlc3VsdCA9IGRlZmF1bHRSZXN1bHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBkZWZDYW5Jbml0UGFyYWxsYXggPSBKYXJhbGxheC5wcm90b3R5cGUuY2FuSW5pdFBhcmFsbGF4O1xuXG4gIEphcmFsbGF4LnByb3RvdHlwZS5jYW5Jbml0UGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRSZXN1bHQgPSBkZWZDYW5Jbml0UGFyYWxsYXguYXBwbHkoc2VsZik7XG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy52aWRlb1NyYykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XG4gICAgfSAvLyBJbml0IHZpZGVvIGFwaVxuXG5cbiAgICBjb25zdCB2aWRlbyA9IG5ldyBWaWRlb1dvcmtlcihzZWxmLm9wdGlvbnMudmlkZW9TcmMsIHtcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgbG9vcDogc2VsZi5vcHRpb25zLnZpZGVvTG9vcCxcbiAgICAgIHNob3dDb250cm9sczogZmFsc2UsXG4gICAgICBhY2Nlc3NpYmlsaXR5SGlkZGVuOiB0cnVlLFxuICAgICAgc3RhcnRUaW1lOiBzZWxmLm9wdGlvbnMudmlkZW9TdGFydFRpbWUgfHwgMCxcbiAgICAgIGVuZFRpbWU6IHNlbGYub3B0aW9ucy52aWRlb0VuZFRpbWUgfHwgMCxcbiAgICAgIG11dGU6IHNlbGYub3B0aW9ucy52aWRlb1ZvbHVtZSA/IDAgOiAxLFxuICAgICAgdm9sdW1lOiBzZWxmLm9wdGlvbnMudmlkZW9Wb2x1bWUgfHwgMFxuICAgIH0pOyAvLyBjYWxsIG9uVmlkZW9Xb3JrZXJJbml0IGV2ZW50XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLm9uVmlkZW9Xb3JrZXJJbml0KSB7XG4gICAgICBzZWxmLm9wdGlvbnMub25WaWRlb1dvcmtlckluaXQuY2FsbChzZWxmLCB2aWRlbyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXREZWZhdWx0SW1hZ2UoKSB7XG4gICAgICBpZiAoc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtKSB7XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0gPSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgICAgIHNlbGYuaW1hZ2UuJGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIHNldCBpbWFnZSB3aWR0aCBhbmQgaGVpZ2h0XG5cbiAgICAgICAgc2VsZi5jb3ZlckltYWdlKCk7XG4gICAgICAgIHNlbGYub25TY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlkZW8uaXNWYWxpZCgpKSB7XG4gICAgICAvLyBGb3JjZSBlbmFibGUgcGFyYWxsYXguXG4gICAgICAvLyBXaGVuIHRoZSBwYXJhbGxheCBkaXNhYmxlZCBvbiBtb2JpbGUgZGV2aWNlcywgd2Ugc3RpbGwgbmVlZCB0byBkaXNwbGF5IHZpZGVvcy5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uay1vL2phcmFsbGF4L2lzc3Vlcy8xNTlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZVBhcmFsbGF4KCkpIHtcbiAgICAgICAgZGVmYXVsdFJlc3VsdCA9IHRydWU7XG4gICAgICAgIHNlbGYuaW1hZ2UucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBzZWxmLm9wdGlvbnMudHlwZSA9ICdzY3JvbGwnO1xuICAgICAgICBzZWxmLm9wdGlvbnMuc3BlZWQgPSAxO1xuICAgICAgfSAvLyBpZiBwYXJhbGxheCB3aWxsIG5vdCBiZSBpbml0ZWQsIHdlIGNhbiBhZGQgdGh1bWJuYWlsIG9uIGJhY2tncm91bmQuXG5cblxuICAgICAgaWYgKCFkZWZhdWx0UmVzdWx0KSB7XG4gICAgICAgIGlmICghc2VsZi5kZWZhdWx0SW5pdEltZ1Jlc3VsdCkge1xuICAgICAgICAgIHZpZGVvLmdldEltYWdlVVJMKHVybCA9PiB7XG4gICAgICAgICAgICAvLyBzYXZlIGRlZmF1bHQgdXNlciBzdHlsZXNcbiAgICAgICAgICAgIGNvbnN0IGN1clN0eWxlID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgIGlmIChjdXJTdHlsZSkge1xuICAgICAgICAgICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1qYXJhbGxheC1vcmlnaW5hbC1zdHlsZXMnLCBjdXJTdHlsZSk7XG4gICAgICAgICAgICB9IC8vIHNldCBuZXcgYmFja2dyb3VuZFxuXG5cbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKFwiJHt1cmx9XCIpYCxcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb3ZlcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIGluaXQgdmlkZW9cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW8ub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMudmlkZW9QbGF5T25seVZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZE9uU2Nyb2xsID0gc2VsZi5vblNjcm9sbDtcblxuICAgICAgICAgICAgc2VsZi5vblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgb2xkT25TY3JvbGwuYXBwbHkoc2VsZik7XG5cbiAgICAgICAgICAgICAgaWYgKCFzZWxmLnZpZGVvRXJyb3IgJiYgKHNlbGYub3B0aW9ucy52aWRlb0xvb3AgfHwgIXNlbGYub3B0aW9ucy52aWRlb0xvb3AgJiYgIXNlbGYudmlkZW9FbmRlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLm9uKCdzdGFydGVkJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSA9IHNlbGYuaW1hZ2UuJGl0ZW07XG4gICAgICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IHNlbGYuJHZpZGVvOyAvLyBzZXQgdmlkZW8gd2lkdGggYW5kIGhlaWdodFxuXG4gICAgICAgICAgc2VsZi5pbWFnZS53aWR0aCA9IHNlbGYudmlkZW8udmlkZW9XaWR0aCB8fCAxMjgwO1xuICAgICAgICAgIHNlbGYuaW1hZ2UuaGVpZ2h0ID0gc2VsZi52aWRlby52aWRlb0hlaWdodCB8fCA3MjA7XG4gICAgICAgICAgc2VsZi5jb3ZlckltYWdlKCk7XG4gICAgICAgICAgc2VsZi5vblNjcm9sbCgpOyAvLyBoaWRlIGltYWdlXG5cbiAgICAgICAgICBpZiAoc2VsZi5pbWFnZS4kZGVmYXVsdF9pdGVtKSB7XG4gICAgICAgICAgICBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlby5vbignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZi52aWRlb0VuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICghc2VsZi5vcHRpb25zLnZpZGVvTG9vcCkge1xuICAgICAgICAgICAgLy8gc2hvdyBkZWZhdWx0IGltYWdlIGlmIExvb3AgZGlzYWJsZWQuXG4gICAgICAgICAgICByZXNldERlZmF1bHRJbWFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZpZGVvLm9uKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICBzZWxmLnZpZGVvRXJyb3IgPSB0cnVlOyAvLyBzaG93IGRlZmF1bHQgaW1hZ2UgaWYgdmlkZW8gbG9hZGluZyBlcnJvci5cblxuICAgICAgICAgIHJlc2V0RGVmYXVsdEltYWdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnZpZGVvID0gdmlkZW87IC8vIHNldCBpbWFnZSBpZiBub3QgZXhpc3RzXG5cbiAgICAgICAgaWYgKCFzZWxmLmRlZmF1bHRJbml0SW1nUmVzdWx0KSB7XG4gICAgICAgICAgLy8gc2V0IGVtcHR5IGltYWdlIG9uIHNlbGYtaG9zdGVkIHZpZGVvIGlmIG5vdCBkZWZpbmVkXG4gICAgICAgICAgc2VsZi5pbWFnZS5zcmMgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JztcblxuICAgICAgICAgIGlmICgnbG9jYWwnICE9PSB2aWRlby50eXBlKSB7XG4gICAgICAgICAgICB2aWRlby5nZXRJbWFnZVVSTCh1cmwgPT4ge1xuICAgICAgICAgICAgICBzZWxmLmltYWdlLmJnSW1hZ2UgPSBgdXJsKFwiJHt1cmx9XCIpYDtcbiAgICAgICAgICAgICAgc2VsZi5pbml0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgfTsgLy8gRGVzdHJveSB2aWRlbyBwYXJhbGxheFxuXG5cbiAgY29uc3QgZGVmRGVzdHJveSA9IEphcmFsbGF4LnByb3RvdHlwZS5kZXN0cm95O1xuXG4gIEphcmFsbGF4LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbSkge1xuICAgICAgc2VsZi5pbWFnZS4kaXRlbSA9IHNlbGYuaW1hZ2UuJGRlZmF1bHRfaXRlbTtcbiAgICAgIGRlbGV0ZSBzZWxmLmltYWdlLiRkZWZhdWx0X2l0ZW07XG4gICAgfVxuXG4gICAgZGVmRGVzdHJveS5hcHBseShzZWxmKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gamFyYWxsYXhFbGVtZW50JDEoamFyYWxsYXggPSBnbG9iYWwkMi5qYXJhbGxheCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJKYXJhbGxheCBFbGVtZW50IGV4dGVuc2lvbiBpcyBERVBSRUNBVEVELCBwbGVhc2UsIGF2b2lkIHVzaW5nIGl0LiBXZSByZWNvbW1lbmQgeW91IGxvb2sgYXQgc29tZXRoaW5nIGxpa2UgYGxheC5qc2AgbGlicmFyeSA8aHR0cHM6Ly9naXRodWIuY29tL2FsZXhmb3h5L2xheC5qcz4uIEl0IGlzIG11Y2ggbW9yZSBwb3dlcmZ1bCBhbmQgaGFzIGEgbGVzcyBjb2RlIChpbiBjYXNlcyB3aGVuIHlvdSBkb24ndCB3YW50IHRvIGFkZCBwYXJhbGxheCBiYWNrZ3JvdW5kcykuXCIpO1xuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGphcmFsbGF4KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgSmFyYWxsYXggPSBqYXJhbGxheC5jb25zdHJ1Y3RvcjsgLy8gcmVkZWZpbmUgZGVmYXVsdCBtZXRob2RzXG5cbiAgWydpbml0SW1nJywgJ2NhbkluaXRQYXJhbGxheCcsICdpbml0JywgJ2Rlc3Ryb3knLCAnY292ZXJJbWFnZScsICdpc1Zpc2libGUnLCAnb25TY3JvbGwnLCAnb25SZXNpemUnXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgZGVmID0gSmFyYWxsYXgucHJvdG90eXBlW2tleV07XG5cbiAgICBKYXJhbGxheC5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCdpbml0SW1nJyA9PT0ga2V5ICYmIG51bGwgIT09IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LWVsZW1lbnQnKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMudHlwZSA9ICdlbGVtZW50JztcbiAgICAgICAgc2VsZi5wdXJlT3B0aW9ucy5zcGVlZCA9IHNlbGYuJGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWphcmFsbGF4LWVsZW1lbnQnKSB8fCAnMTAwJztcbiAgICAgIH1cblxuICAgICAgaWYgKCdlbGVtZW50JyAhPT0gc2VsZi5vcHRpb25zLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRlZi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5wdXJlT3B0aW9ucy50aHJlc2hvbGQgPSBzZWxmLiRpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10aHJlc2hvbGQnKSB8fCAnJztcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc3BlZWRBcnIgPSBgJHtzZWxmLnB1cmVPcHRpb25zLnNwZWVkfWAuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZCA9IHNlbGYucHVyZU9wdGlvbnMuc3BlZWQgfHwgMDtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZFkgPSBzcGVlZEFyclswXSA/IHBhcnNlRmxvYXQoc3BlZWRBcnJbMF0pIDogMDtcbiAgICAgICAgICAgIHNlbGYub3B0aW9ucy5zcGVlZFggPSBzcGVlZEFyclsxXSA/IHBhcnNlRmxvYXQoc3BlZWRBcnJbMV0pIDogMDtcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZEFyciA9IHNlbGYucHVyZU9wdGlvbnMudGhyZXNob2xkLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMudGhyZXNob2xkWSA9IHRocmVzaG9sZEFyclswXSA/IHBhcnNlRmxvYXQodGhyZXNob2xkQXJyWzBdKSA6IG51bGw7XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMudGhyZXNob2xkWCA9IHRocmVzaG9sZEFyclsxXSA/IHBhcnNlRmxvYXQodGhyZXNob2xkQXJyWzFdKSA6IG51bGw7XG4gICAgICAgICAgICBkZWYuYXBwbHkoc2VsZiwgYXJncyk7IC8vIHJlc3RvcmUgYmFja2dyb3VuZCBpbWFnZSBpZiBhdmFpbGFibGUuXG5cbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU3R5bGVzVGFnID0gc2VsZi4kaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtamFyYWxsYXgtb3JpZ2luYWwtc3R5bGVzJyk7XG5cbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlc1RhZykge1xuICAgICAgICAgICAgICBzZWxmLiRpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5hbFN0eWxlc1RhZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdvblJlc2l6ZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZGVmVHJhbnNmb3JtID0gc2VsZi5jc3Moc2VsZi4kaXRlbSwgJ3RyYW5zZm9ybScpO1xuICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzZWxmLiRpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgc2VsZi5pdGVtRGF0YSA9IHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgICAgICAgIHk6IHJlY3QudG9wICsgc2VsZi5nZXRXaW5kb3dEYXRhKCkueSxcbiAgICAgICAgICAgICAgeDogcmVjdC5sZWZ0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VsZi5jc3Moc2VsZi4kaXRlbSwge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGRlZlRyYW5zZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnb25TY3JvbGwnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHduZCA9IHNlbGYuZ2V0V2luZG93RGF0YSgpO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyUGVyY2VudCA9ICh3bmQueSArIHduZC5oZWlnaHQgLyAyIC0gc2VsZi5pdGVtRGF0YS55IC0gc2VsZi5pdGVtRGF0YS5oZWlnaHQgLyAyKSAvICh3bmQuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWSA9IGNlbnRlclBlcmNlbnQgKiBzZWxmLm9wdGlvbnMuc3BlZWRZO1xuICAgICAgICAgICAgY29uc3QgbW92ZVggPSBjZW50ZXJQZXJjZW50ICogc2VsZi5vcHRpb25zLnNwZWVkWDtcbiAgICAgICAgICAgIGxldCBteSA9IG1vdmVZO1xuICAgICAgICAgICAgbGV0IG14ID0gbW92ZVg7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2VsZi5vcHRpb25zLnRocmVzaG9sZFkgJiYgbW92ZVkgPiBzZWxmLm9wdGlvbnMudGhyZXNob2xkWSkgbXkgPSAwO1xuICAgICAgICAgICAgaWYgKG51bGwgIT09IHNlbGYub3B0aW9ucy50aHJlc2hvbGRYICYmIG1vdmVYID4gc2VsZi5vcHRpb25zLnRocmVzaG9sZFgpIG14ID0gMDtcbiAgICAgICAgICAgIHNlbGYuY3NzKHNlbGYuJGl0ZW0sIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtteH1weCwke215fXB4LDApYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnaW5pdEltZyc6XG4gICAgICAgIGNhc2UgJ2lzVmlzaWJsZSc6XG4gICAgICAgIGNhc2UgJ2NvdmVySW1hZ2UnOlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWYuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmNvbnN0IGphcmFsbGF4ID0gamFyYWxsYXgkMTtcbmNvbnN0IGphcmFsbGF4VmlkZW8gPSBmdW5jdGlvbiBqYXJhbGxheFZpZGVvKCkge1xuICByZXR1cm4gamFyYWxsYXhWaWRlbyQxKGphcmFsbGF4KTtcbn07XG5jb25zdCBqYXJhbGxheEVsZW1lbnQgPSBmdW5jdGlvbiBqYXJhbGxheEVsZW1lbnQoKSB7XG4gIHJldHVybiBqYXJhbGxheEVsZW1lbnQkMShqYXJhbGxheCk7XG59O1xuXG5leHBvcnRzLmphcmFsbGF4ID0gamFyYWxsYXg7XG5leHBvcnRzLmphcmFsbGF4RWxlbWVudCA9IGphcmFsbGF4RWxlbWVudDtcbmV4cG9ydHMuamFyYWxsYXhWaWRlbyA9IGphcmFsbGF4VmlkZW87XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qYXJhbGxheC5janMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9