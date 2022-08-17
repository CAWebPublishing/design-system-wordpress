var styles = "/* initial styles */\ncagov-accordion details {\n  border-radius: var(--radius-2, 5px) !important;\n  margin-bottom: 0;\n  min-height: var(--s-5, 3rem);\n  margin-top: 0.5rem;\n  border: solid var(--border-1, 1px) var(--gray-200, #d4d4d7) !important;\n}\ncagov-accordion details summary {\n  cursor: pointer;\n  padding: var(--s-1, 0.5rem) var(--s-5, 3rem) var(--s-1, 0.5rem) var(--s-2, 1rem);\n  background-color: var(--gray-50, #fafafa);\n  position: relative;\n  line-height: var(--s-4, 2rem);\n  margin: 0;\n  color: var(--primary-700, #165ac2);\n  font-size: var(--font-size-2, 1.125rem);\n  font-weight: bold;\n}\ncagov-accordion details summary:hover {\n  background-color: var(--gray-100, #fafafa);\n  color: var(--primary-900, #003688);\n}\ncagov-accordion details .accordion-body {\n  padding: var(--s-2, 1rem);\n}\n\n/* styles applied after custom element javascript runs */\ncagov-accordion:defined {\n  /* let it be open initially if details has open attribute */\n}\ncagov-accordion:defined details {\n  transition: height var(--animation-duration-2, 0.2s);\n  height: var(--s-5, 3rem);\n  overflow: hidden;\n}\ncagov-accordion:defined details[open] {\n  height: auto;\n}\ncagov-accordion:defined summary::-webkit-details-marker {\n  display: none;\n}\ncagov-accordion:defined details summary {\n  list-style: none; /* hide default expansion triangle after js executes */\n  border-radius: var(--border-5, 5px) var(--border-5, 5px) 0 0;\n}\ncagov-accordion:defined details summary:focus {\n  outline-offset: -2px;\n  outline: solid 2px var(--accent2-500, #ac8227) !important;\n  background-color: var(--gray-100, #fafafa);\n}\ncagov-accordion:defined details .cagov-open-indicator {\n  background-color: var(--primary-700, #165ac2);\n  height: 3px;\n  width: 15px;\n  border-radius: var(--border-3, 3px);\n  position: absolute;\n  right: var(--s-2, 1rem);\n  top: 1.4rem;\n}\ncagov-accordion:defined details .cagov-open-indicator:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 3px;\n  width: 3px;\n  height: 15px;\n  border-radius: var(--border-3, 3px);\n  border: none;\n  box-shadow: 3px 0 0 0 var(--primary-700, #165ac2);\n  background: none;\n}\ncagov-accordion:defined details[open] .cagov-open-indicator:before {\n  display: none;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Accordion web component that collapses and expands content inside itself on click.
 *
 * @element cagov-accordion
 *
 *
 * @fires click - Default events which may be listened to in order to discover most popular accordions
 *
 * @attr {string} open - set on the internal details element
 * If this is true the accordion will be open before any user interaction.
 *
 * @cssprop --primary-700 - Default value of #165ac2, used for all colors of borders and fills
 * @cssprop --primary-900 - Default value of #003588, used for background on hover
 *
 */
