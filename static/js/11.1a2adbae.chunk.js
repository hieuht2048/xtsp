(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10,17],{214:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a.n(n),c=a(66),s=a(18),o=a(19),l=a(21),i=a(20),u=a(22),m=a(0),p=a.n(m),d=a(284),h=a(219),f=a(216),b=a(33),g=a(64),v=a(12),P=a(32),E=a(240),j=a(269),O=a(222),y=a(246),w=a(255),N=a(262),k=a(238),x=a(226),S=a(225),I=a(251),H=a(252),C=a(253),T=a(248),M=a(254),R=a(223),D=a(63),J=a(65),F=a.n(J),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).getPosts=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props,n=t.getPosts,(0,t.resetPosts)(),n({label:"nuoc-hoa"});case 3:case"end":return e.stop()}},e)})),a.handleSelectPost=function(e){(0,a.props.selectPost)(e.id)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this,t=this.props,a=t.posts,n=t.match,r=t.home,c=t.history,s=t.selectedPost,o=[];return a.waiting?p.a.createElement("div",{className:"loading-wrp"},p.a.createElement(k.a,{size:22})):a.data["nuoc-hoa"]?(o=a.data["nuoc-hoa"],p.a.createElement(E.b,{className:r?"list-box":"list-box category"},!r&&p.a.createElement(g.Helmet,null,p.a.createElement("title",null,"N\u01b0\u1edbc Hoa Nh\u1eadp Kh\u1ea9u ch\xednh h\xe3ng"),p.a.createElement("meta",{name:"description",content:"C\xe1c lo\u1ea1i n\u01b0\u1edbc Hoa Nh\u1eadp Kh\u1ea9u ch\xednh h\xe3ng"}),p.a.createElement("meta",{property:"og:url",content:window.location.href}),p.a.createElement("meta",{property:"og:type",content:"website"}),p.a.createElement("meta",{property:"og:title",content:"www.xitashop.com | N\u01b0\u1edbc Hoa Nh\u1eadp Kh\u1ea9u ch\xednh h\xe3ng"}),p.a.createElement("meta",{property:"og:image",content:F.a}),p.a.createElement("meta",{property:"og:description",content:"C\xe1c lo\u1ea1i n\u01b0\u1edbc Hoa Nh\u1eadp Kh\u1ea9u ch\xednh h\xe3ng"}),p.a.createElement("meta",{property:"fb:app_id",content:D.d}),p.a.createElement("link",{rel:"canonical",href:window.location.href})),p.a.createElement("div",{className:r?"list":"container-left main-ct-left"},p.a.createElement(E.b,{className:"box-header"},p.a.createElement("h2",{className:""},"N\u01b0\u1edbc hoa nh\u1eadp kh\u1ea9u"),r&&p.a.createElement("span",{className:"view-more"},p.a.createElement(d.a,{to:"/nuoc-hoa"},"Xem to\xe0n b\u1ed9"))),p.a.createElement(h.a,null,p.a.createElement(f.a,{path:"".concat(n.url,"/:id"),component:w.a}),p.a.createElement(f.a,{path:"".concat(n.url,"/"),render:function(t){return p.a.createElement(y.default,Object.assign({},t,{home:r,posts:o,onHandleSelectPost:e.handleSelectPost}))}}),p.a.createElement(f.a,{component:N.default}))),!r&&p.a.createElement("div",{className:"container-right main-ct-right"},p.a.createElement(E.b,{container:!0,className:"right-box"},p.a.createElement("h3",null,"M\u1edbi nh\u1ea5t"),p.a.createElement(T.default,{history:c,selectedPost:!1,onHandleSelectPost:this.handleSelectPost})),s&&p.a.createElement(E.b,{container:!0,className:"right-box"},p.a.createElement("h3",null,"S\u1ea3n ph\u1ea9m li\xean quan"),p.a.createElement(M.a,{history:c,onHandleSelectPost:this.handleSelectPost}))))):"No data available"}}]),t}(m.Component);K.defaultProps={home:!1};var L=Object(P.b)({posts:Object(C.a)(),selectedPost:Object(R.d)()}),U={getPosts:j.a,selectPost:O.d,resetPosts:j.b},A=Object(b.c)(L,U),B=Object(x.a)({key:"labelsReducer",reducer:I.a}),z=Object(S.a)({key:"labelsSaga",saga:H.a});t.default=Object(v.c)(B,z,A)(K)},223:function(e,t,a){"use strict";a.d(t,"c",function(){return s}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return i});var n=a(32),r=a(231),c=function(e){return e.get("detailReducer",r.a)},s=function(){return Object(n.a)(c,function(e){return e.get("samePosts").toJS()})},o=function(){return Object(n.a)(c,function(e){return e.get("post").toJS()})},l=function(){return Object(n.a)(c,function(e){return e.get("latestPosts").toJS()})},i=function(){return Object(n.a)(c,function(e){return e.get("selectedPost")})}},231:function(e,t,a){"use strict";var n=a(13);t.a=Object(n.fromJS)({samePosts:{waiting:!1,error:!1,data:!1},post:{waiting:!1,error:!1,data:!1},latestPosts:{waiting:!1,error:!1,data:!1},selectedPost:!1})},233:function(e,t,a){"use strict";var n=a(231),r=a(242);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.e:return e.setIn(["samePosts","waiting"],!0).setIn(["samePosts","error"],!1);case r.f:return e.setIn(["samePosts","waiting"],!1).setIn(["samePosts","error"],!1).setIn(["samePosts","data"],t.samePosts);case r.d:return e.setIn(["samePosts","waiting"],!1).setIn(["samePosts","error"],t.error).setIn(["samePosts","data"],!1);case r.b:return e.setIn(["latestPosts","waiting"],!0).setIn(["latestPosts","error"],!1);case r.c:return e.setIn(["latestPosts","waiting"],!1).setIn(["latestPosts","error"],!1).setIn(["latestPosts","data"],t.latestPosts);case r.a:return e.setIn(["latestPosts","waiting"],!1).setIn(["latestPosts","error"],t.error).setIn(["latestPosts","data"],!1);case r.h:return e.setIn(["post","waiting"],!0).setIn(["post","error"],!1).set("selectedPost",!1);case r.i:return e.setIn(["post","waiting"],!1).setIn(["post","error"],!1).setIn(["post","data"],t.post).set("selectedPost",t.post);case r.g:return e.setIn(["post","waiting"],!1).setIn(["post","error"],t.error).setIn(["post","data"],!1).set("selectedPost",!1);case r.j:return e.setIn(["post","data"],!1);default:return e}}},234:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(44),r=a.n(n),c=a(241),s=a(236),o=a(242),l=a(220),i=r.a.mark(d),u=r.a.mark(h),m=r.a.mark(f),p=r.a.mark(b);function d(e){var t,a,n,u,m;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(c.b)(s.a.getPosts,t);case 4:return a=r.sent,n=l.a.getImages(a.data.items),u=l.a.getPrice(n),m=l.a.getCurrency(u),r.next=10,Object(c.a)([Object(c.c)({type:o.f,samePosts:m})]);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(c.c)({type:o.d,error:r.t0.response.data});case 16:case"end":return r.stop()}},i,null,[[1,12]])}function h(){var e,t,a,n;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(c.b)(s.a.getLatestPost);case 3:return e=r.sent,t=l.a.getImages(e.data.items),a=l.a.getPrice(t),n=l.a.getCurrency(a),r.next=9,Object(c.a)([Object(c.c)({type:o.c,latestPosts:n})]);case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(c.c)({type:o.a,error:r.t0.response.data});case 15:case"end":return r.stop()}},u,null,[[0,11]])}function f(e){var t,a,n,i,u;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(c.b)(s.a.getSelectedPost,t);case 4:return a=r.sent,n=l.a.getImages([a.data]),i=l.a.getPrice(n),u=l.a.getCurrency(i),r.next=10,Object(c.a)([Object(c.c)({type:o.i,post:u[0]})]);case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),r.next=16,Object(c.c)({type:o.g,error:r.t0.response.data});case 16:case"end":return r.stop()}},m,null,[[1,12]])}function b(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(o.e,d);case 2:return e.next=4,Object(c.e)(o.h,f);case 4:return e.next=6,Object(c.e)(o.b,h);case 6:case"end":return e.stop()}},p)}},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(27),s=a(261),o=a.n(s);t.a=Object(c.withStyles)({root:{flexGrow:1}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(o.a,{color:"secondary"}))})},239:function(e,t,a){"use strict";var n=a(13);t.a=Object(n.fromJS)({posts:{waiting:!1,error:!1,data:!1}})},246:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),c=a(21),s=a(20),o=a(22),l=a(0),i=a.n(l),u=a(33),m=a(284),p=a(221),d=a.n(p),h=a(227),f=a.n(h),b=a(240),g=a(32),v=a(220),P=a(237),E=a(222),j=a(265),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).onHandleSelectPost=function(e){var t=a.props,n=t.onHandleSelectPost;(0,t.resetSelectedPost)(),n(e)},a.clearSearch=function(){var e=a.props,t=e.getHomePosts;(0,e.saveKeyword)(null),t({pageToken:null,keyword:null})},a.viewMore=function(e,t){e.preventDefault();var n=a.props;(0,n.getMorePosts)({pageToken:t,keyword:n.keyword})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.keyword,a=e.saveKeyword;e.isSearch||t&&a(null)}},{key:"render",value:function(){var e=this,t=this.props,a=t.posts,n=t.match,r=t.home,c=t.nextPageToken;return a.length>0?i.a.createElement(d.a,{className:"list-wrp"},i.a.createElement(d.a,{container:!0,spacing:32},a.map(function(t){var a=t.labels[0]+"/";r||(a="");var c=v.a.convertStringToURL(t.title),s=n.url+a+c+"-idpx"+t.id+".html";return i.a.createElement(d.a,{item:!0,key:t.id,className:"col-l-3 col-3 col-s-4 post-item"},i.a.createElement("div",{className:"item-img"},i.a.createElement(m.a,{to:s,onClick:function(){return e.onHandleSelectPost(t)}},i.a.createElement("img",{src:t.images[0],alt:t.title}))),i.a.createElement("div",{className:"item-info"},i.a.createElement("div",{className:"title"},i.a.createElement(m.a,{to:s,onClick:function(){return e.onHandleSelectPost(t)}},i.a.createElement(f.a,{className:"card-title",gutterBottom:!0,variant:"h5",component:"h3"},t.title))),t.price&&i.a.createElement("div",{className:"price"},t.price,t.currency&&i.a.createElement("span",{className:"currency"},t.currency))))})),!r&&i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{className:"paging"},c&&i.a.createElement(b.a,{className:"btn btn-normal btn-success",onClick:function(t){return e.viewMore(t,c)}},"View More")))):i.a.createElement(d.a,{container:!0,className:"item-container"},"Have no any post for this topid :(")}}]),t}(l.Component);O.defaultProps={home:!1,nextPageToken:null,isSearch:!1,keyword:!1};var y=Object(g.b)({nextPageToken:Object(j.d)()}),w={resetSelectedPost:E.c,saveKeyword:P.f,getHomePosts:P.a,getMorePosts:P.b};t.default=Object(u.c)(y,w)(O)},248:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),c=a(21),s=a(20),o=a(22),l=a(0),i=a.n(l),u=a(33),m=a(284),p=a(244),d=a.n(p),h=a(12),f=a(221),b=a.n(f),g=a(227),v=a.n(g),P=a(32),E=a(220),j=a(223),O=a(235),y=a(222),w=a(226),N=a(225),k=a(233),x=a(234),S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).onHandleSelectPost=function(e){(0,a.props.onHandleSelectPost)(e)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getLatestPosts)()}},{key:"render",value:function(){var e=this,t=this.props,a=t.latestPosts,n=t.selectedPost,r=[];if(a.waiting)return i.a.createElement(b.a,{container:!0,spacing:32,className:"latest-post"},i.a.createElement(O.a,null));a.data&&(n?(r=d()(a.data).filter(function(e){return e.id!==n.id})).length>10&&(r=r.pop()):r=a.data);return r.length<=0?null:i.a.createElement("div",{className:"latest-post"},r.map(function(t){var a=E.a.convertStringToURL(t.title),n="/"+t.labels[0]+"/"+a+"-idpx"+t.id+".html";return i.a.createElement("div",{key:t.id,className:"col-l-12 col-12 col-s-6 post-item"},i.a.createElement(m.a,{to:n,onClick:function(){return e.onHandleSelectPost(t)}},i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:t.images[0],alt:t.title})),i.a.createElement(v.a,{className:"card-title",gutterBottom:!0,variant:"h5",component:"h4"},t.title),t.price&&i.a.createElement("div",{className:"price"},t.price,t.currency&&i.a.createElement("span",{className:"currency"},t.currency))))}))}}]),t}(l.Component),I=Object(P.b)({latestPosts:Object(j.a)()}),H={getLatestPosts:y.a},C=Object(u.c)(I,H),T=Object(w.a)({key:"detailReducer",reducer:k.a}),M=Object(N.a)({key:"detailSaga",saga:x.a});t.default=Object(h.c)(T,M,C)(S)},251:function(e,t,a){"use strict";var n=a(34),r=a(67),c=a(239),s=a(243);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.b:return e.setIn(["posts","waiting"],!0).setIn(["posts","error"],!1);case s.c:return e.setIn(["posts","waiting"],!1).setIn(["posts","error"],!1).updateIn(["posts","data"],function(e){return Object(r.a)({},e,Object(n.a)({},t.posts.category,t.posts.data))});case s.a:return e.setIn(["posts","waiting"],!1).setIn(["posts","error"],t.error).setIn(["posts","data"],!1);case s.d:return e.setIn(["posts","data"],!1);default:return e}}},252:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(44),r=a.n(n),c=a(241),s=a(236),o=a(243),l=a(237),i=a(220),u=r.a.mark(p),m=r.a.mark(d);function p(e){var t,a,n,m,p,d;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(c.b)(s.a.getPosts,t);case 4:return a=r.sent,n=i.a.getImages(a.data.items),m=i.a.getPrice(n),p=i.a.getCurrency(m),d=null,a.data.nextPageToken&&(d=a.data.nextPageToken),r.next=12,Object(c.a)([Object(c.c)({type:o.c,posts:{data:p,category:t.label}}),Object(c.c)(Object(l.h)(d))]);case 12:r.next=20;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(c.c)({type:o.a,error:r.t0});case 18:return r.next=20,Object(c.c)(Object(l.h)(null));case 20:case"end":return r.stop()}},u,null,[[1,14]])}function d(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(o.b,p);case 2:case"end":return e.stop()}},m)}},253:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(32),r=a(239),c=function(e){return e.get("labelsReducer",r.a)},s=function(){return Object(n.a)(c,function(e){return e.get("posts").toJS()})}},254:function(e,t,a){"use strict";var n=a(18),r=a(19),c=a(21),s=a(20),o=a(22),l=a(0),i=a.n(l),u=a(33),m=a(284),p=a(244),d=a.n(p),h=a(221),f=a.n(h),b=a(227),g=a.n(b),v=a(32),P=a(220),E=a(222),j=a(63),O=a(223),y=a(235),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).onHandleSelectPost=function(e){var t=a.props,n=t.onHandleSelectPost;(0,t.resetSelectedPost)(),n(e)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.samePosts,n=t.selectedPost,r=[];if(a.waiting)return i.a.createElement(f.a,{container:!0,spacing:32,className:"other-post"},i.a.createElement(y.a,null));a.data&&((r=d()(a.data).filter(function(e){return e.id!==n.id})).length>j.f&&(r=r.pop()));return r.length<=0?i.a.createElement(f.a,{container:!0,spacing:32,className:"other-post"},i.a.createElement(f.a,{item:!0,className:"col-l-12 col-12 col-s-12 post-item"},"No data available")):i.a.createElement("div",{className:"latest-post"},r.map(function(t){var a=P.a.convertStringToURL(t.title),n="/"+t.labels[0]+"/"+a+"-idpx"+t.id+".html";return i.a.createElement("div",{key:t.id,className:"col-l-12 col-12 col-s-6 post-item"},i.a.createElement(m.a,{to:n,onClick:function(){return e.onHandleSelectPost(t)}},i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:t.images[0],alt:t.title})),i.a.createElement(g.a,{className:"card-title",gutterBottom:!0,variant:"h5",component:"h4"},t.title),t.price&&i.a.createElement("div",{className:"price"},t.price,t.currency&&i.a.createElement("span",{className:"currency"},t.currency))))}))}}]),t}(l.Component),N=Object(v.b)({samePosts:Object(O.c)(),selectedPost:Object(O.d)()}),k={resetSelectedPost:E.c};t.a=Object(u.c)(N,k)(w)},255:function(e,t,a){"use strict";var n=a(18),r=a(19),c=a(21),s=a(20),o=a(22),l=a(0),i=a.n(l),u=a(33),m=a(258),p=a.n(m),d=a(64),h=a(12),f=a(32),b=a(221),g=a.n(b),v=a(220),P=a(222),E=a(63),j=a(272),O=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.url;return e?i.a.createElement(g.a,{className:"comment-box"},i.a.createElement(j.FacebookProvider,{appId:E.d},i.a.createElement(j.Comments,{href:e,width:"100%"}))):null}}]),t}(l.Component);O.defaultProps={};var y=O,w=a(238),N=a(65),k=a.n(N),x=a(223),S=a(226),I=a(225),H=a(233),C=a(234),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).setPageNotFound=function(){a.setState({PageNoFound:!0})},a.getSelectedPost=function(){var e=a.props.match.params.id;if(e){var t=v.a.getIdFromURL(e);(0,a.props.selectPost)(t)}else a.setPageNotFound()},a.handleSelectPost=function(e){(0,a.props.selectPost)(e.id)},a.state={PageNoFound:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.post.data||this.getSelectedPost()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.post,n=t.getSamePosts;a.waiting||a.data&&a.data.id!==e.post.data.id&&n({label:a.data.labels[0],limit:E.f})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){var e=this.props.post,t=this.state.PageNoFound;return e.waiting?i.a.createElement("div",{className:"loading-wrp"},i.a.createElement(w.a,{size:30})):t?i.a.createElement(g.a,{container:!0,className:"detail"},i.a.createElement(g.a,{container:!0},i.a.createElement("h2",null,"Page not found! :("))):e.data?i.a.createElement(g.a,{container:!0,className:"detail"},i.a.createElement(d.Helmet,{titleTemplate:" - %s",title:e.data.title}),i.a.createElement(d.Helmet,null,i.a.createElement("meta",{name:"description",content:e.data.title}),i.a.createElement("meta",{property:"og:url",content:window.location.href}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:e.data.title}),i.a.createElement("meta",{property:"og:image",content:e.data.images[0]?e.data.images[0]:k.a}),i.a.createElement("meta",{property:"og:description",content:e.data.title}),i.a.createElement("meta",{property:"fb:app_id",content:E.d}),i.a.createElement("link",{rel:"canonical",href:window.location.href})),i.a.createElement(g.a,{container:!0,className:"detail-wrp"},i.a.createElement(g.a,{item:!0,xs:12,className:"detail-header"},i.a.createElement("h1",null,e.data.title)),i.a.createElement(g.a,{className:"detail-left"},i.a.createElement(g.a,{className:"detail-content"},p()(e.data.content)),i.a.createElement(g.a,{container:!0},i.a.createElement(y,{title:e.data.title,url:window.location.href,postId:e.data.id}))))):i.a.createElement(g.a,{container:!0,className:"detail"},i.a.createElement(g.a,{container:!0},i.a.createElement("h2",null,"No data available! :(")))}}]),t}(l.Component),M=Object(f.b)({post:Object(x.b)()}),R={selectPost:P.d,getSamePosts:P.b},D=Object(u.c)(M,R),J=Object(S.a)({key:"detailReducer",reducer:H.a}),F=Object(I.a)({key:"detailSaga",saga:C.a});t.a=Object(h.c)(J,F,D)(T)}}]);
//# sourceMappingURL=11.1a2adbae.chunk.js.map