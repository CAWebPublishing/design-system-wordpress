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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const doc = document.documentElement;

  let prevScroll = window.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  let scrollNum = 40;

  const mainheader = document.querySelector("header");
  const navToggle = document.querySelector("header .nav-toggle");
  const navigation = document.querySelector("header .navigation");
  const sidebar = document.getElementById("ca_gov_sidebar");
  const caGovToggle = document.querySelector(".cagov");
  const caGovLogo = document.getElementById("caGov");
  const caGovSvg = document.querySelector(".cagov-animated");
  const logo = document.querySelector(".logo");
  const headerNav = navigation.querySelector("ul.navlinks");
  const navSearch = navigation.querySelector("li.search");
  const googleTranslate = navigation.querySelector("li.google-translate");
  const searchBox = document.getElementById("search-box");

  if (!mainheader) return;

  /* compacted header / hiding default header on scroll */
  if (scrollNum < prevScroll && window.innerWidth > 1080) {
    mainheader.classList.add(
      "compacted",
      "transparent-bg",
      "remove-box-shadow"
    );
    caGovToggle.classList.add("hidden");

    if( logo ){
      logo.classList.add("hidden");
    }

    if( navigation ){
      navigation.classList.add("hidden");
    }
  }

  // Set proper header and nav style on load
  if (window.innerWidth < 1080) {
    mainheader.classList.add("mobile", "gray-bg");
    if( navigation ){
      navigation.classList.add("hidden");
    }
  } else {
    mainheader.classList.remove("mobile", "gray-bg");

    if (scrollNum > prevScroll && navigation ) {
      navigation.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || doc.scrollTop;
    // remove/add function
    let logoFunc = 'add';
    let navFunc = 'add';

    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      // Mobile Only
      if (window.innerWidth < 1080) {
        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          if ("true" === navToggle.ariaExpanded) {
          }

          logoFunc = 'add'
          caGovToggle.classList.add("hidden");

          // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          mainheader.classList.add("gray-bg");
          mainheader.classList.remove("transparent-bg", "remove-box-shadow");

          logoFunc = 'remove';
          caGovToggle.classList.remove("hidden");
        }
      } else {
        // Desktop Only
        // Toggle Header
        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          // Hide nav, logo, caGovToggle on scroll down
          caGovToggle.classList.add("hidden");
          mainheader.classList.add("transparent-bg", "remove-box-shadow", "compacted");
          sidebar.classList.add("sidebar-mobile");

          logoFunc = 'add';
          prevDirection = direction;
          // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          if (window.innerWidth > 1080) {
            caGovToggle.classList.remove("hidden");
            mainheader.classList.remove("transparent-bg", "remove-box-shadow", "compacted");

            navFunc = 'remove';
          }
          sidebar.classList.remove("sidebar-mobile");
          logoFunc = 'remove';
          prevDirection = direction;
        }


      }

      // if logo exists
      if( logo ){
        logo.classList[logoFunc]('hidden')
      }

      // if navigation exists
      if( navigation ){
        navigation.classList[navFunc]('hidden')
      }
    }
    prevScroll = curScroll;
  });

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener("resize", () => {
    // remove/add function
    let searchFunc = 'remove';

    //  mobile only
    if (window.innerWidth < 1080) {
      mainheader.classList.add("mobile");

      searchFunc = 'add';

      if( navigation ){
        navigation.classList.add("navigation-mobile", "hidden");
      }
      // desktop only
    } else if (window.innerWidth > 1080) {
      mainheader.classList.remove("mobile");

      searchFunc = 'remove';

      if( navSearch ){
        headerNav.append(navSearch);
      }
      
      if( navigation ){
        navigation.classList.remove("navigation-mobile");
      }

      if (googleTranslate) {
        headerNav.append(googleTranslate);
      }

      if (scrollNum < prevScroll) {
        mainheader.classList.remove("gray-bg");
      } else if ( navigation ){
       navigation.classList.remove('hidden')
      }
    }

    if( searchBox ){
      searchBox.classList[searchFunc]('focus-search-box');
    }
  });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      // remove/add function
      let logoFunc = 'remove';
      let navFunc = 'remove';

      // Hide cagov sidebar and show correct icon
      sidebar.style.display = "none";
      caGovLogo.classList.remove("ca-gov-close-icon");
      caGovLogo.classList.add("ca-gov-svg");
      caGovSvg.style.display = "block";

      this.ariaExpanded = this.ariaExpanded !== "true";

      if ("true" === this.ariaExpanded) {
        mainheader.classList.remove("transparent-bg", "remove-box-shadow");
        caGovToggle.classList.remove("hidden");

        logoFunc = 'remove';
        navFunc = 'remove';

        // Mobile only
        if (window.innerWidth < 1080) {
          if( navigation ){
            navigation.classList.add("navigation-mobile");
          }
          if( searchBox ){
            searchBox.classList.add("focus-search-box");
          }

          if( navSearch ) {
            headerNav.prepend(navSearch);
          }
        }
      } else {
        navFunc = 'add';

        // Desktop Only
        if (window.innerWidth > 1080) {
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          caGovToggle.classList.add("hidden");

          logoFunc = 'add';
        }

        // Mobile only
        if (window.innerWidth < 1080) {
        }
      }

      // if logo exists
      if ( logo ){
        logo.classList[logoFunc]('hidden')
      }

      // if navigation exists
      if( navigation ){
        navigation.classList[navFunc]('hidden')
      }
    });
  }
});


/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");

  if (!searchInput) return;

  searchSVG.addEventListener("click", () => {
    searchInput.classList.toggle("focus-search-box");
  });

  searchInput.addEventListener("focus", () => {
    searchInput.classList.add("focus-search-box");
  });

  searchInput.addEventListener("focusout", () => {
    searchInput.classList.remove("focus-search-box");
  });
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const sidebarToggle = document.querySelector("header #caGov");
  const sidebar = document.getElementById("ca_gov_sidebar");
  const moreServicesToggle = document.getElementById("more_services_toggle");
  const lessServicesToggle = document.getElementById("less_services_toggle");
  const moreServicesContainer = document.getElementById(
    "more_services_container"
  );
  const animatedCaGovIcon = document.querySelector("svg.cagov-animated");
  const leftMobileButton = document.querySelector(".nav-toggle");
  const navigationMobile = document.querySelector(".navigation");

  if (!sidebar || !sidebarToggle) return;

  sidebarToggle.addEventListener("keydown", (e) => {
      if(   13 === e.keyCode  ){
        openMenu
      }

      if( 32 === e.keyCode ){
        openMenu
      }
  });

  sidebarToggle.addEventListener("click", openMenu );


  function openMenu(){
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

    sidebar.style.display =
    sidebar.style.display !== "block" ? "block" : "none";
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
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gov-seal.png";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-facebook.svg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-instagram.svg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-tiktok.svg";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/share-twitter-X.svg";

/***/ }),
/* 17 */
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
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3: 0,
/******/ 			0: 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdesign_system_wordpress_gutenberg"] = globalThis["webpackChunkdesign_system_wordpress_gutenberg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(3)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(4)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(5)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(6)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(7)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(8)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(9)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(10)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(11)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(12)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(13)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(14)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(15)))
/******/ 	__webpack_require__.O(undefined, [0], () => (__webpack_require__(16)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [0], () => (__webpack_require__(17)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;