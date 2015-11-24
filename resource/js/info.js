!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(7);r.init()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"tel":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{6}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t){e.exports=ReactDOM},,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.main=void 0;var l=n(1),c=r(l),s=n(3),f=r(s),d=n(2),p=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={title:e.title,time:e.time,source:e.source,detail:e.detail},n.checkMarkup=function(){return{__html:n.state.detail}},n}return o(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("section",{className:"detail"},c["default"].createElement("h1",null,this.state.title),c["default"].createElement("h2",null,"来源:"+this.state.source),c["default"].createElement("div",{className:"detail",dangerouslySetInnerHTML:this.checkMarkup()}),c["default"].createElement("span",null,this.state.time))}}]),t}(c["default"].Component),h=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:e.index,id:e.id,status:e.status,title:e.title,source:e.source,introduce:e.introduce,time:e.time},n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;f["default"].findDOMNode(this).onclick=function(){$.ajax({url:"/api/getinfo/"+e.state.id,success:function(t){document.title=e.state.title,document.body.style.backgroundColor="white",d.QueryString("index")||window.history.pushState({},e.state.title,"?index="+e.state.index),c["default"].render(c["default"].createElement(p,{title:e.state.title,time:e.state.time,source:e.state.source,detail:t.data.details}),document.body)}})}}},{key:"render",value:function(){return c["default"].createElement("section",{className:this.state.status?"unread":""},c["default"].createElement("h1",null,this.state.title),c["default"].createElement("p",null,this.state.introduce),c["default"].createElement("span",null,this.state.time))}}]),t}(c["default"].Component),m=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data},n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){d.QueryString("index")&&f["default"].findDOMNode(this.refs["info"+d.QueryString("index")]).click()}},{key:"render",value:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(c["default"].createElement(h,{index:n+1,id:t.id,status:t.status,title:t.title,source:t.source,introduce:t.introduce,time:t.time.split(" ")[0],ref:"info"+(n+1)}))}),c["default"].createElement("body",null,e)}}]),t}(c["default"].Component),y=function v(){d.PageData.setData("/api/getinfo",function(e){document.title="消息中心",document.body.style.backgroundColor="rgb(244, 244, 244)",f["default"].render(c["default"].createElement(m,{data:e.data}),document.body)}).render(v)};t.main=m,t.init=y}]);