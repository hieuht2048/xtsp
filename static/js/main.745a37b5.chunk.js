(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,n,t){e.exports=t(211)},115:function(e,n){},125:function(e,n,t){},190:function(e,n){},196:function(e,n){},201:function(e){e.exports={"global.footer.copyright":"React Source Base Template made by {author}.","global.header.home":"Home"}},202:function(e){e.exports={"global.footer.copyright":"React Source Base Template \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi {author}.","global.header.home":"Trang ch\u1ee7"}},211:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(50),c=t.n(r),i=t(32),u=t(11),l=t.n(u),s=t(89),m=t(18),d=t(19),h=t(21),p=t(20),f=t(22),g=t(65),b=t(218),v=t(219),y=t(216),O=t(90),j=t.n(O),E=t(29),w=t(63),x=t(66),S=t.n(x),k=t(60),P=t(62),T=(t(125),t(94)),_=t.n(T),N=Object(E.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{main:_.a[500]},secondary:{main:"#11cb5f"}}}),H=(Object(E.createMuiTheme)({typography:{useNextVariants:!0}}),t(33)),L=t(61),C=t(43),D=function(e){return e.get("language",C.b)},R=function(e){function n(){return Object(m.a)(this,n),Object(h.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.props,n=e.locale,t=e.messages,a=e.children;return o.a.createElement(L.IntlProvider,{locale:n,key:n,messages:t[n]},o.a.Children.only(a))}}]),n}(o.a.PureComponent),A=Object(H.a)(Object(H.a)(D,function(e){return e.get("locale")}),function(e){return{locale:e}}),M=Object(i.c)(A)(R),I=t(41),J=l()({loader:function(){return t.e(13).then(t.bind(null,538))},loading:function(){return null},modules:["header"]}),B=l()({loader:function(){return Promise.all([t.e(15),t.e(20)]).then(t.bind(null,535))},loading:function(){return null},modules:["footer"]}),U=l()({loader:function(){return t.e(21).then(t.bind(null,235))},loading:function(){return null},modules:["not-found"]}),q=function(e){function n(){return Object(m.a)(this,n),Object(h.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){new j.a("Open Sans",{}).load().then(function(){document.body.classList.add("fontLoaded")})}},{key:"render",value:function(){var e=this.props.history,n=function(n){return o.a.createElement(M,{messages:n},o.a.createElement(E.MuiThemeProvider,{theme:N},o.a.createElement(b.a,{history:e},o.a.createElement("div",{className:"main-container hth-project"},o.a.createElement(g.Helmet,{titleTemplate:"%s - www.xitashop.com",defaultTitle:"www.xitashop.com | The best choice"},o.a.createElement("meta",{name:"description",content:"Chuy\xean h\xe0ng nh\u1eadp kh\u1ea9u ch\xednh h\xe3ng ch\u1ea5t l\u01b0\u1ee3ng cao, gi\xe1 t\u1ed1t nh\u1ea5t"}),o.a.createElement("meta",{property:"og:url",content:window.location.href}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:"www.xitashop.com | The best choice"}),o.a.createElement("meta",{property:"og:image",content:S.a}),o.a.createElement("meta",{property:"og:description",content:"Chuy\xean h\xe0ng nh\u1eadp kh\u1ea9u ch\xednh h\xe3ng ch\u1ea5t l\u01b0\u1ee3ng cao, gi\xe1 t\u1ed1t nh\u1ea5t"}),o.a.createElement("meta",{property:"fb:app_id",content:w.d})),o.a.createElement(J,null),o.a.createElement("main",{className:"main-content"},o.a.createElement("div",{className:"container"},o.a.createElement(v.a,null,k.a.length&&k.a.map(function(e,n){return o.a.createElement(y.a,Object.assign({key:n},e))}),P.a.length&&P.a.map(function(e,n){return o.a.createElement(y.a,Object.assign({key:n},e))}),o.a.createElement(y.a,{component:U})))),o.a.createElement(B,null)))))};return n(I.b)}}]),n}(a.PureComponent),z=t(12),Q=t(13),V=t(98),F=t(100),G=t(52),K=t(68),W=Object(F.a)(),X=!("undefined"!==typeof window&&window.document&&window.document.createElement);var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=X?{}:window.__PRELOADED_STATE__,t=X?Object(G.c)({initialEntries:[e]}):Object(G.a)({basename:""}),a=[W,Object(V.routerMiddleware)(t)],o=[z.a.apply(void 0,a)];X||delete window.__PRELOADED_STATE__;var r=z.c,c=Object(z.d)(Object(K.a)(),Object(Q.fromJS)(n),r.apply(void 0,o));return c.runSaga=W.run,c.injectedReducers={},c.injectedSagas={},{store:c,history:t}}(),Z=Y.store,$=Y.history,ee=document.getElementById("root");window.onload=function(){l.a.preloadReady().then(function(){c.a.hydrate(o.a.createElement(s.Frontload,{noServerRender:!0},o.a.createElement(i.a,{store:Z},o.a.createElement(q,{history:$}))),ee)})},t(210).install()},41:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return m});var a=t(39),o=t(61).addLocaleData,r=t(199),c=t(200),i=t(201),u=t(202);o(r),o(c);var l="en",s=function e(n,t){var o=n!==l?e(l,i):{};return Object.keys(t).reduce(function(e,r){var c=t[r]||n===l?t[r]:o[r];return Object.assign(e,Object(a.a)({},r,c))},{})},m={en:s("en",i),vi:s("vi",u)}},43:function(e,n,t){"use strict";var a=t(13),o="language/CHANGE_LOCALE",r=t(41);t.d(n,"b",function(){return c});var c=Object(a.fromJS)({locale:r.a});n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return localStorage.setLanguage(n.language),e.set("locale",n.locale);default:return e}}},60:function(e,n,t){"use strict";var a=t(11),o=t.n(a),r=[{title:"Trang ch\u1ee7",path:"/",exact:!0,component:o()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,217))},loading:function(){return null},modules:["SamHanQuoc"]})},{title:"S\xe2m H\xe0n Qu\u1ed1c",path:"/sam-han-quoc/",exact:!1,component:o()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,213))},loading:function(){return null},modules:["SamHanQuoc"]})},{title:"N\u01b0\u1edbc Hoa",path:"/nuoc-hoa/",exact:!1,component:o()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,214))},loading:function(){return null},modules:["NuocHoa"]})},{title:"S\u1ea3n ph\u1ea9m kh\xe1c",path:"/san-pham-khac/",exact:!1,component:o()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,215))},loading:function(){return null},modules:["SanPhamKhac"]})}];n.a=r},62:function(e,n,t){"use strict";var a=t(44),o=t.n(a),r=t(64),c=t(18),i=t(19),u=t(21),l=t(20),s=t(22),m=t(0),d=t.n(m),h=function(e){return function(n){function t(n){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,n))).commponentInit=Object(r.a)(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,a.mounted&&r&&a.setState({component:r});case 5:case"end":return n.stop()}},n)})),a.state={component:null},a}return Object(s.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.commponentInit()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.component;return e?d.a.createElement(e,this.props):null}}]),t}(m.PureComponent)},p=t(91),f=t.n(p),g=t(92),b=t.n(g),v=t(93),y=t.n(v),O=h(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,217))}),j=h(function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,536))}),E=h(function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,537))}),w=[{title:"Trang ch\u1ee7",path:"/",exact:!0,component:O,icon:f.a},{title:"H\u01b0\u1edbng d\u1eabn",path:"/question",exact:!1,component:j,icon:b.a},{title:"Li\xean h\u1ec7",path:"/contact",exact:!1,component:E,icon:y.a}];n.a=w},63:function(e,n,t){"use strict";t.d(n,"g",function(){return a}),t.d(n,"f",function(){return o}),t.d(n,"e",function(){return r}),t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i}),t.d(n,"d",function(){return u}),t.d(n,"h",function(){return l}),t.d(n,"c",function(){return s}),t.d(n,"i",function(){return m});var a=20,o=6,r=6,c="AIzaSyBENSUVEmUx4Oo1xNsmMznigrzD38oN8U0",i="1455973207657226377",u="274418480159106",l="844864061957423117",s="2571165285519513721",m="7733658941706526556"},66:function(e,n,t){e.exports=t.p+"static/media/og-img.a352a446.jpg"},68:function(e,n,t){"use strict";var a=t(67),o=t(99),r=t(13),c=Object(r.fromJS)({loading:!1}),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return(arguments.length>1?arguments[1]:void 0).type,e},u=t(43);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.combineReducers)(Object(a.a)({global:i,language:u.a},e))}t.d(n,"a",function(){return l})},91:function(e,n,t){e.exports=t.p+"static/media/home.c6d71519.svg"},92:function(e,n,t){e.exports=t.p+"static/media/question.7e5f2046.svg"},93:function(e,n,t){e.exports=t.p+"static/media/info.fc5c5044.svg"},95:function(e,n){}},[[106,6,7]]]);
//# sourceMappingURL=main.745a37b5.chunk.js.map