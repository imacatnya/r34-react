(this["webpackJsonpr34-react"]=this["webpackJsonpr34-react"]||[]).push([[6],{193:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(1),a=n.n(c);function r(e){a.a.useEffect((function(){document.title=e}),[e])}},195:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,a=n(10),r=n(5),i=n(1),s=n(3),o=n(30),u=n(2),j=s.d.input(c||(c=Object(r.a)(["\n  ","\n\n  width: 70px;\n  text-align: left;\n"])),o.c);function l(e){var t=e.value,n=e.onSubmit,c=e.className,r=Object(i.useState)(t),s=Object(a.a)(r,2),o=s[0],l=s[1];Object(i.useEffect)((function(){l(t)}),[t]);var b=Object(i.useCallback)((function(e){l(e.target.value)}),[]),d=Object(i.useCallback)((function(){n(o)}),[o,n]),O=Object(i.useCallback)((function(e){"Enter"===e.key&&e.target.blur()}),[]);return Object(u.jsx)(j,{type:"text",value:o,onChange:b,onBlur:d,onKeyDown:O,className:c})}function b(e){var t=e.value,n=e.onSubmit,c=e.className,r=e.min,s=e.max,o=e.step,l=Object(i.useState)(t.toString()),b=Object(a.a)(l,2),d=b[0],O=b[1];Object(i.useEffect)((function(){O(t.toString())}),[t]);var h=Object(i.useCallback)((function(e){O(e.target.value)}),[]),f=Object(i.useCallback)((function(){n(Number(d))}),[d,n]),p=Object(i.useCallback)((function(e){"Enter"===e.key&&e.target.blur()}),[]);return Object(u.jsx)(j,{type:"number",min:r,max:s,step:o,value:d,onChange:h,onBlur:f,onKeyDown:p,className:c})}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c,a,r=n(5),i=(n(1),n(3)),s=n(32),o=n(60),u=n(47),j=n(2),l=Object(i.d)(u.d)((function(e){var t=e.theme;return Object(i.c)(c||(c=Object(r.a)(["\n    padding-top: ",";\n  "])),t.dimensions.hugeSpacing)})),b=Object(i.d)(o.b)((function(e){var t=e.theme,n=e.$compact;return Object(i.c)(a||(a=Object(r.a)(["\n    padding: ",";\n    ",";\n  "])),n?t.dimensions.bigSpacing:t.dimensions.hugeSpacing,Object(s.e)(n?t.dimensions.bigSpacing:t.dimensions.hugeSpacing))}));function d(e){var t=e.title,n=e.children,c=e.className,a=e.compact,r=void 0!==a&&a;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{children:t}),Object(j.jsx)(b,{$compact:r,className:c,children:n})]})}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c,a,r,i=n(10),s=n(5),o=(n(1),n(3)),u=n(19),j=n(30),l=n(2),b=o.d.div((function(e){var t=e.theme;return Object(o.c)(c||(c=Object(s.a)(["\n    width: 120px;\n    height: ",";\n  "])),t.dimensions.blockHeight)})),d=o.d.select(a||(a=Object(s.a)(["\n  ","\n\n  width: 100%;\n  height: 100%;\n"])),j.c),O=o.d.option((function(e){var t=e.theme;return Object(o.c)(r||(r=Object(s.a)(["\n    ","\n    background-color: ",";\n    ","\n  "])),Object(j.b)({theme:t}),t.colors.backgroundColor2,Object(u.c)({theme:t}))}));function h(e){var t=e.options,n=e.value,c=e.onChange;return Object(l.jsx)(b,{children:Object(l.jsx)(d,{value:n,onChange:c,children:Object.entries(t).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)(O,{value:n,children:c},n)}))})})}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c,a=n(5),r=n(3),i=n(19),s=n(88),o=Object(r.d)(s.b)(c||(c=Object(a.a)(["\n  ","\n  flex-grow: 1;\n"])),i.b)},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(10),a=n(1),r=n.n(a),i=n(207),s=n(95),o=n(7),u=n.n(o),j=n(15);function l(){return(l=Object(j.a)(u.a.mark((function e(t){var n,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return c=e.sent,a=Array.from(new Uint8Array(c)),r=a.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){var e=r.a.useState({}),t=Object(c.a)(e,2),n=t[0],a=t[1],o=r.a.useState(),u=Object(c.a)(o,2),j=u[0],b=u[1],d=Object(s.a)(),O=Object(c.a)(d,2)[1];return r.a.useEffect((function(){(null===O||void 0===O?void 0:O.email)&&function(e){return l.apply(this,arguments)}(O.email).then((function(e){var t=i.a.firestore().collection("users/".concat(e,"/supertags"));return b(t),t.get()})).then((function(e){var t=e.docs.reduce((function(e,t){return e[t.id]=t.data(),e}),{});a(t)})).catch((function(e){console.error("Error with useSupertags",e)}))}),[null===O||void 0===O?void 0:O.email]),r.a.useEffect((function(){if(j){var e=j.onSnapshot((function(e){var t=e.docs.reduce((function(e,t){return e[t.id]=t.data(),e}),{});a(t)}));return function(){e()}}}),[j]),n}},227:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return We}));var c,a,r,i,s=n(10),o=n(5),u=n(3),j=n(55),l=n(95),b=n(193),d=n(23),O=n(19),h=n(198),f=n(88),p=n(99),g=n(47),x=n(196),m=n(96),v=n(1),k=n.n(v),y=n(2),w=u.d.div(c||(c=Object(o.a)(["\n  ","\n  grid-template-columns: 1fr auto;\n  grid-template-rows: auto auto;\n"])),O.h),C=Object(u.d)(g.c)((function(e){e.theme;return Object(u.c)(a||(a=Object(o.a)(["\n    grid-column: 1/2;\n    grid-row: 1/2;\n  "])))})),S=Object(u.d)(g.b)((function(e){e.theme;return Object(u.c)(r||(r=Object(o.a)(["\n    grid-column: 1/2;\n    grid-row: 2/3;\n  "])))})),T=u.d.div((function(e){e.theme;return Object(u.c)(i||(i=Object(o.a)(["\n    grid-column: 2/3;\n    grid-row: 1/3;\n  "])))}));function E(e){var t=e.title,n=e.description,c=e.children;return Object(y.jsxs)(w,{children:[Object(y.jsx)(C,{children:t}),Object(y.jsx)(S,{children:n}),Object(y.jsx)(T,{children:c})]})}var R,A,D=n(39),P=n(29),I=u.d.div(R||(R=Object(o.a)(["\n  ","\n"])),O.f),N=u.d.img((function(e){var t=e.theme;return Object(u.c)(A||(A=Object(o.a)(["\n    height: ",";\n    width: ",";\n    border-radius: ",";\n  "])),t.dimensions.blockHeight,t.dimensions.blockHeight,t.dimensions.borderRadius)}));function H(){var e=Object(l.a)(),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)(D.j,[]),r=Object(v.useCallback)(D.k,[]);if(n){var i=(null===c||void 0===c?void 0:c.displayName)||(null===c||void 0===c?void 0:c.email)||"",o=(null===c||void 0===c?void 0:c.photoURL)||"";return Object(y.jsx)(f.a,{children:Object(y.jsxs)(I,{children:[Object(y.jsx)(N,{src:o,alt:i,title:i}),Object(y.jsxs)(P.f,{onClick:r,children:[Object(y.jsx)(d.E,{}),Object(y.jsx)("span",{children:"Sign Out"})]})]})})}return Object(y.jsxs)(P.f,{onClick:a,children:[Object(y.jsx)(d.t,{}),Object(y.jsx)("span",{children:"Sign In"})]})}function F(){return Object(y.jsx)(E,{title:"Account",description:"Sign in to save your preferences across devices. Some preferences require you to be signed in because they use your stored data.",children:Object(y.jsx)(H,{})})}var L=n(59),M=n(94);function z(){var e=Object(L.a)("autoPlay"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Auto-play",description:"Start videos automatically once they become visible. This will use more data.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}var B=n(195);function U(){var e=Object(L.a)("autoscrollDelay"),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(E,{title:"Autosroll delay",description:"Configure how long posts stay on screen in fullscreen view. Time in seconds",children:Object(y.jsx)(B.a,{value:n,onSubmit:c,min:1,max:60,step:1})})}var q,G,K,W,J=n(197),$=Object(u.d)(d.H).attrs((function(e){return{color:e.theme.colors.positive}}))(q||(q=Object(o.a)([""]))),_=Object(u.d)(d.q).attrs((function(e){return{color:e.theme.colors.negative}}))(G||(G=Object(o.a)([""])));function V(e){return e.value?Object(y.jsx)($,{}):Object(y.jsx)(_,{})}var Y=Object(u.d)(B.b)(K||(K=Object(o.a)(["\n  width: 100%;\n"]))),Q=Object(u.d)(g.b)(W||(W=Object(o.a)(["\n  ",";\n"])),O.f),X={local:"Localhost",default:"Default",heroku:"Heroku",adaptable:"Adaptable",render:"Render",railway:"Railway",custom:"Custom"},Z={local:["http://localhost:8080"],default:["https://r34-json.herokuapp.com"],heroku:["https://r34-json.herokuapp.com"],adaptable:["https://rule34-json-api.adaptable.app"],render:["https://json-api.onrender.com"],railway:["https://api-service-production-122b.up.railway.app"]};function ee(){var e=Object(L.a)("backends"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useState)("https://your-backend.com"),r=Object(s.a)(a,2),i=r[0],o=r[1],u=Object(v.useState)(void 0),j=Object(s.a)(u,2),l=j[0],b=j[1],d=Object.keys(Z).find((function(e){return n&&Z[e].includes(n[0])}))||"custom",O=Object(v.useCallback)((function(e){var t=e.target.value;c("custom"===t?[i]:Z[t])}),[i,c]),h=Object(v.useCallback)((function(e){o(e),c([i])}),[i,c]);return Object(v.useEffect)((function(){if("custom"===d)try{b(void 0),new URL(i),fetch(i).then((function(){return b(!0)})).catch((function(){return b(!1)}))}catch(e){}}),[d,i]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{title:"Backend",description:"Controls the backend used to fetch posts. This can be changed to use a custom backend.",children:Object(y.jsx)(J.a,{options:X,value:d,onChange:O})}),"custom"===d&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y,{value:i,onSubmit:h}),void 0!==l&&Object(y.jsxs)(Q,{children:[Object(y.jsx)(V,{value:l}),l?"Pinged custom backend successfully!":"Cannot reach custom backend."]})]})]})}function te(){var e=Object(L.a)("hideSeen"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Hide seen posts [NOT WORKING]",description:"Enabling this option will hide all posts you have seen before. Perfect if you are frequently browsing the same tags or sorting by score.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}function ne(){var e=Object(L.a)("originals"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Load original sizes",description:"Display images and videos at their original resolution. This will consume more data but provides a nicer experience.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}function ce(){var e=Object(L.a)("showMetadata"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Show post metadata",description:"Posts display more data in their details. Mainly for developing purposes but maybe it's useful to someone.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}function ae(){var e=Object(L.a)("pageSize"),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(E,{title:"Page size",description:"Controls the number of posts loaded at once.",children:Object(y.jsx)(B.a,{value:n,onSubmit:c,min:10,max:200,step:1})})}function re(){var e=Object(L.a)("preloadVideos"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Preload Animations",description:"Start loading videos and gifs immediately instead of when you click play. This will improve your viewing experience but will consume a LOT of data. Only use with WIFI.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}var ie={infinite_column:"Infinite",pages:"Pages"};function se(){var e=Object(L.a)("resultsLayout"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(e){return c(e.target.value)}),[c]);return Object(y.jsx)(E,{title:"Results Layout",description:"Choose how your results are displayed.",children:Object(y.jsx)(J.a,{options:ie,value:n,onChange:a})})}function oe(){var e=Object(L.a)("showComments"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Show comments",description:"If there are comments on a post, they will appear in the details. This preference needs 'Show Post Details' to be enabled to have any effect.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}function ue(){var e=Object(L.a)("showPostDetails"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(){return c(!n)}),[n,c]);return Object(y.jsx)(E,{title:"Show post details",description:"When enabled, tapping a post shows additional details for the post. This includes tags, rating, likes, the artist and more.",children:Object(y.jsx)(M.a,{value:n,onToggle:a})})}var je,le,be,de=n(4),Oe=n(14),he=n(24),fe=n(200),pe=n(6),ge=n(100),xe=n(97),me=n(103),ve=n(51),ke=n(73),ye=n(20),we=u.d.div((function(e){var t=e.theme;return Object(u.c)(je||(je=Object(o.a)(["\n    ","\n\n    padding-block: ",";\n\n    :not(:last-child) {\n      border-bottom: solid gray 1px;\n    }\n\n    :active {\n      background: ",";\n    }\n  "])),O.e,t.dimensions.bigSpacing,t.colors.layerBgHighlight)})),Ce=u.d.div(le||(le=Object(o.a)(["\n  ","\n  grid-template-columns: auto auto 1fr auto auto;\n  grid-template-rows: 1fr auto;\n  align-items: center;\n  cursor: pointer;\n\n  > :first-child {\n    place-items: center;\n    grid-area: 1/1/3/2;\n  }\n  > :nth-child(2) {\n    grid-area: 1/2/2/3;\n  }\n  > :nth-child(3) {\n    grid-area: 1/3/2/4;\n  }\n  > :nth-child(4) {\n    grid-area: 2/2/3/4;\n  }\n  > :nth-child(5) {\n    grid-area: 1/4/3/5;\n  }\n  > :nth-child(6) {\n    grid-area: 1/6/3/6;\n  }\n"])),O.h),Se=Object(u.d)(ke.b)((function(e){var t=e.theme;return Object(u.c)(be||(be=Object(o.a)(["\n    padding: ",";\n    cursor: pointer;\n    color: ",";\n  "])),t.dimensions.bigSpacing,t.colors.text)}));function Te(e){var t=e.supertag,n=t.name,c=t.description,a=t.tags,r=Object(ge.a)(),i=Object(s.a)(r,2),o=i[0],u=i[1],j=function(e){return[Object(v.useCallback)((function(t){var n=t,c=Object(de.a)(Object(de.a)({},e.tags),{},Object(ve.a)({},n.name,n.modifier));Object(D.i)(e.name,c)}),[e.name,e.tags]),Object(v.useCallback)((function(t){var n=Object(de.a)({},e.tags);delete n[t.name],Object(D.i)(e.name,n)}),[e.name,e.tags]),Object(v.useCallback)((function(){return Object(D.f)(e.name)}),[e.name])]}(t),l=Object(s.a)(j,3),b=l[0],O=l[1],h=l[2],f=Object(v.useMemo)((function(){return Object.entries(a).reduce((function(e,t){var n=Object(s.a)(t,2),c=n[0],a=n[1];return e[c]={name:c,modifier:a,types:[]},e}),{})}),[a]),p=k.a.useCallback((function(e){e.stopPropagation(),e.preventDefault(),h()}),[h]),x=k.a.useCallback((function(e){if(!Object(ye.g)(e)){var t=["+","-","~"],n=t[(t.indexOf(e.modifier)+1)%3];b(Object(de.a)(Object(de.a)({},e),{},{modifier:n}))}}),[b]);return Object(y.jsxs)(we,{children:[Object(y.jsxs)(Ce,{onClick:u,title:"Open supertag details",children:[Object(y.jsx)(d.I,{}),Object(y.jsx)("span",{children:n}),Object(y.jsxs)(g.b,{children:[Object.keys(a).length," tags"]}),Object(y.jsx)(g.b,{children:c}),Object(y.jsx)(Se,{to:"".concat(he.c.SHARE,"?").concat(Object(ye.c)(t)),title:"Share supertag",children:Object(y.jsx)(d.D,{})}),Object(y.jsx)(P.c,{onClick:p,title:"Delete supertag",children:Object(y.jsx)(d.h,{})})]}),o&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(me.a,{onSubmit:b,showSupertags:!1}),Object(y.jsx)(xe.a,{tags:f,detailed:!1,onTagClick:O,onTagMenu:x})]})]})}function Ee(){var e=Object(fe.a)(),t=Object(Oe.b)(),n=k.a.useCallback((function(){return t(Object(pe.I)(he.a.CREATE_SUPERTAG))}),[t]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{title:"Supertags",description:"You can manage your supertags here. To create on sign in and try adding two or more tags to your search. Adding supertag to your search will add all the tags inside instead.",children:Object(y.jsxs)(P.f,{onClick:n,children:[Object(y.jsx)(d.z,{})," Add new"]})}),Object(y.jsx)("div",{children:Object.entries(e).map((function(e){var t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(Te,{supertag:Object(de.a)({name:n},c)},n)}))})]})}function Re(){var e=Object(L.a)("tagSuggestionsCount"),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(E,{title:"Number of Tag suggestions",description:"Controls the number of tags displayed when searching. Increase this when searching for niche tags.",children:Object(y.jsx)(B.a,{value:n,onSubmit:c,min:3,max:200,step:1})})}var Ae={dark:"Dark",light:"Light",coffee:"Coffee",deepsea:"Deep Sea"};function De(){var e=Object(L.a)("themeId"),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(v.useCallback)((function(e){return c(e.target.value)}),[c]);return Object(y.jsx)(E,{title:"Theme",description:"Choose how the app looks.",children:Object(y.jsx)(J.a,{options:Ae,value:n,onChange:a})})}var Pe,Ie,Ne=n(50),He=n(32),Fe=n(30),Le=u.d.div(Pe||(Pe=Object(o.a)(["\n  ","\n"])),O.e),Me=u.d.div(Ie||(Ie=Object(o.a)(["\n  ","\n  ","\n  ","\n  background: ",";\n"])),O.e,He.b,Fe.a,(function(e){return e.theme.colors.backgroundColor}));function ze(){return Object(y.jsxs)(Le,{children:[Object(y.jsx)(g.c,{children:"Feature Detection"}),Object(y.jsx)(g.b,{children:"This information is really valuable when investigating layout and browser issues."}),Object(y.jsxs)(Me,{children:[Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.e})," Supports grid-gap"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.c})," Supports flex-gap"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.b})," Supports aspect-ratio"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.h})," Supports object-fit"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.d})," Supports fullscreen"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.g})," Supports advanced network info"]}),Object(y.jsxs)(g.b,{children:[Object(y.jsx)(V,{value:Ne.f})," Supports localStorage"]})]})]})}var Be,Ue=n(104);function qe(){var e=Object(Oe.b)(),t=Object(v.useCallback)((function(){return e(Object(pe.O)([],0,0))}),[e]);return Object(y.jsxs)(P.b,{onClick:t,children:[Object(y.jsx)(d.M,{})," Reset Results"]})}function Ge(){var e=Object(v.useCallback)(D.g,[]);return Object(y.jsxs)(P.b,{onClick:e,children:[Object(y.jsx)(d.M,{})," Reset seen posts"]})}var Ke=u.d.div(Be||(Be=Object(o.a)(["\n  ","\n  flex-grow: 1;\n  justify-content: center;\n  min-height: 50px;\n"])),O.f);function We(){var e=Object(u.f)(),t=Object(j.d)(),n=Object(l.a)(),c=Object(s.a)(n,1)[0];return Object(b.a)("Rule34 React - Preferences"),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(m.a,{}),Object(y.jsxs)(h.a,{children:[Object(y.jsxs)(x.a,{title:"General",children:[Object(y.jsx)(se,{}),Object(y.jsx)(re,{}),Object(y.jsx)(ne,{}),Object(y.jsx)(Re,{}),Object(y.jsx)(ae,{}),Object(y.jsx)(ue,{}),Object(y.jsx)(oe,{})]}),Object(y.jsxs)(x.a,{title:"Account",children:[Object(y.jsx)(F,{}),Object(y.jsx)(De,{}),c&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ee,{}),Object(y.jsx)(te,{})]})]}),Object(y.jsxs)(x.a,{title:"Experimental",children:[Object(y.jsx)(g.b,{children:"These features that are still under active development. They might change a lot in the future. Please report any bugs you find so I can fix them :)"}),Object(y.jsx)(p.a,{}),Object(y.jsx)(z,{}),Object(y.jsx)(U,{})]}),Object(y.jsxs)(x.a,{title:"Developer",children:[Object(y.jsx)(ce,{}),Object(y.jsx)(ee,{}),Object(y.jsx)(ze,{}),Object(y.jsx)(qe,{}),Object(y.jsx)(Ge,{}),Object(y.jsx)(Ue.a,{})]}),Object(y.jsxs)(Ke,{children:[Object(y.jsx)(d.i,{color:e.colors.subduedText}),Object(y.jsx)(g.b,{children:t})]})]})]})}}}]);
//# sourceMappingURL=6.c41c8268.chunk.js.map