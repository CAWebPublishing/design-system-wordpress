/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@cagov/ds-link-icon/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@cagov/ds-link-icon/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkAnnotator: () => (/* binding */ linkAnnotator),
/* harmony export */   placePdfIcons: () => (/* binding */ placePdfIcons)
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




/***/ }),

/***/ "./src/scripts/custom.js":
/*!*******************************!*\
  !*** ./src/scripts/custom.js ***!
  \*******************************/
/***/ (() => {

/* Custom Javascript */
jQuery(document).ready(function ($) {
  "use strict";

  $('.search-container.search-container--small form input[name="q"]').removeAttr('tabindex');
  $('.search-container.search-container--small form button[type="submit"]').removeAttr('tabindex');
});

/***/ }),

/***/ "./node_modules/@cagov/ds-site-footer/dist/index.css":
/*!***********************************************************!*\
  !*** ./node_modules/@cagov/ds-site-footer/dist/index.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-site-header/dist/index.css":
/*!***********************************************************!*\
  !*** ./node_modules/@cagov/ds-site-header/dist/index.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-site-navigation/dist/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/@cagov/ds-site-navigation/dist/index.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-skip-to-content/dist/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/@cagov/ds-skip-to-content/dist/index.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-statewide-footer/dist/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/@cagov/ds-statewide-footer/dist/index.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-statewide-header/dist/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/@cagov/ds-statewide-header/dist/index.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/frontend.scss":
/*!**********************************!*\
  !*** ./src/styles/frontend.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@cagov/ds-back-to-top/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@cagov/ds-back-to-top/dist/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaGovBackToTop: () => (/* binding */ CaGovBackToTop)
/* harmony export */ });
var styles = "/* Back to top button */\ncagov-back-to-top .back-to-top {\n  position: fixed;\n  z-index: 99999;\n  right: -100px;\n  font-size: var(--font-size-2, 1.125rem);\n  padding: 10px 10px 10px 10px;\n  bottom: 50px;\n  opacity: 0;\n  visibility: hidden;\n  color: var(--primary-700, #004abc);\n  border: 1px solid var(--primary-700, #004abc);\n  border-radius: 5px 0px 0px 5px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  background-color: #fff;\n}\n@media (max-width: 767px) {\n  cagov-back-to-top .back-to-top {\n    font-size: var(--font-size-1, 1rem);\n    padding: 8px 8px 8px 8px;\n  }\n}\ncagov-back-to-top .back-to-top:hover {\n  color: var(--primary-900, #003484);\n  border: 1px solid var(--primary-900, #003484);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n}\ncagov-back-to-top .back-to-top:hover svg path {\n  fill: var(--primary-900, #003484);\n}\ncagov-back-to-top .back-to-top:focus {\n  outline: 2px solid var(--accent2-500, #ac8227);\n}\ncagov-back-to-top .back-to-top svg {\n  width: 16px;\n  position: relative;\n  top: 3px;\n}\ncagov-back-to-top .back-to-top svg path {\n  fill: var(--primary-700, #004abc);\n}\ncagov-back-to-top .back-to-top.is-visible {\n  opacity: 1;\n  visibility: visible;\n  display: inline;\n  right: 0;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

class CaGovBackToTop extends window.HTMLElement {
  static get observedAttributes() {
    return ['data-hide-after', 'data-label'];
  }

  constructor() {
    super();
    // Support additional options
    const defaultOptions = {
      parentSelector: 'cagov-back-to-top',
      onLoadSelector: 'body',
      scrollBottomThreshold: 10,
      scrollAfterHeight: 400, // Pixel height (after which, go-to-top behavior will start)
    };
    this.options = {
      ...defaultOptions,
      label: this.dataset.label || 'Back to top',
      hideAfter: Number(this.dataset.hideAfter) || 7000, // 7 second initial display. (milliseconds)
    };
    this.state = {
      lastScrollTop: 0,
      timer: null,
    };

    if (!document.querySelector('#cagov-back-to-top-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-back-to-top-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    // Load go-to-top button
    document.querySelector(this.options.onLoadSelector).onload =
      this.addGoToTopButton();

    // If a user scrolls down the page for more than the "scrollAfterHeight" (example: 400px),
    // activate back to top button. Otherwise, keep it invisible.
    window.addEventListener(
      'scroll',
      CaGovBackToTop.debounce(() => {
        // 1 second debounce delay
        this.scrollToTopHandler();
      }, 200),
      false,
    );

    // Reaching botton of the screen
    window.onscroll = CaGovBackToTop.debounce(() => {
      this.checkScrolledToBottom();
    }, 200);
  }

  checkScrolledToBottom() {
    const { timer } = this.state;
    const returnTopButton = document.querySelector('.back-to-top');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      returnTopButton.classList.add('is-visible');
      returnTopButton.removeAttribute('aria-hidden');
      returnTopButton.removeAttribute('tabindex');
      clearTimeout(timer);
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  static debounce(func, wait, immediate) {
    let timeout;
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, ...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, ...args);
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-hide-after') {
      this.options.hideAfter = Number(newValue);
    }
    if (name === 'data-label') {
      this.options.label = newValue;
      if (document.querySelector('.back-to-top') !== null) {
        document.querySelector('.back-to-top').innerHTML = this.options.label;
      }
    }
  }

  scrollToTopHandler() {
    const container = document.querySelector(this.options.parentSelector);
    const { lastScrollTop } = this.state;
    let { timer } = this.state;
    const returnTopButton = document.querySelector('.back-to-top');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Downscroll code
      returnTopButton.classList.remove('is-visible');
      returnTopButton.setAttribute('aria-hidden', 'true');
      returnTopButton.setAttribute('tabindex', '-1');
    } else if (
      container.scrollTop >= this.options.scrollAfterHeight ||
      document.documentElement.scrollTop >= this.options.scrollAfterHeight
    ) {
      // Upscroll code
      if (timer !== null) {
        clearTimeout(timer);
      }
      returnTopButton.classList.add('is-visible');
      returnTopButton.removeAttribute('aria-hidden');
      returnTopButton.removeAttribute('tabindex');

      timer = setTimeout(() => {
        returnTopButton.classList.remove('is-visible');
        returnTopButton.setAttribute('aria-hidden', 'true');
        returnTopButton.setAttribute('tabindex', '-1');
      }, this.options.hideAfter); // Back to top removes itself after 2 sec of inactivity
    } else {
      // Bottom of the page
      returnTopButton.classList.remove('is-visible');
      returnTopButton.setAttribute('aria-hidden', 'true');
      returnTopButton.setAttribute('tabindex', '-1');
    }

    this.state.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }

