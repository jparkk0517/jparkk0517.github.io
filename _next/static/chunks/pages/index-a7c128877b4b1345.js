(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2309)}])},2309:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return m}});var a=n(5893),s=n(7294),i=e=>{let{title:t,children:n,date:s,onClick:i,emphatic:l,onClickTag:r,tags:c=[]}=e;return(0,a.jsx)("div",{onClick:i,className:"card m-4 bg-base-100 hover:bg-base-200  hover:scale-105 transform transition-transform duration-300 border border-slate-600 cursor-pointer max-w-[70vw]",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("h2",{className:"card-title",children:[t,(0,a.jsx)("div",{className:"badge bg-white text-black",children:s})]}),(0,a.jsx)("div",{className:"text-ellipsis max-w-[50vw] max-h-[10vh] overflow-hidden",style:{display:"-webkit-flex"},children:n}),(0,a.jsx)("div",{className:"card-actions justify-end",children:c.map(e=>(0,a.jsx)("div",{onClick:t=>{t.stopPropagation(),r&&r(e)},className:"badge badge-outline ".concat((null==l?void 0:l.tag)&&e.toLowerCase().includes(l.tag.toLowerCase())&&""!==l.tag?"border-secondary text-secondary":""),children:e},e))})]})})},l=n(6955),r=e=>{let{items:t=[],page:n={pageLen:10},onChangePage:r,onSelect:c}=e,{searchFilter:o,searchKeyword:d,setSearchFilter:u,setSearchKeyword:m}=(0,l.Z)(),[h,g]=(0,s.useState)(0),x=Math.ceil(t.length/n.pageLen),b=t.slice(h*n.pageLen,(h+1)*n.pageLen);return(0,s.useEffect)(()=>{r&&r(h)},[r,h]),(0,a.jsxs)("div",{children:[(0,a.jsx)("ul",{className:"list-none p-0",style:{display:"ruby"},children:b.map((e,t)=>(0,a.jsx)("li",{className:"inline-block",children:(0,s.createElement)(i,{...e,onClickTag:e=>{u("tag"),m(e)},key:t.toString(),emphatic:{tag:"tag"===o?d:void 0,title:"title"===o?d:void 0}})},t.toString()))}),(0,a.jsx)("div",{className:"flex justify-center mt-4",children:(0,a.jsxs)("div",{className:"join",children:[h>3&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{onClick:()=>g(0),className:"join-item btn btn-lg",children:"첫페이지"}),(0,a.jsx)("span",{className:"mx-2",children:"..."})]}),Array(x).fill(null).map((e,t)=>t).filter(e=>h-3<=e&&e<=h+3).map(e=>(0,a.jsx)("button",{onClick:()=>g(e),className:"join-item btn btn-lg ".concat(e===h?"btn-active":""),children:e+1},e)),h<x-4&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mx-2",children:"..."}),(0,a.jsx)("button",{onClick:()=>g(x-1),className:"join-item btn btn-lg",children:"끝페이지"})]})]})})]})},c=e=>{let{className:t,children:n,...s}=e;return(0,a.jsx)("button",{...s,className:"btn btn-outline ".concat(null!=t?t:""),children:n})},o=n(1163),d=n(6477),u=!0;function m(e){let{posts:t}=e,{searchKeyword:n,searchFilter:s}=(0,l.Z)(),i=(0,o.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{page:{pageLen:8},items:t.filter(e=>""===n||("tag"===s?e.meta.tags.map(e=>e.toLowerCase()).includes(n.toLowerCase()):"title"!==s||e.meta.title.toLowerCase().includes(n.toLowerCase()))).map(e=>{var t;return{title:e.meta.title,children:e.meta.desc,tags:null!==(t=e.meta.tags)&&void 0!==t?t:[],onClick:()=>{i.push(d.D.POST(e.route))},footer:(0,a.jsx)(c,{onClick:()=>{},children:"보러가기"}),date:e.meta.date}})})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);