(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/OutOfResults.00a98fae.png"},26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(31),n(3)),l=n(10),s=n(6);const u=e=>({type:"SET_ACTIVE_MENU",menu:e}),m=e=>({type:"TOGGLE_TAG",tag:e}),b=(e,t)=>({type:"SET_OPTION",key:e,value:t}),d={activeMenu:"search"};const p={infinite:!0,rated:!1,ratedTreshold:1,originals:!1};var f=n(7);const h=(e,t)=>e.reduce((e,n)=>(e[n[t]]=n,e),{}),g={posts:{},pageNumber:0,count:0};const O={active:{}},E=(e,t)=>Object(s.a)(e,n=>{n.active[t.name]=Object(f.a)(Object(f.a)({},e.active[t.name]),t)}),j=(e,t)=>Object(s.a)(e,e=>{delete e.active[t.name]});var v=Object(l.b)({tags:(e=O,t)=>{switch(t.type){case"ADD_TAG":return E(e,t.tag);case"REMOVE_TAG":return j(e,t.tag);case"TOGGLE_TAG":return((e,t)=>e.active[t.name]?j(e,t):E(e,t))(e,t.tag);default:return e}},results:(e=g,t)=>{switch(t.type){case"ADD_POSTS":return((e,t)=>Object(s.a)(e,n=>{n.posts=Object(f.a)(Object(f.a)({},e.posts),h(t,"id")),n.pageNumber=e.pageNumber+1}))(e,t.posts);case"SET_POSTS":return((e,t,n)=>Object(s.a)(e,e=>{e.posts=h(t,"id"),e.count=n,e.pageNumber=0}))(e,t.posts,t.count);default:return e}},preferences:(e=p,t)=>{switch(t.type){case"SET_OPTION":return((e,t,n)=>Object(s.a)(e,e=>{switch(t){case"infinite":e.infinite=n;break;case"rated":e.rated=n;break;case"ratedTreshold":e.ratedTreshold=n;break;case"originals":e.originals=n}}))(e,t.key,t.value);default:return e}},misc:(e=d,t)=>{switch(t.type){case"SET_ACTIVE_MENU":return((e,t)=>Object(s.a)(e,e=>{e.activeMenu=t}))(e,t.menu);default:return e}}}),x=Object(l.c)(v),y=n(2),w=n(1);const k="#ffffff11; :hover { background: #ffffff16;} transition: background-color 0.4s ease-in-out",T="box-shadow: 0 0 8px #000",_="drop-shadow(0 0 4px rgba(0, 0, 0, 1))";var S=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 12.7 12.7"},r.a.createElement("g",{transform:"translate(0,-284.3)"},r.a.createElement("circle",{id:"path18",cx:"6.3499999",cy:"290.65002",fill:"none",stroke:"crimson",strokeWidth:"0.50848764",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",r:"6.0957561"}),r.a.createElement("text",{fontStyle:"normal",fontWeight:"normal",fontSize:"8.3113203px",fontFamily:"sansSerif",letterSpacing:"0px",wordSpacing:"0px",fill:"crimson",fillOpacity:"1",x:"2.1363549",y:"289.02704",id:"text4533",transform:"scale(0.98538224,1.0148346)"},r.a.createElement("tspan",{id:"tspan4531",x:"2.1363549",y:"289.02704",fontStyle:"normal",fontVariant:"normal",fontWeight:"300",fontStretch:"normal",fontFamily:"Calibri",fill:"crimson",fillOpacity:"1"},"34"))))};const C=e=>e.misc.activeMenu,z=e=>0!==Object.keys(e.results.posts).length,P=e=>e.preferences,N=e=>e.tags.active,A=e=>e.results;var D=n(5);function F(){const e=Object(y.a)(["\n  min-width: 48px;\n  border: "," "," solid;\n  border-right-width: 0;\n  border-radius: "," 0 0 ",";\n"]);return F=function(){return e},e}function R(){const e=Object(y.a)(["\n  border-left-width: 0;\n  border-radius: 0 "," "," 0;\n"]);return R=function(){return e},e}function G(){const e=Object(y.a)(["\n  width: 100%;\n  border-radius: ",";\n"]);return G=function(){return e},e}function I(){const e=Object(y.a)(["\n  height: 32px;\n  font-size: 14px;\n  color: ",";\n  background: ",";\n  border: "," "," solid;\n\n  transition: border-color 0.4s ease-in-out;\n  transition: color 0.4s ease-in-out;\n  transition: background-color 0.4s ease-in-out;\n\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  :active,\n  :focus {\n    color: ",";\n\n    border-color: ",";\n    cursor: pointer;\n  }\n"]);return I=function(){return e},e}function M(){const e=Object(y.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  filter: ",";\n"]);return M=function(){return e},e}function L(){const e=Object(y.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 10px;\n  padding: 5px 5px;\n  filter: ",";\n"]);return L=function(){return e},e}function B(){const e=Object(y.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 10px;\n  padding: 5px 5px;\n  filter: ",";\n"]);return B=function(){return e},e}function H(){const e=Object(y.a)(["\n  color: ",";\n"]);return H=function(){return e},e}function U(){const e=Object(y.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function V(){const e=Object(y.a)(["\n  background: none;\n  border: none;\n  padding: ",";\n\n  :focus {\n    text-decoration: underline;\n  }\n"]);return V=function(){return e},e}function W(){const e=Object(y.a)(["\n  font-size: 14px;\n\n  :focus {\n    outline: none;\n  }\n"]);return W=function(){return e},e}const q=Object(w.b)(D.b.button)(W()),J=Object(w.b)(q)(V(),"4px"),K=Object(w.b)(J)(U(),"white"),Y=Object(w.b)(J)(H(),"crimson"),$=Object(w.b)(J)(B(),_),Q=Object(w.b)(J)(L(),_),X=Object(w.b)(J)(M(),_),Z=Object(w.b)(q)(I(),"crimson","#121212","crimson","2px","crimson","#121212","white","white"),ee=Object(w.b)(Z)(G(),"3px"),te=Object(w.b)(Z)(R(),"3px","3px"),ne=Object(w.b)(J)(F(),"crimson","2px","3px","3px");function ae(e){const t=e.type,n=e.children,a=e.onClick,c=e.active,o=void 0!==c&&c,i=e.disabled,l=void 0!==i&&i,s=e.label,u=((e,t)=>{switch(e){case"invisible":return J;case"block":return ee;case"topLeft":return $;case"bottomLeft":return Q;case"center":return X;case"modifier":return ne;case"add":return te;case"menu":return t?Y:K;default:return Z}})(t,o);return r.a.createElement(u,{onClick:a,disabled:l,"aria-label":s},n)}function re(){const e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: lighter;\n  text-align: center;\n  margin: 0;\n"]);return re=function(){return e},e}function ce(){const e=Object(y.a)(["\n  font-size: 24px;\n  font-weight: lighter;\n  margin: 0;\n  text-align: center;\n"]);return ce=function(){return e},e}var oe=w.b.h2(ce());const ie=w.b.h1(re());function le(){const e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]);return le=function(){return e},e}function se(){const e=Object(y.a)(["\n  background: ",";\n  ",";\n  padding: "," 0;\n  margin-bottom: ",";\n"]);return se=function(){return e},e}function ue(){const e=Object(y.a)(["\n  width: 1px;\n  height: 32px;\n  margin: 0 ",";\n  background: ",";\n"]);return ue=function(){return e},e}function me(){const e=Object(y.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return me=function(){return e},e}const be=w.b.header(me(),"8px"),de=w.b.div(ue(),"8px","white"),pe=w.b.div(se(),k,T,"8px","8px"),fe=w.b.nav(le());var he=function(){const e=Object(i.c)(C),t=Object(i.b)();return r.a.createElement(be,null,r.a.createElement(pe,null,r.a.createElement(ie,null,r.a.createElement(S,{size:32}),r.a.createElement(de,null),r.a.createElement("span",{style:{marginTop:2}},"Browse ",r.a.createElement("a",{href:"https://rule34.xxx"},"Rule34")))),r.a.createElement(fe,null,r.a.createElement(ae,{type:"menu",active:"search"===e,onClick:()=>t(u("search")),label:"search"},"Search"),r.a.createElement(ae,{type:"menu",active:"help"===e,onClick:()=>t(u("help")),label:"help"},"Help"),r.a.createElement(ae,{type:"menu",active:"settings"===e,onClick:()=>t(u("settings")),label:"settings"},"Settings")))};function ge(){const e=Object(y.a)(["\n  width: 1px;\n  height: 20px;\n  background: ",";\n"]);return ge=function(){return e},e}function Oe(){const e=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1px 1fr 1px 1fr;\n  justify-content: space-around;\n  padding: ",";\n"]);return Oe=function(){return e},e}const Ee=w.b.footer(Oe(),"8px"),je=w.b.div(ge(),"white");var ve=function(){return r.a.createElement(Ee,null,r.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react/issues/new?template=bug_report.md"},"Report a bug"),r.a.createElement(je,null),r.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react"},"Github"),r.a.createElement(je,null),r.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react/issues/new?template=feature_request.md"},"Feature request"))};function xe(){const e=Object(y.a)(["\n  width: 100%;\n  height: 1px;\n  background: ",";\n"]);return xe=function(){return e},e}function ye(){const e=Object(y.a)(["\n  padding: ",";\n  background: ",";\n  ",";\n  border-radius: ",";\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return ye=function(){return e},e}var we=w.b.div(ye(),"8px",k,T,"3px","8px");const ke=w.b.div(xe(),k);var Te=n(4),_e=n(8),Se=n.n(_e),Ce=n(12);let ze="https://r34-json.herokuapp.com";fetch(ze).catch(()=>ze="https://r34-api-clone.herokuapp.com");var Pe={getTags:e=>Object(Ce.a)(Se.a.mark((function t(){var n;return Se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(ze,"/tags?limit=").concat(20,"&name=").concat(e,"*&order_by=posts"));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))(),getPosts:(e,t=0,n=0)=>Object(Ce.a)(Se.a.mark((function a(){var r;return Se.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(Ne(t,e,n));case 2:return r=a.sent,a.next=5,r.json();case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),a)})))(),getAliases:e=>Object(Ce.a)(Se.a.mark((function t(){var n;return Se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(ze,'/alias/"').concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()};function Ne(e,t,n){const a=Object.values(t).map(e=>"".concat("-"===e.modifier?"-":"").concat(encodeURIComponent(e.name))).join("+");let r="".concat(ze,"/posts?pid=").concat(e,"&limit=").concat(20,"&tags=").concat(a);return n>0&&(r+="+".concat(encodeURIComponent("score:>="+n))),r}class Ae{constructor(e,t,n,a,r,c,o,i,l,s,u,m,b,d,p,f,h,g,O,E,j){this.id=void 0,this.score=void 0,this.rating=void 0,this.source=void 0,this.tags=void 0,this.media_type=void 0,this.thumbnail_src=void 0,this.small_src=void 0,this.big_src=void 0,this.width=void 0,this.height=void 0,this.creator_id=void 0,this.creator_url=void 0,this.status=void 0,this.parent_id=void 0,this.has_children=void 0,this.has_comments=void 0,this.comments_url=void 0,this.has_notes=void 0,this.created_at=void 0,this.change=void 0,this.id=e,this.score=t,this.rating=n,this.source=a,this.tags=r,this.media_type=c,this.small_src=o,this.big_src=i,this.thumbnail_src=l,this.width=s,this.height=u,this.creator_id=m,this.creator_url=b,this.status=d,this.parent_id=p,this.has_children=f,this.has_comments=h,this.comments_url=g,this.has_notes=O,this.created_at=E,this.change=j}}class De{constructor(e,t=[],n=null,a="+"){this.name=void 0,this.count=void 0,this.types=void 0,this.modifier=void 0,this.name=e,this.types=t,this.count=n,this.modifier=a}}function Fe(e){const t=e.id,n=e.type,a=e.score,r=e.rating,c=e.source,o=e.tags,i=e.file_url,l=e.width,s=e.height,u=e.creator_id,m=e.creator_url,b=e.sample_url,d=e.preview_url,p=e.status,f=e.parent_id,h=e.has_children,g=e.has_comments,O=e.comments_url,E=e.has_notes,j=e.created_at,v=e.change;return new Ae(Number(t),Number(a),r,c,o?o.map(e=>new De(e)):[],n,b,i,d,Number(l),Number(s),Number(u),m,p,Number(f),Boolean(h),Boolean(g),O,Boolean(E),j,v)}function Re(){const e=Object(y.a)(["\n  width: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 14px;\n  border-top: "," "," solid;\n  border-bottom: "," "," solid;\n"]);return Re=function(){return e},e}const Ge=w.b.input(Re(),"crimson","2px","crimson","2px");function Ie(e){const t=e.value,n=e.setValue;return r.a.createElement(Ge,{id:"tag-input",value:t,onChange:e=>n(e.target.value),placeholder:"Search for tags","aria-label":"Search"})}n(38);function Me(e){return e.replace(/_/g," ")}const Le=e=>{const t=e;return t>=1e6?"".concat((t/1e6).toFixed(0),"M"):t>=1e3?"".concat((t/1e3).toFixed(0),"K"):t};function Be(){const e=Object(y.a)(["\n    ","\n    ","\n  "]);return Be=function(){return e},e}function He(){const e=Object(y.a)(["\n      display: inline-block;\n      padding: 0.25rem;\n      border-radius: ",";\n      font-size: 14px;\n      line-height: 1.2;\n      vertical-align: baseline;\n      margin: ",";\n      ","\n    "]);return He=function(){return e},e}const Ue=Object(w.b)(D.b.div)(e=>Object(w.a)(He(),e.collapsed?"3px":"".concat("3px"," ").concat("3px"," 0 0"),"4px",(e=>{const t=e?"#121212":"crimson",n=e?"crimson":"#121212";return"\n    color: ".concat(t,";\n    background-color: ").concat(n,";\n    border: ").concat("crimson"," ").concat("2px"," solid;\n    transition: background-color 0.4s ease-in-out;\n\n    cursor: pointer;\n\n    :hover {\n      background-color: ").concat(t,";\n      color: ").concat(n,";\n      \n      i {\n        color: ").concat(n,";\n      }\n    }\n\n    :focus, :active {\n      color: ").concat("white",";\n      border-color: ").concat("white","\n    }\n  ")})(e.active))),Ve=w.b.span(e=>Object(w.a)(Be(),e.left?"margin-right: 5px;":"",e.right?"margin-left: 5px;":""));function We(e){const t=e.name,n=e.count,a=e.modifier,c=e.types,o=Object(i.b)(),l=Me(t),s=n?"".concat(l," (").concat(Le(n),")"):l;return r.a.createElement("span",{onClick:()=>o(m(new De(t,c,n))),onKeyDown:e=>32===e.keyCode&&o(m(new De(t,c,n)))},"-"===a?r.a.createElement("s",null,s):s)}function qe(e){const t=e.name,n=e.count;return r.a.createElement("div",{className:"alias"},r.a.createElement(We,{name:t,count:n}))}var Je=function(e){const t=e.name,n=e.count,c=e.modifier,o=e.types,l=e.loadAliases,s=Object(i.c)(N),u=Object(a.useState)([]),m=Object(Te.a)(u,2),b=m[0],d=m[1],p=Object(a.useState)(!0),f=Object(Te.a)(p,2),h=f[0],g=f[1];Object(a.useEffect)(()=>{s[t]&&Pe.getAliases(t).then(e=>{e.sort((e,t)=>t.posts-e.posts),d(e.filter(e=>!s[e.name]))})},[t,s]);const O=Boolean(s[t]),E=l&&b&&b.length>0;return r.a.createElement(Ue,{active:O,collapsed:h,onMouseLeave:()=>g(!0)},r.a.createElement(_t,{types:o,left:!0}),r.a.createElement(We,{name:t,count:n,modifier:c,types:o}),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,{right:!0,onClick:()=>g(!h)},r.a.createElement(Et,null)),r.a.createElement("div",{className:"dropdown-list"+(h?"":" visible")},b.map(({name:e,posts:t})=>r.a.createElement(qe,{key:"t_"+e,name:e,count:t})))))};function Ke(){const e=Object(y.a)([""]);return Ke=function(){return e},e}function Ye(){const e=Object(y.a)([""]);return Ye=function(){return e},e}function $e(){const e=Object(y.a)([""]);return $e=function(){return e},e}function Qe(){const e=Object(y.a)([""]);return Qe=function(){return e},e}function Xe(){const e=Object(y.a)([""]);return Xe=function(){return e},e}function Ze(){const e=Object(y.a)([""]);return Ze=function(){return e},e}function et(){const e=Object(y.a)([""]);return et=function(){return e},e}function tt(){const e=Object(y.a)([""]);return tt=function(){return e},e}function nt(){const e=Object(y.a)([""]);return nt=function(){return e},e}function at(){const e=Object(y.a)([""]);return at=function(){return e},e}function rt(){const e=Object(y.a)([""]);return rt=function(){return e},e}function ct(){const e=Object(y.a)([""]);return ct=function(){return e},e}function ot(){const e=Object(y.a)([""]);return ot=function(){return e},e}function it(){const e=Object(y.a)([""]);return it=function(){return e},e}function lt(){const e=Object(y.a)([""]);return lt=function(){return e},e}function st(){const e=Object(y.a)([""]);return st=function(){return e},e}function ut(){const e=Object(y.a)(["\n    line-height: 16px;\n    ","\n    ","\n  "]);return ut=function(){return e},e}function mt(){const e=Object(y.a)(["\n  ","\n"]);return mt=function(){return e},e}const bt=w.b.i(mt(),e=>"\n    color: ".concat(e.color,";\n    min-width: ").concat(e.size,"px;\n    height: ").concat(e.size,"px;\n\n    ").concat(Ue,":hover & {\n      color: ").concat("crimson",";\n    }\n\n    ").concat(Ue,":active & ,  ").concat(Ue,":focus & {\n      color: ").concat("white",";\n    }\n  ")),dt=w.b.span(e=>Object(w.a)(ut(),e.left?"margin-right: 5px;":"",e.right?"margin-left: 5px;":"")),pt=e=>{const t=e.icon,n=e.className,a=void 0===n?"":n,c=e.color,o=void 0===c?"black":c,i=e.size,l=void 0===i?14:i,s=e.onClick,u=void 0===s?()=>{}:s,m=e.left,b=void 0!==m&&m,d=e.right,p=void 0!==d&&d;return r.a.createElement(dt,{onClick:u,left:b,right:p},r.a.createElement(bt,{className:"fas ".concat(t," ").concat(a),color:o,size:l}))},ft=Object(w.b)(pt).attrs({icon:"fa-user"})(st()),ht=Object(w.b)(pt).attrs({icon:"fa-pen"})(lt()),gt=Object(w.b)(pt).attrs({icon:"fa-copyright"})(it()),Ot=(Object(w.b)(pt).attrs({icon:"fa-plus-circle"})(ot()),Object(w.b)(pt).attrs({icon:"fa-minus-circle"})(ct()),Object(w.b)(pt).attrs({icon:"fa-times"})(rt()),Object(w.b)(pt).attrs({icon:"fa-expand"})(at())),Et=Object(w.b)(pt).attrs({icon:"fa-caret-down"})(nt()),jt=Object(w.b)(pt).attrs({icon:"fa-external-link-alt"})(tt()),vt=Object(w.b)(pt).attrs({icon:"fa-hashtag"})(et()),xt=Object(w.b)(pt).attrs({icon:"fa-registered"})(Ze()),yt=Object(w.b)(pt).attrs({icon:"fa-heart"})(Xe()),wt=Object(w.b)(pt).attrs({icon:"fa-play"})(Qe()),kt=Object(w.b)(pt).attrs({icon:"fa-pause"})($e()),Tt=(Object(w.b)(pt).attrs({icon:"fa-caret-down"})(Ye()),Object(w.b)(pt).attrs({icon:"fa-caret-up"})(Ke()),()=>{});function _t(e){const t=e.types,n=void 0===t?[]:t,a=e.className,c=void 0===a?"":a,o=e.onClick,i=void 0===o?Tt:o;switch(n.find(e=>!e.match(/^[general|ambiguous]$/))){case"character":return r.a.createElement(ft,{className:c,onClick:i,left:!0});case"copyright":return r.a.createElement(gt,{className:c,onClick:i,left:!0});case"artist":return r.a.createElement(ht,{className:c,onClick:i,left:!0});default:return r.a.createElement("div",{className:c})}}function St(){const e=Object(y.a)(["\n  flex: 0 0 48px;\n  text-align: center;\n"]);return St=function(){return e},e}function Ct(){const e=Object(y.a)(["\n  display: flex;\n  height: 28px;\n\n  > * {\n    margin: auto;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px grey solid;\n  }\n\n  :focus {\n    text-decoration: underline;\n  }\n"]);return Ct=function(){return e},e}function zt(){const e=Object(y.a)(["\n    ",";\n    background: white;\n    box-sizing: border-box;\n    border: "," "," solid;\n    border-radius: 0 0 3px 3px;\n    color: black;\n    z-index: 1;\n  "]);return zt=function(){return e},e}const Pt=Object(w.b)(D.b.div)(e=>Object(w.a)(zt(),function(e){if(e){const t=e.offsetTop,n=e.clientHeight,a=e.offsetLeft,r=e.clientWidth;return"\n      position: absolute;\n      top: ".concat(t+n-2,"px;\n      left: ").concat(a,"px;\n      width: ").concat(r,"px;")}return""}(e.tagSelectorRef),"2px","crimson"));const Nt=w.b.div(Ct()),At=w.b.span(St());function Dt(e){const t=e.name,n=e.posts,a=e.types,c=e.onClick;return r.a.createElement(Nt,{onClick:c},r.a.createElement(At,null,r.a.createElement(_t,{types:a})),r.a.createElement("span",{style:{flexGrow:1}},Me(t)),r.a.createElement("span",{style:{paddingRight:5}},Le(n)," posts"))}var Ft=function(e){const t=e.tagSelectorRef,n=e.entries,a=e.onClick;return n&&n.length>0?r.a.createElement(Pt,{tagSelectorRef:t,initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}}},n.map(e=>r.a.createElement(Dt,Object.assign({key:e.name},e,{onClick:()=>a(e)})))):null};function Rt(){const e=Object(y.a)(["\n  display: flex;\n  background: white;\n  ","\n"]);return Rt=function(){return e},e}const Gt=w.b.div(Rt(),e=>e.closed?"border-radius: ".concat("3px",";"):"\n        border-radius: ".concat("3px"," ").concat("3px"," 0 0;\n\n        > ").concat(te," {\n          border-radius: 0 ").concat("3px"," 0 0;\n        }\n\n        > ").concat(ne," {\n          border-radius: ").concat("3px"," 0 0 0;\n        }\n      "));var It=function(){const e=Object(i.b)(),t=Object(a.useState)(null),n=Object(Te.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),s=Object(Te.a)(l,2),u=s[0],m=s[1],b=Object(a.useState)("+"),d=Object(Te.a)(b,2),p=d[0],h=d[1],g=Object(a.useState)([]),O=Object(Te.a)(g,2),E=O[0],j=O[1],v=Object(a.useCallback)(t=>{e({type:"ADD_TAG",tag:function(e){const t=e.name,n=e.types,a=e.count,r=e.modifier;return new De(t,n,Number(a),r)}({name:t.name,modifier:p,count:t.posts,types:t.types})}),m(""),j([])},[e,p]);return Object(a.useEffect)(()=>{const e=setTimeout(()=>{var e;u&&""!==u&&Pe.getTags((e=u,e.toLowerCase().replace(/ /g,"_"))).then(e=>{j(e)})},400);return()=>clearTimeout(e)},[u]),r.a.createElement(Gt,{ref:o,closed:0===E.length},r.a.createElement(ae,{type:"modifier",onClick:()=>h("+"===p?"-":"+"),label:"Tag Modifier"},p),r.a.createElement(Ie,{value:u,setValue:m}),r.a.createElement(ae,{type:"add",onClick:()=>{if(u&&""!==u.trim()){const e=E.find(e=>e.name===u)||{};v(Object(f.a)(Object(f.a)({},e),{},{name:u}))}},label:"Add Tag"},"Add"),r.a.createElement(D.a,null,E.length>0&&r.a.createElement(Ft,{tagSelectorRef:c,entries:E,onClick:e=>v(e)})))};function Mt(){const e=Object(y.a)(["\n  width: 20px;\n  height: 20px;\n  background-color: ",";\n  border-radius: 50%;\n"]);return Mt=function(){return e},e}function Lt(){const e=Object(y.a)(["\n  border-radius: 30px;\n  width: 50px;\n  border: "," solid ",";\n  background-color: ",";\n"]);return Lt=function(){return e},e}const Bt=w.b.div(Lt(),"2px","crimson","#121212"),Ht=Object(w.b)(D.b.div)(Mt(),"white"),Ut={enabled:{x:30,background:"crimson"},disabled:{x:0,background:"white"}};function Vt(e){const t=e.initialValue,n=e.value,a=e.onToggle;return r.a.createElement(Bt,{onClick:a},r.a.createElement(Ht,{initial:t?"enabled":"disabled",animate:n?"enabled":"disabled",variants:Ut}))}function Wt(){const e=Object(y.a)(["\n  margin: auto;\n  margin-left: ",";\n"]);return Wt=function(){return e},e}function qt(){const e=Object(y.a)(["\n  display: flex;\n"]);return qt=function(){return e},e}const Jt=w.b.label(qt()),Kt=w.b.span(Wt(),"8px");function Yt(e){const t=e.children,n=e.value,a=e.onToggle;return r.a.createElement(Jt,null,r.a.createElement(Vt,{value:n,onToggle:a}),r.a.createElement(Kt,null,t))}function $t(){const e=Object(y.a)(["\n  background: none;\n  border: none;\n  outline: none;\n  color: ",";\n  max-height: 16px;\n  width: ","em;\n  text-align: right;\n  font-size: 14px;\n  margin: -1px 0.2em 0 0.2em;\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"]);return $t=function(){return e},e}function Qt(){const e=Object(y.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Qt=function(){return e},e}const Xt=w.b.div(Qt(),"8px"),Zt=w.b.input($t(),"crimson",({value:e})=>.57*String(e).length);function en(){const e=Object(i.b)(),t=Object(i.c)(P),n=t.infinite,c=t.rated,o=t.ratedTreshold,l=t.originals,s=Object(a.useState)(o),u=Object(Te.a)(s,2),m=u[0],d=u[1];return r.a.createElement(Xt,null,r.a.createElement(Yt,{value:n,onToggle:()=>e(b("infinite",!n))},"Infinite Scroll"),r.a.createElement(Yt,{value:c,onToggle:()=>e(b("rated",!c))},c?r.a.createElement("div",{style:{display:"flex"}},"Above",r.a.createElement(Zt,{type:"number",value:o,onChange:e=>d(Number(e.target.value)),onBlur:()=>e(b("ratedTreshold",m))}),"likes"):"Only show Rated Posts"),r.a.createElement(Yt,{value:l,onToggle:()=>e(b("originals",!l))},"Load Original Sizes"))}function tn(){const e=Object(y.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  margin: ",";\n"]);return tn=function(){return e},e}const nn=w.b.div(tn(),e=>"calc(".concat(e.padding," - ").concat("4px",")"));function an(e){const t=e.tags,n=e.loadAliases,a=void 0!==n&&n,c=e.padding,o=void 0===c?"0px":c;return r.a.createElement("div",null,r.a.createElement(nn,{padding:o},Object.entries(t).map(([e,t])=>r.a.createElement(Je,Object.assign({key:e},t,{loadAliases:a})))))}var rn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,"Help"),r.a.createElement(we,null,r.a.createElement(oe,null,"Searching for Tags"),r.a.createElement(ke,null),r.a.createElement(It,null),r.a.createElement(ke,null),r.a.createElement("p",null,"You can use the Tag Selector to look for tags you like.The Tag Selector has 4 parts."),r.a.createElement("ol",null,r.a.createElement("li",null,'The modifier (left) determines wether posts must match a tag or not. Putting "-" will hide all posts with this tag'),r.a.createElement("li",null,"The Search Box (center) allows you to search for tags. As soon as you start typing the Tag Selector will show you relevant tags to choose from (4)."),r.a.createElement("li",null,"The Add Button (right) Allows you to add any tag to the current filter. Usefull when using wildcards."),r.a.createElement("li",null,"The Tag Dropdown (left) automatically shows tags that start with your input. It also includes The number of posts tagged, to allow you to weigh tags against each other."))),r.a.createElement(we,null,r.a.createElement(oe,null,"Options"),r.a.createElement(ke,null),r.a.createElement(en,null),r.a.createElement(ke,null),r.a.createElement("p",null,"Options allow you to customize your experience in various ways. There are 3 options available"),r.a.createElement("ol",null,r.a.createElement("li",null,"Infinite Scrolling automatically loads new posts when you get close to the bottom of the page."),r.a.createElement("li",null,"Only show Rated posts filters out posts below the specified amount of posts."),r.a.createElement("li",null,"Load original sizes always loads the highest quality of an image. This can easily cause extreme data consumption. Don't use with mobile data."))),r.a.createElement(we,null,r.a.createElement(oe,null,"Tags"),r.a.createElement(ke,null),r.a.createElement(an,{tags:{"Tag 1":{name:"Tag 1"},"Tag 2":{name:"Tag 2",types:["character"]},"Tag 3":{name:"Tag 3",modifier:"-",types:["copyright"],count:1020}}}),r.a.createElement(ke,null),r.a.createElement("p",null,"This whole application is based on tags. Every Post has multiple tags. Usually you can enable/disable a tag just by tapping it. If a tag is red it means its active. The icons next to the name show what type of tag it is. Not every tag has a type. The number on the right shows how many posts there are with that tag.")))};function cn(){const e=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,"Settings"),r.a.createElement(we,null,r.a.createElement(oe,null,"General"),r.a.createElement("p",null,"nothing yet"),r.a.createElement(ke,null),r.a.createElement(oe,null,"Developer"),r.a.createElement(ee,{onClick:()=>e({type:"RESET"})},"Reset Application")))}function on(){const e=Object(y.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return on=function(){return e},e}const ln=w.b.section(on(),"8px");var sn=function(){const e=Object(i.b)(),t=Object(i.c)(N),n=Object(i.c)(P),c=n.rated,o=n.ratedTreshold,l=Object(a.useCallback)(()=>{Pe.getPosts(t,0,c?o:0).then(t=>{return e((n=t.posts.map(Fe),a=t.count,{type:"SET_POSTS",posts:n,count:a}));var n,a})},[e,c,o,t]);return r.a.createElement(ln,null,r.a.createElement(oe,null,r.a.createElement("label",{htmlFor:"tag-input"},"Search")),r.a.createElement(we,null,r.a.createElement(It,null),Object.keys(t).length>0&&r.a.createElement(an,{tags:t,loadAliases:!0}),r.a.createElement(en,null),r.a.createElement(ae,{type:"block",onClick:l,label:"Search"},"Search")))},un=n(18),mn=n.n(un);function bn(){const e=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: ",";\n  padding: ",";\n  ",";\n\n  > span,\n  > a {\n    margin: ",";\n    line-height: 1rem;\n    height: 1rem;\n  }\n"]);return bn=function(){return e},e}function dn(){const e=Object(y.a)(["\n  > "," {\n    padding: ",";\n  }\n\n  overflow: hidden;\n"]);return dn=function(){return e},e}const pn=Object(w.b)(D.b.div)(dn(),nn,"4px"),fn=w.b.div(bn(),k,"4px",T,"4px");var hn=function(e){const t=e.rating,n=e.score,c=e.source,o=e.tags,i=Object(a.useMemo)(()=>h(o,"name"),[o]);return r.a.createElement(pn,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}}},r.a.createElement(fn,null,t&&r.a.createElement(gn,{value:t}),n&&r.a.createElement(On,{value:n}),c&&r.a.createElement(En,{value:c})),r.a.createElement(an,{tags:i,padding:"8px",loadAliases:!1}))};const gn=e=>r.a.createElement("span",null,r.a.createElement(xt,{color:"white",left:!0}),e.value[0].toUpperCase()),On=e=>r.a.createElement("span",null,e.value,r.a.createElement(yt,{color:"white",right:!0})),En=e=>e.value.startsWith("http")?r.a.createElement("a",{href:e.value,target:"_blank",rel:"noopener noreferrer",className:"source"},r.a.createElement(jt,{color:"red",left:!0}),(e=>{if(e.includes("http:")||e.includes("https:")||e.includes("www.")||e.includes(".com")){let t=e.replace(/https?:\/\//,"").replace(/ww[w\d]\./,"").replace(".com","").replace(".org","").replace(".net","");return t.substring(0,t.indexOf("/"))}return e})(e.value)):r.a.createElement("span",null,r.a.createElement(vt,{color:"white",left:!0}),e.value);function jn(){const e=Object(y.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 5px;\n  background-color: ",";\n"]);return jn=function(){return e},e}const vn=w.b.div(jn(),"crimson"),xn={visible:{opacity:1},hidden:{opacity:0}};function yn(e){const t=e.onFullscreen,n=void 0===t?Tt:t,a=e.togglePlay,c=void 0===a?Tt:a,o=e.isPaused,i=void 0===o||o,l=e.isPlayable,s=e.currentTime,u=e.duration;return r.a.createElement(D.b.div,{initial:"visible",animate:i?"visible":"hidden",whileHover:"visible",variants:xn},n&&r.a.createElement(ae,{type:"topLeft",onClick:n,label:"Open Fullscreen"},r.a.createElement(Ot,{color:"white"})),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{type:"center",onClick:c,label:"Play/Pause"},i?r.a.createElement(wt,{color:"white",size:50}):r.a.createElement(kt,{color:"white",size:50})),!!u&&!!s&&r.a.createElement(vn,{style:{width:"".concat(s/u*100,"%")}})))}yn.defaultProps={onFullscreen:null,togglePlay:Tt,isPaused:!0,isPlayable:!1,currentTime:0,duration:null};var wn=yn;function kn(){const e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  display: block;\n  object-fit: contain;\n"]);return kn=function(){return e},e}const Tn=w.b.video(kn());function _n(e){const t=e.src,n=e.thumbnail_src,c=e.toggleDetails,o=Object(a.useState)(null),i=Object(Te.a)(o,2),l=i[0],s=i[1],u=Object(a.useState)(Date.now()),m=Object(Te.a)(u,2),b=m[0],d=m[1],p=Object(a.useState)(0),f=Object(Te.a)(p,2),h=f[0],g=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Tn,{controls:!1,loop:!0,src:t,poster:n,preload:"metadata",ref:s,onClick:c}),r.a.createElement(wn,{isPaused:!l||l.paused,currentTime:l?l.currentTime:void 0,duration:l?l.duration:void 0,onFullscreen:()=>l&&void l.requestFullscreen(),togglePlay:e=>{e.stopPropagation(),l&&(l.paused?(()=>{l&&l.play();const e=setInterval(()=>{d(Date.now()),console.log(b)},34);g(e)})():(l&&l.pause(),clearInterval(h),g(-1)))},isPlayable:!0}))}function Sn(){const e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  display: block;\n  object-fit: contain;\n"]);return Sn=function(){return e},e}const Cn=w.b.img(Sn());function zn(e){const t=e.src,n=e.thumbnail_src,c=e.toggleDetails,o=Object(a.useState)(!0),i=Object(Te.a)(o,2),l=i[0],s=i[1],u=l?n:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Cn,{src:u,alt:u,onClick:c}),r.a.createElement(wn,{isPlayable:!0,isPaused:l,togglePlay:e=>{e.stopPropagation(),s(!l)}}))}function Pn(){const e=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  display: block;\n  object-fit: contain;\n"]);return Pn=function(){return e},e}const Nn=w.b.img(Pn());function An(e){const t=e.src,n=e.toggleDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Nn,{src:t,alt:t,onClick:n}),r.a.createElement(wn,{isPlayable:!1}))}function Dn(){const e=Object(y.a)(["\n  display: inline-block;\n  position: relative;\n"]);return Dn=function(){return e},e}const Fn=w.b.div(Dn());var Rn=e=>{const t=(e=>{switch(t=e.type,n=e.src,"video"===t?"video":n.includes(".gif")?"gif":"picture"){case"video":return r.a.createElement(_n,e);case"gif":return r.a.createElement(zn,e);default:return r.a.createElement(An,e)}var t,n})(e);return r.a.createElement(Fn,null,t)};function Gn(){const e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  ",";\n  border-radius: ",";\n  overflow: hidden;\n  margin-bottom: ",";\n  box-sizing: border-box;\n"]);return Gn=function(){return e},e}const In=w.b.div(Gn(),k,T,"3px","8px");function Mn(e){const t=e.id,n=e.media_type,c=e.small_src,o=e.big_src,l=e.thumbnail_src,s=e.rating,u=e.score,m=e.source,b=e.tags,d=function(e,t,n,a){let r;return e?r=t:(r="".concat(n,"?").concat(a),r.includes("//images")&&(r=r.replace("//images","/images"))),r}(Object(i.c)(P).originals,o,c,t),p=Object(a.useState)(!0),f=Object(Te.a)(p,2),h=f[0],g=f[1];return r.a.createElement(In,null,r.a.createElement(Rn,{type:n,src:d,thumbnail_src:l,toggleDetails:()=>g(!h)}),r.a.createElement(D.a,{initial:!1},!h&&r.a.createElement(hn,{rating:s,score:u,source:m,tags:b})))}function Ln(){const e=Object(y.a)([""]);return Ln=function(){return e},e}const Bn=w.b.div(Ln());var Hn=function(e){const t=e.posts;return r.a.createElement(Bn,null,Object.entries(t).map(([e,t])=>r.a.createElement(Mn,Object.assign({key:e},t))))};function Un(){const e=Object(y.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Un=function(){return e},e}const Vn=w.b.section(Un(),"8px");let Wn=!0;var qn=function(){const e=Object(i.b)(),t=Object(i.c)(N),n=Object(i.c)(A),c=n.posts,o=n.count,l=n.pageNumber,s=Object(i.c)(P),u=s.rated,m=s.infinite,b=s.ratedTreshold,d=Object(a.useState)(!1),p=Object(Te.a)(d,2),f=p[0],h=p[1],g=Object(a.useCallback)(()=>{Pe.getPosts(t,l+1,u?b:0).then(t=>{h(0===t.posts.length),e({type:"ADD_POSTS",posts:t.posts.map(Fe)}),Wn=!0})},[e,u,l,b,t]);return window.onscroll=Object(a.useCallback)(()=>{m&&Wn&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight-window.innerHeight&&(Wn=!1,g())},[g,m]),r.a.createElement(Vn,{className:"results"},r.a.createElement(oe,null,Le(o)," results"),r.a.createElement(Hn,{posts:c}),!m&&!f&&r.a.createElement(ae,{type:"block",onClick:g,label:"Load More"},"Load More"),f&&r.a.createElement(we,null,r.a.createElement("img",{src:mn.a,alt:mn.a}),r.a.createElement(ke,null),r.a.createElement(oe,null,"You have reached the end!"),r.a.createElement("p",{style:{textAlign:"center"}},"Go look for something else...")))};function Jn(){const e=Object(i.c)(z);return r.a.createElement(r.a.Fragment,null,r.a.createElement(sn,null),e&&r.a.createElement(qn,null))}function Kn(){const e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: strech;\n  min-height: 100%;\n  background: ",";\n  color: ",";\n\n  font-size: 14px;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Kn=function(){return e},e}function Yn(){const e=Object(y.a)(["\n  flex-grow: 1;\n  align-self: strech;\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px;\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Yn=function(){return e},e}const $n=w.b.main(Yn(),"8px"),Qn=w.b.div(Kn(),"#121212","white","crimson","8px");var Xn=function(){const e=function(e){switch(e){case"help":return r.a.createElement(rn,null);case"settings":return r.a.createElement(cn,null);case"search":default:return r.a.createElement(Jn,null)}}(Object(i.c)(C));return r.a.createElement(Qn,null,r.a.createElement(he,null),r.a.createElement($n,null,e),r.a.createElement(ve,null))};function Zn(){return r.a.createElement(i.a,{store:x},r.a.createElement(Xn,null))}o.a.render(r.a.createElement(Zn,null),document.getElementById("app-root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0357f2f4.chunk.js.map