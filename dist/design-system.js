/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* skip-to-content */\n#skip-to-content {\n  position: relative;\n  left: 50% !important;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 1px;\n  height: 1px;\n  z-index: 999;\n}\n\n#skip-to-content a {\n  width: 1px;\n  height: 1px;\n  text-align: center;\n  position: absolute !important;\n  left: 50% !important;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  clip: unset;\n  background-color: white;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  overflow: hidden;\n}\n\n#skip-to-content a:focus {\n  width: 160px;\n  height: 27px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 11 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 12 */,
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* translate widget loader */\n#google_translate_element {\n  font-size: var(--font-size-sm, 0.875rem);\n}\n\n/*official*/\n.official-header {\n  background-color: var(--gray-50, #fafafa);\n  padding: 0;\n  width: 100%;\n  /* google translate */\n}\n\n@media (max-width: 767px) {\n  .official-header {\n    width: 100vw;\n    padding: var(--s-1, 0.5rem) 0;\n  }\n}\n.official-header .container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  max-width: var(--w-lg, 1176px);\n  min-height: 40px;\n  margin: 0 auto;\n  padding: 0 var(--s-2, 1rem) 0 var(--s-2, 1rem);\n}\n\n.official-header .official-logo {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.official-header .official-logo .cagov-logo {\n  margin: 0 0 0 0;\n  display: flex;\n}\n\n.official-header svg {\n  padding: 0;\n  width: 33px;\n}\n\n.official-header svg .ca {\n  fill: var(--cagov-highlight, #fec02f);\n}\n\n.official-header svg .gov {\n  fill: var(--cagov-primary-dark, #003484);\n}\n\n.official-header .official-tag {\n  margin: 0 var(--s-1, 0.5rem);\n  font-size: var(--font-size-sm, 0.875rem);\n  display: inherit;\n}\n\n.official-header .official-languages a {\n  color: var(--black, #000);\n  padding: 0 var(--s-1, 0.5rem) 0 var(--s-1, 0.5rem);\n  text-decoration: underline;\n}\n\n.official-header .official-languages a:hover {\n  color: var(--black, #000);\n  text-decoration: none;\n}\n\n.official-header .official-languages a:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.official-header .official-languages {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.official-header .official-languages .dropdown {\n  position: relative;\n}\n\n.official-header .official-languages button.offcial-more {\n  padding-right: 0;\n  border: none;\n  text-decoration: underline;\n  color: var(--black, #000);\n  background-color: var(--white, #fff);\n  text-decoration: underline;\n  transition: transform 0.3s;\n}\n\n.official-header .official-languages button.offcial-more:hover {\n  color: var(--black, #000);\n  text-decoration: none;\n}\n\n.official-header .official-languages button.offcial-more:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.official-header .official-languages button.offcial-more[aria-expanded=false] .caret-down {\n  transition: all 0.3s;\n}\n\n.official-header .official-languages button.offcial-more[aria-expanded=false] .caret-down svg {\n  padding: 0 0 0 0;\n  width: 20px;\n  height: 18px;\n  overflow: visible;\n  position: relative;\n  right: 5px;\n}\n\n.official-header .official-languages button.offcial-more[aria-expanded=true] .caret-down {\n  transition: transform 0.3s;\n}\n\n.official-header .official-languages button.offcial-more[aria-expanded=true] .caret-down svg {\n  padding: 0 0 0 0;\n  width: 20px;\n  height: 18px;\n  position: relative;\n  top: 8px;\n  left: 4px;\n  overflow: visible;\n  transform: rotate(180deg);\n}\n\n.official-header .official-languages .dropdown-content {\n  background-clip: padding-box;\n  background-color: var(--white, #fff);\n  border: 1px solid var(--gray-200, #d4d4d7);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: var(--radius-2, 4px);\n  padding: var(--s-2, 1rem);\n  position: absolute;\n  right: 0px;\n  top: 100%;\n  text-align: left;\n  z-index: 1000;\n  min-width: 150px;\n  display: none;\n}\n\n.official-header .official-languages .dropdown-content.show {\n  display: flex;\n  flex-direction: column;\n}\n\n.official-header .goog-te-gadget {\n  max-height: 42px;\n  overflow: hidden;\n}\n\n.official-header .goog-te-gadget .goog-te-combo {\n  /* hardcoded translate widget stuff from cannabis site */\n  background-color: #fff;\n  border: 1px solid #bbb;\n  padding: 0.25rem;\n  color: #4e4e4e;\n}\n\n.official-header .goog-logo-link {\n  display: none;\n}\n\n.official-header #google_translate_element .skiptranslate.goog-te-gadget,\n.official-header .skiptranslate.goog-te-gadget a {\n  color: white;\n}\n\n.official-header .goog-te-gadget {\n  margin-bottom: -10px;\n  font-size: 11px;\n  color: #666;\n  white-space: nowrap;\n}\n\n.desktop-only {\n  display: none;\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-only {\n    display: inline;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */,
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".site-header {\n  padding: 0;\n  box-sizing: border-box;\n  background-color: var(--white, #fff);\n  border-bottom: 1px solid var(--gray-200, #d4d4d7);\n}\n\n.site-header .container {\n  max-width: var(--w-lg, \"1176px\");\n  margin: 0 auto;\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto;\n  grid-template-areas: \"org-name mobile-icons\";\n  column-gap: 0.5rem;\n  row-gap: 0.25rem;\n  justify-items: start;\n}\n\n.site-header .container.with-logo {\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  grid-template-areas: \"logo mobile-icons\" \"org-name org-name\";\n}\n\n.site-header .container .search-container {\n  display: none;\n}\n\n.site-header .grid-logo {\n  grid-area: logo;\n  align-self: center;\n  display: flex;\n  align-items: center;\n}\n\n.site-header .grid-org-name {\n  grid-area: org-name;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.25rem;\n  transition: all 0.3s;\n  color: var(--black, #000);\n  text-decoration: none;\n}\n\n.site-header .grid-org-name:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.site-header .grid-search {\n  grid-area: search;\n  align-self: center;\n  justify-self: end;\n  min-width: 40%;\n  position: relative;\n  left: 4px;\n}\n\n.site-header .grid-mobile-icons {\n  grid-area: mobile-icons;\n  align-self: center;\n  justify-self: end;\n}\n\n.site-header .org-name-state {\n  display: block;\n  font-family: var(--org-name-state-font, \"Public Sans\", sans-serif);\n  font-size: var(--org-name-state-font-size, 1rem);\n  font-weight: var(--org-name-state-font-weight, 500);\n  line-height: var(--org-name-state-line-height, 1.2);\n  text-transform: var(--org-name-state-text-transform, none);\n}\n\n.site-header .org-name-dept {\n  display: block;\n  font-family: var(--org-name-dept-font, \"Public Sans\", sans-serif);\n  font-size: var(--org-name-dept-font-size, 1.75rem);\n  font-weight: var(--org-name-dept-font-weight, 700);\n  line-height: var(--org-name-dept-line-height, 1.2);\n  text-transform: var(--org-name-dept-text-transform, none);\n}\n\n.site-header .mobile-icons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: end;\n  column-gap: var(--s-3, 1.5rem);\n  row-gap: 12px;\n}\n\n.site-header .mobile-search {\n  margin: 0 !important;\n}\n\n.site-header button.search-btn,\n.site-header button.menu-btn {\n  padding: 0 !important;\n  border: none;\n  display: flex;\n  flex-direction: row;\n  column-gap: 0.5rem;\n  align-items: center;\n  background: transparent;\n  overflow: visible;\n  padding: 10px;\n  color: var(--primary-700, #165ac2);\n}\n\n.site-header button.search-btn:hover,\n.site-header button.menu-btn:hover {\n  color: var(--primary-900, #003588);\n}\n\n.site-header button.search-btn:hover .blue,\n.site-header button.menu-btn:hover .blue {\n  fill: var(--primary-900, #003588);\n}\n\n.site-header button.search-btn:focus,\n.site-header button.menu-btn:focus {\n  color: var(--primary-900, #003588);\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.site-header button.search-btn svg,\n.site-header button.menu-btn svg {\n  display: inline-block;\n}\n\n.site-header button.search-btn .blue,\n.site-header button.menu-btn .blue {\n  fill: var(--primary-700, #165ac2);\n}\n\n.site-header .menu-trigger {\n  padding: 0 !important;\n  margin: 0 !important;\n  transition: 0.3s;\n  transform-origin: top left;\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  color: var(--primary-700, #165ac2);\n  display: flex;\n  align-items: center;\n  right: 0;\n  transition: 0.3s;\n  transform-origin: center center;\n}\n\n.site-header .menu-trigger .is-fixed {\n  position: fixed;\n}\n\n.site-header .menu-trigger .hamburger-inner {\n  background-color: var(--primary-700, #165ac2);\n}\n\n.site-header .menu-trigger:hover {\n  color: var(--primary-900, #003588);\n}\n\n.site-header .menu-trigger:hover .hamburger-inner:before, .site-header .menu-trigger:hover .hamburger-inner:after {\n  background-color: var(--primary-900, #003588);\n}\n\n.site-header .hamburger {\n  padding: 0.15rem 0.15rem;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  position: relative;\n  top: -2px;\n  height: 20px;\n  transition: all 0.2s ease-in-out;\n  vertical-align: middle;\n  z-index: 10000;\n  margin-right: var(--s-1, 0.5rem);\n}\n\n.site-header .hamburger-box {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: relative;\n}\n\n.site-header .hamburger-inner {\n  display: block;\n  top: 50%;\n  width: 20px;\n  margin-top: -1px;\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n\n.site-header .hamburger-inner, .site-header .hamburger-inner:before, .site-header .hamburger-inner:after {\n  height: 2px;\n  border-radius: 0;\n  position: absolute;\n  transition-property: transform, width, background-color;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n\n.site-header .hamburger-inner:before, .site-header .hamburger-inner:after {\n  width: 20px;\n  content: \"\";\n  display: block;\n}\n\n.site-header .hamburger-inner:before {\n  top: -6px;\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in, width 0.1s 0.12s ease-out;\n}\n\n.site-header .hamburger-inner:after {\n  bottom: -6px;\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), width 0.1s 0.12s ease-out;\n}\n\n.display-menu .cagov-nav.hamburger .hamburger-inner {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  width: 12px;\n}\n\n.display-menu .cagov-nav.hamburger .hamburger-inner, .display-menu .cagov-nav.hamburger .hamburger-inner:before, .display-menu .cagov-nav.hamburger .hamburger-inner:after {\n  width: 20px !important;\n}\n\n.display-menu .cagov-nav.hamburger .hamburger-inner:before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n}\n\n.display-menu .cagov-nav.hamburger .hamburger-inner:after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.site-header .search-container .site-search,\ncagov-site-navigation .search-container .site-search {\n  display: flex;\n  position: relative;\n}\n\n.site-header .search-container .site-search .search-textfield,\ncagov-site-navigation .search-container .site-search .search-textfield {\n  border: 1px solid;\n  border-color: var(--primary-700, #004abc);\n  border-radius: 4px;\n  padding: 10px;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.site-header .search-container .site-search .search-textfield:focus,\ncagov-site-navigation .search-container .site-search .search-textfield:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n  outline-offset: -2px;\n}\n\n.site-header .search-container .site-search .search-submit,\ncagov-site-navigation .search-container .site-search .search-submit {\n  position: relative;\n  right: 5px;\n  outline-offset: -2px;\n  background-color: var(--primary-700, #004abc);\n  border: 1px solid var(--primary-700, #004abc);\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 7px 14px 4px 14px;\n}\n\n.site-header .search-container .site-search .search-submit:hover,\ncagov-site-navigation .search-container .site-search .search-submit:hover {\n  background-color: var(--primary-900, #003484);\n  border-color: var(--primary-900, #003484);\n}\n\n.site-header .search-container .site-search .search-submit:focus,\ncagov-site-navigation .search-container .site-search .search-submit:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.site-header .search-container .site-search .search-submit svg path,\ncagov-site-navigation .search-container .site-search .search-submit svg path {\n  fill: var(--white, #fff);\n}\n\n.site-header .search-container .site-search .search-close,\ncagov-site-navigation .search-container .site-search .search-close {\n  color: var(--primary-700, #004abc);\n  text-decoration: underline;\n  border: none;\n  background-color: var(--gray-100, #f9f9fa);\n  padding: 0 var(--s-2, 1rem) 0 var(--s-2, 1rem);\n}\n\n.site-header .search-container .site-search .search-close:hover,\ncagov-site-navigation .search-container .site-search .search-close:hover {\n  color: var(--primary-900, #003484);\n  text-decoration: none;\n}\n\n.site-header .search-container .site-search .search-close:focus,\ncagov-site-navigation .search-container .site-search .search-close:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\n.site-header .search-container--small,\ncagov-site-navigation .search-container--small {\n  padding-left: var(--s-2, 1rem);\n  padding-right: var(--s-2, 1rem);\n}\n\n.site-header .search-container--small.hidden-search,\ncagov-site-navigation .search-container--small.hidden-search {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .mobile-icons,\n  .search-close {\n    display: none !important;\n  }\n  .site-header .container {\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto;\n    grid-template-areas: \"org-name search\";\n  }\n  .site-header .container.with-logo {\n    grid-template-columns: auto auto 1fr;\n    grid-template-rows: auto;\n    grid-template-areas: \"logo org-name search\";\n  }\n  .site-header .search-container {\n    display: block !important;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */,
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Tablet and wider */\n/* Desktop and wider */\n/* utility classes */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.hidden-search {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .mobile-icons,\n  .search-close {\n    display: none !important;\n  }\n}\n/* MAIN MENU */\n.cagov-nav.mobile-search {\n  margin-top: var(--s-2, 1rem);\n}\n\n.cagov-nav.menu-trigger {\n  margin-top: 1rem;\n  padding: var(--s-1, 0.5rem) var(--s-2, 1rem) var(--s-1, 0.5rem) 0;\n  transition: 0.3s;\n  transform-origin: top left;\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  right: 0;\n  transition: 0.3s;\n  transform-origin: center center;\n}\n\n.cagov-nav.menu-trigger .is-fixed {\n  position: fixed;\n}\n\n@media (max-width: 767px) {\n  .cagov-nav.menu-trigger {\n    z-index: 2000;\n  }\n}\n@media (min-width: 768px) {\n  .cagov-nav.menu-trigger {\n    z-index: 2000;\n  }\n}\ncagov-site-navigation .container {\n  padding: 0;\n  margin: 0;\n}\n\ncagov-site-navigation .container .search-container {\n  padding-top: var(--s-2, 1rem);\n  padding-bottom: var(--s-2, 1rem);\n}\n\n/* EXPANDED MENU SYTLES */\ncagov-site-navigation {\n  border-bottom: 1px solid var(--gray-200, #d4d4d7);\n  background-color: var(--white, #ffffff);\n}\n\ncagov-site-navigation a.expanded-menu-section-header-link {\n  /* jbum - this is to override the inherited text-decoration from .interior_page a */\n  text-decoration: none;\n}\n\ncagov-site-navigation.display-menu .expanded-menu {\n  display: block;\n}\n\ncagov-site-navigation .mobile-icons {\n  display: block;\n  margin-left: auto;\n  display: flex;\n}\n\ncagov-site-navigation .mobile-icons .search-btn {\n  display: flex;\n  align-items: center;\n}\n\ncagov-site-navigation .mobile-icons .search-btn svg {\n  margin-right: var(--s-1, 0.5rem);\n}\n\ncagov-site-navigation .mobile-icons .search-btn,\ncagov-site-navigation .mobile-icons .menu-btn {\n  border: none;\n  background: transparent;\n  overflow: visible;\n  padding: 10px 10px;\n  margin-right: 10px;\n}\n\ncagov-site-navigation .mobile-icons .search-btn:hover,\ncagov-site-navigation .mobile-icons .menu-btn:hover {\n  color: var(--primary-900, #003588);\n}\n\ncagov-site-navigation .mobile-icons .search-btn:hover .blue,\ncagov-site-navigation .mobile-icons .menu-btn:hover .blue {\n  fill: var(--primary-900, #003588);\n}\n\ncagov-site-navigation .mobile-icons .search-btn:focus,\ncagov-site-navigation .mobile-icons .menu-btn:focus {\n  color: var(--primary-900, #003588);\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\ncagov-site-navigation .mobile-icons .search-btn svg,\ncagov-site-navigation .mobile-icons .menu-btn svg {\n  position: relative;\n  top: 1px;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation {\n    display: block;\n  }\n  cagov-site-navigation .mobile-icons {\n    display: none;\n  }\n}\ncagov-site-navigation .expanded-menu {\n  display: none;\n  max-width: calc(var(--w-lg, \"1176px\") + 32px);\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu {\n    display: block;\n    padding: 0 16px;\n  }\n}\ncagov-site-navigation .expanded-menu-grid {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-grid {\n    display: flex;\n    justify-content: flex-start;\n    column-gap: var(--s-1, 0.5rem);\n    align-content: flex-start;\n    align-items: stretch;\n  }\n}\ncagov-site-navigation .expanded-menu-col {\n  text-align: left;\n}\n\ncagov-site-navigation .expanded-menu-section {\n  text-align: left;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section.expanded {\n    z-index: 3;\n  }\n}\ncagov-site-navigation .expanded-menu-section.expanded .expanded-menu-dropdown {\n  max-height: none;\n  top: 2.35rem;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section {\n    padding: 0;\n    margin-bottom: 1rem;\n    position: relative;\n  }\n  cagov-site-navigation .expanded-menu-section:last-of-type {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section.mobile-only {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section .expanded-menu-dropdown {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: auto;\n    min-width: 17rem;\n    background: #fff;\n    padding: 0;\n    border: none;\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section .expanded-menu-section-header {\n    padding-right: 0;\n    margin-right: 0;\n  }\n}\n@media (max-width: 767px) {\n  cagov-site-navigation .expanded-menu-section {\n    border-top: solid 1px var(--gray-200, #d4d4d7);\n  }\n}\n@media (max-width: 767px) {\n  cagov-site-navigation .expanded-menu-section.expanded .expanded-menu-dropdown {\n    max-height: 100rem;\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section.expanded .expanded-menu-dropdown {\n    max-height: none;\n    top: 59px;\n    padding: var(--s-1, 0.5rem) var(--s-2, 1rem) var(--s-2, 1rem) var(--s-2, 1rem);\n    border: solid 1px var(--gray-200, #d4d4d7);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n}\ncagov-site-navigation .expanded-menu-section.expanded .expanded-menu-section-header-arrow-svg {\n  transform: rotate(180deg);\n}\n\ncagov-site-navigation .expanded-menu-section-header-link {\n  display: flex !important;\n  column-gap: var(--s-1, 0.5rem);\n  align-items: center;\n  justify-content: space-between;\n  font-weight: var(--font-weight-4, 400);\n  font-size: var(--font-size-2, 1.125rem);\n  cursor: pointer !important;\n  width: 100%;\n  text-transform: none;\n  display: block;\n  text-align: left;\n  border: none;\n  padding-top: var(--s-2, 1rem);\n  padding-bottom: var(--s-2, 1rem);\n  padding-left: var(--s-2, 1rem);\n  padding-right: var(--s-2, 1rem);\n  color: var(--primary-700, #165ac2);\n  outline-offset: -2px;\n}\n\ncagov-site-navigation .expanded-menu-section-header-link:active {\n  background: transparent;\n}\n\ncagov-site-navigation .expanded-menu-section-header-link:hover {\n  text-decoration: underline;\n  color: var(--primary-900, #003588);\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section-header-link {\n    justify-content: flex-start;\n  }\n}\ncagov-site-navigation .expanded-menu-section-header-arrow {\n  max-width: 1rem;\n  max-height: 1rem;\n  transform: translateY(-50%);\n  display: block;\n  transition: all 0.5s cubic-bezier(0.57, 0.2, 0.21, 0.89);\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section-header-arrow {\n    transform: none;\n  }\n}\ncagov-site-navigation .expanded-menu-section-header-arrow-svg {\n  width: 100%;\n  display: inline-block;\n  transition: all 0.6s cubic-bezier(0.5, 1.65, 0.4, 0.8);\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-section-header-arrow-svg {\n    display: block;\n  }\n}\ncagov-site-navigation .expanded-menu-dropdown {\n  max-height: 0px;\n  overflow: hidden;\n  transition: max-height 0.5s cubic-bezier(0.57, 0.2, 0.21, 0.89);\n}\n\ncagov-site-navigation .expanded-menu-dropdown-link {\n  font-weight: var(--font-weight-4, 400);\n  font-size: var(--font-size-2, 1.125rem);\n  padding: var(--s-1, 0.5rem) var(--s-sm, 0.25rem);\n  margin: 0.15rem 0 0.15rem 2px;\n  display: table;\n  transition: color 0.3s cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  text-decoration: none;\n  width: 100%;\n}\n\ncagov-site-navigation .expanded-menu-dropdown-link:hover {\n  text-decoration: underline;\n}\n\ncagov-site-navigation .expanded-menu-dropdown-link.current-page-highlight {\n  font-weight: var(--font-weight-7, 700);\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation .expanded-menu-dropdown-link {\n    padding: var(--s-1, 0.5rem) 0;\n    line-height: var(--font-lineheight-6, 2rem);\n  }\n}\n@media (max-width: 767px) {\n  cagov-site-navigation .expanded-menu-dropdown-link {\n    padding: var(--s-1, 0.5rem) var(--s-sm, 0.25rem) var(--s-1, 0.5rem) var(--s-2, 1rem);\n    outline-offset: -4px;\n  }\n  cagov-site-navigation .expanded-menu-dropdown-link:first-child {\n    padding-top: var(--s-2, 1rem);\n  }\n  cagov-site-navigation .expanded-menu-dropdown-link:last-child {\n    padding-bottom: var(--s-2, 1rem);\n  }\n}\ncagov-site-navigation .expanded-menu-grouping:not(:first-child) {\n  margin-top: var(--s-1, 0.5rem);\n}\n\ncagov-site-navigation.display-menu {\n  overflow: hidden;\n}\n\ncagov-site-navigation.display-menu .expanded-menu {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n@media (min-width: 768px) {\n  cagov-site-navigation.display-menu .expanded-menu {\n    width: 100vw;\n    height: 100vh;\n    opacity: 1;\n    visibility: visible;\n  }\n}\ncagov-site-navigation.display-menu .expanded-menu:focus {\n  outline: none;\n}\n\n@media (max-width: 767px) {\n  cagov-site-navigation.display-menu .expanded-menu {\n    margin-left: 0;\n    border-bottom: solid 1px var(--gray-200, #d4d4d7);\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation.display-menu .expanded-menu-col, cagov-site-navigation.display-menu .expanded-menu-search {\n    transition: all 0.6s cubic-bezier(0.5, 1.65, 0.4, 0.8);\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 768px) {\n  cagov-site-navigation.display-menu .expanded-menu-col.section-get-help {\n    transition-delay: 0.15s !important;\n  }\n  cagov-site-navigation.display-menu .expanded-menu-col.section-health-info {\n    transition-delay: 0.3s !important;\n  }\n  cagov-site-navigation.display-menu .expanded-menu-col.section-working-living-safely {\n    transition-delay: 0.45s !important;\n  }\n  cagov-site-navigation.display-menu .expanded-menu-col.section-you-help {\n    transition-delay: 0.6s !important;\n  }\n}\ncagov-site-navigation .expanded-menu-close-mobile-svg {\n  width: var(--s-2, 1rem);\n  transform: rotate(180deg);\n}\n\n.expanded-menu-section-header-arrow-svg {\n  max-width: 20px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* footer */\nfooter {\n  font-size: var(--font-size-1, 1rem);\n  border-top: solid 1px var(--gray-200, #d4d4d7);\n}\n\nfooter .container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n  padding: var(--s-2, 1rem);\n}\n\nfooter a:hover {\n  color: var(--primary-900, #003588);\n}\n\nfooter a:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\nfooter .footer-secondary-links {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter .footer-secondary-links a {\n  margin-right: var(--s-3, 1.5rem);\n  padding-top: var(--s-1, 0.5rem);\n  padding-bottom: var(--s-1, 0.5rem);\n}\n\nfooter .footer-secondary-links a span.external-link-icon,\nfooter .footer-secondary-links a span.ca-gov-icon-external-link {\n  display: none;\n}\n\nfooter .footer-secondary-links a:hover {\n  text-decoration: none;\n}\n\nfooter .bg-light-grey svg {\n  padding: 0;\n}\n\nfooter .bg-light-grey svg .ca {\n  fill: var(--cagov-highlight, #fec02f);\n}\n\nfooter .bg-light-grey svg .gov {\n  fill: var(--cagov-primary-dark, #003484);\n}\n\nfooter .cagov-logo {\n  padding-top: var(--s-1, 0.5rem);\n  padding-bottom: var(--s-1, 0.5rem);\n  padding-right: var(--s-3, 1.5rem);\n}\n\nfooter .footer-secondary-links a,\nfooter .copyright {\n  color: var(--black, #000);\n  padding-top: var(--s-1, 0.5rem);\n  padding-bottom: var(--s-1, 0.5rem);\n}\n\nfooter .copyright {\n  margin: 0;\n}\n\n.bg-light-grey {\n  background-color: var(--gray-50, #fafafa);\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n@media (min-width: 991px) {\n  footer .footer-secondary-links,\n  footer .container {\n    margin-right: auto;\n    flex-direction: row;\n    align-items: center;\n  }\n  footer .footer-secondary-links.flex-col-end,\n  footer .container.flex-col-end {\n    flex-direction: column;\n    align-items: end;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */,
/* 22 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* agency footer */\nsection.site-footer {\n  border-top: solid 1px var(--gray-200, #d4d4d7);\n}\n\nsection.site-footer .container {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n  padding: 16px;\n}\n\nsection.site-footer a {\n  color: var(--primary-700, #165ac2);\n}\n\nsection.site-footer a:hover {\n  color: var(--primary-900, #003588);\n}\n\nsection.site-footer a:focus {\n  outline: 2px solid var(--accent2-500, #ac8226);\n}\n\nsection.site-footer .footer-logo:not(:empty) {\n  width: 54px;\n  margin-right: var(--s-3, 1.5rem);\n}\n\nsection.site-footer .footer-logo:not(:empty) img {\n  width: 100%;\n}\n\nsection.site-footer .footer-secondary-links {\n  display: flex;\n  flex-direction: column;\n  font-size: var(--font-size-2, 1.125rem);\n}\n\nsection.site-footer .footer-secondary-links a {\n  margin-right: 1.7rem;\n  padding-top: var(--s-1, 0.5rem);\n  padding-bottom: var(--s-1, 0.5rem);\n}\n\nsection.site-footer .footer-social-links {\n  white-space: nowrap;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\nsection.site-footer .footer-social-links a {\n  text-decoration: none;\n  padding-right: 0.3rem;\n  padding-left: 0.3rem;\n  transition: all 0.3s ease;\n}\n\nsection.site-footer .footer-social-links a svg path {\n  fill: var(--primary-700, #165ac2);\n}\n\nsection.site-footer .footer-social-links a:hover svg path {\n  fill: var(--primary-900, #003588);\n}\n\n@media (min-width: 991px) {\n  .footer-secondary-links,\n  section.site-footer .container {\n    flex-direction: row !important;\n    align-items: center;\n  }\n  .footer-social-links {\n    margin-left: auto;\n  }\n}\n.bg-light-grey {\n  background-color: var(--gray-50, #fafafa);\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body.design-system cagov-navoverlay {\n  border-bottom: 0;\n}\nbody.design-system cagov-navoverlay nav {\n  max-height: 50px;\n}\nbody.design-system cagov-navoverlay li strong a {\n  padding-left: 0;\n}\nbody.design-system cagov-navoverlay li .expanded-menu-section {\n  position: absolute;\n  padding: 0 15px;\n  outline: 1px solid #efefef;\n  background: #fff;\n  box-shadow: 0px 4px 7px -1px rgb(0, 0, 0);\n}\nbody.design-system cagov-navoverlay li .expanded-menu-section a {\n  white-space: nowrap;\n}\nbody.design-system cagov-navoverlay li .expanded-menu-section:not(.expanded) a {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdesign_system_wordpress_gutenberg"] = self["webpackChunkdesign_system_wordpress_gutenberg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/**
 * Dropdown menu web component
 *
 * @element cagov-site-navigation
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for background
 * @cssprop --primary-900 - #003588
 * @cssprop --gray-200 - #d4d4d7
 * @cssprop --w-lg - '1176px'
 */

// Function determining if it's mobile view (max 767px)
function mobileView() {
  const mobileElement = document.querySelector(
    '.site-header .grid-mobile-icons',
  );
  if (mobileElement) {
    return getComputedStyle(mobileElement).display !== 'none';
  }
  return false;
}
class CAGovSiteNavigation extends window.HTMLElement {
  connectedCallback() {
    document
      .querySelector('.cagov-nav.open-menu')
      .addEventListener('click', this.toggleMainMenu.bind(this));

    // Mobile search events
    const mobileSearchBtn = document.querySelector(
      '.cagov-nav.mobile-search .search-btn',
    );
    if (mobileSearchBtn) {
      mobileSearchBtn.setAttribute('aria-expanded', 'false');
      document
        .querySelector('.search-container--small .site-search input')
        .setAttribute('tabindex', '-1');
      document
        .querySelector(
          '.search-container--small .site-search button.search-submit',
        )
        .setAttribute('tabindex', '-1');
      document
        .querySelector('.search-container--small')
        .setAttribute('aria-hidden', 'true');
      if (mobileView()) {
        mobileSearchBtn.addEventListener('click', () => {
          document
            .querySelector('.search-container--small')
            .classList.toggle('hidden-search');
          const searchactive = document
            .querySelector('.search-container--small')
            .classList.contains('hidden-search');
          if (searchactive) {
            mobileSearchBtn.setAttribute('aria-expanded', 'false');
            document
              .querySelector('.search-container--small .site-search input')
              .setAttribute('tabindex', '-1');
            document
              .querySelector(
                '.search-container--small .site-search button.search-submit',
              )
              .setAttribute('tabindex', '-1');
            document
              .querySelector('.search-container--small')
              .setAttribute('aria-hidden', 'true');
          } else {
            mobileSearchBtn.setAttribute('aria-expanded', 'true');
            document
              .querySelector('.search-container--small .site-search input')
              .focus();
            document
              .querySelector('.search-container--small .site-search input')
              .removeAttribute('tabindex');
            document
              .querySelector(
                '.search-container--small .site-search button.search-submit',
              )
              .removeAttribute('tabindex');
            document
              .querySelector('.search-container--small')
              .setAttribute('aria-hidden', 'false');
          }
        });
      }
    }

    // reset mobile search on resize
    window.addEventListener('resize', () => {
      document
        .querySelector('.search-container--small')
        .classList.add('hidden-search');
      if (mobileSearchBtn) {
        document
          .querySelector('.cagov-nav.mobile-search .search-btn')
          .setAttribute('aria-expanded', 'false');
      }
      document
        .querySelector('.search-container--small .site-search input')
        .setAttribute('tabindex', '-1');
      document
        .querySelector(
          '.search-container--small .site-search button.search-submit',
        )
        .setAttribute('tabindex', '-1');
      document
        .querySelector('.search-container--small')
        .setAttribute('aria-hidden', 'true');
      // reset navigation on resize
      this.closeAllMenus();
      this.closeMainMenu();
    });

    this.expansionListeners();
    document.addEventListener('keydown', this.escapeMainMenu.bind(this));
    document.body.addEventListener('click', this.bodyClick.bind(this));
    this.highlightCurrentPage();
  }

  toggleMainMenu() {
    if (
      document
        .querySelector('.cagov-nav.hamburger')
        .classList.contains('is-active')
    ) {
      this.closeMainMenu();
    } else {
      this.openMainMenu();
    }
  }

  highlightCurrentPage() {
    this.querySelectorAll('a.expanded-menu-dropdown-link').forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add('current-page-highlight');
      }
    });
  }

  openMainMenu() {
    document.querySelector('.mobile-icons').classList.add('display-menu');
    this.classList.add('display-menu');
    document.querySelector('.cagov-nav.hamburger').classList.add('is-active');
    document.querySelector('.cagov-nav.menu-trigger').classList.add('is-fixed');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .setAttribute('aria-expanded', 'true');
    const menLabel = document.querySelector('.cagov-nav.menu-trigger-label');
    menLabel.innerHTML = menLabel.getAttribute('data-closelabel');
  }

  closeMainMenu() {
    document.querySelector('.mobile-icons').classList.remove('display-menu');
    this.classList.remove('display-menu');
    document
      .querySelector('.cagov-nav.hamburger')
      .classList.remove('is-active');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .classList.remove('is-fixed');
    document
      .querySelector('.cagov-nav.menu-trigger')
      .setAttribute('aria-expanded', 'false');
    const menLabel = document.querySelector('.cagov-nav.menu-trigger-label');
    menLabel.innerHTML = menLabel.getAttribute('data-openlabel');
  }

  escapeMainMenu(event) {
    // Close menus if user presses escape key.
    if (event.keyCode === 27) {
      this.closeAllMenus();
    }
  }

  bodyClick(event) {
    if (!event.target.closest('cagov-site-navigation')) {
      this.closeAllMenus();
    }
  }

  closeAllMenus() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach((menu) => {
      const expandedEl = menu.querySelector('.expanded-menu-section');
      expandedEl.classList.remove('expanded');
      const closestDropDown = menu.querySelector('.expanded-menu-dropdown');
      if (
        closestDropDown &&
        closestDropDown.id &&
        menu.querySelector(`button[aria-controls=${closestDropDown.id}]`)
      ) {
        menu
          .querySelector(`button[aria-controls=${closestDropDown.id}]`)
          .setAttribute('aria-expanded', 'false');
      }
      if (closestDropDown) {
        closestDropDown.setAttribute('aria-hidden', 'true');
        const allLinks = closestDropDown.querySelectorAll('a');
        allLinks.forEach((link) => {
          link.setAttribute('tabindex', '-1'); // set tabindex to -1 so you cannot tab through these hidden links
        });
      }
    });
  }

  expansionListeners() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach((menu) => {
      const nearestMenu = menu.querySelector('.expanded-menu-section');
      if (nearestMenu) {
        const nearestMenuDropDown = nearestMenu.querySelector(
          '.expanded-menu-dropdown',
        );
        if (nearestMenuDropDown) {
          nearestMenuDropDown.setAttribute('aria-hidden', 'true');
          if (
            nearestMenuDropDown &&
            nearestMenuDropDown.id &&
            menu.querySelector(
              `button[aria-controls=${nearestMenuDropDown.id}]`,
            )
          ) {
            menu
              .querySelector(`button[aria-controls=${nearestMenuDropDown.id}]`)
              .setAttribute('aria-expanded', 'false');
          }
        }
      }
      const menuComponent = this;
      menu.addEventListener('click', function addingClickListener(event) {
        if (event.target.nodeName !== 'A') {
          event.preventDefault();
        }
        const expandedEl = this.querySelector('.expanded-menu-section');
        if (expandedEl) {
          if (expandedEl.classList.contains('expanded')) {
            // closing an open menu
            menuComponent.closeAllMenus();
          } else {
            menuComponent.closeAllMenus();
            expandedEl.classList.add('expanded');
            const closestDropDown = this.querySelector(
              '.expanded-menu-dropdown',
            );
            if (
              closestDropDown &&
              closestDropDown.id &&
              menu.querySelector(`button[aria-controls=${closestDropDown.id}]`)
            ) {
              menu
                .querySelector(`button[aria-controls=${closestDropDown.id}]`)
                .setAttribute('aria-expanded', 'true');
            }
            if (closestDropDown) {
              closestDropDown.setAttribute('aria-hidden', 'false');
              const allLinks = closestDropDown.querySelectorAll('a');
              allLinks.forEach((link) => {
                link.removeAttribute('tabindex'); // remove tabindex from all the links
              });
            }
          }
        }
      });
    });
  }
}
window.customElements.define('cagov-site-navigation', CAGovSiteNavigation);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkAnnotator": () => (/* binding */ linkAnnotator),
/* harmony export */   "placePdfIcons": () => (/* binding */ placePdfIcons)
/* harmony export */ });
var styles = "/* PDF Icon */\n.pdf-link-icon {\n  display: inline-block;\n  outline: 1px solid;\n  outline-offset: -2px;\n  padding: 0;\n  position: relative;\n  left: 1px;\n  top: -3px;\n  line-height: 0.9rem;\n  text-decoration: none;\n}\n.pdf-link-icon svg path {\n  fill: var(--primary-700, #004abc);\n}\n\n/* External link icon */\n.external-link-icon {\n  display: inline-block;\n  padding: 0;\n  position: relative;\n  left: 3px;\n  margin-right: 2px;\n  top: 1px;\n  text-decoration: none;\n  width: 0.8em;\n}\n.external-link-icon svg path {\n  fill: var(--primary-700, #004abc);\n}\n\nmain a:hover .external-link-icon svg path,\n.site-footer a:hover .external-link-icon svg path,\n.agency-footer a:hover .external-link-icon svg path {\n  fill: var(--primary-900, #003484);\n}\n\nfooter a .external-link-icon svg path {\n  fill: var(--black, #000);\n}\n\n/* External link icon exceptions */\n.cagov-card .external-link-icon,\n.wp-block-button__link .external-link-icon,\n.footer-social-links a .external-link-icon,\nimg ~ .external-link-icon,\nsvg ~ .external-link-icon,\n.pdf-link-icon ~ .external-link-icon {\n  display: none;\n}\n\n.sr-only {\n  height: unset !important;\n  text-indent: -10000px;\n  width: unset !important;\n  clip: rect(0, 0, 0, 0) !important;\n  border: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/* PDF ICON */

