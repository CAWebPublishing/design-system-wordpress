/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

jQuery(document).ready(function ($) {
  // hide State Template version option.
  if ($('select[id$="ca_site_version"]').length) {
    $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
  }

  // hide colorscheme options if in campaign mode.
  if ('default' === $('select[id$="cagov_design_system_mode"]').val()) {
    // show colorscheme options
    $('#ca_site_color_scheme').parent().removeClass('d-none');
  } else {
    // hide colorscheme options
    $('#ca_site_color_scheme').parent().addClass('d-none');
  }

  // Hide Menu Home Link option.
  if ($('label[for="ca_home_nav_link"]').length) {
    $('label[for="ca_home_nav_link"]').parent().parent().addClass('d-none');
  }

  // Hide Menu Sticky Navigation option.
  if ($('label[for="ca_sticky_navigation"]').length) {
    $('label[for="ca_sticky_navigation"]').parent().parent().addClass('d-none');
  }

  // Hide Show Search on Front Page option.
  if ($('label[for="ca_frontpage_search_enabled"]').length) {
    $('label[for="ca_frontpage_search_enabled"]').parent().parent().addClass('d-none');
  }

  // Utility Header Options.
  if ($('#utility-header-settings').length) {
    $('#utility-header-settings').addClass('d-none');
    $('#utility-header-settings').prev().addClass('d-none');
  }

  // iteration over Social Media Links
  if ($('div[id^="ca_social_"][id$="-settings"]').length) {
    $('div[id^="ca_social_"][id$="-settings"]').each(function (index) {
      var optionName = this.id.substring(0, this.id.indexOf('-'));
      // Make sure options are visible.
      $(this).removeClass('d-none');
      $(this).prev().removeClass('d-none');

      // Hide Social Media Link Header options.
      $(`#${optionName}_header`).parent().parent().addClass('d-none');
    });
  }
});

/***/ }),
/* 2 */
/***/ (() => {

jQuery(document).ready(function ($) {
  let cawebColorSchemePicker = $('#ca_site_color_scheme');

  // hide State Template version option.
  if ($('select[id$="ca_site_version"]').length) {
    $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
  }

  // hide colorscheme options if in campaign mode.
  $('select[id$="cagov_design_system_mode"]').on('change', function () {
    // if the CAWeb Colorscheme Picker option doesn't exist don't do anything.
    if (!cawebColorSchemePicker) {
      return;
    }
    if ('default' === this.value) {
      // show colorscheme options
      cawebColorSchemePicker.parent().removeClass('d-none');
    } else {
      // hide colorscheme options
      cawebColorSchemePicker.parent().addClass('d-none');
    }
  });

  // Hide Menu Home Link option.
  if ($('label[for="ca_home_nav_link"]').length) {
    $('label[for="ca_home_nav_link"]').parent().parent().addClass('d-none');
  }

  // Hide Menu Sticky Navigation option.
  if ($('label[for="ca_sticky_navigation"]').length) {
    $('label[for="ca_sticky_navigation"]').parent().parent().addClass('d-none');
  }

  // Hide Show Search on Front Page option.
  if ($('label[for="ca_frontpage_search_enabled"]').length) {
    $('label[for="ca_frontpage_search_enabled"]').parent().parent().addClass('d-none');
  }

  // Utility Header Options.
  if ($('#utility-header-settings').length) {
    $('#utility-header-settings').addClass('d-none');
    $('#utility-header-settings').prev().addClass('d-none');
  }

  // iteration over Social Media Links
  if ($('div[id^="ca_social_"][id$="-settings"]').length) {
    $('div[id^="ca_social_"][id$="-settings"]').each(function (index) {
      var optionName = this.id.substring(0, this.id.indexOf('-'));
      // Make sure options are visible.
      $(this).removeClass('d-none');
      $(this).prev().removeClass('d-none');

      // Hide Social Media Link Header options.
      $(`#${optionName}_header`).parent().parent().addClass('d-none');
    });
  }
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_hidden_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _options_hidden_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_options_hidden_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options_mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _options_mode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_options_mode_js__WEBPACK_IMPORTED_MODULE_1__);
// CAWeb Options not supported by the Design System are hidden.


// CAWeb Options Template Version / Design System Mode Selector

})();

/******/ })()
;