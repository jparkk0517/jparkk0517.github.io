(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",s=0,i=-1,l=0,o=0;o<=e.length;++o){if(o<e.length)n=e.charCodeAt(o);else if(47===n)break;else n=47;if(47===n){if(i===o-1||1===l);else if(i!==o-1&&2===l){if(r.length<2||2!==s||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",s=0):s=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),i=o,l=0;continue}}else if(2===r.length||1===r.length){r="",s=0,i=o,l=0;continue}}t&&(r.length>0?r+="/..":r="..",s=2)}else r.length>0?r+="/"+e.slice(i+1,o):r=e.slice(i+1,o),s=o-i-1;i=o,l=0}else 46===n&&-1!==l?++l:l=-1}return r}var r={resolve:function(){for(var e,r,s="",i=!1,l=arguments.length-1;l>=-1&&!i;l--)l>=0?r=arguments[l]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(s=r+"/"+s,i=47===r.charCodeAt(0));return(s=n(s,!i),i)?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),s=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&s&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var s=arguments[n];t(s),s.length>0&&(void 0===e?e=s:e+="/"+s)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var s=1;s<e.length&&47===e.charCodeAt(s);++s);for(var i=e.length,l=i-s,o=1;o<n.length&&47===n.charCodeAt(o);++o);for(var a=n.length-o,c=l<a?l:a,h=-1,p=0;p<=c;++p){if(p===c){if(a>c){if(47===n.charCodeAt(o+p))return n.slice(o+p+1);if(0===p)return n.slice(o+p)}else l>c&&(47===e.charCodeAt(s+p)?h=p:0===p&&(h=0));break}var u=e.charCodeAt(s+p);if(u!==n.charCodeAt(o+p))break;47===u&&(h=p)}var g="";for(p=s+h+1;p<=i;++p)(p===i||47===e.charCodeAt(p))&&(0===g.length?g+="..":g+="/..");return g.length>0?g+n.slice(o+h):(o+=h,47===n.charCodeAt(o)&&++o,n.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,s=-1,i=!0,l=e.length-1;l>=1;--l)if(47===(n=e.charCodeAt(l))){if(!i){s=l;break}}else i=!1;return -1===s?r?"/":".":r&&1===s?"//":e.slice(0,s)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,s=0,i=-1,l=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var o=n.length-1,a=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!l){s=r+1;break}}else -1===a&&(l=!1,a=r+1),o>=0&&(c===n.charCodeAt(o)?-1==--o&&(i=r):(o=-1,i=a))}return s===i?i=a:-1===i&&(i=e.length),e.slice(s,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!l){s=r+1;break}}else -1===i&&(l=!1,i=r+1);return -1===i?"":e.slice(s,i)},extname:function(e){t(e);for(var n=-1,r=0,s=-1,i=!0,l=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47===a){if(!i){r=o+1;break}continue}-1===s&&(i=!1,s=o+1),46===a?-1===n?n=o:1!==l&&(l=1):-1!==n&&(l=-1)}return -1===n||-1===s||0===l||1===l&&n===s-1&&n===r+1?"":e.slice(n,s)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var s=e.charCodeAt(0),i=47===s;i?(r.root="/",n=1):n=0;for(var l=-1,o=0,a=-1,c=!0,h=e.length-1,p=0;h>=n;--h){if(47===(s=e.charCodeAt(h))){if(!c){o=h+1;break}continue}-1===a&&(c=!1,a=h+1),46===s?-1===l?l=h:1!==p&&(p=1):-1!==l&&(p=-1)}return -1===l||-1===a||0===p||1===p&&l===a-1&&l===o+1?-1!==a&&(0===o&&i?r.base=r.name=e.slice(1,a):r.base=r.name=e.slice(o,a)):(0===o&&i?(r.name=e.slice(1,l),r.base=e.slice(1,a)):(r.name=e.slice(o,l),r.base=e.slice(o,a)),r.ext=e.slice(l,a)),o>0?r.dir=e.slice(0,o-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}},l=!0;try{t[e](i,i.exports,r),l=!1}finally{l&&delete n[e]}return i.exports}r.ab="//";var s=r(114);e.exports=s}()},9008:function(e,t,n){e.exports=n(3709)},7441:function(e,t,n){"use strict";function r(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}n.d(t,{TU:function(){return ep}});let s=r(),i=/[&<>"']/,l=RegExp(i.source,"g"),o=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,a=RegExp(o.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>c[e];function p(e,t){if(t){if(i.test(e))return e.replace(l,h)}else if(o.test(e))return e.replace(a,h);return e}let u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,g=/(^|[^\[])\^/g;function k(e,t){let n="string"==typeof e?e:e.source;t=t||"";let r={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(g,"$1"),n=n.replace(e,s),r},getRegex:()=>new RegExp(n,t)};return r}function f(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return null}return e}let d={exec:()=>null};function x(e,t){let n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("")}for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function b(e,t,n){let r=e.length;if(0===r)return"";let s=0;for(;s<r;){let i=e.charAt(r-s-1);if(i!==t||n){if(i!==t&&n)s++;else break}else s++}return e.slice(0,r-s)}function m(e,t,n,r){let s=t.href,i=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;let e={type:"link",raw:n,href:s,title:i,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:s,title:i,text:p(l)}}class w{options;rules;lexer;constructor(e){this.options=e||s}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:b(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=function(e,t){let n=e.match(/^(\s+)(?:```)/);if(null===n)return t;let r=n[1];return t.split("\n").map(e=>{let t=e.match(/^\s+/);if(null===t)return e;let[n]=t;return n.length>=r.length?e.slice(r.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=b(e,"#");this.options.pedantic?e=t.trim():(!t||/ $/.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=b(t[0].replace(/^ *>[ \t]?/gm,""),"\n"),n=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:"blockquote",raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),l="",o="",a=!1;for(;e;){let n,r=!1;if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),h=e.split("\n",1)[0],p=0;this.options.pedantic?(p=2,o=c.trimStart()):(p=(p=t[2].search(/[^ ]/))>4?1:p,o=c.slice(p),p+=t[1].length);let u=!1;if(!c&&/^ *$/.test(h)&&(l+=h+"\n",e=e.substring(h.length+1),r=!0),!r){let t=RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),n=RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),r=RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),s=RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){let i=e.split("\n",1)[0];if(h=i,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),r.test(h)||s.test(h)||t.test(h)||n.test(e))break;if(h.search(/[^ ]/)>=p||!h.trim())o+="\n"+h.slice(p);else{if(u||c.search(/[^ ]/)>=4||r.test(c)||s.test(c)||n.test(c))break;o+="\n"+h}u||h.trim()||(u=!0),l+=i+"\n",e=e.substring(i.length+1),c=h.slice(p)}}!s.loose&&(a?s.loose=!0:/\n *\n *$/.test(l)&&(a=!0));let g=null;this.options.gfm&&(g=/^\[[ xX]\] /.exec(o))&&(n="[ ] "!==g[0],o=o.replace(/^\[[ xX]\] +/,"")),s.items.push({type:"list_item",raw:l,task:!!g,checked:n,loose:!1,text:o,tokens:[]}),s.raw+=l}s.items[s.items.length-1].raw=l.trimEnd(),s.items[s.items.length-1].text=o.trimEnd(),s.raw=s.raw.trimEnd();for(let e=0;e<s.items.length;e++)if(this.lexer.state.top=!1,s.items[e].tokens=this.lexer.blockTokens(s.items[e].text,[]),!s.loose){let t=s.items[e].tokens.filter(e=>"space"===e.type),n=t.length>0&&t.some(e=>/\n.*\n/.test(e.raw));s.loose=n}if(s.loose)for(let e=0;e<s.items.length;e++)s.items[e].loose=!0;return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=x(t[1]),r=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)/^ *-+: *$/.test(e)?i.align.push("right"):/^ *:-+: *$/.test(e)?i.align.push("center"):/^ *:-+ *$/.test(e)?i.align.push("left"):i.align.push(null);for(let e of n)i.header.push({text:e,tokens:this.lexer.inline(e)});for(let e of s)i.rows.push(x(e,i.header.length).map(e=>({text:e,tokens:this.lexer.inline(e)})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=b(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(t[1]))return -1;let n=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return -1}(t[2],"()");if(e>-1){let n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),m(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(/\s+/g," ").toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return m(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,s,i,l=n,o=0,a="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=a.exec(t));){if(!(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(i=[...s].length,r[3]||r[4]){l+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){o+=i;continue}if((l-=i)>0)continue;i=Math.min(i,i+l+o);let t=[...r[0]][0].length,a=e.slice(0,n+r.index+t+i);if(Math.min(n,i)%2){let e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}let c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," "),n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return n="@"===t[2]?"mailto:"+(e=p(t[1])):e=p(t[1]),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])n="mailto:"+(e=p(t[0]));else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);e=p(t[0]),n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e;return e=this.lexer.state.inRawBlock?t[0]:p(t[0]),{type:"text",raw:t[0],text:e}}}}let y=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$=/(?:[*+-]|\d{1,9}[.)])/,z=k(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,$).getRegex(),A=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,T=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",T).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),R=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$).getRegex(),v="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",I=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,C=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",I).replace("tag",v).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),S=k(A).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),E={blockquote:k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",S).getRegex(),code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,def:_,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:y,html:C,lheading:z,list:R,newline:/^(?: *(?:\n|$))+/,paragraph:S,table:d,text:/^[^\n]+/},Z=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),q={...E,table:Z,paragraph:k(A).replace("hr",y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Z).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex()},L={...E,html:k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",I).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:d,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(A).replace("hr",y).replace("heading"," *#{1,6} *[^\n]").replace("lheading",z).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},P=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,O=/^( {2,}|\\)\n(?!\s*$)/,Q="\\p{P}$+<=>`^|~",B=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Q).getRegex(),j=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Q).getRegex(),M=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Q).getRegex(),D=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Q).getRegex(),H=k(/\\([punct])/,"gu").replace(/punct/g,Q).getRegex(),N=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),U=k(I).replace("(?:-->|$)","-->").getRegex(),X=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",U).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),F=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,J=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",F).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),G=k(/^!?\[(label)\]\[(ref)\]/).replace("label",F).replace("ref",T).getRegex(),K=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",T).getRegex(),V=k("reflink|nolink(?!\\()","g").replace("reflink",G).replace("nolink",K).getRegex(),W={_backpedal:d,anyPunctuation:H,autolink:N,blockSkip:/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,br:O,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:d,emStrongLDelim:j,emStrongRDelimAst:M,emStrongRDelimUnd:D,escape:P,link:J,nolink:K,punctuation:B,reflink:G,reflinkSearch:V,tag:X,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:d},Y={...W,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",F).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F).getRegex()},ee={...W,escape:k(P).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},et={...ee,br:k(O).replace("{2,}","*").getRegex(),text:k(ee.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},en={normal:E,gfm:q,pedantic:L},er={normal:W,gfm:ee,breaks:et,pedantic:Y};class es{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:en.normal,inline:er.normal};this.options.pedantic?(t.block=en.pedantic,t.inline=er.pedantic):this.options.gfm&&(t.block=en.gfm,this.options.breaks?t.inline=er.breaks:t.inline=er.gfm),this.tokenizer.rules=t}static get rules(){return{block:en,inline:er}}static lex(e,t){return new es(t).lex(e)}static lexInline(e,t){return new es(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){let n,r,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if((n=this.tokenizer.fences(e))||(n=this.tokenizer.heading(e))||(n=this.tokenizer.hr(e))||(n=this.tokenizer.blockquote(e))||(n=this.tokenizer.list(e))||(n=this.tokenizer.html(e))){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&("paragraph"===r.type||"text"===r.type)?(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if((n=this.tokenizer.table(e))||(n=this.tokenizer.lheading(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t,n=1/0,r=e.slice(1);this.options.extensions.startBlock.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(s=e.substring(0,n+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,s,i,l,o;let a=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(a));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(a));)a=a.slice(0,i.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(o=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if((n=this.tokenizer.emStrong(e,a,o))||(n=this.tokenizer.codespan(e))||(n=this.tokenizer.br(e))||(n=this.tokenizer.del(e))||(n=this.tokenizer.autolink(e))||!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let t,n=1/0,r=e.slice(1);this.options.extensions.startInline.forEach(e=>{"number"==typeof(t=e.call({lexer:this},r))&&t>=0&&(n=Math.min(n,t))}),n<1/0&&n>=0&&(s=e.substring(0,n+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(o=n.raw.slice(-1)),l=!0,(r=t[t.length-1])&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}}class ei{options;constructor(e){this.options=e||s}code(e,t,n){let r=(t||"").match(/^\S*/)?.[0];return(e=e.replace(/\n$/,"")+"\n",r)?'<pre><code class="language-'+p(r)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return"<hr>\n"}list(e,t,n){let r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){let r=f(e);if(null===r)return n;let s='<a href="'+(e=r)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"}image(e,t,n){let r=f(e);if(null===r)return n;e=r;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">"}text(e){return e}}class el{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class eo{options;renderer;textRenderer;constructor(e){this.options=e||s,this.options.renderer=this.options.renderer||new ei,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new el}static parse(e,t){return new eo(t).parse(e)}static parseInline(e,t){return new eo(t).parseInline(e)}parse(e,t=!0){let n="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=e||"";continue}}switch(s.type){case"space":continue;case"hr":n+=this.renderer.hr();continue;case"heading":n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,this.parseInline(s.tokens,this.textRenderer).replace(u,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""));continue;case"code":n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue;case"table":{let e="",t="";for(let e=0;e<s.header.length;e++)t+=this.renderer.tablecell(this.parseInline(s.header[e].tokens),{header:!0,align:s.align[e]});e+=this.renderer.tablerow(t);let r="";for(let e=0;e<s.rows.length;e++){let n=s.rows[e];t="";for(let e=0;e<n.length;e++)t+=this.renderer.tablecell(this.parseInline(n[e].tokens),{header:!1,align:s.align[e]});r+=this.renderer.tablerow(t)}n+=this.renderer.table(e,r);continue}case"blockquote":{let e=this.parse(s.tokens);n+=this.renderer.blockquote(e);continue}case"list":{let e=s.ordered,t=s.start,r=s.loose,i="";for(let e=0;e<s.items.length;e++){let t=s.items[e],n=t.checked,l=t.task,o="";if(t.task){let e=this.renderer.checkbox(!!n);r?t.tokens.length>0&&"paragraph"===t.tokens[0].type?(t.tokens[0].text=e+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=e+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",text:e+" "}):o+=e+" "}o+=this.parse(t.tokens,r),i+=this.renderer.listitem(o,l,!!n)}n+=this.renderer.list(i,e,t);continue}case"html":n+=this.renderer.html(s.text,s.block);continue;case"paragraph":n+=this.renderer.paragraph(this.parseInline(s.tokens));continue;case"text":{let i=s,l=i.tokens?this.parseInline(i.tokens):i.text;for(;r+1<e.length&&"text"===e[r+1].type;)l+="\n"+((i=e[++r]).tokens?this.parseInline(i.tokens):i.text);n+=t?this.renderer.paragraph(l):l;continue}default:{let e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=e||"";continue}}switch(s.type){case"escape":case"text":n+=t.text(s.text);break;case"html":n+=t.html(s.text);break;case"link":n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":n+=t.image(s.href,s.title,s.text);break;case"strong":n+=t.strong(this.parseInline(s.tokens,t));break;case"em":n+=t.em(this.parseInline(s.tokens,t));break;case"codespan":n+=t.codespan(s.text);break;case"br":n+=t.br();break;case"del":n+=t.del(this.parseInline(s.tokens,t));break;default:{let e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return n}}class ea{options;constructor(e){this.options=e||s}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}class ec{defaults=r();options=this.setOptions;parse=this.#e(es.lex,eo.parse);parseInline=this.#e(es.lexInline,eo.parseInline);Parser=eo;Renderer=ei;TextRenderer=el;Lexer=es;Tokenizer=w;Hooks=ea;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)n=n.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)n=n.concat(this.walkTokens(r.tokens,t));break;case"list":n=n.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let s=e[r].flat(1/0);n=n.concat(this.walkTokens(s,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new ei(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if("options"===n)continue;let r=e.renderer[n],s=t[n];t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new w(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;let r=e.tokenizer[n],s=t[n];t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ea;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if("options"===n)continue;let r=e.hooks[n],s=t[n];ea.passThroughHooks.has(n)?t[n]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then(e=>s.call(t,e));let n=r.call(t,e);return s.call(t,n)}:t[n]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=s.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return es.lex(e,t??this.defaults)}parser(e,t){return eo.parse(e,t??this.defaults)}#e(e,t){return(n,r)=>{let s={...r},i={...this.defaults,...s};!0===this.defaults.async&&!1===s.async&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let l=this.#t(!!i.silent,!!i.async);if(null==n)return l(Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return l(Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(t=>e(t,i)).then(e=>i.hooks?i.hooks.processAllTokens(e):e).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>t(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let r=e(n,i);i.hooks&&(r=i.hooks.processAllTokens(r)),i.walkTokens&&this.walkTokens(r,i.walkTokens);let s=t(r,i);return i.hooks&&(s=i.hooks.postprocess(s)),s}catch(e){return l(e)}}}#t(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+p(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}let eh=new ec;function ep(e,t){return eh.parse(e,t)}ep.options=ep.setOptions=function(e){return eh.setOptions(e),ep.defaults=eh.defaults,s=ep.defaults,ep},ep.getDefaults=r,ep.defaults=s,ep.use=function(...e){return eh.use(...e),ep.defaults=eh.defaults,s=ep.defaults,ep},ep.walkTokens=function(e,t){return eh.walkTokens(e,t)},ep.parseInline=eh.parseInline,ep.Parser=eo,ep.parser=eo.parse,ep.Renderer=ei,ep.TextRenderer=el,ep.Lexer=es,ep.lexer=es.lex,ep.Tokenizer=w,ep.Hooks=ea,ep.parse=ep,ep.options,ep.setOptions,ep.use,ep.walkTokens,ep.parseInline,eo.parse,es.lex}}]);