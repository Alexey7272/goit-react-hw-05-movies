"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,r,t){t.r(r);var n=t(439),c=t(791),a=t(689),s=t(87),o=t(277),u=t(390),i=t(864),p=t(184);r.default=function(){var e,r,t=(0,c.useState)({}),l=(0,n.Z)(t,2),f=l[0],h=l[1],d=(0,a.UO)().movieId,v=f.title,m=f.poster_path,g=f.vote_average,x=f.overview,j=f.genres,w=null!==(e=null===(r=(0,a.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:o.a.homepage;return(0,c.useEffect)((function(){(0,u.Pg)(d).then((function(e){return h(e)})).catch((function(e){return console.log("Error message:",e.message)}))}),[d]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{to:w,children:"Go back"}),(0,p.jsx)("br",{}),(0,p.jsx)("img",{src:m?"".concat(u.YQ).concat(m):i,alt:v,width:"300px"}),(0,p.jsxs)("p",{children:[" ",v," "]}),(0,p.jsxs)("p",{children:["  User Score: ",g?"".concat(Math.round(10*g),"%"):0]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsxs)("p",{children:[" ",x," "]}),j&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:j.map((function(e){return"".concat(e.name," ")}))})]}),(0,p.jsx)("h4",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:o.a.cast,children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:o.a.reviews,children:"Reviews"})})]}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(p.Fragment,{children:" loading... "}),children:(0,p.jsx)(a.j3,{})})]})}},390:function(e,r,t){t.d(r,{Df:function(){return f},Pg:function(){return h},Ph:function(){return m},YQ:function(){return o},tx:function(){return v},zv:function(){return d}});var n=t(861),c=t(757),a=t.n(c),s=t(243),o="https://image.tmdb.org/t/p/w500",u="https://api.themoviedb.org/3",i="e90e5cc72f12501ca886fe4fb737b4cc",p="/movie",l={params:{api_key:i}},f=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(u+"/trending/movie/day",l);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r),l);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r).concat("/credits"),l);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error.message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("".concat(u).concat(p,"/").concat(r).concat("/reviews"),l);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error message:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{api_key:i,query:r}},e.prev=1,e.next=4,(0,s.Z)("".concat(u).concat("/search/movie"),t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error message:",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},864:function(e,r,t){e.exports=t.p+"static/media/deafult_poster.c4ba1e764e9cd9c83ef1.png"}}]);
//# sourceMappingURL=961.6afbe001.chunk.js.map