if (!document.querySelector('#cagov-link-icon-styles')) {
  const style = document.createElement('style');
  style.id = 'cagov-link-icon-styles';
  style.textContent = styles;
  document.querySelector('head').appendChild(style);
}

function placePdfIcons() {
  // pdf-icon component svg icon
  const pdf =
    '<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>';

  // selector is looking for links with pdf extension in the href
  const pdfLink = document.querySelectorAll("a[href*='.pdf']");
  for (let i = 0; i < pdfLink.length; i += 1) {
    pdfLink[i].innerHTML += pdf; // += concatenates to pdf links
    // Fixing search results PDF links
    if (pdfLink[i].innerHTML.indexOf('*PDF (this is a pdf file)*') !== -1) {
      pdfLink[i].innerHTML += pdf.replace(/PDF (this is a pdf file)]/g, ''); // += concatenates to pdf links
    }
  }
}
placePdfIcons();

/* EXTERNAL LINK ICON */
function linkAnnotator() {
  const ext =
    '<span class="external-link-icon" aria-hidden="true"><svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M1.4,13.3c0-1.9,0-3.8,0-5.7c0-2.3,1.3-3.6,3.7-3.7c2,0,3.9,0,5.9,0c0.9,0,1.4,0.4,1.4,1.1c0,0.7-0.5,1.1-1.5,1.1 c-2,0-3.9,0-5.9,0c-1.1,0-1.4,0.3-1.4,1.5c0,3.8,0,7.6,0,11.3c0,1.1,0.4,1.5,1.5,1.5c3.8,0,7.6,0,11.3,0c1.1,0,1.4-0.3,1.4-1.5 c0-1.9,0-3.9,0-5.8c0-1,0.4-1.5,1.1-1.5c0.7,0,1.1,0.5,1.1,1.5c0,2,0,4,0,6.1c0,2-1.4,3.4-3.4,3.4c-4,0-7.9,0-11.9,0 c-2.1,0-3.4-1.4-3.4-3.4C1.4,17.2,1.4,15.2,1.4,13.3L1.4,13.3z"/><path d="M19.6,2.8c-1.3,0-2.5,0-3.6,0c-0.9,0-1.4-0.4-1.4-1.1c0.1-0.8,0.6-1.1,1.3-1.1c2.1,0,4.2,0,6.2,0c0.8,0,1.2,0.5,1.2,1.3 c0,2,0,4.1,0,6.2c0,0.9-0.4,1.4-1.1,1.4c-0.7,0-1.1-0.5-1.1-1.4c0-1.1,0-2.3,0-3.6c-0.3,0.3-0.6,0.5-0.8,0.7c-3,3-6,6-8.9,8.9 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5,0.5-1.1,0.5-1.6,0c-0.5-0.5-0.4-1,0-1.5c0.1-0.2,0.3-0.3,0.5-0.5c3-3,6-6,8.9-8.9 C19,3.4,19.2,3.2,19.6,2.8L19.6,2.8z"/></svg></span>';

  // Check if link is external function
  function linkIsExternal(linkElement) {
    return window.location.host.indexOf(linkElement.host) > -1;
  }

  // Looping thru all links inside of the main content body, agency footer and statewide footer
  const externalLink = document.querySelectorAll(
    'main a, .agency-footer a, .site-footer a, footer a',
  );
  externalLink.forEach((element) => {
    const anchorLink = element.href.indexOf('#') === 0;
    const localHost = element.href.indexOf('localhost') > -1;
    const localEmail = element.href.indexOf('@') > -1;
    const linkElement = element;
    if (
      linkIsExternal(linkElement) === false &&
      !anchorLink &&
      !localEmail &&
      !localHost
    ) {
      linkElement.innerHTML += ext; // += concatenates to external links
    }
  });
}

linkAnnotator();



})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_frontend_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_frontend_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_frontend_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_frontend_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_frontend_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;