class CaGovAccordion extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-accordion-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-accordion-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.summaryEl = this.querySelector('summary');
    // trigger the opening and closing height change animation on summary click
    this.setHeight();
    this.summaryEl.addEventListener('click', this.listen.bind(this));
    this.summaryEl.insertAdjacentHTML(
      'beforeend',
      `<div class="cagov-open-indicator" aria-hidden="true" />`,
    );
    this.detailsEl = this.querySelector('details');
    this.bodyEl = this.querySelector('.accordion-body');

    window.addEventListener(
      'resize',
      this.debounce(() => this.setHeight()).bind(this),
    );
  }

  setHeight() {
    requestAnimationFrame(() => {
      // delay so the desired height is readable in all browsers
      this.closedHeightInt = parseInt(this.summaryEl.scrollHeight + 2, 10);
      this.closedHeight = `${this.closedHeightInt}px`;

      // apply initial height
      if (this.detailsEl.hasAttribute('open')) {
        // if open get scrollHeight
        this.detailsEl.style.height = `${parseInt(
          this.bodyEl.scrollHeight + this.closedHeightInt,
          10,
        )}px`;
      } else {
        // else apply closed height
        this.detailsEl.style.height = this.closedHeight;
      }
    });
  }

  listen() {
    if (this.detailsEl.hasAttribute('open')) {
      // was open, now closing
      this.detailsEl.style.height = this.closedHeight;
    } else {
      // was closed, opening
      requestAnimationFrame(() => {
        // delay so the desired height is readable in all browsers
        this.detailsEl.style.height = `${parseInt(
          this.bodyEl.scrollHeight + this.closedHeightInt,
          10,
        )}px`;
      });
    }
  }

  debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
}

window.customElements.define('cagov-accordion', CaGovAccordion);

export { CaGovAccordion };

var styles = "/* Page alert */\n.icon-select {\n  height: 48px;\n  padding: 0 0px 0 16px;\n}\n\n.editor-styles-wrapper .message-body {\n  padding: 0 32px;\n}\n\n.editor-styles-wrapper .cagov-page-alert {\n  min-height: 64px;\n  height: auto;\n}\n\n.cagov-page-alert {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 46px;\n  height: auto;\n  background: rgba(254, 192, 47, 0.2);\n  border: 1px solid var(--cagov-highlight, #fec02f);\n  box-sizing: border-box;\n  border-radius: 5px;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 32px 0px;\n}\n.cagov-page-alert .icon {\n  line-height: 1.5rem;\n  background: none;\n}\n.cagov-page-alert .close-button {\n  background: none;\n  margin-left: auto;\n  border: none;\n  cursor: pointer !important;\n}\n.cagov-page-alert .body {\n  line-height: 1.5rem;\n  padding: 0 16px;\n  background: none;\n}\n@media only screen and (max-width: 600px) {\n  .cagov-page-alert {\n    min-height: 46px;\n    height: auto;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Page Alert web component
 * Supported endpoints: Wordpress v2
 */

class CAGovPageAlert extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-alert-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-alert-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.message = this.dataset.message || '';
    this.icon = this.dataset.icon || '';

    this.template({ message: this.message, icon: this.icon });
    document
      .querySelector('cagov-page-alert .close-button')
      .addEventListener('click', () => {
        document
          .querySelector('.cagov-page-alert')
          .setAttribute('aria-hidden', 'true');
        document
          .querySelector('cagov-page-alert .close-button')
          .setAttribute('tabindex', '-1');
        document.querySelector('cagov-page-alert').style.display = 'none';
      });
  }

  template(data) {
    if (data !== undefined && data !== null && data.content !== null) {
      this.innerHTML = `<div class="cagov-page-alert cagov-stack">
      <div class="icon" aria-hidden="true"><span class="${this.icon}"></span></div>
        <div class="body">${this.message}</div>
        <button class="close-button">
          <span class="ca-gov-icon-close-line" aria-hidden="true"></span>
          <span class="sr-only">Dismiss page alert</span>
        </button>
      </div>`;
    }

    return null;
  }
}

window.customElements.define('cagov-page-alert', CAGovPageAlert);

