/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_172__) => {

__nested_webpack_require_172__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_357__) => {

__nested_webpack_require_357__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_542__) => {

__nested_webpack_require_542__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_727__) => {

__nested_webpack_require_727__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1068__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1068__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_1068__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_1068__.r(__nested_webpack_exports__);
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1068__(1);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1068__(2);
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1068__(3);
/* harmony import */ var _styles_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_1068__(4);
// Styles





})();

/******/ })()
;

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __nested_webpack_exports__, __nested_webpack_require_184__) => {

__nested_webpack_require_184__.r(__nested_webpack_exports__);
window.addEventListener("load", () => {
  const sidebarToggle = document.querySelector("header #caGov");
  const caGovMenu = document.getElementById("ca_gov_sidebar");
  const sidebar = document.querySelector(".sidebar-container");
  const moreServicesToggle = document.getElementById("more_services_toggle");
  const lessServicesToggle = document.getElementById("less_services_toggle");
  const moreServicesContainer = document.getElementById("more_services_container");
  const animatedCaGovIcon = document.querySelector("svg.cagov-animated");
  const leftMobileButton = document.querySelector(".nav-toggle");
  const navigationMobile = document.querySelector(".navigation");
  if (!sidebar || !sidebarToggle) return;
  sidebarToggle.addEventListener("keydown", e => {
    if (13 === e.keyCode) {
      toggleCaGovMenu;
    }
    if (32 === e.keyCode) {
      toggleCaGovMenu;
    }
  });

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (sidebar.style.display === "block") {
      if (e.key === "Escape") {
        e.stopPropagation();
        toggleCaGovMenu();
      }
    }
  });

  // Close menu on focusout (tabbing out) event
  caGovMenu.addEventListener("focusout", e => {
    const child = /** @type {Node} **/e.relatedTarget;
    const parent = /** @type {Node} **/e.currentTarget;
    if (child && !parent.contains(child)) {
      closeCaGovMenu();
    }
  });

  // Toggle CAGov menu on CAGov logo click
  sidebarToggle.addEventListener("click", toggleCaGovMenu);

  // Close CAGov menu on click out of CAGov menu
  document.addEventListener("click", e => {
    if (!caGovMenu.contains(e.target) && sidebar.style.display === "block") {
      closeCaGovMenu();
    }
  });
  const closeCaGovMenu = () => {
    sidebarToggle.classList.add("ca-gov-svg");
    sidebarToggle.classList.remove("ca-gov-close-icon");
    animatedCaGovIcon.style.display = "block";
    sidebar.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Toggle CAGov menu display
  function toggleCaGovMenu() {
    document.body.style.overflow = "hidden";
    if (window.innerWidth < 1080) {
      // Hide ham-bear-ger menu and toggle icon back to closed on mobile size
      leftMobileButton.ariaExpanded = "false";
      navigationMobile.classList.add("hidden");
    }
    if (sidebarToggle.classList.contains("ca-gov-svg")) {
      sidebarToggle.classList.add("ca-gov-close-icon");
      sidebarToggle.classList.remove("ca-gov-svg");
      animatedCaGovIcon.style.display = "none";
    } else {
      sidebarToggle.classList.remove("ca-gov-close-icon");
      sidebarToggle.classList.add("ca-gov-svg");
      animatedCaGovIcon.style.display = "block";
    }
    sidebar.style.display = sidebar.style.display !== "block" ? "block" : "none";
    if (sidebar.style.display === "none") {
      document.body.style.overflow = "auto";
    }
  }
  moreServicesToggle.addEventListener("click", () => {
    if (moreServicesContainer.classList.contains("hidden")) {
      moreServicesContainer.classList.remove("hidden");
      moreServicesToggle.classList.add("hidden");
    } else {
      moreServicesContainer.classList.add("hidden");
    }
  });
  lessServicesToggle.addEventListener("click", () => {
    moreServicesContainer.classList.add("hidden");
    moreServicesToggle.classList.remove("hidden");
  });
});

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __nested_webpack_exports__, __nested_webpack_require_3692__) => {

__nested_webpack_require_3692__.r(__nested_webpack_exports__);
/* eslint-disable yoda */
window.addEventListener("load", () => {
  const doc = document.documentElement;
  let curScroll;
  const prevScroll = window.scrollY || doc.scrollTop;
  const mainheader = document.querySelector("header");
  const navToggle = document.querySelector("header .nav-toggle");
  const navigation = document.querySelector("header .navigation");
  const sidebar = document.querySelector(".sidebar-container");
  const caGovToggle = document.querySelector(".cagov");
  const caGovLogo = document.getElementById("caGov");
  const caGovSvg = document.querySelector(".cagov-animated");
  const logo = document.querySelector(".logo");
  const headerNav = navigation.querySelector("ul.navlinks");
  const navSearch = navigation.querySelector("li.search");
  const googleTranslate = navigation.querySelector("li.google-translate");
  const searchBox = document.getElementById("search-box");

  // Set proper header and nav style on load
  // Use compacted style if not at top of page
  if (prevScroll !== 0) {
    mainheader.classList.add("transparent-bg", "remove-box-shadow", "compacted");
    logo.classList.add("hidden");
    navigation?.classList.add("hidden");
    caGovToggle.classList.add("hidden");
  }
  //If mobile
  if (window.innerWidth < 1080) {
    mainheader.classList.add("mobile", "gray-bg");
    navigation?.classList.add("hidden");
  }

  // On resize, make sure to only lock menu scroll when CA gov menu or hamburger menu is open
  const lockMenuScroll = () => {
    if (sidebar.style.display === "block" || !navigation.classList.contains("hidden") && navigation.classList.contains("navigation-mobile")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const closeHamburgerMenu = () => {
    document.body.style.overflow = "auto";
    navigation.classList.add("hidden");
    navToggle.ariaExpanded = "false";
  };
  const hideMobileHeader = () => {
    mainheader.classList.remove("gray-bg");
    mainheader.classList.add("transparent-bg", "remove-box-shadow");
    logo.classList.add("hidden");
    caGovToggle.classList.add("hidden");
  };
  const showMobileHeader = () => {
    mainheader.classList.add("gray-bg");
    mainheader.classList.remove("transparent-bg", "remove-box-shadow");
    logo.classList.remove("hidden");
    caGovToggle.classList.remove("hidden");
  };
  const hideDesktopHeader = () => {
    navToggle.ariaExpanded = "false";
    caGovToggle.classList.add("hidden");
    mainheader.classList.add("transparent-bg", "remove-box-shadow", "compacted");
    logo.classList.add("hidden");
    navigation.classList.add("hidden");
    sidebar.classList.add("sidebar-mobile");
  };
  const showDesktopHeader = () => {
    navToggle.ariaExpanded = "false";
    caGovToggle.classList.remove("hidden");
    mainheader.classList.remove("transparent-bg", "remove-box-shadow", "compacted");
    sidebar.classList.remove("sidebar-mobile");
    logo.classList.remove("hidden");
    caGovToggle.classList.remove("hidden");
    navigation.classList.remove("hidden");
  };
  if (!mainheader) return;

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (navigation.classList.contains("navigation-mobile") && !navigation.classList.contains("hidden")) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeHamburgerMenu();
      }

      // only if navToggle is focused and nav is open and tab key is pressed and shift is not pressed
      if (document.activeElement === navToggle && "true" === navToggle.ariaExpanded && e.key === "Tab" && e.shiftKey !== true) {
        setTimeout(() => {
          // focus on the first element in the navigation
          navigation.querySelectorAll("input,a")[0].focus();
        }, 0);
      }
    }
  });

  // Close menu on focusout (tabbing out) event, mobile layout only
  headerNav.addEventListener("focusout", e => {
    if (navigation.classList.contains("navigation-mobile") && !navigation.classList.contains("hidden")) {
      const child = /** @type {Node} **/e.relatedTarget;
      const parent = /** @type {Node} **/e.currentTarget;
      if (child && !parent.contains(child) && "INPUT" !== child.nodeName) {
        // if tabbing out of the navigation and into the logo
        if ("a" === child.localName) {
          navToggle.focus();
        }

        // if tabbing out of the navigation and into the cagov sidebar
        if ("button" === child.localName) {
          closeHamburgerMenu();
        }
      }
    }
  });

  // On click listener
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      // Hide cagov sidebar and show correct icon
      sidebar.style.display = "none";
      caGovLogo.classList.remove("ca-gov-close-icon");
      caGovLogo.classList.add("ca-gov-svg");
      caGovSvg.style.display = "block";
      this.ariaExpanded = this.ariaExpanded !== "true";

      // Hamburger menu is open
      if ("true" === this.ariaExpanded) {
        mainheader.classList.remove("transparent-bg", "remove-box-shadow");
        caGovToggle.classList.remove("hidden");

        // Mobile only
        if (window.innerWidth < 1080) {
          document.body.style.overflow = "hidden";
          logo?.classList.remove("hidden");
          navigation?.classList.remove("hidden");
          navigation?.classList.add("navigation-mobile");
          searchBox?.classList.add("focus-search-box");
          if (navSearch) {
            headerNav.prepend(navSearch);
          }
          // Desktop only
        } else {
          navigation?.classList.remove("hidden");
          logo?.classList.remove("hidden");
        }

        // Hamburger menu is closed
      } else {
        document.body.style.overflow = "auto";

        // Desktop Only
        if (window.innerWidth > 1080) {
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          navigation?.classList.add("hidden");
          logo?.classList.add("hidden");
          caGovToggle.classList.add("hidden");
        }

        // Mobile only
        if (window.innerWidth < 1080) {
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          navigation?.classList.add("hidden");
          caGovToggle.classList.add("hidden");
          logo?.classList.add("hidden");

          // Top of screen
          if (curScroll === 0) {
            mainheader.classList.add("gray-bg");
            mainheader.classList.remove("transparent-bg", "remove-box-shadow");
            caGovToggle.classList.remove("hidden");
            logo?.classList.remove("hidden");
          }
        }
      }
    });
  }
  window.addEventListener("scroll", () => {
    curScroll = window.scrollY || doc.scrollTop;

    // Mobile Only
    if (window.innerWidth < 1080) {
      // Any scroll on mobile displays hamburger menu only
      // Clicking hamburger menu triggers scroll listener on CDEV
      // Add check to not hide mobile header if navigation menu is visible
      if (navigation?.classList.contains("hidden")) {
        hideMobileHeader();
      }

      // Show at top of the page
      if (curScroll === 0) {
        showMobileHeader();
      }
    } else {
      // Desktop Only
      // Any scroll on desktop displays hamburger menu only
      hideDesktopHeader();

      // Show at top of the page
      if (curScroll === 0) {
        showDesktopHeader();
      }
    }
  });

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener("resize", () => {
    curScroll = window.scrollY || doc.scrollTop;

    // Was causing unexpected issues with clicking into search bar
    // Checking if first child may prevent menu close on search box click
    if (navSearch !== headerNav.firstElementChild) {
      headerNav.prepend(navSearch);
    }

    //  mobile only
    if (window.innerWidth < 1080) {
      lockMenuScroll();
      if (navToggle.ariaExpanded === "false") {
        navigation?.classList.add("hidden");
      }
      mainheader.classList.add("mobile", "gray-bg");
      mainheader.classList.remove("compacted");
      navigation?.classList.add("navigation-mobile");
      searchBox?.classList.add("focus-search-box");

      // desktop only
    } else {
      // If CA Gov or hamburger menu are open, body overflow is hidden
      lockMenuScroll();
      mainheader.classList.remove("mobile");
      searchBox?.classList.remove("focus-search-box");
      navigation?.classList.remove("navigation-mobile");
      if (navSearch) {
        headerNav.append(navSearch);
      }
      if (googleTranslate) {
        headerNav.append(googleTranslate);
      }

      // Not at top of the page
      if (curScroll !== 0) {
        mainheader.classList.add("compacted");
      } else if (navigation) {
        navigation.classList.remove("hidden");
      }
    }
  });
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __nested_webpack_exports__, __nested_webpack_require_12762__) => {

__nested_webpack_require_12762__.r(__nested_webpack_exports__);
window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");
  if (!searchInput) return;
  searchSVG.addEventListener("click", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      if (!searchInput.classList.contains("focus-search-box")) {
        searchInput.classList.add("focus-search-box");
      }
    }
  });
  searchInput.addEventListener("focus", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      searchInput.classList.add("focus-search-box");
    }
  });
  searchInput.addEventListener("focusout", () => {
    if (window.innerWidth > 1080) {
      searchInput.classList.remove("focus-search-box");
    }
  });
});

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13688__) => {

__nested_webpack_require_13688__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_13861__) => {

module.exports = __nested_webpack_require_13861__.p + "fonts/gov-branding.svg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_14184__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_14184__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_14184__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__nested_webpack_require_14184__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_14184__.r(__nested_webpack_exports__);
/* harmony import */ var _scripts_ca_gov_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14184__(1);
/* harmony import */ var _scripts_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14184__(2);
/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14184__(3);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_14184__(4);
/* harmony import */ var _images_gov_branding_svg__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_14184__(5);
// Scripts




// Styles


// Assets

})();

