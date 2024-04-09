(()=>{"use strict";var e,t={93:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.components,l=JSON.parse('{"UU":"caweb/cdt-ds-cards"}');(0,e.registerBlockType)(l.UU,{edit:function(e){let{setAttributes:l,attributes:{title:o,orientation:i,interactive:c,mediaID:s,mediaURL:d,mediaAlt:m}}=e;const u=(0,n.useBlockProps)();return u.className+=" card-text",(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Orientation"},(0,t.createElement)(r.SelectControl,{label:"Select Control",value:i,options:[{value:"top",label:"Image Top"},{value:"start",label:"Image Left"},{value:"end",label:"Image Right"}],onChange:function(e){l({orientation:e})}}),(0,t.createElement)(r.ToggleControl,{label:"Interactive",checked:c,onChange:function(e){l({interactive:e})}}))),(0,t.createElement)("ul",{className:"cards","data-action":c?"interactive":"","data-orientation":"top"!==i?`media-${i}`:""},(0,t.createElement)("li",null,(0,t.createElement)("div",{className:"card-text",...u},(0,t.createElement)(n.RichText,{tagName:"h2",placeholder:(0,a.__)("Card title…","cagov-design-system"),value:o,onChange:e=>{l({title:e})}}),(0,t.createElement)(n.InnerBlocks,{allowedBlocks:["core/paragraph"]})),(0,t.createElement)(n.MediaUpload,{onSelect:function(e){return l({mediaURL:e.url,mediaID:e.id,mediaAlt:e.alt})},allowedTypes:["image"],value:s,labels:{title:(0,a.__)("Card Image")},render:({open:e})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{style:{margin:"auto"}},(0,t.createElement)(r.Button,{variant:"primary",onClick:e},(0,a.__)("Change image","cagov-design-system"))),s&&(0,t.createElement)("img",{src:d,alt:m}))}))))},save:function(e){return(0,t.createElement)(n.InnerBlocks.Content,null)}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,r,l)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,r,l]=e[d],i=!0,c=0;c<a.length;c++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,r,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[o,i,c]=a,s=0;if(o.some((t=>0!==e[t]))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var d=c(n)}for(t&&t(a);s<o.length;s++)l=o[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},a=globalThis.webpackChunkcdt_ds_cards=globalThis.webpackChunkcdt_ds_cards||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=n.O(void 0,[350],(()=>n(93)));r=n.O(r)})();