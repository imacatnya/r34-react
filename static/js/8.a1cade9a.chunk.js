(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[8],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c,a,r=n(4),i=n(2),o=Object(i.e)(c||(c=Object(r.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]))),s=Object(i.e)(a||(a=Object(r.a)(["\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  60% {\n    transform: rotate(0) scale(1);\n  }\n  75% {\n    transform: rotate(0) scale(1.12);\n  }\n  80% {\n    transform: rotate(0) scale(1.1);\n  }\n  84% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  88% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  92% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  96% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  100% {\n    transform: rotate(0) scale(1);\n  }\n"])))},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(47),r=n(4),i=n(0),o=n(2),s=n(22),l=n(3),d=o.d.input((function(e){var t=e.theme;return Object(o.c)(c||(c=Object(r.a)(["\n    width: 50px;\n    ","\n    background-color: ",";\n    ","\n    text-align: center;\n  "])),Object(s.e)({theme:t}),t.colors.backgroundColor2,Object(s.d)({theme:t}))}));function b(e){var t=e.value,n=e.onSubmit,c=e.className,r=Object(i.useState)(t.toString()),o=Object(a.a)(r,2),s=o[0],b=o[1];Object(i.useEffect)((function(){"number"===typeof t&&b(t.toString())}),[t]);var j=Object(i.useCallback)((function(e){b(e.target.value)}),[]),u=Object(i.useCallback)((function(){n(Number(s))}),[s,n]),O=Object(i.useCallback)((function(e){"Enter"===e.key&&n(Number(s))}),[s,n]);return Object(l.jsx)(d,{type:"number",value:s,onChange:j,onBlur:u,onKeyDown:O,className:c})}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return h}));var c,a,r,i,o=n(4),s=(n(0),n(2)),l=n(107),d=n(3),b=s.d.div(c||(c=Object(o.a)(["\n  display: inline-block;\n  white-space: nowrap;\n"]))),j=s.d.a((function(e){var t=e.theme;return Object(s.c)(a||(a=Object(o.a)(["\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);\n    line-height: 36px;\n    display: inline-block;\n    background-color: ",";\n    padding: 2px 12px;\n    text-align: center;\n    border-radius: ",";\n    color: #fff;\n    cursor: pointer;\n    overflow-wrap: break-word;\n    vertical-align: middle;\n    border: 0 none #fff;\n    font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;\n    text-decoration: none;\n    text-shadow: none;\n    font-weight: 700;\n    font-size: 14px;\n\n    :visited {\n      color: #fff !important;\n      text-decoration: none !important;\n    }\n\n    :hover {\n      opacity: 0.85;\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n\n    :active {\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n  "])),t.colors.layerBg,t.dimensions.borderRadius)})),u=s.d.span(r||(r=Object(o.a)(["\n  color: #fff !important;\n  letter-spacing: -0.15px !important;\n  vertical-align: middle;\n  line-height: 33px !important;\n  padding: 0;\n  text-align: center;\n  text-decoration: none !important;\n  text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);\n\n  a {\n    color: #fff !important;\n    text-decoration: none !important;\n  }\n\n  a:hover {\n    color: #fff !important;\n    text-decoration: none;\n  }\n"]))),O=s.d.img(i||(i=Object(o.a)(["\n  display: initial !important;\n  vertical-align: middle;\n  height: 13px !important;\n  width: 20px !important;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  margin-top: 0;\n  margin-right: 5px;\n  margin-left: 0;\n  margin-bottom: 3px;\n  content: url('https://ko-fi.com/img/cup-border.png');\n\n  :after {\n    vertical-align: middle;\n    height: 25px;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: none;\n    margin-top: 0;\n    margin-right: 6px;\n    margin-left: 0;\n    margin-bottom: 4px !important;\n    content: url('https://ko-fi.com/img/whitelogo.svg');\n\n    height: 15px !important;\n    width: 22px !important;\n    display: initial;\n    animation: "," 3s infinite;\n  }\n"])),l.b);function h(e){var t=e.id,n=e.label;return Object(d.jsx)(b,{children:Object(d.jsx)(j,{title:n,href:"https://ko-fi.com/"+t,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsxs)(u,{children:[Object(d.jsx)(O,{src:"https://ko-fi.com/img/cup-border.png",className:"kofiimg",alt:"Ko-Fi button"}),n]})})})}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return en}));var c=n(47),a=n(0),r=n(30),i=n(27),o=n(138),s=n(3);function l(e){var t=e.Header,n=e.items,r=void 0===n?[]:n,l=e.LoadingItem,d=e.hasMoreRows,b=e.ItemComponent,j=e.loadMore,u=e.OutOfItems,O=e.isLoading,h=e.setLoading,p=Object(a.useState)(null),f=Object(c.a)(p,2),g=f[0],m=f[1],x=Object(a.useMemo)((function(){return new o.b({fixedWidth:!0})}),[]),v=t?1:0,w=r.length+v+1,k=Object(a.useCallback)((function(e){return e.index<v+r.length+(d?0:1)}),[d,r.length,v]);Object(a.useEffect)((function(){if(g){var e=function(){g.measureAllRows(),g.recomputeRowHeights(),g.forceUpdateGrid()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[g]);var y=Object(a.useCallback)((function(e){var n=e.index,c=e.key,a=e.parent,j=e.style;return Object(s.jsx)(o.a,{cache:x,columnIndex:0,rowIndex:n,parent:a,children:function(e){var c=e.measure,a=e.registerChild;return t&&n<v?Object(s.jsx)(t,{style:j,virtualRef:a,onLoad:c}):n<v+r.length?Object(s.jsx)(b,Object(i.a)({style:j,virtualRef:a,onLoad:c},r[n-v])):n<v+r.length+1?d||O?Object(s.jsx)(l,{style:j,virtualRef:a,onLoad:c}):u&&r.length>0?Object(s.jsx)(u,{style:j,virtualRef:a,onLoad:c}):Object(s.jsx)("div",{}):(console.warn("index not found / out of bounds. INDEX:",n),null)}},c)}),[x,t,v,r,b,d,O,l,u]);return Object(s.jsx)(o.c,{isRowLoaded:k,loadMoreRows:function(e){return O||!d?Promise.reject(0):(h(!0),j(),new Promise((function(e){setTimeout((function(){h(!1),e(1)}),1e3)})))},rowCount:w,children:function(e){var t=e.onRowsRendered,n=e.registerChild;return Object(s.jsx)(o.d,{ref:function(e){m(e),n(e)},onRowsRendered:t,rowRenderer:y,deferredMeasurementCache:x,overscanRowCount:10,rowCount:r.length+v+1,rowHeight:x.rowHeight,width:window.innerWidth,height:window.innerHeight})}})}var d=n(4),b=n(2),j=n(8),u=n(25),O=n(9),h=n(22),p=n(108),f=n(98);var g=n(105);function m(e){var t=e.value;return Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.u,{color:"white"}),Object(s.jsx)("span",{children:t})]})}var x,v,w=n(48),k=b.d.a((function(e){var t=e.color,n=e.theme;return Object(b.c)(x||(x=Object(d.a)(["\n    ","\n    ",";\n    white-space: nowrap;\n\n    svg {\n      height: 16px;\n    }\n  "])),Object(h.l)({theme:n}),t?Object(b.c)(v||(v=Object(d.a)(["\n          color: "," !important;\n        "])),t):"")}));function y(e){var t=e.value,n=Object(b.f)().colors.accentColor,c=Object(w.d)(t);return Object(s.jsxs)(k,{color:n,href:t,target:"_blank",rel:"noopener noreferrer",className:"source",children:[Object(s.jsx)(f.q,{color:n}),c]})}function C(e){var t=e.value,n=e.color,c=e.Icon,a=e.title;return Object(s.jsxs)(k,{href:t,target:"_blank",rel:"noopener noreferrer",className:"source",color:n,children:[Object(s.jsx)(c,{}),a]})}function L(e){return e.split(" ")[0].split("?")[0].split("/")[0]}var I={"twitter.com/":["#1da1f2",f.w,function(e){return L(e.split("twitter.com/")[1])}],"pixiv.net/":["#0096FA",function(e){return Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{fill:"currentColor",d:"M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"})})},function(){return"Pixiv"}],"patreon.com/":["#FF424D",f.s,function(e){var t=e.split("patreon.com/")[1];return t.startsWith("posts/")?function(e){return e.split(" ")[0].split("?")[0].split("/")[1]}(t):L(t)}],"deviantart.com/":["#00e59b",f.i,function(e){return L(e.split("deviantart.com/")[1])}],"discordapp.com/":["#7289DA",f.j,function(){return"Discord"}],"tumblr.com":["#75869C",f.v,function(e){return new URL(e).hostname.split(".")[0]}]};function P(e){var t=e.value;if(Object(u.h)(t)){var n=t.split(" ");return Object(s.jsx)(s.Fragment,{children:n.map((function(e){var t=Object.keys(I).find((function(t){return e.includes(t)}));if(t){var n=Object(c.a)(I[t],3),a=n[0],r=n[1],i=n[2];return Object(s.jsx)(C,{value:e,color:a,Icon:r,title:i(e)},e)}return Object(s.jsx)(y,{value:e},e)}))})}return Object(s.jsx)(m,{value:t})}var R,N,S,_,M,F=n(93),T=b.d.div(R||(R=Object(d.a)(["\n  ","\n  ","\n  \n  flex-wrap: wrap;\n  padding-top: 0;\n  grid-row: 4/5;\n"])),h.i,h.o),E=b.d.div(N||(N=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  ","\n"])),Object(h.h)("4px")),z=b.d.span(S||(S=Object(d.a)(["\n  line-height: 20px;\n"]))),A=Object(b.d)(F.b)(_||(_=Object(d.a)(["\n  line-height: 20px;\n"])));function D(e){var t=e.comments,n=void 0===t?[]:t;return Object(s.jsx)(T,{children:n&&n.map((function(e,t){return Object(s.jsxs)(E,{children:[Object(s.jsx)(z,{children:e.creator}),Object(s.jsx)(A,{children:e.body})]},t)}))})}var W=Object(b.d)(F.b)(M||(M=Object(d.a)(["\n  white-space: nowrap;\n"])));function V(e){var t=e.created_at,n=e.status,c=e.width,a=e.height;return Object(s.jsxs)(T,{children:[Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.c,{}),Object(s.jsxs)(W,{children:[Object(w.b)(new Date(t))," (",Object(w.g)(Date.now()-t)," ago)"]})]}),Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.e,{}),Object(s.jsx)(W,{children:n})]}),Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.p,{}),Object(s.jsxs)(W,{children:[c," x ",a]})]})]})}function H(e){return Object(s.jsxs)(g.a,{children:[Object(s.jsx)(f.t,{color:"white"}),Object(s.jsx)("span",{children:e.value[0].toUpperCase()})]})}var q,Y,G,B,U,K,J,$,Q=n(5),X=Object(b.d)(g.a)((function(e){var t=e.$liked,n=e.theme;return Object(b.c)(q||(q=Object(d.a)(["\n    transition: transform 0.1s ease-out;\n\n    ","\n\n    :active {\n      transform: scale(1.1);\n    }\n  "])),t?Object(b.c)(Y||(Y=Object(d.a)(["\n          color: ",";\n\n          svg {\n            color: ",";\n          }\n        "])),n.colors.liked,n.colors.liked):Object(b.c)(G||(G=Object(d.a)([""]))))}));function Z(e){var t=e.value,n=e.postId,c=Object(r.b)(),i=Object(r.c)(Object(O.k)(n)),o=Object(a.useCallback)((function(e){e.stopPropagation(),i||c(Object(Q.z)(n))}),[c,i,n]);return Object(s.jsxs)(X,{onClick:o,$liked:i,children:[Object(s.jsx)(f.o,{color:"white"}),Object(s.jsx)("span",{children:t+Object(u.a)(i)})]})}var ee=b.d.div((function(e){var t=e.theme;return Object(b.c)(B||(B=Object(d.a)(["\n    grid-row: 2/3;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    ","\n    padding: ",";\n    ","\n    border-radius: 0 0 "," ",";\n  "])),Object(h.p)({theme:t}),t.dimensions.gutter,Object(h.k)(t.dimensions.hugeSpacing),t.dimensions.borderRadius,t.dimensions.borderRadius)})),te=b.d.div(U||(U=Object(d.a)(["\n  ","\n  ","\n  justify-content: space-around;\n  margin-top: 8px;\n  grid-row: 3/4;\n"])),h.l,h.o),ne=b.d.span(K||(K=Object(d.a)(["\n  ","\n"])),(function(e){var t=e.active,n=e.theme;return t?Object(b.c)(J||(J=Object(d.a)(["\n          color: ",";\n        "])),n.colors.accentColor):""})),ce=Object(b.d)(p.a)((function(e){var t=e.theme;return Object(b.c)($||($=Object(d.a)(["\n    grid-row: 4/5;\n    padding: ",";\n  "])),t.dimensions.gutter)}));function ae(e){var t=e.postId,n=e.onLoad,c=void 0===n?j.c:n,i=e.activeTab,o=e.setActiveTab,l=Object(r.c)(Object(O.q)(t)),d=l.rating,b=l.score,h=l.tags,p=l.source,f=l.created_at,g=l.status,m=l.height,x=l.width,v=l.comments,w=Object(a.useMemo)((function(){return Object(u.g)(h,"name")}),[h]),k=Object(r.c)(O.w),y=Object(r.c)(O.v),C=(null===v||void 0===v?void 0:v.length)||0,L=Object(a.useCallback)((function(e){e.stopPropagation(),o("tags")}),[o]),I=Object(a.useCallback)((function(e){e.stopPropagation(),o("comments")}),[o]),R=Object(a.useCallback)((function(e){e.stopPropagation(),o("metadata")}),[o]);return Object(a.useEffect)((function(){c()}),[c,i]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(ee,{children:[Object(s.jsx)(H,{value:d}),Object(s.jsx)(Z,{value:b,postId:t}),!!p&&Object(s.jsx)(P,{value:p})]}),(y&&C>0||k)&&Object(s.jsxs)(te,{children:[Object(s.jsx)(ne,{active:"tags"===i,onClick:L,children:"Tags"}),y&&C>0&&Object(s.jsx)(ne,{active:"comments"===i,onClick:I,children:"Comments"}),k&&Object(s.jsx)(ne,{active:"metadata"===i,onClick:R,children:"Metadata"})]}),{tags:Object(s.jsx)(ce,{tags:w,detailed:!1}),comments:Object(s.jsx)(D,{comments:v}),metadata:Object(s.jsx)(V,{created_at:f,status:g,width:x,height:m})}[i]]})}var re,ie,oe,se,le=n(106),de=n(107);var be,je=b.d.input(se||(se=Object(d.a)(["\n  ","\n  ","\n"])),(function(){return Object(b.c)(oe||(oe=Object(d.a)(["\n    -webkit-appearance: none;\n    width: 100%;\n    background: transparent;\n    border-radius: 100px;\n    height: 6px;\n\n    &::-moz-range-progress {\n      background-color: ",";\n    }\n\n    &::-ms-fill-lower {\n      background-color: ",";\n    }\n  "])),(function(e){return e.theme.colors.accentColor}),(function(e){return e.theme.colors.accentColor}))}),(function(){var e=Object(b.c)(re||(re=Object(d.a)(["\n    height: 16px;\n    width: 16px;\n    border-radius: 100px;\n    background: #ffffff;\n    cursor: pointer;\n  "])));return Object(b.c)(ie||(ie=Object(d.a)(["\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      ","\n    }\n\n    &::-moz-range-thumb {\n      ","\n    }\n\n    &::-ms-thumb {\n      ","\n    }\n  "])),e,e,e)}));var ue,Oe,he,pe,fe,ge,me,xe,ve,we,ke,ye=b.d.svg(be||(be=Object(d.a)(["\n  > rect {\n    transition: all 0.2s ease-in;\n  }\n\n  &.play {\n    .left {\n      clip-path: path('M1.61 0 L10.1 4.9 L10.1 19.1 L1.61 24');\n    }\n\n    .right {\n      clip-path: path('M22.39 12 L9.9 4.79 L9.9 19.21 L22.39 12');\n    }\n  }\n\n  &.pause {\n    .left {\n      clip-path: path('M4.8 0 L10 0 L10 24 L4.8 24');\n    }\n\n    .right {\n      clip-path: path('M19.2 0 L14 0 L14 24 L19.2 24');\n    }\n  }\n"])));var Ce=b.d.div(he||(he=Object(d.a)(["\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto 1fr auto auto;\n  z-index: 1;\n\n  ",";\n"])),(function(e){return e.isVisible?Object(b.c)(ue||(ue=Object(d.a)([""]))):Object(b.c)(Oe||(Oe=Object(d.a)(["\n        opacity: 0;\n        animation: "," 0.4s ease-in;\n      "])),de.a)})),Le=Object(b.d)((function(e){var t=e.value,n=e.maxValue,r=e.className,i=e.onChange,o=Object(a.useState)(t),l=Object(c.a)(o,2),d=l[0],j=l[1],u=Object(a.useCallback)((function(e){console.log("update");var t=Number(e.target.value);j(t),i(t)}),[i]),O=Object(a.useCallback)((function(e){e.stopPropagation()}),[]);Object(a.useEffect)((function(){t!==d&&j(t)}),[t]);var h=Object(b.f)(),p=Math.round(d/n*100);return Object(s.jsx)(je,{type:"range",step:.034,min:0,max:n,value:d,onChange:u,className:r,onClick:O,style:{backgroundImage:"linear-gradient(90deg, ".concat(h.colors.accentColor," ").concat(p,"%, transparent ").concat(p,"%\n      )")}})}))(pe||(pe=Object(d.a)(["\n  grid-area: 4/1/4/4;\n"]))),Ie=Object(b.d)(f.l)((function(e){var t=e.theme;return Object(b.c)(fe||(fe=Object(d.a)(["\n    grid-area: 1/1/2/2;\n    place-self: start start;\n    ","\n    margin: ",";\n  "])),h.f,t.dimensions.gutter)})),Pe=Object(b.d)(f.f)((function(e){var t=e.theme;return Object(b.c)(ge||(ge=Object(d.a)(["\n    grid-area: 1/1/2/2;\n    place-self: start start;\n    ","\n    margin: ",";\n  "])),h.f,t.dimensions.gutter)})),Re=b.d.div(me||(me=Object(d.a)(["\n  grid-area: 3/1/4/1;\n  place-self: end stretch;\n  display: flex;\n  place-items: start center;\n  ","\n\n  > svg {\n    ","\n  }\n"])),h.o,h.f),Ne=Object(b.d)((function(e){var t=e.onClick,n=void 0===t?j.c:t,r=e.className,i=Object(le.a)(!0),o=Object(c.a)(i,2),l=o[0],d=o[1],b=Object(a.useCallback)((function(e){n(e),d()}),[n,d]);return Object(s.jsxs)(ye,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:b,className:"".concat(r," ").concat(l?"play":"pause"),children:[Object(s.jsx)("rect",{className:"left",color:"currentColor",x:"0",y:"0",width:"24",height:" 24"}),Object(s.jsx)("rect",{className:"right",color:"currentColor",x:"0",y:"0",width:"24",height:" 24"})]})}))(xe||(xe=Object(d.a)(["\n  height: 50px;\n  width: 50px;\n  grid-area: 2/2/3/3;\n  place-self: center center;\n  fill: white;\n  ","\n"])),h.f),Se=b.d.div(ve||(ve=Object(d.a)(["\n  grid-area: 2/1/3/2;\n"]))),_e=b.d.div(we||(we=Object(d.a)(["\n  grid-area: 2/3/3/4;\n"]))),Me=b.d.span((function(e){return Object(b.c)(ke||(ke=Object(d.a)(["\n    grid-area: 3/3/4/4;\n    place-self: end end;\n    background: #00000080;\n    border-radius: 4px;\n    padding: ",";\n    margin: ",";\n  "])),e.theme.dimensions.spacing,e.theme.dimensions.gutter)}));var Fe,Te,Ee,ze=function(e){var t=e.togglePlay,n=void 0===t?j.c:t,i=e.isPaused,o=void 0===i||i,l=e.isPlayable,d=void 0!==l&&l,b=e.currentTime,h=void 0===b?0:b,p=e.duration,g=void 0===p?null:p,m=e.mediaRef,x=e.postId,v=Object(r.c)(O.r),k=Object(le.a)(),y=Object(c.a)(k,2),C=y[0],L=y[1],I=Object(r.c)(O.h),P=Object(r.c)(Object(O.q)(x)).big_src,R=Object(a.useCallback)((function(e){e.stopPropagation(),Object(u.b)(P)}),[P]),N=Object(r.b)(),S=Object(a.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),N(I?Object(Q.u)():Object(Q.t)(x))}),[N,I,x]),_=Object(r.c)(O.f),M=Object(a.useCallback)((function(e){var t=v[e];t&&N(Object(Q.C)(t.id))}),[N,v]),F=_+1<v.length,T=Object(a.useCallback)((function(){M(_+1)}),[M,_]),E=_>0,z=Object(a.useCallback)((function(){M(_-1)}),[M,_]),A=Object(a.useCallback)((function(e){m&&(m.currentTime=e)}),[m]);return Object(s.jsxs)(Ce,{isVisible:o||C,onClick:L,children:[I?Object(s.jsx)(Pe,{color:"white",onClick:S,"aria-label":"Open Fullscreen"}):Object(s.jsx)(Ie,{color:"white",onClick:S,"aria-label":"Open Fullscreen"}),Object(s.jsxs)(Re,{children:[Object(s.jsx)("a",{href:P,target:"_blank",rel:"noopener noreferrer","aria-label":"Open In New Tab",title:P,children:Object(s.jsx)(f.m,{color:"white"})}),Object(s.jsx)(f.k,{color:"white","aria-label":"Download Image",onClick:R,title:P})]}),d&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ne,{color:"white",onClick:n,"aria-label":"Play/Pause"}),!!g&&!!h&&Object(s.jsx)(Le,{value:h,maxValue:g,onChange:A}),m&&!isNaN(m.duration)&&Object(s.jsx)(Me,{children:Object(w.c)(m.duration)}),P.includes(".gif")&&Object(s.jsx)(Me,{children:"GIF"})]}),I&&E&&Object(s.jsx)(Se,{onClick:z}),I&&F&&Object(s.jsx)(_e,{onClick:T})]})},Ae=n(51),De=b.d.video(Fe||(Fe=Object(d.a)(["\n  ","\n  ","\n  grid-area: 1/1/2/2;\n"])),h.j,h.r),We=Object(b.d)(De)(Te||(Te=Object(d.a)(["\n  ","\n"])),h.q),Ve=Object(b.d)(Ae.a)(Ee||(Ee=Object(d.a)(["\n  ","\n"])),h.q);function He(e){var t=e.src,n=e.onLoad,i=void 0===n?j.c:n,o=e.postId,l=e.width,d=e.height,b=Object(a.useState)(null),u=Object(c.a)(b,2),h=u[0],p=u[1],f=Object(a.useState)(Date.now()),g=Object(c.a)(f,2)[1],m=Object(a.useState)(null),x=Object(c.a)(m,2),v=x[0],w=x[1],k=Object(a.useCallback)((function(){h&&h.play();var e=setInterval((function(){g(Date.now())}),34);w(e)}),[h]),y=Object(a.useCallback)((function(){h&&h.pause(),clearInterval(v),w(null)}),[h,v]),C=Object(a.useCallback)((function(e){e.stopPropagation(),h&&(h.paused?k():y())}),[h,k,y]),L=Object(r.c)(O.t)?"auto":"metadata";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(We,{controls:!1,loop:!0,preload:L,ref:p,onLoadedMetadata:i,width:l,height:d,src:t}),Object(s.jsx)(ze,{mediaRef:h,isPaused:!h||h.paused,currentTime:null===h||void 0===h?void 0:h.currentTime,duration:null===h||void 0===h?void 0:h.duration,postId:o,togglePlay:C,isPlayable:!0})]})}function qe(e){var t=e.src,n=e.thumbnail_src,r=e.onLoad,i=void 0===r?j.c:r,o=e.postId,l=e.width,d=e.height,b=Object(a.useState)(!0),u=Object(c.a)(b,2),O=u[0],h=u[1],p=O?n:t;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ve,{src:p,alt:p,loading:"lazy",onLoad:i,width:l,height:d}),Object(s.jsx)(ze,{isPlayable:!0,isPaused:O,togglePlay:function(e){e.stopPropagation(),h(!O)},postId:o})]})}function Ye(e){var t=e.src,n=e.onLoad,c=void 0===n?j.c:n,a=e.postId,r=e.width,i=e.height;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ve,{src:t,alt:t,onLoad:c,loading:"lazy",width:r,height:i}),Object(s.jsx)(ze,{isPlayable:!1,postId:a})]})}var Ge,Be,Ue;function Ke(e){var t=e.type,n=e.src,i=e.thumbnail_src,o=e.onLoad,l=e.postId,d=e.width,b=e.height,h=Object(r.c)(Object(O.q)(l)),p=function(e,t){switch(Object(u.d)(e,t)){case j.a.VIDEO:return He;case j.a.GIF:return qe;default:return Ye}}(t,h),f=Object(a.useMemo)((function(){return Object(u.d)(t,h)===j.a.GIF?[h.small_src.includes(".gif")?i:h.small_src,n.includes(".gif")?n:h.big_src]:[i,n]}),[h,n,i,t]),g=Object(c.a)(f,2),m=g[0],x=g[1];return Object(s.jsx)(p,{src:x,thumbnail_src:m,onLoad:o,postId:l,width:d,height:b})}var Je=b.d.div((function(e){var t=e.theme;return Object(b.c)(Ge||(Ge=Object(d.a)(["\n    padding-top: ",";\n  "])),t.dimensions.gutter)})),$e=b.d.div((function(e){var t=e.theme;return Object(b.c)(Be||(Be=Object(d.a)(["\n    padding: 0 ",";\n    width: 100%;\n    max-width: ",";\n    margin: auto;\n  "])),t.dimensions.gutter,t.dimensions.bodyWidth)})),Qe=b.d.div((function(e){var t=e.theme;return Object(b.c)(Ue||(Ue=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    border-radius: ",";\n    ","\n  "])),t.dimensions.borderRadius,Object(h.p)({theme:t}))}));function Xe(e){var t=e.media_type,n=e.small_src,i=e.big_src,o=e.thumbnail_src,l=e.style,d=e.onLoad,b=void 0===d?j.c:d,h=e.virtualRef,p=e.id,f=e.width,g=e.height,m=e.comments,x=e.has_comments,v=Object(r.b)(),w=Object(le.a)(!0),k=Object(c.a)(w,2),y=k[0],C=k[1],L=Object(r.c)(O.n),I=Object(r.c)(O.A),P=Object(r.c)(O.v),R=Object(a.useMemo)((function(){return Object(u.c)(L,I,i,n)}),[i,L,n,I]);Object(a.useEffect)((function(){b()}),[b,y]),Object(a.useEffect)((function(){!y&&P&&x&&!m&&v(Object(Q.v)(p))}),[y,P,x,m,v,p]);var N=Object(a.useState)("tags"),S=Object(c.a)(N,2),_=S[0],M=S[1];return Object(s.jsx)(Je,{style:l,ref:h,className:"list-div",children:Object(s.jsx)($e,{children:Object(s.jsxs)(Qe,{onClick:C,role:"row",children:[Object(s.jsx)(Ke,{onLoad:b,type:t,src:R,thumbnail_src:o,postId:p,width:f,height:g}),!y&&Object(s.jsx)(ae,{postId:p,onLoad:b,activeTab:_,setActiveTab:M})]})})})}var Ze=n(122),et=n(123),tt=n(100);function nt(e){var t=Object(r.b)();return Object(a.useCallback)((function(){return t(e())}),[e,t])}var ct,at=n(35);function rt(){var e=nt(Q.y);return Object(s.jsx)(at.b,{onClick:e,"aria-label":"Search",children:"Search"})}function it(e){var t=e.onChange,n=Object(r.c)(O.a),c=Object(r.c)(O.m);return Object(a.useEffect)((function(){return t()}),[t,n]),c>0?Object(s.jsx)(p.a,{tags:n,detailed:!0}):null}var ot=b.d.section(ct||(ct=Object(d.a)(["\n  ","\n  ","\n  ","\n"])),h.g,h.o,h.c);function st(e){var t=e.onLoad;return Object(s.jsxs)(ot,{children:[Object(s.jsx)(F.d,{children:Object(s.jsx)("label",{htmlFor:"tag-input",children:"Search"})}),Object(s.jsxs)(tt.a,{children:[Object(s.jsx)(Ze.a,{}),Object(s.jsx)(it,{onChange:t}),Object(s.jsx)(et.a,{}),Object(s.jsx)(rt,{})]})]})}var lt,dt,bt=n(102),jt=n(116),ut=["Try tapping the little plus in the tag search.","You can exclude tags with the '-' modifier.","Each result will have at least one of your '~' tags.","Check out the settings. There are lots of uesful options there.","Starting a tag search with a * gives more results.","When filtering rated posts, you can configure the minimum score by taping the red number.","You can get more info about a post be tapping it once.","Tapping on a tag below a post adds it to your active tags.","Large gifs and videos can take a while to load in the app. Try clicking the 'Open in new tab' icon in the bottom left corner for faster loading times.","If anything stops working or gets weird. Reset the app in the settings.","I hope you are having a nice day!","If a tag is ambiguous, it will have a little arrow on the right. Tapping it shows related tags.","Tapping the icon in the top left of posts brings you into fullscreen mode.","Searching for nothing returns ALL posts ever made.","Results are sorted chronologically. Newest first.","You can search for safe posts by entering 'rating:safe' in the search field. The same works for questionable and explicit.","You can search for posts from a specific website by entering 'source:*twitter* for example.","You can upvote a post by tapping its score in the details.",'Wanna know more about a post? Enable "Show post metadata" in the options.',"Every time you reload the page, a random tip will be shown here.","You can enable comments in the settings. Not all post have comments though."],Ot=Object(b.d)(F.b)((function(e){var t=e.theme;return Object(b.c)(lt||(lt=Object(d.a)(["\n    text-align: center;\n    font-size: 16px;\n    padding: ",";\n    max-width: ",";\n  "])),t.dimensions.hugeSpacing,t.dimensions.bodyWidth)}));function ht(){var e=Object(a.useMemo)((function(){return ut[Math.floor(Math.random()*ut.length)]}),[]);return Object(s.jsx)(Ot,{children:e})}var pt=b.d.div((function(e){var t=e.theme;return Object(b.c)(dt||(dt=Object(d.a)(["\n    ","\n    ","\n    align-items: center;\n    max-width: ",";\n    margin: auto;\n\n    height: calc(100vh - 400px);\n    padding: 0 10%;\n  "])),Object(h.g)(),Object(h.h)(t.dimensions.hugeSpacing),t.dimensions.bodyWidth)}));function ft(){return Object(s.jsxs)(pt,{children:[Object(s.jsx)(ht,{}),Object(s.jsx)(jt.b,{id:"V7V73PWW9",label:"Support Me on Ko-fi"})]})}function gt(){var e=Object(le.a)(),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.c)(O.e),o=n?i.toLocaleString():Object(w.a)(i);return Object(s.jsxs)(F.d,{onClick:a,children:[o," results"]})}function mt(e){var t=e.onLoad,n=void 0===t?j.c:t,c=e.virtualRef,i=e.style,o=Object(r.c)(O.e);return Object(a.useEffect)((function(){o>0&&n()}),[o,n]),Object(s.jsxs)("div",{onLoad:n,ref:c,style:i,role:"row",children:[Object(s.jsx)(bt.a,{}),Object(s.jsx)(st,{onLoad:n}),o>0?Object(s.jsx)(gt,{}):Object(s.jsx)(ft,{})]})}var xt,vt,wt,kt=n(54),yt=n(99),Ct=b.d.div((function(e){var t=e.theme;return Object(b.c)(xt||(xt=Object(d.a)(["\n    padding: ",";\n  "])),t.dimensions.gutter)})),Lt=Object(b.d)(tt.a)((function(e){var t=e.theme;return Object(b.c)(vt||(vt=Object(d.a)(["\n    max-width: ",";\n    margin: auto;\n    text-align: center;\n  "])),t.dimensions.bodyWidth)})),It=Object(b.d)(Ae.a)(wt||(wt=Object(d.a)(["\n  max-height: 50vh;\n"])));function Pt(e){var t=e.onLoad,n=void 0===t?j.c:t,c=e.virtualRef,i=e.style,o=Object(r.c)(O.b),l=Object(a.useMemo)((function(){return o.reduce((function(e,t){return e[t.name]=t,e}),{})}),[o]);return Object(s.jsx)(Ct,{style:i,ref:c,onLoad:n,role:"row",children:Object(s.jsxs)(Lt,{children:[Object(s.jsx)(It,{src:kt.a,alt:"Shironeko does not understand"}),Object(s.jsx)(yt.a,{}),Object(s.jsx)(F.c,{children:"You have reached the end!"}),Object(s.jsx)("p",{children:"Go look for something else!"}),o.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"How about some of these?"}),Object(s.jsx)(p.a,{tags:l,detailed:!0})]})]})})}var Rt,Nt=n(55),St=b.d.div(Rt||(Rt=Object(d.a)(["\n  display: grid;\n  place-items: center;\n"])));function _t(e){var t=e.onLoad,n=void 0===t?j.c:t,c=e.virtualRef,a=e.style;return Object(s.jsx)(St,{onLoad:n,ref:c,style:a,role:"row",children:Object(s.jsx)(Nt.a,{})})}var Mt,Ft,Tt,Et,zt,At,Dt=n(101),Wt=n(115),Vt=b.d.div((function(e){var t=e.theme;return Object(b.c)(Mt||(Mt=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    justify-content: center;\n    place-items: center;\n    gap: ",";\n    padding: ",";\n    padding-bottom: 0;\n    max-width: ",";\n    margin: auto;\n  "])),t.dimensions.gutter,t.dimensions.gutter,t.dimensions.bodyWidth)})),Ht=b.d.div(Ft||(Ft=Object(d.a)(["\n  display: flex;\n  place-self: flex-end;\n  gap: 8px;\n"]))),qt=b.d.div(Tt||(Tt=Object(d.a)(["\n  display: flex;\n  place-self: flex-start;\n  gap: 8px;\n"]))),Yt=Object(b.d)(at.d)(Et||(Et=Object(d.a)(["\n  min-width: 50px;\n"]))),Gt=Object(b.d)(Wt.a)(zt||(zt=Object(d.a)(["\n  min-width: 50px;\n"])));function Bt(e){var t=e.currentPage,n=e.loadPage,c=Object(r.c)(O.j),i=Object(a.useCallback)((function(e){return n(Number(e))}),[n]),o=Object(a.useCallback)((function(){return n(0)}),[n]),l=Object(a.useCallback)((function(){return n(c)}),[n,c]),d=Object(a.useCallback)((function(){return n(t-1)}),[t,n]),b=Object(a.useCallback)((function(){return n(t+1)}),[t,n]);return Object(s.jsxs)(Vt,{className:"page-navigation",children:[Object(s.jsxs)(Ht,{children:[t>1&&Object(s.jsx)(Yt,{onClick:o,children:"0"}),t>0&&Object(s.jsx)(Yt,{onClick:d,children:t-1})]}),Object(s.jsx)(Gt,{value:t,onSubmit:i}),Object(s.jsxs)(qt,{children:[t<c&&Object(s.jsx)(Yt,{onClick:b,children:t+1}),t<c-1&&Object(s.jsx)(Yt,{onClick:l,children:c})]})]})}var Ut=Object(b.d)(Dt.b)((function(e){var t=e.theme;return Object(b.c)(At||(At=Object(d.a)(["\n    padding-bottom: ",";\n  "])),t.dimensions.gutter)}));function Kt(e){var t=e.header,n=e.items,c=e.ItemComponent,r=e.currentPage,o=e.loadPage,l=Object(a.useCallback)((function(e){o(e),document.getElementsByClassName("page-navigation")[0].scrollIntoView()}),[o]);return Object(s.jsxs)(Ut,{children:[t,n&&n.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Bt,{currentPage:r,loadPage:o}),null===n||void 0===n?void 0:n.map((function(e){return Object(s.jsx)(c,Object(i.a)({},e),e.id)})),Object(s.jsx)(Bt,{currentPage:r,loadPage:l})]})]})}var Jt,$t=n(114),Qt=n.n($t),Xt=b.d.div((function(e){var t=e.theme;return Object(b.c)(Jt||(Jt=Object(d.a)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 100vh;\n\n    background: ",";\n\n    z-index: 5;\n  "])),t.colors.backgroundColor)}));function Zt(){var e=Object(r.c)(O.r),t=Object(r.c)(O.n),n=Object(r.c)(O.h),c=Object(r.c)(O.g),a=Object(r.c)(O.f),i=Object(r.c)(O.A),o=nt(Q.x);if(Qt()((function(){a+3>e.length&&o()}),2e3,[a,o,e.length]),!n)return null;var l=c.media_type,d=c.small_src,b=c.big_src,h=c.thumbnail_src,p=c.id,f=c.width,g=c.height,m=Object(u.c)(t,i,b,d);return Object(s.jsx)(Xt,{children:Object(s.jsx)(Ke,{onLoad:j.c,type:l,src:m,thumbnail_src:h,postId:p,width:f,height:g})})}function en(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(r.c)(O.r),d=Object(r.c)(O.i),b=Object(r.c)(O.u),u=Object(r.c)(O.p),h=Object(r.c)(O.o),p=Object(r.b)(),f=nt(Q.x),g=Object(a.useCallback)((function(e){return p(Object(Q.y)(e))}),[p]);return document.title="R34 React",Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Zt,{}),b===j.f.INFINITE_COLUMN?Object(s.jsx)(l,{Header:mt,OutOfItems:Pt,items:o,LoadingItem:_t,hasMoreRows:d,ItemComponent:Xe,loadMore:f,isLoading:n,setLoading:i}):Object(s.jsx)(Kt,{header:Object(s.jsx)(mt,{}),pageSize:u,currentPage:h,hasMorePages:d,loadPage:g,ItemComponent:Xe,isLoading:n,setLoading:i,items:o})]})}}}]);
//# sourceMappingURL=8.a1cade9a.chunk.js.map