/******/ })()
;

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_172__) => {

__nested_webpack_require_172__.r(__nested_webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_345__) => {

module.exports = __nested_webpack_require_345__.p + "images/gov-seal.png";

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_497__) => {

module.exports = __nested_webpack_require_497__.p + "fonts/share-facebook.svg";

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_654__) => {

module.exports = __nested_webpack_require_654__.p + "fonts/share-instagram.svg";

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_812__) => {

module.exports = __nested_webpack_require_812__.p + "fonts/share-tiktok.svg";

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_967__) => {

module.exports = __nested_webpack_require_967__.p + "fonts/share-twitter-X.svg";

/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1125__) => {

module.exports = __nested_webpack_require_1125__.p + "fonts/share-youtube.svg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1449__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1449__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_1449__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__nested_webpack_require_1449__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_1449__.r(__nested_webpack_exports__);
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1449__(1);
/* harmony import */ var _images_gov_seal_png__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1449__(2);
/* harmony import */ var _images_share_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1449__(3);
/* harmony import */ var _images_share_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_1449__(4);
/* harmony import */ var _images_share_tiktok_svg__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_1449__(5);
/* harmony import */ var _images_share_twitter_X_svg__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_1449__(6);
/* harmony import */ var _images_share_youtube_svg__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_1449__(7);
// Styles


// Assets






})();

/******/ })()
;

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gov-seal.png";

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-facebook.svg";

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-instagram.svg";

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-tiktok.svg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-twitter-X.svg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-youtube.svg";

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
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(3);
/******/ 	__webpack_require__(4);
/******/ 	__webpack_require__(5);
/******/ 	__webpack_require__(6);
/******/ 	__webpack_require__(7);
/******/ 	__webpack_require__(8);
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_require__(9);
/******/ 	__webpack_require__(10);
/******/ 	__webpack_require__(11);
/******/ 	__webpack_require__(12);
/******/ 	__webpack_require__(13);
/******/ 	var __webpack_exports__ = __webpack_require__(14);
/******/ 	
/******/ })()
;