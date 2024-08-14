/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/options/hidden.js":
/*!*********************************************!*\
  !*** ./src/scripts/admin/options/hidden.js ***!
  \*********************************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  let isDefault = 'default' === $('select[id$="cagov_design_system_mode"]').val();

  // hide State Template version option.
  if ($('select[id$="ca_site_version"]').length) {
    $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
  }

  // hide colorscheme options if in campaign mode.
  if ('default' === isDefault) {
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
    // Default Specific Social Media Links
    let socialOptions = ['ca_social_email', 'ca_social_flickr', 'ca_social_github', 'ca_social_linkedin'];
    $('div[id^="ca_social_"][id$="-settings"]').each(function (index) {
      var optionName = this.id.substring(0, this.id.indexOf('-'));
      // Make sure options are visible.
      $(this).removeClass('d-none');
      $(this).prev().removeClass('d-none');
      // Hide Social Media Link Header options.
      $(`#${optionName}_header`).parent().parent().addClass('d-none');

      // if not default mode hide default specific links
      if (!isDefault && socialOptions.includes(optionName)) {
        $(`a[aria-controls="${optionName}-settings"]`).addClass('d-none');
      }
    });
  }
});

/***/ }),

/***/ "./src/scripts/admin/options/mode.js":
/*!*******************************************!*\
  !*** ./src/scripts/admin/options/mode.js ***!
  \*******************************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  // hide colorscheme options if in campaign mode.
  $('select[id$="cagov_design_system_mode"]').on('change', function () {
    let cawebColorSchemePicker = $('#ca_site_color_scheme');
    let menuSelector = $('select[id$="ca_default_navigation_menu"]');
    let currentMenu = menuSelector.val();

    // clear menu options
    menuSelector.empty();

    // add appropriate menu types for the selected mode
    for (const [t, l] of Object.entries(cagov_design_system_admin_args.nav_menu_types[this.value])) {
      let o = document.createElement('OPTION');
      o.value = t;
      o.text = l;
      if (t === currentMenu) {
        o.selected = true;
      }
      menuSelector.append(o);
    }

    // if the CAWeb Colorscheme Picker option doesn't exist don't do anything else.
    if (!cawebColorSchemePicker) {
      return;
    }

    // show/hide options
    let displayDefaultOption = 'default' === this.value ? "removeClass" : "addClass";
    cawebColorSchemePicker.parent()[displayDefaultOption]('d-none');

    // Default Specific Social Media Links
    let socialOptions = ['ca_social_email', 'ca_social_flickr', 'ca_social_github', 'ca_social_linkedin'];
    for (let social of socialOptions) {
      $(`a[aria-controls="${social}-settings"]`)[displayDefaultOption]('d-none');
    }
  });
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./src/scripts/admin/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_hidden_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options/hidden.js */ "./src/scripts/admin/options/hidden.js");
/* harmony import */ var _options_hidden_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_options_hidden_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options_mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options/mode.js */ "./src/scripts/admin/options/mode.js");
/* harmony import */ var _options_mode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_options_mode_js__WEBPACK_IMPORTED_MODULE_1__);
// CAWeb Options not supported by the Design System are hidden.


// CAWeb Options Template Version / Design System Mode Selector

})();

/******/ })()
;
//# sourceMappingURL=admin.js.map