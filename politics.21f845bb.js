function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Jt(t,n,e){n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1})
/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */}var n,t;n=this,t=function(){"use strict";var t="(prefers-reduced-motion: reduce)",n=4,e=5,i={CREATED:1,MOUNTED:2,IDLE:3,MOVING:n,SCROLLING:e,DRAGGING:6,DESTROYED:7};function o(t){t.length=0}function r(t,n,e){return Array.prototype.slice.call(t,n,e)}function u(t){return t.bind.apply(t,[null].concat(r(arguments,1)))}function s(){}var c=setTimeout;function a(t){return requestAnimationFrame(t)}function l(t,n){return typeof n===t}function f(t){return!g(t)&&l("object",t)}var d=Array.isArray,p=u(l,"function"),h=u(l,"string"),v=u(l,"undefined");function g(t){return null===t}function m(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function y(t){return d(t)?t:[t]}function b(t,n){y(t).forEach(n)}function w(t,n){return-1<t.indexOf(n)}function E(t,n){return t.push.apply(t,y(n)),t}function S(t,n,e){t&&b(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function x(t,n){S(t,h(n)?n.split(" "):n,!0)}function P(t,n){b(n,t.appendChild.bind(t))}function k(t,n){b(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function L(t,n){return m(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function C(t,n){return t=t?r(t.children):[],n?t.filter((function(t){return L(t,n)})):t}function A(t,n){return n?C(t,n)[0]:t.firstElementChild}var D=Object.keys;function M(t,n,e){t&&(e?D(t).reverse():D(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)}))}function z(t){return r(arguments,1).forEach((function(n){M(n,(function(e,i){t[i]=n[i]}))})),t}function N(t){return r(arguments,1).forEach((function(n){M(n,(function(n,e){d(n)?t[e]=n.slice():f(n)?t[e]=N({},f(t[e])?t[e]:{},n):t[e]=n}))})),t}function O(t,n){b(n||D(t),(function(n){delete t[n]}))}function I(t,n){b(t,(function(t){b(n,(function(n){t&&t.removeAttribute(n)}))}))}function T(t,n,e){f(n)?M(n,(function(n,e){T(t,e,n)})):b(t,(function(t){g(e)||""===e?I(t,n):t.setAttribute(n,String(e))}))}function F(t,n,e){return t=document.createElement(t),n&&(h(n)?x:T)(t,n),e&&P(e,t),t}function _(t,n,e){if(v(e))return getComputedStyle(t)[n];g(e)||(t.style[n]=""+e)}function j(t,n){_(t,"display",n)}function R(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function W(t,n){return t.getAttribute(n)}function X(t,n){return t&&t.classList.contains(n)}function G(t){return t.getBoundingClientRect()}function B(t){b(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function H(t){return A((new DOMParser).parseFromString(t,"text/html").body)}function Y(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function q(t,n){return t&&t.querySelector(n)}function J(t,n){return n?r(t.querySelectorAll(n)):[]}function U(t,n){S(t,n,!1)}function K(t){return t.timeStamp}function V(t){return h(t)?t:t?t+"px":""}var Q="splide",Z="data-"+Q;function $(t,n){if(!t)throw new Error("["+Q+"] "+(n||""))}var tt=Math.min,nt=Math.max,et=Math.floor,it=Math.ceil,ot=Math.abs;function rt(t,n,e){return ot(t-n)<e}function ut(t,n,e,i){var o=tt(n,e);n=nt(n,e);return i?o<t&&t<n:o<=t&&t<=n}function st(t,n,e){var i=tt(n,e);n=nt(n,e);return tt(nt(i,t),n)}function ct(t){return(0<t)-(t<0)}function at(t,n){return b(n,(function(n){t=t.replace("%s",""+n)})),t}function lt(t){return t<10?"0"+t:""+t}var ft={};function dt(){var t=[];function n(t,n,e){b(t,(function(t){t&&b(n,(function(n){n.split(" ").forEach((function(n){n=n.split("."),e(t,n[0],n[1])}))}))}))}return{bind:function(e,i,o,r){n(e,i,(function(n,e,i){var u="addEventListener"in n,s=u?n.removeEventListener.bind(n,e,o,r):n.removeListener.bind(n,o);u?n.addEventListener(e,o,r):n.addListener(o),t.push([n,e,i,o,s])}))},unbind:function(e,i,o){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),o(t)}}}var pt="mounted",ht="move",vt="moved",gt="click",mt="refresh",yt="updated",bt="resize",wt="resized",Et="scroll",St="scrolled",xt="destroy",Pt="navigation:mounted",kt="autoplay:play",Lt="autoplay:pause",Ct="lazyload:loaded",At="sk",Dt="sh";function Mt(t){var n=t?t.event.bus:document.createDocumentFragment(),e=dt();return t&&t.event.on(xt,e.destroy),z(e,{bus:n,on:function(t,i){e.bind(n,y(t).join(" "),(function(t){i.apply(i,d(t.detail)?t.detail:[])}))},off:u(e.unbind,n),emit:function(t){e.dispatch(n,t,r(arguments,1))}})}function zt(t,n,e,i){var o,r,u=Date.now,s=0,c=!0,l=0;function f(){if(!c){if(s=t?tt((u()-o)/t,1):1,e&&e(s),1<=s&&(n(),o=u(),i&&++l>=i))return d();r=a(f)}}function d(){c=!0}function p(){r&&cancelAnimationFrame(r),r=s=0,c=!0}return{start:function(n){n||p(),o=u()-(n?s*t:0),c=!1,r=a(f)},rewind:function(){o=u(),s=0,e&&e(s)},pause:d,cancel:p,set:function(n){t=n},isPaused:function(){return c}}}var Nt,Ot,It=(Nt="Arrow")+"Left",Tt=Nt+"Right",Ft=Nt+"Up",_t="ttb",jt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Ft,Tt],ArrowRight:[Nt=Nt+"Down",It]},Rt="role",Wt="tabindex",Xt=(Ot="aria-")+"controls",Gt=Ot+"current",Bt=Ot+"selected",Ht=Ot+"label",Yt=Ot+"labelledby",qt=Ot+"hidden",Ut=Ot+"orientation",Kt=Ot+"roledescription",Vt=Ot+"live",Qt=Ot+"busy",Zt=Ot+"atomic",$t=[Rt,Wt,"disabled",Xt,Gt,Ht,Yt,qt,Ut,Kt],tn=Q,nn=(Ot=Q+"__")+"track",en=Ot+"list",on=Ot+"slide",rn=on+"--clone",un=on+"__container",sn=Ot+"arrows",cn=Ot+"arrow",an=cn+"--prev",ln=cn+"--next",fn=Ot+"pagination",dn=fn+"__page",pn=Ot+"progress__bar",hn=Ot+"toggle",vn=Ot+"sr",gn="is-active",mn="is-prev",yn="is-next",bn="is-visible",wn="is-loading",En="is-focus-in",Sn="is-overflow",xn=[gn,bn,mn,yn,wn,En,Sn],Pn="touchstart mousedown",kn="touchmove mousemove",Ln="touchend touchcancel mouseup click",Cn="slide",An="loop",Dn="fade";var Mn=Z+"-interval",zn={passive:!1,capture:!0},Nn={Spacebar:" ",Right:Tt,Left:It,Up:Ft,Down:Nt};function On(t){return t=h(t)?t:t.key,Nn[t]||t}var In="keydown",Tn=Z+"-lazy",Fn=Tn+"-srcset",_n="["+Tn+"], ["+Fn+"]",jn=[" ","Enter"],Rn=Object.freeze({__proto__:null,Media:function(n,e,i){var o=n.state,r=i.breakpoints||{},u=i.reducedMotion||{},s=dt(),c=[];function a(t){t&&s.destroy()}function l(t,n){n=matchMedia(n),s.bind(n,"change",f),c.push([t,n])}function f(){var t=o.is(7),e=i.direction,r=c.reduce((function(t,n){return N(t,n[1].matches?n[0]:{})}),{});O(i),d(r),i.destroy?n.destroy("completely"===i.destroy):t?(a(!0),n.mount()):e!==i.direction&&n.refresh()}function d(t,e,r){N(i,t),e&&N(Object.getPrototypeOf(i),t),!r&&o.is(1)||n.emit(yt,i)}return{setup:function(){var n="min"===i.mediaQuery;D(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,t),f()},destroy:a,reduce:function(n){matchMedia(t).matches&&(n?N(i,u):O(i,D(u)))},set:d}},Direction:function(t,n,e){return{resolve:function(t,n,i){var o="rtl"!==(i=i||e.direction)||n?i===_t?0:-1:1;return jt[t]&&jt[t][o]||t.replace(/width|left|right/i,(function(t,n){return t=jt[t.toLowerCase()][o]||t,0<n?t.charAt(0).toUpperCase()+t.slice(1):t}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var i,r,u,s=Mt(t),c=s.on,a=s.bind,l=t.root,f=e.i18n,d={},h=[],v=[],g=[];function m(){i=w("."+nn),r=A(i,"."+en),$(i&&r,"A track/list element is missing."),E(h,C(r,"."+on+":not(."+rn+")")),M({arrows:sn,pagination:fn,prev:an,next:ln,bar:pn,toggle:hn},(function(t,n){d[n]=w("."+t)})),z(d,{root:l,track:i,list:r,slides:h});var t,n=l.id||""+(t=Q)+lt(ft[t]=(ft[t]||0)+1),o=e.role;l.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!W(l,Rt)&&"SECTION"!==l.tagName&&o&&T(l,Rt,o),T(l,Kt,f.carousel),T(r,Rt,"presentation"),b()}function y(t){var n=$t.concat("style");o(h),U(l,v),U(i,g),I([i,r],n),I(l,t?n:["style",Kt])}function b(){U(l,v),U(i,g),v=P(tn),g=P(nn),x(l,v),x(i,g),T(l,Ht,e.label),T(l,Yt,e.labelledby)}function w(t){return(t=q(l,t))&&function(t,n){if(p(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!L(e,n);)e=e.parentElement;return e}(t,"."+tn)===l?t:void 0}function P(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===tn&&gn]}return z(d,{setup:m,mount:function(){c(mt,y),c(mt,m),c(yt,b),a(document,Pn+" keydown",(function(t){u="keydown"===t.type}),{capture:!0}),a(l,"focusin",(function(){S(l,En,!!u)}))},destroy:y})},Slides:function(t,i,r){var s=Mt(t),c=s.on,a=s.emit,l=s.bind,f=(s=i.Elements).slides,d=s.list,v=[];function g(){f.forEach((function(t,n){C(t,n,-1)}))}function E(){M((function(t){t.destroy()})),o(v)}function C(i,o,r){o=function(t,i,o,r){var s,c=Mt(t),a=c.on,l=c.emit,f=c.bind,d=t.Components,p=t.root,h=t.options,v=h.isNavigation,g=h.updateOnMove,m=h.i18n,y=h.pagination,b=h.slideFocus,w=d.Direction.resolve,E=W(r,"style"),x=W(r,Ht),P=-1<o,k=A(r,"."+un);function L(){var n=t.splides.map((function(t){return(t=t.splide.Components.Slides.getAt(i))?t.slide.id:""})).join(" ");T(r,Ht,at(m.slideX,(P?o:i)+1)),T(r,Xt,n),T(r,Rt,b?"button":""),b&&I(r,Kt)}function C(){s||D()}function D(){var o,u,c;s||(o=t.index,(c=M())!==X(r,gn)&&(S(r,gn,c),T(r,Gt,v&&c||""),l(c?"active":"inactive",z)),u=!(c=function(){if(t.is(Dn))return M();var n=G(d.Elements.track),e=G(r),i=w("left",!0),o=w("right",!0);return et(n[i])<=it(e[i])&&et(e[o])<=it(n[o])}())&&(!M()||P),t.state.is([n,e])||T(r,qt,u||""),T(J(r,h.focusableNodes||""),Wt,u?-1:""),b&&T(r,Wt,u?-1:0),c!==X(r,bn)&&(S(r,bn,c),l(c?"visible":"hidden",z)),c||document.activeElement!==r||(u=d.Slides.getAt(t.index))&&R(u.slide),S(r,mn,i===o-1),S(r,yn,i===o+1))}function M(){var n=t.index;return n===i||h.cloneStatus&&n===o}var z={index:i,slideIndex:o,slide:r,container:k,isClone:P,mount:function(){P||(r.id=p.id+"-slide"+lt(i+1),T(r,Rt,y?"tabpanel":"group"),T(r,Kt,m.slide),T(r,Ht,x||at(m.slideLabel,[i+1,t.length]))),f(r,"click",u(l,gt,z)),f(r,"keydown",u(l,At,z)),a([vt,Dt,St],D),a(Pt,L),g&&a(ht,C)},destroy:function(){s=!0,c.destroy(),U(r,xn),I(r,$t),T(r,"style",E),T(r,Ht,x||"")},update:D,style:function(t,n,e){_(e&&k||r,t,n)},isWithin:function(n,e){return n=ot(n-i),(n=P||!h.rewind&&!t.is(An)?n:tt(n,t.length-n))<=e}};return z}(t,o,r,i),o.mount(),v.push(o),v.sort((function(t,n){return t.index-n.index}))}function D(t){return t?z((function(t){return!t.isClone})):v}function M(t,n){D(n).forEach(t)}function z(t){return v.filter(p(t)?t:function(n){return h(t)?L(n.slide,t):w(y(t),n.index)})}return{mount:function(){g(),c(mt,E),c(mt,g)},destroy:E,update:function(){M((function(t){t.update()}))},register:C,get:D,getIn:function(t){var n=i.Controller,e=n.toIndex(t),o=n.hasFocus()?1:r.perPage;return z((function(t){return ut(t.index,e,e+o-1)}))},getAt:function(t){return z(t)[0]},add:function(t,n){b(t,(function(t){var e,i,o;m(t=h(t)?H(t):t)&&((e=f[n])?k(t,e):P(d,t),x(t,r.classes.slide),e=t,i=u(a,bt),e=J(e,"img"),(o=e.length)?e.forEach((function(t){l(t,"load error",(function(){--o||i()}))})):i())})),a(mt)},remove:function(t){B(z(t).map((function(t){return t.slide}))),a(mt)},forEach:M,filter:z,style:function(t,n,e){M((function(i){i.style(t,n,e)}))},getLength:function(t){return(t?f:v).length},isEnough:function(){return v.length>r.perPage}}},Layout:function(t,n,e){var i,o,r,s=(l=Mt(t)).on,c=l.bind,a=l.emit,l=n.Slides,d=n.Direction.resolve,p=(n=n.Elements).root,h=n.track,v=n.list,g=l.getAt,m=l.style;function y(){i=e.direction===_t,_(p,"maxWidth",V(e.width)),_(h,d("paddingLeft"),w(!1)),_(h,d("paddingRight"),w(!0)),b(!0)}function b(t){var n,u=G(p);!t&&o.width===u.width&&o.height===u.height||(_(h,"height",(n="",i&&($(n=E(),"height or heightRatio is missing."),n="calc("+n+" - "+w(!1)+" - "+w(!0)+")"),n)),m(d("marginRight"),V(e.gap)),m("width",e.autoWidth?null:V(e.fixedWidth)||(i?"":x())),m("height",V(e.fixedHeight)||(i?e.autoHeight?null:x():E()),!0),o=u,a(wt),r!==(r=D())&&(S(p,Sn,r),a("overflow",r)))}function w(t){var n=e.padding;t=d(t?"right":"left");return n&&V(n[t]||(f(n)?0:n))||"0px"}function E(){return V(e.height||G(v).width*e.heightRatio)}function x(){var t=V(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function P(){return G(v)[d("width")]}function k(t,n){return(t=g(t||0))?G(t.slide)[d("width")]+(n?0:A()):0}function L(t,n){var e;return(t=g(t))?(t=G(t.slide)[d("right")],e=G(v)[d("left")],ot(t-e)+(n?0:A())):0}function C(n){return L(t.length-1)-L(0)+k(0,n)}function A(){var t=g(0);return t&&parseFloat(_(t.slide,d("marginRight")))||0}function D(){return t.is(Dn)||C(!0)>P()}return{mount:function(){var t,n;y(),c(window,"resize load",(t=u(a,bt),n=zt(0,t,null,1),function(){n.isPaused()&&n.start()})),s([yt,mt],y),s(bt,b)},resize:b,listSize:P,slideSize:k,sliderSize:C,totalSize:L,getPadding:function(t){return parseFloat(_(h,d("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var i,r=Mt(t),u=r.on,s=n.Elements,c=n.Slides,a=n.Direction.resolve,l=[];function f(){if(u(mt,d),u([yt,bt],h),i=g()){var o=i,r=c.get().slice(),a=r.length;if(a){for(;r.length<o;)E(r,r);E(r.slice(-o),r.slice(0,o)).forEach((function(n,i){var u,f,d=i<o,p=(u=n.slide,f=i,x(u=u.cloneNode(!0),e.classes.clone),u.id=t.root.id+"-clone"+lt(f+1),u);d?k(p,r[0].slide):P(s.list,p),E(l,p),c.register(p,i-o+(d?0:a),n.index)}))}n.Layout.resize(!0)}}function d(){p(),f()}function p(){B(l),o(l),r.destroy()}function h(){var t=g();i!==t&&(i<t||!t)&&r.emit(mt)}function g(){var i,o=e.clones;return t.is(An)?v(o)&&(o=(i=e[a("fixedWidth")]&&n.Layout.slideSize(0))&&it(G(s.track)[a("width")]/i)||e[a("autoWidth")]&&t.length||2*e.perPage):o=0,o}return{mount:f,destroy:p}},Move:function(t,e,i){var o,r=Mt(t),u=r.on,s=r.emit,c=t.state.set,a=(r=e.Layout).slideSize,l=r.getPadding,f=r.totalSize,d=r.listSize,p=r.sliderSize,h=(r=e.Direction).resolve,g=r.orient,m=(r=e.Elements).list,y=r.track;function b(){e.Controller.isBusy()||(e.Scroll.cancel(),w(t.index),e.Slides.update())}function w(t){E(k(t,!0))}function E(n,i){var o,r,u;t.is(Dn)||(i=i?n:(o=n,t.is(An)&&(u=(r=P(o))>e.Controller.getEnd(),(r<0||u)&&(o=S(o,u))),o),_(m,"transform","translate"+h("X")+"("+i+"px)"),n!==i&&s(Dt))}function S(t,n){var e=t-C(n),i=p();return t-g(i*(it(ot(e)/i)||1))*(n?1:-1)}function x(){E(L(),!0),o.cancel()}function P(t){for(var n=e.Slides.get(),i=0,o=1/0,r=0;r<n.length;r++){var u=n[r].index,s=ot(k(u,!0)-t);if(!(s<=o))break;o=s,i=u}return i}function k(n,e){var o=g(f(n-1)-("center"===(o=i.focus)?(d()-a(n,!0))/2:+o*a(n)||0));return e?(n=o,n=i.trimSpace&&t.is(Cn)?st(n,0,g(p(!0)-d())):n):o}function L(){var t=h("left");return G(m)[t]-G(y)[t]+g(l(!1))}function C(t){return k(t?e.Controller.getEnd():0,!!i.trimSpace)}return{mount:function(){o=e.Transition,u([pt,wt,yt,mt],b)},move:function(t,e,i,r){var u,a;t!==e&&(u=i<t,a=g(S(L(),u)),u?0<=a:a<=m[h("scrollWidth")]-G(y)[h("width")])&&(x(),E(S(L(),i<t),!0)),c(n),s(ht,e,i,t),o.start(e,(function(){c(3),s(vt,e,i,t),r&&r()}))},jump:w,translate:E,shift:S,cancel:x,toIndex:P,toPosition:k,getPosition:L,getLimit:C,exceededLimit:function(t,n){n=v(n)?L():n;var e=!0!==t&&g(n)<g(C(!1));t=!1!==t&&g(n)>g(C(!0));return e||t},reposition:b}},Controller:function(t,i,o){var r,s,c,a,l=Mt(t),f=l.on,d=l.emit,p=i.Move,g=p.getPosition,m=p.getLimit,y=p.toPosition,b=(l=i.Slides).isEnough,w=l.getLength,E=o.omitEnd,S=t.is(An),x=t.is(Cn),P=u(M,!1),k=u(M,!0),L=o.start||0,C=L;function A(){s=w(!0),c=o.perMove,a=o.perPage,r=O();var t=st(L,0,E?r:s-1);t!==L&&(L=t,p.reposition())}function D(){r!==O()&&d("ei")}function M(t,n){var e=c||(_()?1:a);return-1===(e=z(L+e*(t?-1:1),L,!(c||_())))&&x&&!rt(g(),m(!t),1)?t?0:r:n?e:N(e)}function z(n,e,i){var u;return b()||_()?((u=function(n){if(x&&"move"===o.trimSpace&&n!==L)for(var e=g();e===y(n,!0)&&ut(n,0,t.length-1,!o.rewind);)n<L?--n:++n;return n}(n))!==n&&(e=n,n=u,i=!1),n<0||r<n?n=c||!ut(0,n,e,!0)&&!ut(r,e,n,!0)?S?i?n<0?-(s%a||a):s:n:o.rewind?n<0?r:0:-1:I(T(n)):i&&n!==e&&(n=I(T(e)+(n<e?-1:1)))):n=-1,n}function N(t){return S?(t+s)%s||0:t}function O(){for(var t=s-(_()||S&&c?1:a);E&&0<t--;)if(y(s-1,!0)!==y(t,!0)){t++;break}return st(t,0,s-1)}function I(t){return st(_()?t:a*t,0,r)}function T(t){return _()?tt(t,r):et((r<=t?s-1:t)/a)}function F(t){t!==L&&(C=L,L=t)}function _(){return!v(o.focus)||o.isNavigation}function j(){return t.state.is([n,e])&&!!o.waitForTransition}return{mount:function(){A(),f([yt,mt,"ei"],A),f(wt,D)},go:function(t,n,e){var i,o,u,s,c;j()||-1<(i=N((c=L,h(o=t)?(u=(s=o.match(/([+\-<>])(\d+)?/)||[])[1],s=s[2],"+"===u||"-"===u?c=z(L+ +(""+u+(+s||1)),L):">"===u?c=s?I(+s):P(!0):"<"===u&&(c=k(!0))):c=S?o:st(o,0,r),t=c)))&&(n||i!==L)&&(F(i),p.move(t,i,C,e))},scroll:function(t,n,e,o){i.Scroll.scroll(t,n,e,(function(){var t=N(p.toIndex(g()));F(E?tt(t,r):t),o&&o()}))},getNext:P,getPrev:k,getAdjacent:M,getEnd:O,setIndex:F,getIndex:function(t){return t?C:L},toIndex:I,toPage:T,toDest:function(t){return t=p.toIndex(t),x?st(t,0,r):t},hasFocus:_,isBusy:j}},Arrows:function(t,n,e){var i,o,r=Mt(t),s=r.on,c=r.bind,a=r.emit,l=e.classes,f=e.i18n,d=n.Elements,p=n.Controller,h=d.arrows,v=d.track,g=h,m=d.prev,y=d.next,b={};function w(){var t=e.arrows;!t||m&&y||(g=h||F("div",l.arrows),m=C(!0),y=C(!1),i=!0,P(g,[m,y]),h||k(g,v)),m&&y&&(z(b,{prev:m,next:y}),j(g,t?"":"none"),x(g,o=sn+"--"+e.direction),t&&(s([pt,vt,mt,St,"ei"],A),c(y,"click",u(L,">")),c(m,"click",u(L,"<")),A(),T([m,y],Xt,v.id),a("arrows:mounted",m,y))),s(yt,E)}function E(){S(),w()}function S(){r.destroy(),U(g,o),i?(B(h?[m,y]:g),m=y=null):I([m,y],$t)}function L(t){p.go(t,!0)}function C(t){return H('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function A(){var n,e,i,o;m&&y&&(o=t.index,n=p.getPrev(),e=p.getNext(),i=-1<n&&o<n?f.last:f.prev,o=-1<e&&e<o?f.first:f.next,m.disabled=n<0,y.disabled=e<0,T(m,Ht,i),T(y,Ht,o),a("arrows:updated",m,y,n,e))}return{arrows:b,mount:w,destroy:S,update:A}},Autoplay:function(t,n,e){var i,o,r=Mt(t),u=r.on,s=r.bind,c=r.emit,a=zt(e.interval,t.go.bind(t,">"),(function(t){var n=f.bar;n&&_(n,"width",100*t+"%"),c("autoplay:playing",t)})),l=a.isPaused,f=n.Elements,d=(r=n.Elements).root,p=r.toggle,h=e.autoplay,v="pause"===h;function g(){l()&&n.Slides.isEnough()&&(a.start(!e.resetProgress),o=i=v=!1,b(),c(kt))}function m(t){v=!!(t=void 0===t||t),b(),l()||(a.pause(),c(Lt))}function y(){v||(i||o?m(!1):g())}function b(){p&&(S(p,gn,!v),T(p,Ht,e.i18n[v?"play":"pause"]))}function w(t){t=n.Slides.getAt(t),a.set(t&&+W(t.slide,Mn)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&s(d,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,y()})),e.pauseOnFocus&&s(d,"focusin focusout",(function(t){o="focusin"===t.type,y()})),p&&s(p,"click",(function(){v?g():m(!0)})),u([ht,Et,mt],a.rewind),u(ht,w),p&&T(p,Xt,f.track.id),v||g(),b())},destroy:a.cancel,play:g,pause:m,isPaused:l}},Cover:function(t,n,e){var i=Mt(t).on;function o(t){n.Slides.forEach((function(n){var e=A(n.container||n.slide,"img");e&&e.src&&r(t,e,n)}))}function r(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),j(n,t?"none":"")}return{mount:function(){e.cover&&(i(Ct,u(r,!0)),i([pt,yt,mt],u(o,!0)))},destroy:u(o,!1)}},Scroll:function(t,n,i){var o,r,s=Mt(t),c=s.on,a=s.emit,l=t.state.set,f=n.Move,d=f.getPosition,p=f.getLimit,h=f.exceededLimit,v=f.translate,g=t.is(Cn),m=1;function y(t,i,s,c,p){var v,y=d();E(),!s||g&&h()||(s=n.Layout.sliderSize(),v=ct(t)*s*et(ot(t)/s)||0,t=f.toPosition(n.Controller.toDest(t%s))+v),s=rt(y,t,1);m=1,i=s?0:i||nt(ot(t-y)/1.5,800),r=c,o=zt(i,b,u(w,y,t,p),1),l(e),a(Et),o.start()}function b(){l(3),r&&r(),a(St)}function w(t,n,e,o){var u=d();o=(t+(n-t)*(n=o,(t=i.easingFunc)?t(n):1-Math.pow(1-n,4))-u)*m;v(u+o),g&&!e&&h()&&(m*=.6,ot(o)<10&&y(p(h(!0)),600,!1,r,!0))}function E(){o&&o.cancel()}function S(){o&&!o.isPaused()&&(E(),b())}return{mount:function(){c(ht,E),c([yt,mt],S)},destroy:E,scroll:y,cancel:S}},Drag:function(t,i,o){var r,u,c,a,l,d,p,h,v=Mt(t),g=v.on,m=v.emit,y=v.bind,b=v.unbind,w=t.state,E=i.Move,S=i.Scroll,x=i.Controller,P=i.Elements.track,k=i.Media.reduce,C=(v=i.Direction).resolve,A=v.orient,D=E.getPosition,M=E.exceededLimit,z=!1;function N(){var t=o.drag;B(!t),a="free"===t}function O(t){var i,r,u;d=!1,p||(i=G(t),r=t.target,u=o.noDrag,L(r,"."+dn+", ."+cn)||u&&L(r,u)||!i&&t.button||(x.isBusy()?Y(t,!0):(h=i?P:window,l=w.is([n,e]),c=null,y(h,kn,I,zn),y(h,Ln,T,zn),E.cancel(),S.cancel(),_(t))))}function I(n){var e,i,u,s,c;w.is(6)||(w.set(6),m("drag")),n.cancelable&&(l?(E.translate(r+j(n)/(z&&t.is(Cn)?5:1)),c=200<R(n),e=z!==(z=M()),(c||e)&&_(n),d=!0,m("dragging"),Y(n)):ot(j(c=n))>ot(j(c,!0))&&(e=n,s=(u=f(i=o.dragMinThreshold))&&i.mouse||0,u=(u?i.touch:+i)||10,l=ot(j(e))>(G(e)?u:s),Y(n)))}function T(n){var e,r,u,s;w.is(6)&&(w.set(3),m("dragged")),l&&(s=e=function(n){if(t.is(An)||!z){var e=R(n);if(e&&e<200)return j(n)/e}return 0}(e=n),r=D()+ct(s)*tt(ot(s)*(o.flickPower||600),a?1/0:i.Layout.listSize()*(o.flickMaxPages||1)),u=o.rewind&&o.rewindByDrag,k(!1),a?x.scroll(r,0,o.snap):t.is(Dn)?x.go(A(ct(e))<0?u?"<":"-":u?">":"+"):t.is(Cn)&&z&&u?x.go(M(!0)?">":"<"):x.go(x.toDest(r),!0),k(!0),Y(n)),b(h,kn,I),b(h,Ln,T),l=!1}function F(t){!p&&d&&Y(t,!0)}function _(t){c=u,u=t,r=D()}function j(t,n){return X(t,n)-X(W(t),n)}function R(t){return K(t)-K(W(t))}function W(t){return u===t&&c||u}function X(t,n){return(G(t)?t.changedTouches[0]:t)["page"+C(n?"Y":"X")]}function G(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function B(t){p=t}return{mount:function(){y(P,kn,s,zn),y(P,Ln,s,zn),y(P,Pn,O,zn),y(P,"click",F,{capture:!0}),y(P,"dragstart",Y),g([pt,yt],N)},disable:B,isDragging:function(){return l}}},Keyboard:function(t,n,e){var i,o,r=Mt(t),u=r.on,s=r.bind,a=r.unbind,l=t.root,f=n.Direction.resolve;function d(){var t=e.keyboard;t&&(i="global"===t?window:l,s(i,In,v))}function p(){a(i,In)}function h(){var t=o;o=!0,c((function(){o=t}))}function v(n){o||((n=On(n))===f(It)?t.go("<"):n===f(Tt)&&t.go(">"))}return{mount:function(){d(),u(yt,p),u(yt,d),u(ht,h)},destroy:p,disable:function(t){o=t}}},LazyLoad:function(t,n,e){var i=Mt(t),r=i.on,s=i.off,c=i.bind,a=i.emit,l="sequential"===e.lazyLoad,f=[vt,St],d=[];function p(){o(d),n.Slides.forEach((function(t){J(t.slide,_n).forEach((function(n){var i=W(n,Tn),o=W(n,Fn);i===n.src&&o===n.srcset||(i=e.classes.spinner,i=A(o=n.parentElement,"."+i)||F("span",i,o),d.push([n,t,i]),n.src||j(n,"none"))}))})),(l?m:(s(f),r(f,h),h))()}function h(){(d=d.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||v(n)}))).length||s(f)}function v(t){var n=t[0];x(t[1].slide,wn),c(n,"load error",u(g,t)),T(n,"src",W(n,Tn)),T(n,"srcset",W(n,Fn)),I(n,Tn),I(n,Fn)}function g(t,n){var e=t[0],i=t[1];U(i.slide,wn),"error"!==n.type&&(B(t[2]),j(e,""),a(Ct,e,i),a(bt)),l&&m()}function m(){d.length&&v(d.shift())}return{mount:function(){e.lazyLoad&&(p(),r(mt,p))},destroy:u(o,d),check:h}},Pagination:function(t,n,e){var i,s,c=Mt(t),a=c.on,l=c.emit,f=c.bind,d=n.Slides,p=n.Elements,h=n.Controller,v=h.hasFocus,g=h.getIndex,m=h.go,y=n.Direction.resolve,b=p.pagination,w=[];function E(){i&&(B(b?r(i.children):i),U(i,s),o(w),i=null),c.destroy()}function S(t){m(">"+t,!0)}function P(t,n){var e=w.length,i=On(n),o=k(),r=-1;(o=(i===y(Tt,!1,o)?r=++t%e:i===y(It,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1),w[r]))&&(R(o.button),m(">"+r),Y(n,!0))}function k(){return e.paginationDirection||e.direction}function L(t){return w[h.toPage(t)]}function C(){var t,n=L(g(!0)),e=L(g());n&&(U(t=n.button,gn),I(t,Bt),T(t,Wt,-1)),e&&(x(t=e.button,gn),T(t,Bt,!0),T(t,Wt,"")),l("pagination:updated",{list:i,items:w},n,e)}return{items:w,mount:function n(){E(),a([yt,mt,"ei"],n);var o=e.pagination;if(b&&j(b,o?"":"none"),o){a([ht,Et,St],C);o=t.length;var r=e.classes,c=e.i18n,g=e.perPage,m=v()?h.getEnd()+1:it(o/g);x(i=b||F("ul",r.pagination,p.track.parentElement),s=fn+"--"+k()),T(i,Rt,"tablist"),T(i,Ht,c.select),T(i,Ut,k()===_t?"vertical":"");for(var y=0;y<m;y++){var A=F("li",null,i),D=F("button",{class:r.page,type:"button"},A),M=d.getIn(y).map((function(t){return t.slide.id})),z=!v()&&1<g?c.pageX:c.slideX;f(D,"click",u(S,y)),e.paginationKeyboard&&f(D,"keydown",u(P,y)),T(A,Rt,"presentation"),T(D,Rt,"tab"),T(D,Xt,M.join(" ")),T(D,Ht,at(z,y+1)),T(D,Wt,-1),w.push({li:A,button:D,page:y})}C(),l("pagination:mounted",{list:i,items:w},L(t.index))}},destroy:E,getAt:L,update:C}},Sync:function(t,n,e){var i=e.isNavigation,r=e.slideFocus,s=[];function c(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&((e=(n=Mt(t)).on)(gt,d),e(At,p),e([pt,yt],f),s.push(n),n.emit(Pt,t.splides))}function a(){s.forEach((function(t){t.destroy()})),o(s)}function l(t,n){(t=Mt(t)).on(ht,(function(t,e,i){n.go(n.is(An)?i:t)})),s.push(t)}function f(){T(n.Elements.list,Ut,e.direction===_t?"vertical":"")}function d(n){t.go(n.index)}function p(t,n){w(jn,On(n))&&(d(t),Y(n))}return{setup:u(n.Media.set,{slideFocus:v(r)?i:r},!0),mount:c,destroy:a,remount:function(){a(),c()}}},Wheel:function(t,e,i){var o=Mt(t).bind,r=0;function u(o){var u,s,c,a,l;o.cancelable&&(u=(l=o.deltaY)<0,s=K(o),c=i.wheelMinThreshold||0,a=i.wheelSleep||0,ot(l)>c&&a<s-r&&(t.go(u?"<":">"),r=s),l=u,i.releaseWheel&&!t.state.is(n)&&-1===e.Controller.getAdjacent(l)||Y(o))}return{mount:function(){i.wheel&&o(e.Elements.track,"wheel",u,zn)}}},Live:function(t,n,e){var i=Mt(t).on,o=n.Elements.track,r=e.live&&!e.isNavigation,s=F("span",vn),c=zt(90,u(a,!1));function a(t){T(o,Qt,t),t?(P(o,s),c.start()):(B(s),c.cancel())}function l(t){r&&T(o,Vt,t?"off":"polite")}return{mount:function(){r&&(l(!n.Autoplay.isPaused()),T(o,Zt,!0),s.textContent="…",i(kt,u(l,!0)),i(Lt,u(l,!1)),i([vt,St],u(a,!0)))},disable:l,destroy:function(){I(o,[Vt,Zt,Qt]),B(s)}}}}),Wn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:on,clone:rn,arrows:sn,arrow:cn,prev:an,next:ln,pagination:fn,page:dn,spinner:Ot+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Xn(t,n,e){var i=n.Slides;function o(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){Mt(t).on([pt,mt],o)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),c(n)},cancel:s}}function Gn(t,n,e){var i,o=n.Move,r=n.Controller,s=n.Scroll,c=n.Elements.list,a=u(_,c,"transition");function l(){a(""),s.cancel()}return{mount:function(){Mt(t).bind(c,"transitionend",(function(t){t.target===c&&i&&(l(),i())}))},start:function(n,u){var c=o.toPosition(n,!0),l=o.getPosition(),f=function(n){var i=e.rewindSpeed;if(t.is(Cn)&&i){var o=r.getIndex(!0),u=r.getEnd();if(0===o&&u<=n||u<=o&&0===n)return i}return e.speed}(n);1<=ot(c-l)&&1<=f?e.useScroll?s.scroll(c,f,!1,u):(a("transform "+f+"ms "+e.easing),o.translate(c,!0),i=u):(o.jump(n),u())},cancel:l}}return Ft=function(){function t(n,e){var i;this.event=Mt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return w(y(t),i)}}),this.splides=[],this.n={},this.t={},$(n=h(n)?q(document,n):n,n+" is invalid."),e=N({label:W(this.root=n,Ht)||"",labelledby:W(n,Yt)||""},Wn,t.defaults,e||{});try{N(e,JSON.parse(W(n,Z)))}catch(t){$(!1,"Invalid JSON")}this.n=Object.create(N({},e))}var n=t.prototype;return n.mount=function(t,n){var e=this,i=this.state,o=this.Components;return $(i.is([1,7]),"Already mounted!"),i.set(1),this.i=o,this.r=n||this.r||(this.is(Dn)?Xn:Gn),this.t=t||this.t,M(z({},Rn,this.t,{Transition:this.r}),(function(t,n){t=t(e,o,e.n),(o[n]=t).setup&&t.setup()})),M(o,(function(t){t.mount&&t.mount()})),this.emit(pt),x(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},n.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this.i.Sync.remount(),t.Components.Sync.remount()),this},n.go=function(t){return this.i.Controller.go(t),this},n.on=function(t,n){return this.event.on(t,n),this},n.off=function(t){return this.event.off(t),this},n.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(r(arguments,1))),this},n.add=function(t,n){return this.i.Slides.add(t,n),this},n.remove=function(t){return this.i.Slides.remove(t),this},n.is=function(t){return this.n.type===t},n.refresh=function(){return this.emit(mt),this},n.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?Mt(this).on("ready",this.destroy.bind(this,t)):(M(this.i,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(xt),n.destroy(),t&&o(this.splides),e.set(7)),this},Jt(t,[{key:"options",get:function(){return this.n},set:function(t){this.i.Media.set(t,!0,!0)}},{key:"length",get:function(){return this.i.Slides.getLength(!0)}},{key:"index",get:function(){return this.i.Controller.getIndex()}}]),t}(),Ft.defaults={},Ft.STATES=i,Ft},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();
//# sourceMappingURL=politics.21f845bb.js.map