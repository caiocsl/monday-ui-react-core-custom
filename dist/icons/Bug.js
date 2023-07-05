/*! For license information please see Bug.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["monday-style"]=r(require("react")):e["monday-style"]=r(e.react)}(this,(e=>(()=>{"use strict";var r={34043:(e,r,C)=>{var t=C(8156),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;o=n("react.element"),r.Fragment=n("react.fragment")}var l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,C){var t,n={},s=null,a=null;for(t in void 0!==C&&(s=""+C),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,t)&&!f.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:a,props:n,_owner:l.current}}r.jsx=s,r.jsxs=s},33823:(e,r,C)=>{e.exports=C(34043)},53840:function(e,r,C){var t=this&&this.__rest||function(e,r){var C={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(C[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(C[t[o]]=e[t[o]])}return C};Object.defineProperty(r,"__esModule",{value:!0});const o=C(33823),n=e=>{var{size:r}=e,C=t(e,["size"]);return(0,o.jsx)("svg",Object.assign({viewBox:"0 0 20 20",fill:"currentColor",width:r||"20",height:r||"20"},C,{children:(0,o.jsx)("path",{d:"M13.499 2.68583C13.499 2.30712 13.1921 2.00007 12.8134 2C12.4347 1.99993 12.1276 2.30688 12.1275 2.68559C12.1275 3.17163 12.0182 3.64398 11.8167 4.05354C11.6666 4.35855 11.4716 4.61643 11.2482 4.81815C10.8401 4.7131 10.4214 4.65937 9.99943 4.65937C9.57786 4.65937 9.15963 4.71299 8.75199 4.81782C8.52868 4.61615 8.3338 4.35838 8.18381 4.05354C7.98229 3.64398 7.87307 3.17163 7.87299 2.68559C7.87292 2.30688 7.56586 1.99993 7.18715 2C6.80845 2.00007 6.5015 2.30712 6.50156 2.68583C6.50168 3.37352 6.65555 4.05391 6.95327 4.659C7.07958 4.91571 7.2306 5.15634 7.40382 5.37605C6.84129 5.7056 6.33232 6.13856 5.89538 6.65494C5.76838 6.80503 5.64799 6.96153 5.53447 7.12385C5.2604 6.8757 4.96053 6.66223 4.6394 6.48933C4.03158 6.16208 3.36484 5.98965 2.68552 5.98984C2.30681 5.98995 1.99989 6.29704 2 6.67575C2.00011 7.05446 2.3072 7.36137 2.6859 7.36127C3.13038 7.36114 3.5744 7.47349 3.98925 7.69686C4.2988 7.86352 4.5884 8.09013 4.8453 8.37065C4.78365 8.51543 4.72652 8.66282 4.67405 8.81254C4.46817 9.39995 4.33611 10.0167 4.28039 10.6438H2.68571C2.307 10.6438 2 10.9508 2 11.3295C2 11.7082 2.307 12.0152 2.68571 12.0152H4.28038C4.33611 12.6423 4.46817 13.259 4.67405 13.8464C4.72657 13.9963 4.78375 14.1438 4.84545 14.2887C4.58852 14.5693 4.29886 14.7959 3.98925 14.9626C3.5744 15.186 3.13038 15.2984 2.6859 15.2982C2.3072 15.2981 2.00011 15.605 2 15.9837C1.99989 16.3625 2.30681 16.6695 2.68552 16.6697C3.36484 16.6698 4.03158 16.4974 4.6394 16.1702C4.96062 15.9972 5.26057 15.7837 5.5347 15.5354C5.64816 15.6976 5.76847 15.854 5.89538 16.004C6.42283 16.6274 7.05524 17.1291 7.76014 17.4742C8.46558 17.8195 9.2269 17.9996 9.99943 17.9996C10.772 17.9996 11.5333 17.8195 12.2387 17.4742C12.9436 17.1291 13.576 16.6274 14.1035 16.004C14.2305 15.8539 14.3509 15.6974 14.4644 15.5351C14.7386 15.7835 15.0387 15.9971 15.3601 16.1702C15.9679 16.4974 16.6347 16.6698 17.314 16.6697C17.6927 16.6695 17.9996 16.3625 17.9995 15.9837C17.9994 15.605 17.6923 15.2981 17.3136 15.2982C16.8691 15.2984 16.4251 15.186 16.0102 14.9626C15.7005 14.7958 15.4106 14.569 15.1536 14.2882C15.2152 14.1435 15.2723 13.9961 15.3248 13.8464C15.5307 13.259 15.6627 12.6423 15.7185 12.0152H17.3144C17.6931 12.0152 18.0001 11.7082 18.0001 11.3295C18.0001 10.9508 17.6931 10.6438 17.3144 10.6438H15.7185C15.6961 10.3926 15.6616 10.1431 15.6149 9.89652C15.6122 9.87807 15.6086 9.85987 15.6044 9.84194C15.5355 9.49163 15.4421 9.14732 15.3248 8.81254C15.2724 8.66299 15.2153 8.51575 15.1538 8.37113C15.4108 8.09039 15.7005 7.86361 16.0102 7.69686C16.4251 7.47349 16.8691 7.36114 17.3136 7.36127C17.6923 7.36137 17.9994 7.05446 17.9995 6.67575C17.9996 6.29704 17.6927 5.98995 17.314 5.98984C16.6346 5.98965 15.9679 6.16208 15.3601 6.48933C15.0388 6.66232 14.7388 6.8759 14.4646 7.1242C14.351 6.96176 14.2306 6.80514 14.1035 6.65494C13.6668 6.13891 13.1583 5.70619 12.5962 5.37672C12.7696 5.15683 12.9208 4.91597 13.0472 4.659C13.345 4.05391 13.4988 3.37352 13.499 2.68583ZM14.0471 9.31406C14.0417 9.29806 14.0362 9.2821 14.0306 9.26616C13.9528 9.04438 13.863 8.83026 13.7621 8.62503C13.7444 8.59557 13.7291 8.56497 13.7161 8.53351C13.5296 8.17125 13.308 7.83801 13.0566 7.5408C12.6436 7.05275 12.1596 6.67292 11.6357 6.4165C11.1125 6.16034 10.5569 6.0308 9.99943 6.0308C9.442 6.0308 8.88639 6.16034 8.36311 6.4165C7.83929 6.67292 7.35527 7.05275 6.9423 7.5408C6.69219 7.83639 6.47163 8.16762 6.28583 8.52759C6.27157 8.5631 6.25428 8.59754 6.23404 8.63051C6.1342 8.83407 6.04532 9.04635 5.96828 9.26616C5.96269 9.2821 5.95717 9.29806 5.95172 9.31406H14.0471ZM5.65401 10.6855C5.63324 10.89 5.62232 11.0963 5.62148 11.3034C5.6218 11.312 5.62196 11.3207 5.62196 11.3295C5.62196 11.3382 5.6218 11.3469 5.62148 11.3555C5.62434 12.057 5.7427 12.7492 5.96828 13.3928C6.04566 13.6136 6.135 13.8268 6.23538 14.0312C6.25458 14.0627 6.27108 14.0956 6.28482 14.1294C6.47083 14.4901 6.69174 14.822 6.9423 15.1181C7.35527 15.6062 7.83929 15.986 8.36311 16.2425C8.88639 16.4986 9.442 16.6282 9.99943 16.6282C10.5569 16.6282 11.1125 16.4986 11.6357 16.2425C12.1596 15.986 12.6436 15.6062 13.0566 15.1181C13.3085 14.8203 13.5306 14.4863 13.7172 14.1232C13.7296 14.0936 13.7441 14.0648 13.7606 14.037C13.8622 13.8308 13.9525 13.6157 14.0306 13.3928C14.259 12.7412 14.3774 12.0398 14.3774 11.3295C14.3774 11.1136 14.3665 10.8986 14.3448 10.6855H5.65401Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};n.displayName="Bug",r.default=n},8156:r=>{r.exports=e}},C={};var t=function e(t){var o=C[t];if(void 0!==o)return o.exports;var n=C[t]={exports:{}};return r[t].call(n.exports,n,n.exports,e),n.exports}(53840);return t})()));
//# sourceMappingURL=Bug.js.map