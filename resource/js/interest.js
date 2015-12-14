!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=n(22);r.init()},1:function(e,t){e.exports=React},2:function(e,t){e.exports=ReactDOM},3:function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"mobile":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{5}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t?t.substr(1).match(n):window.location.search.substr(1).match(n);return null===r?null:unescape(r[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},4:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={message:e.message,autoHide:e.autoHide},n.autoHide=function(){n.state.autoHide&&!function(){var e=setTimeout(function(){clearTimeout(e),n.setState({message:""})},2500)}()},n}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({message:e.message})}},{key:"componentDidMount",value:function(){this.autoHide()}},{key:"shouldComponentUpdate",value:function(e,t){return e.message!==this.props.message||t.message!==this.state.message}},{key:"componentDidUpdate",value:function(){this.autoHide()}},{key:"render",value:function(){return React.createElement("p",{className:"message"},this.state.message)}}]),t}(i.Component);c.defaultProps={message:""},t["default"]=c},8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),s=r(c),l=n(2),f=r(l),p=n(3),m=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getData=function(t){$.ajax({url:e.props.href,success:function(n){t.setState({currentIndex:e.props.index}),parseInt(p.QueryString("status"))!==e.props.index&&window.history.pushState({},document.title,"/profit?status="+e.props.index),t.props.callback(n,e.props.status)}})},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.userClass;f["default"].findDOMNode(this).onclick=function(){e.props.index!==t.state.currentIndex&&e.getData(t)}}},{key:"render",value:function(){var e=this.props.userClass;return this.props.value+0?s["default"].createElement("a",{className:this.props.index===e.state.currentIndex?"current":""},s["default"].createElement("h1",null,this.props.name),s["default"].createElement("h2",null,(this.props.value||0).toFixed(2))):s["default"].createElement("a",{className:this.props.index===e.state.currentIndex?"current":""},this.props.name)}}]),t}(s["default"].Component),d=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){f["default"].findDOMNode(this.refs["list"+p.QueryString("status")]).click()}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.currentIndex!==t.currentIndex}},{key:"render",value:function(){var e=this,t=[],n=this.props.setting;return n.map(function(n,r){t.push(s["default"].createElement(m,{userClass:e,ref:"list"+(r+1),index:r+1,name:n.name,value:n.value,href:n.href,status:r,key:r}))}),s["default"].createElement("menu",{className:"tab"},t)}}]),t}(s["default"].Component);d.defaultProps={currentIndex:0},t["default"]=d},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),s=n(4),l=(r(s),function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.getStatus=function(){var t="";switch(e.props.status){case 0:t=e.props.expirationDate+"到期";break;case 1:t="已使用";break;case 2:t="已过期"}return t},e}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props;return React.createElement("section",null,React.createElement("b",null,e.money),React.createElement("p",null,e.name),React.createElement("p",null,React.createElement("span",null,"单笔投资≥"+e.condition+"元"),React.createElement("em",null,this.getStatus())))}}]),t}(c.Component)),f=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data||[],status:0},n.getClassName=function(){var e="";switch(n.state.status){case 0:e=" available";break;case 1:case 2:e=" unavailable";break;default:e=""}return e},n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.props.url&&$.ajax({url:this.props.url,success:function(t){200===t.code?e.setState({data:t.data}):!function(){e.props.store.warning.component.setState({message:t.message});var n=setTimeout(function(){clearTimeout(n),window.location.href="/signin"},1e3)}()}})}},{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this,t=[],n=this.state.data;return n.length?n.map(function(n,r){t.push(React.createElement(l,{ref:"list"+(r+1),money:n.money,name:n.name,condition:n.conditions,expirationDate:n.expirationDate.split(" ")[0],status:n.status,id:n.id,callback:e.props.callback,key:r}))}):t[0]=React.createElement("div",{className:"default"}),React.createElement("div",{className:"content "+this.props.type+this.getClassName()},t)}}]),t}(c.Component);t["default"]=f},22:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var c=n(1),s=r(c),l=n(2),f=r(l),p=n(35),m=n(3),d=n(8),h=r(d),y=n(9),v=r(y),b=n(4),g=r(b),w=p.createStore(function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];if(e[t.type])for(var n in t)e[t.type][n]=t[n];else e[t.type]=t;return e}),O=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("body",null,s["default"].createElement("img",{src:"../images/interestrule.png"}))}}]),t}(s["default"].Component),E=function(e){function t(){a(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.state={data:[]},e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){w.dispatch({type:"warning",component:this.refs.warning}),this.refs.rule.onclick=function(){m.QueryString("rule")||(document.title="加息规则",window.history.pushState({},document.title,"?rule=1")),f["default"].render(s["default"].createElement(O,null),document.body)},m.QueryString("rule")&&this.refs.rule.click()}},{key:"render",value:function(){var e=this;return s["default"].createElement("body",null,s["default"].createElement("div",{className:"warning"},s["default"].createElement(g["default"],{ref:"warning"})),s["default"].createElement("a",{ref:"rule",className:"rule interest"}),s["default"].createElement(h["default"],{setting:m.QueryString("rule")?[]:[{name:"未使用",href:"/api/getbonus/0"},{name:"已使用",href:"/api/getbonus/1"},{name:"已过期",href:"/api/getbonus/2"}],callback:function(t,n){200===t.code?e.setState({data:t.data,status:n}):!function(){e.refs.warning.setState({message:t.message});var n=setTimeout(function(){clearTimeout(n),window.location.href="/signin"},1e3)}()}}),s["default"].createElement(v["default"],{data:this.state.data,type:"interest",status:this.state.status,store:w.getState()}))}}]),t}(s["default"].Component),x=function k(){m.PageData.setData(null,function(){f["default"].render(s["default"].createElement(E,null),document.body)}).render(k)};t.init=x},35:function(e,t){e.exports=Redux}});