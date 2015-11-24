!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(10);r.init()},function(e,t){e.exports=React},function(e,t){"use strict";var n={isMatch:function(e,t){switch(e){case"name":return t.toString().length>>1;case"tel":return t.toString().match(/^1\d{10}$/)?1:0;case"phone":return t.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return t.toString().match(/^\d{6}$/)?1:0;case"password":return t.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return t.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return t.toString().match(/^\d{15,18}$/)?1:0}},QueryString:function(e){var t=window.location.search.substr(1).match(new RegExp("(^|&)"+e+"=([^&]*)(&|$)"));return null===t?null:unescape(t[2])},ParamString:function(){var e=window.location.href,t=window.location.search,n=t?e.split(t)[0].substring(e.split(t)[0].lastIndexOf("/")+1):e.split("/")[e.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(e){var t=this;this.name=e.name,this.version=e.version,this.url=e.url,this.callback=e.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(e){localStorage[t.name]=JSON.stringify(e),localStorage[t.name+"_v"]=t.version,t.callback(e)}})},getPage:function(e){var t=(e.react,e.reactDOMServer,e.req,e.main);return t},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"},PageData:{render:function(e){n.setRem(),document.body.style.opacity=1,window.onpopstate=function(){e()}},setData:function(e,t){var n=this;return e&&!this.getData()?$.ajax({url:e,success:function(e){n.data=e,t(e)}}):t(this.getData()),this},getData:function(){return this.data}}};e.exports=n},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var l=n(1),c=r(l),s=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.option.currentIndex,index:e.option.index,href:e.option.href,text:e.option.text},n}return o(t,e),i(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{className:e.currentIndex===e.index?"current":"",href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),f=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={href:e.option.href,text:e.option.text},n}return o(t,e),i(t,[{key:"render",value:function(){var e=this.state;return c["default"].createElement("a",{href:e.href},c["default"].createElement("i",null),c["default"].createElement("span",null,e.text))}}]),t}(c["default"].Component),d=(function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).call(this))}return o(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("a",null)}}]),t}(c["default"].Component),function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={currentIndex:e.currentIndex,type:e.type,option:e.option},n.getClassType=function(e){var t=void 0;switch(n.state.type){case 1:t="footer";break;case 2:t="menu_3col_anchor";break;case 3:t="menu_3col"}return t},n.getListType=function(e,t){var r=void 0;switch(n.state.type){case 1:r=c["default"].createElement(s,{option:{currentIndex:n.state.currentIndex,index:t,href:e.href,text:e.text}});break;case 2:r=c["default"].createElement(f,{option:{href:e.href,text:e.text}});break;case 3:}return r},n}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=[],n=this.state.option;return n.forEach(function(n,r){t.push(e.getListType(n,r))}),c["default"].createElement("menu",{className:this.getClassType()},t)}}]),t}(c["default"].Component));t.Menu=d},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.main=void 0;var l=n(1),c=r(l),s=n(3),f=r(s),d=n(2),p=n(4),h=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.data,t="";return e.other="满20000元即可获得20元红包!",e.other&&(t=c["default"].createElement("p",null,c["default"].createElement("i",null),c["default"].createElement("span",null,e.other))),c["default"].createElement("div",{className:"part1"},c["default"].createElement("p",null,c["default"].createElement("strong",null,(100*e.primeRate).toFixed(1)),c["default"].createElement("em",null,"％"),c["default"].createElement("span",null,"预计年化收益"),c["default"].createElement("b",null,"起息日:T+1")),c["default"].createElement("ul",null,c["default"].createElement("li",null,c["default"].createElement("p",null,e.days+"天"),c["default"].createElement("p",null,"项目期限")),c["default"].createElement("li",null,c["default"].createElement("p",null,e.unitPrice*e.minUnitCount+"元"),c["default"].createElement("p",null,"起投金额")),c["default"].createElement("li",null,c["default"].createElement("p",null,e.lumpSum+"元"),c["default"].createElement("p",null,"项目总额"))),t)}}]),t}(c["default"].Component),m=function(e){function t(){a(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.checkMarkup=function(e){return{__html:e}},e}return o(t,e),i(t,[{key:"render",value:function(){var e=[],t=this.props.data;for(var n in t)t[n]&&e.push(c["default"].createElement("div",{className:"detail"},c["default"].createElement("h1",null,n),c["default"].createElement("pre",null,c["default"].createElement("p",{dangerouslySetInnerHTML:this.checkMarkup(t[n])}))));return c["default"].createElement("body",null,e)}}]),t}(c["default"].Component),y=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=[],t=[],n=this.props.data;return this.props.setting.forEach(function(e){t.push(c["default"].createElement("li",null,e))}),n.forEach(function(t){e.push(c["default"].createElement("ul",null,c["default"].createElement("li",null,t.name),c["default"].createElement("li",null,t.money),c["default"].createElement("li",null,t.buyTime)))}),c["default"].createElement("body",null,c["default"].createElement("ul",null,t),e)}}]),t}(c["default"].Component);y.defaultProps={setting:["购买人","购买金额","购买时间"]};var v=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.id,t=this.props.index,n=this.props.data,r=document.body;t&&(f["default"].findDOMNode(this).onclick=function(){Object.keys(n).length?f["default"].render(c["default"].createElement(m,{data:n}),r):$.ajax({url:"/api/getbidder/"+e,success:function(e){f["default"].render(c["default"].createElement(y,{data:e.data}),r)}})})}},{key:"render",value:function(){var e=this.props;return c["default"].createElement("p",null,c["default"].createElement("span",null,e.name),c["default"].createElement("em",null,e.value))}}]),t}(c["default"].Component),b=function(e){function t(){a(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.adaptor=function(e,t){for(var n={},r=0,a=e.length;a>r;r++)n[e[r].name]=t[e[r].value];return n},e}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=[],n=this.props.setting,r=this.props.data;return n.forEach(function(n,a){t.push(c["default"].createElement(v,{id:r.id,index:a,name:n.name,value:n.value,data:e.adaptor(n.detail,r)}))}),c["default"].createElement("div",{className:"part2"},t)}}]),t}(c["default"].Component);b.defaultProps={setting:[{name:"还款方式",value:"自动还款",detail:[]},{name:"产品描述",value:"利率高",detail:[{name:"资金用途",value:"fundUse"},{name:"抵押物说明",value:"collateral"},{name:"还款来源",value:"source"}]},{name:"资金保障",value:"风险低",detail:[{name:"担保方式",value:"guarantee"},{name:"担保方介绍",value:"guaranteeIntroduce"},{name:"资金安全",value:"fundSafe"}]},{name:"申购情况",value:"已申购订单",detail:[]}]};var g=function(e){function t(){a(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.state={interest:"0.00"},e.matchNum=function(t,n){var r=e.props.data,a=t.value=Math.floor(t.value);t.value=a=a>=0?a>n?a=n:a:0,e.setState({interest:(a*r.primeRate/365*r.days).toFixed(2)})},e}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.data,n=this.refs.minus,r=this.refs.plus,a=this.refs.num;a.onkeyup=function(){e.matchNum(a,t.lumpSum)},n.onclick=function(){a.value=parseInt(a.value)-500,a.onkeyup()},r.onclick=function(){a.value=parseInt(a.value)+500,a.onkeyup()}}},{key:"render",value:function(){var e=this.props.data;return c["default"].createElement("div",{className:"part3"},c["default"].createElement("div",null,c["default"].createElement("p",null,e.balance+"元"),c["default"].createElement("p",null,"可投金额")),c["default"].createElement("div",null,c["default"].createElement("p",null,this.state.interest+"元"),c["default"].createElement("p",null,"预期收益")),c["default"].createElement("form",{method:"post",action:"/api/postbill"},c["default"].createElement("span",{ref:"minus"},"－"),c["default"].createElement("input",{name:"invest",ref:"num",className:"num",type:"text",defaultValue:"0"}),c["default"].createElement("span",{ref:"plus"},"＋"),c["default"].createElement("p",{className:"term"},"募集时间:"+e.beginTime.split(" ")[0]+"至"+e.stopBuyTime.split(" ")[0]),c["default"].createElement("input",{className:"longBtn btnBuy",type:"submit",value:"立即购买"})))}}]),t}(c["default"].Component),E=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data},n}return o(t,e),i(t,[{key:"render",value:function(){var e=this.state.data.product,t=this.state.data.details;return c["default"].createElement("body",null,c["default"].createElement(h,{data:e}),c["default"].createElement(b,{data:t}),c["default"].createElement(g,{data:e}))}}]),t}(c["default"].Component),x=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:n.props.index,data:n.props.data},n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;f["default"].findDOMNode(this).onclick=function(){var t=e.state.data;document.title=t.name,d.QueryString("index")||window.history.pushState({},t.name,"?index="+e.state.index),$.ajax({url:"/api/getproduct/"+t.id,success:function(e){f["default"].render(c["default"].createElement(E,{data:e.data}),document.body)}})}}},{key:"render",value:function(){var e=this.state.data;return c["default"].createElement("section",null,c["default"].createElement("h1",null,c["default"].createElement("strong",null,e.name),c["default"].createElement("em",null,"项目规模:"+e.lumpSum+"元")),c["default"].createElement("div",{className:"main"},c["default"].createElement("div",{className:"column1"},c["default"].createElement("p",null,"年化率"),c["default"].createElement("p",null,c["default"].createElement("strong",null,(100*e.primeRate).toFixed(1)),c["default"].createElement("em",null,"％"))),c["default"].createElement("div",{className:"column2"},c["default"].createElement("p",null,"期限"),c["default"].createElement("p",null,c["default"].createElement("strong",null,e.days),c["default"].createElement("em",null,"天"))),c["default"].createElement("a",null,"立即购买")))}}]),t}(c["default"].Component),O=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={data:e.data.data},n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){d.QueryString("index")&&f["default"].findDOMNode(this.refs["product"+d.QueryString("index")]).click()}},{key:"render",value:function(){var e=[],t=this.state.data;return t.forEach(function(t,n){e.push(c["default"].createElement(x,{index:n+1,data:t,ref:"product"+(n+1)}))}),c["default"].createElement("body",null,e,c["default"].createElement(p.Menu,{type:1,option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/me",text:"我的账户"},{href:"/more",text:"更多"}],currentIndex:1}))}}]),t}(c["default"].Component),w=function k(){d.PageData.setData("/api/getproduct",function(e){c["default"].render(c["default"].createElement(O,{data:e}),document.body)}).render(k)};t.main=O,t.init=w}]);