(()=>{"use strict";var e,n={388:()=>{const e=window.wp.blocks,n=(window.wp.i18n,window.React),t=window.wp.blockEditor,i=JSON.parse('{"UU":"caweb/ds-accordion"}');class r extends window.HTMLElement{constructor(){if(super(),!document.querySelector("#cagov-accordion-styles")){const e=document.createElement("style");e.id="cagov-accordion-styles",e.textContent='/* initial styles */\ncagov-accordion details {\n  border-radius: var(--radius-2, 5px) !important;\n  margin-bottom: 0;\n  min-height: var(--s-5, 3rem);\n  margin-top: 0.5rem;\n  border: solid var(--border-1, 1px) var(--gray-200, #d4d4d7) !important;\n}\ncagov-accordion details summary {\n  cursor: pointer;\n  padding: var(--s-1, 0.5rem) var(--s-5, 3rem) var(--s-1, 0.5rem) var(--s-2, 1rem);\n  background-color: var(--gray-50, #fafafa);\n  position: relative;\n  line-height: var(--s-4, 2rem);\n  margin: 0;\n  color: var(--primary-700, #165ac2);\n  font-size: var(--font-size-2, 1.125rem);\n  font-weight: bold;\n}\ncagov-accordion details summary:hover {\n  background-color: var(--gray-100, #fafafa);\n  color: var(--primary-900, #003688);\n}\ncagov-accordion details .accordion-body {\n  padding: var(--s-2, 1rem);\n}\n\n/* styles applied after custom element javascript runs */\ncagov-accordion:defined {\n  /* let it be open initially if details has open attribute */\n}\ncagov-accordion:defined details {\n  transition: height var(--animation-duration-2, 0.2s);\n  height: var(--s-5, 3rem);\n  overflow: hidden;\n}\ncagov-accordion:defined details[open] {\n  height: auto;\n}\ncagov-accordion:defined summary::-webkit-details-marker {\n  display: none;\n}\ncagov-accordion:defined details summary {\n  list-style: none; /* hide default expansion triangle after js executes */\n  border-radius: var(--border-5, 5px) var(--border-5, 5px) 0 0;\n}\ncagov-accordion:defined details summary:focus {\n  outline-offset: -2px;\n  outline: solid 2px var(--accent2-500, #ac8227) !important;\n  background-color: var(--gray-100, #fafafa);\n}\ncagov-accordion:defined details .cagov-open-indicator {\n  background-color: var(--primary-700, #165ac2);\n  height: 3px;\n  width: 15px;\n  border-radius: var(--border-3, 3px);\n  position: absolute;\n  right: var(--s-2, 1rem);\n  top: 1.4rem;\n}\ncagov-accordion:defined details .cagov-open-indicator:before {\n  display: block;\n  content: "";\n  position: absolute;\n  top: -6px;\n  left: 3px;\n  width: 3px;\n  height: 15px;\n  border-radius: var(--border-3, 3px);\n  border: none;\n  box-shadow: 3px 0 0 0 var(--primary-700, #165ac2);\n  background: none;\n}\ncagov-accordion:defined details[open] .cagov-open-indicator:before {\n  display: none;\n}\n\n/*# sourceMappingURL=index.css.map */\n',document.querySelector("head").appendChild(e)}}connectedCallback(){this.summaryEl=this.querySelector("summary"),this.setHeight(),this.summaryEl.addEventListener("click",this.listen.bind(this)),this.summaryEl.insertAdjacentHTML("beforeend",'<div class="cagov-open-indicator" aria-hidden="true" />'),this.detailsEl=this.querySelector("details"),this.bodyEl=this.querySelector(".accordion-body"),window.addEventListener("resize",this.debounce((()=>this.setHeight())).bind(this))}setHeight(){requestAnimationFrame((()=>{this.closedHeightInt=parseInt(this.summaryEl.scrollHeight+2,10),this.closedHeight=`${this.closedHeightInt}px`,this.detailsEl.hasAttribute("open")?this.detailsEl.style.height=`${parseInt(this.bodyEl.scrollHeight+this.closedHeightInt,10)}px`:this.detailsEl.style.height=this.closedHeight}))}listen(){this.detailsEl.hasAttribute("open")?this.detailsEl.style.height=this.closedHeight:requestAnimationFrame((()=>{this.detailsEl.style.height=`${parseInt(this.bodyEl.scrollHeight+this.closedHeightInt,10)}px`}))}debounce(e,n=300){let t;return(...i)=>{clearTimeout(t),t=setTimeout((()=>{e.apply(this,i)}),n)}}}window.customElements.define("cagov-accordion",r),(0,e.registerBlockType)(i.UU,{edit:function(e){let{setAttributes:i,attributes:{title:r}}=e;const o=(0,t.useBlockProps)();return(0,n.createElement)("div",{...o},(0,n.createElement)("cagov-accordion",null,(0,n.createElement)("details",null,(0,n.createElement)(t.RichText,{tagName:"summary",value:r,onChange:e=>{i({title:e})},placeholder:"Accordion Title"}),(0,n.createElement)("div",{className:"accordion-body"},(0,n.createElement)(t.InnerBlocks,null)))))},save:function(e){return(0,n.createElement)(t.InnerBlocks.Content,null)}})}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,e=[],i.O=(n,t,r,o)=>{if(!t){var a=1/0;for(l=0;l<e.length;l++){for(var[t,r,o]=e[l],s=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](t[d])))?t.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,r,o]},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={57:0,350:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var r,o,[a,s,d]=t,c=0;if(a.some((n=>0!==e[n]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(d)var l=d(i)}for(n&&n(t);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},t=globalThis.webpackChunkds_accordion=globalThis.webpackChunkds_accordion||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=i.O(void 0,[350],(()=>i(388)));r=i.O(r)})();