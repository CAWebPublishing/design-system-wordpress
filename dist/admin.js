/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (() => {

/* CAWeb Options Javascript */
jQuery(document).ready(function($) {
    "use strict";
  
    // Remove State Template Version option.
    if( $('select[id$="ca_site_version"]').length ){
      $('select[id$="ca_site_version"]').parent().parent().remove();
    }
  
    // Remove Social Media Link Header options.
    if( $('label[for ^="ca_social_"][for $="_header"]').length ){
      $('label[for ^="ca_social_"][for $="_header"]').each((i, element) => {
          $(element).parent().remove();
      });
    }

    // Remove Menu Home Link option.
    if( $('label[for="ca_home_nav_link"]').length ){
      $('label[for="ca_home_nav_link"]').parent().remove();
    }

    // Remove Menu Sticky Navigation option.
    if( $('label[for="ca_sticky_navigation"]').length ){
      $('label[for="ca_sticky_navigation"]').parent().remove();
    }

    // Remove Show Search on Front Page option.
    if( $('label[for="ca_frontpage_search_enabled"]').length ){
      $('label[for="ca_frontpage_search_enabled"]').parent().remove();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(1)
})();

/******/ })()
;