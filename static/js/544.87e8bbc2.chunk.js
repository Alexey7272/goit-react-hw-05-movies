(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{265:function(e,r,t){"use strict";var n=t(87),c=t(390),a=t(7),s=t.n(a),o=t(689),u=t(184),i=function(e){var r=e.movies,t=(0,o.TH)();return r.map((function(e){var r=e.id,a=e.title,s=e.poster_path,o=e.release_date;return(0,u.jsx)("li",{children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(r),state:{from:t},children:[(0,u.jsx)("img",{src:"".concat(c.YQ).concat(s),alt:a,width:"100px"}),(0,u.jsx)("p",{children:a}),(0,u.jsxs)("p",{children:[" ",o.slice(0,4)," "]})]})},r)}))};i.PropTypes={movies:s().arrayOf(s().object.isRequired).isRequired},r.Z=i},544:function(e,r,t){"use strict";t.r(r);var n=t(439),c=t(390),a=t(791),s=t(265),o=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],u=r[1];return(0,a.useEffect)((function(){(0,c.Df)().then((function(e){return u(e.results)})).catch((function(e){console.log("Error message:",e.message)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:" Trending today "}),(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[" ",(0,o.jsx)(s.Z,{movies:t})," "]})})]})}},390:function(e,r,t){"use strict";t.d(r,{Df:function(){return l},Pg:function(){return h},Ph:function(){return d},YQ:function(){return o},tx:function(){return m},zv:function(){return v}});var n=t(861),c=t(757),a=t.n(c),s=t(243),o="https://image.tmdb.org/t/p/w500",u="https://api.themoviedb.org/3",i="e90e5cc72f12501ca886fe4fb737b4cc",p="/movie",f={params:{api_key:i}},l=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(u+"/trending/movie/day",f);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r),f);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r).concat("/credits"),f);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error.message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r).concat("/reviews"),f);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:i,query:r}},e.prev=1,e.next=4,(0,s.Z)("".concat(u).concat("/search/movie"),t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error message:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},888:function(e,r,t){"use strict";var n=t(47);function c(){}function a(){}a.resetWarningCache=c,e.exports=function(){function e(e,r,t,c,a,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:c};return t.PropTypes=t,t}},7:function(e,r,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=544.87e8bbc2.chunk.js.map