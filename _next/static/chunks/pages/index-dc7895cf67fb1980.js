(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(42635)}])},42635:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return o},default:function(){return m}});var n=a(85893),l=a(67294),s=e=>{let{title:t,children:a,date:l,onClick:s,emphatic:i,onClickTag:c,tags:r=[]}=e;return(0,n.jsx)("div",{className:"indicator",children:(0,n.jsxs)("div",{onClick:s,className:"card m-4 max-w-[70vw] cursor-pointer border border-slate-600 transition-transform duration-300 hover:scale-105",children:[(0,n.jsx)("span",{className:"badge indicator-item badge-neutral right-8",children:l}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h2",{className:"card-title flex-col",children:(0,n.jsx)("div",{children:t.split(" ").map(e=>(0,n.jsx)("span",{className:"text-".concat((null==i?void 0:i.title)&&e.includes(null==i?void 0:i.title)?"red":"blue","-500 mr-2"),children:e},e))})}),(0,n.jsx)("div",{className:"max-h-[10vh] max-w-[50vw] overflow-hidden text-ellipsis",style:{display:"-webkit-flex"},children:a}),(0,n.jsx)("div",{className:"card-actions justify-end",children:r.map(e=>(0,n.jsx)("div",{onClick:t=>{t.stopPropagation(),c&&c(e)},className:"badge ".concat((null==i?void 0:i.tag)&&e.toLowerCase().includes(i.tag.toLowerCase())&&""!==i.tag?"badge-neutral":""),children:e},e))})]})]})})},i=a(54085),c=e=>{let{items:t=[],pageInfo:a={},onChangePage:c}=e,{pageLen:r=6,pageNumber:d=1}=a,{searchFilter:o,searchKeyword:m,setSearchFilter:u,setSearchKeyword:h}=(0,i.Z)(),[x,j]=(0,l.useState)(d),g=Math.ceil(t.length/r),N=t.slice(x*r,(x+1)*r);return(0,l.useEffect)(()=>{c&&c(x)},[c,x]),(0,l.useEffect)(()=>{j(d-1)},[d]),(0,n.jsxs)("div",{className:"",children:[0===N.length?(0,n.jsx)("div",{className:"grid h-[85vh] place-content-center text-6xl font-black text-black",children:"No Data"}):(0,n.jsx)("ul",{className:"list-none p-0",style:{display:"ruby"},children:N.map((e,t)=>(0,n.jsx)("li",{className:"inline-block",children:(0,l.createElement)(s,{...e,onClickTag:e=>{u("tag"),h(e)},key:t.toString(),emphatic:{tag:"tag"===o?m:void 0,title:"title"===o?m:void 0}})},t.toString()))}),(0,n.jsx)("div",{className:"mt-4 flex justify-center",children:(0,n.jsxs)("div",{className:"join",children:[x>3&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>j(0),className:"btn join-item btn-lg",children:"첫페이지"}),(0,n.jsx)("span",{className:"mx-2",children:"..."})]}),Array(g).fill(null).map((e,t)=>t).filter(e=>x-3<=e&&e<=x+3).map(e=>(0,n.jsx)("button",{onClick:()=>{j(e)},className:"btn join-item btn-lg ".concat(e===x?"btn-active":""),children:e+1},e)),x<g-4&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"mx-2",children:"..."}),(0,n.jsx)("button",{onClick:()=>j(g-1),className:"btn join-item btn-lg",children:"끝페이지"})]})]})})]})},r=a(11163),d=a(56477),o=!0;function m(e){let{posts:t}=e,{searchKeyword:a,searchFilter:l}=(0,i.Z)(e=>{let{searchFilter:t,searchKeyword:a}=e;return{searchFilter:t,searchKeyword:a}}),s=(0,r.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c,{items:t.filter(e=>""===a||({tag:e.meta.tags.map(e=>e.toLowerCase()).reduce((e,t)=>e||t.includes(a.toLowerCase()),!1),title:e.meta.title.toLowerCase().includes(a.toLowerCase())})[l]).map(e=>{var t;return{title:e.meta.title,children:e.meta.desc,tags:null!==(t=e.meta.tags)&&void 0!==t?t:[],onClick:()=>{s.push(d.D.POST(e.route))},date:e.meta.date}})})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);