var styles = "/* PAGE NAVIGATION */\nsidebar cagov-page-navigation .label {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28.2px;\n  padding: 0;\n  margin: 0;\n  padding-bottom: 16px;\n}\n\nsidebar cagov-page-navigation ul,\nsidebar cagov-page-navigation ol:not([class*=menu]):not([class*=nav]):not([class*=footer-links]),\nsidebar cagov-page-navigation ul:not([class*=menu]):not([class*=nav]):not([class*=footer-links]) {\n  margin: 0;\n  text-indent: 0;\n  padding: 0;\n}\n\nsidebar cagov-page-navigation ul li {\n  padding-top: 14px;\n  padding-bottom: 18px;\n  margin-left: 0;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  border-bottom: 1px solid var(--gray-300, #e1e0e3);\n  line-height: 28.2px;\n  list-style: none;\n}\nsidebar cagov-page-navigation ul li:first-child {\n  border-top: 1px solid var(--gray-300, #e1e0e3);\n}\nsidebar cagov-page-navigation ul li a {\n  text-decoration: none;\n}\nsidebar cagov-page-navigation ul li a:hover {\n  text-decoration: underline;\n}\n\n@media only screen and (max-width: 992px) {\n  cagov-page-navigation .label {\n    display: none;\n  }\n  .sidebar-container {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n  cagov-page-navigation ul li a {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Page Navigation web component
 *
 * @element cagov-page-navigation
 *
 * @attr {string} [data-selector] - "main";
 * @attr {string} [data-type] - "wordpress";
 * @attr {string} [data-label] - "On this page";
 */