  // Insert swg icon
  static addStyle(element) {
    const svg = document.createElement('span');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `
      <svg version="1.1" x="0px" y="0px" width="21px" height="16px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve"><path d="M5.2,10.8l5.3-5.3l5.3,5.3c0.4,0.4,0.9,0.4,1.3,0c0.4-0.4,0.4-0.9,0-1.3l-5.9-5.9c-0.2-0.2-0.4-0.3-0.6-0.3S10,3.5,9.8,3.6 L3.9,9.5c-0.4,0.4-0.4,0.9,0,1.3C4.3,11.2,4.8,11.2,5.2,10.8z"/></svg> 
      `;
    element.insertBefore(svg, element.firstChild);
  }

  // Create go-to-top button
  addGoToTopButton() {
    // Create a new go-to-top span element with class "back-to-top"
    const container = document.querySelector(this.options.parentSelector);

    const returnTop = document.createElement('button');
    returnTop.classList.add('back-to-top');
    // returnTop.classList.add(options.classes);
    // Does not need to be accessible.
    // Screen Reader users have other options to get to the top.
    returnTop.setAttribute('aria-hidden', 'true');
    returnTop.setAttribute('tabindex', '-1');
    // Add some text to the go-to-top button
    const returnContent = document.createTextNode(this.options.label);

    // Append text to the go-to-top span
    returnTop.appendChild(returnContent);
    CaGovBackToTop.addStyle(returnTop);
    // Add the newly created element and its content into main tag
    container.append(returnTop);

    // Add on-click event
    returnTop.addEventListener('click', () => this.goToTopFunction());
  }

  goToTopFunction() {
    document.querySelector(this.options.onLoadSelector).scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}

window.customElements.define('cagov-back-to-top', CaGovBackToTop);




/***/ }),

/***/ "./node_modules/@cagov/ds-site-navigation/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cagov/ds-site-navigation/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    // this.mobileSearchClicked = false;
    this.priorWidth = window.innerWidth;
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
          // this.mobileSearchClicked = true;
          // setTimeout(() =>{
          //   this.mobileSearchClicked = false;
          // }, 3000);
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
      // Issue #977: on Android phones, the resize event is fired when the address bar is shown/hidden
      // so we need to prevent hiding the search-bar when this occurs, otherwise, Android
      // users cannot perform a search.
      if (this.priorWidth === window.innerWidth) {
        // width has not changed, don't reset elements
        // this fixes an issue on Android phones, which generate
        // extra resize events when the search bar is shown/hidden
        return;
      }
      this.priorWidth = window.innerWidth;
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
        if (event.target.nodeName !== 'A' && event.target.nodeName !== 'FONT') {
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
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ./node_modules/@cagov/ds-base-css/dist/themes/drought.css ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cagov_ds_skip_to_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cagov/ds-skip-to-content */ "./node_modules/@cagov/ds-skip-to-content/dist/index.css");
/* harmony import */ var _cagov_ds_statewide_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cagov/ds-statewide-header */ "./node_modules/@cagov/ds-statewide-header/dist/index.css");
/* harmony import */ var _cagov_ds_site_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cagov/ds-site-header */ "./node_modules/@cagov/ds-site-header/dist/index.css");
/* harmony import */ var _cagov_ds_site_navigation_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cagov/ds-site-navigation/dist/index.css */ "./node_modules/@cagov/ds-site-navigation/dist/index.css");
/* harmony import */ var _cagov_ds_site_navigation_dist_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cagov/ds-site-navigation/dist/index.js */ "./node_modules/@cagov/ds-site-navigation/dist/index.js");
/* harmony import */ var _cagov_ds_statewide_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cagov/ds-statewide-footer */ "./node_modules/@cagov/ds-statewide-footer/dist/index.css");
/* harmony import */ var _cagov_ds_site_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cagov/ds-site-footer */ "./node_modules/@cagov/ds-site-footer/dist/index.css");
/* harmony import */ var _cagov_ds_link_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cagov/ds-link-icon */ "./node_modules/@cagov/ds-link-icon/dist/index.js");
/* harmony import */ var _cagov_ds_back_to_top__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cagov/ds-back-to-top */ "./node_modules/@cagov/ds-back-to-top/dist/index.js");
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/frontend.scss */ "./src/styles/frontend.scss");
/* harmony import */ var _scripts_custom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/custom.js */ "./src/scripts/custom.js");
/* harmony import */ var _scripts_custom_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_custom_js__WEBPACK_IMPORTED_MODULE_10__);
/**
 * Design System Structural Packages
 */










/**
 * Custom Styles/Scripts
 */


})();

/******/ })()
;
//# sourceMappingURL=drought.js.map