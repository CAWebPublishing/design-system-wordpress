!function(){"use strict";var e,n={227:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.i18n,r=window.wp.blockEditor,a=JSON.parse('{"u2":"caweb/ds-page-navigation"}');(0,e.registerBlockType)(a.u2,{edit:function(e){let{setAttributes:a,attributes:{title:i}}=e;const o=(0,r.useBlockProps)();return(0,n.createElement)("div",o,(0,n.createElement)("sidebar",null,(0,n.createElement)("cagov-page-navigation",null,(0,n.createElement)("nav",{"aria-labelledby":"page-navigation-label"},(0,n.createElement)(r.RichText,{tagName:"div",placeholder:(0,t.__)("On this page","cagov-design-system"),value:i,className:"label",onChange:e=>{a({title:e})}}),(0,n.createElement)("ul",null,(0,n.createElement)(r.InnerBlocks,{allowedBlocks:["caweb/page-navigation-links"]}))))))},save:function(e){return(0,n.createElement)(r.InnerBlocks.Content,null)}})}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,a,i){if(!t){var o=1/0;for(s=0;s<e.length;s++){t=e[s][0],a=e[s][1],i=e[s][2];for(var l=!0,c=0;c<t.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[c])}))?t.splice(c--,1):(l=!1,i<o&&(o=i));if(l){e.splice(s--,1);var u=a();void 0!==u&&(n=u)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,a,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,i,o=t[0],l=t[1],c=t[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var s=c(r)}for(n&&n(t);u<o.length;u++)i=o[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},t=self.webpackChunkds_page_navigation=self.webpackChunkds_page_navigation||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=r.O(void 0,[431],(function(){return r(227)}));a=r.O(a)}();