(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{237:function(e,t,r){"use strict";r.d(t,"d",function(){return a}),r.d(t,"a",function(){return o}),r.d(t,"b",function(){return c}),r.d(t,"c",function(){return i}),r.d(t,"e",function(){return u}),r.d(t,"g",function(){return s}),r.d(t,"f",function(){return l}),r.d(t,"h",function(){return p});var n=r(274),a=function(e){return{type:n.h,payload:e}},o=function(e){return{type:n.b,payload:e}},c=function(e){return{type:n.e,payload:e}},i=function(e){return{type:n.d,error:e}},u=function(){return{type:n.j}},s=function(e){return{type:n.l,isSearch:e}},l=function(e){return{type:n.k,keyword:e}},p=function(e){return{type:n.m,nextPageToken:e}}},274:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"c",function(){return a}),r.d(t,"a",function(){return o}),r.d(t,"h",function(){return c}),r.d(t,"i",function(){return i}),r.d(t,"g",function(){return u}),r.d(t,"e",function(){return s}),r.d(t,"f",function(){return l}),r.d(t,"d",function(){return p}),r.d(t,"l",function(){return f}),r.d(t,"j",function(){return y}),r.d(t,"m",function(){return m}),r.d(t,"k",function(){return d});var n="home/GET_HOME_POSTS_REQUEST",a="home/GET_HOME_POSTS_SUCCESS",o="home/GET_HOME_POSTS_ERROR",c="home/GET_PROMOTION_PAGE_REQUEST",i="home/GET_PROMOTION_PAGE_SUCCESS",u="home/GET_PROMOTION_PAGE_ERROR",s="home/GET_MORE_POSTS_REQUEST",l="home/GET_MORE_POSTS_SUCCESS",p="home/GET_MORE_POSTS_ERROR",f="home/SET_IS_SEARCH",y="home/RESET_HOME_POSTS",m="home/SET_NEXT_PAGE_TOKEN",d="home/SAVE_KEYWORD"},284:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),c=r.n(o),i=r(5),u=r.n(i),s=r(52),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},y=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return r=n=p(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,r=n.props,a=r.replace,o=r.to;a?t.replace(o):t.push(o)}},p(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(s.b)(t,null,null,o.location):t,i=o.createHref(c);return a.a.createElement("a",l({},n,{onClick:this.handleClick,href:i,ref:r}))},t}(a.a.Component);y.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=y},435:function(e,t,r){e.exports=r.p+"static/media/logo.c2130e10.svg"},436:function(e,t,r){e.exports=r.p+"static/media/search.f21c2dda.svg"},437:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=function e(t,r,p){if("string"!==typeof r){if(l){var f=s(r);f&&f!==l&&e(t,f,p)}var y=c(r);i&&(y=y.concat(i(r)));for(var m=0;m<y.length;++m){var d=y[m];if(!n[d]&&!a[d]&&(!p||!p[d])){var h=u(r,d);try{o(t,d,h)}catch(v){}}}return t}return t}},533:function(e,t,r){"use strict";r.r(t);var n=r(18),a=r(19),o=r(21),c=r(20),i=r(22),u=r(0),s=r.n(u),l=r(33),p=r(2),f=r.n(p),y=r(216),m=r(284),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var v=function(e){var t=e.to,r=e.exact,n=e.strict,a=e.location,o=e.activeClassName,c=e.className,i=e.activeStyle,u=e.style,l=e.isActive,p=e["aria-current"],f=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),v="object"===("undefined"===typeof t?"undefined":h(t))?t.pathname:t,O=v&&v.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return s.a.createElement(y.a,{path:O,exact:r,strict:n,location:a,children:function(e){var r=e.location,n=e.match,a=!!(l?l(n,r):n);return s.a.createElement(m.a,d({to:t,className:a?[c,o].filter(function(e){return e}).join(" "):c,style:a?d({},u,i):u,"aria-current":a&&p||null},f))}})};v.propTypes={to:m.a.propTypes.to,exact:f.a.bool,strict:f.a.bool,location:f.a.object,activeClassName:f.a.string,className:f.a.string,activeStyle:f.a.object,style:f.a.object,isActive:f.a.func,"aria-current":f.a.oneOf(["page","step","location","date","time","true"])},v.defaultProps={activeClassName:"active","aria-current":"page"};var O=v,E=r(437),b=r.n(E),S=r(84),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var T=function(e){var t=function(t){var r=t.wrappedComponentRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["wrappedComponentRef"]);return s.a.createElement(S.a,{children:function(t){return s.a.createElement(e,g({},n,t,{ref:r}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:f.a.func},b()(t,e)},_=r(435),P=r.n(_),R=r(436),j=r.n(R),w=r(60),C=r(62),N=r(237),x=function(e){function t(){var e,r;Object(n.a)(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(r=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).handleSearch=function(e){var t=r.props,n=t.getHomePosts,a=t.history,o=t.setIsSearch,c=t.saveKeyword,i=e.target.value;"Enter"===e.key&&i.length>0&&(o(!0),n({pageToken:null,keyword:i}),c(i),e.target.value="",setTimeout(function(){a.push("/")},400))},r}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("header",null,s.a.createElement("div",{className:"top-menu"},s.a.createElement("div",{className:"container"},s.a.createElement("ul",null,C.a.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(O,{exact:e.exact,activeClassName:"actived",to:e.path},s.a.createElement("img",{src:e.icon,alt:e.title}),e.title))})),s.a.createElement("div",{className:"search"},s.a.createElement("img",{src:j.a,alt:""}),s.a.createElement("input",{placeholder:"T\xecm ki\u1ebfm",onKeyPress:function(t){return e.handleSearch(t)}})))),s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"logo"},s.a.createElement(m.a,{to:"/"},s.a.createElement("img",{src:P.a,alt:"Xitashop"}))),s.a.createElement("div",{className:"main-menu"},s.a.createElement("ul",null,w.a.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(O,{exact:e.exact,activeClassName:"actived",to:e.path},e.title))}))))))}}]),t}(u.Component),k={getHomePosts:N.a,setIsSearch:N.g,saveKeyword:N.f};t.default=T(Object(l.c)(function(){return{}},k)(x))}}]);
//# sourceMappingURL=16.65adc67f.chunk.js.map