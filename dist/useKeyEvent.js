!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["monday-style"]=t(require("react")):e["monday-style"]=t(e.react)}(this,(e=>(()=>{"use strict";var t={91510:(e,t,r)=>{r.r(t)},51496:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(8156);t.default=function({eventName:e,callback:t,ref:r,capture:n=!1}){(0,o.useEffect)((()=>{const o=r&&r.current;if(!o)return;const a={capture:n};return o.addEventListener(e,t,a),()=>{o.removeEventListener(e,t,a)}}),[e,r,t,n])}},61350:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(8156),a=o(r(51496));var u;!function(e){e.ALT="altKey",e.META="metaKey",e.CTRL="ctrlKey",e.SHIFT="shiftKey",e.CTRL_OR_META="ctrlOrMetaKey"}(u||(u={}));function c({keys:e=[],callback:t,modifier:r,withoutAnyModifier:o,ref:i,ignoreDocumentFallback:l=!1,capture:f=!1,preventDefault:s=!1,stopPropagation:d=!1,keyEventName:p="keydown"}){const y=(0,n.useRef)(document.body),m=(0,n.useCallback)((n=>{const{key:a}=n;e.includes(a)&&(r&&!((e,t)=>t===u.CTRL_OR_META?e.ctrlKey||e.metaKey:e[t])(n,r)||o&&!(e=>!Object.values(c.modifiers).some((t=>{if("ctrlOrMetaKey"!==t)return!!e[t]})))(n)||(s&&n.preventDefault(),d&&n.stopPropagation(),t(n)))}),[e,r,o,s,d,t]);let v;v=i||(l?null:y),(0,a.default)({eventName:p,callback:m,ref:v,capture:f})}t.default=c,c.modifiers=u},41921:(e,t,r)=>{r(91510)},8156:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}return o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(41921),o(61350)})()));
//# sourceMappingURL=useKeyEvent.js.map