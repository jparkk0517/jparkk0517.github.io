(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3850)}])},3850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(5893);n(8828);var i=()=>(0,r.jsx)("footer",{className:"footer footer-center p-4 bg-base-300 text-base-content w-screen",children:(0,r.jsx)("aside",{children:(0,r.jsx)("p",{children:"Copyright \xa9 2024 - sun"})})}),o=e=>{let{children:t}=e;return(0,r.jsx)("main",{className:"p-4 align-baseline overflow-y-scroll",style:{height:"88vh"},children:t})},u=n(6955),s=n(1163),a=n(7294),c=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},l="object"==typeof global&&global&&global.Object===Object&&global,f="object"==typeof self&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),v=function(){return d.Date.now()},b=/\s/,h=function(e){for(var t=e.length;t--&&b.test(e.charAt(t)););return t},p=/^\s+/,y=d.Symbol,g=Object.prototype,m=g.hasOwnProperty,j=g.toString,x=y?y.toStringTag:void 0,S=function(e){var t=m.call(e,x),n=e[x];try{e[x]=void 0;var r=!0}catch(e){}var i=j.call(e);return r&&(t?e[x]=n:delete e[x]),i},w=Object.prototype.toString,E=y?y.toStringTag:void 0,O=function(e){var t;return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==(null==(t=e)?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?S(t):w.call(t))},N=0/0,T=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,k=/^0o[0-7]+$/i,P=parseInt,C=function(e){if("number"==typeof e)return e;if(O(e))return N;if(c(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=c(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,h(t)+1).replace(p,""):t;var r=_.test(e);return r||k.test(e)?P(e.slice(2),r?2:8):T.test(e)?N:+e},D=Math.max,W=Math.min,V=function(e,t,n){var r,i,o,u,s,a,l=0,f=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function p(e){var n=e-a,r=e-l;return void 0===a||n>=t||n<0||d&&r>=o}function y(){var e,n,r,i=v();if(p(i))return g(i);s=setTimeout(y,(e=i-a,n=i-l,r=t-e,d?W(r,o-n):r))}function g(e){return(s=void 0,b&&r)?h(e):(r=i=void 0,u)}function m(){var e,n=v(),o=p(n);if(r=arguments,i=this,a=n,o){if(void 0===s)return l=e=a,s=setTimeout(y,t),f?h(e):u;if(d)return clearTimeout(s),s=setTimeout(y,t),h(a)}return void 0===s&&(s=setTimeout(y,t)),u}return t=C(t)||0,c(n)&&(f=!!n.leading,o=(d="maxWait"in n)?D(C(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),m.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=a=i=s=void 0},m.flush=function(){return void 0===s?u:g(v())},m},A=()=>{let e=(0,a.useRef)(null),t=(0,s.useRouter)(),{setSearchKeyword:n,clearSearchKeyword:i}=(0,u.Z)(),o=V(e=>{n(e)},500);return(0,r.jsxs)("div",{className:"navbar bg-base-100 sticky top-0 z-10",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)("a",{className:"btn btn-ghost text-xl",onClick:()=>{t.push("/")},children:"SunBlog"})}),(0,r.jsx)("div",{className:"flex-none gap-2",children:(0,r.jsx)("div",{className:"form-control",children:(0,r.jsx)("input",{type:"text",placeholder:"Search",className:"input input-bordered w-24 md:w-auto",ref:e,onChange:e=>{o(e.target.value)}})})})]})},I=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-light.min.css",integrity:"sha512-Pmhg2i/F7+5+7SsdoUqKeH7UAZoVMYb1sxGOoJ0jWXAEHP0XV2H4CITyK267eHWp2jpj7rtqWNkmEOw1tNyYpg==",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,r.jsxs)("div",{className:"h-screen",children:[(0,r.jsx)(A,{}),(0,r.jsx)(o,{children:(0,r.jsx)(t,{...n})}),(0,r.jsx)(i,{})]})]})}},6955:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,o);return o},i=e=>e?r(e):r;var o,u=n(7294),s=n(2798);let{useDebugValue:a}=u,{useSyncExternalStoreWithSelector:c}=s,l=!1,f=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,n=(e,n)=>(function(e,t=f,n){n&&!l&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),l=!0);let r=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return a(r),r})(t,e,n);return Object.assign(n,t),n};var v=(o=e=>({searchKeyword:"",setSearchKeyword(t){e(e=>({...e,searchKeyword:t}))},clearSearchKeyword(){e(e=>({...e,searchKeyword:""}))}}))?d(o):d},8828:function(){},1163:function(e,t,n){e.exports=n(4546)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,u=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&l({inst:i})},[e,n,t]),u(function(){return c(i)&&l({inst:i}),e(function(){c(i)&&l({inst:i})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i=n(1688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=i.useSyncExternalStore,s=r.useRef,a=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var v=u(e,(f=c(function(){function e(e){if(!a){if(a=!0,u=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return s=t}return s=e}if(t=s,o(u,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(u=e,s=n)}var u,s,a=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],f[1]);return a(function(){d.hasValue=!0,d.value=v},[v]),l(v),v}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(4546)}),_N_E=e.O()}]);