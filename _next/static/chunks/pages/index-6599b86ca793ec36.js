(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6108)}])},6108:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return E}});var r,s=n(5893),i=e=>{let{title:t,children:n,footer:r,onClick:i}=e;return(0,s.jsx)("div",{onClick:i,className:"card m-4 w-96 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h2",{className:"card-title",children:t}),n,(0,s.jsx)("div",{className:"card-actions justify-end",children:r})]})})},u=n(7294),a=e=>{let{items:t=[],page:n={pageLen:10},onChangePage:r,onSelect:a}=e,[c,o]=(0,u.useState)(0),l=Math.ceil(t.length/n.pageLen),f=t.slice(c*n.pageLen,(c+1)*n.pageLen);return(0,u.useEffect)(()=>{r&&r(c)},[r,c]),(0,s.jsxs)("div",{children:[(0,s.jsx)("ul",{className:"list-none p-0",children:f.map((e,t)=>(0,s.jsx)("li",{className:"inline-block",children:(0,s.jsx)(i,{...e,onClick:()=>{a&&a(e)}})},t.toString()))}),(0,s.jsx)("div",{className:"flex justify-center mt-4",children:(0,s.jsxs)("div",{className:"join",children:[c>3&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>o(0),className:"join-item btn btn-lg",children:"첫페이지"}),(0,s.jsx)("span",{className:"mx-2",children:"..."})]}),Array(l).fill(null).map((e,t)=>t).filter(e=>c-3<=e&&e<=c+3).map(e=>(0,s.jsx)("button",{onClick:()=>o(e),className:"join-item btn btn-lg ".concat(e===c?"btn-active":""),children:e+1},e)),c<l-4&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"mx-2",children:"..."}),(0,s.jsx)("button",{onClick:()=>o(l-1),className:"join-item btn btn-lg",children:"끝페이지"})]})]})})]})};let c=e=>{let t;let n=new Set,r=(e,r)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=r?r:"object"!=typeof s||null===s)?s:Object.assign({},t,s),n.forEach(n=>n(t,e))}},s=()=>t,i={setState:r,getState:s,getInitialState:()=>u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,s,i);return i},o=e=>e?c(e):c;var l=n(2798);let{useDebugValue:f}=u,{useSyncExternalStoreWithSelector:d}=l,b=!1,h=e=>e,m=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=h,n){n&&!b&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),b=!0);let r=d(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return f(r),r})(t,e,n);return Object.assign(n,t),n},v=[],p=(r=e=>({posts:v,setPosts:t=>e(e=>({...e,posts:t}))}))?m(r):m;var j=e=>{let{className:t,children:n,...r}=e;return(0,s.jsx)("button",{...r,className:"btn btn-outline ".concat(null!=t?t:""),children:n})},g=n(1163),x=!0;function E(e){let{posts:t}=e,n=(0,g.useRouter)(),{setPosts:r}=p();return(0,u.useEffect)(()=>{r(t)},[t,r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{items:t.map(e=>({title:e.meta.title,children:e.meta.desc,footer:(0,s.jsx)(j,{onClick:()=>{n.push("/posts/".concat(e.route))},children:"보러가기"})}))})})}},1163:function(e,t,n){e.exports=n(4546)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,u=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!s(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),s=r[0].inst,l=r[1];return a(function(){s.value=n,s.getSnapshot=t,o(s)&&l({inst:s})},[e,n,t]),u(function(){return o(s)&&l({inst:s}),e(function(){o(s)&&l({inst:s})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},139:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),s=n(1688),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=s.useSyncExternalStore,a=r.useRef,c=r.useEffect,o=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var f=a(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var b=u(e,(f=o(function(){function e(e){if(!c){if(c=!0,u=e,e=r(e),void 0!==s&&d.hasValue){var t=d.value;if(s(t,e))return a=t}return a=e}if(t=a,i(u,e))return t;var n=r(e);return void 0!==s&&s(t,n)?t:(u=e,a=n)}var u,a,c=!1,o=void 0===n?null:n;return[function(){return e(t())},null===o?void 0:function(){return e(o())}]},[t,n,r,s]))[0],f[1]);return c(function(){d.hasValue=!0,d.value=b},[b]),l(b),b}},1688:function(e,t,n){"use strict";e.exports=n(3250)},2798:function(e,t,n){"use strict";e.exports=n(139)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);