import{l as _,d as v,h as L,p as N,x as w}from"./chunks/preact.module.a71fe3d6.js";import{p as et,h as ot}from"./chunks/hooks.module.9c881e2f.js";function T(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=T(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function l(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=T(t))&&(r&&(r+=" "),r+=e);return r}const nt=l,z=l,H=l,V=l,rt=l,I=l,lt=l,st=l,it=l,at=l,ct=l,k=l,C=l,M=l,ut=l,Y=l,_t=l,F=l,x=l,Z=l,ft=l,G=l,pt=l,dt=l,O=l,f=l,m=l,mt=l,b=l,S=l,vt=l,ht=l,s=l;var xt=0;function u(t,e,n,r,o){var l,i,u={};for(i in e)"ref"==i?l=e[i]:u[i]=e[i];var s={type:t,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--xt,__source:o,__self:r};if("function"==typeof t&&(l=t.defaultProps))for(i in l)void 0===u[i]&&(u[i]=l[i]);return _.vnode&&_.vnode(s),s}const bt=s(b("text-white")),p=s(bt,O("text-left"));s(p,m("font-medium")),s(b("text-blue-300")),s(p,f("text-xl","sm:text-3xl")),s(p,O("!text-justify"));const q=s(b("hover:text-yellow-100","group-hover:text-yellow-100")),J=s(b("text-transparent"),nt("bg-clip-text"),H("bg-gradient-to-r"),V("from-pink-300","via-red-500","to-yellow-300"),it("animate-shimmering"));s(J,f("text-4xl","sm:text-6xl","md:text-8xl"),m("font-bold")),s(p,f("text-lg","sm:text-xl","md:text-3xl")),s(p,f("text-xl","sm:text-2xl","md:text-4xl")),s(J,f("text-xl","sm:text-4xl"),m("font-bold")),s(p,f("text-base","sm:text-xl","md:text-2xl")),s(p,mt("leading-tight"),f("text-sm","sm:text-base","md:text-xl"),O("text-justify")),s(q,p,f("text-base","sm:text-xl","md:text-2xl"),m("font-semibold"));const gt=s(q,p,f("text-base","sm:text-lg"),m("font-medium"));function K({children:t}){return u("p",{className:gt,children:t})}s(f("text-3xl")),s(p,m("font-semibold"),f("text-xl","sm:text-3xl"));const yt=s(ut("group"),x("relative")),wt=s(x("absolute"),Z("-inset-0.5"),V("from-pink-600","via-red-500","to-orange-500"),I("rounded-lg"),at("blur"),st("opacity-75","group-hover:opacity-100"),S("transition","duration-200"),H("bg-gradient-to-r")),kt=s(x("relative"),I("rounded-lg"),Y("px-2","py-1"),z("bg-black-background"),rt("border-gray-400"),S("duration-200","transition"),lt("border-1"));function Ct(){return u("div",{class:yt,children:[u("div",{class:wt}),u("button",{class:kt,children:u("a",{href:"#projects",children:u(K,{children:"projects"})})})]})}function Ot(t,e){for(var n in e)t[n]=e[n];return t}function j(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}function A(t){this.props=t}(A.prototype=new v).isPureReactComponent=!0,A.prototype.shouldComponentUpdate=function(t,e){return j(this.props,t)||j(this.state,e)};var D=_.__b;_.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),D&&D(t)};var St=_.__e;_.__e=function(t,e,n,r){if(t.then)for(var o,l=e;l=l.__;)if((o=l.__c)&&o.__c)return null==e.__e&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e);St(t,e,n,r)};var R=_.unmount;function Q(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),t.__c.__H=null),null!=(t=Ot({},t)).__c&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return Q(t,e,n)}))),t}function X(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return X(t,e,n)})),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function y(){this.__u=0,this.t=null,this.__b=null}function tt(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function h(){this.u=null,this.o=null}_.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),R&&R(t)},(y.prototype=new v).__c=function(t,e){var n=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=tt(r.__v),l=!1,i=function(){l||(l=!0,n.__R=null,o?o(u):u())};n.__R=i;var u=function(){if(!--r.__u){if(r.state.__a){var t=r.state.__a;r.__v.__k[0]=X(t,t.__c.__P,t.__c.__O)}var e;for(r.setState({__a:r.__b=null});e=r.t.pop();)e.forceUpdate()}},_=!0===e.__h;r.__u++||_||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(i,i)},y.prototype.componentWillUnmount=function(){this.t=[]},y.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Q(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&L(N,null,t.fallback);return o&&(o.__h=null),[L(N,null,e.__a?null:t.children),o]};var W=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(h.prototype=new v).__a=function(t){var e=this,n=tt(e.__v),r=e.o.get(t);return r[0]++,function(o){var l=function(){e.props.revealOrder?(r.push(o),W(e,t,r)):o()};n?n(l):l()}},h.prototype.render=function(t){this.u=null,this.o=new Map;var e=w(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},h.prototype.componentDidUpdate=h.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,n){W(t,n,e)}))};var Pt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Lt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Nt=typeof document<"u",jt=function(t){return(typeof Symbol<"u"&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(t)};v.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(v.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var B=_.event;function At(){}function Dt(){return this.cancelBubble}function Rt(){return this.defaultPrevented}_.event=function(t){return B&&(t=B(t)),t.persist=At,t.isPropagationStopped=Dt,t.isDefaultPrevented=Rt,t.nativeEvent=t};var E={configurable:!0,get:function(){return this.class}},U=_.vnode;_.vnode=function(t){var e=t.type,n=t.props,r=n;if("string"==typeof e){var o=-1===e.indexOf("-");for(var l in r={},n){var i=n[l];Nt&&"children"===l&&"noscript"===e||"value"===l&&"defaultValue"in n&&null==i||("defaultValue"===l&&"value"in n&&null==n.value?l="value":"download"===l&&!0===i?i="":/ondoubleclick/i.test(l)?l="ondblclick":/^onchange(textarea|input)/i.test(l+e)&&!jt(n.type)?l="oninput":/^onfocus$/i.test(l)?l="onfocusin":/^onblur$/i.test(l)?l="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(l)?l=l.toLowerCase():o&&Lt.test(l)?l=l.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(l)&&(l=l.toLowerCase(),r[l]&&(l="oninputCapture")),r[l]=i)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=w(n.children).forEach((function(t){t.props.selected=-1!=r.value.indexOf(t.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=w(n.children).forEach((function(t){t.props.selected=r.multiple?-1!=r.defaultValue.indexOf(t.props.value):r.defaultValue==t.props.value}))),t.props=r,n.class!=n.className&&(E.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",E))}t.$$typeof=Pt,U&&U(t)};var $=_.__r;_.__r=function(t){$&&$(t),t.__c};const Wt="up",Bt="down";function Et(t){const[e,n]=et(t);return ot((()=>{let t=window.pageYOffset,e=!1;const r=()=>{const r=window.pageYOffset;Math.abs(r-t)<70||(n(r>t?Bt:Wt),t=r>0?r:0),e=!1},o=()=>{e||(window.requestAnimationFrame(r),e=!0)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}}),[e]),e}const Ut=t=>s(z("bg-transparent"),vt("backdrop-blur-md"),ht("transform-gpu",t?"translate-y-0":"translate-y-full-negative"),S("transition-transform","duration-300"),Z("left-0","top-0"),_t("mx-auto"),G("w-full"),pt("max-w-7xl"),dt("h-16"),C("justify-end"),k("items-center"),x("fixed"),Y("py-4","px-5"),ft("z-10")),$t=s(F("flex"),C("justify-end"),k("items-center"),G("w-full"),M("gap-3")),Tt=s(F("flex"),ct("flex-row"),C("justify-end"),k("items-center"),M("gap-3")),zt=[{buttonName:"home",address:"#home"},{buttonName:"about",address:"#about"}],Ht=()=>u("ul",{class:Tt,children:zt.map((t=>u("li",{children:u("a",{href:t.address,children:u(K,{children:t.buttonName})})})))});function Mt(){const t=Et("up");return u("header",{className:Ut("up"===t),children:u("nav",{className:$t,children:[u(Ht,{}),u(Ct,{})]})})}export{Mt as default};