(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{265:function(e,t,n){"use strict";var r=n(87),o=n(390),a=n(7),s=n.n(a),i=n(689),c=n(864),u=n(184),l=function(e){var t=e.movies,n=(0,i.TH)();return t.map((function(e){var t=e.id,a=e.title,s=e.poster_path,i=e.release_date;return(0,u.jsx)("li",{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,u.jsx)("img",{src:s?"".concat(o.YQ).concat(s):c,alt:a,width:"100px",height:"120"}),(0,u.jsx)("p",{children:a}),(0,u.jsxs)("p",{children:[" ",i.slice(0,4)," "]})]})},t)}))};l.PropTypes={movies:s().arrayOf(s().object.isRequired).isRequired},t.Z=l},692:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(439),o=n(791);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=n(433);function l(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var f=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(r&&(r+=" "),r+=t);return r},d=["theme","type"],p=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},v=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},g=function(e){return v(e)||h(e)?e:null},y=function(e){return(0,o.isValidElement)(e)||v(e)||h(e)||m(e)};function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),r=function e(r){var o;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,u.Z)(n)))};(e=t.classList).add.apply(e,(0,u.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),o.createElement(o.Fragment,null,r)}}function E(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var b={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},O=function(e){var t=e.theme,n=e.type,r=c(e,d);return o.createElement("svg",i({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},_={info:function(e){return o.createElement(O,i({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(O,i({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(O,i({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(O,i({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),s=(0,r.Z)(a,2),l=s[0],f=s[1],d=(0,o.useRef)(null),T=(0,o.useRef)(new Map).current,O=function(e){return-1!==l.indexOf(e)},C=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:O,getToast:function(e){return T.get(e)}}).current;function I(e){var t=e.containerId;!C.props.limit||t&&C.containerId!==t||(C.count-=C.queue.length,C.queue=[])}function w(e){f((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=C.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,a=t.staleId,s=c(t,p);if(y(e)&&!function(e){return!d.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||T.has(e.toastId)&&null==e.updateId}(s)){var u=s.toastId,l=s.updateId,f=s.data,O=C.props,I=function(){return w(u)},L=null==l;L&&C.count++;var R,k,N=i(i(i({},O),{},{style:O.toastStyle,key:C.toastKey++},s),{},{toastId:u,updateId:l,data:f,closeToast:I,isIn:!1,className:g(s.className||O.toastClassName),bodyClassName:g(s.bodyClassName||O.bodyClassName),progressClassName:g(s.progressClassName||O.progressClassName),autoClose:!s.isLoading&&(R=s.autoClose,k=O.autoClose,!1===R||m(R)&&R>0?R:k),deleteToast:function(){var e=E(T.get(u),"removed");T.delete(u),b.emit(4,e);var t=C.queue.length;if(C.count=null==u?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),t>0){var r=null==u?C.props.limit:1;if(1===t||1===r)C.displayedToast++,x();else{var o=r>t?t:r;C.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});N.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(h(a)?s=a(i):(0,o.isValidElement)(a)?s=(0,o.cloneElement)(a,i):v(a)||m(a)?s=a:r?s=_.spinner():function(e){return e in _}(n)&&(s=_[n](i))),s}(N),h(s.onOpen)&&(N.onOpen=s.onOpen),h(s.onClose)&&(N.onClose=s.onClose),N.closeButton=O.closeButton,!1===s.closeButton||y(s.closeButton)?N.closeButton=s.closeButton:!0===s.closeButton&&(N.closeButton=!y(O.closeButton)||O.closeButton);var j=e;(0,o.isValidElement)(e)&&!v(e.type)?j=(0,o.cloneElement)(e,{closeToast:I,toastProps:N,data:f}):h(e)&&(j=e({closeToast:I,toastProps:N,data:f})),O.limit&&O.limit>0&&C.count>O.limit&&L?C.queue.push({toastContent:j,toastProps:N,staleId:a}):m(r)?setTimeout((function(){P(j,N,a)}),r):P(j,N,a)}}function P(e,t,n){var r=t.toastId;n&&T.delete(n);var o={content:e,props:t};T.set(r,o),f((function(e){return[].concat((0,u.Z)(e),[r]).filter((function(e){return e!==n}))})),b.emit(4,E(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return C.containerId=e.containerId,b.cancelEmit(3).on(0,L).on(1,(function(e){return d.current&&w(e)})).on(5,I).emit(2,C),function(){T.clear(),b.emit(3,C)}}),[]),(0,o.useEffect)((function(){C.props=e,C.isToastActive=O,C.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(T.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:O}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function x(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],s=n[1],i=(0,o.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=(0,o.useRef)(null),d=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=I(t.nativeEvent),d.y=w(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=s&&d.y>=r&&d.y<=o?_():O()}}function O(){s(!0)}function _(){s(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&_(),d.x=I(t),d.y=w(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),h(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",O),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(L.onMouseEnter=_,L.onMouseLeave=O),T&&(L.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:L}}function L(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,s=e.type,c=void 0===s?"default":s,u=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,T=u||p&&0===m,E=i(i({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var b=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":v}),O=h(l)?l({rtl:v,type:c,defaultClassName:b}):f(b,l);return o.createElement("div",a({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:O,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){g&&r()}))}var R=function(e){var t=x(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,T=e.className,E=e.style,b=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,R=e.progress,k=e.rtl,N=e.toastId,j=e.deleteToast,D=e.isIn,M=e.isLoading,S=e.iconOut,B=e.closeOnClick,Z=e.theme,A=f("Toastify__toast","Toastify__toast-theme--".concat(Z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":B}),z=h(T)?T({rtl:k,position:y,type:p,defaultClassName:A}):f(A,T),F=!!R||!l,q={closeToast:v,type:p,theme:Z},H=null;return!1===c||(H=h(c)?c(q):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,q):L(q)),o.createElement(g,{isIn:D,done:j,position:y,preventExitTransition:r,nodeRef:a},o.createElement("div",i(i({id:N,onClick:d,className:z},s),{},{style:E,ref:a}),o.createElement("div",i(i({},D&&{role:w}),{},{className:h(b)?b({type:p}):f("Toastify__toast-body",b),style:O}),null!=S&&o.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},S),o.createElement("div",null,u)),H,o.createElement(P,i(i({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:k,theme:Z,delay:l,isRunning:n,isIn:D,closeToast:v,hide:m,type:p,style:C,className:_,controlledProgress:F,progress:R||0}))))},k=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},N=T(k("bounce",!0)),j=(T(k("slide",!0)),T(k("zoom")),T(k("flip")),(0,o.forwardRef)((function(e,t){var n=C(e),r=n.getToastToRender,a=n.containerRef,s=n.isToastActive,c=e.className,u=e.style,l=e.rtl,d=e.containerId;function p(e){var t=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(c)?c({position:e,rtl:l,defaultClassName:t}):f(t,g(c))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:d},r((function(e,t){var n=t.length?i({},u):i(i({},u),{},{pointerEvents:"none"});return o.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(R,i(i({},a),{},{isIn:s(a.toastId),style:i(i({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));j.displayName="ToastContainer",j.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,M=new Map,S=[],B=1;function Z(){return""+B++}function A(e){return e&&(v(e.toastId)||m(e.toastId))?e.toastId:Z()}function z(e,t){return M.size>0?b.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function F(e,t){return i(i({},t),{},{type:t&&t.type||e,toastId:A(t)})}function q(e){return function(t,n){return z(t,F(e,n))}}function H(e,t){return z(e,F("default",t))}H.loading=function(e,t){return z(e,F("default",i({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=v(o)?H.loading(o,n):H.loading(o.render,i(i({},n),o)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,o){if(null!=t){var a=i(i(i({type:e},c),n),{},{data:o}),s=v(t)?{render:t}:t;return r?H.update(r,i(i({},a),s)):H(s.render,i(i({},a),s)),o}H.dismiss(r)},l=h(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(e,t){return z(e,F("default",i({theme:"dark"},t)))},H.dismiss=function(e){M.size>0?b.emit(1,e):S=S.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),b.emit(5,e)},H.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=M.get(n||D);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=i(i(i({},r),t),{},{toastId:t.toastId||e,updateId:Z()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,z(s,a)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return b.on(4,e),function(){b.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b.on(2,(function(e){D=e.containerId||e,M.set(D,e),S.forEach((function(e){b.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&b.off(0).off(1).off(5)}));var Q=n(87),V=n(390),U=n(265),W=n(184),Y=function(){var e,t=(0,o.useState)([]),n=(0,r.Z)(t,2),a=n[0],s=n[1],i=(0,Q.lr)(),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=null!==(e=u.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){""!==f&&(0,V.Ph)(f).then((function(e){var t=e.results;0!==e.total_results?s(t):H.info("Sorry, there are no movies with the search ".concat(f))})).catch((function(e){console.log("error.message",e.message)}))}),[f]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.search.value.trim().toLowerCase();n?(l({query:n}),t.reset()):alert("\u041f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443")},children:[(0,W.jsx)("input",{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies by name"}),(0,W.jsx)("button",{type:"submit",children:"Search"})]}),(0,W.jsx)("ul",{children:(0,W.jsx)(U.Z,{movies:a})})]})}},390:function(e,t,n){"use strict";n.d(t,{Df:function(){return d},Pg:function(){return p},Ph:function(){return h},YQ:function(){return i},tx:function(){return v},zv:function(){return m}});var r=n(861),o=n(757),a=n.n(o),s=n(243),i="https://image.tmdb.org/t/p/w500",c="https://api.themoviedb.org/3",u="e90e5cc72f12501ca886fe4fb737b4cc",l="/movie",f={params:{api_key:u}},d=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(c+"/trending/movie/day",f);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(c).concat(l,"/").concat(t),f);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(c).concat(l,"/").concat(t).concat("/credits"),f);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error.message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(c).concat(l,"/").concat(t).concat("/reviews"),f);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:u,query:t}},e.prev=1,e.next=4,(0,s.Z)("".concat(c).concat("/search/movie"),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error message:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(47);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},864:function(e,t,n){"use strict";e.exports=n.p+"static/media/deafult_poster.c4ba1e764e9cd9c83ef1.png"}}]);
//# sourceMappingURL=692.bc5a129a.chunk.js.map