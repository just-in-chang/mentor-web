(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t,r){r("DbwC"),e.exports=r("j52E")},DbwC:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js",{scope:"/"}).then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))},"JDi+":function(e,t,r){var n=r("rabT"),o=r("jHfz");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},OG7y:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},PYCb:function(e,t,r){var n=r("4QiD");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},SWfr:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("rPpu");t.default=function(e){(0,n.getCLS)(e),(0,n.getFID)(e),(0,n.getFCP)(e),(0,n.getLCP)(e),(0,n.getTTFB)(e)}},X1pI:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("FdF9"))&&n.__esModule?n:{default:n}).default.createContext(null);t.HeadManagerContext=o},bTW4:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},cXmc:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},j52E:function(e,t,r){"use strict";var n=r("Jhyq")(r("q1Mr"));window.next=n,(0,n.default)().catch((function(e){console.error("".concat(e.message,"\n").concat(e.stack))}))},jHfz:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},n3Cu:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],c=0,u=n.previousElementSibling;c<a;c++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&i.push(u);var s=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+s.length).toString()}(e,n[e]||[])}))}}))}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();o.setAttribute(i,r[a])}var c=r.children,u=r.dangerouslySetInnerHTML;return u?o.innerHTML=u.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},q1Mr:function(e,t,r){"use strict";var n=r("qsue"),o=r("bdvm"),a=r("P6ta"),i=r("JDi+"),c=r("cXmc"),u=r("PYCb"),s=r("YlrP");function f(){f=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:C(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",v="executing",m="completed",g={};function y(){}function w(){}function E(){}var _={};s(_,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(I([])));x&&x!==r&&n.call(x,i)&&(_=x);var S=E.prototype=y.prototype=Object.create(_);function P(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(o,a,i,c){var u=p(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:h,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,s(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},P(T.prototype),s(T.prototype,c,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new T(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(S),s(S,u,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function l(e,t,r){return t=c(t),i(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],c(e).constructor):t.apply(e,r))}var p=r("Jhyq"),d=r("jhMH");t.__esModule=!0,t.render=Z,t.renderError=te,t.default=t.emitter=t.router=t.version=void 0;var h=d(r("bTW4")),v=(d(r("Jhyq")),r("K+Ov")),m=r("mfOf"),g=d(r("FdF9")),y=d(r("FdF9")),w=r("X1pI"),E=d(r("l7B7")),_=r("FcP3"),b=r("vqIN"),x=p(r("u0W5")),S=r("MrWU"),P=d(r("n3Cu")),T=d(r("qaXs")),C=d(r("SWfr"));"finally"in Promise.prototype||(Promise.prototype.finally=r("OG7y"));var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="9.4.2";var R=k.props,L=k.err,N=k.page,I=k.query,j=k.buildId,F=k.assetPrefix,M=k.runtimeConfig,O=k.dynamicIds,D=k.isFallback,A=F||"";r.p="".concat(A,"/_next/"),x.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:M||{}});var q=(0,S.getURL)(),B=new T.default(j,A),H=function(e){var t=s(e,2),r=t[0],n=t[1];return B.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map(H),window.__NEXT_P=[],window.__NEXT_P.push=H;var G,U,X,W,J,Y,$=(0,P.default)(),z=document.getElementById("__next");t.router=U;var V=function(e){function t(){return o(this,t),l(this,t,arguments)}return u(t,e),a(t,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),U.isSsr&&(D||k.nextExport&&((0,b.isDynamicRoute)(U.pathname)||location.search)||R&&R.__N_SSG&&location.search)&&U.replace(U.pathname+"?"+(0,m.stringify)((0,h.default)((0,h.default)({},U.query),(0,m.parse)(location.search.substr(1)))),q,{_h:1,shallow:!D})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}])}(g.default.Component),Q=(0,E.default)();t.emitter=Q;var K=function(){var e=n(f().mark((function e(){var r,n,o,a,i,c,u=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:{},r.webpackHMR,e.next=4,B.loadPageScript("/_app");case 4:return n=e.sent,o=n.page,a=n.mod,J=o,a&&a.reportWebVitals&&(Y=function(e){var t,r=e.id,n=e.name,o=e.startTime,i=e.value,c=e.duration,u=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(Math.random()*(9e12-1))+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:r||f,name:n,startTime:o||t,value:null==i?c:i,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),i=L,e.prev=10,e.next=14,B.loadPage(N);case 14:c=e.sent,W=c.page,e.next=20;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),i=e.t0;case 25:if(!window.__NEXT_PRELOADREADY){e.next=29;break}return e.next=29,window.__NEXT_PRELOADREADY(O);case 29:return t.router=U=(0,v.createRouter)(N,I,q,{initialProps:R,pageLoader:B,App:J,Component:W,wrapApp:ce,err:i,isFallback:D,subscription:function(e,t){Z({App:t,Component:e.Component,props:e.props,err:e.err})}}),Z({App:J,Component:W,props:R,err:i}),e.abrupt("return",Q);case 35:e.next=37;break;case 37:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(){return e.apply(this,arguments)}}();function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=n(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,te(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ue(t);case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=14,te((0,h.default)((0,h.default)({},t),{},{err:e.t0}));case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function te(e){var t=e.App,r=e.err;return console.error(r),B.loadPage("/_error").then((function(n){var o=n.page,a=ce(t),i={Component:o,AppTree:a,router:U,ctx:{err:r,pathname:N,query:I,asPath:q,AppTree:a}};return Promise.resolve(e.props?e.props:(0,S.loadGetInitialProps)(t,i)).then((function(t){return ue((0,h.default)((0,h.default)({},e),{},{err:r,Component:o,props:t}))}))}))}t.default=K;var re="function"===typeof y.default.hydrate;function ne(){S.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),Y&&performance.getEntriesByName("Next.js-hydration").forEach(Y),ae())}function oe(){if(S.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),Y&&(performance.getEntriesByName("Next.js-render").forEach(Y),performance.getEntriesByName("Next.js-route-change-to-render").forEach(Y)),ae(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ae(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ie(e){var t=e.children;return(g.default.createElement(V,{fn:function(e){return te({App:J,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},g.default.createElement(_.RouterContext.Provider,{value:(0,v.makePublicRouterInstance)(U)},g.default.createElement(w.HeadManagerContext.Provider,{value:$},t))))}var ce=function(e){return function(t){var r=(0,h.default)((0,h.default)({},t),{},{Component:W,err:L,router:U});return(g.default.createElement(ie,null,g.default.createElement(e,r)))}};function ue(e){return se.apply(this,arguments)}function se(){return(se=n(f().mark((function e(t){var r,n,o,a,i,c,u,s,l,p,d;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.App,n=t.Component,o=t.props,a=t.err,o||!n||n===X||G.Component!==X){e.next=8;break}return c=(i=U).pathname,u=i.query,s=i.asPath,l=ce(r),p={router:U,AppTree:l,Component:X,ctx:{err:a,pathname:c,query:u,asPath:s,AppTree:l}},e.next=7,(0,S.loadGetInitialProps)(r,p);case 7:o=e.sent;case 8:n=n||G.Component,o=o||G.props,d=(0,h.default)((0,h.default)({},o),{},{Component:n,err:a,router:U}),G=d,Q.emit("before-reactdom-render",{Component:n,ErrorComponent:X,appProps:d}),f=g.default.createElement(ie,null,g.default.createElement(r,d)),v=z,S.ST&&performance.mark("beforeRender"),re?(y.default.hydrate(f,v,ne),re=!1,Y&&S.ST&&(0,C.default)(Y)):y.default.render(f,v,oe),Q.emit("after-reactdom-render",{Component:n,ErrorComponent:X,appProps:d});case 16:case"end":return e.stop()}var f,v}),e)})))).apply(this,arguments)}},qaXs:function(e,t,r){"use strict";var n=r("bdvm"),o=r("P6ta"),a=r("jhMH");t.__esModule=!0,t.default=void 0;var i=r("qQj0"),c=a(r("l7B7")),u=r("vqIN"),s=r("EYz+"),f=r("G8Ho"),l=r("7vR7");function p(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}var d=p("preload")&&!p("prefetch")?"preload":"prefetch";document.createElement("script");function h(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function v(e,t,r){return new Promise((function(n,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,r&&(a.as=r),a.onload=n,a.onerror=o,document.head.appendChild(a)}))}var m=function(){return o((function e(t,r){n(this,e),this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}),[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]&&r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))}))||[]}))}},{key:"getDataHref",value:function(e,t){var r,n=this,o=function(e){return e=(0,l.delBasePath)(e),"".concat(n.assetPrefix,"/_next/data/").concat(n.buildId).concat("/"===e?"/index":e,".json")},a=(0,i.parse)(e,!0),c=a.pathname,p=a.query,d=(0,i.parse)(t).pathname,v=h(c),m=(0,u.isDynamicRoute)(v);if(m){var g=(0,f.getRouteRegex)(v),y=g.groups,w=(0,s.getRouteMatcher)(g)(d)||p;r=v,Object.keys(y).every((function(e){var t=w[e],n=y[e].repeat;return n&&!Array.isArray(t)&&(t=[t]),e in w&&(r=r.replace("[".concat(n?"...":"").concat(e,"]"),n?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))}))||(r="")}return m?r&&o(r):o(v)}},{key:"prefetchData",value:function(e,t){var r=this,n=h((0,i.parse)(e,!0).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(n)&&(a=r.getDataHref(e,t))&&!document.querySelector('link[rel="'.concat(d,'"][href^="').concat(a,'"]'))&&v(a,d,"fetch")}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e)}},{key:"loadPageScript",value:function(e){var t=this;return e=h(e),new Promise((function(r,n){var o=function(a){var i=a.error,c=a.page,u=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?n(i):r({page:c,mod:u})},a=t.pageCache[e];if(a){var i=a.error,c=a.page,u=a.mod;i?n(i):r({page:c,mod:u})}else t.pageRegisterEvents.on(e,o),document.querySelector('script[data-next-page="'.concat(e,'"]'))||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(r){r.forEach((function(r){/\.js$/.test(r)&&!document.querySelector('script[src^="'.concat(r,'"]'))&&t.loadScript(r,e,!1),/\.css$/.test(r)&&!document.querySelector('link[rel=stylesheet][href^="'.concat(r,'"]'))&&v(r,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=h(e))?"/index.js":"".concat(e,".js"),r="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(t));this.loadScript(r,e,!0)}},{key:"loadScript",value:function(e,t,r){var n=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var r=new Error("Error loading script ".concat(e));r.code="PAGE_LOAD_ERROR",n.pageRegisterEvents.emit(t,{error:r})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var r=this;!function(){try{var n=t(),o={page:n.default||n,mod:n};r.pageCache[e]=o,r.pageRegisterEvents.emit(e,o)}catch(a){r.pageCache[e]={error:a},r.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else{e=h(e);var a="".concat("/"===e?"/index":e,".js");0,n="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(a))}return Promise.all(document.querySelector('link[rel="'.concat(d,'"][href^="').concat(n,'"], script[data-next-page="').concat(e,'"]'))?[]:[v(n,d,n.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}])}();t.default=m},rPpu:function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return m})),r.d(t,"getFID",(function(){return g})),r.d(t,"getLCP",(function(){return w})),r.d(t,"getTTFB",(function(){return E}));var n,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=!1,s=!1,f=function(e){u=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("unload",(function(){}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:u})}),{capture:!0,once:t})},d=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),n=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),a())},o=c("layout-shift",n),a=d(e,r,o,t);p((function(e){var t=e.isUnloading;o&&o.takeRecords().map(n),t&&(r.isFinal=!0),a()}))},v=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,p((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},m=function(e){var t=i("FCP"),r=v(),n=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=d(e,t,n)},g=function(e){var t=i("FID"),r=v(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=c("first-input",n),a=d(e,t,o);p((function(){o&&(o.takeRecords().map(n),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),n=v(),o=function(e){var t=e.startTime;t<n.timeStamp?(r.value=t,r.entries.push(e)):r.isFinal=!0,u()},a=c("largest-contentful-paint",o),u=d(e,r,a,t),s=function(){r.isFinal||(a&&a.takeRecords().map(o),r.isFinal=!0,u())};y().then(s),p(s,!0)},E=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},u0W5:function(e,t,r){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}}},[[0,0,1,2]]]);