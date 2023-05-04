import{d,O as u,P as w,R as a}from"./vue-401fb23c.js";import{n as E,A as M}from"./index-66da63bc.js";import{F as f}from"./naive_ui-f15aaf84.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),j=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),B=[$,j],Z=d({name:"Add",render:function(c,i){return u(),w("svg",R,B)}}),C={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},S=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 268l144 144l144-144"},null,-1),U=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M256 392V100"},null,-1),D=[S,U],ee=d({name:"ArrowDown",render:function(c,i){return u(),w("svg",C,D)}}),O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},z=a("path",{d:"M408 48H104a72.08 72.08 0 0 0-72 72v192a72.08 72.08 0 0 0 72 72h24v64a16 16 0 0 0 26.25 12.29L245.74 384H408a72.08 72.08 0 0 0 72-72V120a72.08 72.08 0 0 0-72-72zM160 248a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32z",fill:"currentColor"},null,-1),F=[z],te=d({name:"ChatboxEllipses",render:function(c,i){return u(),w("svg",O,F)}}),T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},H=a("path",{d:"M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z",fill:"currentColor"},null,-1),K=[H],oe=d({name:"Send",render:function(c,i){return u(),w("svg",T,K)}}),P={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},V=a("path",{d:"M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58L8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z",fill:"currentColor"},null,-1),q=a("path",{d:"M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z",fill:"currentColor"},null,-1),G=[V,q],ne=d({name:"KeyboardDoubleArrowDownRound",render:function(c,i){return u(),w("svg",P,G)}}),X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},I=a("path",{d:"M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41z",fill:"currentColor"},null,-1),N=a("path",{d:"M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41z",fill:"currentColor"},null,-1),W=[I,N],re=d({name:"KeyboardDoubleArrowUpRound",render:function(c,i){return u(),w("svg",X,W)}});function se(){return E.get(M.Prompt)}var b={exports:{}};(function(l,c){(function(i,p){p()})(f,function(){function i(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function p(e,t,s){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){v(o.response,t,s)},o.onerror=function(){console.error("could not download file")},o.send()}function k(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function _(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof f=="object"&&f.global===f?f:void 0,g=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(e,t,s){var o=r.URL||r.webkitURL,n=document.createElement("a");t=t||e.name||"download",n.download=t,n.rel="noopener",typeof e=="string"?(n.href=e,n.origin===location.origin?_(n):k(n.href)?p(e,t,s):_(n,n.target="_blank")):(n.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(n.href)},4e4),setTimeout(function(){_(n)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,s){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(i(e,s),t);else if(k(e))p(e,t,s);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){_(o)})}}:function(e,t,s,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return p(e,t,s);var n=e.type==="application/octet-stream",y=/constructor/i.test(r.HTMLElement)||r.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||n&&y||g)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var h=m.result;h=A?h:h.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=h:location=h,o=null},m.readAsDataURL(e)}else{var L=r.URL||r.webkitURL,x=L.createObjectURL(e);o?o.location=x:location.href=x,o=null,setTimeout(function(){L.revokeObjectURL(x)},4e4)}});r.saveAs=v.saveAs=v,l.exports=v})})(b);var ae=b.exports;export{Z as A,te as C,ae as F,ne as K,oe as S,ee as a,re as b,se as g};
//# sourceMappingURL=FileSaver.min-fddcbe53.js.map
