!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(16);r.init()},function(t,e){t.exports=React},function(t,e){"use strict";var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){var e=this;this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[e.name]=JSON.stringify(t),localStorage[e.name+"_v"]=e.version,e.callback(t)}})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(t){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){t()}},setData:function(t,e){var n=this;return t&&!this.getData()?$.ajax({url:t,success:function(t){n.data=t,e(t)}}):e(this.getData()),this},getData:function(){return this.data}}};t.exports=n},function(t,e){t.exports=ReactDOM},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Banner=void 0;var i=n(1),c=r(i),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={index:n.props.index,href:n.props.href,backgroundImage:n.props.backgroundImage},n}return s(e,t),u(e,[{key:"render",value:function(){return c["default"].createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}]),e}(c["default"].Component),p=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={index:0,data:n.props.data},n}return s(e,t),u(e,[{key:"render",value:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(c["default"].createElement(l,{index:n,href:e.href,backgroundImage:e.imgSrc}))}),t.push(c["default"].createElement(l,{index:0,href:e[0].href,backgroundImage:e[0].imgSrc})),c["default"].createElement("header",null,c["default"].createElement("div",{className:"container"},t))}}]),e}(c["default"].Component);e.Banner=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.Warning=void 0;var i=n(1),c=r(i),l=function(t){function e(t){o(this,e);var n=a(this,Object.getPrototypeOf(e).call(this,t));return n.state={message:t.message},n}return s(e,t),u(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({message:t.message})}},{key:"render",value:function(){return c["default"].createElement("div",{className:"warning"},this.state.message)}}]),e}(c["default"].Component);l.defaultProps={message:""},e.Warning=l},,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var i=n(1),c=r(i),l=n(3),p=r(l),f=n(2),g=n(6),d=(n(7),function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return s(e,t),u(e,[{key:"render",value:function(){return c["default"].createElement("form",{method:"post",action:"/api/signin"},c["default"].createElement("input",{name:"mobile",className:"longInput mobile",type:"tel",placeholder:"手机号码"}),c["default"].createElement("input",{name:"password",className:"longInput password",type:"password",placeholder:"密码"}),c["default"].createElement("a",{href:"/reset"},"忘记密码?"),c["default"].createElement("input",{className:"longBtn",type:"submit",value:"确认"}),c["default"].createElement("p",null,c["default"].createElement("span",null,"还没账号?"),c["default"].createElement("a",{href:"/signup"},"立即注册")))}}]),e}(c["default"].Component)),h=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return s(e,t),u(e,[{key:"render",value:function(){return c["default"].createElement("body",null,c["default"].createElement(g.Banner,{data:[{href:"/activity/1",imgSrc:"/images/banner/1.png"},{href:"/activity/2",imgSrc:"/images/banner/2.png"},{href:"/activity/3",imgSrc:"/images/banner/3.png"},{href:"/activity/4",imgSrc:"/images/banner/4.png"},{href:"/activity/5",imgSrc:"/images/banner/5.png"}]}),c["default"].createElement(d,null))}}]),e}(c["default"].Component),m=function b(){f.PageData.setData(null,function(){p["default"].render(c["default"].createElement(h,null),document.body)}).render(b)};e.init=m}]);