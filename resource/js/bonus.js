!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=n(15);r.init()},1:function(e,t){e.exports=React},2:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},3:function(e,t){e.exports=ReactDOM},15:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var c=n(1),s=r(c),l=n(3),f=r(l),d=n(2),p=n(26),h=n(27),m=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("body",null,s["default"].createElement("img",{src:"../images/bonusrule.png"}))}}]),t}(s["default"].Component),v=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:[]},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.refs.rule.onclick=function(){d.QueryString("rule")||(document.title="加息规则",window.history.pushState({},document.title,"?rule=1")),f["default"].render(s["default"].createElement(m,null),document.body)},d.QueryString("rule")&&this.refs.rule.click()}},{key:"render",value:function(){var e=this;return s["default"].createElement("body",null,s["default"].createElement("a",{ref:"rule",className:"rule bonus"}),s["default"].createElement(p.Tab,{setting:d.QueryString("rule")?[]:[{name:"未使用",value:"/api/getbonus/0"},{name:"已使用",value:"/api/getbonus/1"},{name:"已过期",value:"/api/getbonus/2"}],callback:function(t,n){e.setState({data:t.data,status:n})}}),s["default"].createElement(h.Content,{data:this.state.data,type:"bonus",status:this.state.status}))}}]),t}(s["default"].Component),b=function y(){d.PageData.setData(null,function(){f["default"].render(s["default"].createElement(v,null),document.body)}).render(y)};t.init=b},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0;var c=n(1),s=r(c),l=n(3),f=r(l),d=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getData=function(t){$.ajax({url:e.props.value,success:function(n){t.setState({currentIndex:e.props.index}),t.props.callback(n,e.props.status)}})},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.userClass;f["default"].findDOMNode(this).onclick=function(){e.props.index!==t.state.currentIndex&&e.getData(t)}}},{key:"render",value:function(){var e=this.props.userClass;return s["default"].createElement("a",{className:this.props.index===e.state.currentIndex?"current":""},this.props.name)}}]),t}(s["default"].Component),p=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.refs.list1&&f["default"].findDOMNode(this.refs.list1).click()}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.currentIndex!==t.currentIndex}},{key:"render",value:function(){var e=this,t=[],n=this.props.setting;return n.forEach(function(n,r){t.push(s["default"].createElement(d,{userClass:e,ref:"list"+(r+1),index:r+1,name:n.name,value:n.value,status:r}))}),s["default"].createElement("menu",{className:"tab"},t)}}]),t}(s["default"].Component);p.defaultProps={currentIndex:0},t.Tab=p},27:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;var c=n(1),s=r(c),l=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getStatus=function(){var t="";switch(e.props.status){case 0:t=e.props.expirationDate+"到期";break;case 1:t="已使用";break;case 2:t="已过期"}return t},e}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props;return s["default"].createElement("section",null,s["default"].createElement("b",null,e.money),s["default"].createElement("p",null,e.name),s["default"].createElement("p",null,s["default"].createElement("span",null,"单笔投资≥"+e.condition+"元"),s["default"].createElement("em",null,this.getStatus())))}}]),t}(s["default"].Component),f=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data},n.getClassName=function(){var e="";switch(n.state.status){case 0:e=" available";break;case 1:case 2:e=" unavailable";break;default:e=""}return e},n}return u(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=[],t=this.state.data;return t.length?t.forEach(function(t){e.push(s["default"].createElement(l,{money:t.money,name:t.name,condition:t.conditions,expirationDate:t.expirationDate.split(" ")[0],status:t.status}))}):e[0]=s["default"].createElement("div",{className:"default"}),s["default"].createElement("div",{className:"content "+this.props.type+this.getClassName()},e)}}]),t}(s["default"].Component);t.Content=f}});