!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i=n(7),a=(i.main,i.init);a()},function(t,e){t.exports=React},function(t,e){var n={isMatch:function(t,e){switch(t){case"name":return e.toString().length>>1;case"tel":return e.toString().match(/^1\d{10}$/)?1:0;case"phone":return e.toString().match(/^(0|8)[1-9]{1,2}\d{7,8}$/)?1:0;case"captcha":return e.toString().match(/^\d{6}$/)?1:0;case"password":return e.toString().match(/^\S{6,16}$/)?1:0;case"bankcard":return e.toString().match(/^\d{16,19}$/)?1:0;case"idcard":return e.toString().match(/^\d{15,18}$/)?1:0}},Adaptor:function(t,e){var n;switch(t){case"complexNav":n={supList:[]},e.forEach(function(t,e){1===t.level?(t.subList=[],n.supList.push(t)):n.supList[t.type-1].subList.push(t)})}return n},QueryString:function(t){var e=window.location.search.substr(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null===e?null:unescape(e[2])},ParamString:function(){var t=window.location.href,e=window.location.search,n=e?t.split(e)[0].substring(t.split(e)[0].lastIndexOf("/")+1):t.split("/")[t.split("/").length-1];return~n.indexOf("#")?n.split("#")[0]:n},Storage:function(t){this.name=t.name,this.version=t.version,this.url=t.url,this.callback=t.callback,localStorage[this.name]&&localStorage[this.name+"_v"]===this.version?this.callback(JSON.parse(localStorage[this.name])):$.ajax({url:this.url,success:function(t){localStorage[this.name]=JSON.stringify(t),localStorage[this.name+"_v"]=this.version,this.callback(t)}.bind(this)})},getPage:function(t){var e=(t.react,t.reactDOMServer,t.req,t.main);return e},setRem:function(){document.documentElement.style.fontSize=window.innerWidth/16+"px"}};t.exports=n},function(t,e,n){var i=n(1),a=i.createClass({displayName:"Case",getInitialState:function(){return{index:this.props.index,href:this.props.href,backgroundImage:this.props.backgroundImage}},render:function(){return i.createElement("a",{href:this.state.href,style:{backgroundImage:"url("+this.state.backgroundImage+")"}})}}),r=i.createClass({displayName:"Banner",getInitialState:function(){return{index:0,data:this.props.data}},render:function(){var t=[],e=this.state.data;return e.forEach(function(e,n){t.push(i.createElement(a,{index:n,href:e.href,backgroundImage:e.imgSrc}))}),t.push(i.createElement(a,{index:0,href:e[0].href,backgroundImage:e[0].imgSrc})),i.createElement("header",null,i.createElement("div",{className:"container"},t))}});t.exports=r},,function(t,e,n){t.exports={Banner:n(3),Menu:n(8)}},,function(t,e,n){var i=n(1),a=n(2),r=n(5),s=r.Banner,c=r.Menu,o=i.createClass({displayName:"Page",render:function(){return i.createElement("body",null,i.createElement(s,{data:[{href:"/activity/1",imgSrc:"/images/banner/1.png"},{href:"/activity/2",imgSrc:"/images/banner/2.png"},{href:"/activity/3",imgSrc:"/images/banner/3.png"},{href:"/activity/4",imgSrc:"/images/banner/4.png"},{href:"/activity/5",imgSrc:"/images/banner/5.png"}]}),i.createElement(c,{currentIndex:0,type:1,option:[{href:"/",text:"首页"},{href:"/product",text:"理财产品"},{href:"/account",text:"我的账户"},{href:"/more",text:"更多"}]}))}}),l=function(){a.setRem(),i.render(i.createElement(o,null),document.body)};t.exports={main:o,init:l}},function(t,e,n){var i=n(1),a=i.createClass({displayName:"List1",getInitialState:function(){var t=this.props.option;return{currentIndex:t.currentIndex,index:t.index,href:t.href,text:t.text}},render:function(){var t=this.state;return i.createElement("a",{className:t.currentIndex===t.index?"current":"",href:t.href},i.createElement("i",null),i.createElement("span",null,t.text))}}),r=(i.createClass({displayName:"List2",getInitialState:function(){this.props.option;return{}},render:function(){}}),i.createClass({displayName:"List3",getInitialState:function(){},render:function(){}}),i.createClass({displayName:"MenuBar",getClassType:function(t){var e;switch(this.state.type){case 1:e="footer";break;case 2:e="menu_2col";break;case 3:e="menu_3col"}return e},getListType:function(t,e){var n;switch(this.state.type){case 1:n=i.createElement(a,{option:{currentIndex:this.state.currentIndex,index:e,href:t.href,text:t.text}});break;case 2:break;case 3:}return n},getInitialState:function(){return{currentIndex:this.props.currentIndex,type:this.props.type,option:this.props.option}},render:function(){var t=[],e=this.state.option;return e.forEach(function(e,n){t.push(this.getListType(e,n))}.bind(this)),i.createElement("menu",{className:this.getClassType()},t)}}));t.exports=r}]);