class CAGovPageNavigation extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-navigation-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-navigation-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    this.type = 'wordpress';

    /* eslint-disable */
    /* https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js */
    /* Smooth scroll polyfill for safari, since it does not support scroll behaviors yet - can be moved to a dependency bundle split out by browser support later or in headless implementation */
    !(function () {
      function o() {
        const o = window;
        const t = document;
        if (
          !(
            'scrollBehavior' in t.documentElement.style &&
            !0 !== o.__forceSmoothScrollPolyfill__
          )
        ) {
          let l;
          const e = o.HTMLElement || o.Element;
          var r = 468;
          var i = {
            scroll: o.scroll || o.scrollTo,
            scrollBy: o.scrollBy,
            elementScroll: e.prototype.scroll || n,
            scrollIntoView: e.prototype.scrollIntoView,
          };
          var s =
            o.performance && o.performance.now
              ? o.performance.now.bind(o.performance)
              : Date.now;
          var c =
            ((l = o.navigator.userAgent),
            new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(l)
              ? 1
              : 0);
          (o.scroll = o.scrollTo =
            function () {
              void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                  ? h.call(
                      o,
                      t.body,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : o.scrollX || o.pageXOffset,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : o.scrollY || o.pageYOffset,
                    )
                  : i.scroll.call(
                      o,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? arguments[0]
                        : o.scrollX || o.pageXOffset,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : o.scrollY || o.pageYOffset,
                    ));
            }),
            (o.scrollBy = function () {
              void 0 !== arguments[0] &&
                (f(arguments[0])
                  ? i.scrollBy.call(
                      o,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? arguments[0]
                        : 0,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    )
                  : h.call(
                      o,
                      t.body,
                      ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                      ~~arguments[0].top + (o.scrollY || o.pageYOffset),
                    ));
            }),
            (e.prototype.scroll = e.prototype.scrollTo =
              function () {
                if (void 0 !== arguments[0])
                  if (!0 !== f(arguments[0])) {
                    const o = arguments[0].left;
                    const t = arguments[0].top;
                    h.call(
                      this,
                      this,
                      void 0 === o ? this.scrollLeft : ~~o,
                      void 0 === t ? this.scrollTop : ~~t,
                    );
                  } else {
                    if (
                      typeof arguments[0] === 'number' &&
                      void 0 === arguments[1]
                    )
                      throw new SyntaxError('Value could not be converted');
                    i.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : typeof arguments[0] !== 'object'
                        ? ~~arguments[0]
                        : this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : void 0 !== arguments[1]
                        ? ~~arguments[1]
                        : this.scrollTop,
                    );
                  }
              }),
            (e.prototype.scrollBy = function () {
              void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                  ? this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    })
                  : i.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop,
                    ));
            }),
            (e.prototype.scrollIntoView = function () {
              if (!0 !== f(arguments[0])) {
                const l = (function (o) {
                  for (
                    ;
                    o !== t.body &&
                    !1 ===
                      ((e = p((l = o), 'Y') && a(l, 'Y')),
                      (r = p(l, 'X') && a(l, 'X')),
                      e || r);

                  )
                    o = o.parentNode || o.host;
                  let l;
                  let e;
                  let r;
                  return o;
                })(this);
                const e = l.getBoundingClientRect();
                const r = this.getBoundingClientRect();
                l !== t.body
                  ? (h.call(
                      this,
                      l,
                      l.scrollLeft + r.left - e.left,
                      l.scrollTop + r.top - e.top,
                    ),
                    o.getComputedStyle(l).position !== 'fixed' &&
                      o.scrollBy({
                        left: e.left,
                        top: e.top,
                        behavior: 'smooth',
                      }))
                  : o.scrollBy({
                      left: r.left,
                      top: r.top,
                      behavior: 'smooth',
                    });
              } else
                i.scrollIntoView.call(
                  this,
                  void 0 === arguments[0] || arguments[0],
                );
            });
        }
        function n(o, t) {
          (this.scrollLeft = o), (this.scrollTop = t);
        }
        function f(o) {
          if (
            o === null ||
            typeof o !== 'object' ||
            void 0 === o.behavior ||
            o.behavior === 'auto' ||
            o.behavior === 'instant'
          )
            return !0;
          if (typeof o === 'object' && o.behavior === 'smooth') return !1;
          throw new TypeError(
            `behavior member of ScrollOptions ${o.behavior} is not a valid value for enumeration ScrollBehavior.`,
          );
        }
        function p(o, t) {
          return t === 'Y'
            ? o.clientHeight + c < o.scrollHeight
            : t === 'X'
            ? o.clientWidth + c < o.scrollWidth
            : void 0;
        }
        function a(t, l) {
          const e = o.getComputedStyle(t, null)[`overflow${l}`];
          return e === 'auto' || e === 'scroll';
        }
        function d(t) {
          let l;
          let e;
          let i;
          let c;
          let n = (s() - t.startTime) / r;
          (c = n = n > 1 ? 1 : n),
            (l = 0.5 * (1 - Math.cos(Math.PI * c))),
            (e = t.startX + (t.x - t.startX) * l),
            (i = t.startY + (t.y - t.startY) * l),
            t.method.call(t.scrollable, e, i),
            (e === t.x && i === t.y) || o.requestAnimationFrame(d.bind(o, t));
        }
        function h(l, e, r) {
          let c;
          let f;
          let p;
          let a;
          const h = s();
          l === t.body
            ? ((c = o),
              (f = o.scrollX || o.pageXOffset),
              (p = o.scrollY || o.pageYOffset),
              (a = i.scroll))
            : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
            d({
              scrollable: c,
              method: a,
              startTime: h,
              startX: f,
              startY: p,
              x: e,
              y: r,
            });
        }
      }
      typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = { polyfill: o })
        : o();
    })();
    /* eslint-enable */

    if (this.type === 'wordpress') {
      document.addEventListener('DOMContentLoaded', () =>
        this.buildContentNavigation(),
      );
    }
    if (
      document.readyState === 'complete' ||
      document.readyState === 'loaded'
    ) {
      this.buildContentNavigation();
    }
  }

  buildContentNavigation() {
    // Parse header tags
    const markup = this.getHeaderTags();
    let label = null;
    if (markup !== null) {
      label = this.dataset.label || 'On this page';
    }
    let content = null;
    if (markup !== null) {
      content = `<nav aria-labelledby="page-navigation-label"> <div id="page-navigation-label" class="label">${label}</div> ${markup}</nav>`;
    }

    this.template({ content }, 'wordpress');
  }

  template(data, type) {
    if (data !== undefined && data !== null && data.content !== null) {
      if (type === 'wordpress') {
        this.innerHTML = `${data.content}`;
      }
    }

    document.querySelectorAll('a[data-page-navigation]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const hashval = decodeURI(anchor.getAttribute('href'));
        try {
          const target = document.querySelector(hashval);
          if (target !== null) {
            const position = target.getBoundingClientRect();

            window.scrollTo({
              // Handle accessible smoothing behavior in CSS
              left: position.left,
              top: position.top - 200,
            });

            target.focus();

            window.history.pushState(null, null, hashval);
          }
        } catch (error) {
          console.error(error);
        }
        e.preventDefault();
      });
    });

    return null;
  }

  renderNoContent() {
    this.innerHTML = '';
  }

  getHeaderTags() {
    const { selector } = this.dataset;
    // const { callback } = this.dataset; // Editor only right now

    const h = ['h2'];
    for (let i = 0; i < h.length; i += 1) {
      // Pull out the header tags, in order & render as links with anchor tags
      // auto convert h tags with tag names
      if (selector !== undefined && selector !== null) {
        {
          const selectorContent = document.querySelector(selector);
          if (selectorContent !== null) {
            const outline = CAGovPageNavigation.outliner(selectorContent);
            return outline;
          }
        }
      }
    }
    return null;
  }

  static outliner(content) {
    const headers = content.querySelectorAll('h2');
    let output = '';
    if (headers !== undefined && headers !== null && headers.length > 0) {
      headers.forEach((tag) => {
        const tagId = tag.getAttribute('id');
        const tagName = tag.getAttribute('name');

        const title = tag.innerHTML;

        let anchorLabel = null;

        // If id not set already, create an id to jump to.
        if (tagId) {
          anchorLabel = tagId;
        } else if (tagName) {
          anchorLabel = tagName;
        } else {
          anchorLabel = tag.innerHTML;
        }

        // Convert anchor label content to remove breaking characters.
        const anchor = anchorLabel
          .toLowerCase()
          .trim()
          .replace(/ /g, '-')
          // Strip out unallowed CSS characters (Selector API is used with the anchor links)
          // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;,
          // <, =, >, ?, @, [, \, ], ^, `, {, |, }, and ~.
          .replace(
            /\(|\)|!|"|#|\$|%|&|'|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\]|\\|\^|`|\{|\||\|\}|~/g,
            '',
          )
          // All other characters are encoded and decoded using encodeURI/decodeURI
          // which escapes UTF-8 characters.
          // If we want to do this with allowed characters only
          // .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9/g,"")
          // Alt: [a-zA-Z\u00C0-\u017F]+,\s[a-zA-Z\u00C0-\u017F]+
          .replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g, '');

        output += `<li><a data-page-navigation href="#${encodeURI(
          anchor,
        )}">${title}</a></li>`;

        tag.setAttribute('id', anchor);
        tag.setAttribute('name', anchor);
      });
      return `<ul>${output}</ul>`;
    }
    return null;
  }
}

window.customElements.define('cagov-page-navigation', CAGovPageNavigation);

jQuery(document).ready(function($) {

    $(document).on("mouseover", '.popover', function(ele){
        togglePopover(ele.currentTarget.id );
    });

    
    $(document).on("mouseout", '.popover', function(ele){
        togglePopover(ele.currentTarget.id, false );
    });

    function togglePopover(id, popin = true ){

        if( undefined != id ){
            var current = $( '#' + id);
            var popver = $('#' + id + '-popover');

            if( popin ){
                current.addClass('highlighted');

                if( undefined != popver ){
                    $(popver).addClass('popover-revealed');
                }
    
            }else{
                current.removeClass('highlighted');

                if( undefined != popver ){
                    $(popver).removeClass('popover-revealed');
                }
    
            }
        }
    }

    
});