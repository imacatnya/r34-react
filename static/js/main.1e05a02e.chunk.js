(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[1],{10:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"q",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"n",(function(){return a})),e.d(n,"r",(function(){return s})),e.d(n,"t",(function(){return u})),e.d(n,"s",(function(){return d})),e.d(n,"m",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"h",(function(){return f})),e.d(n,"o",(function(){return h})),e.d(n,"u",(function(){return p})),e.d(n,"v",(function(){return g})),e.d(n,"l",(function(){return j})),e.d(n,"b",(function(){return m})),e.d(n,"i",(function(){return v})),e.d(n,"j",(function(){return x})),e.d(n,"g",(function(){return y})),e.d(n,"f",(function(){return _})),e.d(n,"k",(function(){return S})),e.d(n,"c",(function(){return E})),e.d(n,"p",(function(){return w}));var r=e(19);const c=t=>t.tags.active,o=t=>t.results.posts,i=t=>t.results.count,a=t=>t.results.pageNumber,s=t=>t.preferences,u=t=>t.preferences.resultsLayout,d=t=>t.preferences.resultsLayout,l=t=>t.preferences.originals,b=t=>t.preferences.cookies,f=t=>t.reader.isEnabled,h=t=>t.preferences.pageSize,p=t=>t.preferences.tagSuggestionsCount,g=t=>t.preferences.useCorsProxy,j=Object(r.a)(c,(t=>Object.keys(t).length)),m=Object(r.a)((t=>t.tags.aliases),(t=>Object.values(t).flat())),O=(Object(r.a)(o,(t=>0!==t.length)),Object(r.a)(o,i,((t,n)=>t.length===n))),v=Object(r.a)(O,(t=>!t)),x=Object(r.a)(i,h,((t,n)=>Math.ceil(t/n)-1)),y=Object(r.a)(o,(t=>t.reader.postId),((t,n)=>t.find((t=>t.id===n)))),_=Object(r.a)(o,y,((t,n)=>n?t.indexOf(n):-1)),S=Object(r.a)((t=>t.preferences.rated),(t=>t.preferences.ratedThreshold),((t,n)=>t?n:0)),E=t=>n=>n.tags.aliases[t],w=t=>n=>n.results.posts.find((n=>n.id===t))},20:function(t,n,e){"use strict";e.d(n,"e",(function(){return T})),e.d(n,"p",(function(){return C})),e.d(n,"s",(function(){return I})),e.d(n,"g",(function(){return A})),e.d(n,"i",(function(){return N})),e.d(n,"n",(function(){return U})),e.d(n,"l",(function(){return P})),e.d(n,"m",(function(){return L})),e.d(n,"k",(function(){return D})),e.d(n,"h",(function(){return G})),e.d(n,"o",(function(){return B})),e.d(n,"c",(function(){return z})),e.d(n,"d",(function(){return H})),e.d(n,"j",(function(){return F})),e.d(n,"r",(function(){return M})),e.d(n,"a",(function(){return V})),e.d(n,"b",(function(){return W})),e.d(n,"f",(function(){return X})),e.d(n,"q",(function(){return K}));var r,c,o,i,a,s,u,d,l,b,f,h,p,g,j,m,O,v,x,y,_,S,E,w=e(4),k=e(2),R=e(29);function T({theme:t}){return Object(k.c)(r||(r=Object(w.a)(["\n    border-color: ",";\n    border-width: ",";\n    ","\n    border-style: solid;\n  "])),t.colors.accentColor,t.dimensions.borderWidth,V({theme:t}))}function C({theme:t}){return Object(k.c)(c||(c=Object(w.a)(["\n    background-color: ",";\n    ","\n  "])),t.colors.layerBg,W({theme:t}))}function I({theme:t}){return Object(k.c)(o||(o=Object(w.a)(["\n    color: ",";\n    background: ",";\n\n    :hover {\n      background-color: ",";\n      color: ",";\n    }\n\n    :active,\n    :focus {\n      color: ",";\n      border-color: ",";\n    }\n  "])),t.colors.accentColor,t.colors.backgroundColor,t.colors.accentColor,t.colors.backgroundColor,t.colors.backgroundColor2,t.colors.backgroundColor2)}function A(){return Object(k.c)(i||(i=Object(w.a)(["\n    display: flex;\n    flex-direction: column;\n  "])))}function N({theme:t}){return Object(k.c)(a||(a=Object(w.a)(["\n    display: flex;\n    flex-direction: column;\n    ",";\n  "])),G(t.dimensions.gutter))}function U({theme:t}){return Object(k.c)(s||(s=Object(w.a)(["\n    display: grid;\n    ","\n  "])),L(t.dimensions.gutter))}function P({theme:t}){return Object(k.c)(u||(u=Object(w.a)(["\n    display: flex;\n    align-items: center;\n    ",";\n  "])),D(t.dimensions.gutter))}function L(t){return R.c?Object(k.c)(d||(d=Object(w.a)(["\n        gap: ",";\n      "])),t):Object(k.c)(l||(l=Object(w.a)(["\n        > :not(:last-child) {\n          margin-right: ",";\n          margin-bottom: ",";\n        }\n      "])),t,t)}function D(t){return R.b?Object(k.c)(b||(b=Object(w.a)(["\n        gap: ",";\n      "])),t):Object(k.c)(f||(f=Object(w.a)(["\n        > :not(:last-child) {\n          margin-right: ",";\n        }\n      "])),t)}function G(t){return R.b?Object(k.c)(h||(h=Object(w.a)(["\n        gap: ",";\n      "])),t):Object(k.c)(p||(p=Object(w.a)(["\n        > :not(:last-child) {\n          margin-bottom: ",";\n        }\n      "])),t)}function B({theme:t}){return Object(k.c)(g||(g=Object(w.a)(["\n    ",";\n    padding: ",";\n  "])),L(t.dimensions.gutter),t.dimensions.gutter)}function z({theme:t}){return Object(k.c)(j||(j=Object(w.a)(["\n    width: 100%;\n    max-width: ",";\n    margin-left: auto;\n    margin-right: auto;\n  "])),t.dimensions.bodyWidth)}function H({theme:t}){return Object(k.c)(m||(m=Object(w.a)(["\n    height: ",";\n    padding: 0 ",";\n  "])),t.dimensions.blockHeight,t.dimensions.gutter)}function F(){return Object(k.c)(O||(O=Object(w.a)(["\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: contain;\n  "])))}function M({width:t,height:n}){return t&&n?R.a?Object(k.c)(v||(v=Object(w.a)(["\n        aspect-ratio: "," / ",";\n      "])),t,n):Object(k.c)(x||(x=Object(w.a)(["\n        max-width: 100%;\n        height: auto;\n      "]))):""}function V({theme:t}){return Object(k.c)(y||(y=Object(w.a)(["\n    border-radius: ",";\n  "])),t.dimensions.borderRadius)}function W({theme:t}){return Object(k.c)(_||(_=Object(w.a)(["\n    box-shadow: 0 0 "," ",";\n  "])),t.shadow.radius,t.shadow.color)}function X({theme:t}){return Object(k.c)(S||(S=Object(w.a)(["\n    filter: drop-shadow(0 0 "," ",");\n  "])),t.shadow.radius,t.shadow.color)}function K(){return Object(k.c)(E||(E=Object(w.a)(["\n    ","\n    ","\n    grid-area: 1/1/2/2;\n    z-index: 1;\n  "])),V,W)}},28:function(t,n,e){"use strict";(function(t){e.d(n,"c",(function(){return c})),e.d(n,"f",(function(){return o})),e.d(n,"h",(function(){return i})),e.d(n,"g",(function(){return a})),e.d(n,"i",(function(){return s})),e.d(n,"a",(function(){return u})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return l})),e.d(n,"b",(function(){return b}));var r=e(8);const c=(t,n)=>t===r.d.VIDEO?r.a.VIDEO:n.includes(".gif")?r.a.GIF:r.a.PICTURE;const o=(t,n)=>t.reduce(((t,e)=>(t[e[n]]=e,t)),{});function i(t){return Object.values(t).map((t=>"".concat(t.modifier).concat(t.name))).sort()}function a(t){try{return new URL(t)}catch(n){return}}function s(t){return Number(t.split(".").join(""))}function u(t){const n=t.split("/").pop()||"";fetch(t,{headers:new Headers({Origin:window.location.origin}),mode:"cors"}).then((t=>t.blob())).then((t=>{var e=document.createElement("a");e.download=n,e.href=window.URL.createObjectURL(t),document.body.appendChild(e),e.click(),e.remove()})).catch((t=>console.error(t)))}function d(){var n,e;return(null===(n=t)||void 0===n||null===(e=Object({NODE_ENV:"production",PUBLIC_URL:"/r34-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"2.5.1"}))||void 0===e?void 0:e.REACT_APP_VERSION)?"2.5.1":"unknown"}function l(){const t=d();return"unknown"===t?"Latest Release":"Version ".concat(t)}function b(t,n,e,r){const c=t?e:r;return n?c:new URL(c).searchParams.get("url")||""}}).call(this,e(46))},29:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return i}));const r=(()=>{var t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);var n=1===t.scrollHeight;return t.parentNode.removeChild(t),n})(),c="gap"in document.body.style,o="aspect-ratio"in document.body.style,i="object-fit"in document.body.style},30:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(8);class c{constructor(t,n=[],e=null,c=r.b.PLUS){this.name=void 0,this.count=void 0,this.types=void 0,this.modifier=void 0,this.name=t,this.types=n,this.count=e,this.modifier=c}}},31:function(t,n,e){"use strict";var r=e(18),c=e.n(r),o=e(26),i=e(8),a=e(50);const s=[{name:"source:*patreon*",posts:12711,types:[i.h.SOURCE]},{name:"source:*twitter*",posts:99927,types:[i.h.SOURCE]}],u=[{name:"rating:safe",posts:14293,types:[i.h.RATING]},{name:"rating:questionable",posts:219552,types:[i.h.RATING]},{name:"rating:explicit",posts:3821144,types:[i.h.RATING]}];class d{constructor(){this.activeApi=d.apiUrl2,this.activeApi=d.apiUrl1,fetch(this.activeApi).catch((()=>this.activeApi=d.apiUrl2))}getTags(t,n=d.defaultPageSize){var e=this;return Object(o.a)(c.a.mark((function r(){var o,i,a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e.activeApi,"/tags?limit=").concat(n,"&name=").concat(t,"*&order_by=posts"));case 2:return r.next=4,r.sent.json();case 4:if(o=r.sent,!t.startsWith("rating:")){r.next=8;break}return i=u.filter((n=>n.name.includes(t.replace("rating:","")))),r.abrupt("return",[...o,...i]);case 8:if(!t.startsWith("source:")){r.next=11;break}return a=s.filter((n=>n.name.includes(t.replace("source:","")))),r.abrupt("return",[...o,...a]);case 11:return r.abrupt("return",o);case 12:case"end":return r.stop()}}),r)})))()}getPosts(t,n=d.defaultPageSize,e=0,r=0){var i=this;return Object(o.a)(c.a.mark((function o(){var s;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(i.buildPostUrl(e,t,r,n));case 2:return c.next=4,c.sent.json();case 4:return s=c.sent,c.abrupt("return",{posts:s.posts.map(a.a),count:Number(s.count)});case 6:case"end":return c.stop()}}),o)})))()}getAliases(t){var n=this;return Object(o.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(n.activeApi,"/alias/").concat(encodeURIComponent(t)));case 2:return e.next=4,e.sent.json();case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()}buildPostUrl(t,n,e,r=d.defaultPageSize){const c=Object.values(n),o=c.filter((t=>t.modifier!==i.b.OR)),a=c.filter((t=>t.modifier===i.b.OR));let s="".concat(this.activeApi,"/posts?pid=").concat(t,"&limit=").concat(r),u=o.map((t=>"".concat("-"===t.modifier?"-":"").concat(encodeURIComponent(t.name)))).join(" + ");return a.length>0&&(u+="+ ( "+a.map((t=>encodeURIComponent(t.name))).join(" ~ ")+" )"),u&&(s+="&tags=".concat(u)),e>0&&(s+="+".concat(encodeURIComponent("score:>="+e))),s}}d.defaultPageSize=20,d.apiUrl1="https://r34-json.herokuapp.com",d.apiUrl2="https://r34-api-clone.herokuapp.com",n.a=new d},33:function(t,n,e){"use strict";e.d(n,"c",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"b",(function(){return p})),e.d(n,"a",(function(){return g})),e.d(n,"d",(function(){return j}));var r,c,o,i,a,s,u=e(4),d=e(2),l=e(20);const b=d.d.button((({theme:t})=>Object(d.c)(r||(r=Object(u.a)(["\n    height: ",";\n    padding: 0 ",";\n    font-size: ",";\n    ","\n\n    transition: all "," ease-out;\n  "])),t.dimensions.blockHeight,t.dimensions.bigSpacing,t.fontSizes.content,Object(l.e)({theme:t}),t.timings.longTransitionTime))),f=d.d.button((({theme:t})=>Object(d.c)(c||(c=Object(u.a)(["\n    background-color: transparent;\n    border: none;\n    padding: ",";\n    ","\n\n    svg {\n      transition: all "," ease-out;\n    }\n\n    :active {\n      svg {\n        transform: scale(1.1);\n      }\n    }\n  "])),t.dimensions.gutter,Object(l.f)({theme:t}),t.timings.transitionTime))),h=Object(d.d)(b)(o||(o=Object(u.a)(["\n  ","\n"])),l.s),p=Object(d.d)(h)(i||(i=Object(u.a)(["\n  width: 100%;\n\n  :active {\n    transform: scaleX(1.03) scaleY(1.1);\n  }\n"]))),g=Object(d.d)(h)((({theme:t})=>Object(d.c)(a||(a=Object(u.a)(["\n    border-radius: 0 "," "," 0;\n  "])),t.dimensions.borderRadius,t.dimensions.borderRadius))),j=Object(d.d)(b)((({theme:t})=>Object(d.c)(s||(s=Object(u.a)(["\n    background-color: transparent;\n    min-width: 48px;\n    font-weight: bold;\n\n    ","\n    border-right-width: 0;\n    border-radius: "," 0 0 ",";\n  "])),Object(l.e)({theme:t}),t.dimensions.borderRadius,t.dimensions.borderRadius)))},43:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0),c=e(24);function o(t){const n=Object(c.b)();return Object(r.useCallback)((()=>n(t())),[t,n])}},45:function(t,n,e){"use strict";var r,c=e(4),o=e(2),i=e(20);const a=o.d.img(r||(r=Object(c.a)(["\n  ","\n  ","\n"])),i.j,i.r);n.a=a},47:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r,c=e(4),o=(e(0),e(2)),i=e(3);const a=o.d.svg(r||(r=Object(c.a)(["\n  height: 32px;\n  padding: 8px;\n"])));function s(){return Object(i.jsxs)(a,{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 50 20","enable-background":"new 0 0 0 0",xmlSpace:"preserve",children:[Object(i.jsx)("circle",{fill:"#fff",stroke:"none",cx:"6",cy:"10",r:"6",children:Object(i.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})}),Object(i.jsx)("circle",{fill:"#fff",stroke:"none",cx:"25",cy:"10",r:"6",children:Object(i.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})}),Object(i.jsx)("circle",{fill:"#fff",stroke:"none",cx:"44",cy:"10",r:"6",children:Object(i.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})})]})}},48:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(25),c=e(0),o=e(33),i=e(3);function a(t){const n=Object(c.useCallback)((()=>{localStorage.clear(),window.location.hash="",window.location.reload()}),[]);return Object(i.jsx)(o.b,Object(r.a)(Object(r.a)({onClick:n},t),{},{children:"Reset Application"}))}},49:function(t,n,e){"use strict";n.a=e.p+"static/media/OutOfResults.9c71691c.png"},50:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return i}));class r{constructor(t,n,e,r,c,o,i,a,s,u,d,l,b,f,h,p,g,j,m,O,v){this.id=void 0,this.score=void 0,this.rating=void 0,this.source=void 0,this.tags=void 0,this.media_type=void 0,this.thumbnail_src=void 0,this.small_src=void 0,this.big_src=void 0,this.width=void 0,this.height=void 0,this.creator_id=void 0,this.creator_url=void 0,this.status=void 0,this.parent_id=void 0,this.has_children=void 0,this.has_comments=void 0,this.comments_url=void 0,this.has_notes=void 0,this.created_at=void 0,this.change=void 0,this.id=t,this.score=n,this.rating=e,this.source=r,this.tags=c,this.media_type=o,this.small_src=i,this.big_src=a,this.thumbnail_src=s,this.width=u,this.height=d,this.creator_id=l,this.creator_url=b,this.status=f,this.parent_id=h,this.has_children=p,this.has_comments=g,this.comments_url=j,this.has_notes=m,this.created_at=O,this.change=v}}var c=e(30);function o(t){const n=t.name,e=t.types,r=t.count,o=t.modifier;return new c.a(n,e,Number(r),o)}function i(t){const n=t.id,e=t.type,o=t.score,i=t.rating,a=t.source,s=t.tags,u=t.file_url,d=t.width,l=t.height,b=t.creator_id,f=t.creator_url,h=t.sample_url,p=t.preview_url,g=t.status,j=t.parent_id,m=t.has_children,O=t.has_comments,v=t.comments_url,x=t.has_notes,y=t.created_at,_=t.change;return new r(Number(n),Number(o),i,a,s?s.map((t=>new c.a(t))):[],e,h,u,p,Number(d),Number(l),Number(b),f,g,Number(j),Boolean(m),Boolean(O),v,Boolean(x),y,_)}},7:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"j",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"m",(function(){return s})),e.d(n,"l",(function(){return u})),e.d(n,"i",(function(){return d})),e.d(n,"h",(function(){return l})),e.d(n,"e",(function(){return b})),e.d(n,"f",(function(){return f})),e.d(n,"g",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"p",(function(){return g})),e.d(n,"v",(function(){return j})),e.d(n,"n",(function(){return m})),e.d(n,"o",(function(){return O})),e.d(n,"y",(function(){return v})),e.d(n,"x",(function(){return x})),e.d(n,"u",(function(){return y})),e.d(n,"t",(function(){return _})),e.d(n,"q",(function(){return S})),e.d(n,"r",(function(){return E})),e.d(n,"s",(function(){return w})),e.d(n,"w",(function(){return k}));const r="R34_ADD_TAG",c="R34_REMOVE_TAG",o="R34_ADD_ALIASES",i="R34_ADD_TYPES",a="R34_ADD_POSTS",s="R34_SET_POSTS",u="R34_SET_OPTION",d="R34_GET_RESULTS",l="R34_GET_MORE_RESULTS",b="R34_ALLOW_COOKIES",f="R34_ENTER_FULLSCREEN",h="R34_EXIT_FULLSCREEN",p="R34_SET_FULLSCREEN_POST";function g(t){return{type:r,tag:t}}function j(t){return{type:c,tag:t}}function m(t,n){return{type:o,aliases:t,forTag:n}}function O(t){return{type:a,posts:t}}function v(t,n,e=0){return{type:s,posts:t,count:n,pageNumber:e}}function x(t,n){return{type:u,key:t,value:n}}function y(t=0){return{type:d,pageNumber:t}}function _(){return{type:l}}function S(){return{type:b,value:!0}}function E(t){return{type:f,postId:t}}function w(){return{type:h}}function k(t){return{type:p,postId:t}}},8:function(t,n,e){"use strict";let r,c,o,i,a,s,u,d;e.d(n,"h",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return s})),e.d(n,"e",(function(){return d})),e.d(n,"c",(function(){return l})),function(t){t.GENERAL="general",t.CHARACTER="character",t.AMBIGUOUS="ambiguous",t.ARTIST="artist",t.COPYRIGHT="copyright",t.RATING="rating",t.SOURCE="source",t.METADATA="metadata"}(r||(r={})),function(t){t.PLUS="+",t.MINUS="-",t.OR="~"}(c||(c={})),function(t){t.VIDEO="video",t.IMAGE="image"}(o||(o={})),function(t){t.VIDEO="video",t.PICTURE="picture",t.GIF="gif"}(i||(i={})),function(t){t.INFINITE_COLUMN="infinite_column",t.PAGES="pages"}(a||(a={})),function(t){t.SEARCH="/",t.HELP="/help",t.SETTINGS="/settings",t.ABOUT="/about"}(s||(s={})),function(t){t.SAFE="safe",t.QUESTIONABLE="questionable",t.EXPLICIT="explicit"}(u||(u={})),function(t){t.INFINITE="infinite",t.RATED="rated",t.RATEDThreshold="ratedThreshold",t.ORIGINALS="originals",t.COOKIES="cookies",t.PRELOAD_VIDEOS="preloadVideos",t.TAG_SUGGESTIONS_COUNT="tagSuggestionsCount",t.RESULTS_LAYOUT="resultsLayout",t.PAGE_SIZE="pageSize",t.USE_CORS_PROXY="useCorsProxy"}(d||(d={}));const l=()=>{}},80:function(t,n,e){"use strict";e.r(n);e(61);var r,c,o=e(0),i=e.n(o),a=e(32),s=e.n(a),u=e(24),d=e(44),l=e(9),b=e(53),f=e(2),h=e(4),p=e(33),g=e(7),j=e(10),m=e(43),O=e(3);const v=f.d.div((({theme:t})=>Object(f.c)(r||(r=Object(h.a)(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: ",";\n    background: ",";\n    padding: ",";\n  "])),t.colors.backgroundColor2,t.colors.layerBgSolid,t.dimensions.gutter))),x=f.d.span(c||(c=Object(h.a)(["\n  height: min-content;\n"])));function y(){const t=Object(u.c)(j.d),n=Object(m.a)(g.q);return t?null:Object(O.jsxs)(v,{children:[Object(O.jsx)(x,{children:"This website uses cookies."}),Object(O.jsx)(p.e,{onClick:n,"aria-label":"Allow Cookies",children:"Got it"})]})}var _,S=Object(f.b)((({theme:t})=>Object(f.c)(_||(_=Object(h.a)(["\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n\n      font-family: 'Raleway', sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n\n      :focus {\n        outline: none;\n      }\n    }\n\n    html,\n    body,\n    #app-root {\n      width: 100%;\n      height: 100%;\n    }\n\n    body {\n      font-size: ",";\n      color: ",";\n      background-color: ",";\n    }\n\n    a {\n      color: ",";\n      text-decoration: none;\n    }\n\n    // Not a touch device\n    // Touch devices have nice scrollbars by default\n    @media (pointer: fine) {\n      // Underline stuff that is focused on non-touch devices\n      // makes keyboard navigation clearer\n      :focus {\n        text-decoration: underline;\n      }\n\n      ::-webkit-scrollbar {\n        height: 8px;\n\n        :hover {\n          background: ",";\n        }\n      }\n\n      /* Track */\n      ::-webkit-scrollbar-track {\n        background: transparent;\n      }\n\n      /* Handle */\n      :hover {\n        ::-webkit-scrollbar {\n          background: ",";\n        }\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 1000px;\n\n        :hover {\n          background: ",";\n        }\n      }\n    }\n  "])),t.fontSizes.content,t.colors.backgroundColor2,t.colors.backgroundColor,t.colors.accentColor,t.colors.layerBg,t.colors.layerBg,t.colors.layerBg,t.colors.layerBgHighlight)));var E={dimensions:{borderRadius:"3px",borderWidth:"2px",spacing:"4px",bigSpacing:"8px",hugeSpacing:"16px",gutter:"8px",blockHeight:"32px",bodyWidth:"1000px"},colors:{accentColor:"#ee3344",hoverAccent:"#ee3344",backgroundColor:"#121212",backgroundColor2:"#fff",subduedText:"#ffffff80",layerBg:"#ffffff11",layerBgSolid:"#222222",layerBgHighlight:"#ffffff22"},shadow:{radius:"4px",color:"#000"},timings:{transitionTime:"0.2s",longTransitionTime:"0.2s"},fontSizes:{content:"15px",bigTitle:"24px"}},w=e(15),k=e(41),R=e(57),T=e.n(R),C=e(12),I=e(8);const A={infinite:!0,rated:!1,ratedThreshold:1,originals:!1,cookies:!1,preloadVideos:!1,tagSuggestionsCount:20,resultsLayout:I.f.INFINITE_COLUMN,pageSize:20,useCorsProxy:!1};function N(t,n,e){return Object(C.a)(t,(t=>{t[n]=e}))}var U=(t=A,n)=>{switch(n.type){case g.l:return N(t,n.key,n.value);case g.e:return N(t,I.e.COOKIES,n.value);default:return t}};const P={posts:[],pageNumber:0,count:0};var L=(t=P,n)=>{switch(n.type){case g.b:return((t,n)=>Object(C.a)(t,(e=>{e.posts=[...t.posts,...n],e.pageNumber=t.pageNumber+1})))(t,n.posts);case g.m:return((t,n,e,r=0)=>Object(C.a)(t,(t=>{t.posts=n,t.count=e,t.pageNumber=r})))(t,n.posts,n.count,n.pageNumber);default:return t}},D=e(25);const G={active:{},aliases:{}};var B=(t=G,n)=>{switch(n.type){case g.c:return((t,n)=>Object(C.a)(t,(e=>{e.active[n.name]=Object(D.a)(Object(D.a)({},t.active[n.name]),n)})))(t,n.tag);case g.j:return((t,n)=>Object(C.a)(t,(t=>{delete t.active[n.name],delete t.aliases[n.name]})))(t,n.tag);case g.a:return((t,n,e)=>Object(C.a)(t,(t=>{t.aliases[e]=n})))(t,n.aliases,n.forTag);case g.d:return((t,n,e)=>Object(C.a)(t,(t=>{t.active[e].types=n})))(t,n.types,n.forTag);default:return t}};const z={isEnabled:!1,postId:0};var H,F=(t=z,n)=>{switch(n.type){case g.f:return((t,n)=>Object(C.a)(t,(t=>{t.isEnabled=!0,t.postId=n})))(t,n.postId);case g.k:return((t,n)=>Object(C.a)(t,(t=>{t.postId=n})))(t,n.postId);case g.g:return(t=>Object(C.a)(t,(t=>{t.isEnabled=!1})))(t);default:return t}},M=Object(w.combineReducers)({tags:B,results:L,preferences:U,reader:F}),V=e(58),W=(e(81),e(28));!function(t){t.SEARCH="r34_search"}(H||(H={}));const X={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:11fa1fda0e14f1ac2dd021",measurementId:"G-27J3QXZ8YR"};let K,q;var Y=t=>n=>e=>{const r=t.getState();if(Object(j.d)(r)&&(K||(K=V.a.initializeApp(X),q=K.analytics()),e.type===g.b||e.type===g.m)){const t=((t,n,e)=>({id:H.SEARCH,payload:{active_tags:Object(W.h)(t),page_number:n,preferences:e}}))(Object(j.a)(r),Object(j.n)(r),Object(j.r)(r)),n=t.id,e=t.payload;q.logEvent(n,e)}n(e)},J=e(18),Q=e.n(J),Z=e(26),$=e(31),tt=e(30);var nt=t=>n=>function(){var e=Object(Z.a)(Q.a.mark((function e(r){var c,o,i,a,s,u,d,l,b,f,h,p,m;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.getState(),o=Object(j.i)(c),r.type!==g.i){e.next=10;break}return i=Object(j.a)(c),a=Object(j.o)(c),s=Object(j.k)(c),e.next=8,$.a.getPosts(i,a,r.pageNumber,s);case 8:u=e.sent,t.dispatch(Object(g.y)(u.posts,u.count,r.pageNumber));case 10:if(r.type!==g.h||!o){e.next=19;break}return i=Object(j.a)(c),d=Object(j.n)(c),a=Object(j.o)(c),s=Object(j.k)(c),e.next=17,$.a.getPosts(i,a,d+1,s);case 17:l=e.sent,t.dispatch(Object(g.o)(l.posts));case 19:if(r.type!==g.c){e.next=32;break}return i=Object(j.a)(c),e.next=23,$.a.getAliases(r.tag.name);case 23:if(f=e.sent,h=f.sort(((t,n)=>n.posts-t.posts)).filter((t=>!(t.name in i))).map((t=>new tt.a(t.name,[],t.posts))),t.dispatch(Object(g.n)(h,r.tag.name)),0!==(null===(b=r.tag.types)||void 0===b?void 0:b.length)){e.next=32;break}return e.next=29,$.a.getTags(r.tag.name);case 29:p=e.sent,(m=p.find((t=>t.name=r.tag.name)))&&(r.tag.types=m.types);case 32:n(r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),et=e(60);const rt=Object(W.d)();console.log("Running version ".concat(rt," of R34 React."));const ct={key:"appstate",version:Object(W.i)(rt),storage:T.a},ot=Object(k.a)(ct,M),it=Object(w.createStore)(ot,Object(et.composeWithDevTools)(Object(w.applyMiddleware)(Y,nt))),at=Object(k.b)(it);var st,ut=e(47);const dt=f.d.div(st||(st=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n  display: grid;\n  place-items: center;\n"])));function lt(){return Object(O.jsx)(dt,{children:Object(O.jsx)(ut.a,{})})}class bt extends i.a.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}render(){return this.state.hasError?this.props.fallback:this.props.children}}var ft,ht=e(48),pt=e(49),gt=e(45);const jt=f.d.div(ft||(ft=Object(h.a)(["\n  height: 100vh;\n  width: 100%;\n  display: grid;\n  place-items: center;\n  align-content: center;\n  padding: 30px;\n  background: ",";\n\n  > * {\n    margin-bottom: 10px;\n  }\n"])),(({theme:t})=>t.colors.backgroundColor));function mt(){return Object(O.jsxs)(jt,{theme:E,children:[Object(O.jsx)(S,{theme:E}),Object(O.jsx)(gt.a,{src:pt.a,alt:"Shironeko does not understand"}),Object(O.jsx)("h1",{children:"Sorry about that..."}),Object(O.jsx)(ht.a,{theme:E})]})}const Ot=i.a.lazy((()=>Promise.all([e.e(0),e.e(8)]).then(e.bind(null,130)))),vt=i.a.lazy((()=>e.e(5).then(e.bind(null,129)))),xt=i.a.lazy((()=>Promise.all([e.e(4),e.e(0),e.e(7)]).then(e.bind(null,128)))),yt=i.a.lazy((()=>e.e(6).then(e.bind(null,127))));function _t(){return Object(O.jsx)(bt,{fallback:Object(O.jsx)(mt,{}),children:Object(O.jsx)(f.a,{theme:E,children:Object(O.jsx)(u.a,{store:it,children:Object(O.jsxs)(b.a,{loading:Object(O.jsx)(lt,{}),persistor:at,children:[Object(O.jsx)(S,{}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(o.Suspense,{fallback:Object(O.jsx)(lt,{}),children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:I.g.HELP,children:Object(O.jsx)(Ot,{})}),Object(O.jsx)(l.a,{exact:!0,path:I.g.SETTINGS,children:Object(O.jsx)(vt,{})}),Object(O.jsx)(l.a,{exact:!0,path:I.g.ABOUT,children:Object(O.jsx)(yt,{})}),Object(O.jsx)(l.a,{path:I.g.SEARCH,children:Object(O.jsx)(xt,{})})]})}),Object(O.jsx)(y,{})]})]})})})})}s.a.render(Object(O.jsx)(_t,{}),document.getElementById("app-root"))}},[[80,2,3]]]);
//# sourceMappingURL=main.1e05a02e.chunk.js.map